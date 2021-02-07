using BuildingBlocks.Core.Behaviors;
using MediatR;
using PhysicianLookup.Core.Data;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace PhysicianLookup.Domain.Features
{
    public class RemoveRole
    {
        public class Request : IRequest<ResponseBase> {  
            public Guid RoleId { get; set; }        
        }

        public class Handler : IRequestHandler<Request, ResponseBase>
        {
            private readonly IPhysicianLookupDbContext _context;

            public Handler(IPhysicianLookupDbContext context) => _context = context;

            public async Task<ResponseBase> Handle(Request request, CancellationToken cancellationToken) {
                
                _context.Roles.Remove(await _context.Roles.FindAsync(request.RoleId));
                
                await _context.SaveChangesAsync(cancellationToken);			    
                
                return new ResponseBase();
            }
        }
    }
}
