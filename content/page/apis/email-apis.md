---
title: Email APIs


layout: post
date: 2018-08-16 22:05:54 +0000
tags:
- server-side-api
url: "/email/"
aliases:
- "/email/"
---
# Email APIs
<!--more-->

## email

| Property/Method | Description |
| --- | --- |
| addAddress | Type can be cc or bcc |
| setBody | Override the body of the message |
| setFrom | Override the sender address |
| setReplyTo | Override the reply to address |
| setSubject | Override the subject of the message |

## template

| Property/Method | Description |
| --- | --- |
| print | Outputs message to the email body |
| space | Outputs spaces to the email body |

## email_action

| Property/Method | Description |
| --- | --- |
| action_insert | Send an email whenever a new record is inserted into the selected table |
| action_update | Send an email whenever a record in the selected table is modified |
| active |  |
| advanced_condition |  |
| affected_field_on_event | The field in the event that must be affected for this notification to send to subscribed users |
| category | Notification Preference Category. |
| collection |  |
| condition | Send Notification when conditions evaluate to true |
| content_type | Specify whether the message is sent with a format of HTML, plain text, or both |
| default_interval |  |
| description |  |
| digest_from |  |
| digest_html |  |
| digest_reply_to |  |
| digest_separator_html |  |
| digest_separator_text |  |
| digest_subject |  |
| digest_template |  |
| digest_text |  |
| digestable |  |
| event_name |  |
| event_parm_1 | The first event parameter contains a recipient, either a user sys_id, group sys_id or an email address, who should receive this notification |
| event_parm_2 | The second event parameter contains a recipient, either a user sys_id, group sys_id or an email address, who should receive this notification |
| exclude_delegates | Do not send the notification to any delegates of this notification’s recipients |
| force_delivery | Bypass settings that would normally prevent sending to the recipient (e.g., device.schedule, user.notification) |
| from | Email address you want to appear in the From field |
| generation_type | Action that causes an email to be sent. Specifies whether to send email based on a trigger, an event firing, or an action against a record. |
| importance | Importance/Priority flag for the email |
| include_attachments | Send all attachments from the triggering record as email attachments |
| item | The sys_id of the subscribed item |
| item_table | The table that the subscribed item resides in |
| mandatory | Prevent users from unsubscribing/filtering-out this notification |
| message |  |
| message_html |  |
| message_list |  |
| message_text |  |
| name |  |
| omit_watermark | Omitting watermark prevents any email replies from updating the triggering record |
| order |  |
| push_message_only |  |
| recipient_fields | Field in the currently-selected table that contains a reference to a user or group that will receive an email notification |
| recipient_groups | List of groups that will receive an email notification |
| recipient_users | List of users or email addresses that will receive an email notification |
| reply_to | Email address to be used when replying to the email notification |
| send_self |  |
| sms_alternate |  |
| style |  |
| subject |  |
| subscribable | Allow users to choose this notification when subscribing to their messages |
| sys_class_name |  |
| sys_created_by |  |
| sys_created_on |  |
| sys_domain | Domain to which the rule belongs |
| sys_domain_path |  |
| sys_id |  |
| sys_mod_count |  |
| sys_name | Display name for this application file |
| sys_overrides | Rule being overridden by the current record |
| sys_package |  |
| sys_policy | Determines how application files are protected when downloaded or installed |
| sys_scope | Application containing this record |
| sys_update_name |  |
| sys_updated_by |  |
| sys_updated_on |  |
| sys_version | Notification Version |
| template |  |
| type |  |
| weight | Used to decide which notification takes precedence when more than one qualifies |

## event

| Property/Method | Description |
| --- | --- |
| claimed_by | Cluster node that claimed this event |
| descriptive_name |  |
| instance |  |
| name |  |
| parm1 |  |
| parm2 |  |
| process_on |  |
| processed |  |
| processing_duration | Time it took to process the event (milliseconds) |
| queue | Queue name for processor |
| state |  |
| sys_created_by |  |
| sys_created_on |  |
| sys_id |  |
| sys_mod_count |  |
| sys_updated_by |  |
| sys_updated_on |  |
| table |  |
| uri |  |
| user_id |  |
| user_name |  |
