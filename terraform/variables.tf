# AWS Profile Variables
variable "aws_region" {
  type        = string
  description = "aws region. you shouldn't need to change that ..."
  default     = "eu-west-1"
}

variable "account_id" {
  description = "Account id where the resources will be deployed"
  type        = string
  default     = "948164585922"
}
