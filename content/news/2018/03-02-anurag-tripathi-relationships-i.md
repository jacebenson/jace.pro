---
title: "Relationships in ServiceNow Explained"
date: 2018-03-01T23:58:23.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=ead5f346dbac5f402d1efb651f961938"
---
<p>This blog covers the following:</p>
<ul><li>Relating 2 or more tables to create a parent child relationship (One To Many)</li><li>Creating M2M Relationships (Many to Many)</li><li>Relationship through Query</li></ul>
<p> </p>
<p>Here are details on each:</p>
<h3> 1)<strong>One to Many</strong></h3>
<p style="padding-left: 30px;">This is the most common scenario that we see in the day to day work where we need to relate 2 tables to create a parent child relationship</p>
<p style="padding-left: 30px;">To do this you just need to add a reference field on the child table, which is pointing to the parent.</p>
<p style="padding-left: 30px;">When you have configured this you can see the related list on the parent when you go on configure -&gt; related lists and it will be like:</p>
<p style="padding-left: 30px;">Change Task -&gt; Change Request</p>
<p style="padding-left: 30px;"><u>Common examples</u>: Change Request field on Change Task, Request field on RITM</p>
<p> </p>
<h3>2)<strong>Many to Many</strong></h3>
<p style="padding-left: 30px;">I find it most easy to explain this via an example: One User can be part of multiple groups and one Group can have multiple Users.</p>
<p style="padding-left: 30px;">To create this you have to make an entry on the sys_m2m table. This creates a new table which wil have a reference field to both tables, hence one record can be related to multiple records on the other table and vice versa. The new table created will have m2m in its name.</p>
<p style="padding-left: 30px;">On the form of sys_m2m you have to provide the ‘From Table’ and the ‘To Table’ and the Form will populate the other fields itself.</p>
<p style="padding-left: 30px;">In this case on both the firm you can find this related list when you navigate to configure-&gt; related list</p>
<p style="padding-left: 30px;"><u>Common examples</u>: sys_user_has_license</p>
<p> </p>
<h3>3)<strong>Relationship Through Query</strong></h3>
<p style="padding-left: 30px;">In my experience this is the most complicated of the three and also rarely used, but very powerful.</p>
<p style="padding-left: 30px;">A typical scenario would be when you have to:</p>
<ul style="padding-left: 30px;"><li><ul><li>Connect 2 tables in a dynamic way.</li><li>Connect 2 tables that are not related by any field.</li><li>Both the above.</li></ul>
</li></ul>
<p style="padding-left: 30px;">To create this relationship you must navigate to System Definition: Relationships</p>
<p style="padding-left: 30px;">Again here you provide the details like Query From (Data will be fetched from here) and Applies to(Which form this relationship/related list will be added on)</p>
<p style="padding-left: 30px;">If there is a complicated condition to choose the tables then you can click on ‘Advanced’ and apply script there too.</p>
<p style="padding-left: 30px;"><u>Common examples</u>: Attachments</p>