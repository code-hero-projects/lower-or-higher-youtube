using CodeHero.LowerOrHigherYoutube.Core.Repositories;
using CodeHero.LowerOrHigherYoutube.Infrastructure.Configuration;
using CodeHero.LowerOrHigherYoutube.Infrastructure.Repositories;
using Microsoft.Azure.Cosmos;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYoutube.Infrastructure.Extensions
{
    public static class DependenciesRegistration
    {
        public static IServiceCollection AddInfrastructureDependencies(this IServiceCollection services, IConfigurationSection databaseConfiguration)
        {
            var databaseConnectionOptions = databaseConfiguration.Get<DatabaseConnectionOptions>();

            switch (databaseConnectionOptions.Type)
            {
                case DatabaseType.CosmosDb:
                    AddCosmosDb(services, databaseConfiguration).Wait();
                    break;
                case DatabaseType.Undefined:
                default:
                    throw new System.ArgumentException("Database configuration is missing.");
            }

            services.AddScoped<ICountryRepository, CountryRepository>();
            services.AddScoped<IVideoRepository, VideoRepository>();

            return services;
        }

        private static async Task AddCosmosDb(IServiceCollection services, IConfigurationSection databaseConfiguration)
        {
            var cosmosDbOptions = databaseConfiguration.Get<CosmosDbConnectionOptions>();

            services.AddDbContext<DatabaseContext>(dbConfig => dbConfig.UseCosmos(cosmosDbOptions.ConnectionString, cosmosDbOptions.DatabaseName));

            var cosmosClient = new CosmosClient(cosmosDbOptions.ConnectionString);
            var database = await cosmosClient.CreateDatabaseIfNotExistsAsync(cosmosDbOptions.DatabaseName);
            await database.Database.CreateContainerIfNotExistsAsync(InfrastuctureConstants.CountriesContainerName, InfrastuctureConstants.PartitionKey);
            await database.Database.CreateContainerIfNotExistsAsync(InfrastuctureConstants.VideosContainerName, InfrastuctureConstants.PartitionKey);
        }
    }
}
