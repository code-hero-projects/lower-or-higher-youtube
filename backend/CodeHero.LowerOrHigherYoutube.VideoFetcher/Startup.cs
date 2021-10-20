using CodeHero.LowerOrHigherYouTube.VideoRenewal.Configuration;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CodeHero.LowerOrHigherYouTube.VideoFetcher
{
    public class Startup
    {
        private IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            var configurationSection = _configuration.GetSection("YouTube");
            var youTubeOptions = configurationSection.Get<YouTubeOptions>();
        }
    }
}
