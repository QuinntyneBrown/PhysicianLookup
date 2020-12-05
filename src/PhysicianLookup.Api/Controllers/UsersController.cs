using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PhysicianLookup.Domain.Features.Identity;
using PhysicianLookup.Domain.Features.Users;
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

        [HttpPost("refresh", Name = "UserRefreshRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(Authenticate.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<Refresh.Response>> Refresh([FromBody]Refresh.Request request)
        {
            var response = await _mediator.Send(request);

            if(response == null)
            {
                return new UnauthorizedResult();
            }

            return response;
        }

        [Authorize]
        [HttpPost(Name = "UpsertUserRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(UpsertUser.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<UpsertUser.Response>> Upsert([FromBody] UpsertUser.Request request)
            => await _mediator.Send(request);

        [Authorize]
        [HttpDelete("{userId}", Name = "RemoveUserRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task Remove([FromRoute] RemoveUser.Request request)
            => await _mediator.Send(request);

        [Authorize]
        [HttpGet("{userId}", Name = "GetUserByIdRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetUserById.Response), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.NotFound)]
        public async Task<ActionResult<GetUserById.Response>> GetById([FromRoute] GetUserById.Request request)
        {
            var response = await _mediator.Send(request);

            if (response.User == null)
            {
                return new NotFoundObjectResult(request.UserId);
            }

            return response;
        }

        [Authorize]
        [HttpGet(Name = "GetusersRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetUsers.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<GetUsers.Response>> Get()
            => await _mediator.Send(new GetUsers.Request());
    }
}
