using System;

namespace CodeHero.LowerOrHigherYoutube.Core.Model
{
    public class Country : BaseModel
    {
        public string RegionCode { get; set; }
        public DateTime LastFetched { get; set; }
    }
}
