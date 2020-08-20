using MediatR;
using System.Threading.Tasks;
using System.Threading;
using PhysicianLookup.Core.Data;
using FluentValidation;
using NetTopologySuite.Geometries;
using NetTopologySuite;
using Newtonsoft.Json.Serialization;
using PhysicianLookup.Domain.Features.Geolocation;
using PhysicianLookup.Core.Models;

namespace PhysicianLookup.Domain.Features.Physicians
{
    public class UpsertPhysician
    {
        public class Validator : AbstractValidator<Request>
        {
            public Validator()
            {

            }
        }

        public class Request : IRequest<Response> {
            public PhysicianDto Physician { get; set; }
        }

        public class Response
        {
            public PhysicianDto Physician { get; set; }
        }

        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly IPhysicianLookupDbContext _context;
            private readonly IMediator _mediator;
            
            public Handler(IPhysicianLookupDbContext context, IMediator mediator)
            {
                _context = context;
                _mediator = mediator;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken) {

                var geometryFactory = NtsGeometryServices.Instance.CreateGeometryFactory(srid: 4326);

                var physician = await _context.Physicians.FindAsync(request.Physician.PhysicianId);

                if(physician == null)
                {
                    physician = new Physician();
                    await _context.Physicians.AddAsync(physician);
                }

                var response = await _mediator.Send(new GetLongLatCoordinates.Request() { Address = $"{request.Physician.Street}, {request.Physician.City}, {request.Physician.Province}, {request.Physician.PostalCode}" });

                physician.Firstname = request.Physician.Firstname;
                physician.Firstname = request.Physician.Lastname;
                physician.Firstname = request.Physician.Street;
                physician.Firstname = request.Physician.City;
                physician.Firstname = request.Physician.Province;
                physician.Firstname = request.Physician.Website;
                physician.Firstname = request.Physician.EmailAddress;
                physician.Firstname = request.Physician.PhoneNumber;                
                physician.Longitude = response.Longitude;
                physician.Latitude = response.Latitude;
                physician.Location = geometryFactory.CreatePoint(new Coordinate(physician.Longitude, physician.Latitude));

                await _context.SaveChangesAsync(cancellationToken);

                return new Response() {
                    Physician = physician.ToDto()
                };
            }
        }
    }
}
