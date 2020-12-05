using System.Collections.Generic;
using System.Security.Claims;

namespace BuildingBlocks.Core.Identity
{
    public interface ITokenProvider
    {
        string Get(string username, List<Claim> customClaims = null);
        ClaimsPrincipal GetPrincipalFromExpiredToken(string token);
        string GenerateRefreshToken();
    }
}
