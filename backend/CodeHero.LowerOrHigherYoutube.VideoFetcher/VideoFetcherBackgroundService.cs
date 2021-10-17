using CodeHero.LowerOrHigherYouTube.Core.Configuration;
using CodeHero.LowerOrHigherYouTube.Core.Repositories;
using CodeHero.LowerOrHigherYouTube.Core.Services;
using CodeHero.LowerOrHigherYouTube.VideoRenewal.Services;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYouTube.VideoRenewal
{
    public class VideoFetcherBackgroundService : BackgroundService
    {
        private readonly IServiceProvider _serviceProvider;
        private readonly ILogger<VideoFetcherBackgroundService> _logger;

        public VideoFetcherBackgroundService(ILogger<VideoFetcherBackgroundService> logger, IServiceProvider serviceProvider)
        {   
            _logger = logger;
            _serviceProvider = serviceProvider;
        }

        protected override Task ExecuteAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation("VideoFetcherService running.");
            
            using (var scope = _serviceProvider.CreateScope())
            {
                var timerOptions = scope.ServiceProvider.GetService<TimerOptions>();
                new Timer(async _ => await RenewVideos(), null, TimeSpan.Zero, TimeSpan.FromHours(timerOptions.RenewVideosDelayInHours));
            }

            return Task.CompletedTask;
        }

        private async Task RenewVideos()
        {
            using (var scope = _serviceProvider.CreateScope())
            {
                var countryRepository = scope.ServiceProvider.GetService<ICountryRepository>();
                var videoRepository = scope.ServiceProvider.GetService<IVideoRepository>();
                var videoSupplier = scope.ServiceProvider.GetService<IVideoSupplier>();

                var videoRenewal = new VideoFetcherService(countryRepository, videoRepository, videoSupplier);
                await videoRenewal.RenewVideos();
            }
        }
    }
}
