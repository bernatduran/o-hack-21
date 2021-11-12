locals {
  artifacts_path = "../artifacts"
  api_gateway_name = "executive-dashboard"
  web_api_lambda_name = "executive-dashboard-web-api"
  logs_retention_in_days = 90
  webapi_lambda_artifact_filename  = "Ohpen.Executive.Dashboard.WebApi.zip"
  web_api_lambda_artifact_full_path = "${local.artifacts_path}/${local.webapi_lambda_artifact_filename}"
}