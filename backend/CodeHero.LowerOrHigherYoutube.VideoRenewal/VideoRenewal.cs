﻿using CodeHero.LowerOrHigherYoutube.Core.Model;
using CodeHero.LowerOrHigherYoutube.Core.Repositories;
using CodeHero.LowerOrHigherYoutube.Core.Services;
using CodeHero.LowerOrHigherYoutube.VideoRenewal;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYoutube.VideoFetcher
{
    public class VideoRenewal : IVideoRenewal
    {
        private readonly ICountryRepository _countryRepository;
        private readonly IVideoRepository _videoRepository;
        private readonly IVideoSupplier _videoSuppluer;

        public VideoRenewal(ICountryRepository countryRepository, IVideoRepository videoRepository, IVideoSupplier videoSuppluer)
        {
            _countryRepository = countryRepository;
            _videoRepository = videoRepository;
            _videoSuppluer = videoSuppluer;
        }

        public async Task RenewVideos()
        {
            var countries = await _countryRepository.ListAsync();
            
            foreach (var country in countries)
            {
                var videos = await _videoRepository.FilterAsync(video => video.CountryId == country.Id);
                if (videos.Any())
                {
                    await UpdateCountry(country, true);
                    DeleteOldVideos(videos);
                    var newVideos = await _videoSuppluer.Fetch(country);
                    await AddVideos(newVideos);
                    await UpdateCountry(country, false);
                }
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
