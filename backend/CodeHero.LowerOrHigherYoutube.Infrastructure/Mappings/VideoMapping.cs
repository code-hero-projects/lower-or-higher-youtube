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
            builder.HasPartitionKey(x => x.Id);
            builder.ToContainer(InfrastuctureConstants.VideosContainer);
        }
    }
}
