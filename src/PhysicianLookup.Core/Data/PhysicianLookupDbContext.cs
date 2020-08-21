using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PhysicianLookup.Core.Models;

namespace PhysicianLookup.Core.Data
{
    public class PhysicianLookupDbContext: DbContext, IPhysicianLookupDbContext
    {
        public PhysicianLookupDbContext(DbContextOptions options)
            :base(options) { }

        public static readonly ILoggerFactory ConsoleLoggerFactory
            = LoggerFactory.Create(builder => { builder.AddConsole(); });

        public DbSet<Physician> Physicians { get; private set; }
        public DbSet<User> Users { get; private set; }
    }
}
