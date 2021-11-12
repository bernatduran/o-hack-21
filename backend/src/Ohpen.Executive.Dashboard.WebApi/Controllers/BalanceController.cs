using System;
using Microsoft.AspNetCore.Mvc;
using Ohpen.Executive.Dashboard.WebApi.Models;

namespace Ohpen.Executive.Dashboard.WebApi.Controllers
{
    [Route("[controller]")]
    public class BalanceController : ControllerBase
    {
        // GET balance
        [HttpGet]
        public BalanceDto Get()
        {
            return new BalanceDto()
            {
                BalanceDateTime = DateTime.Now,
                Balance = 834962.42M,
                VariationFromPreviousDay = 1.2M,
                VariationFromPreviousMonth = 6.5M,
            };
        }
    }

}
