using PhysicianLookup.Core.Models;
using PhysicianLookup.Domain.Features;

namespace PhysicianLookup.Testing.Builders
{
    public class RoleDtoBuilder
    {
        private RoleDto _roleDto;

        public static RoleDto WithDefaults()
        {
            return new RoleDto();
        }

        public RoleDtoBuilder()
        {
            _roleDto = WithDefaults();
        }

        public RoleDto Build()
        {
            return _roleDto;
        }
    }
}
