using CodeHero.LowerOrHigherYouTube.Core.Model;
using CodeHero.LowerOrHigherYouTube.Core.Repositories;
using CodeHero.LowerOrHigherYouTube.Core.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYouTube.VideoRenewal
{
    public class VideoRenewal
    {
        private readonly ICountryRepository _countryRepository;
        private readonly IVideoRepository _videoRepository;
        private readonly IVideoSupplier _videoSupplier;

        public VideoRenewal(ICountryRepository countryRepository, IVideoRepository videoRepository, IVideoSupplier videoSupplier)
        {
            _countryRepository = countryRepository;
            _videoRepository = videoRepository;
            _videoSupplier = videoSupplier;
        }

        public async Task RenewVideos()
        {
            var countries = await _countryRepository.ListAsync();
            
            foreach (var country in countries)
            {
                var videos = await _videoRepository.FilterAsync(video => video.CountryId == country.Id);
                await UpdateCountry(country, true);
                DeleteOldVideos(videos);
                var newVideos = await _videoSupplier.Fetch(country);
                await AddVideos(newVideos);
                await UpdateCountry(country, false);
            }
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
