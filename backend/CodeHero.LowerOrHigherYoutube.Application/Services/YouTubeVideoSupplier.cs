﻿using CodeHero.LowerOrHigherYoutube.Application.Configuration;
using CodeHero.LowerOrHigherYoutube.Application.Services.YouTubeApiResponse;
using CodeHero.LowerOrHigherYoutube.Core.Model;
using CodeHero.LowerOrHigherYoutube.Core.Services;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYoutube.Application.Services
{
    public class YouTubeVideoSupplier : IVideoSupplier
    {
        private readonly string _url;

        public YouTubeVideoSupplier(YouTubeOptions youtubeOptions)
        {
            _url = youtubeOptions.ApiUrl.Replace(ApplicationConstants.ApiKeyVariable, youtubeOptions.ApiKey);
        }

        public async Task<IEnumerable<Video>> Fetch(Country country)
        {
            var url = _url.Replace(ApplicationConstants.RegionCodeVariable, country.RegionCode);
            var httpClient = new HttpClient();
            var response = await httpClient.GetAsync(url);
            var result = await response.Content.ReadAsStringAsync();
            var youTubeApiResponse = JsonConvert.DeserializeObject<YouTubeResponse>(result);
            return youTubeApiResponse.Items.Select(item => new Video()
            {
                Name = item.Snippet.Title,
                Channel = item.Snippet.ChannelTitle,
                Thumbnail = item.Snippet.Thumbnails.Maxres.Url,
                Views = int.Parse(item.Statistics.ViewCount),
                CountryId = country.Id
            });
        }
    }
}
