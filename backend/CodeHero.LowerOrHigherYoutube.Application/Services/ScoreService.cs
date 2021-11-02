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

        public async Task AddScoreAsync(Score score) 
        {
            await _scoreRepository.AddAsync(score);
            await _scoreRepository.SaveChangesAsync();
        }

        public async Task<IEnumerable<Score>> ListTopScoresAsync(int limit) => await _scoreRepository.GetFirstScoresAsync(limit);
    }
}
