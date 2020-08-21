using BuildingBlocks.Core;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using PhysicianLookup.Core.Data;
using PhysicianLookup.Core.Models;

namespace PhysicianLookup.Core.Seeding
{
    public static class SeedData
    {
        public static void Seed(PhysicianLookupDbContext context, IConfiguration configuration = null)
        {
            var json = StaticFileLocator.GetAsString("physicians.json");
            var jsonObject = JsonConvert.DeserializeObject<JArray>(json);

            foreach (var physician in jsonObject)
            {
                context.Physicians.Add(new Physician
                {

                });
            }

            context.SaveChanges();
        }
    }
}
