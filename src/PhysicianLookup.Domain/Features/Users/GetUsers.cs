using MediatR;
using Microsoft.EntityFrameworkCore;
using PhysicianLookup.Core.Data;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace PhysicianLookup.Domain.Features
{
    public class GetUsers
    {
        public class Request : IRequest<Response> {  }

        public class Response
        {
            public List<UserDto> Users { get; set; }
        }

        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly IPhysicianLookupDbContext _context;

            public Handler(IPhysicianLookupDbContext context) => _context = context;

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken) {
			    return new Response() { 
                    Users = await _context.Users.Select(x => x.ToDto()).ToListAsync()
                };
            }
        }
    }
}
