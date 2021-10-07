using CodeHero.LowerOrHigherYoutube.Core.Model;
using CodeHero.LowerOrHigherYoutube.Core.Repositories;

namespace CodeHero.LowerOrHigherYoutube.Infrastructure.Repositories
{
    public class VideoRepository : BaseRepository<Video, int>, IVideoRepository
    {
        public VideoRepository(DatabaseContext cosmosDbContext) : base(cosmosDbContext.Videos)
        {
        }

        protected override int GetKey(Video entity) => entity.Id;
    }
}
