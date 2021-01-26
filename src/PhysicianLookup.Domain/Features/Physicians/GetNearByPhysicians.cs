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

namespace PhysicianLookup.Domain.Features
{
    public class GetNearByPhysicians
    {
        public class Request : IRequest<Response> {
            public double Latitude { get; set; }
            public double Longitude { get; set; }
        }

        public class Response
        {
            public List<NearByPhysicianDto> Physicians { get; set; }
        }

        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly IPhysicianLookupDbContext _context;

            public Handler(IPhysicianLookupDbContext context) => _context = context;

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken) {

                var geometryFactory = NtsGeometryServices.Instance.CreateGeometryFactory(srid: 4326);

                var location = geometryFactory.CreatePoint(new Coordinate(request.Longitude, request.Latitude));

                return new Response()
                {
                    Physicians = await _context.Physicians.Where(x => x.Address.Location.IsWithinDistance(location, 30000))
                    .OrderByDescending(x => x.Address.Location.Distance(location))
                    .Select(x => new NearByPhysicianDto
                    {
                        Physician = x.ToDto(),
                        Distance = $"{x.Address.Location.ProjectTo(2855).Distance(location.ProjectTo(2855)) / 1000:0.0} km"
                    })
                    .ToListAsync()
                };

            }
        }
    }
}
