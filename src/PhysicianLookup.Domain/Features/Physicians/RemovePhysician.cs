using MediatR;
using System.Threading.Tasks;
using System.Threading;
using PhysicianLookup.Core.Data;
using BuildingBlocks.Core.Behaviors;

namespace PhysicianLookup.Domain.Features
{
    public class RemovePhysician
    {
        public class Request : IRequest<ResponseBase> {
            public PhysicianDto Physician { get; set; }
        }

        public class Handler : IRequestHandler<Request, ResponseBase>
        {
            private readonly IPhysicianLookupDbContext _context;

            public Handler(IPhysicianLookupDbContext context) => _context = context;

            public async Task<ResponseBase> Handle(Request request, CancellationToken cancellationToken) {
                var physician = await _context.Physicians.FindAsync(request.Physician.PhysicianId);
                _context.Physicians.Remove(physician);
                await _context.SaveChangesAsync(cancellationToken);
			    return new ResponseBase() { };
            }
        }
    }
}
