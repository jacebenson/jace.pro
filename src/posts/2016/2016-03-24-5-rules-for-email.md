---
title: 5 rules for emails
description: Rules I follow for emails
date: '2016-03-24'
tags:
  - servicenow
  - workflow
  - notifications
  - security
redirectFrom:
  - /5-rules-for-email/
---

## Do not use the ServiceNow provided email address

* [Always set up your own mailbox](https://docs.servicenow.com/csh?version=latest&topicname=c_AlternateEmailConfigurations)
* Once someone knows about the email address, they never, ever, forget it, at least now you can get rid of it or change it accordingly.
* Changing the "From" on notifications is not possible without setting this up.
* This puts all the content submitted on your own servers where you can control it. Otherwise they are all on ServiceNow's servers where you don't have the same control.

## [](https://github.com/jacebenson/jace.pro/blob/master/src/post/2016-03-24-5-rules-for-emails/index.md#events-or-workflow-activities-always-events-and-heres-a-list-of-reasons-why)Events or Workflow Activities? Always Events and here's a list of reasons why

1. Ability to trigger the notification from any server side script.
2. Faster prototyping of the notification. Why? Because you can trigger the notification on `sysevent`.
3. Events can also trigger Script Actions which allow you to run server scripts.
4. Workflow notifications are limited compared to notification events.
5. Workflow notifications need you to checkout the workflow to update the notification.

## Send email that require action

* Ideally, emails require action and can be handled from the email. If they cannot, consider summarizing that information for a email sent on a recurring frequency.

  * Examples of actionable subjects with commentary
  * RITM1234 Laptop Approval for Bart Simpson

    * Can be handled on your phone, searchable by record number, who and what is clear.
  * Reminder to Please take this survey related to Request INC1370

    * Should be as concise as possible, so I'd start at "Take this ..." or "Survey for INC1370"
  * ServiceNow Customer Satisfaction Survey for INT3389

    * From HI as of August 2017
* Informing users is sometimes useful, but may also be unnecessary.

  * Examples of informational subjects with commentary
  * INC1370 Opened on your behalf
  * INC1370 Resolved
  * TASK1234 Provision User Access Assigned to you (cannot be handled on your phone, so essentially, you're informing someone they have work.)
  * TASK1235 Revoke Location Access Assign to your group (cannot be handled on your phone, so essentially, you're informing someone they have work.)
* One way to sending more useful content less often is to send out a summary notification daily or weekly. Don't send a summary if there is nothing to tell them about.

  * ServiceNow Weekly Summary for 2017-09-08
  * ServiceNow Daily Summary for 2017-09-04

## [](https://github.com/jacebenson/jace.pro/blob/master/src/post/2016-03-24-5-rules-for-emails/index.md#allow-users-to-unsubscribe-to-actionable-or-informational-emails-or-not)Allow users to unsubscribe to actionable, or informational emails or not

> Actively discourage the use of Inbound Email as a mechanism for ticket creation. It should be used when the sending party is a robot. Over time, the conditions desired by your stakeholders, and the propensity for user input error will make inbound email a horrific mess. Its also like Pandora's Box. Once you tell users they can email into ServiceNow, they'll never stop. I force stakeholders to sign off to knowing about a 30% failure rate if they want inbound email processing. -- [Robert Fedoruk](https://community.servicenow.com/message/990963#991021)

## [](https://github.com/jacebenson/jace.pro/blob/master/src/post/2016-03-24-5-rules-for-emails/index.md#memorize-this-diagram)Memorize this diagram

![A diagram showing the logic of when an incoming email is processed in ServiceNow](/assets/images/2016-servicenow-email-diagram.png "ServiceNow Email Processing Diagram")