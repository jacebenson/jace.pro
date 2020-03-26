---
title: "Its Just a Reporting Field"
date: 2018-06-12T00:15:17.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=2f99990fdbee5b00fece0b55ca9619fb"
---
<p>When configuring a new report Performance Analytics, we sometimes get slowed down because the data isn&#39;t structured the way we need for reporting.  There is a disconnect between the way we operationally use the data and the way we want to show it for reporting.   For example, operationally we rollup our group hierarchy on HR&#39;s hierarchy but in other cases we need to see it based on the functional area which is slightly different. </p>
<p>For my entire career in analytics, I have been taught that we can&#39;t change the operational system the data comes from, we need to reactively deal with it and transform the data we get into a format we need for reporting.  This is why we have teams of people handling Extract-Transform-Load (ETL) to clean and format the operational data to a usable format for our reports.  ETL is how we clean the operational data and transform it to provide the data and format we need for reporting.</p>
<p>ServiceNow embraces a different paradigm: Performance Analytics and Reporting is part of the platform and not a separate system that we need to protect and insulate ourselves from.  We need to keep the data clean and trustworthy in the platform and ensure we have all the fields needed for reporting as well.</p>
<p>Some application developers and system admins disagree with the concept of adding &#34;Reporting Fields&#34; to operational tables.  If you hear this objection, it is important to push back. </p>
<p>Analytics is much like application security.  You have to build it into your application, you can&#39;t just bolt it on later on.  Just like application security, the sooner you start thinking about analytics in any implementation the better off you will be and the less rework you will have in the future.</p>
<p><strong>If your management team requires data to be structured in a specific way on reports, why wouldn’t you expose that structure within the operational system?</strong></p>
<p>Adding a &#34;Reporting Field&#34; will allow us to use that not only in reporting but also allow us to easily use that field in:</p>
<ul><li>Performance Analytics</li><li>Reporting</li><li>Interactive Filters</li><li>Business Rules</li><li>SLA Conditions</li><li>UI Policies (to customize the record form based on this)</li><li>Workflows</li><li>Machine Learning</li><li>Everything else the NOW Platform can do</li></ul>
<p>Note: Transforming the data via a PA Script doesn&#39;t address the root issue.  In most cases, this is just ETL by a different name.</p>
<h3><strong>Use Case</strong></h3>
<p>Let&#39;s walk through a simple example use case and discuss how we can take a &#34;Reporting Field&#34; and add it to the operational system.</p>
<h4><strong>Background</strong></h4>
<p>We have 100 assignment groups handling incidents, and each assignment group belongs to a parent group - either Tier 1, Tier 2 or Tier 3.  The CIO wants a summary of incidents broken down by &#34;Front Office&#34; and &#34;Back Office” categories, but neither category is directly related to the assignment group or parent group.</p>
<h4><strong>The Old Solution</strong></h4>
<p>We create and maintain a list outside of ServiceNow that categorizes each assignment group as Front Office or Back Office, and we use Excel or BI tools to create a pivot table. Inevitably, the list isn’t available to everyone who needs it, and quickly becomes outdated.   Often, I see customers prefix their assignment groups with something like &#34;FRONT-&#34; or &#34;BACK-&#34; to help a human know which group is what.</p>
<h4><strong>The Right Solution</strong></h4>
<p>The best way to handle this request is to add a field (most likely a choice list) to the Groups table (sys_user_group) that identifies which assignment groups are &#34;Front Office&#34; and which are &#34;Back Office&#34;.  We can then easily</p>
<ul><li>Breakdown by Front and Back office in Performance Analytics</li><li>Filter by Front and Back office in an Interactive Filters</li><li>Group by Front and Back office in a Report</li><li>Use Front and Back office in a Business Rule</li><li>Use Front and Back office information when training Machine Learning</li></ul>
<h4><strong>Alternative Solutions</strong></h4>
<p>Since we are dealing with a hierarchical data structure with sys_user_group, we could replace our tier hierarchy with a group layer of Front and Back Office.  This would most likely be effective (and maybe a good choice depending on other needs) but in our case, the hierarchy was already being used for a different type of reporting.</p>
<p>You could also set Front Office and Back Office as a group type.  However, &#34;List&#34; fields are difficult to report on so I chose not to use this approach.</p>
<h3><strong>Other Use Cases</strong></h3>
<p>There are many other places where we can benefit from materializing the &#34;Reporting Field&#34; as a field on the object.  Using a business rule (BR) that runs after changes can execute the calculation only when needed, saving CPU cycles Performance Analytics or reporting would have used.</p>
<p>Here are a few other examples:</p>
<ul><li><strong>Problem Tasks Count Total/Active/Closed</strong> - A counter of the number of problem tasks that exist and are active and inactive (based on a BR that updated the PRB when the task state is updated)</li><li><strong>Flagging &#34;High Visibility&#34; Incidents</strong> - If my organization has a definition of &#34;High Visibility&#34; Incidents as</li><li>
<ul><li>All P1s</li><li>P2s on Critical Services or Submitted by VIPs</li></ul>
</li></ul>
<p>Instead of adding these criteria into every report, create a BR that updates a &#34;High Visibility&#34; flag when the Priority or Business Service changes (note, if Criticality is something that can change for Business Service, you may have to add a BR there as well to address this)</p>
<ul><li><strong>Group Reassignment Count</strong> - There is an OOTB counter that increments every time an incident is reassigned to a different person but not for group reassignments.  If this is important, add a BR that tracks it</li><li><strong>Highest Priority</strong> - I want to track the incidents that were ever set as P1s.  Instead of querying sys_audit, add a field for &#34;Highest Priority&#34; and update it with a BR that updates if the new priority is higher than the current &#34;Highest Priority&#34;</li></ul>
<h3><strong>Conclusion</strong></h3>
<p>Including traditional &#34;Reporting Fields&#34; in your operational process will allow you to easily report on the data as well as do so much more with it.  Exposing these properties in your operational tables allows everyone to see the information and make better decisions.</p>
<p>Follow Up</p>
<p>If you are looking for some hands-on examples of how to put this in practice, check out this blog, &#34;<a href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;37c045cadbcf409023f4a345ca961921" rel="nofollow">Conquer Challenging Reports by Leveraging the Now Platform - Reporting on the Latest Status</a>&#34; </p>