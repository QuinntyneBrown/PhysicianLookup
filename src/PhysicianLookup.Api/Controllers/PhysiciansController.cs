using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Threading.Tasks;
using PhysicianLookup.Domain.Features.Physicians;
using Microsoft.AspNetCore.Authorization;

namespace PhysicianLookup.Api.Controllers
{    
    [Authorize]
    [ApiController]
    [Route("api/physicians")]
    public class PhysiciansController
    {
        private readonly IMediator _mediator;

        public PhysiciansController(IMediator mediator) => _mediator = mediator;

        [HttpPut(Name = "UpsertPhysicianRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(UpsertPhysician.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<UpsertPhysician.Response>> Upsert([FromBody]UpsertPhysician.Request request)
            => await _mediator.Send(request);
        
        [HttpDelete("{physicianId}", Name = "RemovePhysicianRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task Remove([FromRoute]RemovePhysician.Request request)
            => await _mediator.Send(request);            

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

        [HttpGet(Name = "GetPhysiciansRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetPhysicians.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<GetPhysicians.Response>> Get()
            => await _mediator.Send(new GetPhysicians.Request());

        [AllowAnonymous]
        [HttpGet(Name = "SearchPhysiciansRoute")]
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
        [HttpGet("nearest/{latitude}/{longitude}", Name = "GetNearestPhysiciansRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetNearestPhysicians.Response), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(GetNearestPhysicians.Request), (int)HttpStatusCode.NotFound)]
        public async Task<ActionResult<GetNearestPhysicians.Response>> GetNearest([FromRoute] GetNearestPhysicians.Request request)
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
