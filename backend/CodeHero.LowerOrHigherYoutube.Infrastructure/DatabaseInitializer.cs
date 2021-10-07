using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;

namespace CodeHero.LowerOrHigherYoutube.Infrastructure
{
    public static class DatabaseInitializer
    {
        public static IHost InitialiseDatabase(this IHost host)
        {
            try
            {
                using var serviceScope = host.Services.GetRequiredService<IServiceScopeFactory>().CreateScope();
                var dbContext = serviceScope.ServiceProvider.GetService<DatabaseContext>();
                dbContext.SeedData();
            }
            catch(Exception)
            {

            }
            
            return host;
        }
    }
}
