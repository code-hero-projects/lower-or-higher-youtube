using CodeHero.LowerOrHigherYoutube.Application.Services;
using CodeHero.LowerOrHigherYoutube.Core.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CodeHero.LowerOrHigherYoutube.Application.Extensions
{
    public static class DependenciesRegistration
    {
        public static IServiceCollection AddApplicationDependencies(this IServiceCollection services)
        {
            services.AddScoped<ICountryService, CountryService>();

            return services;
        }
    }
}
