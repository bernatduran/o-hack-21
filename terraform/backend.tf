######################################################################
#### COMMENT THIS FILE FOR DEPLOYMENT FROM YOUR LOCAL MACHINE   ######
######################################################################
terraform {
  backend "s3" {
    bucket = "terraform-states-948164585922"
    # this replace_Me keyword will be replaced by the stateGroup ("$environment-$clientName-$service_group") to be deployed
    key     = "executive-dashboard.tfstate"
    region  = "eu-west-1"
    encrypt = true
    profile = "948164585922_AdministratorAccess"
  }
}
