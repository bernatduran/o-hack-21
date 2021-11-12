using System;
using Microsoft.AspNetCore.Mvc;
using Ohpen.Executive.Dashboard.WebApi.Models;

namespace Ohpen.Executive.Dashboard.WebApi.Controllers
{
    [Route("quarterly-finance-projections")]
    public class QuarterlyFinanceProjectionsController : ControllerBase
    {
        // GET quarterly-finance-projections\{year}
        [HttpGet("{year}")]
        public QuartelyProjectionsDto Get([FromRoute] string year)
        {
            return new QuartelyProjectionsDto()
            {
                Q1 = new QuarterlyDataDto
                {
                    ExpectedIncome = 2400000M,
                    CurrentIncome = 1583392M,
                    ExpectedOutcome = 1350000M,
                    CurrentOutcome = 1235621M
                },
                Q2 = new QuarterlyDataDto
                {
                    ExpectedIncome = 2400000M,
                    CurrentIncome = 1583392M,
                    ExpectedOutcome = 1350000M,
                    CurrentOutcome = 1235621M
                },
                Q3 = new QuarterlyDataDto
                {
                    ExpectedIncome = 2400000M,
                    CurrentIncome = 1583392M,
                    ExpectedOutcome = 1350000M,
                    CurrentOutcome = 1235621M
                },
                Q4 = new QuarterlyDataDto
                {
                    ExpectedIncome = 2400000M,
                    CurrentIncome = 1583392M,
                    ExpectedOutcome = 1350000M,
                    CurrentOutcome = 1235621M
                },
            };
        }
    }

}
