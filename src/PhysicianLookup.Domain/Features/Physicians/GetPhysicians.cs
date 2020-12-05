using MediatR;
using Microsoft.EntityFrameworkCore;
using PhysicianLookup.Core.Data;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace PhysicianLookup.Domain.Features.Physicians
{
    public class GetPhysicians
    {
        public class Request : IRequest<Response> {  }

        public class Response
        {
            public List<PhysicianDto> Physicians { get; set; }
        }

        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly IPhysicianLookupDbContext _context;

            public Handler(IPhysicianLookupDbContext context) => _context = context;

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken) {
			    return new Response() { 
                    Physicians = await _context.Physicians.Select(x => x.ToDto()).ToListAsync()
                };
            }
        }
    }
}
