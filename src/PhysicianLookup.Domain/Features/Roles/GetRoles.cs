using BuildingBlocks.Core.Behaviors;
using MediatR;
using Microsoft.EntityFrameworkCore;
using PhysicianLookup.Core.Data;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace PhysicianLookup.Domain.Features
{
    public class GetRoles
    {
        public class Request : IRequest<Response> {  }

        public class Response : ResponseBase
        {
            public List<RoleDto> Roles { get; set; }
        }

        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly IPhysicianLookupDbContext _context;

            public Handler(IPhysicianLookupDbContext context) => _context = context;

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken) {
			    return new Response() { 
                    Roles = await _context.Roles.Select(x => x.ToDto()).ToListAsync()
                };
            }
        }
    }
}
