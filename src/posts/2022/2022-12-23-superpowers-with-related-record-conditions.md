---
title: Superpowers with Related Record Conditions
description: "> Steve: Jace, I want an alert whenever we don't get an message from this server every hour.\\\r\n> Jace: So you want me to watch for the lack of something, and..."
date: '2022-12-24'
tags:
  - servicenow
  - notifications
  - reporting
  - service-catalog
redirectFrom:
  - /superpowers-with-related-record-conditions/
  - /p/2022-12-23-superpowers-with-related-record-conditions/
---

> Steve: Jace, I want an alert whenever we don't get an message from this server every hour.\
> Jace: So you want me to watch for the lack of something, and if there's nothing do the thing?
> Steve: Yes.

Before Related Record Conditions on reports this was a really tough ask.
I remember asking coworkers to jump into a room so we could flesh this out.  It wasn't easy.  There was 24 events this way.  So we had 24 different scripted solutions watching for the lack of a check in.  

In retrospect I wonder why I didn't just have a scripted end point update the server or something.  However that's not why I'm writing this.

Did you know you can easily get a list of records where theres no related records.  No?  Neither did I.

Here's a few great use cases for this.

1. Find me groups with no members (Can they be removed?)
2. Find me catalog items with no related requests (Is this item being used?)
3. Find me users with no related (If they are licensed can we remove them from those groups?)
4. Find me notifications, with no email logs (Is this notification being triggered?)

To make  report like this all you need to do is the following.

1. Built your filter on the list your curious about. (e.g. Users)
2. Right click on a column that has "Bar Chart", press that.
3. In your filter, click "Related List Conditions", and pick the related records you want to query.  Say you want to find users where they are not a member of any group.  (Or maybe users where they are a member of more then 3 groups)
4. Click the "Greater then or Equal to 1" to change the related list condition.
5. Pick the Related List Condition table.  (sticking with group memberships, you'd pick Groups)

![Related list condition in ServiceNow](/assets/images/related-list-condition.png)

One really cool thing about this is if you click on the report you can see how the related condition is built in the URL condition which means you can also use these in encoded queries.  Maybe you want to notify folks when they have 5 or more incidents needing their attention. 



Related Videos: 

 - [RFedoruk's video](https://youtu.be/gkzKzSXbwk0)
 - [My rough video](https://www.youtube.com/watch?v=IVBmm5XAfHE&hd=1)