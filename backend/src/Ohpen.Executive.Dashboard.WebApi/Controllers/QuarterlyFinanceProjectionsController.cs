using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Ohpen.Executive.Dashboard.WebApi.Application.Interfaces;
using Ohpen.Executive.Dashboard.WebApi.Models;
using Ohpen.Executive.Dashboard.WebApi.Services.Mapper;

namespace Ohpen.Executive.Dashboard.WebApi.Controllers
{
    [Route("quarterly-finance-projections")]
    public class QuarterlyFinanceProjectionsController : ControllerBase
    {
        private readonly IFinanceManager _financeManager;

        public QuarterlyFinanceProjectionsController(IFinanceManager financeManager)
        {
            _financeManager = financeManager;
        }

        // GET quarterly-finance-projections\{year}
        [HttpGet("{year}")]
        public QuarterlyProjectionDto Get([FromRoute] string year)
        {
            return _financeManager.GetQuarterlyProjectionsForYear(year).MapToDto();
        }
    }

}
