using MediatR;
using Microsoft.EntityFrameworkCore;
using PhysicianLookup.Core.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace PhysicianLookup.Domain.Features.Users
{
    public class ChangePassword
    {
        public class Request : IRequest<Response> {
            public string Password { get; set; }
            public string ConfirmPassword { get; set; }
        }

        public class Response
        {

        }

        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly IPhysicianLookupDbContext _context;

            public Handler(IPhysicianLookupDbContext context) {
                _context = context;            
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken) {
			    throw new Exception();
            }
        }
    }
}
