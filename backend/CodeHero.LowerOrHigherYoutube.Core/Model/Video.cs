namespace CodeHero.LowerOrHigherYoutube.Core.Model
{
    public class Video : BaseModel
    {
        public string Channel { get; set; }
        public int Views { get; set; }
        public string Thumbnail { get; set; }
        public int CountryId { get; set; }
    }
}
