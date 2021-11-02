using CodeHero.LowerOrHigherYouTube.Core.Model;
using CodeHero.LowerOrHigherYouTube.Core.Repositories;
using CodeHero.LowerOrHigherYouTube.Core.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYouTube.Application.Services
{
    public class ScoreService : IScoreService
    {
        private IScoreRepository _scoreRepository;

        public ScoreService(IScoreRepository scoreRepository) => _scoreRepository = scoreRepository;

        public Task AddScore(Score score) => _scoreRepository.AddAsync(score);

        public Task<IEnumerable<Score>> ListTopScores(int limit) => _scoreRepository.GetFirstScores(limit);
    }
}
