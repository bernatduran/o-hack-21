using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Amazon.Lambda.AspNetCoreServer;
using Ohpen.Executive.Dashboard.WebApi.Application.Models;
using Ohpen.Executive.Dashboard.WebApi.Models;

namespace Ohpen.Executive.Dashboard.WebApi.Services.Mapper
{
    public static class QuarterlyDataMapper
    {
        public static QuarterlyDataDto MapToDto(this QuarterlyData from)
        {
            return new QuarterlyDataDto()
            {
                CurrentIncome = from.CurrentIncome,
                CurrentOutcome = from.CurrentOutcome,
                ExpectedIncome = from.ExpectedIncome,
                ExpectedOutcome = from.ExpectedOutcome
            };
        }

        public static QuarterlyProjectionDto MapToDto(this QuarterlyProjection from)
        {
            return new QuarterlyProjectionDto()
            {
                Q1 = from.Q1.MapToDto(),
                Q2 = from.Q2.MapToDto(),
                Q3 = from.Q3.MapToDto(),
                Q4 = from.Q4.MapToDto()
            };
        }

        public static Dictionary<string, QuarterlyDataDto> MapToDto(this Dictionary<string, QuarterlyData> from)
        {
            return @from?.ToDictionary(item => item.Key, item => item.Value.MapToDto());
        }

    }
}
