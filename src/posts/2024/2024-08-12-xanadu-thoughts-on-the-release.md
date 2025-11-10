---
title: 'Xanadu: Thoughts on the release'
description: >-
  What's up with the Xanadu release on Servicenow? Deny ACLS, Data
  Certification, IDE, Fluent, Reporting, Platform Analytics
date: '2024-08-12'
tags:
  - servicenow
redirectFrom:
  - /xanadu-thoughts-on-the-release/
  - /p/2024-08-12-xanadu-thoughts-on-the-release/
---

The other day I was chatting about the Xanadu release and I thought I'd write up my thoughts about it.

## What's actually in Xanadu?

It's difficult to know or what's in these release.  What's immediately available or coming soon, or not available what-so-ever. There's loads more updates. I generally look at the following links line-by-line.

- [What's new](https://docs.servicenow.com/bundle/xanadu-release-notes/page/release-notes/summary/rn-summary-new-features.html)
- [What's changed](https://docs.servicenow.com/bundle/xanadu-release-notes/page/release-notes/summary/rn-summary-changes.html)
- [What's removed](https://docs.servicenow.com/bundle/xanadu-release-notes/page/release-notes/summary/rn-summary-removed-features.html)
- [What's depreciated](https://docs.servicenow.com/bundle/xanadu-release-notes/page/release-notes/summary/rn-summary-deprecated-info.html)

There's lots of updates to existing products but I generally focus on the "applies to all" kinds of things.

### ServiceNow IDE & Fluent Language

I was very excited for the [ServiceNow IDE](https://docs.servicenow.com/csh?topicname=exploring-servicenow-ide.html&version=latest).  This falls under the ["not available what-so-ever" on Personal Developer Instances](https://www.linkedin.com/feed/update/urn:li:ugcPost:7226939812396642305/?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7226939812396642305%2C7226945924550344706%29&replyUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7226939812396642305%2C7226960316264239105%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287226945924550344706%2Curn%3Ali%3AugcPost%3A7226939812396642305%29&dashReplyUrn=urn%3Ali%3Afsd_comment%3A%287226960316264239105%2Curn%3Ali%3AugcPost%3A7226939812396642305%29).  I'll have to wait for General Availability like most. I estimate it at 6-12 months for most.

On that note, the IDE and the existing [Command Line Interface SDK](https://docs.servicenow.com/csh?topicname=servicenow-fluent-api-reference.html&version=latest) added this "[Fluent](https://docs.servicenow.com/csh?topicname=servicenow-fluent-api-reference.html&version=latest)" language.  Note it's missing Flow, Subflow, Action (for flows), Decision Tables, and Workflows.  It does have these as of this initial release;

1. Access Controls
2. Application Menus
3. Automated Test Framework Tests
4. Business Rules
5. Client Scripts
6. Lists (sys_ui_list, not sys_ux_list)
7. Properties
8. Roles
9. Scripted REST APIs
10. Tables

### Deny ACLS

> Deny-Unless ACLs are evaluated with a "deny-unless" approach. The ACL defines the users that will NOT be denied. Said another way, the user will be denied access unless the role, condition, and script requirements are met. - [From the docs](https://docs.servicenow.com/csh?topicname=t_CreateAnACLRule.html&version=latest)

This is exciting as it's great to have more control over how and who can see records in ServiceNow.  If you want to read more about Deny-Unless ACLs check out these other post.

[Nisha posted "Deny Unless Acl Use Case from Xanadu Release" ](https://nishacodeblogs.medium.com/deny-unless-acl-use-case-from-xanadu-release-e95aa4283e2a)

[Jean covered it on Linkedin](https://www.linkedin.com/pulse/my-top-3-features-servicenow-xanadu-n-zi-yao-itil-servicenow-h6zie/)

### Data Certification becoming deprecated

This is a lesser used piece of functionality.  The notes say;

> [When reviewing Data Certification tasks in CMDB Workspace, use a single click to select all the records associated with a task, to certify or fail the certification in bulk.](https://docs.servicenow.com/bundle/xanadu-release-notes/page/release-notes/summary/rn-summary-changes.html#:~:text=When%20reviewing%20Data%20Certification%20tasks%20in%20CMDB%20Workspace%2C%20use%20a%20single%20click%20to%20select%20all%20the%20records%20associated%20with%20a%20task%2C%20to%20certify%20or%20fail%20the%20certification%20in%20bulk.)

I'm not sure if they've made yet another task type in the scoped app or what.  I do know that they also wrote it's still supported but being prepped for deprecation.

> Starting with the Xanadu release, the Data Certification plugin (com.snc.certification_v2) is being prepared for future deprecation. It will be hidden and no longer activated on new instances but will continue to be supported. The CMDB Workspace store app provides the latest experience for this functionality. For details, see the Deprecation Process [KB0867184] article in the Now Support knowledge base. [Source](https://docs.servicenow.com/bundle/xanadu-release-notes/page/release-notes/summary/rn-summary-deprecated-info.html#:~:text=Starting%20with%20the%20Xanadu%20release%2C%20the%20Data,article%20in%20the%20Now%20Support%20knowledge%20base.)

[Checklist Pro](https://checklistpro.app) can fill feature gaps left out of data certification.

### RIP Reporting, enter Platform Analytics

> Reporting is not available on new instances. Use Platform Analytics data visualizations with table data sources instead. Users with admin and `report_admin` roles will still be able to use Reporting for Service Portal.

This will be a shift.  These seem a little more confusing for me to set up but it may be my age on the platform.

[VividCharts](https://www.vividcharts.com/) can fill usability gaps left out of reporting.

### System Performance Dashboard is depreciated

But, don't worry, you can buy [Impact Instance Observer](https://docs.servicenow.com/bundle/xanadu-impact/page/product/impact/reference/impact-packages.html)!  This is the kind of stuff that is nuts.  Seems like this isn't available too either.

> Instance Observer is available for customers in Commercial and Government Community Cloud (GCC) environments. IO is not currently available in other regulated or on-premise environments. [Source](https://docs.servicenow.com/bundle/xanadu-impact/page/product/impact/concept/io-overview.html)


### Update Sets can now install Applications!

> [Enable app installation through update set.](https://docs.servicenow.com/csh?topicname=system-update-sets-rn.html&version=latest)

That's neat! Kieran, thanks for sharing. This is not what I would have expected.  ServiceNow has been pushing Source Control and the App Repos.  I would have expected no updates here.  I'm glad I'm wrong.

## Shift to the store and those implications

Many of these updates shown are not actually part of the Family Release, but are just timed with it from the store releases.  Which is really a way to let a larger marketing effort happen.  It makes some sense, but just feels like, they are trying to have it both ways, "we have amazing fast updates" and "we have a huge release".  They can have it both ways when they time it like this, just feels like it should be more release updates as needed.

### How do you update all your apps at once?

That being said with more and more store updates Derek Hodge was asking how do folks update all their apps!

Erim Riemer wrote a [script sometime ago and has this posted on his site to do just that](https://snwizard.com/update-apps#the-code)