resource "aws_cloudfront_distribution" "fe" {
    origin {
    domain_name = aws_s3_bucket.fe.bucket_regional_domain_name
    origin_id   = "myS3Origin"
    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.fe.cloudfront_access_identity_path
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "mfe-TMD distribution"
  default_root_object = "index.html"
  http_version        = "http1.1"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "myS3Origin"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    min_ttl                = 0
    default_ttl            = 86400
    max_ttl                = 31536000
    viewer_protocol_policy = "redirect-to-https"
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }
}

resource "aws_cloudfront_origin_access_identity" "fe" {
  comment = "EnsoBoard"
}