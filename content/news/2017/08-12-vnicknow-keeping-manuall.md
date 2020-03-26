---
title: "Keeping Manually Created Business Services Up to Date"
date: 2017-08-11T23:03:15.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=006c6aa1dbd0dbc01dcaf3231f9619ea"
---
<p>WARNING: The APIs used in this article may have a performance impact on your instance and should not be used at a high frequency rate.</p>
<p> </p>
<p>Have you ever created a <a title="ocs.servicenow.com/bundle/jakarta-it-operations-management/page/product/event-management/task/t_EMConfigureManualBusinessService.html" href="https://docs.servicenow.com/bundle/jakarta-it-operations-management/page/product/event-management/task/t_EMConfigureManualBusinessService.html" rel="nofollow">manual service</a> through the event management module to get service tiles to appear on the Event Management dashboard (i.e. you&#39;re not using our <a title="ocs.servicenow.com/bundle/jakarta-it-operations-management/page/product/service-mapping/concept/service-mapping-get-started.html" href="https://docs.servicenow.com/bundle/jakarta-it-operations-management/page/product/service-mapping/concept/service-mapping-get-started.html" rel="nofollow">Service Mapping</a> capabilities <span style="text-decoration-line: underline;"><strong>yet</strong></span>)?</p>
<p> </p>
<p>If so, you&#39;ve probably noticed that any changes in related CI&#39;s (new relationships) do not appear on the map automatically. The changes will appear in the Related Items section of the service definition, but only appear on the map when you once again click the &#34;Populate&#34; button that you had to originally click when defining the manual service and creating the original map.</p>
<p> </p>
<h1>Example of a manual business service update</h1>
<p>Let&#39;s look at an example. In the manual service below, I chose the SAP WEB01 configuration item (CI) as the pseudo entry point of this service and then all related items for that CI were brought in to the Related Items section of the form.   Here you see 2 app servers (SAP AppSRV01, and SAP AppSRV02) related to the primary CI (SAP WEB01).</p>
<p> </p>
<p style="text-align: center;"><img class="image-16 jive-image" style="width: 620px; height: 396px;" src="57575c0edb189fc03eb27a9e0f9619cd.iix" alt="related items.jpg" /></p>
<p style="text-align: center;" align="center">Manual Service Related CI&#39;s</p>
<p> </p>
<p>The map also reflects this relationship once you click the &#34;Populate&#34; button to populate the manual service form with all the CI&#39;s shown in the related items section.</p>
<p style="text-align: center;"><img class="image-15 jive-image" style="width: 620px; height: 754px;" src="1b6a7c06dbdcdfc03eb27a9e0f961971.iix" alt="populate CI.jpg" /></p>
<p style="text-align: center;">Manual Service Map</p>
<p> </p>
<p>Now let&#39;s add a CI that mirrors the definition of the two app servers, and so that it has a child relationship to the SAP WEB01 CI.   Once that&#39;s done, the Related Items on the manual service form will be automatically updated.   However, the list of Configuration Items at the bottom of the form does not automatically populate.   It&#39;s waiting for you to click the populate button.</p>
<p style="text-align: center;"><img class="image-14 jive-image" style="width: 620px; height: 331px;" src="dbae5906db10df048c8ef4621f9619fd.iix" alt="configuration item.jpg" /></p>
<p style="text-align: center;">Updated Related CI&#39;s List for Manual Service</p>
<p> </p>
<p>At any scale this is just not desirable and, like me, you probably would like for these maps to have any changes in CI relationships automatically reflected on the map without having to open the manual service form, again, and click the Populate button, again.</p>
<p> </p>
<h2>Solution: Automatically map changes in CI Relationships</h2>
<p>Let&#39;s see how this could be done. First, you can search for the &#34;Populate&#34; UI Action in <strong>System UI &gt; UI Actions</strong>.   When you open the Populate UI Action you see the following code.</p>
<p> </p>
<p style="text-align: center;"><img class="image-12 jive-image" style="width: 620px; height: 122px;" src="03c65082dbd817049c9ffb651f961950.iix" alt="populate ui action.jpg" /></p>
<p style="text-align: center;" align="center">UI Action for Populate Button</p>
<p> </p>
<p>Well this doesn&#39;t appear to give us what we need to write a script to automate the process.   However, it does give us another direction to look in that this code is creating the pop-up window asking you how many levels you want to populate on the map.   Maybe that pop-up window will have what we need.   Let&#39;s take a look at the UI Page for &#34;manual_service_choose_levels_to_populate&#34; (<strong>System UI &gt; UI Pages</strong>).</p>
<p> </p>
<p>In the Processing Script section of the form for this UI Page we see the following code.</p>
<p style="text-align: center;"><img class="image-13 jive-image" style="width: 620px; height: 173px;" src="357c7331db501344e9737a9e0f961958.iix" alt="Processing script.jpg" /></p>
<p> </p>
<p style="text-align: center;">Script Controlling the Update of Manual Service Map</p>
<p> </p>
<p>Jackpot!</p>
<p> </p>
<p>We can reuse most of this code to create a scheduled job to execute a script for our manual service and have it run on the schedule of our desire.   Here is the code I put into a scheduled job, but the logging options and notations are totally up to you.   You will need to obtain the sys_id of the manual business service, and if you&#39;re not sure how, one easy way is to just open the form for the manual service and right-click the header and select &#34;Show XML&#34;.   From there you can search for sys_id and copy it into the script.</p>
<p> </p>
<p style="text-align: center;"><img class="image-9 jive-image" style="width: 620px; height: 524px;" src="1f1d6bf9db18dfc0b322f4621f961906.iix" alt="manual services.jpg" /></p>
<p style="text-align: center;" align="center">Obtain sys_id from &#34;Show XML&#34; menu option</p>
<p> </p>
<p>In my implementation of the script on a <a title="ocs.servicenow.com/bundle/jakarta-servicenow-platform/page/administer/time/task/t_CreateAScheduledJob.html" href="https://docs.servicenow.com/bundle/jakarta-servicenow-platform/page/administer/time/task/t_CreateAScheduledJob.html" rel="nofollow">scheduled job</a>, which can be done by performing:</p>
<ol style="list-style-type: decimal;"><li><strong>System Definition &gt; Scheduled Jobs</strong></li><li>Select <strong>New</strong></li><li>Select <strong>Automatically run a script of your choosing</strong></li></ol>
<p> </p>
<p>I am specifying to import up to 6 levels onto the map.   This can be a range from 1 to 8 so choose based on your own need.   It&#39;s all about map clutter when viewing the map, so assess the visual impact of more levels versus less.</p>
<p> </p>
<p style="text-align: center;"><img class="image-10 jive-image" style="width: 620px; height: 269px;" src="cfd1190edb5897049c9ffb651f9619bd.iix" alt="scheduled job.jpg" /></p>
<p style="text-align: center;" align="center">Scheduled Job Form to Execute a Script</p>
<p> </p>
<p>When the scripts execute at 10 minutes after midnight, my map will be updated with any changes from the previous 24 hours.</p>
<p style="text-align: center;"><img class="image-11 jive-image" style="width: 620px; height: 479px;" src="3f30f0c2db1c57049c9ffb651f961937.iix" alt="SAP web.jpg" /></p>
<p style="text-align: center;">Updated Manual Service Map based on Scheduled Job</p>
<p> </p>
<p>Here&#39;s the code in an easier cut and paste format:</p>
<p> </p>
<p><span style="font-family: &#39;courier new&#39;, courier;">// This script will effectively execute the &#34;Populate&#34; UI action for </span></p>
<p><span style="font-family: &#39;courier new&#39;, courier;">// a manual service in the event management module. This will update</span></p>
<p><span style="font-family: &#39;courier new&#39;, courier;">// the manual service map with any new CI&#39;s related to components </span></p>
<p><span style="font-family: &#39;courier new&#39;, courier;">// already defined as part of the service</span></p>
<p><span style="font-family: &#39;courier new&#39;, courier;">gs.log(&#34;Populating manual service XYZ&#34;, &#34;Custom: repopulate manual svc&#34;);</span></p>
<p><span style="font-family: &#39;courier new&#39;, courier;">var im &#61; new SNC.ImpactManager();</span></p>
<p><span style="font-family: &#39;courier new&#39;, courier;">im.populateCIsToManualService(&#39;[INSERT YOUR SVC SYS_ID HERE]&#39;, 6); </span></p>
<p><span style="font-family: &#39;courier new&#39;, courier;">gs.log(6 &#43; &#34; layers of related items were imported into the XYZ business service.&#34;, &#34;Custom: repopulate manual svc&#34;);</span></p>
<p> </p>
<p>In conclusion, we are able to keep manually created business service maps up to date using a scheduled job versus having to manually click buttons within the UI.   This helps avoid unnecessary delays in troubleshooting time by ensuring all related CI&#39;s are reflected as part of the business service and have events processed against them be part of the overall <a title="ocs.servicenow.com/bundle/jakarta-it-operations-management/page/product/event-management/task/t_EMViewDashboard.html" href="https://docs.servicenow.com/bundle/jakarta-it-operations-management/page/product/event-management/task/t_EMViewDashboard.html" rel="nofollow">event management dashboard</a>.   As a point of clarification, any CI that is deleted or has its relationship removed from related CI&#39;s in the defined service will automatically be reflected in the manual service map and does not require this process to run to make the update.</p>