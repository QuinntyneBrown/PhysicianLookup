using System;
using System.Collections.Generic;

namespace PhysicianLookup.Domain.Features
{
    public class PhysicianPageDto
    {
        public int TotalPages { get; set; }
        public int CurrentPage { get; set; }
        public int Length { get; set; }
        public List<PhysicianDto> Entities { get; set; }
    }
}
