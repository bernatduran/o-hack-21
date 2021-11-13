using System;
using Ohpen.Executive.Dashboard.WebApi.Application.Models;

namespace Ohpen.Executive.Dashboard.Abstractions
{
    public interface IFinanceStrategy
    {
        QuarterlyData GetFinanceForGroup(string group, DateTime from, DateTime to);
    }
}
