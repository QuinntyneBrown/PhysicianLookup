using NetTopologySuite.Geometries;
using System;
using System.ComponentModel.DataAnnotations;

namespace PhysicianLookup.Core.Models
{
    public class Physician
    {
        [Key]
        public Guid PhysicianId { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string Province { get; set; }
        public string PostalCode { get; set; }
        public string PhoneNumber { get; set; }
        public string EmailAddress { get; set; }
        public string Website { get; set; }
        public double Longitude { get; set; }
        public double Latitude { get; set; }
        public Point Location { get; set; }
    }

}
