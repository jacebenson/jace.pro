---
title: When to Scope
description: "What is the post about?\\\r\nWhen to Scope\\\r\nWhat things would help with writing the post\r\n\r\n# Service-now's Stance\r\n\r\nAccording to the\_community;\r\n\r\n> When sho..."
date: '2022-06-07'
tags:
  - servicenow
  - service-portal
  - scoped-apps
  - api
  - cmdb
  - knowledge
  - reporting
  - service-catalog
  - tutorial
  - troubleshooting
  - knowledge-conference
  - performance
  - security
redirectFrom:
  - /when-to-scope/
  - /p/2022-06-06-when-to-scope/
---

<!--StartFragment-->

**What is the post about?**\
When to Scope\
**What things would help with writing the post**

# Service-now's Stance

According to the [community](https://community.servicenow.com/docs/DOC-7746);

> When should you build an app under global scope versus private application scope?
>
> There are two use cases when considering application scope: extending an existing app or creating a custom app from scratch. If you are extending or modifying an existing global scope application and the changes are having a high impact on other applications, then leave the change in the global scope. However, if the changes are going to have less impact to other applications, then the modifications can be done as a scoped app.
>
> When you are creating a new application from scratch, you should be creating it as a scoped app. ServiceNow’s product strategy is to develop more and more scoped apps to make it easier for customers to deploy the application and to simplify future upgrades. Also, backing out changes to scoped apps is much simpler and can be done with a single push of a button.

# Thoughts

Generally it looks like Servicenow has broken up things in the scoped applications by function or business unit, e.g.

* Guided Setup
* Knowledge Management - Service Portal
* Service Portal Surveys
* Human Resources

That's the precident Servicenow has set.

The pro's and cons of by function and business unit are such

## Business Unit

| Pro                                                    | Con                                                                      |
| ------------------------------------------------------ | ------------------------------------------------------------------------ |
| Easy to tell what needs to be updated based on the ask | Hard to expand to othre area's if some functionality needs to be shared. |
| Having                                                 | \--                                                                      |

# Notes

> Our dev team is a little gun-shy when it comes to scoped apps. Do you have a written policy about what goes in a new scoped app?\
> e.g. Our team is concerned about a future state where our drop-down of scoped apps is 200-items long. (edited)\
> I'm looking for a decision matrix of when to go scope, when to stay global.\
> Like if you're extending `incident`, stay Global because it's already in global. - Jarod M
>
> taht line i think is everyones question\
> sn's done it at a business unit with HR\
> I'd follow suit w/ SN where you make an app per unit, if all units are going to use said table add it to some core app - Jace
>
> We're leaning towards our IT solution hierarchy. if it's a separate product, then it's separated in the CMDB.\
> that's our current draft policy - Jarod M
>
> im so confused - jace
>
> We have SN as a Business Service.\
> We also have SN-Incident as a Business Service that is a `module of` the root SN. This has separate ownership, etc...\
> so if we're going to track something as a new product (e.g. "Advanced Reporting App") as a Business Service (in the CMDB), we will make it a new scoped app. (edited)\
> That, or if there's a security/performance concern, it can be in a scope.\
> That's our draft policy. I was curious how other teams decide when to put enhancement (new functionality) requests in scope - Jarod M
>
> right but, where is the line drawn, is an application considered just a form on the catalog, or a net new table? what if the catalog item needs data from a net new table? - Jace
>
> Me and [@Rolf](https://github.com/Rolf) were talking about the other side of this issue too, When to use great discussion to have but then a few of us have made them and still struggling on how to maintain . clone ect. So maybe these questions would be a great addition to the TechNow were were hoping for over in #lchh - kcimpulse
>
> i guess if you looking for how others are doing it. we have no process around it. we have a "marketing" app scope, and some weirdly named other unit scope - jace
>
> <https://community.servicenow.com/docs/DOC-7746>\
> When should you build an app under global scope versus private application scope?\
> There are two use cases when considering application scope: extending an existing app or creating a custom app from scratch. If you are extending or modifying an existing global scope application and the changes are having a high impact on other applications, then leave the change in the global scope. However, if the changes are going to have less impact to other applications, then the modifications can be done as a scoped app.\
> When you are creating a new application from scratch, you should be creating it as a scoped app. ServiceNow's product strategy is to develop more and more scoped apps to make it easier for customers to deploy the application and to simplify future upgrades. Also, backing out changes to scoped apps is much simpler and can be done with a single push of a button. - Jarod M
>
> We are using them pretty liberally here. When we upgraded to Istanbul earlier this year we decided to prioritize developing in scoped apps. Our main motivation was to make the upgrade process smoother (less conflicts on upgrade!) - rolf
>
> Do you have a naming convention (so they are sorted in the dropdown)? - Jarod M
>
> Only for Scoped Apps in which we're creating a Service Catalog Category, where we preface it with an SC\
> other than that it's just search, but we only have around 35 apps right now so it's not a huge deal - rolf
>
> We are doing the Abvr for the team name - Because the OCD in me hates the scope being in the same long table name as the name of the table. Like We made an Investment application. So I might have made it INV but didnt want the table name being INV_Investment (edited) - kcimpulse
>
> Even with 200 apps though I don't think we'd be running into any naming conflicts. The list is sorted by creation date so most of the time the stuff you want to work on is on top\
> While there's definitely some confusing aspects at first with scoped app dev, it's been worth it for our team to make the switch to primarily working out of global. Making a large scale application while knowing that you can always uninstall and be back to PDI functionality is really nice. I think it'll help us as we scale... right now we are a small team of 4 (3 devs and a manager). - rolf
>
> Great video@chrismaloy very appreciated and good timing on a few discussions we have been having - <https://www.youtube.com/watch?v=DLqkDxGVLbE> - kcimpulse
>
> Thanks [@kcimpulse](https://github.com/kcimpulse)! The video is a little old but still relevant. Thank you for the shout out. - chrismaloy

What is "Application Scoping"?

* I don't like the name "Application Scoping". It's more like a workspace.
* It's a way of collecting application files together that do a specific a function.
* That function may be a full blow app e.g. invoice management
* That also may be minor additive changes to out of box apps or integrations, or utility apps not even needing a data model (e.g. tables)

What does the the Scoped Application Model do for me?

* Design and Runtime Protection
* Universally enforced namespace
* Contextual Development
* Runtime Application Separation
* Installation and Un-installation
* Public and Private API definitions
* Table level data access controls
* Dependency Tracking
* Delegated Development

Easy Migration Tools to move things from Global.

* New Changes

<!--EndFragment-->