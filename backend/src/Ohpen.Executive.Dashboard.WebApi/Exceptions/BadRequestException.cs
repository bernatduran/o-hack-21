using System;

namespace Ohpen.Executive.Dashboard.WebApi.Exceptions
{
    public class BadRequestException : Exception
    {
        private const string DefaultTitle = "Bad request";
        public string Title { get; private set; }
        public BadRequestException(string title = DefaultTitle) 
        {
            Title = title;
        }

        public BadRequestException(string message, string title = DefaultTitle) : base(message) 
        {
            Title = title;
        }

        public BadRequestException(Exception? innerException, string title = DefaultTitle, string? message = DefaultTitle) : base(message, innerException) 
        {
            Title = title;
        }
    }
}
