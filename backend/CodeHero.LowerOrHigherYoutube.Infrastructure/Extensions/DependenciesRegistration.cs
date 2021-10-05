using Microsoft.Extensions.DependencyInjection;

namespace CodeHero.LowerOrHigherYoutube.Infrastructure.Extensions
{
    public static class DependenciesRegistration
    {
        public static IServiceCollection AddInfrastructureDependencies(this IServiceCollection services)
        {
            return services;
        }
    }
}
