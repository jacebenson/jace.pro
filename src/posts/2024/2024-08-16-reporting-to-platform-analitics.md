---
title: Reporting to Platform Analytics
description: >-
  This blog is about how to try out the **new reporting**, platform analytics
  that, I repeat **does not disappoint me**. Hip-hip-freaking-yay.
date: '2024-08-16'
tags:
  - servicenow
  - reporting
redirectFrom:
  - /reporting-to-platform-analitics/
  - /p/2024-08-16-reporting-to-platform-analitics/
---

A few thoughts and resources.

What's the motivation to move to **Platform Analytics** from **Reporting**?

Is it because, reporting, doesn't work in Workspaces?  Is that it?

Whatever the reason, **ServiceNow customers have to move to Platform Analytics** soon cause with Xanadu it's no longer what's shipped.  

With that in mind I went on to try out this new-fangled tool to see what it's like and I have to say this.  **I'm not disappointed**.  Now you might be like, "_Jace, are you already disappointed?  Why?_"  

Let me tell you a story.  It was 2007 and I was just a mere help desk agent.  We had a defunct processes and weird use cases and I could just create a table, and add a few access controls and wow.  A team had a place to work that didn't have versions and other problems.  I didn't have to email a rep or ask the ServiceNow owning team "Can I please have a table?"

I could solve real problems quickly without a lot of fuss.  It's been more than 10 years and now that same problem is met with a litany of questions, is this the right place, who needs to audit this, should we buy a product to solve this problem, who will support it.  I get it.  It's not the perfect tool for every job but it was a great place to start.  

Now it's much more complicated.  Low-code with complicated bindings and odd click-development is the route we're going.  This isn't the reason for this blog.  This blog is about how to try out the **new reporting** that, I repeat **does not disappoint me**.  Hip-hip-freaking-yay.

First things first.  You already have this in your PDI and probably work instance.  You can flip a property and it will disable the the other reports (you can undo this too).  

Change the property `com.glide.par.unified_analytics.enabled` to true and you're off to the races.

Try creating a new report, it's different.

Try creating a report from a list in Core UI, and Workspaces.

I was concerned this might break embedded forms, it doesn't seem to and those reports still look like they use the `sys_report` not the new ones.

This does break creating a report from an URL I've written about previously.  

There's loads of videos on this topic.  Here's a link to the [Performance Analytics Office Hours playlist](https://www.youtube.com/watch?v=n5mhzrHS_xo&list=PLkGSnjw5y2U6HotK0MQUbCrzVog_zBWat&index=3) and some [5 minute videos answering common Platform Analytics Experience questions](https://www.youtube.com/watch?v=ZlDvMhP_Tx8&list=PLkGSnjw5y2U4sdBCFzTHAos33zYCsB_Gj).

Kevin Milligna was telling me about a thing I totally missed, Platform Analytics Migration Center.  This [video should get you going on migrating from Reporting to Platform Analytics](https://www.youtube.com/watch?v=buwL2rdigV4&t=1326s) quickly (I'm sorry it's an hour long but, this starts at the demo and you can 2x for 30 minutes)

Also, I wanted to note that ServiceNow is using new words to describe the same things.  So here's the list.

- Reports become Data Visualizations
- Dashboards are collections of reports and can include Performance Analytics data sources

Let me know what you think on [LinkedIn](https://www.linkedin.com/posts/jacebenson_xanadu-servicenow-reporting-activity-7230111327636140032-wbZ1?utm_source=share&utm_medium=member_desktop).