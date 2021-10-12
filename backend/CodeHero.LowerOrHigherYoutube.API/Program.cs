using CodeHero.LowerOrHigherYoutube.Infrastructure.Database.Infrastructure;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using System;

namespace CodeHero.LowerOrHigherYoutube.API
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
