using CodeHero.LowerOrHigherYoutube.Core.Model;
using CodeHero.LowerOrHigherYoutube.Core.Repositories;
using CodeHero.LowerOrHigherYoutube.Infrastructure.Database.Infrastructure;

namespace CodeHero.LowerOrHigherYoutube.Infrastructure.Database.Repositories
{
    public class CountryRepository : BaseRepository<Country>, ICountryRepository
    {
        public CountryRepository(DatabaseContext databaseContext) : base(databaseContext.Countries, databaseContext)
        {
        }
    }
}
