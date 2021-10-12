using CodeHero.LowerOrHigherYoutube.VideoRenewal;
using Microsoft.Extensions.DependencyInjection;

namespace CodeHero.LowerOrHigherYoutube.VideoFetcher.Extensions
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
