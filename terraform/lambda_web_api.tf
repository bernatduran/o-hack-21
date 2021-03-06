
resource "aws_lambda_function" "web_api_lambda" {
  function_name    = local.web_api_lambda_name
  filename         = local.web_api_lambda_artifact_full_path
  handler          = "Ohpen.Executive.Dashboard.WebApi::Ohpen.Executive.Dashboard.WebApi.LambdaEntryPoint::FunctionHandlerAsync"
  role             = aws_iam_role.web_api_lambda_role.arn
  runtime          = "dotnetcore3.1"
  description      = "Executive Dashboard WebApi Lambda"
  memory_size      = 1024
  timeout          = 15 * 60
  source_code_hash = filebase64sha256(local.web_api_lambda_artifact_full_path)

  environment {
    variables = {
      AWS_ACCOUNT_ID = data.aws_caller_identity.current.account_id
    }
  }
  tracing_config {
    mode = "Active"
  }
}

resource "aws_iam_role" "web_api_lambda_role" {
  name               = "${local.web_api_lambda_name}-role"
  assume_role_policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "LambdaAssumeRole",
    "Action": "sts:AssumeRole",
    "Effect": "Allow",
    "Principal": { "Service": "lambda.amazonaws.com" }
  }]
}
POLICY
}

resource "aws_lambda_permission" "web_api_api_gateway_permission" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.web_api_lambda.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.dashboard_api_gateway.execution_arn}/*/*/*"
}

resource "aws_cloudwatch_log_group" "web_api_lambda_log_group" {
  name              = "/aws/lambda/${aws_lambda_function.web_api_lambda.function_name}"
  retention_in_days = local.logs_retention_in_days
}

resource "aws_iam_role_policy_attachment" "web_api_lambda_basic_execution_role" {
  role       = aws_iam_role.web_api_lambda_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_iam_role_policy_attachment" "web_api_lambda_access_on_cost_explorer" {
  role       = aws_iam_role.web_api_lambda_role.name
  policy_arn = aws_iam_policy.cost_explorer.arn
}

resource "aws_iam_policy" "cost_explorer" {
  name   = "${local.web_api_lambda_name}-cost-policy"
  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ce:*"
      ],
      "Resource": [
        "*"
      ]
    }
  ]
}
POLICY
}