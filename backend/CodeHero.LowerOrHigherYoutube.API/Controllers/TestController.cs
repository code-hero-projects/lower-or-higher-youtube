﻿using CodeHero.LowerOrHigherYouTube.Core.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYouTube.API.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class TestController : ControllerBase
    {
        private readonly ICountryRepository _countryRepository;
        private readonly IVideoRepository _videoRepository;

        public TestController(ICountryRepository countryRepository, IVideoRepository videoRepository)
        {
            _countryRepository = countryRepository;
            _videoRepository = videoRepository;
        }

        [HttpGet]
        public async Task<ActionResult> List()
        {
            // Create
            //await _countryRepository.AddAsync(new Country()
            //{
            //    Id = "3",
            //    Name = "rytui",
            //    RegionCode = "pt-br",
            //    LastFetched = System.DateTime.Now
            //});
            //await _countryRepository.SaveChangesAsync();

            // Read all
            // var list = await _countryRepository.ListAsync();

            // Read with filter
            // var filteredList = await _countryRepository.FilterAsync(entity => entity.Id == "1");

            // Delete
            //_countryRepository.DeleteAsync(new Country()
            //{
            //    Id = "2",
            //    Name = "bdsfb",
            //    RegionCode = "pt-pt",
            //    LastFetched = System.DateTime.Now
            //});
            //await _countryRepository.SaveChangesAsync();

            // Read by Id
            // var result = await _countryRepository.GetAsync(entity => entity.Id == "1");
            return Ok();
        }
    }
}