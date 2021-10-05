using CodeHero.LowerOrHigherYoutube.Core.Model;
using System.Collections.Generic;

namespace CodeHero.LowerOrHigherYoutube.Core.Services
{
    public interface IVideoService
    {
        IEnumerable<Video> GetVideos(string regionCode);
    }
}
