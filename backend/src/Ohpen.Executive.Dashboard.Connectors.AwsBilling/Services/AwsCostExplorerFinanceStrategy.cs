using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Amazon.CostExplorer;
using Amazon.CostExplorer.Model;
using Ohpen.Executive.Dashboard.Abstractions.Services;
using Ohpen.Executive.Dashboard.WebApi.Application.Models;

namespace Ohpen.Executive.Dashboard.Connectors.AwsBilling.Services
{
    public class AwsCostExplorerFinanceStrategy : IFinanceStrategy
    {
        private const string AMZ_NO_VALUE = "Selected metrics cannot be null";
        private const string AMZ_COST = "BlendedCost";
        private readonly IAmazonCostExplorer _costExplorer;

        public AwsCostExplorerFinanceStrategy(IAmazonCostExplorer costExplorer)
        {
            _costExplorer = costExplorer;
            Name = "aws";
        }

        public string Name { get; }

        public async Task<QuarterlyData> GetFinanceForGroupAsync(string @group, DateTime @from, DateTime to)
        {
            to = to >= DateTime.Now ? DateTime.Now : to;
            var costAndUsageRequest = new GetCostAndUsageRequest()
            {
                TimePeriod = new DateInterval()
                {
                    Start = from.ToString("yyyy-MM-dd"),
                    End = to.ToString("yyyy-MM-dd")
                },
                Granularity = Granularity.DAILY,
                Metrics = new List<string>() { AMZ_COST }
            };

            var result = new QuarterlyData();
            decimal realizedCost = 0;
            try
            {
                var amazonCost = await _costExplorer.GetCostAndUsageAsync(costAndUsageRequest);
                realizedCost = amazonCost.ResultsByTime.Sum(time => decimal.Parse(time.Total[AMZ_COST].Amount));
            }
            catch (AmazonCostExplorerException e)
            {
                if (e.Message.Contains(AMZ_NO_VALUE))
                    return result;
                throw;
            }
            return new QuarterlyData()
            {
                CurrentOutcome = realizedCost
            };
        }

    }
}
