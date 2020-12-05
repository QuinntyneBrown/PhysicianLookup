using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Security.Cryptography;

namespace PhysicianLookup.Core.Models
{
    public class User
    {
        public User()
        {
            Salt = new byte[128 / 8];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(Salt);
            }
        }

        [Key]
        public Guid UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string RefreshToken { get; set; }
        public byte[] Salt { get; private set; }
        public ICollection<UserRole> UserRoles { get; set; }
        = new HashSet<UserRole>();

    }

}
