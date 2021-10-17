using CodeHero.LowerOrHigherYouTube.Core.Services;
using CodeHero.LowerOrHigherYouTube.Core.Model;
using System.Collections.Generic;
using CodeHero.LowerOrHigherYouTube.Core.Repositories;
using System.Threading.Tasks;
using System.Threading;
using CodeHero.LowerOrHigherYouTube.Core.Configuration;

namespace CodeHero.LowerOrHigherYouTube.Application.Services
{
    public class VideoService : IVideoService
    {
        private readonly IVideoRepository _videoRepository;
        private readonly ICountryRepository _countryRepository;
        private readonly IVideoSupplier _videoSupplier;
        private readonly int _retryTime;

        public VideoService(IVideoRepository videoRepository, ICountryRepository countryRepository, IVideoSupplier videoSupplier, TimerOptions timerOptions)
        {
            _videoRepository = videoRepository;
            _countryRepository = countryRepository;
            _videoSupplier = videoSupplier;
            _retryTime = timerOptions.FetchCountryWhenUpdatingTimeoutInMilliSeconds;
        }

        public async Task<IEnumerable<Video>> ListAsync(int countryId)
        {
            var country = await WaitForCountry(countryId);
            var videos = await _videoRepository.FilterAsync(video => video.CountryId == countryId);
            return videos;
        }

        private async Task<Country> WaitForCountry(int countryId)
        {
            var country = await _countryRepository.GetAsync(country => country.Id == countryId);
            while (country.Updating)
            {
                Thread.Sleep(_retryTime);
                country = await _countryRepository.GetAsync(country => country.Id == countryId);
            }
            return country;
        }
    }
}
