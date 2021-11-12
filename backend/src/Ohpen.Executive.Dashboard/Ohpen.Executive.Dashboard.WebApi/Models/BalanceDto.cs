using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ohpen.Executive.Dashboard.WebApi.Models
{
    public class BalanceDto
    {
        public decimal Balance { get; set; }
        public DateTime BalanceDateTime { get; set; }
    }
}
