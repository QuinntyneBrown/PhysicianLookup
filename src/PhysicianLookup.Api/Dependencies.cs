using BuildingBlocks.Core.Identity;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PhysicianLookup.Core.Data;
using PhysicianLookup.Domain.Features.GeoLocation;
using PhysicianLookup.Domain.Features.Physicians;

namespace PhysicianLookup.Api
{
    public static class Dependencies
    {
        public static void Configure(IServiceCollection services, IConfiguration configuration)
        {
            services.AddCors(options => options.AddPolicy("CorsPolicy",
                builder => builder
                .WithOrigins("http://localhost:4200")
                .AllowAnyMethod()
                .AllowAnyHeader()
                .SetIsOriginAllowed(isOriginAllowed: _ => true)
                .AllowCredentials()));

            services.AddHttpClient<IGoogleMapsService, GoogleMapsService>();

            services.AddSingleton<IPasswordHasher, PasswordHasher>();

            services.AddSingleton<ITokenProvider, TokenProvider>();

            services.AddMediatR(typeof(GetNearestPhysicians));

            services.AddTransient<IPhysicianLookupDbContext, PhysicianLookupDbContext>();

            services.AddDbContext<PhysicianLookupDbContext>(options =>
            {
                options.UseSqlServer(configuration["Data:DefaultConnection:ConnectionString"], 
                    b => b.MigrationsAssembly("PhysicianLookup.Api")
                        .UseNetTopologySuite()
                        .EnableRetryOnFailure());
            });

            services.AddControllers();
        }
    }
}
