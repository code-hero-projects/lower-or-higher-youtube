using System;

namespace CodeHero.LowerOrHigherYouTube.Infrastructure.Database.Configuration
{
    public class DatabaseConnectionOptions
    {
        public DatabaseType Type { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
        public string SeedDataBasePath { get; set; }
        public TimeSpan InitializeRetryDelay { get; set; } = TimeSpan.FromMinutes(0.1);
    }
}
