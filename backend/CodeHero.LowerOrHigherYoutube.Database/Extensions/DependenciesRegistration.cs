using CodeHero.LowerOrHigherYoutube.Core.Repositories;
using CodeHero.LowerOrHigherYoutube.Infrastructure.Database.Configuration;
using CodeHero.LowerOrHigherYoutube.Infrastructure.Database.Infrastructure;
using CodeHero.LowerOrHigherYoutube.Infrastructure.Database.Repositories;
using Microsoft.Azure.Cosmos;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYoutube.Infrastructure.Database.Extensions
{
    public static class DependenciesRegistration
    {
        public static IServiceCollection AddInfrastructureDependencies(this IServiceCollection services, IConfigurationSection configurationSection)
        {
            var databaseOptions = configurationSection.Get<DatabaseConnectionOptions>();
            services.AddSingleton(databaseOptions);

            switch (databaseOptions.Type)
            {
                case DatabaseType.CosmosDb:
                    AddCosmosDb(services, databaseOptions).Wait();
                    break;
                case DatabaseType.Undefined:
                default:
                    throw new System.ArgumentException("Database configuration is missing.");
            }

            services.AddScoped<ICountryRepository, CountryRepository>();
            services.AddScoped<IVideoRepository, VideoRepository>();

            return services;
        }

        private static async Task AddCosmosDb(IServiceCollection services, DatabaseConnectionOptions databaseOptions)
        {
            services.AddDbContext<DatabaseContext>(dbConfig => dbConfig.UseCosmos(databaseOptions.ConnectionString, databaseOptions.DatabaseName));

            var cosmosClient = new CosmosClient(databaseOptions.ConnectionString);
            var database = await cosmosClient.CreateDatabaseIfNotExistsAsync(databaseOptions.DatabaseName);
            await database.Database.CreateContainerIfNotExistsAsync(InfrastuctureConstants.CountriesContainerName, InfrastuctureConstants.PartitionKey);
            await database.Database.CreateContainerIfNotExistsAsync(InfrastuctureConstants.VideosContainerName, InfrastuctureConstants.PartitionKey);
        }
    }
}
