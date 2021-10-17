using CodeHero.LowerOrHigherYouTube.Infrastructure.Database.Infrastructure;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace CodeHero.LowerOrHigherYouTube.API
{
    public class Program
    {
        public static void Main(string[] args) => CreateHostBuilder(args).Build().InitialiseDatabase().Run();

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
