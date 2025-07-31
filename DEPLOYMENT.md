# Deployment Guide

This guide covers deployment options for the CPR Open Enrollment Web Application.

## Current Status: Mockup Phase

The project currently consists of an interactive HTML mockup that can be deployed as a static site.

## Mockup Deployment

### Option 1: GitHub Pages (Recommended for Demo)

1. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages section
   - Source: Deploy from branch
   - Branch: main
   - Folder: / (root)
   - Save

2. **Access the mockup**:
   - URL: `https://[username].github.io/cpr-open-enrollment-app/mockup/`

### Option 2: Netlify

1. **Connect GitHub repo to Netlify**
2. **Build settings**:
   - Base directory: `/`
   - Build command: (none - static site)
   - Publish directory: `/`
3. **Deploy**

### Option 3: Local Development Server

```bash
# Using Python
cd mockup
python -m http.server 8000

# Using Node.js
npx http-server mockup -p 8000

# Using VS Code Live Server extension
# Right-click index.html > Open with Live Server
```

## Future Production Deployment

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- Redis 6+
- Azure account (or AWS)

### Environment Setup

Create `.env` file:

```env
# Application
NODE_ENV=production
PORT=3000

# Database
DATABASE_URL=postgresql://user:password@host:5432/cpr_training
REDIS_URL=redis://localhost:6379

# Authentication
JWT_SECRET=your-secret-key
SESSION_SECRET=your-session-secret

# Payment Gateways
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
PAYPAL_CLIENT_ID=...
PAYPAL_CLIENT_SECRET=...

# Email/SMS
SENDGRID_API_KEY=...
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...

# AI Services
OPENAI_API_KEY=...

# Storage
AZURE_STORAGE_CONNECTION_STRING=...

# Monitoring
APPLICATION_INSIGHTS_KEY=...
```

### Azure Deployment Architecture

```yaml
# azure-infrastructure.yml
resources:
  - App Service (Node.js)
  - PostgreSQL Database
  - Redis Cache
  - Blob Storage
  - CDN
  - Application Gateway
  - Key Vault
  - Application Insights
```

### Deployment Steps

1. **Infrastructure Setup**:
```bash
# Using Terraform
terraform init
terraform plan
terraform apply
```

2. **Database Migration**:
```bash
npm run migrate:prod
npm run seed:prod
```

3. **Application Deployment**:
```bash
# Build application
npm run build

# Deploy to Azure
az webapp deployment source config-zip \
  --resource-group cpr-training-rg \
  --name cpr-training-app \
  --src dist.zip
```

4. **Post-Deployment**:
```bash
# Verify health
curl https://api.cprtraining.com/health

# Run smoke tests
npm run test:e2e:prod
```

### CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm test
      - run: npm run lint

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: azure/login@v1
        with:
          creds: ${{ secrets.AZURE_CREDENTIALS }}
      - run: npm ci --production
      - run: npm run build
      - uses: azure/webapps-deploy@v2
        with:
          app-name: cpr-training-app
          package: .
```

### Monitoring & Maintenance

1. **Health Checks**:
   - `/health` - Application health
   - `/ready` - Readiness probe
   - `/metrics` - Prometheus metrics

2. **Monitoring Stack**:
   - Application Insights (APM)
   - Azure Monitor (Infrastructure)
   - Sentry (Error tracking)
   - Grafana (Dashboards)

3. **Backup Strategy**:
   - Database: Daily automated backups
   - Files: Blob storage replication
   - Configuration: Key Vault versioning

### Scaling Configuration

```json
{
  "autoscale": {
    "min_instances": 2,
    "max_instances": 20,
    "rules": [
      {
        "metric": "cpu",
        "threshold": 70,
        "scale_up": 2
      },
      {
        "metric": "memory",
        "threshold": 80,
        "scale_up": 2
      },
      {
        "metric": "requests_per_second",
        "threshold": 1000,
        "scale_up": 4
      }
    ]
  }
}
```

### Security Checklist

- [ ] SSL/TLS certificates configured
- [ ] WAF rules enabled
- [ ] DDoS protection active
- [ ] Secrets in Key Vault
- [ ] CORS properly configured
- [ ] Rate limiting enabled
- [ ] Security headers set
- [ ] Regular security scans scheduled

### Rollback Procedure

```bash
# Quick rollback to previous version
az webapp deployment slot swap \
  --resource-group cpr-training-rg \
  --name cpr-training-app \
  --slot staging \
  --target-slot production

# Database rollback
npm run migrate:rollback
```

## Support

For deployment assistance:
- Check Azure/AWS documentation
- Review error logs in Application Insights
- Contact DevOps team

## Next Steps

1. **Current Phase**: Deploy mockup to GitHub Pages for stakeholder review
2. **Development Phase**: Set up development environment
3. **Production Phase**: Implement full deployment pipeline