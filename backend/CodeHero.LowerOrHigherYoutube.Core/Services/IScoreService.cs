using CodeHero.LowerOrHigherYouTube.Core.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYouTube.Core.Services
{
    public interface IScoreService
    {
        Task<IEnumerable<Score>> ListTopScores(int limit);
        Task AddScore(Score score);
    }
}
