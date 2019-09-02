---
date: '2018-12-31'
layout: post
title: Open Source Activity Formatter
authors: ["jace"]
---

The Out of Box activity formatter is... somthing... isn't it? It has a
lot of features, but with those features it has a number of issues and
it's one of the things HI's never given out.

I replied to a post recently about this on the
[community](https://community.servicenow.com/community?id=community_question&sys_id=bb39066edb122780fb4ae15b8a9619a9).

It was really a short post but the idea started before then when I was
asked to control specifically what emails could and could not show up on
the formatter. I thought the formatter respected ACLs and Before
Business Rules, but it does not. I opened a HI ticket as this seems like
a bug, if I add an ACL or a before business rule to restict access to
something it should be restricted however it's called.

Here's the goals of this [project](https://github.com/jacebenson/osaf),
to have a starting point to up and replace the OOB formatter;

Today, here's the state of it;
![2018-12-31-open-source-activity-formatter](/uploads/2018-12-31-open-source-activity-formatter.png)

So to do that we need the following features;

-   [ ] Allow filtering of fields
-   [x] Show user who made the change and when the change was made
-   [ ] Show appropriate fields of the current record to the logged in
    user

I'd like to enchance this to allow these features;

-   [ ] Respect ACLs or Business Rules of other tables/references
    e.g. emails
-   [ ] Disallow the "Post" button as it uses undocumented
    [`angular.do`](/post/2018-11-05-angular-do/) rest calls
-   [ ] Paginate the History instead of setting a upper limit.
-   [ ] Automatically format links
