using CodeHero.LowerOrHigherYoutube.Core.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CodeHero.LowerOrHigherYoutube.Infrastructure.Mappings
{
    public class VideoMapping : IEntityTypeConfiguration<Video>
    {
        public void Configure(EntityTypeBuilder<Video> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).IsRequired();
            builder.Property(x => x.Id).HasColumnName("id");

            builder.Property(x => x.SecondaryId).IsRequired();
            builder.Property(x => x.SecondaryId).HasColumnName("secondary_id");

            builder.Property(x => x.Name).IsRequired();
            builder.Property(x => x.Name).HasColumnName("name");

            builder.Property(x => x.Views).IsRequired();
            builder.Property(x => x.Views).HasColumnName("views");

            builder.Property(x => x.Thumbnail).IsRequired();
            builder.Property(x => x.Thumbnail).HasColumnName("thumbnail");

            builder.ToContainer("videos");
        }
    }
}
