using AutoMapper;
using CodeHero.LowerOrHigherYouTube.API.Responses;
using CodeHero.LowerOrHigherYouTube.Core.Model;

namespace CodeHero.LowerOrHigherYouTube.API.Mappers
{
    public class VideoMapperProfile : Profile
    {
        public VideoMapperProfile() => CreateMap<Video, VideoResponse>();
    }
}
