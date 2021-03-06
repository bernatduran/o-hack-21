using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Ohpen.Executive.Dashboard.Abstractions;
using Ohpen.Executive.Dashboard.Abstractions.Services;
using Ohpen.Executive.Dashboard.WebApi.Application.Interfaces;
using Ohpen.Executive.Dashboard.WebApi.Application.Models;
using Ohpen.Executive.Dashboard.WebApi.Models;

namespace Ohpen.Executive.Dashboard.WebApi.Application.Services
{
    public class FinanceManager: IFinanceManager
    {
        private readonly IDateManager _dateManager;
        private readonly IEnumerable<IFinanceStrategy> _registeredStrategies;

        public FinanceManager(IDateManager dateManager, IEnumerable<IFinanceStrategy> registeredStrategies)
        {
            _dateManager = dateManager;
            _registeredStrategies = registeredStrategies;
        }

        public QuarterlyProjection GetQuarterlyProjectionsForYear(int year)
        {
            return new QuarterlyProjection()
            {
                Q1 = GetQuarterlyProjections(year, 1),
                Q2 = GetQuarterlyProjections(year, 2),
                Q3 = GetQuarterlyProjections(year, 3),
                Q4 = GetQuarterlyProjections(year, 4)
            };
        }

        private Dictionary<string, QuarterlyData> GetQuarterlyProjections(int year, int quarter)
        {
            var dataRange = _dateManager.GetQuarterDateRange(year, quarter);
            var financeGroups = GetFinanceGroupsWithStrategy();
            var quarterlyProjections = financeGroups.ToDictionary(
                    item => item.Key,
                    item => item.Value.GetFinanceForGroupAsync(item.Key, dataRange.Item1, dataRange.Item2).Result
                );
            quarterlyProjections = AddTotal(quarterlyProjections);
            return quarterlyProjections;
        }

        public IEnumerable<string> GetFinanceGroups()
        {
            return new List<string>() { "hr", "realEstate", "aws", "services" };
        }

        public Dictionary<string, IFinanceStrategy> GetFinanceGroupsWithStrategy()
        {
            return GetFinanceGroups().ToDictionary(item => item, GetStrategyForGroup);
        }

        private IFinanceStrategy GetStrategyForGroup(string group)
        {
            IFinanceStrategy strategy = _registeredStrategies.FirstOrDefault(x => x.Name.Equals(group));
            if (strategy is null)
            {
                strategy = @group switch
                {
                    "hr" => new MockFinanceStrategyNoIncome(),
                    "realEstate" => new MockFinanceStrategyNoIncome(),
                    _ => new MockFinanceStrategy()
                };
            }

            return strategy;
        }

        private static Dictionary<string, QuarterlyData> AddTotal(Dictionary<string, QuarterlyData> groupData)
        {
            var quarterlyTotal = groupData.Aggregate(new QuarterlyData(), (current, item) => SumQuarterlyData(current, item.Value));
            groupData.Add("total", quarterlyTotal);
            return groupData;
        }

        private static QuarterlyData SumQuarterlyData(QuarterlyData total, QuarterlyData current)
        {
            return new QuarterlyData()
            {
                CurrentIncome = total.CurrentIncome + current.CurrentIncome,
                CurrentOutcome = total.CurrentOutcome + current.CurrentOutcome,
                ExpectedIncome = total.ExpectedIncome + current.ExpectedIncome,
                ExpectedOutcome = total.ExpectedOutcome + current.ExpectedOutcome,
            };
        }
    }

}
