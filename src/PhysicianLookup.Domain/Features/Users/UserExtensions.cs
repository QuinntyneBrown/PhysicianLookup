using PhysicianLookup.Core.Models;
using PhysicianLookup.Domain.Features;

namespace PhysicianLookup.Domain.Features
{
    public static class UserExtensions
    {
        public static UserDto ToDto(this User user)
        {
            return new UserDto
            {
                UserId = user.UserId,
                Username = user.Username
            };
        }
    }
}
