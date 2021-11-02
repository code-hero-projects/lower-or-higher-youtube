namespace CodeHero.LowerOrHigherYouTube.API.Requests
{
    public class CreateScoreRequest
    {
        public int Points { get; set; }
        public string PlayerName { get; set; }
        public short CountryId { get; set; }
    }
}
