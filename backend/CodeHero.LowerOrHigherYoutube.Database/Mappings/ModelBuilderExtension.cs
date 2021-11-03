using CodeHero.LowerOrHigherYouTube.Core.Model;
using CodeHero.LowerOrHigherYouTube.Database.Mappings.PostgreSql;
using CodeHero.LowerOrHigherYouTube.Infrastructure.Database.Configuration;
using CodeHero.LowerOrHigherYouTube.Infrastructure.Database.Mappings;
using Microsoft.EntityFrameworkCore;

namespace CodeHero.LowerOrHigherYouTube.Database.Mappings
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
