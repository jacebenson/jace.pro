---
title: "New ServiceNow CLI"
subtitle: "A new preview of the ServiceNow CLI"
summary: "Think of it as a custom curl if you will, but you dont have to specify the full url 
or your credentials and all the stuff to be able to run macros. - Chuck Tomasi"
date: 2020-11-20T22:00:00-05:00
---

Tonight I popped in the latest Let's Code Happy Hour on ServiceNow's Youtube channel.  They were going to "Enhance the Karaoke App" that Chuck Tomasi maintains.
It's great fun.  The technology they choose to preview is not available yet.  It's neat.  I wanted to write about it before I forget since **IT IS NOT DOCUMENTED ANYWHERE YET**.

At [9:07 on the stream](https://youtu.be/3tXqzXyyvxY?t=547) Chuck starts summarizing what this is.  Below I have that quote;


> We are going to be using the new cli. 
  Which will be coming out shortly. 
  This is a preview.  
  I did ask our product people, *"Can I show this 'cause its not publicly available yet?"* It will be available in the store, you install the the plugin, or the module, or whataver it is.
  And you will be able to configure endpoints.  
  **Think of it as a custom curl if you will, but you dont have to specify the full url or your credentials and all the stuff to be able to run macros.**  
  From a command line (linux mac windows) you could automate some more stuff and integrate with scripted rest apis or the table apis or any of the built in apis to be able to carry out actions 
and trigger them in the instance from a command line.
  <cite>Chuck Tomasi</cite>
 
So this seems pretty sweet.  During the stream I was thinking about some possible use cases;

- Start up script on a server to check in with ServiceNow
- Generate Release Notes for ServiceNow Releases
- Create a task (change request, item, incident)
- Update a record

That all seems very.... powerful. 

I can see this getting some good usage.  

So I asked about it, where do I get this.  I was  told I cannot get it.  It's not out yet and will be release *soon*.  

[One other thing mentioned](https://youtu.be/3tXqzXyyvxY?t=1937) about how to get new commands `snc`;

> Yea and so wha that does right
  is that connects to the instance 
  and goes and um you know introspects 
  those table in which you were just 
  editing those records and pulls down
  any new command so that you can engage 
  with them here.
  <cite>Andrew Barnes</cite>

## What does this look like on the terminal?

I typed out what was on his terminal below.

![](snc-001.jpg)
![](snc-002-record-query.jpg)

## This new thing uses three tables

- End Points [`sn_cli_metadata_end_point`] 
- Command Groups [`sn_cli_metadata_command_group`] 
- Commands [`sn_cli_metadata_command`] 

![](command-group-list.jpg)
![](command-group-item.jpg)
![](endpoint-list.jpg)

## What are my thoughts?

Well this is cool.  I wish I could play with it.  I hope it isn't attached to some random SKU.

This *might* get some serious usage if non-admins get permissions to do stuff.

Could I have used this in the past.  Yes. 

In the past when I've needed to connect to ServiceNow send up stuff to the instance. In those cases, this could have been helpful.  

The ServiceNow CLI looks cool.  It's a new feature I will mess with.