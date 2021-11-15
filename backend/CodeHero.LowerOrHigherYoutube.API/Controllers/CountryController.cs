using AutoMapper;
using CodeHero.LowerOrHigherYouTube.API.Responses;
using CodeHero.LowerOrHigherYouTube.Core.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYouTube.API.Controllers
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
        public async Task<IEnumerable<CountryResponse>> ListAsync()
        {
            var countries = await _countryService.ListAsync();
            var countriesResponse = countries.Select(country => _mapper.Map<CountryResponse>(country));
            return countriesResponse;
        }
    }
}
