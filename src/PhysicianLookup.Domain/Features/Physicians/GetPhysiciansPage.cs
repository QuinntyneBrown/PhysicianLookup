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
            public int Page { get; set; } = 1;
        }

        public class Response
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

                var physicians = await query.Skip(request.PageSize * (request.Page - 1)).Take(request.PageSize).Select(x => x.ToDto()).ToListAsync();

                return new Response()
                {
                    PhysicianPage = new PhysicianPageDto()
                    {
                        TotalPages = ((int)(count / request.PageSize)) + ((count % request.PageSize) > 0 ? 1 : 0),
                        CurrentPage = request.Page,
                        TotalResults = count,
                        Physicians = physicians
                    }
                };
            }
        }
    }
}
