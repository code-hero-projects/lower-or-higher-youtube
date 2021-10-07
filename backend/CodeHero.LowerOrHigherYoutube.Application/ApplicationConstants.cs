using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYoutube.Application
{
    public static class ApplicationConstants
    {
        public const string YoutubeApiBaseUrl = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=";
    }
}
