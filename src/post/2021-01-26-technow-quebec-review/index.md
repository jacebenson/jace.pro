---
title: "Technow Quebec Review"
subtitle: "The Technow crew reviews Quebec's features"
summary: "These are my notes from the Technow Quebec Review"
date: 2021-01-26T17:05:47.479Z
---

# Technow Quebec Review

The team presenting this noted that slides had a price tag indicating if something was effectively platform, or "extra".  I'll denote this in the title with a 💲 emoji.

This aired on Jan. 26th, and will be available in video sometime in March.  

## UI Builder

- Lots of things in here, but just check the [LCHH video](https://www.youtube.com/watch?v=xEb6-E0Xk1w)

## Data Classification

- Categorize fields as PII, internal, restricted, confidential
- Quickly report on field categorization for regulatory compliance
- Manage fields via REST and script APIs

## Now Platform foundation enhancements

- Office 365 integration
- Embedded Help Panel
- User onboarding walkthroughs

## AI Search 

- Via the acquisition from [Attivio](https://blogs.servicenow.com/2019/servicenow-acquires-attivio-cognitive-search-platform.html).
- This is everywhere.  Service portal, workspaces, mobile, etc.

## Process Optimization 💲

- This shows a kind of diagram of how work is actually done in the platform. 
- Part of ITSM Enterprise and CSM Enterprise packages.

## Virtual Agent enhancements 💲

- Guided set up with topic recommendations
- Advanced authoring tools
- Automatically resolve incidents, actionable notifications, and password reset

## NLU Workbench

- This replaces the "Model Builder".
- Support for 13 more languages (now at 16 total).
- Ability to add vocabulary sources to be referenced by models

## Regression Framework 💲

Uses machine learning to estimate a value.  
e.g. 
If we have 100 things done what will the time be for the 101st item.

Any prof or ent. package as part of artifical intelligence

## Natural Language Query NLQ 💲

NLQ is officialy released with Quebec.  
This is nice as you can ask servicenow is common language for things.

E.g. How many P1's were logged last month?  Should build a report showing incident.priority=1^sys_created_on=LastMonth

## Performance Analytics enhancements 💲

- PA Capabilities now availabe on workspaces
- PA now supports flexible calendars (e.g. fiscal not matching standard calendar)

## Reporting enhancements

- Quick calculations on specific fields
- Tailor reporting to highlight what's important
- Design dynamic reports with response to questions stored on the catalog

## Mobile Experience enhancements

(Jace's note what app does this apply to?  You all have 4!)

- Added AI Search
- Added Deeplink capability to apps
- Cards now can have actionable buttons

## Mobile Agent enhancements

- Saved Views, favorite mobile screens for quicker access
- Field Service surveys online and offline
- Native Knowledge KB articles

## Mobile Developer Tool Enhancements

- Mobile Card builder.  You can make your own cards now instead of using the pre-made designs
- UI Rules, Apply field value calculations and UI Styling to UI elements
- Impersonate Users

## App Engine Studio (AES) 💲 (Store release)

Not really gone into, will be topic in March TechNow.

Not available in PDI's yet.

## IntegrationHub enhancements 💲

- "Simplify inbound integrations with REST API trigger"
- Remote Process Sync allows for better ebonding (by-directional) integrations
- Perform data mapping with modern UX for codeless ETL
- Retireve date easily with JDBC data stream
- Send one or more files to your instance over SFTP
- Choose specific MID server for your integration

## Flow Designer enhancements

- UX improvements to help citizen developers
- Record Producers can now be submitted via Flow designer with variables
- Flow level variables now exist (akin to workflow scratchpad)

## Email enhancements

- Parse email replies with per domain sepeators that also support regex
- Notification common content (available to notification, and other communication channels e.g. slack, va)

## App Studio enhancements

- Some store apps can be customized (depends on app author's settings in app)
- Some ServiceNow apps can also be customized (depends same as above)

## Dev @ Scale

- APIs to install modify and rollback your changes

## Script Tracer

- Server side script debugging improvments

## Instance Scan

- Scan your instance for problems with code/configuration
- Been in the works since 2012
- Allows for custom checks to be added
