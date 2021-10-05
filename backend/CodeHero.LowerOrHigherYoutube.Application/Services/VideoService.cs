using CodeHero.LowerOrHigherYoutube.Core.Services;
using CodeHero.LowerOrHigherYoutube.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYoutube.Application.Services
{
    public class VideoService : IVideoService
    {
        private readonly string _url;
        private const string BaseUrl = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=";

        public VideoService(string youTubeApiKey)
        {
            _url = BaseUrl + youTubeApiKey;
        }

        public IEnumerable<Video> GetVideos(string regionCode)
        {
            throw new NotImplementedException();
        }
    }
}
