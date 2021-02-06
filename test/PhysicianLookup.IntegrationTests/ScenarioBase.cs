using PhysicianLookup.Api;
using PhysicianLookup.Core.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using System.Collections.Generic;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;
using BuildingBlocks.Core.Identity;
using PhysicianLookup.Core.Seeding;

namespace IntegrationTests
{
    public class ScenarioBase
    {
        protected PhysicianLookupDbContext DbContext { get; set; }
        protected IConfiguration Configuration { get; set; }

        public string GetAdminBearerToken()
        {
            return new TokenProvider(Configuration).Get("quinntynebrown@gmail.com", new List<Claim> {
                new Claim("http://schemas.microsoft.com/ws/2008/06/identity/claims/role","Admin")
            });
        }

        public async Task<HttpClient> CreateServer(bool isAdmin = false)
        {
            var hostBuilder = Program.CreateHostBuilder(null)
                .ConfigureWebHost(webHost =>
                {
                    webHost.UseTestServer();
                    webHost.UseEnvironment("Test");
                });

            var host = await hostBuilder.StartAsync();

            DbContext = host.Services.GetService(typeof(PhysicianLookupDbContext)) as PhysicianLookupDbContext;
            Configuration = host.Services.GetService(typeof(IConfiguration)) as IConfiguration;

            SeedData.Seed(DbContext, Configuration);

            var client = host.GetTestClient();

            if (isAdmin)
                client.DefaultRequestHeaders.Add("Authorization", $"Bearer {GetAdminBearerToken()}");

            return client;
        }
    }
}