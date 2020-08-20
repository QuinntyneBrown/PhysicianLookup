using MediatR;
using System.Threading.Tasks;
using System.Threading;
using PhysicianLookup.Core.Data;
using FluentValidation;
using System.Collections.Generic;
using System.Linq;
using NetTopologySuite;
using NetTopologySuite.Geometries;
using Microsoft.EntityFrameworkCore;

namespace PhysicianLookup.Domain.Features.Physicians
{
    public class GetClosetPhysicians
    {
        public class Validator : AbstractValidator<Request>
        {
            public Validator()
            {

            }
        }

        public class Request : IRequest<Response> {
            public int Latitude { get; set; }
            public int Longitude { get; set; }
        }

        public class Response
        {
            public List<PhysicianDto> Physicians { get; set; }
        }

        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly IPhysicianLookupDbContext _context;

            public Handler(IPhysicianLookupDbContext context) => _context = context;

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken) {

                var geometryFactory = NtsGeometryServices.Instance.CreateGeometryFactory(srid: 4326);
                
                var location = geometryFactory.CreatePoint(new Coordinate(request.Longitude, request.Latitude));

                return new Response() { 
                    Physicians = await _context.Physicians.Where(x => x.Location.IsWithinDistance(location, 500))
                    .Select(x => x.ToDto())
                    .ToListAsync()
                };
            }
        }
    }
}
