using Microsoft.EntityFrameworkCore;
using PhysicianLookup.Core.Models;

namespace PhysicianLookup.Core.Data
{
    public interface IPhysicianLookupDbContext
    {
        DbSet<Physician> Physicians { get; }
        DbSet<User> Users { get; }
    }
}
