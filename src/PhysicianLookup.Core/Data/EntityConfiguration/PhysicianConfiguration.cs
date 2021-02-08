using PhysicianLookup.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace PhysicianLookup.Core.Data.EntityConfiguration
{
    public class PhysicianConfiguration : IEntityTypeConfiguration<Physician>
    {
        public void Configure(EntityTypeBuilder<Physician> builder)
        {
            builder.OwnsOne(physician => physician.Address);
        }
    }
}
