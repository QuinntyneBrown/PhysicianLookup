using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PhysicianLookup.Core.Models
{
    public class TrustRelationship
    {
        [Key]
        public Guid TrustRelationshipId { get; set; }

        [ForeignKey("Trustor")]
        public Guid? TrustorId { get; set; }
        
        [ForeignKey("Trustee")]
        public Guid? TrusteeId { get; set; }
        public User Trustor { get; set; }
        public User Trustee { get; set; }
    }

}
