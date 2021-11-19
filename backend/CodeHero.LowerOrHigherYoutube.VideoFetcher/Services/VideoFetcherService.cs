using CodeHero.LowerOrHigherYouTube.Core.Model;
using CodeHero.LowerOrHigherYouTube.Core.Repositories;
using CodeHero.LowerOrHigherYouTube.Core.Services;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYouTube.VideoRenewal.Services
{
    public class VideoFetcherService : IVideoFetcher
    {
        private readonly ICountryRepository _countryRepository;
        private readonly IVideoRepository _videoRepository;
        private readonly IVideoSupplier _videoSupplier;
        private readonly ILogger<VideoFetcherService> _logger;

        public VideoFetcherService(ICountryRepository countryRepository, IVideoRepository videoRepository, IVideoSupplier videoSupplier, ILogger<VideoFetcherService> logger)
        {
            _countryRepository = countryRepository;
            _videoRepository = videoRepository;
            _videoSupplier = videoSupplier;
            _logger = logger;
        }

        public async Task RenewVideos()
        {
            var countries = await _countryRepository.ListAsync();

            foreach (var country in countries)
            {
                _logger.LogInformation("Fetching videos for country {0} with id {1}", country.Name, country.Id);
                var videos = await _videoRepository.FilterAsync(video => video.CountryId == country.Id);
                await UpdateCountry(country, true);
                DeleteOldVideos(videos);
                var newVideos = await _videoSupplier.Fetch(country);
                await AddVideos(newVideos);
                await UpdateCountry(country, false);
            }

            _logger.LogInformation("Finished fecthing videos");
        }

        private async Task UpdateCountry(Country country, bool updating)
        {
            country.Updating = updating;
            _countryRepository.Update(country);
            await _countryRepository.SaveChangesAsync();
        }

        private void DeleteOldVideos(IEnumerable<Video> videos)
        {
            foreach (var video in videos)
            {
                _videoRepository.Delete(video);
            }
        }

        private async Task AddVideos(IEnumerable<Video> videos)
        {
            foreach (var video in videos)
            {
                await _videoRepository.AddAsync(video);
            }
        }
    }
}
