using MediatR;
using System.Threading.Tasks;
using System.Threading;
using PhysicianLookup.Core.Data;
using FluentValidation;

namespace PhysicianLookup.Domain.Features.Physicians
{
    public class UpsertPhysician
    {
        public class Validator : AbstractValidator<Request>
        {
            public Validator()
            {

            }
        }

        public class Request : IRequest<Response> { 
        
        }

        public class Response
        {

        }

        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly IPhysicianLookupDbContext _context;

            public Handler(IPhysicianLookupDbContext context) => _context = context;

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken) {
			    return new Response() { };
            }
        }
    }
}
