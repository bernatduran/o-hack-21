using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Amazon.CostExplorer;
using Amazon.CostExplorer.Model;
using Ohpen.Executive.Dashboard.Abstractions;
using Ohpen.Executive.Dashboard.Abstractions.Services;
using Ohpen.Executive.Dashboard.WebApi.Application.Models;

namespace Ohpen.Executive.Dashboard.Connectors.AwsBilling.Services
{
    public class AwsCostExplorerFinanceStrategy : IFinanceStrategy
    {
        private readonly IAmazonCostExplorer _costExplorer;

        public AwsCostExplorerFinanceStrategy(IAmazonCostExplorer costExplorer)
        {
            _costExplorer = costExplorer;
        }

        public async Task<QuarterlyData> GetFinanceForGroupAsync(string @group, DateTime @from, DateTime to)
        {
            var costAndUsageRequest = new GetCostAndUsageRequest()
            {
                TimePeriod = new DateInterval()
                {
                    Start = from.ToString("yyyy-MM-dd"),
                    End = to.ToString("yyyy-MM-dd")
                }
            };
            var abc = await _costExplorer.GetCostAndUsageAsync(costAndUsageRequest);
            throw new NotImplementedException();
        }
    }
}
