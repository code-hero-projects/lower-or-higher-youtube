using CodeHero.LowerOrHigherYoutube.Core.Services;
using CodeHero.LowerOrHigherYoutube.Core.Model;
using System.Collections.Generic;
using CodeHero.LowerOrHigherYoutube.Core.Repositories;
using CodeHero.LowerOrHigherYoutube.Application.Configuration;
using System.Threading.Tasks;
using System.Linq;
using System.Net.Http;
using Newtonsoft.Json;
using CodeHero.LowerOrHigherYoutube.Application.Services.YouTubeApiResponse;

namespace CodeHero.LowerOrHigherYoutube.Application.Services
{
    public class VideoService : IVideoService
    {
        private readonly IVideoRepository _videoRepository;
        private readonly ICountryRepository _countryRepository;
        private readonly string _url;

        public VideoService(IVideoRepository videoRepository, ICountryRepository countryRepository, YouTubeOptions youtubeOptions)
        {
            _videoRepository = videoRepository;
            _countryRepository = countryRepository;
            _url = youtubeOptions.ApiUrl.Replace(ApplicationConstants.ApiKeyVariable, youtubeOptions.ApiKey);
        }

        public async Task<IEnumerable<Video>> ListAsync(int countryId)
        {
            var country = await WaitForCountry(countryId);
            var videos = await _videoRepository.FilterAsync(video => video.CountryId == countryId);

            if (videos.Count() == 0)
            {
                var newVideos = await FetchNewVideos(country.RegionCode, countryId);
                foreach (var video in newVideos)
                {
                    await _videoRepository.AddAsync(video);
                }
                await _videoRepository.SaveChangesAsync();
                videos = newVideos;
            }

            return videos;
        }

        // TODO: maybe try to work out something better
        // TODO: use retry policy
        private async Task<Country> WaitForCountry(int countryId)
        {
            var country = await _countryRepository.GetAsync(country => country.Id == countryId);
            while (country.Updating)
            {
                country = await _countryRepository.GetAsync(country => country.Id == countryId);
            }
            return country;
        }

        private async Task<IEnumerable<Video>> FetchNewVideos(string countryRegionCode, int countryId)
        {
            var url = _url.Replace(ApplicationConstants.RegionCodeVariable, countryRegionCode);
            var httpClient = new HttpClient();
            var response = await httpClient.GetAsync(url);
            var result = await response.Content.ReadAsStringAsync();
            var youTubeApiResponse = JsonConvert.DeserializeObject<YouTubeResponse>(result);
            return youTubeApiResponse.Items.Select(item => new Video()
            {
                Name = item.Snippet.Title,
                Channel = item.Snippet.ChannelTitle,
                Thumbnail = item.Snippet.Thumbnails.Maxres.Url,
                Views = int.Parse(item.Statistics.ViewCount),
                CountryId = countryId
            });
        }
    }
}
