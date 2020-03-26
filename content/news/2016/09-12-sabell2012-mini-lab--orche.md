---
title: "MiniLab Orchestration  Bringing Back the Run PowerShell Activity HELSINKI"
date: 2016-09-11T18:31:36.000Z
authors: ["sabell2012"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=98dc2665dbd0dbc01dcaf3231f96196d"
---
<p><span style="font-size: 8pt;"><span style="font-family: &#39;Times New Roman&#39;; color: #666666; font-weight: bold;">NOTE</span><span style="font-family: Arial; color: #666666;">: </span><span style="font-family: &#39;Times New Roman&#39;; color: #666666;">MY POSTINGS REFLECT MY OWN VIEWS AND DO NOT NECESSARILY REPRESENT THE VIEWS OF MY EMPLOYER, ACCENTURE.</span></span></p>
<p><span style="font-size: 12pt;"><span style="font-family: &#39;Times New Roman&#39;; color: #666666;">DIFFICULTY LEVEL:   </span><span style="font-family: &#39;Times New Roman&#39;; color: #7f6000; font-weight: bold;">INTERMEDIATE</span></span></p>
<p><span style="font-size: 12pt; font-family: &#39;Times New Roman&#39;; color: #666666;">RELEASE DEVELOPED IN:   </span><span style="font-size: 12pt; font-family: &#39;Times New Roman&#39;; color: darkblue; font-weight: bold;">HELSINKI</span></p>
<p><span style="font-family: &#39;Times New Roman&#39;; color: #666666; font-size: 12pt;">Assumes basic knowledge and/or familiarity of Workflows and Orchestration in ServiceNow.</span></p>
<p><span style="font-family: Arial; color: #666666;">____________________________________________________________________________</span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #666666;">With the release of Helsinki Patch 1 several very useful Orchestration Activities have been inexplicably deprecated.   One of these, the Run PowerShell activity was of importance.   This activity allowed you to have the flexibility to run a PowerShell command or script.   To retain backward functionality with Workflows created prior to the current release all deprecated Activities are actually still present, just not shown in the list of activities in the Workflow editor.   In this article I will show you how to locate and reactivate this really useful activity!</span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #666666;">I will also throw in, completely for free, a quick lab to show you how to create your own Orchestration PowerShell Custom Activity; which is probably what was intended to be used to replace the Run PowerShell Activity.</span></p>
<p> </p>
<p><span style="font-size: 18.6667px; font-family: Arial; color: #666666; font-weight: bold;">Pre-Requisites</span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #666666;">You will need to install your own local MID Server if you do not have one already.</span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;"><strong><a style="line-height: 1.5;" title="https://docs.servicenow.com/bundle/geneva-it-operations-management/page/product/mid_server/task/t_InstallAMIDServerOnWindows.html" href="https://docs.servicenow.com/bundle/geneva-it-operations-management/page/product/mid_server/task/t_InstallAMIDServerOnWindows.html" rel="nofollow">Install a MID Server on Windows</a> </strong></span></p>
<p> </p>
<p> </p>
<p><span style="font-size: 18.6667px; font-family: Arial; color: #666666; font-weight: bold;">Lab 1.1: Restoring the Run PowerShell Activity</span></p>
<p> </p>
<ol><li><span style="font-size: 12pt;">Navigate to Workflow -&gt; Administration -&gt; Activity Definitions.   The Activity Definitions list view will be displayed.</span></li><li><span style="font-size: 12pt;">Filter the list view by:</span>
<ol><li><span style="font-size: 12pt;">Category is deprecated</span></li><li><span style="font-size: 12pt;">Name contains Powershell </span></li></ol>
</li></ol>
<p><span style="margin-left: 36pt; color: #666666; font-size: 12pt; font-family: Arial;">The Run Powershell Activity entry will be displayed.</span></p>
<ol start="3"><li><span style="font-size: 12pt;">Personalize the the List View to show the Category field.</span></li><li><span style="font-size: 12pt;">Double-click on the Run Powershell Category entry and change it from &#34;deprecated&#34; to &#34;Orchestration - Deprecated&#34;.   This will place it under an already existing folder created for this purpose in the Core Activities tab.</span></li></ol>
<p><span style="font-size: 12pt;"><br /><span style="color: #666666; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh3.googleusercontent.com/CuVg0FSupJINPXdPUFLQg-kCvi8shWhRTvIiTdoh-glJfzKaRISjb37ka-jjXYjo-vD7M7HsWsHm1OYPXl89m-i9N3krMpgOHbYniVwd8Rz_Mn9ZQlMGPf2onpZzg89b6yy4OU0R" width="624" height="285" /></span><br /></span></p>
<p> </p>
<ol start="5"><li><span style="font-size: 12pt;">Navigate to Workflow -&gt; Workflow Editor.   The workflow editor will be displayed.</span></li><li><span style="font-size: 12pt;">Create a new workflow</span>
<ol><li><span style="font-size: 12pt;"><span style="font-weight: bold;">Name</span>: Run Powershell test.</span></li><li><span style="font-size: 12pt;"><span style="font-weight: bold;">Table</span>: Global</span></li><li><span style="font-size: 12pt;"><span style="font-weight: bold;">If condition matches</span>: --- none ---</span></li><li><span style="font-size: 12pt;">Click the Submit button to continue.</span></li></ol>
</li><li><span style="font-size: 12pt;">In the editor navigate to Core -&gt; Orchestration - Deprecated.   You will now see that the Run Powershell command has been &#34;restored&#34; and is available for use.</span></li></ol>
<p><span style="font-size: 12pt;"><br /><span style="color: #666666; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh4.googleusercontent.com/K3yRa-H1A5xhNojYeBET54NgCunJb7dArdvNmPMF84EsuqTXs84QXR6KA54nbZWkz83ciHNBJ-Q8xukMQ6KOe0kIW17MNDBZ436IHsRaJ3ULuX4b_53c_oCGpdHdaFBTwvnEVcqp" width="333" height="341" /></span><br /></span></p>
<p> </p>
<ol start="8"><li><span style="font-size: 12pt;">Drag a Run Powershell out and place it between the Begin and End Activities.   Fill in the form with the following:</span>
<ol><li><span style="font-size: 12pt;"><span style="font-weight: bold;">Name</span>: Test Powershell</span></li><li><span style="font-size: 12pt;"><span style="font-weight: bold;">Hostname</span>: 127.0.0.1</span></li><li><span style="font-size: 12pt;"><span style="font-weight: bold;">Command</span>: ls</span></li><li><span style="font-size: 12pt;"><span style="font-weight: bold;">Sensor script</span>: </span></li></ol>
</li></ol>
<p> </p>
<p>var results &#61; {output : &#39;&#39;, error : &#39;&#39;};</p>
<p>results.output &#61; output;</p>
<p>results.error &#61; error;</p>
<p>workflow.info(&#39;---&gt; [{1}] {0}&#39;, [results.output, &#39;WF:Powershell Test&#39;]);</p>
<p>workflow.scratchpad.output &#61; results;</p>
<p> </p>
<p style="padding-left: 60px;"><span style="font-size: 16px;">NOTE: We may want to hang onto our results for the downstream activities so we need to store them off into a scratchpad variable.   </span></p>
<p> </p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;">5. Click on the Submit button to save your work.</span></p>
<p><span style="font-size: 12pt;"><br /><span style="color: #666666; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh6.googleusercontent.com/P4ds-iz6BzgBRs-FEVWM6S5v6tOxyGDsrE-Vjo0k1LZcJsFkb_d07yot0swwXeYR4QIPqEHAHtOPvkiEVezq-_JcM_tRHhfZmpoGZEzIC_zVZzRlw9yGGt9ZkNUTfq9yv4OtFDtp" width="624" height="497" /></span><br /></span></p>
<ol start="9"><li><span style="font-size: 12pt;">Click on the Start button to run the workflow.</span></li><li><span style="font-size: 12pt;">After the workflow completes look at the context.   View the logs.   You should see the returned directory listing (ls) results displayed.</span></li></ol>
<p><br /><span style="color: #666666; font-size: 12pt; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh3.googleusercontent.com/GNoesSqusN-ac5TpNXZtJsq1JSrLA4_ECfuH3-46aXHhayRZZJv9TPXAAhfBvnA2kEafe4lIP0m07SMKDi2Hgbj2v-a45Eo9a1ktJrOQGoVA3gHp1PEt2HHLsmLqQhhTQD2jTCMM" width="624" height="372" /></span></p>
<p> </p>
<p><span style="color: #666666; font-size: 12pt; font-family: Arial;">And you are back-in-business having reactivated the Run Powershell Activity!   </span></p>
<p> </p>
<p><br /><span style="color: #666666; font-weight: bold; font-size: 18.6667px; font-family: Arial;">Lab 1.2: Creating a Custom PowerShell Activity</span></p>
<p> </p>
<p><span style="color: #666666; font-size: 16px; font-family: Arial;">So let&#39;s create something similar using the Custom Activity creator as an alternate.   I do not consider it near as friendly to the developer as the Run Powershell Activity; thus my reasoning for resurrecting the older Activity.   We will use the same workflow so that we can show the two Activities side-by-side.</span></p>
<p> </p>
<ol><li><span style="font-size: 12pt;">In the Workflow Editor navigate to the Custom tab, and click the plus (&#34;&#43;&#34;) button to create a new Activity.   This will display the context menu where you can choose a custom Activity Template.</span></li><li><span style="font-size: 12pt;">Choose the Powershell Template from the menu.   This will display the Activity Designer with the template form.</span></li></ol>
<p><span style="font-size: 12pt;"><br /><span style="color: #666666; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh3.googleusercontent.com/PeRwLAEHbyQrE0Fd8BeRB58JZ23ZO1mXoZLw4u2xG5LSpebxZxn9lF-rDE5VTbmK0TrPoan2gAIzOwU7dQnRggCvbdrueZSpsFOtoyGx4t5S1qz68q5J-wjL2MoKx32XwhRPn0lA" width="412" height="426" /></span><br /></span></p>
<p> </p>
<ol start="3"><li><span style="font-size: 12pt;">Fill out the form with the following:</span>
<ol><li><span style="font-size: 12pt;"><span style="font-weight: bold;">Name</span>: PowerShell Command</span></li><li><span style="font-size: 12pt;"><span style="font-weight: bold;">Short Description</span>: Execute a Command</span></li><li><span style="font-size: 12pt;"><span style="font-weight: bold;">Accessible from</span>: All application scopes</span></li><li><span style="font-size: 12pt;"><span style="font-weight: bold;">Category</span>: PowerShell</span></li><li><span style="font-size: 12pt;"><span style="font-weight: bold;">Description</span>: Execute a simple powershell command</span></li><li><span style="font-size: 12pt;">Click on the Continue button to display the Inputs form.</span></li></ol>
</li></ol>
<p><span style="font-size: 12pt;"><br /><span style="color: #666666; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh3.googleusercontent.com/1Gp139_iepOdOirJW4QCKxwen307LkH9T0P2fO5_ajaw_9Lt7YFvmbWOc3voPpipHWTZScEVQ0FAhm-uFMloNdiQlrCIyafPvCnEIcnQzWi8ziSazVKCsnnixckUVNSJa_Rq1Pk-" width="624" height="321" /></span><br /></span></p>
<p> </p>
<ol start="4"><li><span style="font-size: 12pt;">Add three fields.</span>
<ol><li><span style="font-size: 12pt;"><span style="font-weight: bold;">Name</span>: Hostname, <span style="font-weight: bold;">Type</span>: String</span></li><li><span style="font-size: 12pt;"><span style="font-weight: bold;">Name</span>: Command, <span style="font-weight: bold;">Type</span>: String</span></li><li><span style="font-size: 12pt;"><span style="font-weight: bold;">Name</span>: Credential, <span style="font-weight: bold;">Type</span>: String</span></li><li><span style="font-size: 12pt;">Click on the Continue button to display the Execution Command form</span></li></ol>
</li></ol>
<p><span style="font-size: 12pt;"><br /><span style="color: #666666; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh4.googleusercontent.com/JH6wP0dsJqqyoHPL9GuHXqO2hToZIeZcmJGMEW7CWjB7_nEzZzqV2eIpBjzT7Rj89waBR6Dh93wB59ZKnhOJF0vwg5NPItvhscZlf3-fFND5Amgl487Hh1BCAvfMyeqbP_gy6AzQ" width="624" height="272" /></span><br /></span></p>
<p> </p>
<ol start="5"><li><span style="font-size: 12pt;">Fill in the form with the following:</span>
<ol><li><span style="font-size: 12pt;"><strong>Script Type:</strong> Custom Powershell command</span></li><li><span style="font-size: 12pt;">Drag the Hostname field to the Target host field</span></li><li><span style="font-size: 12pt;">Drag the Command field to the Command host field</span></li><li><span style="font-size: 12pt;">Drag the Credential field to the Credential tag field</span></li><li><span style="font-size: 12pt;">Click the Continue button to continue to the Outputs form.</span></li></ol>
</li></ol>
<p><span style="font-size: 12pt;"><br /><span style="color: #666666; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh5.googleusercontent.com/HRub00vnCvMIZ-vEUmQ5Thj2TGwvhGWaq9mLypcxy54_Of7XmOYOPh2UZ3aL5qHRjXckSmZ9U7rTKct6Z0SgEmZQUcLF-gBlPyJlnOfOHDrPIoYGr_Zw-03Tx19W7qrMDWMndGfJ" width="624" height="355" /></span><br /></span></p>
<p> </p>
<ol start="6"><li><span style="font-size: 12pt;">Add two Output fields</span>
<ol><li><span style="font-size: 12pt;">Name: result, Type: String</span></li><li><span style="font-size: 12pt;">Name: output, Type: String</span></li><li><span style="font-size: 12pt;">Name: errorMessage, Type: String</span></li><li><span style="font-size: 12pt;">Click on the Go To Post-Processing button to continue.</span></li></ol>
</li></ol>
<p><span style="font-size: 12pt;"><br /><span style="color: #666666; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh5.googleusercontent.com/EGyafkHWOPdBXxhmuDWr_FXtq7T5HPnZI3j6cNNs80xB1sind999OVW5zepCMT82ZHcW7gzRuRBpmhy2PqUwBkU8Tr5gAsoBZaZMtVQg9ytITB9Jkt-VXiBP3RdisnrajLHzBGIn" width="624" height="280" /></span><br /></span></p>
<p> </p>
<ol start="7"><li><span style="font-size: 12pt;">Fill in the form with the following:</span>
<ol><li><span style="font-size: 12pt;">Output process script:</span></li></ol>
</li></ol>
<p> </p>
<p><span style="font-family: &#39;Courier New&#39;;">if (gs.nil(executionResult.error)) {</span></p>
<p><span style="font-family: &#39;Courier New&#39;;">       activityOutput.result &#61; &#34;success&#34;;</span></p>
<p><span style="font-family: &#39;Courier New&#39;;">         try {</span></p>
<p><span style="font-family: &#39;Courier New&#39;;">                     var output &#61; executionResult.output;</span></p>
<p><span style="font-family: &#39;Courier New&#39;;">                     if (output !&#61; null) {</span></p>
<p><span style="font-family: &#39;Courier New&#39;;">                               activityOutput.output &#61; output.substring(output.indexOf(&#39;&lt;Objects&gt;&#39;)); </span></p>
<p><span style="font-family: &#39;Courier New&#39;;">                               gs.info(&#39;---&gt; activityOutput.output: &#39; &#43; activityOutput.output);   // DEBUG</span></p>
<p><span style="font-family: &#39;Courier New&#39;;">                     }</span></p>
<p><span style="font-family: &#39;Courier New&#39;;">         }</span></p>
<p><span style="font-family: &#39;Courier New&#39;;">         catch(err) {</span></p>
<p><span style="font-family: &#39;Courier New&#39;;">                     gs.error(&#39;---&gt; ERROR: &#39; &#43; err);</span></p>
<p><span style="font-family: &#39;Courier New&#39;;">         }</span></p>
<p><span style="font-family: &#39;Courier New&#39;;">} </span></p>
<p><span style="font-family: &#39;Courier New&#39;;">else {</span></p>
<p><span style="font-family: &#39;Courier New&#39;;">         activityOutput.result &#61; &#34;failure&#34;;</span></p>
<p><span style="font-family: &#39;Courier New&#39;;">         activityOutput.errorMessage &#61; executionResult.errorMessages;</span></p>
<p><span style="font-family: &#39;Courier New&#39;;">         gs.info(&#39;---&gt; activityOutput.errorMessage: &#39; &#43; activityOutput.errorMessage);   // DEBUG</span></p>
<p><span style="font-family: &#39;Courier New&#39;;">}</span></p>
<p style="padding-left: 60px;"> </p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;"><strong>Note</strong>: I cobbled this code together from the few examples I was able to find, and it seems to work well.   Also, note, that unlike the Run Powershell Activity, this needs to be only for handling and populating the results info.</span></p>
<p> </p>
<p> </p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;">2. Click the Continue to continue to the Conditions form.</span></p>
<p><span style="font-size: 12pt;"><br /><span style="color: #666666; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh3.googleusercontent.com/J-sY4BB3TnZbjrQWiXEwFee9Ks4NZMeE6py0I2jqf4PiamEbyyxwWjQuWjjaxs2Bkqz3GlcbMBoO1YOpKpDUvm6bE9PEjndLw04fk11h1QiuUWrK25m6XrUP63GsK5xrhK3iOd9R" width="624" height="325" /></span><br /></span></p>
<p> </p>
<ol start="8"><li><span style="font-size: 12pt;">Add two condition fields:</span>
<ol><li><span style="font-size: 12pt;"><span style="font-weight: bold;">Name</span>: Success</span>
<ol><li><span style="font-size: 12pt;"><span style="font-weight: bold;">Condition</span>:   activityOutput.result &#61;&#61; &#39;success&#39;</span></li><li><span style="font-size: 12pt;"><span style="font-weight: bold;">Order</span>: 100</span></li></ol>
</li><li><span style="font-size: 12pt;"><span style="font-weight: bold;">Name</span>: Failure</span>
<ol><li><span style="font-size: 12pt;"><span style="font-weight: bold;">Condition</span>: activityOutput.result !&#61; &#39;success&#39;</span></li><li><span style="font-size: 12pt;"><span style="font-weight: bold;">Order</span>: 200</span></li></ol>
</li><li><span style="font-size: 12pt;">Click on the Save button to save the new Activity.</span></li></ol>
</li></ol>
<p> </p>
<ol start="9"><li><span style="font-size: 12pt;">In the Workflow Editor navigate to Custom -&gt; Global -&gt; PowerShell.   You will now see your new PowerShell Command Activity present.</span></li><li><span style="font-size: 12pt;">Go to the Powershell Test Workflow.</span></li><li><span style="font-size: 12pt;">Navigate to Custom -&gt; Global -&gt; PowerShell and drag out a PowerShell Command activity.   The new Activity form will be displayed.</span></li></ol>
<p><span style="font-size: 12pt;"><br /><span style="color: #666666; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh5.googleusercontent.com/048h1btZ3lLiGuh2YR_APQzTywzYzS1Vv3-EmoiKRoUtBQ29eKB47I5CARkHxzbeIN4Q6l7zmbjklPj7k_n6-0AwW0kPWG0onPONStNQFleY7ga4NENeKJfDFbJFowozaPvBih1h" width="406" height="338" /></span><br /></span></p>
<p> </p>
<ol start="12"><li><span style="font-size: 12pt;">Fill in the form with the following:</span>
<ol><li><span style="font-size: 12pt;"><span style="font-weight: bold;">Name</span>: Test PowerShell Command</span></li><li><span style="font-size: 12pt;"><span style="font-weight: bold;">Hostname</span>: 127.0.0.1</span></li><li><span style="font-size: 12pt;"><span style="font-weight: bold;">Command</span>: ls</span></li></ol>
</li></ol>
<p><span style="font-size: 12pt;"><br /><span style="color: #666666; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh4.googleusercontent.com/036J01BAXfW7124qTg1g2cc9LqPUr9VMj-WjksCVYo4FYo3a0Z8n4Y-QWNWVdjL1pdEqUvV8fkTQ2PwydxJGYWzlzaMbQ4nz90ALoToXm0ubfQNTapqLJJhE1UKNiS1V-YmZT_Hz" width="624" height="284" /></span><br /></span></p>
<p> </p>
<ol start="13"><li><span style="font-size: 12pt;">Change the wiring up to look like this:</span></li></ol>
<p><span style="font-size: 12pt;"><br /><span style="color: #666666; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh4.googleusercontent.com/czlDrJI2T7OQ00dOMmMwwWuysjtqsP6nFDdZe3Umkb14CTUNs0JnztUk_JcNgH1PyMTV3PC3nx7gr6nTBqNnOi0I2divxiWiYBuDz0zWJ9K-a5DGOn5mvcUc6dkvdT4OPX8KkHDl" width="624" height="324" /></span><br /></span></p>
<p> </p>
<ol start="14"><li><span style="font-size: 12pt;">To hang onto our results for the Custom Activity we will need to add a Run Script Activity after the PowerShell Command; in the Success branch.   The after-activity results from your Custom Activity are available for coding in the Data tab.   <strong>NOTE</strong>: It is important to understand that workflow.scratchpad (and other workflow variables) are not available inside the Custom Activity!<br /></span><span style="font-size: 12pt;"><strong><br />NOTE</strong>: The Data object number may be different than mine.</span><br /><span style="font-size: 12pt; line-height: 1.5;"><br /></span>
<ol><li><span style="font-size: 12pt;"><strong>Name: </strong>Handle Results</span></li><li><span style="font-size: 12pt;">Script: </span></li></ol>
</li></ol>
<p> </p>
<p>gs.info(&#39;---&gt; previous_activity.result: &#39; &#43; data.get(6).result);</p>
<p>gs.info(&#39;---&gt; previous_activity.output: &#39; &#43; data.get(6).output);</p>
<p>//gs.info(&#39;---&gt; previous_activity.errorMessage: &#39; &#43; data.get(6).errorMessage);</p>
<p> </p>
<p>var results &#61; {output : &#39;&#39;, error : &#39;&#39;};</p>
<p>results.output &#61; data.get(6).output;</p>
<p>results.error &#61; data.get(6).errorMessage;</p>
<p>workflow.info(&#39;---&gt; [{1}] {0}&#39;, [results.output, &#39;WF:Powershell Test&#39;]);</p>
<p>workflow.scratchpad.output &#61; results;</p>
<p> </p>
<p><span style="font-size: 16px; line-height: 24px;"><img class="image-2 jive-image" style="max-width: 1200px; max-height: 900px;" src="44f70d06dbd897041dcaf3231f9619b4.iix" /></span></p>
<p> </p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;">3. Click the Submit button to save your results.   Your workflow should now look something like this:</span></p>
<p style="padding-left: 60px;"> </p>
<p><span style="font-size: 12pt;"><img class="image-3 jive-image" style="max-width: 1200px; max-height: 900px;" src="9ae360cedb5457041dcaf3231f96197c.iix" /></span></p>
<p style="padding-left: 60px;"> </p>
<ol start="14"><li><span style="font-size: 12pt;">Run the workflow.   You should have a successful run that looks like this:</span></li></ol>
<p><span style="font-size: 12pt;"><br /><img class="image-1 jive-image" style="max-width: 1200px; max-height: 900px;" src="b1032375db9c9f04e9737a9e0f9619da.iix" /><br /></span></p>
<p> </p>
<ol start="15"><li><span style="font-size: 12pt;">From your instance navigate to System Logs -&gt; System Log -&gt; All.   The System Logs list view will be displayed.</span></li><li><span style="font-size: 12pt;">Filter for messages starting with &#34;---&gt;&#34;, and order by Created descending.   You should see an entry like the following:</span></li></ol>
<p> </p>
<p><img class="jive-image image-4" style="max-width: 1200px; max-height: 900px;" src="8e15c882db9cd3049c9ffb651f96198f.iix" /></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #666666;">And there you go.   Bringing back the Run Powershell Activity versus rolling your own Custom Powershell Activity. I like the ease that the Run Powershell Activity gives you versus having to construct my own and have a separate Run Script Activity handle the results.   Additionally, a maintenance programmer would have to know how the new mechanism for extracting the Custom Activity results works.   This will likely be different for each new Orchestration workflow you use the activity in.</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #666666;">BTW, by changing the status of the Run Powershell Activity you in essence now own it.   That is, it will be skipped by future updates to that instance.   This should not be a concern though as it was deprecated right?</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #666666;">Notice also, that you would have to do things a bit different to create an analog to the Run Powershell Activity when it comes to passing in a Script.   Here it becomes a bit interesting (a.k.a. complex) to emulate in a Custom Activity what you already get with the Run Powershell Activity.   I will demonstrate the differences in my next article.</span></p>
<p> </p>
<p>Enjoy!</p>
<p>Steven Bell.</p>
<p style="color: purple;"><strong>If you find this article helps you, don&#39;t forget to log in and &#34;like&#34; it!</strong></p>
<p style="color: purple;"><strong>Also, if you are not already, I would like to encourage you to become a member of our blog!</strong></p>
<p><strong><a href="community?id&#61;community_article&amp;sys_id&#61;330d6ea5dbd0dbc01dcaf3231f961965" rel="nofollow"><img class="image-1 jive-image" src="ae1b6ff1dbd81704ed6af3231f961962.iix" alt="Combined Logo Graphic_Operations.png" width="340" height="92" /></a></strong></p>
<p> </p>