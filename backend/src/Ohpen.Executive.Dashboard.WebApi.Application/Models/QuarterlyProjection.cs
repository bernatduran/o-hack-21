using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ohpen.Executive.Dashboard.WebApi.Application.Models;

namespace Ohpen.Executive.Dashboard.WebApi.Models
{
    public class QuarterlyProjection
    {
        public Dictionary<string, QuarterlyData> Q1 { get; set; }
        public Dictionary<string, QuarterlyData> Q2 { get; set; }
        public Dictionary<string, QuarterlyData> Q3 { get; set; }
        public Dictionary<string, QuarterlyData> Q4 { get; set; }
    }
}
