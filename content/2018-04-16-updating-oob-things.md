---
date: '2018-04-16'
layout: post
tags:
- ootb
title: How to work with Out of Box things
---

This is something I've been told differently how to manage out of the
box records. I go over the pros and cons of them here.

# Ways to work with Out of Box things in Servicenow

## Jakarta and later

You should always add comments why you are changing and out of box (oob)
script and change as little as possible so when upgrading its clear what
you changed and why its different.

With an update in Jakarta, the recommended approach is to update the OOB
record with comments of why you've changed what you changed, so when you
are comparing the upgraded version and the customized version its easy
to see what you did and why you did it.

## Pre-Jakara

Knowing *why* things were updated in the past might help understand
more.

### Comment OOB and add comments

Comment out code, and adding notes stating why you change it. This had
the following pros/cons

| Pros                                                             | Cons                           |
|------------------------------------------------------------------|--------------------------------|
| Least amount of work                                             | Upgrade would show any changes |
| No referncing newly created scripts as new code is in oob record |                                |

### Inactive and make new

Inactivate if possible, then, Copy. This is hard to see if anything has
been added to the OOB because deactivating doesn't trigger a customer
update.

| Pros                                  | Cons                                                                            |
|---------------------------------------|---------------------------------------------------------------------------------|
| Would never get accidentally upgraded | Upgrade will not show this as needing updating                                  |
|                                       | May require many updates to the newly created thing if its referenced all over. |

### Comment OOB, add comments, inactive and make new

Add Comment stating you are making a copy, inactivate it. Copy it. This
will ensure the OOB thing comes up in a skipped update.

| Pros                                                | Cons                                                                            |
|-----------------------------------------------------|---------------------------------------------------------------------------------|
| Would never get accidentally upgraded               | You still have to make a new thing                                              |
| Update difference still shows up so you can compare | May require many updates to the newly created thing if its referenced all over. |

## Further Reading and Thanks

[Resolving a skipped
update](https://docs.servicenow.com/bundle/jakarta-platform-administration/page/customer-support/task/t_ResolveASkippedUpdate.html)

Thanks Andrew Barnes for the helpful input on this!
