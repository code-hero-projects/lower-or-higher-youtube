using CodeHero.LowerOrHigherYouTube.Core.Model;
using Microsoft.EntityFrameworkCore;

namespace CodeHero.LowerOrHigherYouTube.Database.Mappings
{
    public class EntitiesConfiguration
    {
        private readonly IEntityTypeConfiguration<Country> _countryConfiguration;
        private readonly IEntityTypeConfiguration<Video> _videoConfiguration;
        private readonly IEntityTypeConfiguration<Score> _scoreConfiguration;

        public EntitiesConfiguration(IEntityTypeConfiguration<Country> countryConfiguration, IEntityTypeConfiguration<Video> videoConfiguration, IEntityTypeConfiguration<Score> scoreConfiguration)
        {
            _countryConfiguration = countryConfiguration;
            _videoConfiguration = videoConfiguration;
            _scoreConfiguration = scoreConfiguration;
        }

        public void ApplyConfiguration(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(_countryConfiguration);
            modelBuilder.ApplyConfiguration(_videoConfiguration);
            modelBuilder.ApplyConfiguration(_scoreConfiguration);
        }
    }
}
