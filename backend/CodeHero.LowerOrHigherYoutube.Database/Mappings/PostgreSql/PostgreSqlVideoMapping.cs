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
                .HasColumnName("id")
                .UseIdentityAlwaysColumn();

            builder
                .Property(x => x.Name)
                .IsRequired()
                .HasColumnName("name");

            builder
                .Property(x => x.Channel)
                .IsRequired()
                .HasColumnName("channel");

            builder
                .Property(x => x.Views)
                .IsRequired()
                .HasColumnName("views");

            builder
                .Property(x => x.Thumbnail)
                .IsRequired()
                .HasColumnName("thumbnail");

            builder
                .Property(x => x.CountryId)
                .IsRequired()
                .HasColumnName("country_id");
        }
    }
}
