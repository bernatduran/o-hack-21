using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ohpen.Executive.Dashboard.WebApi.Models
{
    public class QuarterlyDataDto
    {
        public decimal ExpectedIncome { get; set; }
        public decimal CurrentIncome { get; set; }
        public decimal ExpectedOutcome { get; set; }
        public decimal CurrentOutcome { get; set; }
    }
}
