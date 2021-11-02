using CodeHero.LowerOrHigherYouTube.Core.Model;
using CodeHero.LowerOrHigherYouTube.Core.Repositories;
using CodeHero.LowerOrHigherYouTube.Infrastructure.Database.Infrastructure;
using CodeHero.LowerOrHigherYouTube.Infrastructure.Database.Repositories;

namespace CodeHero.LowerOrHigherYouTube.Database.Repositories
{
    public class ScoreRepository : BaseRepository<Score>, IScoreRepository
    {
        public ScoreRepository(DatabaseContext databaseContext) : base(databaseContext.Scores, databaseContext)
        {
        }
    }
}
