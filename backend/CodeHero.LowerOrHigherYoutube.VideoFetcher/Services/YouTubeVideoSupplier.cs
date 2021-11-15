using CodeHero.LowerOrHigherYouTube.Core.Model;
using CodeHero.LowerOrHigherYouTube.Core.Services;
using CodeHero.LowerOrHigherYouTube.VideoRenewal.Configuration;
using CodeHero.LowerOrHigherYouTube.VideoRenewal.Services.YouTubeApiResponse;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYouTube.VideoRenewal.Services
{
    public class YouTubeVideoSupplier : IVideoSupplier
    {
        private readonly string _url;
        private readonly ILogger<YouTubeVideoSupplier> _logger;

        public YouTubeVideoSupplier(YouTubeOptions youTubeOptions, ILogger<YouTubeVideoSupplier> logger)
        {
            _url = GetUrl(youTubeOptions);
            _logger = logger;
        }

        public async Task<IEnumerable<Video>> Fetch(Country country)
        {
            var url = _url.Replace(VideoFetcherConstants.RegionCodeVariable, country.RegionCode);
            var httpClient = new HttpClient();
            var response = await httpClient.GetAsync(url);

            if (response.StatusCode == HttpStatusCode.OK)
            {
                return await MapVideos(response, country.Id);
            }
            else
            {
                _logger.LogError("Fetching videos for {0}, {1}, {2}", country.Name, country.RegionCode, country.Id);
                return new List<Video>();
            }
        }

        private async Task<IEnumerable<Video>> MapVideos(HttpResponseMessage response, short countryId)
        {
            var result = await response.Content.ReadAsStringAsync();
            var youTubeApiResponse = JsonConvert.DeserializeObject<YouTubeResponse>(result);
            return youTubeApiResponse.Items
                .Where(item => item.Statistics.ViewCount != null)
                .Select(item =>
                {
                    var views = int.Parse(item.Statistics.ViewCount);
                    var thumbnail = GetThumbnail(item.Snippet.Thumbnails);

                    return new Video()
                    {
                        Name = item.Snippet.Title,
                        Channel = item.Snippet.ChannelTitle,
                        Thumbnail = thumbnail,
                        Views = views,
                        CountryId = countryId
                    };
                });
        }

        private static string GetThumbnail(Thumbnails thumbnails)
        {
            var thumbnailList = new List<ThumbnailInfo>()
            {
                thumbnails.Maxres,
                thumbnails.Standard,
                thumbnails.High,
                thumbnails.Medium,
                thumbnails.Default
            };

            return thumbnailList.Find(thumbnail => thumbnail != null).Url;
        }

        private string GetUrl(YouTubeOptions youTubeOptions) => youTubeOptions.ApiUrl
                .Replace(VideoFetcherConstants.NumberOfVideosVariable, youTubeOptions.NumberOfVideos)
                .Replace(VideoFetcherConstants.ApiKeyVariable, youTubeOptions.ApiKey);
    }
}
