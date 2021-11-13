using System;
using System.Threading.Tasks;
using Ohpen.Executive.Dashboard.WebApi.Application.Models;

namespace Ohpen.Executive.Dashboard.Abstractions.Services
{
    public interface IFinanceStrategy
    {
        Task<QuarterlyData> GetFinanceForGroupAsync(string group, DateTime from, DateTime to);
    }
}
