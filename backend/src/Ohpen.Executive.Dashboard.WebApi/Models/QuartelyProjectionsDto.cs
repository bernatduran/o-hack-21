using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ohpen.Executive.Dashboard.WebApi.Models
{
    public class QuartelyProjectionsDto
    {
        public QuarterlyDataDto Q1 { get; set; }
        public QuarterlyDataDto Q2 { get; set; }
        public QuarterlyDataDto Q3 { get; set; }
        public QuarterlyDataDto Q4 { get; set; }
    }
}
