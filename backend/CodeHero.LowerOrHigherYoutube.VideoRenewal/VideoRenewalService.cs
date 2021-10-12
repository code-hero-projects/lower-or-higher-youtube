using CodeHero.LowerOrHigherYoutube.VideoRenewal;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYoutube.VideoFetcher
{
    public class VideoRenewalService : IHostedService, IDisposable
    {
        private readonly IVideoRenewal _videoRenewal;
        private readonly ILogger<VideoRenewalService> _logger;
        private Timer _timer;

        public VideoRenewalService(ILogger<VideoRenewalService> logger, IVideoRenewal videoRenewal)
        {
            _logger = logger;
            _videoRenewal = videoRenewal;
        }

        public void Dispose()
        {
            _timer?.Dispose();
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            _logger.LogInformation("VideoFetcherService running.");

            _timer = new Timer(_ => _videoRenewal.RenewVideos(), null, TimeSpan.Zero, TimeSpan.FromSeconds(5));

            return Task.CompletedTask;
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            _logger.LogInformation("VideoFetcherService is stopping.");

            _timer?.Change(Timeout.Infinite, 0);

            return Task.CompletedTask;
        }
    }
}
