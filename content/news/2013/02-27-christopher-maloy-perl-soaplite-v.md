---
title: "Perl SOAPLite version  has issues handling larger soap responses"
date: 2013-02-26T21:42:50.000Z
authors: ["Christopher.Maloy"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=77ec22a5dbd0dbc01dcaf3231f96191e"
---
<p>I recently was helping out a good friend. He was doing a standard Perl soap request (as shown on our Wiki) using Soap Lite version .715 and getting an error like this: <b>Incorrect parameter at /Library/.../SOAP/Lite.pm line 1993.</b><br /><br />This is a bug in that version of SOAPLite:<br />https://rt.cpan.org/Public/Bug/Display.html?id=78692<br /><br />Until that is fixed, use the previous versions .714 of SOAP Lite.</p>