using CodeHero.LowerOrHigherYoutube.Application.Configuration;
using CodeHero.LowerOrHigherYoutube.Application.Services;
using CodeHero.LowerOrHigherYoutube.Core.Configuration;
using CodeHero.LowerOrHigherYoutube.Core.Repositories;
using CodeHero.LowerOrHigherYoutube.Core.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace CodeHero.LowerOrHigherYoutube.Application.Extensions
{
    public static class DependenciesRegistration
    {
        public static IServiceCollection AddApplicationDependencies(this IServiceCollection services, IConfigurationSection youTubeConfiguration, IConfigurationSection timersConfiguration)
        {
            var youtubeOptions = youTubeConfiguration.Get<YouTubeOptions>();
            var timerOptions = timersConfiguration.Get<TimerOptions>();

            services.AddSingleton(youtubeOptions);
            services.AddSingleton(timerOptions);

            services.AddScoped<ICountryService, CountryService>();
            services.AddScoped<IVideoService, VideoService>();
            services.AddScoped<IVideoSupplier, YouTubeVideoSupplier>();

            return services;
        }
    }
}
