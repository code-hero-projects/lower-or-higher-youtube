using CodeHero.LowerOrHigherYoutube.API.Extensions;
using CodeHero.LowerOrHigherYoutube.API.Middlewares;
using CodeHero.LowerOrHigherYoutube.Application.Extensions;
using CodeHero.LowerOrHigherYoutube.Infrastructure.Database.Extensions;
using CodeHero.LowerOrHigherYoutube.VideoFetcher.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace CodeHero.LowerOrHigherYoutube.API
{
    public class Startup
    {
        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            var databaseOptions = _configuration.GetSection(ApiConstants.AppSettingsDatabaseSection);
            var youTubeOptions = _configuration.GetSection(ApiConstants.AppSettingsYouTubeSection);
            var timerOptions = _configuration.GetSection(ApiConstants.AppSettingsTimersSection);

            services
                .AddInfrastructureDependencies(databaseOptions)
                .AddApplicationDependencies(youTubeOptions, timerOptions)
                .AddApiDependencies()
                .AddVideoFetcherDependencies();

            services.AddLogging();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseMiddleware<LogRequestMiddleware>();

            app.UseCors(ApiConstants.AllowAllCorsPolicy);

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
