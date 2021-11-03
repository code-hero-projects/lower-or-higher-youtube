using CodeHero.LowerOrHigherYouTube.Core.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CodeHero.LowerOrHigherYouTube.Database.Mappings.PostgreSql
{
    public class PostgreSqlCountryMapping : IEntityTypeConfiguration<Country>
    {
        public void Configure(EntityTypeBuilder<Country> builder)
        {
            builder.ToTable("country");

            builder.HasKey(x => x.Id);

            builder
                .Property(x => x.Id)
                .IsRequired()
                .UseIdentityAlwaysColumn();

            builder
                .Property(x => x.Name)
                .IsRequired();

            builder
                .Property(x => x.RegionCode)
                .IsRequired()
                .HasMaxLength(3);

            builder
                .Property(x => x.Updating)
                .IsRequired()
                .HasColumnType("boolean");
        }
    }
}
