using CodeHero.LowerOrHigherYoutube.Core.Model;
using Microsoft.EntityFrameworkCore;

namespace CodeHero.LowerOrHigherYoutube.Database.Mappings
{
    public class EntitiesConfiguration
    {
        private readonly IEntityTypeConfiguration<Country> _countryConfiguration;
        private readonly IEntityTypeConfiguration<Video> _videoConfiguration;

        public EntitiesConfiguration(IEntityTypeConfiguration<Country> countryConfiguration, IEntityTypeConfiguration<Video> videoConfiguration)
        {
            _countryConfiguration = countryConfiguration;
            _videoConfiguration = videoConfiguration;
        }

        public void ApplyConfiguration(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(_countryConfiguration);
            modelBuilder.ApplyConfiguration(_videoConfiguration);
        }
    }
}
