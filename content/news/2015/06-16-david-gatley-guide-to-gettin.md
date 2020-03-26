---
title: "Guide to getting your App Certified  Certification Requirements"
date: 2015-06-16T02:27:51.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=259dea69dbd0dbc01dcaf3231f961969"
---
<p>To list your application on the ServiceNow Store (<a class="jive-link-external-small" title="k-external-small" href="https://store.servicenow.com/" target="_blank" rel="noopener noreferrer nofollow">https://store.servicenow.com</a>) you will be required to go through our application certification process. To help set the stage for what this will mean to you, how to prepare for it, and how long the process will take, we&#39;ve put together this blog post. Should you have any specific certification questions, you can always email the ServiceNow Certifiers &#64; <a class="jive-link-email-small" title="k-email-small" href="mailto:certifiers&#64;servicenow.com" rel="nofollow">certifiers&#64;servicenow.com</a> look for additional resources on <a class="jive-link-external-small" title="k-external-small" href="https://tpp.servicenow.com/" target="_blank" rel="noopener noreferrer nofollow">https://tpp.servicenow.com</a>.</p>
<p> </p>
<h2>What is Certification?</h2>
<p>Put simply, the certification process is in place to ensure that the least amount of risk is introduced into the customer instance as possible. The certification team will inspect your application code, installation, and architecture to ensure our best practices have been followed. It&#39;s all about 2 things really:</p>
<ol><li>Ensuring Platform stability &amp; performance are persisted</li><li>Ensuring Platform security is persisted</li></ol>
<p>While designing your application you should always be thinking of the following two questions: What mitigating factors do you have in place to ensure that the customer instance performs at optimal levels? How did you design your application to ensure no security protocols are compromised?</p>
<p> </p>
<h2>How long does Certification of my application take?</h2>
<p>A typical certification, from design complete and submission for certification to ready for publishing on the store, takes 3-5 weeks.   This is a good ballpark to assume when resourcing your effort. It is very possible to complete certification in a matter of days, likewise it may take longer than 5 weeks. It all depends on the following variables:</p>
<ul><li>Size, scope, and complexity of your application</li><li>How well you documented your architecture in your Design Documentation (a required document for the process)</li><li>How quickly your team can iterate with the certification team implementing any changes the team requires</li><li>Your marketing team&#39;s ability to create compelling descriptions, artwork and any other collateral you wish to use to show off your app</li></ul>
<p> </p>
<h2>Where can I find the list of Certification Requirements?</h2>
<p>Once you join the Technology Partner Program, you will be able to access the entire list of requirements/process/etc. here <a class="jive-link-external-small" title="k-external-small" href="https://tpp.servicenow.com/" target="_blank" rel="noopener noreferrer nofollow">https://tpp.servicenow.com </a></p>
<p>Attached to this blog post is a subset of the technical requirements and overall checks to orient you to the types of checks we perform and some of the best practices related to certification.</p>
<p> </p>
<h2>My app is primarily an integration and does not require code in ServiceNow, what is the minimum I need to get something certified?</h2>
<p>To list an application on the store, the following components are required at minimum:</p>
<ul><li>Application Menu Item</li><li>Contact Support Module</li><li>If an integration that is writing/creating data:
<ul><li>Direct Web Services (ex: endpoint &#61; incident.do) are not supported. Instead, inbound integrations (Create, Write, Update) need to follow the following flow:
<ul><li>Inbound data to a temp staging table (import set table) (ex: endpoint &#61; integration_imp.do)</li><li>Transformation map to transform data from import set table to target table</li></ul>
</li><li>Dedicated User Role for authentication (integration user should use this role)</li></ul>
</li></ul>
<p> </p>
<h2> </h2>