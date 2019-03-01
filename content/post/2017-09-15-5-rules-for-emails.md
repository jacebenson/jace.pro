---
title: 5 rules for emails
layout: post
tags: 
  - email
date:   2016-03-24
keywords:
- "rfedoruk"
- "email"
- "mail"
- "pop3"
- "smtp"
- "events"
- "workflow activities"
- "workflow activity"
- "notification"
- "notifications"
---
Rules to follow for emails in Servicenow.

<!--more-->

## Do not use the Servicenow provided email address

- [Always set up your own mailbox](https://docs.servicenow.com/bundle/jakarta-servicenow-platform/page/administer/reference-pages/concept/c_AlternateEmailConfigurations.html)
- Once someone knows about the email address, they never, ever, forget it, at least now you can get rid of it or change it accordingly.
- Changing the “From” on notifications can’t be set without setting this up.
- This puts all the content submitted on your own servers, not Servicenow’s and that makes it much easier to deal with if any legal trouble should arise, you have the source and control it.

## Events or Workflow Activities?  Always Events and here’s a list of reasons why

1. Allows the triggering of the notification from any server side script by just triggering the event.
1. Faster prototyping of the notification because you won’t need to complete the 28 step request to get the last email, you can just trigger the notification on sysevent.
1. Events can also trigger Script Actions which allow you to run server scripts.
1. Workflow notifications, in the past at least, haven’t been the same as notifications you can define outside of workflows.
1. Workflow notifications require you to checkout the workflow to update the notification.

## Only send email notifications if you have to

- Ideally, emails require action and can be handled from the email.  If they cannot, consider summarizing that information for a email sent on a recurring frequency.
  - Examples of actionable subjects with commentary
  - RITM1234 Laptop Approval for Bart Simpson
    - Can be handled on your phone, searchable by record number, what it is and who it is for
  - Reminder to Please take this survey related to Request INC1370
    - Should be as concise as possible, so I’d start at “Take this …” or just “Survey for INC1370”
  - ServiceNow Customer Satisfaction Survey for INT3389
    - From HI as of August 2017
- Informing users is sometimes useful, but may also be unnecessary.
  - Examples of informational subjects with commentary
  - INC1370 Opened on your behalf
  - INC1370 Resolved
  - TASK1234 Provision User Access Assigned to you (cannot be handled on your phone, so essentially, you’re informing someone they have work.)
  - TASK1235 Revoke Location Access Assign to your group (cannot be handled on your phone, so essentially, you’re informing someone they have work.)
- One way to sending more useful content less often is to send out a summary notification daily or weekly if they have things they need to be informed about.  Don’t send a summary if there is nothing to tell them about.
  - ServiceNow Weekly Summary for 2017-09-08
  - ServiceNow Daily Summary for 2017-09-04

## Decide if you want users to be allowed to unsubscribe to actionable, or informational emails

> Actively discourage the use of Inbound Email as a mechanism for ticket creation.  It should only be used when the sending party is a robot.  Over time, the conditions desired by your stakeholders, and the propensity for user input error will make inbound email a horrific mess.  Its also like Pandora’s Box. Once you tell users they can email into ServiceNow, they’ll never stop.  I force stakeholders to sign off to knowing about a 30% failure rate if they want inbound email processing. – [rfedoruk](https://community.servicenow.com/message/990963#991021)

## Memorize this diagram

![Inboung Action processing](5-rules-for-emails.png)

Above is a diagram from this [docs](https://docs.servicenow.com/bundle/jakarta-servicenow-platform/page/administer/notification/concept/inbound-action-processing.html) page.
