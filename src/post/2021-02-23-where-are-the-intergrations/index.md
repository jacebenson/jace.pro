---
title: "where-are-the-intergrations"
subtitle: "A subtitle about where-are-the-intergrations"
summary: "Summary of where-are-the-intergrations"
date: 2021-02-23T15:05:16.960Z
tags: "draft"
---

# where-are-the-intergrations

## inbound integrations

I can think of three ways you can track inbound integrations.

1. On a database level, e.g. JDBC, Scheduled Imports, LDAP - For this look at the Data Sources
1. Direct access from API calls - look at transactions for the day, aggregate by created by and exclude the midserver user account
2. Email - Inbound actions

## outbound integrations

Here's where I'd look.

1. Authentication profiles
1. Rest Configuration Records
1. Code search sn_ws or RestMessage and look at all modified/new records
2. Look at all workflow activities makeing rest/powershell/soap calls - /wf_activity_list.do?sysparm_query=activity_definition.base_providerISNOTEMPTY%5Eworkflow_version.published%3Dtrue&sysparm_view=sys_popup
3. Look at the flows in flow designer.  I dont see a way to get a small list of the flows that make integration calls.