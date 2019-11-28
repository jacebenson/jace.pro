---
title: "Quick Guide: Istanbul"
subtitle: "Here's my take of what's new with Istanbul"
summary: "Here's my take of what's new with Istanbul"
authors: ['jace']
date: 2017-10-16T20:25:56-05:00
#lastmod: 2019-09-07T23:25:56-05:00
featured: false
draft: false
projects: ['sn-version-tracker']
---

| Section                       | Link                                |
|-------------------------------|-------------------------------------|
| GlideDate/Time API Updates    | https://youtu.be/s2aRGT9WIRk?t=778  |
| Search Synonyms               | https://youtu.be/s2aRGT9WIRk?t=866  |
| Condition Builder v2          | https://youtu.be/s2aRGT9WIRk?t=967  |
| Mobile                        | https://youtu.be/s2aRGT9WIRk?t=1301 |
| Email API                     | https://youtu.be/s2aRGT9WIRk?t=1505 |
| Unsubscribe                   | https://youtu.be/s2aRGT9WIRk?t=1679 |
| Email Layouts                 | https://youtu.be/s2aRGT9WIRk?t=1786 |
| API Analytics                 | https://youtu.be/s2aRGT9WIRk?t=1917 |
| HTTP Message Logging          | https://youtu.be/s2aRGT9WIRk?t=2027 |
| ATF                           | https://youtu.be/s2aRGT9WIRk?t=2228 |
| Studio/Source Control changes | https://youtu.be/s2aRGT9WIRk?t=2962 |
| Debugger                      | https://youtu.be/s2aRGT9WIRk?t=3091 |
| Summary                       | https://youtu.be/s2aRGT9WIRk?t=3726 |

## Automated Testing Framework

This is the first small step of many to try to allow upgrades to happen
with less issues.

With the Automated Test Framework, you create and run automated tests on
your ServiceNow instance. When you upgrade or modify an instance, run
these tests to confirm that the instance still works as designed.

Initially it could only open a form, set field values, validate values,
and submit the form.

[Release Notes](https://docs.servicenow.com/bundle/istanbul-release-notes/page/release-notes/servicenow-platform/automated-test-framework-rn.html)

## Email REST API

[Release Notes](https://docs.servicenow.com/bundle/istanbul-release-notes/page/release-notes/servicenow-platform/email-service-rn.html)

## Script Debugger

This is HUGE. The Script Debugger allows application developers to debug
server-side JavaScript. The Script Debugger allows each application
developer to:

-   Have a dedicated debug transaction, which only applies to the
    current session.
-   Set and remove breakpoints.
-   Pause the current session at a breakpoint.
-   Step through code line-by-line.
-   Step into and out of function and method calls.
-   View the value of local and global variables.
-   View the value of private variables from function closures.
-   View the call stack.
-   View the transaction the system is processing.
-   Turn off the script debugger to resume running paused scripts.

[Release Notes](https://docs.servicenow.com/bundle/istanbul-release-notes/page/release-notes/application-development/script-debugger-rn.html)

## HR Service Management (Scoped)

Prior to Istanbul the HRSM was a "global" application. After Istanbul it
is now scoped. They are really separate, but going forward the scoped
version has been getting all the attention.

[Release Notes](https://docs.servicenow.com/bundle/istanbul-release-notes/page/release-notes/service-management/human-resources-rn.html)
