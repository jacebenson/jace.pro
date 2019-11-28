---
title: "Quick Guide: Jakarta"
subtitle: "Here's my take of what's new with Jakarta"
summary: "Here's my take of what's new with Jakarta"
authors: ['jace']
date: 2017-10-16T20:25:56-05:00
#lastmod: 2019-09-07T23:25:56-05:00
featured: false
draft: false
projects: ['sn-version-tracker']
---

-   In the left hand search field, `table.config` has been added.
-   In journaled fields, now videos are added like image files in the
    activity formatters.
-   Export to JSON is new and neat.
-   [Global search](/search-api) is different

| Section              | Link                                 |
|----------------------|--------------------------------------|
| UI changes           | https://youtu.be/D\_R6j4xmfiE?t=506  |
| Mobile               | https://youtu.be/D\_R6j4xmfiE?t=793  |
| Security Auth        | https://youtu.be/D\_R6j4xmfiE?t=848  |
| Securit Role mgmt    | https://youtu.be/D\_R6j4xmfiE?t=918  |
| Service portal       | https://youtu.be/D\_R6j4xmfiE?t=995  |
| Global search        | https://youtu.be/D\_R6j4xmfiE?t=1162 |
| Interfaces           | https://youtu.be/D\_R6j4xmfiE?t=1343 |
| Guided tour designer | https://youtu.be/D\_R6j4xmfiE?t=1529 |
| Notifications        | https://youtu.be/D\_R6j4xmfiE?t=1940 |
| Orchestatrion        | https://youtu.be/D\_R6j4xmfiE?t=2469 |
| Update sets          | https://youtu.be/D\_R6j4xmfiE?t=2582 |
| Upgrades             | https://youtu.be/D\_R6j4xmfiE?t=2795 |
| ATF                  | https://youtu.be/D\_R6j4xmfiE?t=2936 |
| Workflow             | https://youtu.be/D\_R6j4xmfiE?t=3055 |
| Edge Encryption      | https://youtu.be/D\_R6j4xmfiE?t=3339 |
| Summary              | https://youtu.be/D\_R6j4xmfiE?t=3420 |

## Batched Update Sets

This is HUGE. Save time by batching update sets in the same scope. Bring
up from dev, and apply the batch instead of applying each update set in
order, one at a time.

[Release
Notes](https://docs.servicenow.com/bundle/jakarta-release-notes/page/release-notes/servicenow-platform/system-update-sets-rn.html)

## Service Portal enhancements

[Release
Notes](https://docs.servicenow.com/bundle/jakarta-release-notes/page/release-notes/servicenow-platform/service-portal-rn.html)

### User Criteria

Prior to Jakarta you could lock portals, pages, widgets, and widget
instances with a role and not User Criteria. Now you can.

### Lists widget have filter builder

Use the platform UI condition builder in the Data table from URL
definition widget to create more complex table searches. The condition
builder is disabled by default. Administrators can enable using the
widget instance options for the Data table from URL definition widget.

### Contextual Search sources are not contextual

Narrow search results to specific sources by configuring the contextual
search sources in the instance options of a search widget.

### A11y work "WCAG level AA"

Improvements to accessibility were made throughout the platform in
congruence with WCAG 2.0 A standards. Improvements made specifically to
Service Portal are listed here.

-   High contrast theme: Changes the Service Portal ESM to be more
    accessible for users who have a hard time seeing low contrast
    colors.
-   Screen reader title: Use the Edit Container background option in the
    context menu for to add a title that screen readers read aloud.

[Release
Notes](https://docs.servicenow.com/bundle/jakarta-release-notes/page/release-notes/servicenow-platform/accessibility-rn.html)

## Embedded Help

ServiceNow® Embedded Help is a new application in the Jakarta release.
It includes the guided tour feature.

Embedded help and guided tours have been in the instance since the
Helsinki release. In the Jakarta release, administrators can use the new
Embedded Help application to create customized embedded help and develop
guided tours.

[Release Notes](https://docs.servicenow.com/bundle/jakarta-release-notes/page/release-notes/application-development/embedded-help-guided-tours-rn.html)

## Communities

ServiceNow® Communities is a new application in the Jakarta release.

Communities provides a place for you to engage and interact with your
organization in various ways, including:

-   help quickly solve issues
-   learn about best practices from others
-   engage with your organization for product feedback

Use Communities to:

-   improve support call deflection because users help themselves via
    crowd-sourced knowledge
-   communicate product updates
-   increase engagement with existing customers and lure prospects

[Release Notes](https://docs.servicenow.com/bundle/jakarta-release-notes/page/release-notes/service-management/communities-rn.html)
