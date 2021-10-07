using CodeHero.LowerOrHigherYoutube.Core.Model;
using CodeHero.LowerOrHigherYoutube.Core.Repositories;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYoutube.API.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class CountryController : ControllerBase
    {
        private readonly ICountryRepository _countryRepository;

        public CountryController(ICountryRepository countryRepository)
        {
            _countryRepository = countryRepository;
        }

        [HttpGet]
        public async Task<ActionResult> List()
        {
            await _countryRepository.AddAsync(new Country()
            {
                Id = "1",
                Name = "something",
                RegionCode = "en-GB",
                LastFetched = System.DateTime.Now
            });

            await _countryRepository.SaveChangesAsync();
            return Accepted();
        }
    }
}
