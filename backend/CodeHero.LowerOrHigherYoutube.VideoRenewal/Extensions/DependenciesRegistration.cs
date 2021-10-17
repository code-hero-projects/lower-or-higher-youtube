using CodeHero.LowerOrHigherYouTube.VideoRenewal;
using Microsoft.Extensions.DependencyInjection;

namespace CodeHero.LowerOrHigherYouTube.VideoFetcher.Extensions
{
    public static class DependenciesRegistration
    {
        public static IServiceCollection AddVideoFetcherDependencies(this IServiceCollection services)
        {
            services.AddHostedService<VideoRenewalService>();

            return services;
        }
    }
}
