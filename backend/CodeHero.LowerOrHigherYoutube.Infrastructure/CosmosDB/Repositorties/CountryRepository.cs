using CodeHero.LowerOrHigherYoutube.Core.Model;
using CodeHero.LowerOrHigherYoutube.Core.Repositories;

namespace CodeHero.LowerOrHigherYoutube.Infrastructure.CosmosDB.Repositorties
{
    public class CountryRepository : BaseRepository<Country, int>, ICountryRepository
    {
        public CountryRepository(DatabaseContext cosmosDbContext) : base(cosmosDbContext.Countries)
        {
        }

        protected override int GetKey(Country entity) => entity.Id;
    }
}
