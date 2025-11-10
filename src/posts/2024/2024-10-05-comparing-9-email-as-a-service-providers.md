---
title: Comparing 9 Email as a Service Providers
description: >-
  A comparison of 9 email as a service providers, including Amazon SES,
  SendGrid, and Mailgun.
date: '2024-10-05'
tags:
  - email
redirectFrom:
  - /comparing-9-email-as-a-service-providers/
  - /p/2024-10-05-comparing-9-email-as-a-service-providers/
---

# I spent weeks comparing 9 email as a service providers. Here's what I found.

A few years ago I was set on building a tool called Tskr, I still am.  This post isn't about Tskr though.  You can read more on that at [tskr.io](https://tskr.io).  

This post is about the journey I took to find the best email as a service provider for Tskr.  I spent weeks comparing 9 email as a service providers.  Here's what I found.

These notes may be a bit dated but they are probably still relevant.  I hope you find them useful.

## Table comparison

Many of these have free tiers.  

| Product                    | Outbound   | Inbound        | SMS        | Tier Limits          | Pricing |
| -------------------------- | ---------- | -------------- | ---------- | -------------------- | ---------------------------- |
| [Mailgun]                  | [API][mgo] | [Webhook][mgi] | NA         | 100/day, 15k/mo      | $15/mo  |
| [Sendgrid]                 | [API][sgo] | [Webhook][sgi] |            | 100/day, 50k/mo      | $20/mo  |
| [Sendinblue - brevo]       | [API][sbo] | [Beta][sbi]    |            | 300/day, 5k/mo       | $9/mo   |
| [Mailjet]                  | [API][mjo] | [Webhook][mji] | [SMS][mjs] | 200/day, 15k/mo      | $17/mo  |
| [Mailchimp]                | [API][mco] | [Webhook][mci] | [SMS][mcs] | 500/day, 12·contacts | $20/mo  |
| [ConstantContact]          | [API][cco] |                | Yes        |                      | $80/mo  |
| [Amazon SES]  [Amazon SNS] | [API][ao]  | [SNS][ai]      | [SNS][ai]  |                      | $0.10/1000 emails |
| [Nodemailer]               | [API][nmo] | NA             | NA         | Unlimited            | $ mail server  |
| [EmailEngine]              | [API][eeo] | [Webhook][eei] |            | Unlimited            | $ mail server, ~$1k/yr |

[Mailgun]: https://mailgun.com
[Mailchimp]: https://mailchimp.com
[Mailjet]: https://mailjet.com
[Nodemailer]: https://nodemailer.com
[Sendinblue - brevo]: https://sendinblue.com
[Emailengine]: https://emailengine.app
[Sendgrid]: https://sendgrid.com
[ConstantContact]: https://constantcontact.com
[Amazon SES]: https://aws.amazon.com/ses/
[Amazon SNS]: https://aws.amazon.com/sns/
[mgo]: https://documentation.mailgun.com/en/latest/quickstart-sending.html
[mgi]: https://documentation.mailgun.com/en/latest/quickstart-receiving.html#supported-actions-for-routes
[mco]: https://mailchimp.com/developer/transactional/guides/quick-start/#make-your-first-api-call
[mci]: https://mailchimp.com/developer/transactional/guides/set-up-inbound-email-processing/
[mcs]: https://mailchimp.com/integrations/sms-and-text-message-marketing/
[mjo]: https://dev.mailjet.com/email/guides/send-api-v31/
[mji]: https://dev.mailjet.com/email/guides/parse-api/
[mjs]: https://www.mailjet.com/sms/
[nmo]: https://www.edwardbeazer.com/sending-email-using-nodemailer-using-a-lambda/
[sbo]: https://www.sendinblue.com/api/
[sbi]: https://developers.sendinblue.com/reference/inbound-parsing
[cco]: https://v3.developer.constantcontact.com/api_reference/index.html#!/Email_Campaigns/retrieveEmailCampaignsUsingGET
[sgo]: https://sendgrid.com/solutions/email-api/
[sgi]: https://docs.sendgrid.com/for-developers/parsing-email/inbound-email
[eeo]: https://github.com/postalsys/emailengine
[eei]: https://github.com/postalsys/emailengine
[ao]: https://aws.amazon.com/ses/
[ai]: https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html
[asespricing]: https://aws.amazon.com/ses/pricing/
[asnspricing]: https://aws.amazon.com/sns/pricing/