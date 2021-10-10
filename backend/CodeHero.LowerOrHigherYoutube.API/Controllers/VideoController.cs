using CodeHero.LowerOrHigherYoutube.Core.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYoutube.API.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class VideoController : ControllerBase
    {
        private readonly IVideoService _videoService;

        public VideoController(IVideoService videoService)
        {
            _videoService = videoService;
        }

        [HttpGet]
        public async Task<ActionResult> ListAsync([FromQuery] int country)
        {
            var videoList = await _videoService.ListAsync(country);
            return Ok(videoList);
        }
    }
}
