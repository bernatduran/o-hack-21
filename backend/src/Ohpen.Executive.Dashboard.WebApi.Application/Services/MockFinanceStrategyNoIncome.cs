using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Ohpen.Executive.Dashboard.Abstractions;
using Ohpen.Executive.Dashboard.Abstractions.Services;
using Ohpen.Executive.Dashboard.WebApi.Application.Models;

namespace Ohpen.Executive.Dashboard.WebApi.Application.Services
{
    internal class MockFinanceStrategyNoIncome : IFinanceStrategy
    {
        public Task<QuarterlyData> GetFinanceForGroupAsync(string group, DateTime from, DateTime to)
        {
            var rnd = new Random();
            return Task.FromResult(new QuarterlyData()
            {
                ExpectedIncome = 0M,
                CurrentIncome = 0M,
                ExpectedOutcome = rnd.Next(1, 20) * 150000M,
                CurrentOutcome = rnd.Next(1, 20) * 135621M
            });
        }

    }
}
