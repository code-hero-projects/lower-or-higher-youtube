using CodeHero.LowerOrHigherYouTube.Core.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CodeHero.LowerOrHigherYouTube.Database.Mappings.PostgreSql
{
    public class PostgreSqlScoreMapping : IEntityTypeConfiguration<Score>
    {
        public void Configure(EntityTypeBuilder<Score> builder)
        {
            builder.ToTable("score");

            builder.HasKey(x => x.Id);

            builder
                .Property(x => x.Id)
                .IsRequired()
                .UseIdentityAlwaysColumn()
                .HasColumnName("id");

            builder
                .Property(x => x.Points)
                .IsRequired()
                .HasColumnName("points");

            builder
                .Property(x => x.PlayerName)
                .IsRequired()
                .HasColumnName("player_name")
                .HasMaxLength(11);

            builder
                .Property(x => x.CountryId)
                .IsRequired()
                .HasColumnName("country_id");
        }
    }
}
