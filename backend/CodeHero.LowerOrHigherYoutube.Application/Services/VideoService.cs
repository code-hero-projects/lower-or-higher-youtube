using CodeHero.LowerOrHigherYoutube.Core.Services;
using CodeHero.LowerOrHigherYoutube.Core.Model;
using System;
using System.Collections.Generic;
using CodeHero.LowerOrHigherYoutube.Core.Repositories;
using CodeHero.LowerOrHigherYoutube.Application.Configuration;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYoutube.Application.Services
{
    public class VideoService : IVideoService
    {
        private readonly IVideoRepository _videoRepository;
        private readonly string _url;

        public VideoService(IVideoRepository videoRepository, YouTubeOptions youtubeOptions)
        {
            _videoRepository = videoRepository;
            _url = youtubeOptions.ApiUrl + youtubeOptions.ApiKey;
        }

        public async Task<IEnumerable<Video>> ListAsync(string country)
        {
            return await _videoRepository.FilterAsync(video => video.CountryId.Equals(country));
        }
    }
}
