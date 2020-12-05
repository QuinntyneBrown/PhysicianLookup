using Microsoft.EntityFrameworkCore;
using PhysicianLookup.Core.Models;
using System.Threading;
using System.Threading.Tasks;

namespace PhysicianLookup.Core.Data
{
    public interface IPhysicianLookupDbContext
    {
        DbSet<Address> Addresses { get; }
        DbSet<Physician> Physicians { get; }
        DbSet<Role> Roles { get; }
        DbSet<TrustRelationship> TrustRelationships { get; }
        DbSet<User> Users { get; }
        DbSet<UserRole> UserRoles { get; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
