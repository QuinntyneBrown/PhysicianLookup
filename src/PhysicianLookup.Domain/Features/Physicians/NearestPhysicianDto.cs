namespace PhysicianLookup.Domain.Features.Physicians
{
    public class NearestPhysicianDto
    {
        public PhysicianDto Physician { get; set; }
        public double Distance { get; set; }
    }
}
