using CodeHero.LowerOrHigherYoutube.Core.Model;
using CodeHero.LowerOrHigherYoutube.Core.Repositories;

namespace CodeHero.LowerOrHigherYoutube.Infrastructure.Repositories
{
    public class CountryRepository : BaseRepository<Country, string>, ICountryRepository
    {
        public CountryRepository(DatabaseContext databaseContext) : base(databaseContext.Countries, databaseContext)
        {
        }

        protected override string GetKey(Country entity) => entity.Id;
    }
}
