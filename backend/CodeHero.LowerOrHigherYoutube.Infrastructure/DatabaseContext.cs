using CodeHero.LowerOrHigherYoutube.Core.Model;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.IO;
using System.Reflection;

namespace CodeHero.LowerOrHigherYoutube.Infrastructure
{
    public class DatabaseContext : DbContext
    {
        public DbSet<Country> Countries { get; set; }
        public DbSet<Video> Videos { get; set; }

        public DatabaseContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
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
