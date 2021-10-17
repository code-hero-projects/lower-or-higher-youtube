namespace CodeHero.LowerOrHigherYouTube.Infrastructure.Database.Infrastructure
{
    public static class InfrastuctureConstants
    {
        public const string CountriesContainerName = "Countries";

        public const string VideosContainerName = "Videos";

        public const string PartitionKey = "/Name";

        public const string CountrySeedDataFile = "../CodeHero.LowerOrHigherYouTube.Database/Data/Country.json";
    }
}
