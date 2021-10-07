using CodeHero.LowerOrHigherYoutube.API.Extensions;
using CodeHero.LowerOrHigherYoutube.Application.Extensions;
using CodeHero.LowerOrHigherYoutube.Infrastructure.Extensions;
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
        private const string DatabaseOptionsSection = "Database";

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var databaseOptions = _configuration.GetSection(ApiConstants.AppSettingsDatabaseSection);

            services
                .AddInfrastructureDependencies(databaseOptions)
                .AddApplicationDependencies()
                .AddApiDependencies();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
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

            app.UseCors(ApiConstants.AllowAllCorsPolicy);

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
