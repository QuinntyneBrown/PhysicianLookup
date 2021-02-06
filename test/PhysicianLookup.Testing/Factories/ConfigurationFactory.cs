using Microsoft.Extensions.Configuration;
using PhysicianLookup.Api;
using System.IO;

namespace PhysicianLookup.Testing.Factories
{
    public static class ConfigurationFactory
    {
        private static IConfiguration configuration;
        public static IConfiguration Create()
        {
            if (configuration == null)
            {
                var basePath = Path.GetFullPath("../../../../../src/PhysicianLookup.Api");

                configuration = new ConfigurationBuilder()
                    .SetBasePath(basePath)
                    .AddJsonFile("appsettings.json", false)
                    .AddUserSecrets<Startup>()
                    .Build();
            }

            return configuration;
        }
    }
}