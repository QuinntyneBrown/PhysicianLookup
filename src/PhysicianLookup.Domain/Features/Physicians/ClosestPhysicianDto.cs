using System;
using System.Collections.Generic;
using System.Text;

namespace PhysicianLookup.Domain.Features.Physicians
{
    public class ClosestPhysicianDto: PhysicianDto
    {
        public double Distance { get; set; }
    }
}
