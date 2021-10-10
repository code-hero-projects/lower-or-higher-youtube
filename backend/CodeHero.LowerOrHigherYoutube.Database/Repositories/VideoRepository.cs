using CodeHero.LowerOrHigherYoutube.Core.Model;
using CodeHero.LowerOrHigherYoutube.Core.Repositories;
using CodeHero.LowerOrHigherYoutube.Infrastructure.Database.Infrastructure;

namespace CodeHero.LowerOrHigherYoutube.Infrastructure.Database.Repositories
{
    public class VideoRepository : BaseRepository<Video>, IVideoRepository
    {
        public VideoRepository(DatabaseContext databaseContext) : base(databaseContext.Videos, databaseContext)
        {
        }
    }
}
