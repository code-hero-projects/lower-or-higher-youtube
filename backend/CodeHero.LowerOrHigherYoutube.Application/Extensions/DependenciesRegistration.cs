using CodeHero.LowerOrHigherYouTube.Application.Services;
using CodeHero.LowerOrHigherYouTube.Core.Configuration;
using CodeHero.LowerOrHigherYouTube.Core.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CodeHero.LowerOrHigherYouTube.Application.Extensions
{
    public static class DependenciesRegistration
    {
        public static IServiceCollection AddApplicationDependencies(this IServiceCollection services, IConfigurationSection timersConfiguration)
        {
            var timerOptions = timersConfiguration.Get<TimerOptions>();

            services
                .AddSingleton(timerOptions)
                .AddScoped<ICountryService, CountryService>()
                .AddScoped<IVideoService, VideoService>();

            return services;
        }
    }
}
