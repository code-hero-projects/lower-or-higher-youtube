namespace CodeHero.LowerOrHigherYoutube.Core.Model
{
    public class Video : BaseModel
    {
        public string Channel { get; set; }
        public string Views { get; set; }
        public string Thumbnail { get; set; }
        public string CountryId { get; set; }
    }
}
