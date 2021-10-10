using CodeHero.LowerOrHigherYoutube.Core.Model;
using CodeHero.LowerOrHigherYoutube.Infrastructure.Database.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CodeHero.LowerOrHigherYoutube.Infrastructure.Database.Mappings
{
    public class CosmosDbVideoMapping : IEntityTypeConfiguration<Video>
    {
        public void Configure(EntityTypeBuilder<Video> builder)
        {
            builder.HasKey(x => x.Id);

            builder.HasPartitionKey(x => x.Name);

            builder.ToContainer(InfrastuctureConstants.VideosContainerName);
        }
    }
}
