using PhysicianLookup.Core.Models;

namespace PhysicianLookup.Testing.Builders
{
    public class RoleBuilder
    {
        private Role _role;

        public static Role WithDefaults()
        {
            return new Role();
        }

        public RoleBuilder()
        {
            _role = WithDefaults();
        }

        public Role Build()
        {
            return _role;
        }
    }
}
