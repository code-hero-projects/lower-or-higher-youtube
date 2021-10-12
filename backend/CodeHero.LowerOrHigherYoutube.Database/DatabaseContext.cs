using CodeHero.LowerOrHigherYoutube.Core.Model;
using CodeHero.LowerOrHigherYoutube.Database.Mappings;
using CodeHero.LowerOrHigherYoutube.Infrastructure.Database.Configuration;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.IO;
using System.Reflection;

namespace CodeHero.LowerOrHigherYoutube.Infrastructure.Database.Infrastructure
{
    public class DatabaseContext : DbContext
    {
        public DbSet<Country> Countries { get; set; }
        public DbSet<Video> Videos { get; set; }
        private readonly EntitiesConfiguration _entitiesConfiguration;

        public DatabaseContext(EntitiesConfiguration entitiesConfiguration, DbContextOptions options) : base(options)
        {
            _entitiesConfiguration = entitiesConfiguration;
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            _entitiesConfiguration.ApplyConfiguration(modelBuilder);
        }

        public void SeedData()
        {
            SeedDataFromFile(Countries, InfrastuctureConstants.CountrySeedDataFile);
            SeedDataFromFile(Videos, InfrastuctureConstants.VideoSeedDataFile);
        }

        private void SeedDataFromFile<T>(DbSet<T> dbSet, string file) where T : class
        {
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
