using FluentValidation;
using MediatR;
using NetTopologySuite;
using NetTopologySuite.Geometries;
using PhysicianLookup.Core.Data;
using PhysicianLookup.Core.Models;
using PhysicianLookup.Domain.Features.GeoLocation;
using System.Threading;
using System.Threading.Tasks;

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
            private readonly IGoogleMapsService _googleMapsService;
            
            public Handler(IPhysicianLookupDbContext context, IGoogleMapsService googleMapsService)
            {
                _context = context;
                _googleMapsService = googleMapsService;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken) {

                var physician = await _context.Physicians.FindAsync(request.Physician.PhysicianId);

                var geometryFactory = NtsGeometryServices.Instance.CreateGeometryFactory(srid: 4326);

                if (physician == null)
                {
                    physician = new Physician();
                    await _context.Physicians.AddAsync(physician);
                }
                var address = $"{request.Physician.Street}, {request.Physician.City}, {request.Physician.Province}, {request.Physician.PostalCode}";

                var response = await _googleMapsService.GetCoordinates(address);

                physician.Title = request.Physician.Title;
                physician.Firstname = request.Physician.Firstname;
                physician.Lastname = request.Physician.Lastname;
                physician.PhoneNumber = request.Physician.PhoneNumber;
                physician.EmailAddress = request.Physician.EmailAddress;
                physician.Website = request.Physician.Website;
                physician.Address = new Address(
                    request.Physician.Street,
                    request.Physician.City,
                    request.Physician.Province,
                    request.Physician.PostalCode,
                    response.Latitude,
                    response.Longitude,
                    geometryFactory.CreatePoint(new Coordinate(response.Latitude, response.Longitude)));

                await _context.SaveChangesAsync(cancellationToken);

                return new Response()
                {
                    Physician = physician.ToDto()
                };
            }
        }
    }
}
