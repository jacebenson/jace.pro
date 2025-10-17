---
title: Automated Testing (ATF) opinions
permalink: /post/2017-12-02-atf-thoughts/
description: ""
author: Jace Benson
image: /static/img/software-762486_1920.jpg
imageAltText: A screen with a magnifying glass on the screen zoomed in on a red bug
date: 2017-12-03T02:02:50.429Z
draft: false
prism: false
---
This is a list of items I think the ATF Tests should include.

I think every test should have the following steps;

* Create users to use to for test (Server>Insert Record on sys_user)
* Create role(s) for the newly created user, as you may not always
  know a good user to test as.(Server>Insert Record on
  sys_user_has_role)
* Impersonate the user(Server>Impersonate)
* Use Server>Record Validation to test most field values
* Use Form validation for User Experience testing.

Tests should also follow these as well

* Track Tests in update set with the code
* Group Tests by tag.  Tag for Application, Testing Schedule, and
  Feature/Effort/Sprint
* Tests should be small units to test and not dependent on eachother.
* Tests should be part of the estimate of work when sizing work.
* Tests should run on a schedule.

[Community Blog](https://community.servicenow.com/community?id=community_blog&sys_id=1a4e66addbd0dbc01dcaf3231f96192f)
for further reading. 

[Further Reading](https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/other-document/nowforum/sydney/hands-on-lab2-automated-testing-framework.pdf)

* [Saved Off on 2018-12-26](./hands-on-lab2-automated-testing-framework.pdf)