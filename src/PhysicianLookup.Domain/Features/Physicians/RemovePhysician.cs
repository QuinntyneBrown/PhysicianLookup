using MediatR;
using System.Threading.Tasks;
using System.Threading;
using PhysicianLookup.Core.Data;

namespace PhysicianLookup.Domain.Features.Physicians
{
    public class RemovePhysician
    {
        public class Request : IRequest<Unit> {
            public PhysicianDto Physician { get; set; }
        }

        public class Handler : IRequestHandler<Request, Unit>
        {
            private readonly IPhysicianLookupDbContext _context;

            public Handler(IPhysicianLookupDbContext context) => _context = context;

            public async Task<Unit> Handle(Request request, CancellationToken cancellationToken) {
                var physician = await _context.Physicians.FindAsync(request.Physician.PhysicianId);
                _context.Physicians.Remove(physician);
                await _context.SaveChangesAsync(cancellationToken);
			    return new Unit() { };
            }
        }
    }
}
