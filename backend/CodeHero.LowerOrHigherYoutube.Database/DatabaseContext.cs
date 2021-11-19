using CodeHero.LowerOrHigherYouTube.Core.Model;
using CodeHero.LowerOrHigherYouTube.Database.Mappings;
using CodeHero.LowerOrHigherYouTube.Infrastructure.Database.Configuration;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYouTube.Infrastructure.Database.Infrastructure
{
    public class DatabaseContext : DbContext
    {
        public DbSet<Country> Countries { get; set; }
        public DbSet<Video> Videos { get; set; }
        private readonly EntitiesConfiguration _entitiesConfiguration;
        private readonly DatabaseConnectionOptions _databaseConnectionOptions;

        public DatabaseContext(EntitiesConfiguration entitiesConfiguration, DbContextOptions options, DatabaseConnectionOptions databaseConncetionOptions) : base(options)
        {
            _entitiesConfiguration = entitiesConfiguration;
            _databaseConnectionOptions = databaseConncetionOptions;
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            _entitiesConfiguration.ApplyConfiguration(modelBuilder);
        }

        public void SeedData() => SeedDataFromFile(Countries, _databaseConnectionOptions.SeedDataBasePath + InfrastuctureConstants.CountrySeedDataFile);

        private void SeedDataFromFile<T>(DbSet<T> dbSet, string file) where T : class
        {
            var allItems = dbSet.AsNoTracking().ToList();
            foreach(var item in allItems)
            {
                dbSet.Remove(item);
            }
            SaveChanges();

            using var reader = new StreamReader(file);
            var json = reader.ReadToEnd();
            var data = JsonConvert.DeserializeObject<T[]>(json);
            foreach (var item in data)
            {
                dbSet.Add(item);
            }
            SaveChanges();
        }
    }
}
