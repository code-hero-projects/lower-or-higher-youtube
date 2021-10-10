namespace CodeHero.LowerOrHigherYoutube.Infrastructure.Database.Infrastructure
{
    public static class InfrastuctureConstants
    {
        public const string CountriesContainerName = "Countries";

        public const string VideosContainerName = "Videos";

        public const string PartitionKey = "/Name";

        public const string CountrySeedDataFile = "../CodeHero.LowerOrHigherYoutube.Database/Data/Country.json";

        public const string VideoSeedDataFile = "../CodeHero.LowerOrHigherYoutube.Database/Data/Video.json";
    }
}
