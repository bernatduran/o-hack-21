﻿using System;
using System.Collections.Generic;
using System.Text;
using Ohpen.Executive.Dashboard.WebApi.Application.Interfaces;
using Ohpen.Executive.Dashboard.WebApi.Application.Models;
using Ohpen.Executive.Dashboard.WebApi.Models;

namespace Ohpen.Executive.Dashboard.WebApi.Application.Services
{
    public class FinanceManager: IFinanceManager
    {
        private readonly IDateManager _dateManager;

        public FinanceManager(IDateManager dateManager)
        {
            _dateManager = dateManager;
        }

        public QuarterlyProjection GetQuarterlyProjectionsForYear(int year)
        {
            return new QuarterlyProjection()
            {
                Q1 = GetQuarterlyProjections(year, 1),
                Q2 = GetQuarterlyProjections(year, 2),
                Q3 = GetQuarterlyProjections(year, 3),
                Q4 = GetQuarterlyProjections(year, 4)
            };
        }

        private Dictionary<string, QuarterlyData> GetQuarterlyProjections(int year, int quarter)
        {
            var dataRange = _dateManager.GetQuarterDateRange(year, quarter);
            return new Dictionary<string, QuarterlyData>()
            {
                {
                    "total", new QuarterlyData
                    {
                        ExpectedIncome = 2400000M,
                        CurrentIncome = 1583392M,
                        ExpectedOutcome = 1350000M,
                        CurrentOutcome = 1235621M
                    }
                },
                {
                    "hr", new QuarterlyData
                    {
                        ExpectedIncome = 2400000M,
                        CurrentIncome = 1583392M,
                        ExpectedOutcome = 1350000M,
                        CurrentOutcome = 1235621M
                    }
                },
                {
                    "realState", new QuarterlyData
                    {
                        ExpectedIncome = 2400000M,
                        CurrentIncome = 1583392M,
                        ExpectedOutcome = 1350000M,
                        CurrentOutcome = 1235621M
                    }
                },
                {
                    "services", new QuarterlyData
                    {
                        ExpectedIncome = 2400000M,
                        CurrentIncome = 1583392M,
                        ExpectedOutcome = 1350000M,
                        CurrentOutcome = 1235621M
                    }
                }
            };
        }

    }
}
