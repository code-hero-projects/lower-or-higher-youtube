using Microsoft.Extensions.DependencyInjection;

namespace CodeHero.LowerOrHigherYoutube.Application.Extensions
{
    public static class DependenciesRegistration
    {
        public static IServiceCollection AddApplicationDependencies(this IServiceCollection services)
        {
            return services;
        }
    }
}
