resource "aws_api_gateway_rest_api" "dashboard_api_gateway" {
  name               = local.api_gateway_name
  api_key_source     = "HEADER"
  description        = "Api Gateway dedicated for Executive Dashboard"
  binary_media_types = ["multipart/form-data"]
}

resource "aws_api_gateway_resource" "root_proxy_path" {
  rest_api_id = aws_api_gateway_rest_api.dashboard_api_gateway.id
  parent_id   = aws_api_gateway_rest_api.dashboard_api_gateway.root_resource_id
  path_part   = "{proxy+}"
}

resource "aws_api_gateway_method" "root_proxy_method" {
  rest_api_id   = aws_api_gateway_rest_api.dashboard_api_gateway.id
  resource_id   = aws_api_gateway_resource.root_proxy_path.id
  http_method   = "ANY"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "dashboard_web_api" {
  rest_api_id             = aws_api_gateway_rest_api.dashboard_api_gateway.id
  resource_id             = aws_api_gateway_method.root_proxy_method.resource_id
  http_method             = aws_api_gateway_method.root_proxy_method.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.web_api_lambda.invoke_arn
}

resource "aws_api_gateway_deployment" "executive_dashboard" {
  stage_name = "Prod"
  //stage_description = md5(file("${path.module}/api_gateway.tf"))
  rest_api_id = aws_api_gateway_rest_api.dashboard_api_gateway.id
  depends_on = [
    aws_api_gateway_integration.dashboard_web_api,
  ]
  triggers = {
    # NOTE: The configuration below will satisfy ordering considerations,
    #       but not pick up all future REST API changes. More advanced patterns
    #       are possible, such as using the filesha1() function against the
    #       Terraform configuration file(s) or removing the .id references to
    #       calculate a hash against whole resources. Be aware that using whole
    #       resources will show a difference after the initial implementation.
    #       It will stabilize to only change when resources change afterwards.
    redeployment = sha1(jsonencode([
      aws_api_gateway_resource.root_proxy_path.id,
      aws_api_gateway_method.root_proxy_method.id,
      aws_api_gateway_integration.dashboard_web_api,
    ]))
  }

  lifecycle {
    create_before_destroy = true
  }
}
