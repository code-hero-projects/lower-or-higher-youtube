using CodeHero.LowerOrHigherYoutube.Core.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CodeHero.LowerOrHigherYoutube.Infrastructure.Mappings
{
    public class CountryMapping : IEntityTypeConfiguration<Country>
    {
        public void Configure(EntityTypeBuilder<Country> builder)
        {
            builder.HasKey(x => x.Id);
            builder.HasPartitionKey(x => x.Id);
            builder.ToContainer(InfrastuctureConstants.CountriesContainerName);
        }
    }
}
