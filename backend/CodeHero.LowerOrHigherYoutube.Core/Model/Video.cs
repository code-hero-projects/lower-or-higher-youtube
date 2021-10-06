namespace CodeHero.LowerOrHigherYoutube.Core.Model
{
    public class Video : BaseModel
    {
        public string SecondaryId { get; set; }
        public string Views { get; set; }
        public string Thumbnail { get; set; }
        public int CountryId { get; set; }
    }
}
