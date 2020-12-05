using MediatR;
using PhysicianLookup.Core.Data;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace PhysicianLookup.Domain.Features.Users
{
    public class RemoveUser
    {
        public class Request : IRequest<Unit> {  
            public Guid UserId { get; set; }        
        }

        public class Handler : IRequestHandler<Request, Unit>
        {
            private readonly IPhysicianLookupDbContext _context;

            public Handler(IPhysicianLookupDbContext context) => _context = context;

            public async Task<Unit> Handle(Request request, CancellationToken cancellationToken) {
                
                _context.Users.Remove(await _context.Users.FindAsync(request.UserId));
                
                await _context.SaveChangesAsync(cancellationToken);			    
                
                return new Unit();
            }
        }
    }
}
