#!/bin/bash

# BlueHQ Next.js Amplify App Deployment Script
set -e

# Configuration
WEBAPP_DIR="webapp"
S3_BUCKET="cca-webapp-bluehq-247031233642"
CLOUDFRONT_DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID}"

echo "🚀 Starting BlueHQ deployment..."

# Navigate to webapp directory
cd "$WEBAPP_DIR"

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the application
echo "🔨 Building Next.js application..."
npm run build

# Static files are in 'out' directory when using output: 'export'
BUILD_DIR="out"

# Upload to S3
echo "☁️ Uploading to S3 bucket: $S3_BUCKET"
aws s3 sync "$BUILD_DIR" "s3://$S3_BUCKET" \
    --delete \
    --cache-control "public, max-age=31536000, immutable" \
    --exclude "*.html" \
    --exclude "*.json"

# Upload HTML files with no-cache
aws s3 sync "$BUILD_DIR" "s3://$S3_BUCKET" \
    --cache-control "no-cache" \
    --include "*.html" \
    --include "*.json"

# Invalidate CloudFront cache if distribution ID is provided
if [ -n "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo "🔄 Invalidating CloudFront cache..."
    aws cloudfront create-invalidation \
        --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
        --paths "/*"
fi

echo "✅ Deployment completed successfully!"
echo "🌐 Your app should be available at your CloudFront distribution URL"