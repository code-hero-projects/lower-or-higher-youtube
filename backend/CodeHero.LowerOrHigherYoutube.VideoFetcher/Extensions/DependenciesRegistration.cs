using CodeHero.LowerOrHigherYouTube.Core.Services;
using CodeHero.LowerOrHigherYouTube.VideoRenewal;
using CodeHero.LowerOrHigherYouTube.VideoRenewal.Configuration;
using CodeHero.LowerOrHigherYouTube.VideoRenewal.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CodeHero.LowerOrHigherYouTube.VideoFetcher.Extensions
{
    public static class DependenciesRegistration
    {
        public static IServiceCollection AddVideoFetcherDependencies(this IServiceCollection services, IConfigurationSection youTubeConfiguration)
        {
            var youTubeOptions = youTubeConfiguration.Get<YouTubeOptions>();

            services.AddSingleton(youTubeOptions);

            services.AddScoped<IVideoSupplier, YouTubeVideoSupplier>();
            services.AddHostedService<VideoFetcherBackgroundService>();

            return services;
        }
    }
}
