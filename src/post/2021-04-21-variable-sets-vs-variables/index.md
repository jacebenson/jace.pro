---
title: "Variable Sets vs Variables"
subtitle: "Knowing the limitations of these will save you time"
summary: "Variable Sets and Variables are great, but identifing when to use which is important"
date: 2021-04-21T19:24:34.404Z
tags: "draft"
---

# Variable Sets vs Variables

As long as I can remember ServiceNow has had both of these.  
One of the first tasks I had was to create a New Hire form.  
Back in 2007 I spent, no joke, three days trying to understand why my variables were going missing.

I would set the item on the variable to the "New Hire" item, then I'd go in the variable set, and I'd pull in the variable there.
Then the variable I had set to use the item "New Hire" was gone.  

I didn't know what I didn't know.  

A variable cannot be part of both a variable set and associated directly to an item.

- UI Policies on a Catalog Items can use any variable on the item and any variable on any included variable sets.
- UI Policies on a Variable Set limit variables to their own variable set.
- Client Scripts on a Catalog Items can use any variable on the item and any variable on any included variable sets.
- Client Scripts on a Variable Set limit variables to their own variable set.

Say you had 20 items to make and you though each item has "Shipping" set of questions to ask and then nothing else matches.

| 🔽 Actions                                                 | Outcomes                                                                                                            |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Create 1 variable set, and then all variables on the items | This is generally how I've seen most items set up.  This is fine but does lead to some... re-creating of variables. |


Why does this matter?  When you're making new variables and variable sets it's important to understand the limits of them.

I wanted to make a table showing these limits;

When considering variable or variable set you need to consider where the variable will be.  If it's in the Variable set, it has access to everything in the variable set only.  If it's in the Catalog Item, it has access to everything associated to the Item (including variable sets).

Normally emoji's took up some 1.1/1.3 characters so nothing lined up if oyu used them

| I am a column | I am another column |
| ------------- | ------------------- |
| 👋           |
| ▶           |                     |