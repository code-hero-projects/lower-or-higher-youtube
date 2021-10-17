using CodeHero.LowerOrHigherYouTube.Core.Model;
using CodeHero.LowerOrHigherYouTube.Core.Repositories;
using CodeHero.LowerOrHigherYouTube.Infrastructure.Database.Infrastructure;

namespace CodeHero.LowerOrHigherYouTube.Infrastructure.Database.Repositories
{
    public class VideoRepository : BaseRepository<Video>, IVideoRepository
    {
        public VideoRepository(DatabaseContext databaseContext) : base(databaseContext.Videos, databaseContext)
        {
        }
    }
}
