using BuildingBlocks.Core;
using Microsoft.EntityFrameworkCore;
using NetTopologySuite.Geometries;
using System.Collections.Generic;

namespace PhysicianLookup.Core.Models
{
    [Owned]
    public class Address : ValueObject
    {
        public string Street { get; private set; }
        public string City { get; private set; }
        public string Province { get; private set; }
        public string PostalCode { get; private set; }
        public double Latitude { get; private set; }
        public double Longitude { get; private set; }
        public Point Location { get; private set; }

        public Address(string street, string city, string province, string postalCode, double longitude, double latitude, Point location)
        {            
            Street = street;
            City = city;
            Province = province;
            PostalCode = postalCode;
            Longitude = longitude;
            Latitude = latitude;
            Location = location;
        }

        protected override IEnumerable<object> GetAtomicValues()
        {
            yield return Street;
            yield return City;
            yield return Province;
            yield return PostalCode;
            yield return Longitude;
            yield return Latitude;
            yield return Location;
        }
    }
}
