using PhysicianLookup.Core.Models;
using PhysicianLookup.Domain.Features;

namespace PhysicianLookup.Testing.Builders
{
    public class PhysicianDtoBuilder
    {
        private PhysicianDto _physicianDto;

        public static PhysicianDto WithDefaults()
        {
            return new PhysicianDto();
        }

        public PhysicianDtoBuilder()
        {
            _physicianDto = WithDefaults();
        }

        public PhysicianDto Build()
        {
            return _physicianDto;
        }
    }
}
