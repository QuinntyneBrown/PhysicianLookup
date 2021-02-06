using BuildingBlocks.Core.Identity;
using MediatR;
using Microsoft.EntityFrameworkCore;
using PhysicianLookup.Core.Data;
using System.Threading;
using System.Threading.Tasks;

namespace PhysicianLookup.Domain.Features
{
    public class Refresh
    {
        public class Request : IRequest<Response> {
            public string AccessToken { get; set; }
            public string RefreshToken { get; set; }
        }

        public class Response
        {
            public string AccessToken { get; set; }
            public string RefreshToken { get; set; }
        }

        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly IPhysicianLookupDbContext _context;
            private readonly ITokenProvider _tokenProvider;
            public Handler(IPhysicianLookupDbContext context, ITokenProvider tokenProvider) {
                _context = context;
                _tokenProvider = tokenProvider;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken) {

                var principal = _tokenProvider.GetPrincipalFromExpiredToken(request.AccessToken);
                var username = principal.Identity.Name;
                var user = await _context.Users.FirstOrDefaultAsync(x => x.Username == username);
                var refreshToken = user.RefreshToken;

                if (refreshToken != request.RefreshToken)
                {
                    return null;
                }
                
                var accessToken = _tokenProvider.Get(username);
                user.RefreshToken = _tokenProvider.GenerateRefreshToken();

                await _context.SaveChangesAsync(cancellationToken);

                return new Response
                {
                    AccessToken = accessToken,
                    RefreshToken = user.RefreshToken
                };
            }
        }
    }
}
