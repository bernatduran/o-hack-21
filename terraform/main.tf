terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}

provider "aws" {
  region              = var.aws_region
  allowed_account_ids = [var.account_id]

  # The next profile should:
  # 1.  match with $AWS_DEPLOYMENT_PROFILE env var
  # 2.  Be setup in the bitbucket-pipelines.yml
  profile = "948164585922_AdministratorAccess"

  default_tags {
    tags = {
      Project = "ExecutiveDashboard"
    }
  }
}
