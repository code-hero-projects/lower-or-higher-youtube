using CodeHero.LowerOrHigherYoutube.Core.Model;
using CodeHero.LowerOrHigherYoutube.Infrastructure.Mappings;
using Microsoft.EntityFrameworkCore;

namespace CodeHero.LowerOrHigherYoutube.Infrastructure
{
    public class LowerOrHigherYouTubeContext : DbContext
    {
        public DbSet<Country> Countries { get; set; }
        public DbSet<Video> Videos { get; set; }

        public LowerOrHigherYouTubeContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new CountryMapping());
            modelBuilder.ApplyConfiguration(new VideoMapping());

            base.OnModelCreating(modelBuilder);
        }
    }
}
