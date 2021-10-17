using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using System.Reflection;
using System.Text.Json.Serialization;

namespace CodeHero.LowerOrHigherYouTube.API.Extensions
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

            services
                .AddRouting(options => options.LowercaseUrls = true)
                .AddAutoMapper(Assembly.GetExecutingAssembly());

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc(ApiConstants.SwaggerVersion, new OpenApiInfo { Title = ApiConstants.SwaggerTitle, Version = ApiConstants.SwaggerVersion });
            });

            return services;
        }
    }
}
