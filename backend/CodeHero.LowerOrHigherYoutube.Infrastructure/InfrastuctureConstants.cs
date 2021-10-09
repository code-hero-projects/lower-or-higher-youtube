namespace CodeHero.LowerOrHigherYoutube.Infrastructure
{
    public static class InfrastuctureConstants
    {
        public const string CountriesContainerName = "Countries";

        public const string VideosContainerName = "Videos";

        public const string PartitionKey = "/Id";

        public const string CountrySeedDataFile = "../CodeHero.LowerOrHigherYoutube.Infrastructure/Data/Country.json";

        public const string VideoSeedDataFile = "../CodeHero.LowerOrHigherYoutube.Infrastructure/Data/Video.json";
    }
}
