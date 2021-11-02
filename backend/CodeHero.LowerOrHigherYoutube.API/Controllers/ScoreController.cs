using AutoMapper;
using CodeHero.LowerOrHigherYouTube.API.Requests;
using CodeHero.LowerOrHigherYouTube.API.Responses;
using CodeHero.LowerOrHigherYouTube.Core.Model;
using CodeHero.LowerOrHigherYouTube.Core.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYouTube.API.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class ScoreController : ControllerBase
    {
        private IScoreService _scoreService;
        private readonly IMapper _mapper;

        public ScoreController(IScoreService scoreService, IMapper mapper)
        {
            _scoreService = scoreService;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IEnumerable<ScoreResponse>> GetTopScores(int limit)
        {
            var scores = await _scoreService.ListTopScoresAsync(limit);
            var scoresResponse = scores.Select(score => _mapper.Map<ScoreResponse>(score));
            return scoresResponse;
        }

        [HttpPost]
        public async Task PostScore([FromBody] CreateScoreRequest createScoreRequest)
        {
            var score = _mapper.Map<Score>(createScoreRequest);
            await _scoreService.AddScoreAsync(score);
        }
    }
}
