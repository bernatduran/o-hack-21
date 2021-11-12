using System;
using System.Collections.Generic;
using System.Text;

namespace Ohpen.Executive.Dashboard.WebApi.Application.Interfaces
{
    public interface IDateManager
    {
        int YearFromString(string year);
        Tuple<DateTime, DateTime> GetQuarterDateRange(int year, int quarter);
    }
}
