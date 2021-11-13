using System;
using System.Collections.Generic;
using System.Text;
using Ohpen.Executive.Dashboard.Abstractions;
using Ohpen.Executive.Dashboard.WebApi.Application.Models;

namespace Ohpen.Executive.Dashboard.WebApi.Application.Services
{
    internal class MockFinanceStrategyNoIncome : IFinanceStrategy
    {
        public QuarterlyData GetFinanceForGroup(string group, DateTime from, DateTime to)
        {
            var rnd = new Random();
            return new QuarterlyData()
            {
                ExpectedIncome = 0M,
                CurrentIncome = 0M,
                ExpectedOutcome = rnd.Next(1, 20) * 150000M,
                CurrentOutcome = rnd.Next(1, 20) * 135621M
            };
        }

    }
}
