using CodeHero.LowerOrHigherYouTube.Core.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYouTube.Core.Repositories
{
    public interface IScoreRepository : IRepository<Score>
    {
        Task<IEnumerable<Score>> GetFirstScoresAsync(int limit);
    }
}
