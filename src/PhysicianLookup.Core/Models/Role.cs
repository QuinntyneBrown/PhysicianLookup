using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace PhysicianLookup.Core.Models
{
    public class Role
    {
        [Key]
        public Guid RoleId { get; set; }
        public string Name { get; set; }
        public ICollection<UserRole> UserRoles { get; set; } = new HashSet<UserRole>();
    }

}
