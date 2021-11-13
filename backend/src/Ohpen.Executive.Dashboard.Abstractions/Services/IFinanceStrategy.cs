using System;
using System.Threading.Tasks;
using Ohpen.Executive.Dashboard.WebApi.Application.Models;

namespace Ohpen.Executive.Dashboard.Abstractions.Services
{
    public interface IFinanceStrategy
    {
        string Name { get; }
        Task<QuarterlyData> GetFinanceForGroupAsync(string group, DateTime from, DateTime to);
    }
}
