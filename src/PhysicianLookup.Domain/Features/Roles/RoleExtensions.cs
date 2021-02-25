using PhysicianLookup.Core.Models;

namespace PhysicianLookup.Domain.Features
{
    public static class RoleExtensions
    {
        public static RoleDto ToDto(this Role role)
        {
            return new ()
            {
                RoleId = role.RoleId,
                Name = role.Name                
            };
        }
    }
}
