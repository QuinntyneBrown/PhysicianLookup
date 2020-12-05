using System;
using System.ComponentModel.DataAnnotations;

namespace PhysicianLookup.Core.Models
{
    public class UserRole
    {
        public Guid UserId { get; set; }
        public Guid RoleId { get; set; }
    }

}