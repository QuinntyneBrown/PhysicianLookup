using BuildingBlocks.Core;
using BuildingBlocks.Core.Identity;
using Microsoft.Extensions.Configuration;
using NetTopologySuite;
using NetTopologySuite.Geometries;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using PhysicianLookup.Core.Data;
using PhysicianLookup.Core.Models;
using System.Linq;

namespace PhysicianLookup.Core.Seeding
{
    public static class SeedData
    {
        public static void Seed(PhysicianLookupDbContext context, IConfiguration configuration)
        {
            RoleConfiguration.Seed(context);
            PhysicianConfiguration.Seed(context);
            UserConfiguration.Seed(context, configuration);
        }

        internal class RoleConfiguration
        {
            public static void Seed(PhysicianLookupDbContext context)
            {
                if(context.Roles.FirstOrDefault(x => x.Name == "Admin") == null)
                {
                    var role = new Role
                    {
                        Name = "Admin"
                    };

                    context.Roles.Add(role);
                }

                if (context.Roles.FirstOrDefault(x => x.Name == "System") == null)
                {
                    var role = new Role
                    {
                        Name = "System"
                    };

                    context.Roles.Add(role);
                }

                context.SaveChanges();
            }
        }

        internal class PhysicianConfiguration
        {
            public static void Seed(PhysicianLookupDbContext context)
            {
                var json = StaticFileLocator.GetAsString("physicians.json");
                var jArray = JsonConvert.DeserializeObject<JObject>(json)["physicians"];
                var geometryFactory = NtsGeometryServices.Instance.CreateGeometryFactory(srid: 4326);

                foreach (var token in jArray)
                {
                    var physician = (JObject)token;

                    _ = context.Physicians.Add(new Physician
                    {
                        Title = (string)physician["title"],
                        Firstname = (string)physician["firstname"],
                        Lastname = (string)physician["lastname"],
                        Address = new Address(
                            (string)physician["street"],
                            (string)physician["city"],
                            (string)physician["province"],
                            (string)physician["postalCode"],
                            (double)physician["longitude"],
                            (double)physician["latitude"],
                            geometryFactory.CreatePoint(new Coordinate((double)physician["longitude"], (double)physician["latitude"]))),
                        EmailAddress = (string)physician["emailAddress"],
                        Website = (string)physician["website"],
                    });
                }

                context.SaveChanges();
            }
        }
        internal class UserConfiguration
        {
            public static void Seed(PhysicianLookupDbContext context, IConfiguration configuration)
            {

                foreach (var username in configuration["Seed:DefaultUser:Username"].Split(','))
                {
                    User user = default;

                    if (context.Users.SingleOrDefault(x => x.Username == username) == null)
                    {
                        user = new User
                        {
                            Username = username,                            
                        };

                        user.UserRoles.Add(new UserRole
                        {
                            RoleId = context.Roles.Single(x => x.Name == "System").RoleId
                        });

                        user.Password = new PasswordHasher().HashPassword(user.Salt, configuration["Seed:DefaultUser:Password"]);

                        context.Users.Add(user);
                    }

                    context.SaveChanges();

                }
            }
        }
    }
}
