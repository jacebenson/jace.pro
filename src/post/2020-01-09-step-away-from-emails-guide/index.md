---
title: "Step Away From Emails"
subtitle: "A step-by-step guide"
summary: ""
date: 2020-01-09T14:47:20-06:00
---

I started making notes on this a long time ago.  I'm going to update this as needed but this is what I have so far.

Email is an amazing system, however, it is also easy to lose so much work there.  ServiceNow wants you to make work you do from email into structured data that can easily worked.  

That's great Jace, but where's the steps.  What do I do?

# The guide

This is all theory for me as I have not implemented this.  

## Step 1

Identify what **is going to be allowed now** to create work.

Go over you're current Inbound Actions and make a list of inbound emails you intend to still process immediately, initially I'd guess that is just the "Update Approval Request" inbound action.

The rest of them, ensure they set "Contact Source" to email for inserts.

## Step 2

Idenify what outbound Notifications can be disabled right now.  
The less you email people, the less they have to respond to.  
You have many notifications that are not actionable.  
Anything that the user recieving the message is only informational should be disabled. 

Disable any notification that is strictly informational.

Examples;
- Item Requeted
- Incident Created
- Something was approved

## Step 3

Now it will get hard.  
Change processes on how people find work.  
Instead of going to their mailbox, they will need to go to their assignments.

I'd recommend doing this all at once.

# Notes

TL; DR  Record Producers created specific to your most commonly reported incidents that gather the data needed to resolve those incidents (including optional data based on answers in the RP) can greatly reduce your TTR and cause overall greater customer satisfaction despite the bigger hurdle to incident submission.  
careful pushing of folks to these  Structured Record Producers can be handled in many ways, including closing incidents submitted improperly and pointing them to the new RP

Emails & SP:
Emails created entries cost more, introduce delay for most interactions, initial send is quicker for user to send, slower to help them in general case
Structured data and clear services via SP are a large difference - cuts down on back and forth, aids in automation, helps routing and fulfillment expectations, transparency and prioritization. Better expectations and up front data collection leads to happier users quickly.

> Phased Approach is recommended Show incentive to go to no inbound email with Time to resolved Time to resolved is lessened by less categorizing, less back and forth to/from the customer.
>
> Some organizations saw a 25%-75% better resolution time after disallowing email. 
>
> Ensure you offer specific services that handle most the calls to allow the faster resolution.
