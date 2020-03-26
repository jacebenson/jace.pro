---
title: "How to Create a Historical Report Based on Assignment Group Changes on the Incident Table"
date: 2019-03-26T10:30:12.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=d5a6e5a3db14334854250b55ca96190a"
---
<p class="p1">The following may help if you would require a report that tracks assignment group changes via the incident table. Having a historical view of <a href="https://docs.servicenow.com/bundle/london-it-service-management/page/product/incident-management/task/t_DefinAnAssignRuleIncidents.html" target="_blank" rel="noopener noreferrer nofollow">Assignment Group</a> changes can help a team or organization see where their incident categories have been assigned. It can also help tell a story of teams that regularly have to reroute work that takes up valuable time in their day. </p>
<p class="p1">Within ServiceNow&#39;s reporting feature you can leverage the Assignment Group metric to get started.</p>
<h1 class="p1"><span style="font-size: 18pt;"><strong>Creating a report based on Assignment Group Changes via the Incident Table</strong></span></h1>
<p class="p1">One way of doing this is to use the out of the box metric definition (‘Assignment Group’) and use this as a filter in the report (using the ‘incident_metric’ ).</p>
<h2 class="p1"><span style="font-size: 14pt;"><strong>Step 1: Create a report with the following details:</strong></span></h2>
<p class="p2"><strong>Table name:</strong> incident_metric <br /> <strong>Type</strong>: List <br /> <strong>Configure</strong>: Choose the required columns (ID, Value, Assignment Group, Start,End). <br /> <strong>Group by</strong>: ID <br /> <strong>Add the filter condition</strong>: Definition--is--Assignment Group <br /> <strong>Save/Run the report</strong></p>
<p class="p1"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/96766da3db14334854250b55ca961989.iix" /></p>
<p class="p1"> </p>
<p class="p1">Although, this report tracks the assignment group changes, it is not that user friendly as one needs to refer to the Start and End values in order to determine the group re-assignments .</p>
<p class="p1">So, we can further enhance this by adding some customizations:</p>
<h3 class="p1"> </h3>
<h3 class="p1"><span style="font-size: 14pt;"><strong>Step 2: Customize your report</strong></span></h3>
<p>You can make your report more user friendly with the following changes:</p>
<ul><li>Create a custom field </li><li>Create a Before business rule</li><li>Create a new metric definition</li></ul>
<p class="p2">1. Create a custom field via the incident table to capture the previous assignment group value whenever incident is reassigned (to another group).</p>
<p class="p1"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/d9cfa608dbe43f0cfece0b55ca961912.iix" /></p>
<p class="p1"> </p>
<p class="p2">2. Create a<span class="Apple-converted-space"> </span>Before Business Rule via the incident table in order to assign the previous group </p>
<pre class="language-markup"><code>(function executeRule(current, previous /*null when async*/) {

// Add your code here
current.u_previous_assignment_group &#61; previous.assignment_group.getDisplayValue();

})(current, previous);</code></pre>
<p class="p1"> </p>
<p class="p1">3. <span class="Apple-converted-space">  </span>Create a new metric definition.</p>
<p class="p2">Via the metric definition, used the script below.<span class="Apple-converted-space">  </span>This  inserts a value into the incident_metric and assigns the current assignment group to the ‘value’ field if it’s the first assignment of a group ,<span class="Apple-converted-space">  afterwards</span> concatenates the value of previous assignment group and current assignment group for succeeding changes .</p>
<pre class="language-markup"><code>createMetric();

function createMetric() {

  var mi &#61; new MetricInstance(definition, current);

  var gr &#61; mi.getNewRecord();

  if (current.u_previous_assignment_group&#61;&#61;&#34;&#34;)  {

      gr.start &#61; current.sys_updated_on;  //calculate start of assignment based on updated value

      gr.value &#61; current.assignment_group.getDisplayValue(); //assign the current assignment group , first group assignment

  gr.calculation_complete &#61; true;

  gr.insert();

}

else {

  gr.start &#61; current.sys_updated_on; //calculate start of assignment based on updated value

//assign previous assignment group by concatening with the current assignment group , and use the value field

  gr.value &#61; current.u_previous_assignment_group &#43; &#39; -&gt; &#39; &#43; current.assignment_group.getDisplayValue();

  gr.calculation_complete &#61; true;

  gr.insert();

} //if

}</code></pre>
<p class="p2">---------------</p>
<p class="p1"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/4996eda3db14334854250b55ca961936.iix" /></p>
<p class="p1"> </p>
<p class="p1">4.   Open any existing Incident record and change the Assignment Group.</p>
<p class="p1">5.  Create a report to use the metric that was created in Step 3. i.e.<span class="Apple-converted-space">  </span>Filter should be ‘Definition is<span class="Apple-converted-space">  </span>Assignment Group Changes’</p>
<p class="p1"> </p>
<p class="p1"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/bf9621e3db14334854250b55ca961947.iix" /></p>
<p class="p1"> </p>
<p class="p1">There you go, the report provides a nice layout of the Assignment Group changes.<span class="Apple-converted-space">  </span>In this example, note that the Incident was first assigned to the ‘ACME Support’ team, and then was reassigned to ‘Field Services’.</p>
<p class="p1">Another way of doing this one is to create a custom table and use a business rule to insert records (into the custom table) whenever there is an Assignment Group reassignment.   You can then create a report based out of the custom table.</p>
<p class="p1"> </p>
<p class="p1"><strong>NOTE</strong> :  This was tested on a London release and based on sample DEMO data.  For further information regarding Reporting and Metrics ,  please refer to the following documentation:</p>
<ul><li>
<p><a href="https://docs.servicenow.com/bundle/london-performance-analytics-and-reporting/page/use/reporting/reference/reporting-landing-page.html" target="_blank" rel="noopener noreferrer nofollow">Reporting Landing Page</a></p>
</li><li>
<p><a href="https://docs.servicenow.com/bundle/london-platform-administration/page/use/reporting/concept/c_MetricDefinitionSupport.html%20           " target="_blank" rel="noopener noreferrer nofollow">Metrics Definitions </a></p>
</li><li>
<p class="title-sm"><a href="https://docs.servicenow.com/bundle/madrid-platform-administration/page/script/server-scripting/task/t_ExJSConstrainAssignmentGroupField.html" target="_blank" rel="noopener noreferrer nofollow">Constrain the assignment group field</a></p>
</li><li>
<p class="title-sm"><a href="https://docs.servicenow.com/bundle/madrid-platform-administration/page/administer/users-and-groups/concept/c_ConfigGroupTypesForAssignGroups.html" target="_blank" rel="noopener noreferrer nofollow">Configure group types for assignment groups</a></p>
</li></ul>
<p class="p1"> </p>