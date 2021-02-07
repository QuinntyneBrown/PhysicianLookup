using BuildingBlocks.Core.Behaviors;
using MediatR;
using PhysicianLookup.Core.Data;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace PhysicianLookup.Domain.Features
{
    public class RemoveUser
    {
        public class Request : IRequest<ResponseBase> {  
            public Guid UserId { get; set; }        
        }

        public class Handler : IRequestHandler<Request, ResponseBase>
        {
            private readonly IPhysicianLookupDbContext _context;

            public Handler(IPhysicianLookupDbContext context) => _context = context;

            public async Task<ResponseBase> Handle(Request request, CancellationToken cancellationToken) {
                
                _context.Users.Remove(await _context.Users.FindAsync(request.UserId));
                
                await _context.SaveChangesAsync(cancellationToken);			    
                
                return new ResponseBase();
            }
        }
    }
}
