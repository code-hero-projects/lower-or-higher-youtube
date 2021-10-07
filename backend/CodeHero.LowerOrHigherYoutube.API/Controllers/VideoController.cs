using Microsoft.AspNetCore.Mvc;

namespace CodeHero.LowerOrHigherYoutube.API.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class VideoController : ControllerBase
    {
        [HttpGet]
        public ActionResult List()
        {
            return Accepted();
        }
    }
}
