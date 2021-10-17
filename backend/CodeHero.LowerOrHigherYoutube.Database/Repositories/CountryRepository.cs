using CodeHero.LowerOrHigherYouTube.Core.Model;
using CodeHero.LowerOrHigherYouTube.Core.Repositories;
using CodeHero.LowerOrHigherYouTube.Infrastructure.Database.Infrastructure;

namespace CodeHero.LowerOrHigherYouTube.Infrastructure.Database.Repositories
{
    public class CountryRepository : BaseRepository<Country>, ICountryRepository
    {
        public CountryRepository(DatabaseContext databaseContext) : base(databaseContext.Countries, databaseContext)
        {
        }
    }
}
