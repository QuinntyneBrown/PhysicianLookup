using MediatR;
using Microsoft.EntityFrameworkCore;
using PhysicianLookup.Core.Data;
using PhysicianLookup.Core.Models;
using System.Threading;
using System.Threading.Tasks;

namespace PhysicianLookup.Domain.Features
{
    public class UpdateUser
    {
        public class Request : IRequest<Response> {  
            public UserDto User { get; set; }
        }

        public class Response
        {
            public UserDto User { get; set; }
        }

        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly IPhysicianLookupDbContext _context;

            public Handler(IPhysicianLookupDbContext context) => _context = context;

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken) {

                var user = await _context.Users
                    .Include(x => x.UserRoles)
                    .Include("UserRoles.Role")
                    .FirstAsync(x => x.UserId == request.User.UserId);

                if (user == null)
                {
                    user = new User();
                    await _context.Users.AddAsync(user);
                }

                await _context.SaveChangesAsync(cancellationToken);

			    return new Response() { 
                    User = user.ToDto()
                };
            }
        }
    }
}
