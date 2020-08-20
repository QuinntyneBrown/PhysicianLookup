using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using NetTopologySuite;
using NetTopologySuite.Geometries;
using PhysicianLookup.Core.Data;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace PhysicianLookup.Domain.Features.Physicians
{
    public class GetClosestPhysicians
    {
        public class Validator : AbstractValidator<Request>
        {
            public Validator()
            {

            }
        }

        public class Request : IRequest<Response> {
            public double Latitude { get; set; }
            public double Longitude { get; set; }
        }

        public class Response
        {
            public List<ClosestPhysicianDto> Physicians { get; set; }
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
                    .OrderBy(x => x.Location.Distance(location))
                    .Select(x => x.ToClosestDto(location))
                    .ToListAsync()
                };
            }
        }
    }
}
