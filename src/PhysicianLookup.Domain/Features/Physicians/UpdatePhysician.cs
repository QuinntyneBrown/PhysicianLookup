using BuildingBlocks.Core.Behaviors;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using NetTopologySuite;
using NetTopologySuite.Geometries;
using PhysicianLookup.Core;
using PhysicianLookup.Core.Data;
using PhysicianLookup.Core.Models;
using System.Threading;
using System.Threading.Tasks;

namespace PhysicianLookup.Domain.Features
{
    public class UpdatePhysician
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

        public class Response : ResponseBase
        {
            public PhysicianDto Physician { get; set; }
        }

        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly IPhysicianLookupDbContext _context;
            private readonly IGoogleMapsService _googleMapsService;
            private readonly IConfiguration _configuration;
            
            public Handler(IPhysicianLookupDbContext context, IGoogleMapsService googleMapsService, IConfiguration configuration)
            {
                _context = context;
                _googleMapsService = googleMapsService;
                _configuration = configuration;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken) {

                var geometryFactory = NtsGeometryServices.Instance.CreateGeometryFactory(srid: 4326);

                var physician = await _context.Physicians
                    .Include(x => x.Address)
                    .SingleAsync(x => x.PhysicianId == request.Physician.PhysicianId);

                var address = $"{request.Physician.Address.Street}, {request.Physician.Address.City}, {request.Physician.Address.Province}, {request.Physician.Address.PostalCode}";

                physician.Title = request.Physician.Title;
                physician.Firstname = request.Physician.Firstname;
                physician.Lastname = request.Physician.Lastname;
                physician.PhoneNumber = request.Physician.PhoneNumber;
                physician.EmailAddress = request.Physician.EmailAddress;
                physician.Website = request.Physician.Website;

                if (!string.IsNullOrEmpty(_configuration[Constants.GooglePlatformApiKey]))
                {
                    var response = await _googleMapsService.GetCoordinates(address);
                    physician.Address = new Address(
                    request.Physician.Address.Street,
                    request.Physician.Address.City,
                    request.Physician.Address.Province,
                    request.Physician.Address.PostalCode,
                    response.Latitude,
                    response.Longitude,
                    geometryFactory.CreatePoint(new Coordinate(response.Latitude, response.Longitude))
                    );
                }
                else
                {
                    physician.Address = new Address(
                        request.Physician.Address.Street,
                        request.Physician.Address.City,
                        request.Physician.Address.Province,
                        request.Physician.Address.PostalCode
                        );
                }

                await _context.SaveChangesAsync(cancellationToken);

                return new Response()
                {
                    Physician = physician.ToDto()
                };
            }
        }
    }
}
