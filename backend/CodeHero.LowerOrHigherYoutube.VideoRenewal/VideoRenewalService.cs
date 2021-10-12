using CodeHero.LowerOrHigherYoutube.Core.Repositories;
using CodeHero.LowerOrHigherYoutube.Core.Services;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYoutube.VideoRenewal
{
    public class VideoRenewalService : BackgroundService
    {
        private readonly IServiceProvider _serviceProvider;
        private readonly ILogger<VideoRenewalService> _logger;
        //private Timer _timer;

        public VideoRenewalService(ILogger<VideoRenewalService> logger, IServiceProvider serviceProvider)
        {   
            _logger = logger;
            _serviceProvider = serviceProvider;
        }

        protected override Task ExecuteAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation("VideoFetcherService running.");

            new Timer(async _ => await RenewVideos(), null, TimeSpan.Zero, TimeSpan.FromSeconds(10));

            return Task.CompletedTask;
        }

        private async Task RenewVideos()
        {
            using (var scope = _serviceProvider.CreateScope())
            {
                var countryRepository = scope.ServiceProvider.GetService<ICountryRepository>();
                var videoRepository = scope.ServiceProvider.GetService<IVideoRepository>();
                var videoSupplier = scope.ServiceProvider.GetService<IVideoSupplier>();

                var videoRenewal = new VideoRenewal(countryRepository, videoRepository, videoSupplier);
                await videoRenewal.RenewVideos();
            }
        }
    }
}
