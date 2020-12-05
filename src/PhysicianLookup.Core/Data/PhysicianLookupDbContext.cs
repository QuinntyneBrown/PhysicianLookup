using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PhysicianLookup.Core.Models;
using System.Security.Cryptography.X509Certificates;

namespace PhysicianLookup.Core.Data
{
    public class PhysicianLookupDbContext: DbContext, IPhysicianLookupDbContext
    {
        public PhysicianLookupDbContext(DbContextOptions options)
            :base(options) { }

        public static readonly ILoggerFactory ConsoleLoggerFactory
            = LoggerFactory.Create(builder => { builder.AddConsole(); });

        public DbSet<Address> Addresses { get; private set; }
        public DbSet<Physician> Physicians { get; private set; }
        public DbSet<Role> Roles { get; private set; }
        public DbSet<TrustRelationship> TrustRelationships { get; private set; }
        public DbSet<User> Users { get; private set; }
        public DbSet<UserRole> UserRoles { get; private set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Physician>().OwnsOne(physician => physician.Address);
            builder.Entity<UserRole>().HasKey(t => new { t.RoleId, t.UserId });
        }
    }
}
