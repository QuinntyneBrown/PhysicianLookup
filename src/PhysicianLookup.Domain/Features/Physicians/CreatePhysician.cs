using FluentValidation;
using MediatR;
using NetTopologySuite;
using NetTopologySuite.Geometries;
using PhysicianLookup.Core.Data;
using PhysicianLookup.Core.Models;
using System.Threading;
using System.Threading.Tasks;

namespace PhysicianLookup.Domain.Features
{
    public class CreatePhysician
    {
        public class Validator : AbstractValidator<Request>
        {
            public Validator()
            {
                RuleFor(x => x.Physician).SetValidator(new PhysicianDtoValidator());
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

                var geometryFactory = NtsGeometryServices.Instance.CreateGeometryFactory(srid: 4326);

                var physician = new Physician();

                await _context.Physicians.AddAsync(physician);

                var address = $"{request.Physician.Address.Street}, {request.Physician.Address.City}, {request.Physician.Address.Province}, {request.Physician.Address.PostalCode}";

                var response = await _googleMapsService.GetCoordinates(address);

                physician.Title = request.Physician.Title;
                physician.Firstname = request.Physician.Firstname;
                physician.Lastname = request.Physician.Lastname;
                physician.PhoneNumber = request.Physician.PhoneNumber;
                physician.EmailAddress = request.Physician.EmailAddress;
                physician.Website = request.Physician.Website;
                physician.Address = new Address(
                    request.Physician.Address.Street,
                    request.Physician.Address.City,
                    request.Physician.Address.Province,
                    request.Physician.Address.PostalCode,
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
