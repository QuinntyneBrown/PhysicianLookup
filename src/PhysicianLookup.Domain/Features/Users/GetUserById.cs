using MediatR;
using PhysicianLookup.Core.Data;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace PhysicianLookup.Domain.Features.Users
{
    public class GetUserById
    {
        public class Request : IRequest<Response> {  
            public Guid UserId { get; set; }        
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
			    return new Response() { 
                    User = (await _context.Users.FindAsync(request.UserId)).ToDto()
                };
            }
        }
    }
}