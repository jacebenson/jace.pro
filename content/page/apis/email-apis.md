---
aliases:
- '/email/'
date: '2018-08-16 22:05:54 +0000'
layout: page
tags:
- 'server-side-api'
title: Email APIs
url: '/email/'
---

# Email APIs

## email

| Property/Method | Description                         |
|-----------------|-------------------------------------|
| addAddress      | Type can be cc or bcc               |
| setBody         | Override the body of the message    |
| setFrom         | Override the sender address         |
| setReplyTo      | Override the reply to address       |
| setSubject      | Override the subject of the message |

## template

| Property/Method | Description                       |
|-----------------|-----------------------------------|
| print           | Outputs message to the email body |
| space           | Outputs spaces to the email body  |

## email\_action

| Property/Method            | Description                                                                                                                                     |
|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| action\_insert             | Send an email whenever a new record is inserted into the selected table                                                                         |
| action\_update             | Send an email whenever a record in the selected table is modified                                                                               |
| active                     |                                                                                                                                                 |
| advanced\_condition        |                                                                                                                                                 |
| affected\_field\_on\_event | The field in the event that must be affected for this notification to send to subscribed users                                                  |
| category                   | Notification Preference Category.                                                                                                               |
| collection                 |                                                                                                                                                 |
| condition                  | Send Notification when conditions evaluate to true                                                                                              |
| content\_type              | Specify whether the message is sent with a format of HTML, plain text, or both                                                                  |
| default\_interval          |                                                                                                                                                 |
| description                |                                                                                                                                                 |
| digest\_from               |                                                                                                                                                 |
| digest\_html               |                                                                                                                                                 |
| digest\_reply\_to          |                                                                                                                                                 |
| digest\_separator\_html    |                                                                                                                                                 |
| digest\_separator\_text    |                                                                                                                                                 |
| digest\_subject            |                                                                                                                                                 |
| digest\_template           |                                                                                                                                                 |
| digest\_text               |                                                                                                                                                 |
| digestable                 |                                                                                                                                                 |
| event\_name                |                                                                                                                                                 |
| event\_parm\_1             | The first event parameter contains a recipient, either a user sys\_id, group sys\_id or an email address, who should receive this notification  |
| event\_parm\_2             | The second event parameter contains a recipient, either a user sys\_id, group sys\_id or an email address, who should receive this notification |
| exclude\_delegates         | Do not send the notification to any delegates of this notification's recipients                                                                 |
| force\_delivery            | Bypass settings that would normally prevent sending to the recipient (e.g., device.schedule, user.notification)                                 |
| from                       | Email address you want to appear in the From field                                                                                              |
| generation\_type           | Action that causes an email to be sent. Specifies whether to send email based on a trigger, an event firing, or an action against a record.     |
| importance                 | Importance/Priority flag for the email                                                                                                          |
| include\_attachments       | Send all attachments from the triggering record as email attachments                                                                            |
| item                       | The sys\_id of the subscribed item                                                                                                              |
| item\_table                | The table that the subscribed item resides in                                                                                                   |
| mandatory                  | Prevent users from unsubscribing/filtering-out this notification                                                                                |
| message                    |                                                                                                                                                 |
| message\_html              |                                                                                                                                                 |
| message\_list              |                                                                                                                                                 |
| message\_text              |                                                                                                                                                 |
| name                       |                                                                                                                                                 |
| omit\_watermark            | Omitting watermark prevents any email replies from updating the triggering record                                                               |
| order                      |                                                                                                                                                 |
| push\_message\_only        |                                                                                                                                                 |
| recipient\_fields          | Field in the currently-selected table that contains a reference to a user or group that will receive an email notification                      |
| recipient\_groups          | List of groups that will receive an email notification                                                                                          |
| recipient\_users           | List of users or email addresses that will receive an email notification                                                                        |
| reply\_to                  | Email address to be used when replying to the email notification                                                                                |
| send\_self                 |                                                                                                                                                 |
| sms\_alternate             |                                                                                                                                                 |
| style                      |                                                                                                                                                 |
| subject                    |                                                                                                                                                 |
| subscribable               | Allow users to choose this notification when subscribing to their messages                                                                      |
| sys\_class\_name           |                                                                                                                                                 |
| sys\_created\_by           |                                                                                                                                                 |
| sys\_created\_on           |                                                                                                                                                 |
| sys\_domain                | Domain to which the rule belongs                                                                                                                |
| sys\_domain\_path          |                                                                                                                                                 |
| sys\_id                    |                                                                                                                                                 |
| sys\_mod\_count            |                                                                                                                                                 |
| sys\_name                  | Display name for this application file                                                                                                          |
| sys\_overrides             | Rule being overridden by the current record                                                                                                     |
| sys\_package               |                                                                                                                                                 |
| sys\_policy                | Determines how application files are protected when downloaded or installed                                                                     |
| sys\_scope                 | Application containing this record                                                                                                              |
| sys\_update\_name          |                                                                                                                                                 |
| sys\_updated\_by           |                                                                                                                                                 |
| sys\_updated\_on           |                                                                                                                                                 |
| sys\_version               | Notification Version                                                                                                                            |
| template                   |                                                                                                                                                 |
| type                       |                                                                                                                                                 |
| weight                     | Used to decide which notification takes precedence when more than one qualifies                                                                 |

## event

| Property/Method      | Description                                      |
|----------------------|--------------------------------------------------|
| claimed\_by          | Cluster node that claimed this event             |
| descriptive\_name    |                                                  |
| instance             |                                                  |
| name                 |                                                  |
| parm1                |                                                  |
| parm2                |                                                  |
| process\_on          |                                                  |
| processed            |                                                  |
| processing\_duration | Time it took to process the event (milliseconds) |
| queue                | Queue name for processor                         |
| state                |                                                  |
| sys\_created\_by     |                                                  |
| sys\_created\_on     |                                                  |
| sys\_id              |                                                  |
| sys\_mod\_count      |                                                  |
| sys\_updated\_by     |                                                  |
| sys\_updated\_on     |                                                  |
| table                |                                                  |
| uri                  |                                                  |
| user\_id             |                                                  |
| user\_name           |                                                  |
