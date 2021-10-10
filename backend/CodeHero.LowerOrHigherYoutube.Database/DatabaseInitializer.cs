using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;

namespace CodeHero.LowerOrHigherYoutube.Infrastructure.Database.Infrastructure
{
    public static class DatabaseInitializer
    {
        public static IHost InitialiseDatabase(this IHost host)
        {
            using var serviceScope = host.Services.GetRequiredService<IServiceScopeFactory>().CreateScope();
            var dbContext = serviceScope.ServiceProvider.GetService<DatabaseContext>();
            if (!dbContext.Database.CanConnect())
            {
                dbContext.Database.Migrate();
                dbContext.SeedData();
            }
            
            return host;
        }
    }
}
