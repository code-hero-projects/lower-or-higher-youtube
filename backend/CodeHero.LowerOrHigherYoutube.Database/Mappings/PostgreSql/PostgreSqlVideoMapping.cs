using CodeHero.LowerOrHigherYouTube.Core.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CodeHero.LowerOrHigherYouTube.Database.Mappings.PostgreSql
{
    public class PostgreSqlVideoMapping : IEntityTypeConfiguration<Video>
    {
        public void Configure(EntityTypeBuilder<Video> builder)
        {
            builder.ToTable("video");

            builder.HasKey(x => x.Id);

            builder
                .Property(x => x.Id)
                .IsRequired()
                .UseIdentityAlwaysColumn();

            builder
                .Property(x => x.Name)
                .IsRequired();

            builder
                .Property(x => x.Channel)
                .IsRequired();

            builder
                .Property(x => x.Views)
                .IsRequired();

            builder
                .Property(x => x.Thumbnail)
                .IsRequired();

            builder
                .Property(x => x.CountryId)
                .IsRequired();
        }
    }
}
