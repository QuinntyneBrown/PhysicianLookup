using System;
using System.ComponentModel.DataAnnotations;

namespace PhysicianLookup.Core.Models
{
    public class Physician
    {
        [Key]
        public Guid PhysicianId { get; set; }
    }

}
