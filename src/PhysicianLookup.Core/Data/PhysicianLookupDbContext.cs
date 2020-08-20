using Microsoft.EntityFrameworkCore;
using PhysicianLookup.Core.Models;

namespace PhysicianLookup.Core.Data
{
    public class PhysicianLookupDbContext: DbContext, IPhysicianLookupDbContext
    {
        public PhysicianLookupDbContext(DbContextOptions options)
            :base(options)
        {

        }
        public DbSet<Physician> Physicians { get; private set; }
        public DbSet<User> Users { get; private set; }
    }
}
