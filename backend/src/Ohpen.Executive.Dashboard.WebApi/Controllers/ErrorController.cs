using System.Net;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Ohpen.Executive.Dashboard.WebApi.Exceptions;
using Ohpen.Hubsa.Common.RestApi.Exceptions;

namespace Ohpen.Executive.Dashboard.WebApi.Controllers
{
    [ApiController]
    [Route("/error")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class ErrorController : ControllerBase
    {
        [HttpGet]
        [HttpDelete]
        [HttpPost]
        [HttpHead]
        [HttpOptions]
        [HttpPatch]
        [HttpPut]
        [ApiExplorerSettings(IgnoreApi = true)]
        public IActionResult ConvertExceptionToProblemDetails([FromServices] IWebHostEnvironment webHostEnvironment)
        {
            var context = HttpContext.Features.Get<IExceptionHandlerFeature>();
            if (context.Error is BadRequestException badRequestException)
            {
                return ProblemDetails(statusCode: HttpStatusCode.BadRequest,
                    title: badRequestException.Title,
                    detail: badRequestException.Message,
                    type: "https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1",
                    webHostEnvironment: webHostEnvironment);
            }

            if ( context.Error is NotFoundException foundException)
            {
                return ProblemDetails(statusCode: HttpStatusCode.NotFound,
                    title: "Not found",
                    detail: foundException.Message,
                    type: "https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4",
                    webHostEnvironment: webHostEnvironment);
            }

            return ProblemDetails(statusCode: HttpStatusCode.InternalServerError,
                title: "Internal server error",
                detail: context.Error.Message,
                type: "https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1",
                webHostEnvironment: webHostEnvironment);
        }

        protected IActionResult ProblemDetails(HttpStatusCode statusCode, string title, string detail, string type, IWebHostEnvironment webHostEnvironment)
        {
            string detailString = detail;
            if ( webHostEnvironment.EnvironmentName == "Development")
            {
                var context = HttpContext.Features.Get<IExceptionHandlerFeature>();
                detailString = context.Error.StackTrace ?? detail;
            }

            return Problem(statusCode: (int)statusCode, title: title, detail: detailString, type: type);
        }
    }
}
