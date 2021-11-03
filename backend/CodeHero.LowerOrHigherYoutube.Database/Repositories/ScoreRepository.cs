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

        public new async Task AddAsync(Score entity)
        {
            await base.AddAsync(entity);
            _databaseContext.Entry(entity.Country).State = EntityState.Unchanged;
        }

        public async Task<IEnumerable<Score>> GetFirstScoresAsync(int limit) => 
            await _databaseContext.Scores
                .AsNoTracking()
                .OrderBy(score => score.Points)
                .Include(score => score.Country)
                .Take(limit)
                .ToListAsync();
    }
}
