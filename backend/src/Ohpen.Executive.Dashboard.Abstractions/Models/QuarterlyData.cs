using System;
using System.Collections.Generic;
using System.Text;

namespace Ohpen.Executive.Dashboard.WebApi.Application.Models
{
    public class QuarterlyData
    {
        public decimal ExpectedIncome { get; set; }
        public decimal CurrentIncome { get; set; }
        public decimal ExpectedOutcome { get; set; }
        public decimal CurrentOutcome { get; set; }
    }
}
