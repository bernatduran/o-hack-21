using System;
using System.Collections.Generic;
using System.Text;
using Ohpen.Executive.Dashboard.WebApi.Models;

namespace Ohpen.Executive.Dashboard.WebApi.Application.Interfaces
{
    public interface IFinanceManager
    {
        QuarterlyProjection GetQuarterlyProjectionsForYear(string year);
    }
}
