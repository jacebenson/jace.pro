---
date: '2018-11-05'
layout: post
title: 'angular.do - what is this?'
authors: ["jace"]
---

The other day I got a report of slowness when using the "Post" button on
incident.

![2018-11-05-angular-do.png](/uploads/2018-11-05-angular-do.png)

Turns out this little functionality uses some undocumented api to
`/angular.do` . In this post I go over what I found out about it and how
it's not measured like others.

First place I looked at this report is the very helpful transactions
table `syslog_transactions_list.do`, however transactions to this
endpoint seem to **not** be tracked there or in the new Active Clust
Transactions `loading_transactions.do`. Which is really unfortunate,
because that at least shows quickly where the delay is tracked weather
it's on a server-side transaction or something on the client or
something on the network.

I went ahead asking HI about it;

> I have a user who is reporting slowness when they use the Post button
> below comment/work notes.... I have looked everywhere I can think of
> to troubleshoot how long that transaction is taking but it seems that
> is not logged anywhere. I looked at syslog transactions, and the node
> file browser but nothing seems to track the POSTs to /angular.do as
> that hits that endpoint.
>
> How can I see server side these requests and what may be causing that
> delay?

They pretty much told me the only way to track this down is to look at
the info in the console of the browser as the user, which is not likely
going to happen.

Really, in my opinion all these transactions should be captured but it
seems servicenow doesn't seem to share this opinion.

I've [attached (raw JSONP) the HAR
record](/uploads/2018-11-05-angular-do.har) and found a tool online to
easily here on
[https://softwareishard.com/har/viewer](http://www.softwareishard.com/har/viewer/).

So it looks like it takes some URL parameters as well as some post body;

Endpoint;

`/angular.do?sysparm_type=line_history&action=insert&table=incident&sys_id=aed745a0db1123008096a455ca961992&sysparm_source=from_form&sysparm_timestamp`

Post Body;

```js
{
    "entries":[
        {
            "field":"comments","text":"Fifth Comment"
        }
    ]
}
```

Post Response;

```js
{
  "display_value": "Incident",
  "entries": [
    {
      "display_value": "INC0010010",
      "short_description": "Tttt",
      "is_email": false,
      "initials": "JB",
      "label": "Incident",
      "document_id": "aed745a0db1123008096a455ca961992",
      "sys_created_on_adjusted": "2018-11-05 06:04:38",
      "entries": {
        "journal": [
          {
            "sys_id": "963491d6db2123008096a455ca961970",
            "sanitized_old_value": "",
            "field_label": "Additional comments",
            "is_truncated": false,
            "change_type": "JOURNAL",
            "old_value": "",
            "field_type": "journal_input",
            "new_value": "Fifth Comment",
            "sanitized_new_value": "Fifth Comment",
            "field_name": "comments"
          }
        ],
        "custom": [],
        "changes": []
      },
      "writable_journal_fields": [
        "comments"
      ],
      "user_id": "cee12e57db1023008096a455ca961971",
      "sys_created_on": "2018-11-05 14:04:38",
      "sys_timestamp": 1541426678000,
      "sys_created_by": "Jace Benson"
    },
    {
      "display_value": "INC0010010",
      "short_description": "Tttt",
      "is_email": false,
      "initials": "JB",
      "label": "Incident",
      "document_id": "aed745a0db1123008096a455ca961992",
      "sys_created_on_adjusted": "2018-11-05 06:04:26",
      "entries": {
        "journal": [
          {
            "sys_id": "a724d596db2123008096a455ca96196a",
            "sanitized_old_value": "",
            "field_label": "Additional\n\n comments",
            "is_truncated": false,
            "change_type": "JOURNAL",
            "old_value": "",
            "field_type": "journal_input",
            "new_value": "Fourth Commnet",
            "sanitized_new_value": "Fourth Commnet",
            "field_name": "comments"
          }
        ],
        "custom": [],
        "changes": []
      },
      "writable_journal_fields": [
        "comments"
      ],
      "user_id": "cee12e57db1023008096a455ca961971",
      "sys_created_on": "2018-11-05 14:04:26",
      "sys_timestamp": 1541426666000,
      "sys_created_by": "Jace Benson"
    },
    {
      "display_value": "INC0010010",
      "short_description": "Tttt",
      "is_email": false,
      "initials": "JB",
      "label": "Incident",
      "document_id": "aed745a0db1123008096a455ca961992",
      "sys_created_on_adjusted": "2018-11-05 06:04:13",
      "entries": {
        "journal": [
          {
            "sys_id": "5024d1d2db2123008096a455ca9619fa",
            "sanitized_old_value": "",
            "field_label": "Additional comments",
            "is_truncated": false,
            "change_type": "JOURNAL",
            "old_value": "",
            "field_type": "journal_input",
            "new_value": "Third Comment",
            "sanitized_new_value": "Third Comment",
            "field_name": "comments"
          }
        ],
        "custom": [],
        "changes": []
      },
      "writable_journal_fields": [
        "comments"
      ],
      "user_id": "cee12e57db1023008096a455ca961971",
      "sys_created_on": "2018-11-05 14:04:13",
      "sys_timestamp": 1541426653000,
      "sys_created_by": "Jace Benson"
    },
    {
      "display_value": "INC0010010",
      "short_description": "Tttt",
      "is_email": false,
      "initials": "JB",
      "label": "Incident",
      "document_id": "aed745a0db1123008096a455ca961992",
      "sys_created_on_adjusted": "2018-11-05 06:01:48",
      "entries": {
        "journal": [
          {
            "sys_id": "70931d96db2123008096a455ca9619f0",
            "sanitized_old_value": "",
            "field_label": "Additional comments",
            "is_truncated": false,
            "change_type": "JOURNAL",
            "old_value": "",
            "field_type": "journal_input",
            "new_value": "Second Comment",
            "sanitized_new_value": "Second Comment",
            "field_name": "comments"
          }
        ],
        "custom": [],
        "changes": []
      },
      "writable_journal_fields": [
        "comments"
      ],
      "user_id": "cee12e57db1023008096a455ca961971",
      "sys_created_on": "2018-11-05 14:01:48",
      "sys_timestamp": 1541426508000,
      "sys_created_by": "Jace Benson"
    },
    {
      "display_value": "INC0010010",
      "short_description": "Tttt",
      "is_email": false,
      "initials": "JB",
      "label": "Incident",
      "document_id": "aed745a0db1123008096a455ca961992",
      "sys_created_on_adjusted": "2018-11-05 06:01:33",
      "entries": {
        "journal": [
          {
            "sys_id": "d9831d96db2123008096a455ca961939",
            "sanitized_old_value": "",
            "field_label": "Additional comments",
            "is_truncated": false,
            "change_type": "JOURNAL",
            "old_value": "",
            "field_type": "journal_input",
            "new_value": "First Comment",
            "sanitized_new_value": "First Comment",
            "field_name": "comments"
          }
        ],
        "custom": [],
        "changes": []
      },
      "writable_journal_fields": [
        "comments"
      ],
      "user_id": "cee12e57db1023008096a455ca961971",
      "sys_created_on": "2018-11-05 14:01:33",
      "sys_timestamp": 1541426493000,
      "sys_created_by": "Jace Benson"
    },
    {
      "display_value": "INC0010010",
      "short_description": "Tttt",
      "is_email": false,
      "initials": "JB",
      "label": "Incident",
      "document_id": "aed745a0db1123008096a455ca961992",
      "sys_created_on_adjusted": "2018-10-18 09:26:37",
      "entries": {
        "journal": [],
        "custom": [],
        "changes": [
          {
            "sys_id": "3c731996db2123008096a455ca96193e",
            "sanitized_old_value": "",
            "field_label": "Impact",
            "is_truncated": false,
            "change_type": "AUDIT",
            "old_value": "",
            "field_type": "integer",
            "new_value": "3 - Low",
            "sanitized_new_value": "3 - Low",
            "field_name": "impact"
          },
          {
            "sys_id": "78731996db2123008096a455ca96193f",
            "sanitized_old_value": "",
            "field_label": "Incident state",
            "is_truncated": false,
            "change_type": "AUDIT",
            "old_value": "",
            "field_type": "integer",
            "new_value": "New",
            "sanitized_new_value": "New",
            "field_name": "incident_state"
          },
          {
            "sys_id": "38731996db2123008096a455ca96193e",
            "sanitized_old_value": "",
            "field_label": "Opened by",
            "is_truncated": false,
            "change_type": "AUDIT",
            "old_value": "",
            "field_type": "reference",
            "new_value": "Jace Benson",
            "sanitized_new_value": "Jace Benson",
            "field_name": "opened_by"
          },
          {
            "sys_id": "bc731996db2123008096a455ca96193e",
            "sanitized_old_value": "",
            "field_label": "Priority",
            "is_truncated": false,
            "change_type": "AUDIT",
            "old_value": "",
            "field_type": "integer",
            "new_value": "5 - Planning",
            "sanitized_new_value": "5 - Planning",
            "field_name": "priority"
          }
        ]
      },
      "writable_journal_fields": [
        "comments"
      ],
      "user_id": "cee12e57db1023008096a455ca961971",
      "sys_created_on": "2018-10-18 16:26:37",
      "sys_timestamp": 1539879997000,
      "sys_created_by": "Jace Benson"
    }
  ],
  "primary_fields": [
    "comments"
  ],
  "fields": [
    {
      "plural": "Assigned\n\n to",
      "color": "background-color: transparent",
      "name": "assigned_to",
      "isJournal": false,
      "canWrite": true,
      "label": "Assigned to",
      "isActive": true
    },
    {
      "plural": "Configuration items",
      "color": "background-color: transparent",
      "name": "cmdb_ci",
      "isJournal": false,
      "canWrite": true,
      "label": "Configuration item",
      "isActive": true
    },
    {
      "plural": "Incident states",
      "color": "background-color: transparent",
      "name": "incident_state",
      "isJournal": false,
      "canWrite": true,
      "label": "Incident state",
      "isActive": true
    },
    {
      "plural": "Impact",
      "color": "background-color\n\n: transparent",
      "name": "impact",
      "isJournal": false,
      "canWrite": true,
      "label": "Impact",
      "isActive": true
    },
    {
      "plural": "Priorities",
      "color": "background-color: transparent",
      "name": "priority",
      "isJournal": false,
      "canWrite": true,
      "label": "Priority",
      "isActive": true
    },
    {
      "plural": "Opened by",
      "color": "background-color: transparent",
      "name": "opened_by",
      "isJournal": false,
      "canWrite": true,
      "label": "Opened by",
      "isActive": true
    },
    {
      "plural": "Work notes",
      "color": "gold",
      "name": "work_notes",
      "isJournal": true,
      "canWrite": true,
      "label": "Work notes",
      "isActive": false
    },
    {
      "plural": "Additional comments",
      "color": "transparent",
      "name": "comments",
      "isJournal": true,
      "canWrite": true,
      "label": "Additional comments",
      "isActive": true
    },
    {
      "name": "*Email*",
      "isJournal": false,
      "label": "Sent/Received Emails",
      "isActive": true
    },
    {
      "name": "*Relations*",
      "isJournal": false,
      "label": "Relationship\n\n Changes",
      "isActive": true
    },
    {
      "name": "*Attachments*",
      "isJournal": false,
      "label": "Attachments",
      "isActive": true
    },
    {
      "plural": "Resolution codes",
      "color": "background-color: transparent",
      "name": "close_code",
      "isJournal": false,
      "canWrite": true,
      "label": "Resolution code",
      "isActive": true
    },
    {
      "plural": "Close notes",
      "color": "background-color\n\n: transparent",
      "name": "close_notes",
      "isJournal": false,
      "canWrite": true,
      "label": "Resolution notes",
      "isActive": true
    }
  ],
  "sys_timestamp": 1541426678000
}
```

KB0655923:
https://hi.service-now.com/kb\_view.do?sysparm\_article=KB0655923
