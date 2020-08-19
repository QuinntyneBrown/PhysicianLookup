using System;
using System.ComponentModel.DataAnnotations;

namespace PhysicianLookup.Core.Models
{
    public class Address
    {
        public string Street { get; set; }
        public string City { get; set; }
        public string Province { get; set; }
        public string PostalCode { get; set; }
    }

}
