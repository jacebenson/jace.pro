---
title: Hacktoberfest 2018 - Self contained ATF application
permalink: /hacktoberfest-2018-self-contained-atf-application/
author: Jace Benson
date: 2018-10-24T20:52:45.492Z
draft: false
prism: false
---
<!--StartFragment-->

DigitalOcean and Github put together an event called "Hactoberfest" where you can sign up and get a shirt after 5 pull requests.

I've made a repo to build out tests for ServiceNow's tool to help everyone get there.

Check it out [on Github](https://atf.jace.pro/).

To contribute you need a personal developer instance and the drive to make a test and / or suite to test some OOB functionality.

All tests should be self contained. What do I mean by that? Well, anything you reference in the test may need to be created like the user you want to impersonate, and their group memberships/roles.

I do intend on making a custom test as part of this to make the generation of these artifacts easier but I am still learning how the code works for those tests.\
[This post](https://community.servicenow.com/community?id=community_blog&sys_id=398d6669dbd0dbc01dcaf3231f9619d2) at least is a decent example of someone doing a custom test step.

<!--EndFragment-->