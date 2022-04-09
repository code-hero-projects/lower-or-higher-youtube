using CodeHero.LowerOrHigherYouTube.Core.Model;
using CodeHero.LowerOrHigherYouTube.Core.Repositories;
using CodeHero.LowerOrHigherYouTube.Database.Mappings;
using CodeHero.LowerOrHigherYouTube.Database.Mappings.PostgreSql;
using CodeHero.LowerOrHigherYouTube.Infrastructure.Database.Configuration;
using CodeHero.LowerOrHigherYouTube.Infrastructure.Database.Infrastructure;
using CodeHero.LowerOrHigherYouTube.Infrastructure.Database.Mappings;
using CodeHero.LowerOrHigherYouTube.Infrastructure.Database.Repositories;
using Microsoft.Azure.Cosmos;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYouTube.Infrastructure.Database.Extensions
{
    public static class DependenciesRegistration
    {
        private const string PostgreSqlAssembly = "CodeHero.LowerOrHigherYouTube.Migrations.PostgreSql";

        public static IServiceCollection AddInfrastructureDependencies(this IServiceCollection services, IConfigurationSection configurationSection)
        {
            var databaseOptions = configurationSection.Get<DatabaseConnectionOptions>();

            switch (databaseOptions.Type)
            {
                case DatabaseType.CosmosDb:
                    AddCosmosDb(services, databaseOptions).Wait();
                    break;
                case DatabaseType.PostgreSql:
                    AddPostgreSql(services, databaseOptions);
                    break;
                case DatabaseType.Undefined:
                default:
                    throw new System.ArgumentException("Database configuration is missing.");
            }

            services
                .AddSingleton(databaseOptions)
                .AddSingleton<EntitiesConfiguration>()
                .AddScoped<ICountryRepository, CountryRepository>()
                .AddScoped<IVideoRepository, VideoRepository>();

            return services;
        }

        private static async Task AddCosmosDb(IServiceCollection services, DatabaseConnectionOptions databaseOptions)
        {
            services
                .AddSingleton<IEntityTypeConfiguration<Country>, CosmosDbCountryMapping>()
                .AddSingleton<IEntityTypeConfiguration<Video>, CosmosDbVideoMapping>()
                .AddDbContext<DatabaseContext>(dbConfig => dbConfig.UseCosmos(databaseOptions.ConnectionString, databaseOptions.DatabaseName));

            var cosmosClient = new CosmosClient(databaseOptions.ConnectionString);
            var database = await cosmosClient.CreateDatabaseIfNotExistsAsync(databaseOptions.DatabaseName);
            await database.Database.CreateContainerIfNotExistsAsync(InfrastuctureConstants.CountriesContainerName, InfrastuctureConstants.PartitionKey);
            await database.Database.CreateContainerIfNotExistsAsync(InfrastuctureConstants.VideosContainerName, InfrastuctureConstants.PartitionKey);
        }

        private static void AddPostgreSql(IServiceCollection services, DatabaseConnectionOptions databaseOptions)
        {
            services
                .AddSingleton<IEntityTypeConfiguration<Country>, PostgreSqlCountryMapping>()
                .AddSingleton<IEntityTypeConfiguration<Video>, PostgreSqlVideoMapping>()
                .AddDbContext<DatabaseContext>(dbConfig => dbConfig.UseNpgsql(databaseOptions.ConnectionString, x => x.MigrationsAssembly(PostgreSqlAssembly)));
        }
    }
}
