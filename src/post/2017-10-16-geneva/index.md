---
title: "Quick Guide: Geneva"
subtitle: "Here's my take of what's new with Geneva"
summary: "Here's my take of what's new with Geneva"
date: 2017-10-16T20:25:56-05:00
---

Video Review of this;

| Section            | Link                          |
|--------------------|-------------------------------|
| Scripted REST Apis | https://youtu.be/B3K385rJ\_mI |
| ServiceWatch       | https://youtu.be/Qj0NjaEudnU  |
| Connect Chat       | https://youtu.be/w9gi5pm6WjQ  |
| Knowledge Updates  | https://youtu.be/dbU9fiimcaU  |

But here's my list of notable features;

## Web services update

This got a few notable updates;

### Scripted REST APIs

This is HUGE. This allows you to make endpoints return what you want
without using processors. That's huge.

### Attachment REST API

This is a great api to reintroduce. Previously you had to use the
AttachmentCreator SOAP web service. There are a few limitations to the
API that the SOAP call doesn't have. Like, you can't create an
attachment without a record to attach it to. You might think that's
trivial, until you try to do some catalog stuff via REST. But for the
most part this is a great api.

### CORS support

Allows customers to specify which REST APIs on their ServiceNow instance
allow cross-domain AJAX requests from specified whitelisted domains.

## Service Watch -\> ServiceMapping

Before this release Service Watch was a separate product requiring a
stand alone product. After this release it was re-branded as
ServiceMapping and is now built into ServiceNow.

[Release Notes](https://docs.servicenow.com/bundle/geneva-release-notes/page/release-notes/it_operations_mgmt/r_ServiceMappingRN.html)

## Security Operations

This is a new line of business that ServiceNow can sell to clients for
tracking vulnerability responses, configuration compliance, threat
intelligence, and trusted security circles within ServiceNow.

[Release Notes](https://docs.servicenow.com/bundle/geneva-release-notes/page/release-notes/security_management/c_SecurityOpsManagementRN.html)

## Edge Encryption

A separate line of business ServiceNow can sell to clients to allow the
encryption of sensitive data on your company premises before sending it
over the Internet to your ServiceNow instance (encrypted in flight)
where it remains encrypted at rest.

[Release Notes](https://docs.servicenow.com/bundle/geneva-release-notes/page/release-notes/servicenow_platform/r_EdgeEncryptionRN.html)
