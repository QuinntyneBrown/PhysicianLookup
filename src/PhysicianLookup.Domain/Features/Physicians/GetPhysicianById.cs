using MediatR;
using System.Threading.Tasks;
using System.Threading;
using PhysicianLookup.Core.Data;
using FluentValidation;
using System;

namespace PhysicianLookup.Domain.Features
{
    public class GetPhysicianById
    {
        public class Validator : AbstractValidator<Request>
        {
            public Validator()
            {

            }
        }

        public class Request : IRequest<Response> {
            public Guid PhysicianId { get; set; }
        }

        public class Response
        {
            public PhysicianDto Physician { get; set; }
        }

        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly IPhysicianLookupDbContext _context;

            public Handler(IPhysicianLookupDbContext context) => _context = context;

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken) {
			    return new Response() { 
                    Physician = (await _context.Physicians.FindAsync(request.PhysicianId)).ToDto()
                };
            }
        }
    }
}
