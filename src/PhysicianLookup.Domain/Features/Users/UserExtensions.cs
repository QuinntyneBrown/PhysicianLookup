using PhysicianLookup.Core.Models;

namespace PhysicianLookup.Domain.Features
{
    public static class UserExtensions
    {
        public static UserDto ToDto(this User user)
        {
            return new ()
            {
                UserId = user.UserId,
                Username = user.Username
            };
        }
    }
}
