using Microsoft.EntityFrameworkCore;
using PhysicianLookup.Core.Models;

namespace PhysicianLookup.Core.Data
{
    public class PhysicianLookupDbContext: DbContext, IPhysicianLookupDbContext
    {
        public DbSet<User> Users { get; private set; }
    }
}
