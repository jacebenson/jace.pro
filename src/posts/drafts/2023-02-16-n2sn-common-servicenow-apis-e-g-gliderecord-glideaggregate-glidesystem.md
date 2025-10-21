---
title: 'N2SN: Common ServiceNow APIs (e.g. GlideRecord, GlideAggregate, GlideSystem)'
description: Get familiar with the heavy hitters of ServiceNow!
date: '2023-02-16'
tags:
  - servicenow
  - gliderecord
  - business-rules
  - client-scripts
  - flow-designer
  - api
  - acl
  - database
  - troubleshooting
  - security
redirectFrom:
  - /n2sn-common-servicenow-apis-e-g-gliderecord-glideaggregate-glidesystem/
---

ServiceNow APIs are like the tools in your toolbox. By using common APIs like GlideRecord, GlideAggregate, and GlideSystem, you can access data and functionality in ServiceNow and create more powerful applications.

## GlideRecord

The most common API that people know about is GlideRecord. 
What is `GlideRecord`? `GlideRecord` is a class, that's a technical term. `GlideRecord` is a way that you can ask the database for data about a record or a set of records. It also lets you update those records, create new records, or delete existing records. `GlideRecord` gives you back these things called `GlideElements`, so they're not exactly text, but they can appear to be that way. So you want to make sure you convert those values to text, with either `getValue` or `toString`. There's a lot of ways to query data in a `GlideRecord`. I prefer to just use `addEncodedQuery`. You can generate the encoded query when you go to a list, and you right-click on the breadcrumb of your query, and you can say Copy Query, and that will be your encoded query. There are operators like `addJoinQuery`, `addNotNullQuery`, `addNullQuery`, `addOrCondition`, `addActiveQuery`. They don't work everywhere, and in my opinion, they're just noise. There's no reason to use them. There is a shortcut method, once you have a `GlideRecord`, called .get, and that'll grab the first record that matches the query you give it in get, whether that's a `sys_id` or if you give it two parameters, it'll look for the first record where the field you give it matches the value you give it. When writing with a `GlideRecord`, there's a few things you should be aware of. Whenever you write with a `GlideRecord`, it will set all the sys fields to `sys_created_on` and `sys_created_by` and `sys_updated_on` and `sys_updated_by`. Those are set automatically, unless you set `autoSysFields` as false. Additionally, there's another similar method called `setWorkflow`, which confusingly doesn't stop flows from executing. It stops other business rules from executing. There's a less known `setEngines`, which you can disable some of the engines and other processes in ServiceNow. That rarely gets used, but it's nice to know what tools you can use to work with things. There is one type of `GlideRecord` call that you need to be aware of, which is `GlideRecordSecure`. That's the way people should be using `GlideRecord`. 

## GlideRecordSecure

`GlideRecordSecure` conforms to the access controls. If someone was able to somehow access a server-side request, if they use `GlideRecord`, access controls aren't invoked. Imagine if you're the HR data and you said, show me all employees and their salaries. If an access control omitted salaries from the response, `GlideRecordSecure` would properly return either the rows or the columns with the data omitted, depending on your access controls. Using `GlideRecordSecure` is really important when exposing stuff. 

## GlideAggregate

Another class we're really familiar with is `GlideAggregate`. `GlideRecord` can read the details on a record or a list of records, but one thing `GlideRecord` isn't, `GlideRecord` isn't as fast as it could be. When you're working with hundreds of thousands of records, you'll likely want to make sure or work with `GlideAggregate` before you work with `GlideRecord` to ensure you're not querying too many records or you're, in fact, deleting the right quantity of records. Anytime that you're going to be doing a count of some sort or average, any type of math on the results that you're getting, you'll definitely want to be using `GlideAggregate`. Something really nice about `GlideAggregate` is almost all the functions in `GlideRecord` work on it. There is just the added `addAggregate` and `getAggregate`, and then I think you can also do a group by `GlideAggregate`. `orderByAggregate` is what I'm thinking of, so you can say order the aggregate by the category, and then it'll order by A to Z for the category count. 

## GlideSystem
The next class I think you really should be familiar with in ServiceNow would be GlideSystem, which is really a hodgepodge of a bunch of classes. There are so many methods that exist with GlideSystem, but for the most part, what I use the GlideSystem call, the way you call it is just do gs. and then the method you want to call. But for the most part, folks just do logs with GlideSystem. Make sure you do gs.info or gs.warn or gs.debug or gs. You'll also use GlideSystem to get the current logged in user ID and their roles. 

## GlideAjax

The last class I think you should be familiar with is `GlideAjax`. `GlideAjax` is a client-side call you can make to the server to ask for data within a client script. All the other ones I discussed are all server-to-server. So you're in a server-side script field telling it to run server-side. In a client script, it actually executes on the browser. Where that's useful is if you want to set something dynamically on the form as the user is setting something. Maybe you don't want them to order a phone when they already have a phone that's been ordered and in process. In that case, you should probably use a `GlideAggregate` to do a lookup on the server side to check the status of that request and then come back to them and say, hey, look, you already have a phone on order. There's a link to check it out. Make your changes there or contact when we're about it.