using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ohpen.Executive.Dashboard.WebApi.Models
{
    public class QuarterlyProjectionDto
    {
        public Dictionary<string, QuarterlyDataDto> Q1 { get; set; }
        public Dictionary<string, QuarterlyDataDto> Q2 { get; set; }
        public Dictionary<string, QuarterlyDataDto> Q3 { get; set; }
        public Dictionary<string, QuarterlyDataDto> Q4 { get; set; }
    }
}
