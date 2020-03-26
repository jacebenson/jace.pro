---
title: "Services and Offerings  Whats the Difference"
date: 2020-03-24T19:41:03.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=1f6782f41bbf4010ada243f6fe4bcb9c"
---
<p>Hi, I’m David Thigpen and I’m the Product Manager for the IT Service Portfolio Management application and Service Owner Workspace. One of the most important components of those two products are “offerings.”  Frequently I’m asked:</p>
<ul><li>“What’s the difference between an IT service and a service offering?” and also</li><li>“How do I know when I should to define a new offering?”</li></ul>
<p>I’d like to answer those from the perspective of our products so you can better leverage your ServiceNow investment.</p>
<p><u>First, a little background</u></p>
<p>Services have probably been part of the CMDB structure from day 1 of ServiceNow. They end up being referenced in many ways and by many things. One data element of a service is the “Service Classification” field.  Historically this field included some odd values like “infrastructure,” “billable” and others. Notably, one of those odd values was “Service Offering.” My understanding is that originally there was no Offering table, so that “Service Offering” value was needed. (Note: We cleaned up that classification list in a recent release.)</p>
<p><u>Services vs. Offerings</u></p>
<p>But eventually a Service Offering table <em>was</em>added to the CMDB, inheriting from Service.  This layering gave a more useful structure.  A service is defined with respect to how it enables and is used by the business, that is, <strong>what outcomes, capabilities, or process does it support</strong>?  Then, child offerings can be defined that are particular <strong>variants</strong>of that service. You may see offerings like Gold, Silver and Bronze in the demo data as examples of service variants.  We think of services really as “containers” of offerings and we recommend   every service have at least one offering as good practice.</p>
<p><u>Offerings vs Offerings</u></p>
<p>But how do we know when to define and create a new offering instead of a new service record?  If what I’m dealing with has basically the same “enable and use” characteristics of an existing service, then it likely is just another variant of that service.  There are no rigid rules regarding when to define new offerings so realize that defining variation is where things become art not science.  Back to the Gold, Silver, Bronze variants mentioned above, what’s the difference between Gold and Bronze? </p>
<p>In Service Owner Workspace, the offering is where performance and spend are calculated and recorded.  It certainly makes sense that a Gold offering would be expected to have premium characteristics like performance and support over Bronze, with a corresponding higher cost.</p>
<p>Here is a (not exhaustive) list of things that may justify creating a new offering variant of a service within ServiceNow, with some examples: </p>
<table style="padding-left: 30px;"><tbody><tr style="height: 51px;"><td style="height: 51px;" width="193">
<p>Different geographies, Audience</p>
</td><td style="height: 51px;" width="348">
<p>AMS vs. EMEA Email offerings</p>
</td></tr><tr style="height: 60px;"><td style="height: 60px;" width="193">
<p>Support commitments</p>
</td><td style="height: 60px;" width="348">
<p>Premium vs. Standard Desktop Support Executive vs. Others Desktop Support</p>
</td></tr><tr style="height: 60px;"><td style="height: 60px;" width="193">
<p>Response and Resolution SLAs</p>
</td><td style="height: 60px;" width="348">
<p>Rapid response vs. Standard response commitments</p>
</td></tr><tr style="height: 44px;"><td style="height: 44px;" width="193">
<p>Availability differences</p>
</td><td style="height: 44px;" width="348">
<p>High availability vs. Standard</p>
</td></tr><tr style="height: 74px;"><td style="height: 74px;" width="193">
<p>Underlying infrastructure</p>
</td><td style="height: 74px;" width="348">
<p>One offering supported by MSSQL</p>
<p>Another offering supported by Oracle</p>
</td></tr><tr style="height: 44px;"><td style="height: 44px;" width="193">
<p>Cloud vs. Local</p>
</td><td style="height: 44px;" width="348">
<p>Gmail vs. internal managed Exchange infrastructure</p>
</td></tr><tr style="height: 44px;"><td style="height: 44px;" width="193">
<p>Support model</p>
</td><td style="height: 44px;" width="348">
<p>Onsite support vs. Remote</p>
</td></tr><tr style="height: 44px;"><td style="height: 44px;" width="193">
<p>Vendor</p>
</td><td style="height: 44px;" width="348">
<p>Zoom collaboration vs. Skype</p>
</td></tr><tr style="height: 60px;"><td style="height: 60px;" width="193">
<p>Operations characteristics (speed, capacity, etc.)</p>
</td><td style="height: 60px;" width="348">
<p>Tier 1 vs. Tier 2 file storage</p>
</td></tr></tbody></table>
<p>Notice how some things can overlap.  For example, different offerings based on support model may also reflect different support commitments.  And at the end of the day, the cost likely to be different for each offering of a service.</p>
<p><u>Final thoughts</u></p>
<p>The good thing is that if you feel you have incorrectly defined a service as an offering (or vice versa) you can usually move the data pretty easily.  I hope this provides clarity on the use of services and offerings in ServiceNow.</p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"> </p>