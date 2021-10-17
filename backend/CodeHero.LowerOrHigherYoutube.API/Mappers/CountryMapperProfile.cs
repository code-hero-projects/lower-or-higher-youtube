using AutoMapper;
using CodeHero.LowerOrHigherYouTube.API.Responses;
using CodeHero.LowerOrHigherYouTube.Core.Model;

namespace CodeHero.LowerOrHigherYouTube.API.Mappers
{
    public class CountryMapperProfile : Profile
    {
        public CountryMapperProfile() => CreateMap<Country, CountryResponse>();
    }
}
