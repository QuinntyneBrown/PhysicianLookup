using Microsoft.EntityFrameworkCore;
using PhysicianLookup.Core.Models;

namespace PhysicianLookup.Core.Data
{
    public interface IPhysicianLookupDbContext
    {
        DbSet<User> Users { get; }
    }
}
