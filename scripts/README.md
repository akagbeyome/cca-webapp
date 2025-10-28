# Deployment Scripts

## deploy.sh

Builds and deploys the Next.js application to S3.

### Usage

```bash
# Basic deployment
./scripts/deploy.sh

# With custom S3 bucket
S3_BUCKET=my-bucket ./scripts/deploy.sh

# With CloudFront invalidation
S3_BUCKET=my-bucket CLOUDFRONT_DISTRIBUTION_ID=E1234567890 ./scripts/deploy.sh

# With custom AWS profile
AWS_PROFILE=production ./scripts/deploy.sh
```

### Environment Variables

- `S3_BUCKET`: Target S3 bucket name (default: cca-bluehq-webapp)
- `AWS_PROFILE`: AWS CLI profile to use (default: default)
- `CLOUDFRONT_DISTRIBUTION_ID`: CloudFront distribution ID for cache invalidation (optional)

### Prerequisites

- AWS CLI configured with appropriate permissions
- Node.js and npm installed
- S3 bucket created and configured for static website hosting