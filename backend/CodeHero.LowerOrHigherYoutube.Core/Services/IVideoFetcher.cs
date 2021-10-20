using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYouTube.Core.Services
{
    public interface IVideoFetcher
    {
        Task RenewVideos();
    }
}
