using NetTopologySuite.Geometries;
using PhysicianLookup.Domain.Features;
using Xunit;

namespace UnitTests.Domain.Features
{
    public class GeometryExtensionsTests
    {
        //https://stackoverflow.com/questions/61452283/ef-core-spatial-data-query-and-get-distances-in-meters

        [Fact]
        public void ShouldCalculateDistance()
        {
            var seattle = new Point(-122.333056, 47.609722) { SRID = 4326 };
            var redmond = new Point(-122.123889, 47.669444) { SRID = 4326 };

            var distance = seattle.ProjectTo(2855).Distance(redmond.ProjectTo(2855));

            Assert.NotEqual(default, distance);
        }
    }
}
