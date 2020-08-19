using PhysicianLookup.Core.Models;
using PhysicianLookup.Domain.Features.Physicians;

namespace PhysicianLookup.Domain.Features
{
    public static class PhysicianExtensions
    {
        public static PhysicianDto ToDto(this Physician physician)
        {
            return new PhysicianDto
            {
                PhysicianId = physician.PhysicianId,
                Firstname = physician.Firstname,
                Lastname = physician.Lastname,
                Street = physician.Street,
                City = physician.City,
                Province = physician.Province,
                PostalCode = physician.PostalCode,
                EmailAddress = physician.EmailAddress,
                Website = physician.Website,
                PhoneNumber = physician.PhoneNumber,
                Longitude = physician.Longitude,
                Latitude = physician.Latitude
            };
        }
    }
}
