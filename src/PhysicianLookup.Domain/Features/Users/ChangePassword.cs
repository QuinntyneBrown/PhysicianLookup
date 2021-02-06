using BuildingBlocks.Core.Behaviors;
using MediatR;
using PhysicianLookup.Core.Data;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace PhysicianLookup.Domain.Features
{
    public class ChangePassword
    {
        public class Request : IRequest<ResponseBase> {
            public string Password { get; set; }
            public string ConfirmPassword { get; set; }
        }

        public class Handler : IRequestHandler<Request, ResponseBase>
        {
            private readonly IPhysicianLookupDbContext _context;

            public Handler(IPhysicianLookupDbContext context) {
                _context = context;            
            }

            public async Task<ResponseBase> Handle(Request request, CancellationToken cancellationToken) {

                return new ResponseBase();
            }
        }
    }
}
