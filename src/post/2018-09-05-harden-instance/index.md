---
title: "ServiceNow: How to harden your instance - my notes"
subtitle: ""
summary: ""
date: 2018-09-05T20:25:56-05:00
---

I had to prepare an instance for some penetration
testing. Turns out this is pretty easy.

So to start with you need to know what ServiceNow requires of you.
Here's that [KB].

At the time of writing you need these pre-requirements;

-   Instance must be on most recent patch of supported family.
-   Instance must be unpinned.
-   Instance cannot be production.
-   Instance must have High Security Plugin enabled.
-   [Instance must be hardened].
-   You can test once per calendar year, extra testing incurs
    cost.

That hardening guide on the ~~HI site~~ [Docs] is thorough. We needed HI to "Check Whitelist Package Calls" and
"Check Whitelist Member Calls". This will be an issue if you've been granted access to use something the like [ZipFile java class]
to zip some files from the server.

There's a great [share] <sup>([my copy])</sup>
that gets you most the way there. I'd suggest starting there. You may
need to configure some properties like what file extensions you'll allow but
its easier to do this then to manually create each property. Also it
checks for default accounts and passwords.

[share]: https://developer.servicenow.com/app.do#!/share/contents/7852853_security_best_practice_audit?v=3.02&t=PRODUCT_DETAILS
[my copy]: https://blog.jace.pro/uploads/SecurityBestPractiesAudit-V3_1.xml
[ZipFile java class]: https://stackoverflow.com/questions/48190244/read-zip-file-contents-using-zipfile-java-class-inside-script/48196453#48196453
[Docs]: https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/security/reference/instance-security-hardening-settings.html
[Instance must be hardened]: https://hi.service-now.com/kb_view.do?sysparm_article=KB0550654
[KB]: https://hi.service-now.com/kb_view.do?sysparm_article=KB0538598