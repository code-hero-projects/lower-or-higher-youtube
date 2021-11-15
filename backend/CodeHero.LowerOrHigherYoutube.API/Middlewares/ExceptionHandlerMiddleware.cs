using CodeHero.LowerOrHigherYouTube.API.Responses;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;

namespace CodeHero.LowerOrHigherYouTube.API.Middlewares
{
    public class ExceptionHandlerMiddleware
    {
        private readonly RequestDelegate _requestDelegate;

        public ExceptionHandlerMiddleware(RequestDelegate requestDelegate) => _requestDelegate = requestDelegate;

        public async Task InvokeAsync(HttpContext httpContext, ILogger<ExceptionHandlerMiddleware> logger)
        {
            ObjectResult errorResult;

            try
            {
                await _requestDelegate(httpContext);
                return;
            }
            catch (Exception exception)
            {
                logger.LogError(exception, exception.Message);
                var errorResponse = new ErrorResponse()
                {
                    Message = "Internal server error.",
                    Timestamp = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds()
                };

                errorResult = new ObjectResult(errorResponse)
                {
                    StatusCode = (int)HttpStatusCode.InternalServerError
                };
            }

            var result = JsonSerializer.Serialize(errorResult.Value);

            httpContext.Response.ContentType = "application/json";
            if (errorResult.StatusCode != null)
            {
                httpContext.Response.StatusCode = (int)errorResult.StatusCode;
            }

            await httpContext.Response.WriteAsync(result);
        }
    }
}
