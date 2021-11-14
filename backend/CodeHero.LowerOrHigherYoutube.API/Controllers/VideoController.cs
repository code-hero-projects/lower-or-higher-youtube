using CodeHero.LowerOrHigherYouTube.Core.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Linq;
using AutoMapper;
using CodeHero.LowerOrHigherYouTube.API.Responses;
using System.Collections.Generic;
using System.Threading;

namespace CodeHero.LowerOrHigherYouTube.API.Controllers
{
    [ApiController]
    [Route("api/v1/country/")]
    public class VideoController : ControllerBase
    {
        private readonly IVideoService _videoService;
        private readonly IMapper _mapper;

        public VideoController(IVideoService videoService, IMapper mapper)
        {
            _videoService = videoService;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("{countryId}/video")]
        public async Task<IEnumerable<VideoResponse>> ListAsync(int countryId)
        {
            Thread.Sleep(2000);
            var videos = await _videoService.ListAsync(countryId);
            var videosResponse = videos.Select(video => _mapper.Map<VideoResponse>(video));
            return videosResponse;
        }
    }
}
