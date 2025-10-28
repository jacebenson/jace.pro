---
title: Debugging inbound emails
description: "What is the post about?\\\r\nInbound Action debugging\\\r\nInbound Email debugging\r\n\r\nWhat things would help with writing the post\\\r\nSource\\\r\nYoutube\r\n\r\nIf emails ..."
date: '2022-06-07'
tags:
  - servicenow
  - tutorial
redirectFrom:
  - /debugging-inbound-emails/
  - /p/2022-06-06-debugging-inbound-emails/
---

<!--StartFragment-->

**What is the post about?**\
Inbound Action debugging\
Inbound Email debugging

**What things would help with writing the post**\
[Source](https://hi.service-now.com/kb_view.do?sys_kb_id=eb556f1287cd7c003fff83bdff434d46)\
[Youtube](https://www.youtube.com/watch?list=PLCOmiTb5WX3o-8pchYsG4DuyvrDXjbgjd&v=KX0b-MrTDpY)

If emails are not received or processed as expected,\
it is important to identify the root cause. The following\
steps help understand the inbound email process as well\
as guide you through troubleshooting common issues.

* A message is sent from a customer’s email such as Microsoft Outlook, Hotmail, or Gmail.
* Email is delivered to a mail server.
* The ServiceNow instance polls the email server every two minutes to download sent messages.

  * Verify if the instance is configured to receive emails
  * Identify if the scheduled job (POP Reader) in an error state
* Confirm the scheduled job (POP Reader) is running.

  * Note: Polling time is configurable and may vary by instance.
* Emails are received in the ServiceNow instance and processed.

  * Emails are stuck in the inbox
  * Validate the inbound email action is performed
* Confirm the email is processed by the instance.

<!--EndFragment-->