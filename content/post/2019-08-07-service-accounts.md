---
date: '2019-08-07'
keywords:
- "service accounts"
layout: post
title: 'Service Accounts - Use them'
authors: ["jace"]
aliases:
- '/2019-08-07-service-accounts/'
---

A few weeks ago a question was asked on Slack and someone asked me to post about it.

> Could anyone define some advantages of using a service account rather than a user account when it comes to integrations?

There was a few pros right away;

- Doesn't depend on user being employed
- Generally can be excused from password reset policies
- Granular permissions

## How one is made

Check the "Web Services Access Only" on the user account.  It's part of the [Non-Interactive Session Plugin](https://docs.servicenow.com/bundle/london-platform-administration/page/administer/users-and-groups/concept/c_NonInteractiveSessions.html).

Now really this is where this post was going to end.  However I had gone into how I do service accounts.

## How I manage them

1.  Create a group called "Servicenow Service Accounts"
2.  We have a process in place when someone wants to be added to a group they submit and item.  It has an apporval to the manager.  If Approved a script adds them to the group.  Otherwise they don't get added.
3.  Once added to the group the roles attached, `itil`, and `rest_api_explorer` are given.  You could add other older roles like the SOAP roles but we encourage REST.
4.  Let the owner of the service account figure out their calls.
5.  Once those calls are sorted.  Remove gui access.

We use SSO so user's can't use their personal account to do the REST calls outside of the browser.  We make the new user have a manager of the person who is asking for the service account.  If the service account needs more access, we can add it to other groups where the access is proper.  I do intend to write up something or link to something to help convey what the api's are they have access to but generally I just point them the [Rest API Explorer](https://docs.servicenow.com/bundle/london-application-development/page/integrate/inbound-rest/concept/c_RESTAPIExplorer.html)

Further Reading: https://community.servicenow.com/community?id=community_blog&sys_id=b4fca2a5dbd0dbc01dcaf3231f961900