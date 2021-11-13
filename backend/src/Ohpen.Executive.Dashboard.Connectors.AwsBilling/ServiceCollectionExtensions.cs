using System;
using Microsoft.Extensions.DependencyInjection;

namespace Ohpen.Executive.Dashboard.Connectors.AwsBilling
{
    public static class ServiceCollectionExtensions
    {
        static void RegisterFinanceManager(this IServiceCollection services)
        {
            services.AddTransient<IFinanceManager, FinanceManager>();
        }

    }
}
