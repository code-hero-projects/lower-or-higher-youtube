namespace CodeHero.LowerOrHigherYoutube.Infrastructure.Database.Configuration
{
    public class DatabaseConnectionOptions
    {
        public DatabaseType Type { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
