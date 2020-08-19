using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PhysicianLookup.Core.Data;

namespace PhysicianLookup.Api
{
    public static class Dependencies
    {
        public static void Configure(IServiceCollection services, IConfiguration configuration)
        {
            services.AddTransient<IPhysicianLookupDbContext, PhysicianLookupDbContext>();

            services.AddDbContext<PhysicianLookupDbContext>(options =>
            {
                options.UseSqlServer(configuration["Data:DefaultConnection:ConnectionString"], b => b.MigrationsAssembly("PhysicianLookup.Api"));
            });

            services.AddControllers();
        }
    }
}
