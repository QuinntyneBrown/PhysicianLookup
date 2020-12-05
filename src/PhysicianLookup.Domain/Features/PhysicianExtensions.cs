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
                Title = physician.Title,
                Firstname = physician.Firstname,
                Lastname = physician.Lastname,
                Street = physician.Address.Street,
                City = physician.Address.City,
                Province = physician.Address.Province,
                PostalCode = physician.Address.PostalCode,
                EmailAddress = physician.EmailAddress,
                Website = physician.Website,
                PhoneNumber = physician.PhoneNumber,
                Longitude = physician.Address.Longitude,
                Latitude = physician.Address.Latitude
            };
        }
    }
}
