---
title: " Steps to Create a Dynamic Filter that Returns Groups Logged in Users Belong to"
date: 2019-08-28T06:36:33.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=8a9fb255db2bf3040be6a345ca96193d"
---
<p style="text-align: left;">Dynamic filter options enhance filtering by allowing users to run existing script includes or JavaScript against a reference field within condition builders and dynamic reference qualifiers.</p>
<p style="text-align: left;">There is a delivered dynamic filter &#39;One of My Group&#39;s which uses the getMyGroups() API.   However, this also returns the parent groups of the groups where the current user (logged in) belongs to.</p>
<p style="text-align: center;"><em>Read <a href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0681349" target="_blank" rel="noopener noreferrer nofollow">User is able to see a list of records from the groups that user is a part of and also the groups which are parent to the group</a> for more information</em></p>
<h2 class="kb-article-view-count">2 Steps to Create a Dynamic Filter that Returns Groups Logged in Users Belong to</h2>
<div class="kb-article-view-count">
<p>The example below  can help if you want to filter based on groups where the user (logged in) belongs. This would query the sys_user_grmember table and returns the list of groups for the User (based on the UserID).</p>
<p style="text-align: center;"><em>Get started by understanding <a href="https://docs.servicenow.com/bundle/madrid-platform-user-interface/page/use/using-lists/task/t_DynamicFilterOptions.html" rel="nofollow">how to create a dynamic filter option</a>.</em></p>
</div>
<div>
<div> </div>
<div>
<h3 class="p1 ng-scope"><strong>Step 1: </strong><strong>Create a custom business rule </strong></h3>
<p class="p1 ng-scope">This custom business rule will query the sys_user_grmember table and return the list of groups where the user belongs to.  Ensure &#39;Client callable&#39; is enabled . You would need to configure the form layout to make the &#39;Client callable&#39; flag/field visible<strong>. </strong></p>
<p class="p1 ng-scope" style="text-align: center;"><em>Get start with your business rule here: <a href="https://docs.servicenow.com/bundle/madrid-application-development/page/script/business-rules/task/t_CreatingABusinessRule.html" rel="nofollow">Create a business rule</a>.</em></p>
<p><strong>Script:</strong></p>
<pre class="language-javascript"><code>function getGroup() {
var groups &#61; [];
var gr &#61; new GlideRecord(&#39;sys_user_grmember&#39;); 
gr.addQuery(&#39;user&#39;,gs.userID()); 
gr.query(); 

while (gr.next()) 
{ 
groups.push(gr.group.toString());
} 
return groups;
} </code></pre>
<p>It should look like this:<img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/468fdb2ddb277744190dfb24399619ad.iix" /></p>
<h3 class="p1"> Step 2. Create a custom dynamic filter</h3>
<ol><li>
<p>Navigate to System Definition &gt; Dynamic Filter Options</p>
</li><li>
<p>Use the information to populate the record:</p>
</li></ol>
<p>             Label &#61; My Group <br />             Script : getGroup() <br />             Field Type&#61; Reference<br />             Referenced Table&#61; Group (sys_user_group)<br />             Order &#61; 200<br />             Reference script: Business Rule: FilterOnGroup <br />             Available for filter : True (enabled) </p>
<h3> </h3>
<h3><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/83106b21db677744190dfb24399619cd.iix" /></h3>
<h3> </h3>
<p>It should look like this:</p>
<h3> <img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/68b97f51dbaf37040be6a345ca9619b7.iix" /></h3>
<h3> </h3>
<h3> </h3>
I tested Creating a Dynamic Filter that Returns Groups Logged in Users Belong to on a Madrid release and based on sample DEMO data.  For further information regarding Dynamic Filters and Business Rules,  please refer to the following documentation:
<ul><li><a href="https://docs.servicenow.com/bundle/madrid-platform-user-interface/page/use/using-lists/task/t_DynamicFilterOptions.html" rel="nofollow">Create a dynamic filter option</a></li><li><a href="https://docs.servicenow.com/bundle/madrid-application-development/page/script/business-rules/task/t_CreatingABusinessRule.html" rel="nofollow">Create a business rule</a></li><li><a href="https://community.servicenow.com/community?id&#61;community_article&amp;sys_id&#61;3382be55db9ebb0014d6fb24399619b5" target="_blank" rel="noopener noreferrer nofollow">Filtering for all groups to which another user belongs ( not the currently logged in user )</a></li></ul>
<h3> </h3>
</div>
</div>