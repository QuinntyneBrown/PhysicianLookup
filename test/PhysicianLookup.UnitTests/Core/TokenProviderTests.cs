using BuildingBlocks.Core.Helpers;
using BuildingBlocks.Core.Identity;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using Xunit;

namespace UnitTests.Core
{
    public class TokenProviderTests
    {
        private readonly TokenProvider _tokenProvider;
        private readonly JwtSecurityTokenHandler _tokenHandler = new JwtSecurityTokenHandler();

        public TokenProviderTests()
        {            
            var secret = SecretGenerator.Generate();

            var values = new Dictionary<string, string> {
                { $"{nameof(Authentication)}:{nameof(Authentication.TokenPath)}","/token" },
                { $"{nameof(Authentication)}:{nameof(Authentication.ExpirationMinutes)}","1" },
                { $"{nameof(Authentication)}:{nameof(Authentication.JwtKey)}", secret },
                { $"{nameof(Authentication)}:{nameof(Authentication.JwtIssuer)}","UnitTests" },
                { $"{nameof(Authentication)}:{nameof(Authentication.JwtAudience)}","UnitTests" },
                { $"{nameof(Authentication)}:{nameof(Authentication.AuthType)}","Test" }
            };

            var configuration = new ConfigurationBuilder()
                .AddInMemoryCollection(values)
                .Build();

            _tokenProvider = new TokenProvider(configuration);

        }

        [Fact]
        public void CreateToken_ShouldBeValid()
        {
            var token = _tokenProvider.Get("uniqueName");

            var securityToken = _tokenHandler.ReadToken(token) as JwtSecurityToken;

            Assert.NotNull(token);

            Assert.Equal("uniqueName", securityToken.Claims.First(x => x.Type == "sub").Value);
        }
    }
}
