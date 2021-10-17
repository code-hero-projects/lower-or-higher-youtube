using CodeHero.LowerOrHigherYouTube.Core.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYouTube.Core.Services
{
    public interface IVideoSupplier
    {
        Task<IEnumerable<Video>> Fetch(Country country);
    }
}
