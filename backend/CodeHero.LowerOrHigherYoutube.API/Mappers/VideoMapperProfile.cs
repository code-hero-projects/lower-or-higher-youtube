using AutoMapper;
using CodeHero.LowerOrHigherYoutube.API.Responses;
using CodeHero.LowerOrHigherYoutube.Core.Model;

namespace CodeHero.LowerOrHigherYoutube.API.Mappers
{
    public class VideoMapperProfile : Profile
    {
        public VideoMapperProfile()
        {
            CreateMap<Video, VideoResponse>();
        }
    }
}
