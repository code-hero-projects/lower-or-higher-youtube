using CodeHero.LowerOrHigherYoutube.Core.Model;
using CodeHero.LowerOrHigherYoutube.Database.Mappings.PostgreSql;
using CodeHero.LowerOrHigherYoutube.Infrastructure.Database.Configuration;
using CodeHero.LowerOrHigherYoutube.Infrastructure.Database.Mappings;
using Microsoft.EntityFrameworkCore;

namespace CodeHero.LowerOrHigherYoutube.Database.Mappings
{
    public static class ModelBuilderExtension
    {
        public static void ApplyMapping(this ModelBuilder modelBuilder, DatabaseConnectionOptions databaseOptions)
        {
            switch(databaseOptions.Type)
            {
                case DatabaseType.CosmosDb:
                    MappingConfiguration(modelBuilder, new CosmosDbCountryMapping(), new CosmosDbVideoMapping());
                    break;
                case DatabaseType.PostgreSql:
                    MappingConfiguration(modelBuilder, new PostgreSqlCountryMapping(), new PostgreSqlVideoMapping());
                    break;
                case DatabaseType.Undefined:
                default:
                    throw new System.ArgumentException("Database configuration is missing.");
            }
        }

        private static void MappingConfiguration(ModelBuilder modelBuilder, IEntityTypeConfiguration<Country> contryConfiguration, IEntityTypeConfiguration<Video> videoConfiguration)
        {
            modelBuilder.ApplyConfiguration(contryConfiguration);
            modelBuilder.ApplyConfiguration(videoConfiguration);
        }
    }
}
