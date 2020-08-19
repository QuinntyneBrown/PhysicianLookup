using PhysicianLookup.Domain.Features.Identity;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Threading.Tasks;

namespace PhysicianLookup.Api.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UsersController
    {
        private readonly IMediator _mediator;
        
        public UsersController(IMediator mediator)
            => _mediator = mediator;

        [HttpPost("token", Name = "UserSignInRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(Authenticate.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<Authenticate.Response>> SignIn(Authenticate.Request request)
            => await _mediator.Send(request);
    }
}
