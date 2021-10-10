﻿using CodeHero.LowerOrHigherYoutube.Core.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYoutube.Database.Mappings.PostgreSql
{
    public class PostgreSqlVideoMapping : IEntityTypeConfiguration<Video>
    {
        public void Configure(EntityTypeBuilder<Video> builder)
        {
            builder.ToTable("video");

            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).IsRequired();
            builder.Property(x => x.Id).HasColumnName("id");

            builder.Property(x => x.Name).IsRequired();
            builder.Property(x => x.Name).HasColumnName("name");
            builder.Property(x => x.Name).HasMaxLength(50);

            builder.Property(x => x.Channel).IsRequired();
            builder.Property(x => x.Channel).HasColumnName("channel");
            builder.Property(x => x.Channel).HasMaxLength(25);

            builder.Property(x => x.Views).IsRequired();
            builder.Property(x => x.Views).HasColumnName("views");

            builder.Property(x => x.Thumbnail).IsRequired();
            builder.Property(x => x.Thumbnail).HasColumnName("thumbnail");
            builder.Property(x => x.Thumbnail).HasMaxLength(100);

            builder.Property(x => x.CountryId).IsRequired();
            builder.Property(x => x.CountryId).HasColumnName("country_id");
        }
    }
}
