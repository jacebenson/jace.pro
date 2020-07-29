---
title: "TechNow Ep77 | Review of Paris Features"
subtitle: "TechNow Tuesday: Discover the Paris Platform features Review"
summary: "A written review of the features shown"
date: 2020-07-28T10:30:53-05:00
---

## The Topics from the Registration page;

On the registration page they mention;

- OpenID SSO
- Flow Designer
- Integration Hub
- Source Control
- Instance Data Replication
- Automated Test Framework

![](register.png)


So I watched the "TechNow Tuesday: Discover the Paris Platform features Review"

They hit a lot of things.  Here's what I noted from the video.

## ATF 

**[Custom UI versioning support](https://docs.servicenow.com/bundle/paris-application-development/page/administer/auto-test-framework/concept/custom-ui-test-steps.html#d1612322e757)** _This is to version the Custom UI stuff like flows and workflows.  You may want to update old tests for that version if you make tests_\
**[Improved indexing](https://docs.servicenow.com/bundle/paris-application-development/page/administer/auto-test-framework/concept/atf-page-inspector.html#d1172595e127)** _Similiar elements are not easily identified_\
**[Page inspector enhancements](https://docs.servicenow.com/bundle/paris-application-development/page/administer/auto-test-framework/concept/atf-page-inspector.html#d1172595e127)** _Better error messaging_

## Authentication

**[Connections tab on Flow designer](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/integrationhub/concept/connections-dashboard.html)** _Very nice.  Also, you can add child aliases._
**[OpenID Connect SSO](https://docs.servicenow.com/bundle/paris-platform-administration/page/integrate/single-sign-on/concept/OIDC-SSO-overview.html)** _Authenticate against Google, Facebook or whatever.  To do that, [Create an OpenID Connect configuration](https://docs.servicenow.com/bundle/paris-platform-administration/page/integrate/single-sign-on/task/create-OIDC-configuration-SSO.html)._\
**[External self-user registration](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/build/service-portal/task/enable-self-registration.html)** _This is great - lets user self register.  All you need to do is [turn on the plugin](https://docs.servicenow.com/bundle/paris-platform-administration/page/integrate/authentication/concept/external-user-self-registration.html)_\
  - Once enabled create a [User Registration Configuration](https://docs.servicenow.com/bundle/paris-platform-administration/page/integrate/authentication/task/external-user-configuration.html) and you'll get to set up these if you want;
    - Terms and conditions
    - ReCaptcha (requires [Configuring Google reCCAPTCHA](https://docs.servicenow.com/bundle/paris-platform-administration/page/integrate/authentication/task/configure-recaptcha-sp.html))
    - Multiple instances of this per portal

## Core Platform

**[Schedule Jobs - Business Calendar offset](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/reference-pages/task/t_ScheduleAScriptExecution.html)** _If you need to run something on a recurring basis for business offsets_\
**[Performance dashboard - instance view](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/platform-performance/concept/instance-view.html)** _Now displays for entire instance and you can turn on and off for specific nodes_
**Robust transform engine (RTE) wildcards**\
**[Robust transform engine (RTE) nested structure](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/import-sets/concept/robust-import-set-transformers.html)** _Previously only support flat json structures_
- Scoped data administration

## Domain separation

**[Application properties](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/company-and-domain-separation/concept/ds-application-properties.html)** _Different value for different domains for specific applications_\
**Scheduled jobs - Domain iterator**

## Flow Designer

**[Action instance order renaming](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/flow-designer/concept/flows.html#d1519792e190)** _No longer nested.  3.2.1 => 8.  Copy the flow if you're worried before you update the flow_\
**[Duplicate actions instance](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/flow-designer/task/duplicate-action-subflow.html)** _huge time saver_\
**[FlowAPI enhancements](https://docs.servicenow.com/bundle/paris-application-development/page/app-store/dev_portal/API_reference/ScriptableFlowAPI/concept/ScriptableFlowAPI.html)** _Older FlowAPI calls will work but please use the new stuff_\
**[FlowScriptAPI](https://docs.servicenow.com/bundle/paris-application-development/page/app-store/dev_portal/API_reference/FlowScript/concept/FlowScriptAPI.html)** _These are used within the flow_\
**[Ghost actions](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/flow-designer/concept/flow-actions.html)** _Have you ever noticed in production flows fail to open if referencing missing actions_\
**[Decision flow - Turn off branches](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/flow-designer/concept/flow-logic-make-decision.html)** _This is nice\
**Decision flow - Avoid repetitive "Update record" actions by applying the answer data**\
**[Multi-row Variable Set (MVRS) support](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/flow-designer/reference/get-cat-variables-flow-designer.html)**\
**[Run with roles](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/flow-designer/task/create-flow-roles.html)**\
**[Send SMS action](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/flow-designer/reference/send-sms-action.html)**\
**[Submit catalog item request action](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/flow-designer/reference/submit-catalog-item-request-flow-designer.html)** _Another nail in the order guide coffin_\
**Support multiple active connections**
**[Update and delete multiple step](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/flow-designer/reference/update-multiple-records-action-designer.html)** _Chuck uses it as a cleanup to delete the logs_\
**[User access control criteria](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/flow-designer/concept/content-filtering-flow-designer.html)** _Only show actions they can use_

## IntegrationHub

**[Data sources - data stream](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/import-sets/concept/data-stream-data-source.html)** _Objects can be flattened into import table.  Or nested in a field.  Pre-import script needed for this._\
**Dynamic object support and data stream output** _This can be great to do introspection of other data_\
**[Data stream](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/integrationhub/concept/data-stream-actions.html)** _Support for outputs in script parser.  You now have access to `action_inputs` and action scripts_\
**[JSON Parser Flow Designer/IntegrationHub step](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/flow-designer/reference/json-parser-step-action-designer.html)** _Used live on lchh week of 7/23_\
**[JSON Payload Builder](https://docs.servicenow.com/bundle/paris-application-development/page/app-store/dev_portal/API_reference/JSONStreamingBuilder/concept/JSONStreamingBuilderScopedAPI.html)** _Builds file contents for api calls_\
**[XML Payload Builder](https://docs.servicenow.com/bundle/paris-application-development/page/app-store/dev_portal/API_reference/XMLStreamingBuilder/concept/XMLStreamingBuilderScopedAPI.html)** _Builds file contents for api calls_

## Integration Security

**[Outbound IP access controls](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/login/task/t_AccessControl.html)** _A poor mans firewall - stops the instance and Midservers from hitting the IP._

## Platform

**[GraphQL](https://docs.servicenow.com/bundle/paris-application-development/page/integrate/graphql/concept/scripted-graph-ql.html)**\
**Archiving Multi-consumer archiving**\
**[Archiving - Destroy related records](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/database-rotation/task/t_CreateADestructionRule.html)**\
**[Archiving - Restore related records](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/database-rotation/task/t_ViewArchivedData.html#t_RestoreArchivedData)**\
**[MetricBase - Non `sys_id` based subjects for MetricBase](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/metricbase/task/set-up-data-monitoring.html)**\
**[Instance data replication - bidirectional](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/instance-data-replication/concept/bidirectional-replication.html)** _Now it's bidirection by one checkbox (Technow planned in December)_\
**[Instance data replication - discrete sets](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/instance-data-replication/concept/discrete-producer-replication-sets.html)**


## Notifications

**[Inbound / outbound email address filters](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/notification/task/set-email-address-filters.html)**

## Platform security

**[Explicit roles](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/contextual-security/concept/explicit-roles.html)** _[Requires HI to enable](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/security/reference/explicit-role-plugin.html)_\
**Mutual exclusive roles**

## Process Automation Designer

**[Process Automation Designer](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/process-automation-designer/concept/process-automation-designer.html)**\
**[Playbook experience](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/process-automation-designer/concept/process-automation-designer-lanes-activities.html)** _Visual experience for Process Automation Designer in workspace_\

## Service Portal 

**[Portal Analyzer](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/build/service-portal/concept/portal-analyzer.html)**

## Source control

**[Global support](https://docs.servicenow.com/bundle/paris-application-development/page/build/applications/concept/manage_global_application_files.html)** _Set `sn_g_app_creator.allow_global` property to `true` allow global apps in studio._\
**[Delta loading - No good link](https://docs.servicenow.com/search?q=Incremental+loading)** _This is big.  You don't need to worry about destroying the tables and such on branch switches._

## Script debugging enhanced

**[Console debugger](https://docs.servicenow.com/bundle/paris-application-development/page/script/debugging/task/evaluate-expressions.html)** _[Video by Brad Tilton](https://www.youtube.com/watch?v=7gHQPk5hSXc) [Training](http://developer.servicenow.com/to.do?u=ScriptDebuggerTraining_Paris)_

## Upgrades

**Skipped update records resolution tracking** _You just upgraded paris those changes are now captured in update sets._

## Upgrade Center

**[Preview your upgrade](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/upgrade-center/reference/uc-previewed-changes.html#d435143e37)** _Video coming in September on Technow._
**Review completed upgrade**\
**Manage skips with VTB**

## Workspace

**Agent email client** _Recipient fields/picker. Attachments. Quick messages._\
**Activity stream** _Filter by conversation. Attachments. Single scrollbars - was double before._\
**Condition Builder**_Was a angular thing now its now-exp thing_\
**[Domain separation](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/workspace/concept/domain-selection.html)** _Is asked when making new records._\
**TinyMCE Updates** _[Default toolbar](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/workspace/concept/tinymce.html#set-dictionary-attributes-workspace). [Table specific attributes](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/workspace/concept/tinymce.html#change-tinymce-toolbar-specific-table).  [TinyMCE plugins for specific table](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/workspace/concept/tinymce.html#set-attributes-tinymce-dictionary)._\
**Lists** _Live badges with refresh icon.  Column resizing._

## Question and Answers

- Any recommendations for when to upgrade as a new customer?  Right now, you don't have any data. 
- Flow designer rollback - up vote the idea it's coming
- Lots of questions about IDR and e-bonding
- Q's will be answered later on the [community post for Technow ep77](https://community.servicenow.com/community?id=community_blog&sys_id=130bff98db7dd090feb1a851ca9619cd).

## Slides
[Link to the deck](technowep77parisplatformfeatures202007151595891712984.pdf)