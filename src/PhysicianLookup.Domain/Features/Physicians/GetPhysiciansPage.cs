using BuildingBlocks.Core.Behaviors;
using BuildingBlocks.Core.Extensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using PhysicianLookup.Core.Data;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using static PhysicianLookup.Core.Constants.Paging;

namespace PhysicianLookup.Domain.Features
{
    public class GetPhysiciansPage
    {
        public class Request : IRequest<Response>
        {
            public int PageSize { get; set; } = DefaultPageSize;
            public int PageIndex { get; set; }
        }

        public class Response : ResponseBase
        {
            public int Length { get; set; }
            public List<PhysicianDto> Entities { get; set; }
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

                var length = await _context.Physicians.CountAsync();

                var physicians = await query.Page(request.PageIndex, request.PageSize).Select(x => x.ToDto()).ToListAsync();

                return new ()
                {
                    Length = length,
                    Entities = physicians
                };
            }
        }
    }
}
