using BuildingBlocks.Core.Behaviors;
using MediatR;
using Microsoft.EntityFrameworkCore;
using PhysicianLookup.Core.Data;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace PhysicianLookup.Domain.Features
{
    public class GetPhysiciansPage
    {
        public class Request : IRequest<Response>
        {
            public int PageSize { get; set; } = 10;
            public int PageNumber { get; set; } = 1;
        }

        public class Response : ResponseBase
        {
            public PhysicianPageDto PhysicianPage { get; set; }
        }

        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly IPhysicianLookupDbContext _context;

            public Handler(IPhysicianLookupDbContext context)
            {
                _context = context;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {

                var query = from physician in _context.Physicians
                            select physician;

                var count = await _context.Physicians.CountAsync();

                var physicians = await query.Skip(request.PageSize * (request.PageNumber - 1)).Take(request.PageSize).Select(x => x.ToDto()).ToListAsync();

                return new ()
                {
                    PhysicianPage = new PhysicianPageDto()
                    {
                        TotalPages = (count / request.PageSize) + ((count % request.PageSize) > 0 ? 1 : 0),
                        CurrentPage = request.PageNumber,
                        Length = count,
                        Entities = physicians
                    }
                };
            }
        }
    }
}
