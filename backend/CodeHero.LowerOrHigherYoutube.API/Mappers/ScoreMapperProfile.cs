using AutoMapper;
using CodeHero.LowerOrHigherYouTube.API.Requests;
using CodeHero.LowerOrHigherYouTube.API.Responses;
using CodeHero.LowerOrHigherYouTube.Core.Model;

namespace CodeHero.LowerOrHigherYouTube.API.Mappers
{
    public class ScoreMapperProfile : Profile
    {
        public ScoreMapperProfile()
        {
            CreateMap<Score, ScoreResponse>();
            CreateMap<CreateScoreRequest, Score>();
        }
    }
}
