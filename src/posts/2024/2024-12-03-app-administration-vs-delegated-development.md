---
title: App Administration VS Delegated Development
description: >-
  Application Administration and Delegated Development both touch scoped
  applications and how you and your collogues can work together. What are they
  and when should you use one over the other?
date: '2024-12-03'
tags:
  - servicenow
  - business-rules
  - service-portal
  - flow-designer
  - scoped-apps
  - html
  - tutorial
  - security
redirectFrom:
  - /app-administration-vs-delegated-development/
---

I'm building a solution and as part of this, I'm trying to make a easy to show interactive environment.  

One of the things I was thinking about was setting up Delegated development on my Personal Developer Instance.  

It became apparent to me that I didn't understand Application Administration compared to Delegated Development, at least not how the [docs](https://www.servicenow.com/docs/csh?topicname=c_DelegatedDevelopment.html&version=latest) say.

If you're coming across this and want to know the difference, here it is.

1. [Application Administration](https://www.servicenow.com/docs/csh?topicname=application-administration.html&version=latest) is the functionality to **restrict** standard administrators from accessing a scoped application.  Think Human Resources Service Delivery. You may not want global admin's mucking up columns on their tables, business rules, flows, etc.
2. [Delegated Development](https://www.servicenow.com/docs/csh?topicname=c_DelegatedDevelopment.html&version=latest) is the functionality to **invite and allow** others to build automation within a specific scope.  

I want to take a few moment and dive into each a little more as my understanding now, may help me later when.

## Application Administration

This was not what I was looking for before, but let's talk about it, and how you can set it up.

You need a scoped application to get this, and then once you look at the scoped application you'll notice a checkbox next to Application Administration that looks like it's a simple check.  It is, but you wont be able to save that record until you have a role with the Application Administrator of true.

Here's a quick and dirty checklist to try it out.

1. Create a scoped application
2. Change your current scope to the new scope.
3. Create a role.
4. On the list view of the role, show `Application Administrator`
5. Set `Application Administrator` to true
6. Go back to "My company applications" and click the left-side of the tile to open the application's details.
7. Check the box.

What did this just do?  Well, if you don't have this role, you wont be able to mess with anything inside of that scope.

## Delegated Development

This **was** what I was looking for, but after seeing it, I'm not user it's what I need.

Let's say you wanted to let some folks not on your team build on ServiceNow in a way that is separated by scope from you.  This would be how to achieve that.  Here's a quick list of steps to try it out.

1. Create a scoped application
2. In the related links you might see "Manage Collaborators" from the App, or in Legacy studio under the file menu, you can see the same.
3. Click on that, a Modal will appear with a invite field, and level.


   ![App Administration Interface](/assets/images/app-administration-interface.png)


   1. So it appears you can pick anyone
   2. The level's are limited to editor and owner.  Owner should include all access, and it nearly does.  It's missing the scripting option.
   3. Pick a user, or better create a user with no roles, then pick that person.
   4. Pick owner
4. Once that's submitted, you'll probably notice something about the request being auto rejected.  This is... by design.  I forgot to mention you will need to ensure the group, `App Engine Admins` need's to have some folks in it who can approve these tasks.
5. Start over, at step 3.  Welcome back.
6. Now you might be wondering what task did this create?  It made a `sn_collab_request_dev_collab_task` record and an approval against it to the group `App Engine Admins`.
7. You can look up the flow, it has over 30 steps.  If you approve the request the user will be given over 20 roles (given you gave them "owner" access).
8. Now if you have them or impersonate them to see what they can do, you can notice you can see all the appropriate buttons in legacy studio and the new ServiceNow studio to create flows, business rules, portal widget etc.  However, you may notice, they can't edit or create any scripts in those records.  
9. Stop impersonating them and go back to where you invited them, that modal.  You'll see they are listed as a collaborator, go ahead and change their access.


   ![](/assets/images/delegated-development-settings.png)

10. See the options, there's a "Allow Scripting" near the bottom.


       ![](/assets/images/app-permissions-comparison.png)

## Further Reading and thoughts

These two features might be a bit weird to understand.  Hopefully this helped.  Thanks John Dahl for letting me bounce these ideas around with you, that helped me get to this understanding faster.

If you'd like to read more on this, these are the links I was using to try to understand it.

* [Docs: Delegated development and deployment](https://www.servicenow.com/docs/csh?topicname=c_DelegatedDevelopment.html&version=latest)
* [Docs: Application administration](https://www.servicenow.com/docs/csh?topicname=application-administration.html&version=latest)
* [Dan Covic: Citizen Development](https://www.dancovic.com/2024/11/citizen-development-101.html)
* [Lisa Holenstein, Kiernan McMorrow, and Robert Ninness Platform Academy Video (43 mins)](https://www.youtube.com/watch?v=6kAFiX5dtl8&t=2119)