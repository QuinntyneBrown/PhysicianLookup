using PhysicianLookup.Core.Models;
using PhysicianLookup.Domain.Features;

namespace PhysicianLookup.Domain.Features
{
    public static class RoleExtensions
    {
        public static RoleDto ToDto(this Role role)
        {
            return new RoleDto
            {
                RoleId = role.RoleId,
                Name = role.Name                
            };
        }
    }
}
