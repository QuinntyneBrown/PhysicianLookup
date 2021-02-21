using PhysicianLookup.Core.Models;

namespace PhysicianLookup.Testing.Builders
{
    public class AddressBuilder
    {
        private Address _address;

        public static Address WithDefaults(string street, string city, string province, string postalCode)
        {
            return new Address(street,city,province,postalCode,default, default, default);
        }

        public AddressBuilder(string street, string city, string province, string postalCode)
        {
            _address = WithDefaults(street,city,province,postalCode);
        }

        public Address Build()
        {
            return _address;
        }
    }
}
