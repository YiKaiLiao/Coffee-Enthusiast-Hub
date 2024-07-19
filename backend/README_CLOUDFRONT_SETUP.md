# Setting Up CloudFront for the React Client App

This guide explains how to set up AWS CloudFront to serve the static website hosted on Amazon S3 and ensure it is delivered securely and efficiently.

## Prerequisites

- AWS Account
- S3 Bucket with the static website content
- CloudFront Distribution

## Steps to Set Up CloudFront

### 1. Create a CloudFront Distribution

1. Navigate to the CloudFront service in the AWS Management Console.
2. Click on “Create Distribution”.
3. Under “Origin”:
   - **Origin domain**: Select our existing S3 bucket. (When prompted, select use website endpoint)
   - **Origin path**: Leave empty.
5. Configure the “Default cache behavior” settings:
   - **Viewer protocol policy**: Select “HTTP and HTTPS”. (select Redirect HTTP to HTTPS if you have a SSL certificate to set up https connection)
6. Configure the “Web Application Firewall (WAF)” settings:
   - **AWS WAF Web ACL**: Select “Do not enable security protections” (if not using WAF).
7. Click “Create Distribution”.

### 2. Update CORS_ALLOWED_ORIGINS in the Django project

1. Add your CloudFront URL (Distribution domain name) to the CORS_ALLOWED_ORIGINS list.
