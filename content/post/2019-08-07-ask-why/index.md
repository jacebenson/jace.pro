---
aliases:
- '/why/'
- '/2019-08-07-ask-why/'
date: '2019-08-07'
keywords:
- "ask"
- "why"
layout: post
title: 'Ask Why'
authors: ["jace"]
---

A long long time ago a [Chuck Tomasi wrote this great post](https://community.servicenow.com/community?id=community_blog&sys_id=7c9ceae1dbd0dbc01dcaf3231f9619da)

I think it's so important, I ought to write one too.

I've been on most sides of the equation when it comes to this.  I was a help desk techncian way way back when.  Then I tried to help define the requirements that we needed.  I've been a consultant where I fulfilled the requirements.  Now I'm a customer again.  When you're a customer, you really don't care how it works, just that it works.  Or at least that was my opinion back then.  Now, however.  I push back.  I ask why.  I get the details that drive to the question, "**What business problem does this solve?**"  You should to.

## You are the expert

No, really, you were hired or at least you are probably working as the subject matter expert.  If you didn't push back or give reasons **why** the requirement they've given is poor/bad why wouldn't they keep doing this?  So when someone asks;

> Customer: Hey SME, Add this checkbox on Incident called "Outage"\
> You     : I can do that, but **why** do you want this?

Really that's all this post is about. \
Until they give you the reason, or the business problem this solves.  I'd wait to do it.

I've spent countless hours head down working on code that never got released because I never asked this.  Sure.  They are paying you either via payroll or via a contract, but, if you didn't ask you wouldn't be doing you're job.  It's critical you ask.  

## How I handle poor requirements

I'll go over adding that field above.

> Customer : Hey SME, Add this checkbox on Incident called "Outage"\
> **You**  : I can do that, but **why** do you want this?\
> Customer : Don't ask why, just do it.\
> **You**  : If I didn't ask, you could hire anyone to do this.\
> I've done this in the past, and knowing **why** is crucial to ensuring this is the right thing to solve the problem.\
> When you don't present a problem, it's concerning because you might not be considering other factors.\
> Customer : Like what?\
> **You**  : Licensing, whose maintaing the value of the field, what is going to keep it in check, and setting an expectation that anyone can add an arbitrary number of fields on incident.\
> Customer : This is just for reporting.  We want to know when and for what customers an incident is considered an outage.
> **You**  : ...

You can see how this might keep going down different ways.  Maybe the right call here is use the `cmdb_ci_outage` table.  Maybe the right call is to use a metric.  In any case.  Adding a field is probably not the right way to solve this.  

Let me end here by quoting Chuck's ending remarks;

- First, Seek to understand their needs. Don't take their solution at face value when you haven't understood the problem. Ask why.
- If necessary, consult the community for additional knowledge in the matter.
- Offer options.
- Finally, make your recommendation based on their needs.
