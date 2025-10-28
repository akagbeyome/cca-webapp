# =============================================================================
# GENERAL CONFIGURATION - CORE PROJECT SETTINGS
# =============================================================================

# Environment designation for deployment lifecycle management
# Controls resource naming, retention policies, and security settings
variable "environment" {
  description = "Environment name (dev, test, staging, prod)"
  type        = string
  validation {
    condition     = contains(["dev", "test", "staging", "prod"], var.environment)
    error_message = "Environment must be one of: dev, test, staging, prod."
  }
}

# AWS region for all resource deployment
# Determines availability zones, service endpoints, and compliance requirements
variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "us-east-1" # Default to us-east-1 for cost optimization and service availability
}

# Project identifier used in resource naming and tagging
# Forms part of the standardized naming convention across all resources
variable "project_name" {
  description = "Name of the project"
  type        = string
  default     = "cca-bluehq" # BlueHQ application for CCA organization
}

# Project ownership for accountability and cost allocation
# Used in resource tagging for governance and billing purposes
variable "project_owner" {
  description = "Owner of the project for tagging"
  type        = string
  default     = "CCA"
}



# =============================================================================
# ROUTE 53 DOMAIN MANAGEMENT
# =============================================================================

# SSL certificate ARN for Route 53 configuration for CloudFront and API Gateway
# Can use ACM certificates or self-signed certificates for development
variable "certificate_arn" {
  description = "SSM parameter containing arn of the SSL certificate for use with Route 53"
  type        = string
  default     = "/CCA/bluehq/certificate/arn"
}

# Route 53 domain name for CloudFront and API Gateway
variable "route53_domain_name_ssm" {
  description = "SSM parameter containing domain name"
  type        = string
  default     = "/CCA/bluehq/domain/name"
}

# Route 53 domain name for CloudFront and API Gateway
variable "route53_hosted_zone_ssm" {
  description = "SSM parameter containing hosted zone name"
  type        = string
  default     = "/CCA/bluehq/hostedzone/name"
}