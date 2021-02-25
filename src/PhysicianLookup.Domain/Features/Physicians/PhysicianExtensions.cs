using PhysicianLookup.Core.Models;

namespace PhysicianLookup.Domain.Features
{
    public static class PhysicianExtensions
    {
        public static PhysicianDto ToDto(this Physician physician)
        {
            return new ()
            {
                PhysicianId = physician.PhysicianId,
                Title = physician.Title,
                Firstname = physician.Firstname,
                Lastname = physician.Lastname,
                EmailAddress = physician.EmailAddress,
                Website = physician.Website,
                PhoneNumber = physician.PhoneNumber,
                Address = physician.Address.ToDto()
            };
        }
    }
}
