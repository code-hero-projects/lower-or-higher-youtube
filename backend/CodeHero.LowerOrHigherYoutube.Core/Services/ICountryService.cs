using CodeHero.LowerOrHigherYoutube.Core.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYoutube.Core.Services
{
    public interface ICountryService
    {
        Task<IEnumerable<Country>> ListAsync();
    }
}
