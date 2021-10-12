using CodeHero.LowerOrHigherYoutube.Core.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYoutube.API.Controllers
{
    [ApiController]
    [Route("api/v1/country/")]
    public class VideoController : ControllerBase
    {
        private readonly IVideoService _videoService;

        public VideoController(IVideoService videoService)
        {
            _videoService = videoService;
        }

        [HttpGet]
        [Route("{countryId}/video")]
        public async Task<ActionResult> ListAsync(int countryId)
        {
            var videoList = await _videoService.ListAsync(countryId);
            return Ok(videoList);
        }
    }
}
