resource "aws_s3_bucket" "fe" {
  bucket = "${local.fe_s3_bucket}-${data.aws_caller_identity.current.account_id}"
  acl    = "private"
  versioning {
    enabled = true
  }
  force_destroy = true
}

resource "aws_s3_bucket_public_access_block" "s3_fe_access" {
  bucket = aws_s3_bucket.fe.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}
