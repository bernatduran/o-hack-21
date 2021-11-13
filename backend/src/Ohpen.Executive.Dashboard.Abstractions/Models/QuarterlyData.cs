using System;
using System.Collections.Generic;
using System.Text;

namespace Ohpen.Executive.Dashboard.WebApi.Application.Models
{
    public class QuarterlyData
    {
        public QuarterlyData()
        {
            CurrentIncome = 0M;
            ExpectedOutcome = 0M;
            CurrentOutcome = 0M;
            ExpectedIncome = 0M;
        }

        public decimal ExpectedIncome { get; set; }
        public decimal CurrentIncome { get; set; }
        public decimal ExpectedOutcome { get; set; }
        public decimal CurrentOutcome { get; set; }
    }
}
