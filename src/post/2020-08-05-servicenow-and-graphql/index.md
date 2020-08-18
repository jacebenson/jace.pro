---
title: "ServiceNow and GraphQL"
subtitle: "A technical how to - and my way of understanding GraphQL"
summary: "Thank you Marcus Reinhardt for the amazing repo with great examples"
date: 2020-08-05T10:45:53-05:00
tags: ["draft"]
---
For a while, there's been GraphQL in ServiceNow.  It hasn't been touted as a way to get data, but back in Septempber Aleksas Kucinskas wrote "[How ServiceNow is updating it’s Tech Stack and is using GraphQL](https://servicenowthink.wordpress.com/2019/09/10/how-servicenow-is-updating-its-tech-stack-and-using-graphql/)".

That's great, if you like guessing ServiceNow won't change it.  Thankfully, in [Paris](https://docs.servicenow.com/bundle/paris-application-development/page/integrate/graphql/concept/scripted-graph-ql.html#d1131769e196), they added it as something we simple developers can make.

I've dabbled with GraphQL when setting up GatsbyJS sites, so I thought I could muddle my way through it.  But when I was introduced to the GraphQL definition record, I had a realization. I knew nothing.

![Screenshot of new GraphQL Record](graphql-ss.png)

## What is GraphQL

As stated on [graphql.org](https://graphql.org), "A query language for your API".  You specify with a rest request, what you need, and how you need it, and it's returned that way.  So where you might have had to make a call to incident, to find incidents for issues against your application.  Then a call to user's devices to know how to reach the user.  GraphQL allows for one call to get that.  I'm sure there's more to it, but that's the benefit I see.

## Getting GraphQL

I'm going to be going over the points made here: https://github.com/noxify/ServiceNow-GraphQL-Example

I'm going to make a few assumptions if you're here.  
1.  You are using a Paris PDI.
2.  You have Postman installed (or a similar rest tool).
3.  GraphQL is enabled (System Web Service > GraphQL > Properties).  Check all the things.

What are these things;

 - Schema: This is the definition of your graphQL.  It will direct the query to resolvers and mutations as needed.
 - Resolver: These are scripts to return defined Objects from your Schema
 - Mutation: I assume this is to modify something you got back.  I'd guess, changing languages might be best done with these.

## Starting from an example

number=INC0010112^sys_idISNOTEMPTY^caller_idNOTIN^ORcaller_id=005d500b536073005e0addeeff7b12f4
number=INC0010112^sys_idISNOTEMPTY^caller_id=^ORcaller_idNOT IN
number=INC0010112^sys_idISNOTEMPTY^caller_id=b21a4f8d2fc51010bd54d5f62799b6a2^NQnumber=INC0010112^sys_idISNOTEMPTY^caller_idNOT INb21a4f8d2fc51010bd54d5f62799b6a2
