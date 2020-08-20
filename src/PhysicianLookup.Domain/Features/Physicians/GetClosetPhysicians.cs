using MediatR;
using System.Threading.Tasks;
using System.Threading;
using PhysicianLookup.Core.Data;
using FluentValidation;
using System.Collections.Generic;

namespace PhysicianLookup.Domain.Features.Physicians
{
    public class GetClosetPhysicians
    {
        public class Validator : AbstractValidator<Request>
        {
            public Validator()
            {

            }
        }

        public class Request : IRequest<Response> {
            public int Latitude { get; set; }
            public int Longitude { get; set; }
        }

        public class Response
        {
            public List<PhysicianDto> Physicians { get; set; }
        }

        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly IPhysicianLookupDbContext _context;

            public Handler(IPhysicianLookupDbContext context) => _context = context;

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken) {
			    // 1. Get all physicians by city
                
                // 2. Calculate distance

                // 3. return closest 10


                return new Response() { 
                
                };
            }
        }
    }
}
