using CodeHero.LowerOrHigherYoutube.Core.Model;
using CodeHero.LowerOrHigherYoutube.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYoutube.Infrastructure.Repositories
{
    public class VideoRepository : BaseRepository<Video>, IVideoRepository
    {
        public VideoRepository(DatabaseContext databaseContext) : base(databaseContext.Videos, databaseContext)
        {
        }
    }
}
