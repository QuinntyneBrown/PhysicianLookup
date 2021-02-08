using System;
using System.ComponentModel.DataAnnotations;

namespace PhysicianLookup.Core.Models
{
    public class Physician
    {
        [Key]
        public Guid PhysicianId { get; set; }
        public string Title { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string PhoneNumber { get; set; }
        public string EmailAddress { get; set; }
        public string Website { get; set; }
        public Address Address { get; set; }
    }
}
