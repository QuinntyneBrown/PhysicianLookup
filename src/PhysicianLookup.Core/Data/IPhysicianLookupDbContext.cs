using Microsoft.EntityFrameworkCore;
using PhysicianLookup.Core.Models;
using System.Threading;
using System.Threading.Tasks;

namespace PhysicianLookup.Core.Data
{
    public interface IPhysicianLookupDbContext
    {
        DbSet<Physician> Physicians { get; }
        DbSet<User> Users { get; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
