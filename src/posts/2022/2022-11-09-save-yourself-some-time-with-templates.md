---
title: Simple automation that your users can do!
description: >-
  Account Locked out.  That was the error message I got.  So working backwards I
  was troubleshooting this production issue.  A service account I used to
  create...
date: '2022-11-10'
tags:
  - servicenow
  - business-rules
  - ui-actions
  - workflow
  - api
  - tutorial
  - troubleshooting
  - security
redirectFrom:
  - /save-yourself-some-time-with-templates/
---

Account Locked out.  That was the error message I got.  So working backwards I was troubleshooting this production issue.  A service account I used to create a Certificate was failing because it's account was locked out.  The only folks with access was me and my team.  I've never met anyone who enjoys working with them and generally I took the lead.  So I tried authenticating on the web to the Certificate Authorities website.  Sure enough it asked me to change my password.  At this point I knew one of two things needed happen.

1. Automate the password change
2. Automate a reminder to change the password

I looked and looked at the APIs available to the service account but there was none to change the password.  I asked the administrator if there was a way to exclude an account or some other automatic way to change the password and they shrugged and said no.

Defeated I knew I at least had a great tool to remind myself and team to change the password frequently enough to avoid this again.

# Scheduled Templates

Haven't heard of them?  They are OLD.  Like pre-legacy workflow old.  

## What you'll need

To use them you need three things.

1. A template
2. A user with rights (role: `template_scheduler`) to make a scheduled template
3. A schedule template

## How to make one

1. When I do this I go and manually enter the data I want in the template on the record type I need.  
2. Turn on the template bar, create a new template.  
3. Now once you create the template you have to go to the template record (unfortunate, but out of box they hide the ui action from the form.)  For now, we'll manually just go to the right place.  In the filter of your navigation type **sys_template.list**.  Open your template and you will see a schedule button, if you don't verify you have that `template_scheduler` role.
4. Assuming you are on the schedule entity generation record, fill out the frequency you want this created.  
5. That's it.   

## Making it available to more users

A few weeks after I did this I was asked by someone at security how can they create a repeating task.  So I gave 'em access to the scheduled template, made links to templates (`sys_template`) and scheduled templates (`sysauto_template`) if they have the `template_scheduler` role.  Now anyone can solve this problem with a little help from our team.  

## How do they work?

When you create a Scheduled Template, Servicenow creates a "Schedule" (sys_trigger) which is the same thing used for scheduled jobs, async business rules, inactivity monitors, sla calculations, metric events, upgrades and much more.  It's not clear \*\*how\*\* it works under the hood but [ServiceNow's doc's don't say much more](https://docs.servicenow.com/csh?version=latest&topicname=c_ScheduledJobs).  [Dirk wrote about some of this](https://community.servicenow.com/community?id=community_question&sys_id=c60153e9dbdcdbc01dcaf3231f9619b0) but it's not well documented to I'd just be guessing.  

## What about checklist templates?

I had a note to talk about using checklists too but that's a bit much here.  If you're curious about that follow [Bibin Gokuldas's blog about it](https://bibingokuldas.wordpress.com/2020/12/17/now-platform-templates-n-checklists/).