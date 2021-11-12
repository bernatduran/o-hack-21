﻿using System;
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
        private readonly IDateManager _dateManager;
        private readonly IFinanceManager _financeManager;

        public QuarterlyFinanceProjectionsController(IDateManager dateManager, IFinanceManager financeManager)
        {
            _dateManager = dateManager;
            _financeManager = financeManager;
        }

        // GET quarterly-finance-projections\{year}
        [HttpGet("{year}")]
        public QuarterlyProjectionDto Get([FromRoute] string year)
        {
            int yearFromString = _dateManager.YearFromString(year);
            return _financeManager.GetQuarterlyProjectionsForYear(yearFromString).MapToDto();
        }
    }

}
