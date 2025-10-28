---
title: TechNow Ep77 | Review of Paris Features
description: "The Topics from the Registration page;\r\n\r\nOn the registration page they mention;\r\n\r\n OpenID SSO\r\n Flow Designer\r\n Integration Hub\r\n Source Control\r\n Instance..."
date: '2020-07-28'
tags:
  - servicenow
  - service-portal
  - workflow
  - atf
  - flow-designer
  - update-sets
  - api
  - notifications
  - acl
  - service-catalog
  - angular
  - html
  - xml
  - json
  - database
  - release-paris
  - tutorial
  - performance
  - security
  - integration
redirectFrom:
  - /technow-ep77-review-of-paris-features/
  - /p/2020-07-28-technow-ep77-review-of-paris-features/
---

<!--StartFragment-->

## [The Topics from the Registration page;](https://jace.pro/post/2020-07-28-technow-ep77-paris-features/#the-topics-from-the-registration-page)

On the registration page they mention;

* OpenID SSO
* Flow Designer
* Integration Hub
* Source Control
* Instance Data Replication
* Automated Test Framework

<!-- External image no longer available: <!-- External image: ![](https://jace.pro/post/2020-07-28-technow-ep77-paris-features/register.png) --> -->

So I watched the "TechNow Tuesday: Discover the Paris Platform features Review"

They hit a lot of things. Here's what I noted from the video.

## [ATF](https://jace.pro/post/2020-07-28-technow-ep77-paris-features/#atf)

**[Custom UI versioning support](https://docs.servicenow.com/bundle/paris-application-development/page/administer/auto-test-framework/concept/custom-ui-test-steps.html#d1612322e757)** *This is to version the Custom UI stuff like flows and workflows. You may want to update old tests for that version if you make tests*\
**[Improved indexing](https://docs.servicenow.com/bundle/paris-application-development/page/administer/auto-test-framework/concept/atf-page-inspector.html#d1172595e127)** *Similiar elements are not easily identified*\
**[Page inspector enhancements](https://docs.servicenow.com/bundle/paris-application-development/page/administer/auto-test-framework/concept/atf-page-inspector.html#d1172595e127)** *Better error messaging*

## [Authentication](https://jace.pro/post/2020-07-28-technow-ep77-paris-features/#authentication)

**[Connections tab on Flow designer](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/integrationhub/concept/connections-dashboard.html)** *Very nice. Also, you can add child aliases.*\
**[OpenID Connect SSO](https://docs.servicenow.com/bundle/paris-platform-administration/page/integrate/single-sign-on/concept/OIDC-SSO-overview.html)** *Authenticate against Google, Facebook or whatever. To do that, [Create an OpenID Connect configuration](https://docs.servicenow.com/bundle/paris-platform-administration/page/integrate/single-sign-on/task/create-OIDC-configuration-SSO.html).*\
**[External self-user registration](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/build/service-portal/task/enable-self-registration.html)** *This is great - lets user self register. All you need to do is [turn on the plugin](https://docs.servicenow.com/bundle/paris-platform-administration/page/integrate/authentication/concept/external-user-self-registration.html)*\

* Once enabled create a [User Registration Configuration](https://docs.servicenow.com/bundle/paris-platform-administration/page/integrate/authentication/task/external-user-configuration.html) and you'll get to set up these if you want;

  * Terms and conditions
  * ReCaptcha (requires [Configuring Google reCCAPTCHA](https://docs.servicenow.com/bundle/paris-platform-administration/page/integrate/authentication/task/configure-recaptcha-sp.html))
  * Multiple instances of this per portal

## [Core Platform](https://jace.pro/post/2020-07-28-technow-ep77-paris-features/#core-platform)

**[Schedule Jobs - Business Calendar offset](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/reference-pages/task/t_ScheduleAScriptExecution.html)** *If you need to run something on a recurring basis for business offsets*\
**[Performance dashboard - instance view](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/platform-performance/concept/instance-view.html)** *Now displays for entire instance and you can turn on and off for specific nodes*\
**Robust transform engine (RTE) wildcards**\
**[Robust transform engine (RTE) nested structure](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/import-sets/concept/robust-import-set-transformers.html)** *Previously only support flat json structures*

* Scoped data administration

## [Domain separation](https://jace.pro/post/2020-07-28-technow-ep77-paris-features/#domain-separation)

**[Application properties](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/company-and-domain-separation/concept/ds-application-properties.html)** *Different value for different domains for specific applications*\
**Scheduled jobs - Domain iterator**

## [Flow Designer](https://jace.pro/post/2020-07-28-technow-ep77-paris-features/#flow-designer)

**[Action instance order renaming](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/flow-designer/concept/flows.html#d1519792e190)** *No longer nested. 3.2.1 => 8. Copy the flow if you're worried before you update the flow*\
**[Duplicate actions instance](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/flow-designer/task/duplicate-action-subflow.html)** *huge time saver*\
**[FlowAPI enhancements](https://docs.servicenow.com/bundle/paris-application-development/page/app-store/dev_portal/API_reference/ScriptableFlowAPI/concept/ScriptableFlowAPI.html)** *Older FlowAPI calls will work but please use the new stuff*\
**[FlowScriptAPI](https://docs.servicenow.com/bundle/paris-application-development/page/app-store/dev_portal/API_reference/FlowScript/concept/FlowScriptAPI.html)** *These are used within the flow*\
**[Ghost actions](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/flow-designer/concept/flow-actions.html)** *Have you ever noticed in production flows fail to open if referencing missing actions*\
**[Decision flow - Turn off branches](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/flow-designer/concept/flow-logic-make-decision.html)** _This is nice\
**Decision flow - Avoid repetitive "Update record" actions by applying the answer data**\
**[Multi-row Variable Set (MVRS) support](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/flow-designer/reference/get-cat-variables-flow-designer.html)**\
**[Run with roles](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/flow-designer/task/create-flow-roles.html)**\
**[Send SMS action](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/flow-designer/reference/send-sms-action.html)**\
**[Submit catalog item request action](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/flow-designer/reference/submit-catalog-item-request-flow-designer.html)** *Another nail in the order guide coffin*\
**Support multiple active connections**\
**[Update and delete multiple step](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/flow-designer/reference/update-multiple-records-action-designer.html)** *Chuck uses it as a cleanup to delete the logs*\
**[User access control criteria](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/flow-designer/concept/content-filtering-flow-designer.html)** *Only show actions they can use*

## [IntegrationHub](https://jace.pro/post/2020-07-28-technow-ep77-paris-features/#integrationhub)

**[Data sources - data stream](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/import-sets/concept/data-stream-data-source.html)** *Objects can be flattened into import table. Or nested in a field. Pre-import script needed for this.*\
**Dynamic object support and data stream output** *This can be great to do introspection of other data*\
**[Data stream](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/integrationhub/concept/data-stream-actions.html)** *Support for outputs in script parser. You now have access to `action_inputs` and action scripts*\
**[JSON Parser Flow Designer/IntegrationHub step](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/flow-designer/reference/json-parser-step-action-designer.html)** *Used live on lchh week of 7/23*\
**[JSON Payload Builder](https://docs.servicenow.com/bundle/paris-application-development/page/app-store/dev_portal/API_reference/JSONStreamingBuilder/concept/JSONStreamingBuilderScopedAPI.html)** *Builds file contents for api calls*\
**[XML Payload Builder](https://docs.servicenow.com/bundle/paris-application-development/page/app-store/dev_portal/API_reference/XMLStreamingBuilder/concept/XMLStreamingBuilderScopedAPI.html)** *Builds file contents for api calls*

## [Integration Security](https://jace.pro/post/2020-07-28-technow-ep77-paris-features/#integration-security)

**[Outbound IP access controls](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/login/task/t_AccessControl.html)** *A poor mans firewall - stops the instance and Midservers from hitting the IP.*

## [Platform](https://jace.pro/post/2020-07-28-technow-ep77-paris-features/#platform)

**[GraphQL](https://docs.servicenow.com/bundle/paris-application-development/page/integrate/graphql/concept/scripted-graph-ql.html)**\
**Archiving Multi-consumer archiving**\
**[Archiving - Destroy related records](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/database-rotation/task/t_CreateADestructionRule.html)**\
**[Archiving - Restore related records](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/database-rotation/task/t_ViewArchivedData.html#t_RestoreArchivedData)**\
**[MetricBase - Non `sys_id` based subjects for MetricBase](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/metricbase/task/set-up-data-monitoring.html)**\
**[Instance data replication - bidirectional](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/instance-data-replication/concept/bidirectional-replication.html)** *Now it's bidirection by one checkbox (Technow planned in December)*\
**[Instance data replication - discrete sets](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/instance-data-replication/concept/discrete-producer-replication-sets.html)**

## [Notifications](https://jace.pro/post/2020-07-28-technow-ep77-paris-features/#notifications)

**[Inbound / outbound email address filters](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/notification/task/set-email-address-filters.html)**

## [Platform security](https://jace.pro/post/2020-07-28-technow-ep77-paris-features/#platform-security)

**[Explicit roles](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/contextual-security/concept/explicit-roles.html)** *[Requires HI to enable](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/security/reference/explicit-role-plugin.html)*\
**Mutual exclusive roles**

## [Process Automation Designer](https://jace.pro/post/2020-07-28-technow-ep77-paris-features/#process-automation-designer)

**[Process Automation Designer](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/process-automation-designer/concept/process-automation-designer.html)**\
**[Playbook experience](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/process-automation-designer/concept/process-automation-designer-lanes-activities.html)** *Visual experience for Process Automation Designer in workspace*\

## [Service Portal](https://jace.pro/post/2020-07-28-technow-ep77-paris-features/#service-portal)

**[Portal Analyzer](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/build/service-portal/concept/portal-analyzer.html)**

## [Source control](https://jace.pro/post/2020-07-28-technow-ep77-paris-features/#source-control)

**[Global support](https://docs.servicenow.com/bundle/paris-application-development/page/build/applications/concept/manage_global_application_files.html)** *Set `sn_g_app_creator.allow_global` property to `true` allow global apps in studio.*\
**[Delta loading - No good link](https://docs.servicenow.com/search?q=Incremental+loading)** *This is big. You don't need to worry about destroying the tables and such on branch switches.*

## [Script debugging enhanced](https://jace.pro/post/2020-07-28-technow-ep77-paris-features/#script-debugging-enhanced)

**[Console debugger](https://docs.servicenow.com/bundle/paris-application-development/page/script/debugging/task/evaluate-expressions.html)** *[Video by Brad Tilton](https://www.youtube.com/watch?v=7gHQPk5hSXc) [Training](http://developer.servicenow.com/to.do?u=ScriptDebuggerTraining_Paris)*

## [Upgrades](https://jace.pro/post/2020-07-28-technow-ep77-paris-features/#upgrades)

**Skipped update records resolution tracking** *You just upgraded paris those changes are now captured in update sets.*

## [Upgrade Center](https://jace.pro/post/2020-07-28-technow-ep77-paris-features/#upgrade-center)

**[Preview your upgrade](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/upgrade-center/reference/uc-previewed-changes.html#d435143e37)** *Video coming in September on Technow.*\
**Review completed upgrade**\
**Manage skips with VTB**

## [Workspace](https://jace.pro/post/2020-07-28-technow-ep77-paris-features/#workspace)

**Agent email client** *Recipient fields/picker. Attachments. Quick messages.*\
**Activity stream** *Filter by conversation. Attachments. Single scrollbars - was double before.*\
**Condition Builder***Was a angular thing now its now-exp thing*\
**[Domain separation](https://docs.servicenow.com/bundle/paris-servicenow-platform/page/administer/workspace/concept/domain-selection.html)** *Is asked when making new records.*\
**TinyMCE Updates** *[Default toolbar](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/workspace/concept/tinymce.html#set-dictionary-attributes-workspace). [Table specific attributes](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/workspace/concept/tinymce.html#change-tinymce-toolbar-specific-table). [TinyMCE plugins for specific table](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/workspace/concept/tinymce.html#set-attributes-tinymce-dictionary).*\
**Lists** *Live badges with refresh icon. Column resizing.*

## [Question and Answers](https://jace.pro/post/2020-07-28-technow-ep77-paris-features/#question-and-answers)

* Any recommendations for when to upgrade as a new customer? Right now, you don't have any data.
* Flow designer rollback - up vote the idea it's coming
* Lots of questions about IDR and e-bonding
* Q's will be answered later on the [community post for Technow ep77](https://community.servicenow.com/community?id=community_blog&sys_id=130bff98db7dd090feb1a851ca9619cd).

## [Slides](https://jace.pro/post/2020-07-28-technow-ep77-paris-features/#slides)

[Link to the deck](https://jace.pro/post/2020-07-28-technow-ep77-paris-features/technowep77parisplatformfeatures202007151595891712984.pdf)

<!--EndFragment-->