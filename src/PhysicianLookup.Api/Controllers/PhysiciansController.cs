using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PhysicianLookup.Domain.Features;
using System.Net;
using System.Threading.Tasks;

namespace PhysicianLookup.Api.Controllers
{
    [ApiController]
    [Route("api/physicians")]
    public class PhysiciansController
    {
        private readonly IMediator _mediator;

        public PhysiciansController(IMediator mediator) => _mediator = mediator;

        [Authorize]
        [HttpPost(Name = "CreatePhysicianRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(CreatePhysician.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<CreatePhysician.Response>> Create([FromBody]CreatePhysician.Request request)
            => await _mediator.Send(request);

        [Authorize]
        [HttpPut(Name = "UpdatePhysicianRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(UpdatePhysician.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<UpdatePhysician.Response>> Update([FromBody] UpdatePhysician.Request request)
            => await _mediator.Send(request);

        [Authorize]
        [HttpDelete("{physicianId}", Name = "RemovePhysicianRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task Remove([FromRoute]RemovePhysician.Request request)
            => await _mediator.Send(request);

        [Authorize]
        [HttpGet("{physicianId}", Name = "GetPhysicianByIdRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetPhysicianById.Response), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.NotFound)]
        public async Task<ActionResult<GetPhysicianById.Response>> GetById([FromRoute]GetPhysicianById.Request request)
        {
            var response = await _mediator.Send(request);

            if (response.Physician == null)
            {
                return new NotFoundObjectResult(request.PhysicianId);
            }

            return response;
        }

        [Authorize]
        [HttpGet(Name = "GetPhysiciansRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetPhysicians.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<GetPhysicians.Response>> Get()
            => await _mediator.Send(new GetPhysicians.Request());

        [Authorize]
        [HttpGet("page/{pageSize}/{pageIndex}", Name = "GetPhysiciansPageRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetPhysicians.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<GetPhysiciansPage.Response>> GetPage([FromRoute]GetPhysiciansPage.Request request)
            => await _mediator.Send(request);

        [AllowAnonymous]
        [HttpGet("search/{query}", Name = "SearchPhysiciansRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(SearchPhysicians.Response), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.NotFound)]
        public async Task<ActionResult<SearchPhysicians.Response>> Search([FromRoute]SearchPhysicians.Request request)
        {
            var response = await _mediator.Send(request);

            if (response.Physicians.Count == 0)
            {
                return new NotFoundObjectResult(request.Query);
            }

            return response;
        }

        [AllowAnonymous]
        [HttpGet("nearby/{longitude}/{latitude}", Name = "GetNearByPhysiciansRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetNearByPhysicians.Response), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(GetNearByPhysicians.Request), (int)HttpStatusCode.NotFound)]
        public async Task<ActionResult<GetNearByPhysicians.Response>> GetNearBy([FromRoute] GetNearByPhysicians.Request request)
        {
            var response = await _mediator.Send(request);

            if(response.Physicians.Count == 0)
            {
                return new NotFoundObjectResult(request);
            }

            return response;
        }           
    }
}
