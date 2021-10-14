using System.Collections.Generic;

namespace CodeHero.LowerOrHigherYoutube.Core.Model
{
    public class Country : BaseModel
    {
        public short Id { get; set; }
        public string RegionCode { get; set; }
        public bool Updating { get; set; }
    }
}
