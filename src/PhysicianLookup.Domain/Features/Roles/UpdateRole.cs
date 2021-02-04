using MediatR;
using PhysicianLookup.Core.Data;
using PhysicianLookup.Core.Models;
using System.Threading;
using System.Threading.Tasks;

namespace PhysicianLookup.Domain.Features
{
    public class UpdateRole
    {
        public class Request : IRequest<Response> {  
            public RoleDto Role { get; set; }
        }

        public class Response
        {
            public RoleDto Role { get; set; }
        }

        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly IPhysicianLookupDbContext _context;

            public Handler(IPhysicianLookupDbContext context) => _context = context;

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken) {

                var role = await _context.Roles.FindAsync(request.Role.RoleId);

                role.Name = request.Role.Name;

                await _context.SaveChangesAsync(cancellationToken);

			    return new Response() { 
                    Role = role.ToDto()
                };
            }
        }
    }
}
