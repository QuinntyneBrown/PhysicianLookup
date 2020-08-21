using Microsoft.EntityFrameworkCore;
using NetTopologySuite;
using NetTopologySuite.Geometries;
using PhysicianLookup.Core.Data;
using PhysicianLookup.Core.Models;
using PhysicianLookup.Domain.Features.Physicians;
using System.Net.Http;
using System.Threading.Tasks;
using Xunit;

namespace UnitTests.Domain.Features.Physicians
{
    public class GetNearestPhysiciansTests
    {
        [Fact]
        public async Task ShouldGetClosestPhysicians()
        {
            var options = new DbContextOptionsBuilder<PhysicianLookupDbContext>()
                .UseInMemoryDatabase($"{nameof(GetNearestPhysiciansTests)}:{nameof(ShouldGetClosestPhysicians)}")
                .Options;

            var context = new PhysicianLookupDbContext(options);

            var geometryFactory = NtsGeometryServices.Instance.CreateGeometryFactory(srid: 4326);

            var physician = new Physician
            {
                Location = geometryFactory.CreatePoint(new Coordinate(-79.374770, 43.631460))
            };

            context.Physicians.Add(physician);

            context.SaveChanges();

            var client = new HttpClient();

            GetNearestPhysicians.Request request = new GetNearestPhysicians.Request
            {
                Latitude = 43.663790,
                Longitude = -79.395380
            };

            var handler = new GetNearestPhysicians.Handler(context);

            var response = await handler.Handle(request, default);

            Assert.Single(response.Physicians);
        }
    }
}
