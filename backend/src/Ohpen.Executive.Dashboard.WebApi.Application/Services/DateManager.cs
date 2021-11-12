using System;
using System.Collections.Generic;
using System.Text;
using Ohpen.Executive.Dashboard.WebApi.Application.Interfaces;

namespace Ohpen.Executive.Dashboard.WebApi.Application.Services
{
    public class DateManager : IDateManager
    {
        public int YearFromString(string year)
        {
            return int.Parse(year);
        }

        public Tuple<DateTime, DateTime> GetQuarterDateRange(int year, int quarter)
        {
            DateTime start = new DateTime(year, 3 * quarter - 2, 1);
            int endMonth = 3 * quarter + 1;
            if (endMonth > 12)
            {
                endMonth = 1;
                year++;
            }
            DateTime end = new DateTime(year, endMonth, 1).AddDays(-1);

            return new Tuple<DateTime, DateTime>(start, end);
        }

    }
}
