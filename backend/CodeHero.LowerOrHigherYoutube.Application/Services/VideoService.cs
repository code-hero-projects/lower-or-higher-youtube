using CodeHero.LowerOrHigherYoutube.Core.Services;
using CodeHero.LowerOrHigherYoutube.Core.Model;
using System.Collections.Generic;
using CodeHero.LowerOrHigherYoutube.Core.Repositories;
using System.Threading.Tasks;
using System.Linq;
using System.Threading;
using CodeHero.LowerOrHigherYoutube.Core.Configuration;

namespace CodeHero.LowerOrHigherYoutube.Application.Services
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

            if (videos.Count() == 0)
            {
                var newVideos = await _videoSupplier.Fetch(country);
                foreach (var video in newVideos)
                {
                    await _videoRepository.AddAsync(video);
                }
                await _videoRepository.SaveChangesAsync();
                videos = newVideos;
            }

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
