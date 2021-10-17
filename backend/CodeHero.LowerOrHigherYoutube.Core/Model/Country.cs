namespace CodeHero.LowerOrHigherYouTube.Core.Model
{
    public class Country : BaseModel
    {
        public short Id { get; set; }
        public string RegionCode { get; set; }
        public bool Updating { get; set; }
    }
}
