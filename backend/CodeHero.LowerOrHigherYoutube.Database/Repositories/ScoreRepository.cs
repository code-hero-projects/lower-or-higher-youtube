using CodeHero.LowerOrHigherYouTube.Core.Model;
using CodeHero.LowerOrHigherYouTube.Core.Repositories;
using CodeHero.LowerOrHigherYouTube.Infrastructure.Database.Infrastructure;
using CodeHero.LowerOrHigherYouTube.Infrastructure.Database.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace CodeHero.LowerOrHigherYouTube.Database.Repositories
{
    public class ScoreRepository : BaseRepository<Score>, IScoreRepository
    {
        private DatabaseContext _databaseContext;

        public ScoreRepository(DatabaseContext databaseContext) : base(databaseContext.Scores, databaseContext) => _databaseContext = databaseContext;

        public async Task<IEnumerable<Score>> GetFirstScores(int limit) => 
            await _databaseContext.Scores
                .AsNoTracking()
                .OrderBy(score => score.Points)
                .Take(limit)
                .ToListAsync();
        
    }
}
