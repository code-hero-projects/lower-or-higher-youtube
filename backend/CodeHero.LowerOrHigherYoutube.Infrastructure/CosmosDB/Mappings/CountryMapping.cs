﻿using CodeHero.LowerOrHigherYoutube.Core.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CodeHero.LowerOrHigherYoutube.Infrastructure.Mappings
{
    public class CountryMapping : IEntityTypeConfiguration<Country>
    {
        public void Configure(EntityTypeBuilder<Country> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).IsRequired();
            builder.Property(x => x.Id).HasColumnName("id");

            builder.Property(x => x.Name).IsRequired();
            builder.Property(x => x.Name).HasColumnName("name");

            builder.Property(x => x.RegionCode).IsRequired();
            builder.Property(x => x.RegionCode).HasColumnName("region_code");

            builder.Property(x => x.LastFetched).IsRequired();
            builder.Property(x => x.LastFetched).HasColumnName("last_fetched");

            builder.ToContainer("countries");
        }
    }
}
