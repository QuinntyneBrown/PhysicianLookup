using PhysicianLookup.Core.Models;

namespace PhysicianLookup.Testing.Builders
{
    public class PhysicianBuilder
    {
        private Physician _physician;

        public static Physician WithDefaults()
        {
            return new Physician();
        }

        public PhysicianBuilder()
        {
            _physician = WithDefaults();
        }

        public Physician Build()
        {
            return _physician;
        }
    }
}
