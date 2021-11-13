using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;
using Ohpen.Executive.Dashboard.Connectors.AwsBilling;
using Ohpen.Executive.Dashboard.WebApi.Application.Interfaces;
using Ohpen.Executive.Dashboard.WebApi.Application.Services;

namespace Ohpen.Executive.Dashboard.WebApi.Application
{
    public static class ServiceCollectionExtensions
    {
        public static void RegisterApplicationServices(this IServiceCollection services)
        {
            services.RegisterDateManager();
            services.RegisterFinanceManager();
        }

        static void RegisterFinanceManager(this IServiceCollection services)
        {
            services.RegisterAwsBilling();
            services.AddTransient<IFinanceManager, FinanceManager>();
        }

        static void RegisterDateManager(this IServiceCollection services)
        {
            services.AddTransient<IDateManager, DateManager>();
        }


    }
}
