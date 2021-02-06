using System;

namespace PhysicianLookup.Domain.Features
{
    public class PhysicianDto
    {
        public Guid? PhysicianId { get; set; }
        public string Title { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string PhoneNumber { get; set; }
        public string EmailAddress { get; set; }
        public string Website { get; set; }
        public AddressDto Address { get; set; }
    }
}
