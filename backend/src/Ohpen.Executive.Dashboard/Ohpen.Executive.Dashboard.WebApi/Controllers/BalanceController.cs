using System;
using Microsoft.AspNetCore.Mvc;
using Ohpen.Executive.Dashboard.WebApi.Models;

namespace Ohpen.Executive.Dashboard.WebApi.Controllers
{
    [Route("[controller]")]
    public class BalanceController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public BalanceDto Get()
        {
            return new BalanceDto()
            {
                BalanceDateTime = DateTime.Now,
                Balance = 834962.42M
            };
        }
    }

}
