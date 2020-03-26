---
title: "Using Flow Designer to Create a Customized Incident with Event Management"
date: 2019-01-31T20:29:01.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=af1c919edb1f67406c1c02d5ca961908"
---
<p><span style="font-family: arial, helvetica, sans-serif;">In the London release of event management, ServiceNow introduced alert management and using the flow designer </span>subflows<span style="font-family: arial, helvetica, sans-serif;"> to create incidents, knowledge articles, application launch, and remediation.<span class="Apple-converted-space">  </span>The feature is new to our customers and they often ask us to explain or show how to modify, create, or customize the OOB “Create Incident” </span>subflows<span style="font-family: arial, helvetica, sans-serif;">.  This blog will </span><span style="font-family: arial, helvetica, sans-serif;">specifically focus on this topic and will show you how to copy and modify the OOB “Create Incident” </span>subflow<span style="font-family: arial, helvetica, sans-serif;"> and customize the following:</span></p>
<ol><li class="li1"><span style="font-family: arial, helvetica, sans-serif;">Add an assignment group to the incident record base on the CI’s support group</span></li><li class="li1"><span style="font-family: arial, helvetica, sans-serif;">Use if / then flow logic to check if the assignment group is empty and set a default value</span></li><li class="li1"><span style="font-family: arial, helvetica, sans-serif;">Calling the </span>subflow<span style="font-family: arial, helvetica, sans-serif;"> from the alert management rule</span></li></ol>
<h2 class="p1"><span style="font-family: arial, helvetica, sans-serif;"><strong>Copy and Modify “Create Incident” Subflow</strong></span></h2>
<p><span style="font-family: arial, helvetica, sans-serif;">1.     Navigate to Flow Designer-&gt; </span>subflows<br /><span style="font-family: arial, helvetica, sans-serif;">2.     We provide an OOB “Create Incident” Subflow.</span><span class="Apple-converted-space" style="font-family: arial, helvetica, sans-serif;">  </span><span class="s1" style="font-family: arial, helvetica, sans-serif;">It is recommended to make a copy of the OOB subflow template instead of creating a new subflow from scratch.  To copy the subflow, f</span><span style="font-family: arial, helvetica, sans-serif;">ollow these steps:</span></p>
<p style="padding-left: 30px;">a.     Open the “Create Incident” subflow</p>
<p style="padding-left: 30px;">b.     Expand the “more actions” and select copy subflow</p>
<p style="padding-left: 60px;"><img style="max-width: 100%; max-height: 480px;" src="a19f1552db13a7406c1c02d5ca961934.iix" /></p>
<p style="padding-left: 30px;">c.     Give the new subflow a name and set application &#61; “Global”</p>
<p style="padding-left: 30px;">d.     Click “Copy”</p>
<p style="padding-left: 30px;"><img style="max-width: 100%; max-height: 480px;" src="6c02e95edb53a7406c1c02d5ca961931.iix" /></p>
<p class="p1" style="padding-left: 30px;">e.     In the Subflows tab, you will see the flow is created with the Status &#61; “Draft”</p>
<p style="padding-left: 30px;"><img style="max-width: 100%; max-height: 480px;" src="2cf1ad1edb53a7406c1c02d5ca9619af.iix" /></p>
<p>3.     Review and modify the new subflow as follow:</p>
<p style="padding-left: 30px;">a.     Navigate to the subflows tab -&gt; click to open your newly created subflow.  (example: Create Incident with Assignment Group)</p>
<p style="padding-left: 30px;">b.     Scroll down to the “Create Task” step and click to open it.</p>
<p style="padding-left: 30px;"><img style="max-width: 100%; max-height: 480px;" src="a78aa956db1ba7406c1c02d5ca96193e.iix" /></p>
<p style="padding-left: 30px;">c.     The default “create task” for the incident table will already be pre-populated with some field values.<span class="Apple-converted-space">  </span>In this example, I want to set the CI’s support group to the incident record’s “assignment group” field follow these steps.</p>
<p style="padding-left: 60px;">i.     Click the “add field value” and select assignment group from the drop-down</p>
<p style="padding-left: 60px;">ii.    Next, select the data pill picker and pick:<span class="Apple-converted-space">  </span>Subflow input -&gt; alertGR -&gt; Configuration Item -&gt; support group</p>
<p style="padding-left: 90px;"><img style="max-width: 100%; max-height: 480px;" src="283ea59adb9ba7406c1c02d5ca96191f.iix" /></p>
<p style="padding-left: 60px;">iii.   Click Done.  You can add other fields by repeating the above steps.  like &#34;assigned to&#34; and the result should look something like this screenshot.  </p>
<p style="padding-left: 90px;"><img style="max-width: 100%; max-height: 480px;" src="f59fa55adbdba7406c1c02d5ca9619eb.iix" /></p>
<p style="padding-left: 30px;">d.     Next, I add an “if” flow logic to check for an empty assignment group as follow.</p>
<p style="padding-left: 60px;">i.     Set Condition Label &#61; “assignment group is empty”</p>
<p style="padding-left: 60px;">ii.    Set Condition 1 as shown in the screenshot by using the data pill picker</p>
<ul><li>
<ul><li>
<ul><li>You want to select “create task”</li><li>Select &#34;Incident record&#34;</li><li>Select assignment group</li><li>&#34;is&#34; and leave the field blank (blank &#61; Null/Empty)</li><li>Click Done</li></ul>
</li></ul>
</li></ul>
<p style="padding-left: 90px;"> </p>
<p style="padding-left: 90px;"><img style="max-width: 100%; max-height: 480px;" src="e8b2b996db5fa7406c1c02d5ca961950.iix" /></p>
<p> </p>
<h2 style="padding-left: 60px;"><strong>The result should look like this</strong></h2>
<p style="padding-left: 150px;"><strong><img style="max-width: 100%; max-height: 480px;" src="9fd3b116db9fa7406c1c02d5ca9619c8.iix" /></strong></p>
<p style="padding-left: 150px;"> </p>
<p style="padding-left: 60px;">iii.   Next, under the if section, click the “&#43;” icon</p>
<p style="padding-left: 90px;"> </p>
<p style="padding-left: 150px;"><img style="max-width: 100%; max-height: 480px;" src="fa86b9d6db13e7406c1c02d5ca9619bd.iix" /></p>
<p style="padding-left: 150px;"> </p>
<p style="padding-left: 60px;">iv.   Select Action -&gt; ServiceNow Core -&gt; Update Record</p>
<p style="padding-left: 150px;"><img style="max-width: 100%; max-height: 480px;" src="38d6f99adb13e7406c1c02d5ca96198f.iix" /></p>
<p style="padding-left: 150px;"> </p>
<p style="padding-left: 60px;">v.    Use the drop-down or Data Pill Picker to fill in the form as below:</p>
<ul><li>
<ul><li>
<ul><li>Action &#61; Update Record</li><li>Record &#61; Incident Record</li><li>Table (incident table will automatically fill in)</li><li>Set Fields to Assignment Group &#61; Technical Support</li></ul>
</li></ul>
</li></ul>
<p style="padding-left: 120px;"><img style="max-width: 100%; max-height: 480px;" src="4377fd12db53e7406c1c02d5ca96190a.iix" />  </p>
<p style="padding-left: 30px;">e.     Moving “if” flow logic to the step right after “Create Task”.<span class="Apple-converted-space">  </span></p>
<p style="padding-left: 90px;">When you add an action or flow logic to an existing subflow, it adds the step at the end of the subflow so you have to move it.<span class="Apple-converted-space">  </span>To do this, hold your left mouse button down and drag the &#34;if flow logic&#34; in between the “Create Task” and “Update [Alert] Record”, then release your left mouse button.</p>
<p style="padding-left: 90px;"><img style="max-width: 100%; max-height: 480px;" src="f7044296db9be7406c1c02d5ca9619ea.iix" /></p>
<h2 style="padding-left: 90px;"> <strong>The result should look like this</strong></h2>
<p style="padding-left: 90px;"> <img style="max-width: 100%; max-height: 480px;" src="60448ad6db9be7406c1c02d5ca961970.iix" /></p>
<p style="padding-left: 30px;">f.     Finally, Save, test, and publish the subflow</p>
<p style="padding-left: 120px;"><img style="max-width: 100%; max-height: 480px;" src="96944a9adb9be7406c1c02d5ca9619f1.iix" /></p>
<p style="padding-left: 120px;"> </p>
<h2 style="padding-left: 30px;"><strong>Calling the subflow from the Alert Management</strong></h2>
<ol style="padding-left: 90px;"><li>Navigate to “Event Management” -&gt; “Rules” -&gt; “Alert Management”</li><li>Click on the “New” button to create a new Alert Management Rule</li><li>Fill in the name, order number, and check the active box</li><li>Click on the “Alert Filter” and set the following conditions:</li></ol>
<p style="padding-left: 90px;">a.  The rule is activated when: Alert matches filter<br />b.  Add an alert filter you like.<span class="Apple-converted-space">  </span>For example, Severity is one of: Warning, Minor, Major, Critical or something like screenshot below</p>
<p style="padding-left: 90px;"> </p>
<p style="padding-left: 90px;"><img style="max-width: 100%; max-height: 480px;" src="84f5c6d6dbdbe7406c1c02d5ca961908.iix" /></p>
<p style="padding-left: 90px;">5. Next – click on the “Actions” tab and double click in the “Subflow” field. (Make sure you are in the “Remediation Subflows” section on the form)<br />6. Enter the following information:</p>
<p style="padding-left: 90px;">Subflow: Create Incident with assignment group (or whatever name you use)</p>
<p style="padding-left: 90px;"><img style="max-width: 100%; max-height: 480px;" src="b4760a9adbdbe7406c1c02d5ca961981.iix" /></p>
<p style="padding-left: 90px;">7. Click “Submit”</p>
<h2 style="padding-left: 30px;"><strong>Check Your Result</strong></h2>
<p style="padding-left: 30px;">When an alert matches the alert management rule you just created you can expect the following result:</p>
<ul class="ul1" style="padding-left: 90px;"><li>If the alert’s CI has a support group, the assignment group field in the incident record will show the value.  In my example, the assignment group value is “application development”</li><li>If the alert CI’s support group value is empty/null, the assignment group field is set to a default value &#61; “Technical Support” that you configured in your if flow logic.</li></ul>
<p style="padding-left: 90px;"><img style="max-width: 100%; max-height: 480px;" src="88274212db1fe7406c1c02d5ca9619cb.iix" /></p>
<p style="padding-left: 90px;"> </p>
<h2 style="padding-left: 30px;"><strong>Conclusion</strong></h2>
<p style="padding-left: 30px;">Being able to trigger flows to gather additional information and enhance the operations – such as automatically assign the incident to a specific team – can drastically reduce the MTTR (Mean Time To Repair).<span class="Apple-converted-space">  </span>In this case, we saw how we could use related information like “support group” in the platform to populate the assignment group attribute.<span class="Apple-converted-space">  </span>I hope this blog is helpful to help and your customers.</p>