using System;
using System.ComponentModel.DataAnnotations;

namespace PhysicianLookup.Core.Models
{
    public class Address
    {
        [Key]
        public Guid AddressId { get; set; }
    }

}
