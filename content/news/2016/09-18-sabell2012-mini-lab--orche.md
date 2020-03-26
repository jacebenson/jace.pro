---
title: "MiniLab Orchestration  Bringing Back the SSH Run Command Activity HELSINKI"
date: 2016-09-17T18:49:43.000Z
authors: ["sabell2012"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=6e5ce6a1dbd0dbc01dcaf3231f9619d5"
---
<p><span style="font-family: &#39;Times New Roman&#39;; color: #666666; font-weight: bold;">NOTE</span><span style="font-family: Arial; color: #666666;">: </span><span style="font-family: &#39;Times New Roman&#39;; color: #666666;">MY POSTINGS REFLECT MY OWN VIEWS AND DO NOT NECESSARILY REPRESENT THE VIEWS OF MY EMPLOYER, ACCENTURE.</span></p>
<p><span style="font-size: 12pt;"><span style="font-family: &#39;Times New Roman&#39;; color: #666666;">DIFFICULTY LEVEL:   </span><span style="font-family: &#39;Times New Roman&#39;; color: #7f6000; font-weight: bold;">INTERMEDIATE</span></span></p>
<p><span style="font-size: 12pt; font-family: &#39;Times New Roman&#39;; color: #666666;">RELEASE DEVELOPED IN:   </span><span style="font-size: 12pt; font-family: &#39;Times New Roman&#39;; color: darkblue; font-weight: bold;">HELSINKI</span></p>
<p><span style="font-family: &#39;Times New Roman&#39;; color: #666666; font-size: 12pt;">Assumes basic knowledge and/or familiarity of Workflows and Orchestration, and some Scripting in ServiceNow.</span></p>
<p><span style="font-family: Arial; color: #666666;">____________________________________________________________________________</span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #666666;">With the release of Helsinki Patch 1 several very useful Orchestration Activities have been deprecated.   One of these, the Run Command activity was of importance.   This activity allows you to have the flexibility to run a SSH command or script.   To retain backward functionality with Workflows created prior to the current release all deprecated Activities are actually still present, but just not shown in the list of activities in the Workflow editor.   In this article I will show you how to locate and reactivate this really useful activity!</span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #666666;">I will also throw in, completely for free, a quick lab to show you how to create your own Orchestration SSH Custom Activity; which is probably what was intended to be used to replace the Run Command Activity.</span></p>
<p> </p>
<p><span style="font-size: 18.6667px; font-family: Arial; color: #666666; font-weight: bold;">Pre-Requisites</span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #666666;">You will need to install your own local MID Server if you do not have one already.   Also, if you do not have a Unix or Linux SSH device to test against; it is necessary for the successful execution of the workflows presented in this article.   I have provided the link on how you can set up your own Ubuntu Linux device on VirtualBox should you need one.   My test results were done with such a setup.</span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #266fc8; font-weight: bold;"><a title="" href="https://docs.servicenow.com/bundle/geneva-it-operations-management/page/product/mid_server/task/t_InstallAMIDServerOnWindows.html" rel="nofollow">Install a MID Server on Windows</a></span><span style="font-size: 16px; font-family: Arial; color: #303030;"> - wiki article</span><span style="font-size: 16px; font-family: Arial; color: #266fc8; font-weight: bold;"><br /></span></p>
<p><a href="community/operations-management/orchestration/blog/2016/08/15/mini-lab-orchestration-setting-up-a-ubuntu-desktop-on-virtualbox" rel="nofollow"><span style="font-size: 16px; font-family: Arial; color: #266fc8; font-weight: bold;">Mini-Lab: Orchestration - Setting Up an Ubuntu Desktop on VirtualBox</span></a></p>
<p> </p>
<p> </p>
<p><span style="font-size: 18.6667px; font-family: Arial; color: #666666; font-weight: bold;">Lab 1.1: Restoring the Run Command Activity</span></p>
<p> </p>
<p style="margin-top: 3pt; margin-bottom: 3pt;"><span style="font-size: 16px; font-family: Arial; color: #666666;">In this first lab I will show how to restore the Run Command Activity to the Workflow Editor so that it can be again available in the Core Activities tab.</span></p>
<p style="margin-top: 3pt; margin-bottom: 3pt;"> </p>
<p style="margin-top: 3pt; margin-bottom: 3pt;"><span style="font-size: 16px; font-family: Arial; color: #666666;">1. Navigate to Workflow -&gt; Administration -&gt; Activity Definitions.   The Activity Definitions list view will be displayed.</span></p>
<p style="margin-top: 3pt; margin-bottom: 3pt;"> </p>
<p style="margin-top: 3pt; margin-bottom: 3pt;"><span style="font-size: 16px; font-family: Arial; color: #666666;">2. Filter the list view by:</span></p>
<p style="margin-top: 6pt; margin-bottom: 6pt; margin-left: 36pt;"><span style="font-size: 16px; font-family: Arial; color: #666666;">a. Category is deprecated</span></p>
<p style="margin-top: 6pt; margin-bottom: 6pt; margin-left: 36pt;"><span style="font-size: 16px; font-family: Arial; color: #666666;">b. Name contains Run Command. The Run Command Activity entry will be displayed.</span></p>
<p style="margin-top: 3pt; margin-bottom: 3pt; margin-left: 36pt;"><span style="font-size: 16px; font-family: Arial; color: #666666;">c. Personalize the the List View to show the Category field.</span></p>
<p style="margin-top: 3pt; margin-bottom: 3pt; margin-left: 36pt;"><span style="font-size: 16px; font-family: Arial; color: #666666;">d. Double-click on the Run Command Category entry and change it from &#34;deprecated&#34; to &#34;Orchestration - Deprecated&#34;.   This will place it under an already existing folder created for this purpose in the Core Activities tab of the Workflow Editor.</span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #666666;"><img class="jive-image" style="border-style: none;" src="https://lh3.googleusercontent.com/VtXfhhmRkVinnQiVpv45H732h2kqmawPE66GV2f6r5751G5Ww_BuOtfpcBgxajNrshCvzHshlxjVyGC8t9cUIIshw0r6-KqBt-6LY4dgHOyxLCVbr1-s4mBFOAR8HfXaDUATt1rE" width="624" height="264" /></span></p>
<p> </p>
<p style="margin-top: 3pt; margin-bottom: 3pt;"><span style="font-size: 16px; font-family: Arial; color: #666666;">3. Navigate to Workflow -&gt; Workflow Editor.   The workflow editor will be displayed.</span></p>
<p style="margin-top: 3pt; margin-bottom: 3pt;"><span style="font-size: 16px; font-family: Arial; color: #666666;">Create a new workflow</span></p>
<p style="margin-top: 6pt; margin-bottom: 6pt; margin-left: 36pt;"><span style="font-size: 16px; font-family: Arial; color: #666666; font-weight: bold;">a. Name</span><span style="font-size: 16px; font-family: Arial; color: #666666;">: Run SSH Command test.</span></p>
<p style="margin-top: 6pt; margin-bottom: 6pt; margin-left: 36pt;"><span style="font-size: 16px; font-family: Arial; color: #666666; font-weight: bold;">b. Table</span><span style="font-size: 16px; font-family: Arial; color: #666666;">: Global</span></p>
<p style="margin-top: 6pt; margin-bottom: 6pt; margin-left: 36pt;"><span style="font-size: 16px; font-family: Arial; color: #666666; font-weight: bold;">c. If condition matches</span><span style="font-size: 16px; font-family: Arial; color: #666666;">: -- none --</span></p>
<p style="margin-top: 6pt; margin-bottom: 6pt; margin-left: 36pt;"><span style="font-size: 16px; font-family: Arial; color: #666666;">d. Click the Submit button to continue.</span></p>
<p style="margin-top: 6pt; margin-bottom: 6pt; margin-left: 36pt;"> </p>
<p style="margin-top: 3pt; margin-bottom: 3pt;"><span style="font-size: 16px; font-family: Arial; color: #666666;">4. In the editor navigate to Core -&gt; Orchestration - Deprecated.   You will now see that the Run Command command has been &#34;restored&#34; and is available for use.</span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #666666;"><img class="jive-image" style="border-style: none;" src="https://lh4.googleusercontent.com/xYV8Jwwb6gU5DHGpxLsWXAi816CEE78TcfrJqNcIopZyYdhr7OUTdOkLI7TGB-NVxEanLz__0RGIVe-7IvGc5O4x5sGuL5N5tN3CPjN0bgOTsZLW4B99Ky_nggxePqp2Sz6ZWipH" width="365" height="368" /></span></p>
<p> </p>
<p style="margin-top: 3pt; margin-bottom: 3pt;"><span style="font-size: 16px; font-family: Arial; color: #666666;">5. Drag a Run Command out and place it between the Begin and End Activities.   Fill in the form with the following (the IP is from my Ubuntu VirtualBox device and will likely be different for you):</span></p>
<p style="margin-top: 6pt; margin-bottom: 6pt; margin-left: 36pt;"><span style="font-size: 16px; font-family: Arial; color: #666666; font-weight: bold;">a. Name</span><span style="font-size: 16px; font-family: Arial; color: #666666;">: Test Run Command</span></p>
<p style="margin-top: 6pt; margin-bottom: 6pt; margin-left: 36pt;"><span style="font-size: 16px; font-family: Arial; color: #666666; font-weight: bold;">b. Hostname</span><span style="font-size: 16px; font-family: Arial; color: #666666;">: 10.10.10.248</span></p>
<p style="margin-top: 6pt; margin-bottom: 6pt; margin-left: 36pt;"><span style="font-size: 16px; font-family: Arial; color: #666666; font-weight: bold;">c. Command</span><span style="font-size: 16px; font-family: Arial; color: #666666;">: ls -l</span></p>
<p style="margin-top: 6pt; margin-bottom: 6pt; margin-left: 36pt;"><span style="font-size: 16px; font-family: Arial; color: #666666; font-weight: bold;">d. Sensor script</span><span style="font-size: 16px; font-family: Arial; color: #666666;">:</span></p>
<p> </p>
<p><span style="font-size: 12px; font-family: Consolas; color: #006699;">var</span><span style="font-size: 12px; font-family: Consolas; color: #000000;"> results &#61; {output : </span><span style="font-size: 12px; font-family: Consolas; color: #0000ff;">&#39;&#39;, error : &#39;&#39;</span><span style="font-size: 12px; font-family: Consolas; color: #000000;">};   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000; background-color: #f6f6f6;">results.output &#61; output;   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000;">results.error &#61; error;   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000; background-color: #f6f6f6;">workflow.info(</span><span style="font-size: 12px; font-family: Consolas; color: #0000ff; background-color: #f6f6f6;">&#39;---&gt; [{1}] {0}&#39;, [results.output, &#39;WF:Run Command Test&#39;</span><span style="font-size: 12px; font-family: Consolas; color: #000000; background-color: #f6f6f6;">]);   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000;">workflow.scratchpad.output &#61; results;   </span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 16px; font-family: Arial; color: #666666; font-weight: bold;">NOTE</span><span style="font-size: 16px; font-family: Arial; color: #666666;">: We may want to hang onto our results for the downstream activities so we need to store them off into a scratchpad variable. </span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 16px; font-family: Arial; color: #666666;">e. Click on the Submit button to save your work.   </span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #666666;">6. Wire up your workflow to look like the following:</span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #666666;"><img class="jive-image" style="border-style: none;" src="https://lh4.googleusercontent.com/m4nqnxj4ajRe315-DimFH9kCUI-N3ysaIfE8VpkmQm5vOxHJEAplRfQlnJiDCEFIBMrU6u54ZW-ZGTfkGocgmPFFfBvBOx5-TZL9W0ITJ3FeBPznLU2Tr3HAVekTuhE_pX7yjWXu" width="624" height="495" /></span></p>
<p style="margin-top: 3pt; margin-bottom: 3pt;"><span style="font-size: 16px; font-family: Arial; color: #666666;">7. Click on the Start button to run the workflow.</span></p>
<p style="margin-top: 3pt; margin-bottom: 3pt;"> </p>
<p style="margin-top: 3pt; margin-bottom: 3pt;"><span style="font-size: 16px; font-family: Arial; color: #666666;">8. After the workflow completes look at the context.   View the logs.   You should see the returned directory listing (ls) results displayed.</span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #666666;"><img class="jive-image" style="border-style: none;" src="https://lh5.googleusercontent.com/wrDsG6Xr_a2VjtTDWe-DQX6f25HbZ475FFcGBqCLgEQBSdoH1UGAoqvgwAfgnK9qrzi6MQ94hQddy3yDMPBK0JXmXFfq4Rfxh1ZRUtJ7zpLuYK3cMWp2HCTlPstGT19I4yO3CQ8m" width="624" height="252" /></span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #666666;">And you are back-in-business having reactivated the Run Command Activity!   </span></p>
<p><br /><br /></p>
<p><span style="font-size: 18.6667px; font-family: Arial; color: #666666; font-weight: bold;">Lab 1.2: Creating a Custom SSH Command Activity</span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #666666;">So let&#39;s create something similar using the Custom Activity Builder as an alternate.   I do not consider it near as friendly to the developer as the Run Command Activity (you have to create it from scratch right?); thus my reasoning for resurrecting the older Activity.   We will use the same workflow so that we can show the two Activities side-by-side.</span></p>
<p> </p>
<p style="margin-top: 3pt; margin-bottom: 3pt;"><span style="font-size: 16px; font-family: Arial; color: #666666;">1. In the Workflow Editor navigate to the Custom tab, and click the plus (&#34;&#43;&#34;) button to create a new Activity.   This will display the context menu where you can choose a custom Activity Template.</span></p>
<p> </p>
<p style="margin-top: 3pt; margin-bottom: 3pt;"><span style="font-size: 16px; font-family: Arial; color: #666666;">2. Choose the SSH Template from the menu.   This will display the Activity Designer with the template form.</span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #666666;"><img class="jive-image" style="border-style: none;" src="https://lh6.googleusercontent.com/F93a-XEq3RpRIiM87TpuT0XL4sdz5CYKGdCmM7EXNK-V2NCJF6Soe8lOZt9ts9SaI-kpAH_lISgiUnKPBnf5tJ-skmnX2KjY8SiWiCwaBKHpG3-MYM8424ENAxoMryKaZ79WgyjK" width="406" height="422" /></span></p>
<p> </p>
<p><span style="font-size: 16px; margin-top: 3pt;">3. Fill out the form with the following:</span></p>
<ol><li><ol><li><span><span style="font-size: 16px; font-weight: bold;">Name</span><span style="font-size: 16px;">: SSH Command</span></span></li><li><span><span style="font-size: 16px; font-weight: bold;">Short Description</span><span style="font-size: 16px;">: Execute a SSH Command</span></span></li><li><span><span style="font-size: 16px; font-weight: bold;">Accessible from</span><span style="font-size: 16px;">: All application scopes</span></span></li><li><span><span style="font-size: 16px; font-weight: bold;">Category</span><span style="font-size: 16px;">: SSH</span></span></li><li><span><span style="font-size: 16px; font-weight: bold;">Description</span><span style="font-size: 16px;">: Execute a simple SSH command</span></span></li><li><span style="font-size: 16px; margin-bottom: 6pt;">Click on the Continue button to display the Inputs form.</span></li></ol>
</li></ol>
<p><br /><span style="color: #666666; font-size: 16px; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh6.googleusercontent.com/nfuJczDea8cuVDZN42wgxFjrzbUcoX3QC9UKgRTFf4JdH3xFmME0ydKvnWnIStWFlkZLxlhFcsKg_dQt0X4pDyWLC2cIZ1t_pvUdVjeYzG6-5Zlqp2BwmmStvmTtQ2XdYPElXOs0" width="624" height="257" /></span></p>
<p> </p>
<p><span style="font-size: 16px; margin-top: 3pt;">4. Add three fields.</span></p>
<ol><li><ol><li><span><span style="font-size: 16px; font-weight: bold;">Name</span><span style="font-size: 16px;">: Hostname, </span><span style="font-size: 16px; font-weight: bold;">Type</span><span style="font-size: 16px;">: String</span></span></li><li><span><span style="font-size: 16px; font-weight: bold;">Name</span><span style="font-size: 16px;">: Directory, </span><span style="font-size: 16px; font-weight: bold;">Type</span><span style="font-size: 16px;">: String</span></span></li><li><span><span style="font-size: 16px; font-weight: bold;">Name</span><span style="font-size: 16px;">: Command, </span><span style="font-size: 16px; font-weight: bold;">Type</span><span style="font-size: 16px;">: String</span></span></li><li><span style="font-size: 12pt;"><span style="font-weight: bold;">Name</span>: Credential, <span style="font-weight: bold;">Type</span>: String</span></li><li><span style="font-size: 16px; margin-bottom: 6pt;">Click on the Continue button to display the Execution Command form</span></li></ol>
</li></ol>
<p><br /><span style="color: #666666; font-size: 16px; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh5.googleusercontent.com/nDsUiVPW03jNer9B7G31_2_n6nAG-yxC3JgE1Ns0jsKmj17tqKphaCiWTOvxqiZF1suMWadyBFOiVIw5SRADSnslfJhXWrNCdCJierBPoZkWhob9hrEs9r204bg2TZcmf4XWQRd6" width="624" height="273" /></span></p>
<p> </p>
<p><span style="font-size: 16px; margin-top: 3pt;">5. Fill in the form with the following:</span></p>
<ol><li><ol><li><span><span style="font-size: 16px; font-weight: bold;">Script Type:</span><span style="font-size: 16px;"> Custom SSH command</span></span></li><li><span style="font-size: 16px;">Drag the Hostname field to the Target host field</span></li><li><span style="font-size: 16px;">Drag the Directory field to the Directory field</span></li><li><span style="font-size: 12pt;">Drag the Command field to the Command field</span></li><li><span style="font-size: 16px;">Drag the Credential field to the Credential tag field</span></li><li><span style="font-size: 16px; margin-bottom: 6pt;">Click the Continue button to continue to the Outputs form.</span></li></ol>
</li></ol>
<p><br /><span style="color: #666666; font-size: 16px; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh3.googleusercontent.com/HhocPcir7lH9M1Ma11xDj3SrO79iPKq5qBRRS_-kGplsrbcOBt3giWJFIVU-uew1EWv3cdR9kRaLQ1TfKM_b955rBDFZchfIh1e_IcGy0mENiywk0OY1AQiXrwaaIOSHZKtr98U2" width="624" height="325" /></span></p>
<p> </p>
<p><span style="font-size: 16px; margin-top: 3pt;">6. Add two Output fields</span></p>
<ol><li><ol><li><span style="font-size: 16px;"><strong>Name</strong>: result, <strong>Type</strong>: String</span></li><li><span style="font-size: 16px;"><strong>Name</strong>: output, <strong>Type</strong>: String</span></li><li><span style="font-size: 16px;"><strong>Name</strong>: errorMessage, <strong>Type</strong>: String</span></li><li><span style="font-size: 16px; margin-bottom: 6pt;">Click on the Go To Post-Processing button to continue.</span></li></ol>
</li></ol>
<p><br /><span style="color: #666666; font-size: 16px; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh5.googleusercontent.com/9Xu9CcrLLuJEtqRkJKlUlMeNT7D8WdPTIzjkiTLHzaiUQzmAZNYB6yZrEsrWorYXmpg1OGOPa72SmdaMbIb22BUFvaHrIh5mC6yrMyLkWhscSeJwJbnPeXMKz5jQ1ufmqyOa4hqU" width="624" height="277" /></span></p>
<p> </p>
<p><span style="font-size: 16px; margin-top: 3pt;">7. Fill in the form with the following:</span></p>
<ol><li><ol><li><span style="font-size: 16px; margin-bottom: 6pt;">Output process script:</span></li></ol>
</li></ol>
<p> </p>
<p><span style="font-size: 12px; font-family: Consolas; color: #006699;">if</span><span style="font-size: 12px; font-family: Consolas; color: #000000;"> (gs.nil(executionResult.error)) {   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000; background-color: #f6f6f6;">       activityOutput.result &#61; </span><span style="font-size: 12px; font-family: Consolas; color: #0000ff; background-color: #f6f6f6;">&#34;success&#34;</span><span style="font-size: 12px; font-family: Consolas; color: #000000; background-color: #f6f6f6;">;   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000;">         </span><span style="font-size: 12px; font-family: Consolas; color: #006699;">try</span><span style="font-size: 12px; font-family: Consolas; color: #000000;"> {   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000; background-color: #f6f6f6;">                     </span><span style="font-size: 12px; font-family: Consolas; color: #006699; background-color: #f6f6f6;">var</span><span style="font-size: 12px; font-family: Consolas; color: #000000; background-color: #f6f6f6;"> output &#61; executionResult.output;   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000;">                     </span><span style="font-size: 12px; font-family: Consolas; color: #006699;">if</span><span style="font-size: 12px; font-family: Consolas; color: #000000;"> (output !&#61; </span><span style="font-size: 12px; font-family: Consolas; color: #006699;">null</span><span style="font-size: 12px; font-family: Consolas; color: #000000;">) {   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000; background-color: #f6f6f6;">                               activityOutput.output &#61; output.substring(output.indexOf(</span><span style="font-size: 12px; font-family: Consolas; color: #0000ff; background-color: #f6f6f6;">&#39;&lt;Objects&gt;&#39;</span><span style="font-size: 12px; font-family: Consolas; color: #000000; background-color: #f6f6f6;">));     </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000;">                               gs.info(</span><span style="font-size: 12px; font-family: Consolas; color: #0000ff;">&#39;---&gt; activityOutput.output: &#39;</span><span style="font-size: 12px; font-family: Consolas; color: #000000;"> &#43; activityOutput.output);   </span><span style="font-size: 12px; font-family: Consolas; color: #008200;">// DEBUG</span><span style="font-size: 12px; font-family: Consolas; color: #000000;">   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000; background-color: #f6f6f6;">                     }   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000;">         }   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000; background-color: #f6f6f6;">         </span><span style="font-size: 12px; font-family: Consolas; color: #006699; background-color: #f6f6f6;">catch</span><span style="font-size: 12px; font-family: Consolas; color: #000000; background-color: #f6f6f6;">(err) {   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000;">                     gs.error(</span><span style="font-size: 12px; font-family: Consolas; color: #0000ff;">&#39;---&gt; ERROR: &#39;</span><span style="font-size: 12px; font-family: Consolas; color: #000000;"> &#43; err);   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000; background-color: #f6f6f6;">         }   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000;">}     </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #006699; background-color: #f6f6f6;">else</span><span style="font-size: 12px; font-family: Consolas; color: #000000; background-color: #f6f6f6;"> {   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000;">         activityOutput.result &#61; </span><span style="font-size: 12px; font-family: Consolas; color: #0000ff;">&#34;failure&#34;</span><span style="font-size: 12px; font-family: Consolas; color: #000000;">;   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000; background-color: #f6f6f6;">         activityOutput.errorMessage &#61; executionResult.errorMessages;   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000;">         gs.info(</span><span style="font-size: 12px; font-family: Consolas; color: #0000ff;">&#39;---&gt; activityOutput.errorMessage: &#39;</span><span style="font-size: 12px; font-family: Consolas; color: #000000;"> &#43; activityOutput.errorMessage);   </span><span style="font-size: 12px; font-family: Consolas; color: #008200;">// DEBUG</span><span style="font-size: 12px; font-family: Consolas; color: #000000;">   </span></p>
<p><span style="background-color: #f6f6f6; color: #000000; font-size: 12px; font-family: Consolas;">}   </span></p>
<p> </p>
<p style="padding-left: 30px;"><span><span style="font-size: 16px; font-family: Arial; color: #666666; font-weight: bold;">Note</span><span style="font-size: 16px; font-family: Arial; color: #666666;">: I cobbled this code together from the few examples I was able to find, and it seems to work well.   Also, note, that unlike the Run Command Activity, this needs to be only for handling and populating the results info.   I use this exact same code in almost all of my PowerShell and SSH custom activities.</span></span></p>
<p style="padding-left: 30px;"><br /><span style="color: #666666; font-size: 16px; font-family: Arial;"><span style="font-size: 10pt;">2.</span> Click the Continue to continue to the Conditions form.</span></p>
<p><br /><span style="color: #666666; font-size: 16px; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh4.googleusercontent.com/r-Byyx1rFzl8e6EzRNdpFZ9e0Ld6_Orakk1O-bK4sUzwKCf6Uy3AL8I7y43KSz6872s_PzWCCTGcgy6278L1HNHxRu7vk8Imlr9g5pLJgn30IjLHM9bBhXBaynA40pwL9LjjC_u6" width="624" height="297" /></span></p>
<p> </p>
<p><span style="font-size: 16px; margin-top: 3pt;">8. Add two condition fields:</span></p>
<ol><li><ol><li><span><span style="font-size: 16px; font-weight: bold;">Name</span><span style="font-size: 16px;">: Success</span></span>
<ol><li><span><span style="font-size: 16px; font-weight: bold;">Condition</span><span style="font-size: 16px;">:   activityOutput.result &#61;&#61; &#39;success&#39;</span></span></li><li><span><span style="font-size: 16px; font-weight: bold;">Order</span><span style="font-size: 16px;">: 100</span></span></li></ol>
</li><li><span><span style="font-size: 16px; font-weight: bold;">Name</span><span style="font-size: 16px;">: Failure</span></span>
<ol><li><span><span style="font-size: 16px; font-weight: bold;">Condition</span><span style="font-size: 16px;">: activityOutput.result !&#61; &#39;success&#39;</span></span></li><li><span><span style="font-size: 16px; font-weight: bold;">Order</span><span style="font-size: 16px;">: 200</span></span></li></ol>
</li><li><span style="font-size: 16px; margin-bottom: 6pt;">Click on the Save button to save the new Activity.</span></li></ol>
</li></ol>
<p><br /><span style="color: #666666; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh5.googleusercontent.com/nEmff8A8r6mWwm53Fu1laep5zQaj5g5iLGasWCmkNb3HY2Zt0qdZLsS-vHi2QtGxBJUL9bu6sWaLu5lNe4jgnKlSwM7SlNVxLi-y4xax2Agwc9clm2DCM-usvIpXtoTvhjIJJBuE" width="624" height="251" /></span></p>
<p> </p>
<p><span style="font-size: 16px; margin-top: 3pt;">9. In the Workflow Editor navigate to Custom -&gt; Global -&gt; SSH.   You will now see your new SSH Command Activity present.</span></p>
<p> </p>
<p><span style="font-size: 16px;">10. Go to the Run SSH Command Test Workflow.</span></p>
<p> </p>
<p><span style="font-size: 16px; margin-bottom: 3pt;">11. Navigate to Custom -&gt; Global -&gt; SSH and drag out a SSH Command activity.   The new Activity form will be displayed.</span></p>
<p><br /><span style="color: #666666; font-size: 16px; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh6.googleusercontent.com/ir6D3LB6zZr8NgJ2aT87snOvv5SGMXSGDPE_2IGDOcYE7xi8-8RvjC9iAd-iCWanLo5H2Ox9F2lQGJer5sOjwqfesiyXU8lf7Roex6WUpcY9mfm_muD88clneZt5q5omO_8nqbzr" width="403" height="340" /></span></p>
<p> </p>
<p><span style="font-size: 16px; margin-top: 3pt;">12. Drag a SSH Command Activity out onto the Editor.</span></p>
<p> </p>
<p><span style="font-size: 16px;">13. Fill in the form with the following:</span></p>
<ol><li><ol><li><span><span style="font-size: 16px; font-weight: bold;">Name</span><span style="font-size: 16px;">: Test Custom SSH Command</span></span></li><li><span><span style="font-size: 16px; font-weight: bold;">Hostname</span><span style="font-size: 16px;">: 10.10.10.248</span></span></li><li><span style="margin-bottom: 6pt;"><span style="font-size: 16px; font-weight: bold;">Command</span><span style="font-size: 16px;">: ls -l</span></span></li></ol>
</li></ol>
<p><br /><span style="color: #666666; font-size: 16px; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh5.googleusercontent.com/BHgLuoBY4z-LcPEf4r1X7foB2nabJA-4rHrUETHCN-DrSZr1EIahI_1Thc8IL-seB6VvHV3gENtLZCrs-EvfZE05MDX0Z0IYVL9wXJQ7uV__nqEe9_kIVMOPM-mSDJNwT7-yho7P" width="624" height="212" /></span></p>
<p> </p>
<p><span style="font-size: 16px; margin-top: 3pt; margin-bottom: 3pt;">14. Change the wiring up to look like this:</span></p>
<p><br /><span style="color: #666666; font-size: 16px; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh5.googleusercontent.com/ReEcH_c4M4dJ5vIizIPwHrwrE2Uam6CO9G013_nnas5dWXr1rPLDKQiHhdLXqDOhfX96P3u7hKolyi4AVEFLEbkrqpT4oCsoO_E6CCfOEuooL57moZDK99wB4zjfBjFF6iseEMvH" width="624" height="351" /></span></p>
<p><span style="font-size: 16px; margin-top: 3pt; margin-bottom: 3pt;">15. To hang onto our results for the Custom Activity we will need to add a Run Script Activity after the SSH Command; in the Success branch.   The after-activity results from your Custom Activity are available for coding in the Data tab.   </span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="margin-top: 3pt; margin-bottom: 3pt;"><span style="font-size: 16px; font-weight: bold;">NOTE</span><span style="font-size: 16px;">: It is important to understand that workflow.scratchpad (and other workflow variables) are not available inside the Custom Activity!</span></span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;"><strong>NOTE</strong>: The Data object number will likely be different than mine.</span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">a. <strong>Name</strong>: Handle Results</span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">b. <strong>Script</strong>:</span></p>
<p> </p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000;">gs.info(&#39;---&gt; previous_activity.result: &#39; &#43; data.get(4).result);   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000;">gs.info(&#39;---&gt; previous_activity.output: &#39; &#43; data.get(4).output);   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000;">//gs.info(&#39;---&gt; previous_activity.errorMessage: &#39; &#43; data.get(4).errorMessage);   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000;">   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000;">var results &#61; {output : &#39;&#39;, error : &#39;&#39;};   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000;">results.output &#61; data.get(4).output;   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000;">results.error &#61; data.get(4).errorMessage;   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000;">workflow.info(&#39;---&gt; [{1}] {0}&#39;, [results.output, &#39;WF:Run SSH Command Test&#39;]);   </span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #000000;">workflow.scratchpad.output &#61; results;   </span></p>
<p><br /> <span style="color: #666666; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh6.googleusercontent.com/sU5BOjdxEPFD5YEgo8iQz6wknv3u3cG5XAZf9JXpS0FmlBvVemHzgOXAJnWbDvEVvRAkdHlgoOtjKOi_ymnK6lRMY6vTvcnzVl3j318-IXilx9A6n_bduBVgWW0X1-jZhiOE-Ua6" width="624" height="260" /></span></p>
<p> </p>
<p><span style="color: #666666; font-size: 16px; font-family: Arial;">16. Click the Submit button to save your results.   Your workflow should now look something like this:</span></p>
<p> </p>
<p><span style="color: #666666; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh3.googleusercontent.com/DvgPyUmg-2bvZGCCu6qYRNoFKutqLVWK7JfY1nwZsV3zGAVQH1ROAS-Ui4olLzDo6EyZV4wiTXk_OS41IZIsq385DT5dhTKFfbcrN1xiiwl6huYsBNsXk8X1Hsn64rvHvzK7UXze" width="624" height="249" /></span></p>
<p><span style="font-size: 16px; margin-top: 3pt; margin-bottom: 3pt;">17. Run the workflow.   You should have a successful run that looks like this:</span></p>
<p><br /><span style="color: #666666; font-size: 16px; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh6.googleusercontent.com/OCgPCFKYSd8Y4U65tQJ3M7OZuWPIgs7XgfafyXAkh0CAPoHWo9OfqaGpY0L33bWs_0BI_CHUJCzgjKPYv25JcMPyXMIDv4hI6Nke29IT3G0ynOdndt5pDoEfmAYx6JBUsb7JDcxM" width="624" height="325" /></span></p>
<p> </p>
<p><span style="font-size: 16px; margin-top: 3pt;">18. From your instance navigate to System Logs -&gt; System Log -&gt; All.   The System Logs list view will be displayed.</span></p>
<p> </p>
<p><span style="font-size: 16px; margin-bottom: 3pt;">19. Filter for messages starting with &#34;---&gt;&#34;, and order by Created descending.   You should see an entry like the following:</span></p>
<p> </p>
<p> </p>
<p><span style="font-family: Arial; color: #666666;"><img class="jive-image" style="border-style: none;" src="https://lh5.googleusercontent.com/2HE-XJiQ2BqbDCrUoEIl9MAZG18SORnyi4RzPEVWayx-1tpeVaRhyiWkSDmM9kzm0S4j4J_6fa_5JM4JqoKeqpz5q_7vaxThIRunjj75MM21jWekNZINRBfgwNnqFoo3mp-xs6Gj" width="624" height="352" /></span></p>
<p> </p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #666666;">And you are done!   You now know what is involved with bringing back the Run Command Activity versus rolling your own Custom Run SSH Command Activity. I like the ease that the Run Command Activity gives you versus having to construct my own and have a separate Run Script Activity handle the results.   Additionally, a maintenance programmer would have to know how the new mechanism for extracting the Custom Activity results works (Data tab).   This will likely be different for each new Orchestration workflow you use the activity in.</span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #666666;">A warning here: by changing the status of the Run Command Activity you in essence now own it.   That is, it will be skipped by future updates to that instance.   This should not be a concern though as it was deprecated right?</span></p>
<p> </p>
<p>Enjoy!</p>
<p>Steven Bell.</p>
<p style="color: purple;"><strong>If you find this article helps you, don&#39;t forget to log in and &#34;like&#34; it!</strong></p>
<p style="color: purple;"><strong>Also, if you are not already, I would like to encourage you to become a member of our blog!</strong></p>
<p><strong><a href="community?id&#61;community_article&amp;sys_id&#61;330d6ea5dbd0dbc01dcaf3231f961965" rel="nofollow"><img class="image-1 jive-image" src="ae1b6ff1dbd81704ed6af3231f961962.iix" alt="Combined Logo Graphic_Operations.png" width="340" height="92" /></a></strong></p>
<p> </p>