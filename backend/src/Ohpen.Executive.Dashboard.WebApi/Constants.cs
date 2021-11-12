using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ohpen.Executive.Dashboard.WebApi
{
    public static partial class Constants
    {
        public const string ServiceName = "Ohpen.Executive.Dashboard.WebApi";
        public const string AllowAnyOriginPolicyName = "allow-any-origin-policy";


        public partial class SwaggerVersions
        {
            public const string V1 = "v1";
        }

        public static class Headers
        {
            public const string ApiVersion = "accept-version";
        }

        public static partial class ApiVersions
        {
            public const int V1_NUMBER = 1;
            public const int DEFAULT_VERSION_NUMBER = 1;

            public const string V1 = "1";
            public const string DEFAULT_VERSION = "1";

            public const string API_DEPRECATED_VERSIONS = "Api-Deprecated-Versions";
            public const string API_SUPPORTED_VERSIONS = "Api-Supported-Versions";
            public const string CONTENT_VERSION = "Content-Version";
            public const string ACCEPT_VERSION = "Accept-Version";
        }
    }
}
