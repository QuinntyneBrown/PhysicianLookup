using System;
using System.ComponentModel.DataAnnotations;

namespace PhysicianLookup.Core.Models
{
    public class User
    {
        [Key]
        public Guid UserId { get; set; }
    }

}
