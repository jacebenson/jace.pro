---
title: ServiceNow Developer Roadmap
description: >-
  A comprehensive interactive learning roadmap for ServiceNow developers. 
  Built with Mermaid.js for easy updates and maintenance.
permalink: /servicenow-roadmap/index.html
layout: roadmap
---

<style>
  /* Modern features - bold and prominent */
  .required {
    font-weight: 700 !important;
    font-size: 14px !important;
  }
  .required rect,
  .required circle,
  .required ellipse,
  .required polygon,
  .required path {
    fill: #2d3436 !important;
    stroke: #0984e3 !important;
    stroke-width: 3px !important;
  }
  .required text {
    fill: #fff !important;
    font-weight: 700 !important;
  }

  /* Legacy features - faded and smaller */
  .deprecated {
    font-size: 11px !important;
    opacity: 0.6 !important;
  }
  .deprecated rect,
  .deprecated circle,
  .deprecated ellipse,
  .deprecated polygon,
  .deprecated path {
    fill: #dfe6e9 !important;
    stroke: #b2bec3 !important;
    stroke-width: 1px !important;
  }
  .deprecated text {
    fill: #636e72 !important;
    font-weight: 400 !important;
  }
   /** something can be required or deprecated, but also performant - add a subtle green border */
  .performant {
    stroke: #00b894 !important;
  }

  /** something can also be modern and not needed make it just better then deprecated */
  .ignored {
    fill: #dfe6e9 !important;
    stroke: #b2bec3 !important;
    stroke-width: 1px !important;
  }
  .ignored text {
    fill: #636e72 !important;
    font-weight: 400 !important;
  }
</style>

An interactive visual guide to learning ServiceNow development. Originally inspired by [roadmap.sh/r/sn-v2](https://roadmap.sh/r/sn-v2).

```mermaid
mindmap
  root(ServiceNow)
  :::required
    Automations
      Inbound
        (REST APIs)
        :::required performant
          (Table API)
          :::required performant
          Batch API
          :::performant
          Import API
          :::performant
        (Scripted REST APIs)
        :::required performant
        GraphQL
        :::ignored
        (Email)
        :::required
        SOAP
        :::ignored
      Async
        Triggers
        :::required performant
          (Flow Designer)
          :::required
          Playbooks
          :::ignored
          (Script Actions)
          :::performant
          Async Business Rules
          :::required performant
        Scheduled Jobs
        :::required performant
          Data Imports
          :::performant
          PA Collections
          :::ignored
          Scheduled Scripts
          :::required performant
      In Memory
        (Business Rules)
        :::required performant
        Workflow
        :::deprecated
        (Flow Designer)
        :::required
        (Execution Plans)
        :::deprecated
        (Assignment Rules)
        :::required
        (Decision Tables)
        :::required
    User Experiences
      Next Experience
      :::modern
        Workspaces
        :::modern
        Components
        :::modern
      (Core UI)
      :::required
        (Forms)
        :::required
          (UI Policies)
          :::required
          (Client Scripts)
          :::required
        (Lists)
        :::required
        (Reports)
        :::ignored
        Platform Analytics
        :::required 
        UI Pages
        :::legacy
          UI Macros
          :::legacy
        Processors
        :::legacy
        Visual Task Boards
        :::legacy
      (Service Portal)
      :::modern
        (Widgets)
        :::modern
        Pages
        :::modern
    Access
      (Before Query Business Rules)
      :::modern
        CSM Query Rules
        :::modern
      (Access Controls)
      :::modern
        (Roles)
        :::modern
        HR COE Security Policies
        :::modern
      (Data Policies)
      :::modern
      Data Filtration
      :::modern
      Security Filters
      :::modern
      User Criteria
      :::modern
        HR User Criteria
        :::modern
      Audiences
      :::modern
    Data
      Tables
        CMDB
        :::modern
        (Task)
        :::modern
          Approvals
          :::modern
        (Users)
        :::modern
          (Groups)
          :::modern
      Remote Tables
      :::legacy
      (Database Views)
      :::legacy
      Import Sets
      :::legacy
```

---

## Learning Paths

### For New Developers
1. **Data** → Tables and basic database concepts
2. **Core UI** → Forms and lists  
3. **Access** → Security fundamentals
4. **Inbound** → Integration basics

### For Experienced Developers
1. **Async** → Flow Designer and automation
2. **Next Experience** → Modern UI development
3. **Products** → App Engine and specialized applications
4. **In Memory** → Performance optimization

---

*Last updated: 2025. Want to suggest updates? [Open an issue](https://github.com/jacebenson/jace.pro/issues)*
