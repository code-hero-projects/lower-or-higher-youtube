using Microsoft.Extensions.DependencyInjection;
using System.Text.Json.Serialization;

namespace CodeHero.LowerOrHigherYoutube.API.Extensions
{
    public static class DependenciesRegistration
    {
        public static IServiceCollection AddApiDependencies(this IServiceCollection services)
        {
            services
                .AddControllers()
                .AddJsonOptions(options => options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter()));

            services.AddCors(o => o.AddPolicy(ApiConstants.AllowAllCorsPolicy, builder =>
            {
                builder
                    .AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
            }));

            services.AddRouting(options => options.LowercaseUrls = true);

            return services;
        }
    }
}
