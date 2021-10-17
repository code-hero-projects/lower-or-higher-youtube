﻿namespace CodeHero.LowerOrHigherYouTube.Core.Model
{
    public class Video : BaseModel
    {
        public int Id { get; set; }
        public string Channel { get; set; }
        public int Views { get; set; }
        public string Thumbnail { get; set; }
        public short CountryId { get; set; }
    }
}
