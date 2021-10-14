using CodeHero.LowerOrHigherYoutube.Core.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CodeHero.LowerOrHigherYoutube.Database.Mappings.PostgreSql
{
    public class PostgreSqlVideoMapping : IEntityTypeConfiguration<Video>
    {
        public void Configure(EntityTypeBuilder<Video> builder)
        {
            builder.ToTable("video");

            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).IsRequired();
            builder.Property(x => x.Name).HasColumnName("id");
            builder.Property(x => x.Id).UseIdentityAlwaysColumn();

            builder.Property(x => x.Name).IsRequired();
            builder.Property(x => x.Name).HasColumnName("name");

            builder.Property(x => x.Channel).IsRequired();
            builder.Property(x => x.Channel).HasColumnName("channel");

            builder.Property(x => x.Views).IsRequired();
            builder.Property(x => x.Views).HasColumnName("views");

            builder.Property(x => x.Thumbnail).IsRequired();
            builder.Property(x => x.Thumbnail).HasColumnName("thumbnail");

            builder.Property(x => x.CountryId).IsRequired();
            builder.Property(x => x.CountryId).HasColumnName("country_id");
            builder.Property(x => x.CountryId).HasColumnType("smallint");
        }
    }
}
