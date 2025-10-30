---
applyTo: '**/src/posts/**/*.md'
---

# ServiceNow Post Tagging Guidelines

This guide defines the consistent tagging structure for ServiceNow-related blog posts in this Eleventy site.

## Core Tagging Rules

1. **All ServiceNow-related posts should include the `servicenow` tag**
2. **Non-ServiceNow posts should NOT include the `servicenow` tag**
3. **Use lowercase, hyphenated tags for consistency**
4. **Each post should have 2-5 tags maximum for best organization**

## ServiceNow Tag Categories

### Security-Based Tags

Use these for posts about access control, data protection, and security features:

- `acls` - Access Control Lists and security rules
- `before-query-business-rules` - Security-focused business rules that filter data
- `data-policies` - Data validation and field policies
- `data-filtration` - Record filtering and data security
- `installation-exit` - Installation exits and security customizations
- `spentrypage` - Service Portal entry pages and security
- `user-criteria` - User-based access criteria
- `hr-criteria` - HR-specific access and criteria

### Automation-Based Tags

Use these for posts about workflow, integration, and automation:

- `engines` - Workflow engines and automation frameworks
- `crud-business-rules` - Create, Read, Update, Delete business rules
- `flow-designer` - Flow Designer workflows and actions
- `legacy-workflow` - Classic ServiceNow workflows
- `ui-actions` - UI Actions and client-side automation
- `processors` - Processors and server-side scripting
- `graphql` - GraphQL APIs and integrations
- `rest` - REST API integrations and scripting
- `scrapi` - Scripted REST APIs (ServiceNow custom APIs)
- `soap` - SOAP web services and integrations
- `email` - Email notifications and processing
- `events` - System events and event processing
- `script-actions` - Script actions in workflows
- `scheduled-jobs` - Scheduled script execution and jobs
- `data-imports` - Data import processes and automation

### User Experience Tags

Use these for posts about interfaces, user interaction, and presentation:

- `core-ui` - Core ServiceNow UI and interface customization
- `ui-macros` - UI Macros and reusable interface components
- `ui-pages` - Custom UI Pages and layouts
- `reports` - Reporting and analytics
- `service-portal` - Service Portal development and customization
- `next-experience` - Next Experience UI framework

### Data Tags

Use these for posts about data management, storage, and structure:

- `tables` - Database tables and schema
- `attachments` - File attachments and document management
- `history` - Audit history and data tracking
- `database-views` - Database views and custom queries
- `remote-tables` - External data integration via remote tables
- `data-management` - Data cleanup, maintenance, and governance
- `import-sets` - Data import sets and ETL processes

## Tagging Examples

### Example Front Matter Structure

```yaml
---
title: "Creating Secure ACLs in ServiceNow"
date: 2025-10-29
tags:
  - servicenow
  - acls
  - user-criteria
description: "How to implement role-based access control using ACLs and user criteria"
---
```

### Example Tag Combinations

- **Security post:** `servicenow`, `acls`, `data-policies`
- **Integration post:** `servicenow`, `rest`, `scrapi`, `processors`
- **UI customization:** `servicenow`, `core-ui`, `ui-actions`
- **Data migration:** `servicenow`, `import-sets`, `data-imports`, `tables`

## Migration Notes

When updating existing posts:

1. Ensure all ServiceNow posts have the `servicenow` tag
2. Replace generic tags with specific ones from the categories above
3. Remove outdated or overly broad tags
4. Maintain 2-5 tags per post for optimal organization
5. Test the site build after bulk tag updates

## Non-ServiceNow Posts

Posts not related to ServiceNow should use appropriate general tags:

- `web-development`
- `javascript`
- `career`
- `productivity`
- `tools`
- etc.

These posts should NOT include the `servicenow` tag.