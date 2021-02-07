using BuildingBlocks.Core.Behaviors;
using MediatR;
using PhysicianLookup.Core.Data;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace PhysicianLookup.Domain.Features
{
    public class GetRoleById
    {
        public class Request : IRequest<Response> {  
            public Guid RoleId { get; set; }        
        }

        public class Response : ResponseBase
        {
            public RoleDto Role { get; set; }
        }

        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly IPhysicianLookupDbContext _context;

            public Handler(IPhysicianLookupDbContext context) => _context = context;

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken) {
			    return new Response() { 
                    Role = (await _context.Roles.FindAsync(request.RoleId)).ToDto()
                };
            }
        }
    }
}
