using AutoMapper;
using CodeHero.LowerOrHigherYoutube.API.Responses;
using CodeHero.LowerOrHigherYoutube.Core.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Linq;

namespace CodeHero.LowerOrHigherYoutube.API.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class CountryController : ControllerBase
    {
        private readonly ICountryService _countryService;
        private readonly IMapper _mapper;

        public CountryController(ICountryService countryService, IMapper mapper)
        {
            _countryService = countryService;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult> ListAsync()
        {
            var countries = await _countryService.ListAsync();
            var countriesResponse = countries.Select(country => _mapper.Map<CountryResponse>(country));
            return Ok(countriesResponse);
        }
    }
}
