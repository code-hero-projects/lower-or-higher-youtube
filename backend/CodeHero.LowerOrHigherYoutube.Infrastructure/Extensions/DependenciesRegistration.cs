using CodeHero.LowerOrHigherYoutube.Core.Repositories;
using CodeHero.LowerOrHigherYoutube.Infrastructure.Configuration;
using CodeHero.LowerOrHigherYoutube.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

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
                    AddCosmosDb(services, databaseConfiguration);
                    break;
                case DatabaseType.Undefined:
                default:
                    throw new System.ArgumentException("Database configuration is missing.");
            }

            services.AddScoped<ICountryRepository, CountryRepository>();
            services.AddScoped<IVideoRepository, VideoRepository>();

            return services;
        }

        private static void AddCosmosDb(IServiceCollection services, IConfigurationSection databaseConfiguration)
        {
            var cosmosDbOptions = databaseConfiguration.Get<CosmosDbConnectionOptions>();

            services.AddDbContext<DatabaseContext>(dbConfig => dbConfig.UseCosmos(cosmosDbOptions.Account, cosmosDbOptions.Key, cosmosDbOptions.DatabaseName));
        }
    }
}
