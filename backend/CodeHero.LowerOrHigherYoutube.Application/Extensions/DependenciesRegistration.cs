using CodeHero.LowerOrHigherYoutube.Application.Configuration;
using CodeHero.LowerOrHigherYoutube.Application.Services;
using CodeHero.LowerOrHigherYoutube.Core.Repositories;
using CodeHero.LowerOrHigherYoutube.Core.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace CodeHero.LowerOrHigherYoutube.Application.Extensions
{
    public static class DependenciesRegistration
    {
        public static IServiceCollection AddApplicationDependencies(this IServiceCollection services, IConfigurationSection configurationSection)
        {
            var youtubeOptions = configurationSection.Get<YouTubeOptions>();

            services.AddSingleton(youtubeOptions);

            services.AddScoped<ICountryService, CountryService>();
            services.AddScoped<IVideoService, VideoService>();

            return services;
        }
    }
}
