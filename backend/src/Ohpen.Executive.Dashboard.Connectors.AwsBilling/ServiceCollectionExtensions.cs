using System;
using Amazon.CostExplorer;
using Microsoft.Extensions.DependencyInjection;
using Ohpen.Executive.Dashboard.Abstractions.Services;
using Ohpen.Executive.Dashboard.Connectors.AwsBilling.Services;

namespace Ohpen.Executive.Dashboard.Connectors.AwsBilling
{
    public static class ServiceCollectionExtensions
    {
        public static void RegisterAwsBilling(this IServiceCollection services)
        {
            services.AddSingleton<IAmazonCostExplorer, AmazonCostExplorerClient>();
            services.AddSingleton<IFinanceStrategy, AwsCostExplorerFinanceStrategy>();
        }

    }
}
