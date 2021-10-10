using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;

namespace CodeHero.LowerOrHigherYoutube.Infrastructure.Database.Infrastructure
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
            catch(Exception ex)
            {

            }
            
            return host;
        }
    }
}
