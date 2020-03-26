---
title: "MiniLab Orchestration  Calling a Script With a Custom Run PowerShell Activity  Part  HELSINKI"
date: 2016-09-13T07:55:29.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=263eae6ddbd0dbc01dcaf3231f9619e5"
---
<p><span style="color: #303030;"><span style="font-size: 12px; font-family: &#39;Times New Roman&#39;; font-weight: bold;">NOTE</span><span style="font-size: 12px; font-family: Arial;">: </span><span style="font-size: 12px; font-family: &#39;Times New Roman&#39;;">MY POSTINGS REFLECT MY OWN VIEWS AND DO NOT NECESSARILY REPRESENT THE VIEWS OF MY EMPLOYER, ACCENTURE.</span></span> </p>
<p><span style="color: #303030;"><span style="font-size: 16px; font-family: &#39;Times New Roman&#39;;">DIFFICULTY LEVEL:   </span><span style="font-size: 16px; font-family: &#39;Times New Roman&#39;; font-weight: bold; color: #c08e47;">INTERMEDIATE</span></span></p>
<p><span style="font-size: 12pt; font-family: &#39;Times New Roman&#39;; color: #666666;">RELEASE DEVELOPED IN:   </span><span style="font-size: 12pt; font-family: &#39;Times New Roman&#39;; color: darkblue; font-weight: bold;">HELSINKI</span></p>
<p><span style="color: #303030; font-family: &#39;Times New Roman&#39;; font-size: 16px;">Assumes basic knowledge and/or familiarity of Workflows and Orchestration in ServiceNow.</span></p>
<p><span style="font-family: Arial; color: #303030;">____________________________________________________________________________</span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #303030;">In my previous <span style="color: #3334ca;"><a style="font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, &#39;Lucida Grande&#39;, sans-serif; font-size: 14px; line-height: 1.5;" href="community/operations-management/orchestration/blog/2016/09/11/mini-lab-orchestration-bringing-back-the-run-powershell-activity" rel="nofollow"><span style="font-size: 16px; font-family: Arial; color: #3334ca; text-decoration: underline;">lab</span></a></span> I describe how to re-enable the Run Powershell Activity.   You will need to do Lab 1.1 (the Activity enable) in that article before beginning this one.</span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #303030;">This will be part 1 of a 2-part series.   Part 1 will describe how to use the un-deprecated Run Powershell Activity to execute a MID Server PowerShell script, and then to do a Custom PowerShell Activity that does the same thing with a set (non-variables, built-in) script name and parameters.   Part 2 will describe what is necessary to create a Custom PowerShell Activity that will take the script name and parameters as variables and then execute the given script.   Part 1 will be Intermediate level.   Part 2 will be Advanced level.   Part 2 will come closest to having the same functionality as the original Run Powershell Activity.</span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #303030;">Since you will be using both kinds of PowerShell Activities you will be able to see the contrast between the two methods.</span></p>
<p> </p>
<p> </p>
<p><span style="font-size: 18.6667px; font-family: Arial; color: #303030; font-weight: bold;">Pre-Requisites</span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #303030;">You will need to install your own local MID Server if you do not have one already.</span></p>
<p> </p>
<p style="margin-left: 36pt;"><span style="font-size: 16px; font-family: Arial; color: #2873ee; font-weight: bold;"><a href="https://docs.servicenow.com/bundle/geneva-it-operations-management/page/product/mid_server/task/t_InstallAMIDServerOnWindows.html" rel="nofollow"><span style="color: #2873ee;">Install a MID Server on Windows</span></a></span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #303030;">You will need work through lab 1.1 of the following article:</span></p>
<p> </p>
<p style="margin-left: 36pt;"><span style="font-size: 16px; font-family: Arial; color: #2873ee; font-weight: bold;"><a href="community/operations-management/orchestration/blog/2016/09/11/mini-lab-orchestration-bringing-back-the-run-powershell-activity" rel="nofollow"><span style="color: #2873ee;">Mini-Lab: Orchestration - Bringing Back the Run PowerShell Activity</span></a></span></p>
<p> </p>
<p> </p>
<p><span style="font-size: 18.6667px; font-family: Arial; color: #303030; font-weight: bold;">Lab 1.1: Calling a PowerShell Script with the Deprecated Run Powershell Activity</span></p>
<p> </p>
<p style="margin-top: 3pt; margin-bottom: 3pt;"><span style="font-size: 16px; font-family: Arial; color: #303030;">First we will need to create a simple PowerShell script that will take four parameters, and then echo them back.   This script will be used to test both the Run Powershell and Custom Activities for both articles.</span></p>
<p> </p>
<ol><li><span style="margin-top: 3pt; font-size: 12pt; color: #303030;">In your instance navigate to MID Server -&gt; Script Files.   The MID Server Script Files list view will be displayed.</span></li><li><span style="font-size: 12pt; color: #303030;">Click the New button.   The new Script File form will be displayed.</span></li><li><span style="font-size: 12pt; color: #303030;">Fill out the form with the following:</span>
<ol><li><span style="font-size: 12pt; color: #303030;"><strong>Name</strong>: echoback.ps1</span></li><li><span style="color: #303030;"><strong><span style="font-size: 12pt;">Description: Echo back all passed parameters</span></strong></span></li><li><span style="color: #303030;"><strong><span style="font-size: 12pt;">Parent: PowerShell</span></strong></span></li><li><span style="font-size: 12pt; color: #303030;"><strong>Active</strong>: checked</span></li><li><span style="color: #303030;"><strong><span style="font-size: 12pt;">Directory: </span></strong><span style="font-size: 12pt;">un-checked</span></span></li><li><span style="color: #303030;"><strong><span style="margin-bottom: 3pt; font-size: 12pt;">Script:</span></strong></span></li></ol>
</li></ol>
<p style="padding-left: 60px;"><br /><span style="color: #303030; font-size: 12pt; font-family: Arial; margin-top: 3pt; margin-bottom: 3pt;">Write-Host $parm1</span></p>
<p style="padding-left: 60px;"><span style="color: #303030; font-size: 12pt; font-family: Arial; margin-top: 3pt; margin-bottom: 3pt;">Write-Host $parm2</span></p>
<p style="padding-left: 60px;"><span style="color: #303030; font-size: 12pt; font-family: Arial; margin-top: 3pt; margin-bottom: 3pt;">Write-Host $parm3</span></p>
<p style="padding-left: 60px;"><span style="color: #303030; font-size: 12pt; font-family: Arial; margin-top: 3pt; margin-bottom: 3pt;">Write-Host $parm4</span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="margin-top: 3pt; margin-bottom: 3pt; font-size: 12pt; color: #303030;"><span style="font-size: 10pt;">7.</span> Click the Submit button to save your work.</span></p>
<p style="padding-left: 30px;"> </p>
<p><span style="color: #303030;"><span style="font-size: 16px; font-family: Arial; margin-top: 3pt; margin-bottom: 3pt;"><img class="jive-image" style="border-style: none;" src="https://lh5.googleusercontent.com/UkDNHSuBCR_Qd058hjR4kKkp2nKhfT-yVNhZEWUgjmqOdK5kZpeynr-DKkujkY7D8qiGCrntxXg-t5djeYUzOY_Fda1VzHUjXb37s_B8RxilYcDMyHspu4yNCbd-kkUJzCvUXnnr" width="624" height="265" /></span><br /></span></p>
<p> </p>
<p><span style="color: #303030;"><span style="font-size: 12pt;">4. From the workflow editor create a new workflow.</span><span style="margin-top: 3pt; font-size: 12pt;"><br /></span></span></p>
<ol start="4"><li><ol><li><span style="font-size: 12pt; color: #303030;"><span style="font-weight: bold;">Name</span>: PowerShell Script Test</span></li><li><span style="font-size: 12pt; color: #303030;"><span style="font-weight: bold;">Table</span>: Global</span></li><li><span style="font-size: 12pt; color: #303030;"><span style="font-weight: bold;">If condition matches</span>: -- none --</span></li><li><span style="font-size: 12pt; color: #303030;">Click the Submit button to continue.</span></li></ol>
</li></ol>
<p> </p>
<p><span style="font-size: 12pt; color: #303030;">5. In the editor navigate to Core -&gt; Orchestration - Deprecated, and drag out a Run PowerShell command between the Begin and End Activities.</span></p>
<ol start="4"><li><ol><li><span style="font-size: 12pt; color: #303030;"><span style="font-weight: bold;">Name</span>: Script Test</span></li><li><span style="font-size: 12pt; color: #303030;"><span style="font-weight: bold;">Hostname</span>: 127.0.0.1</span></li><li><span style="font-size: 12pt; color: #303030;"><span style="font-weight: bold;">Script file</span>: echoback.ps1</span></li><li><span style="margin-bottom: 3pt; font-size: 12pt; color: #303030;"><span style="font-weight: bold;">PowerShell script variables</span>:</span></li></ol>
</li></ol>
<p> </p>
<p style="margin-top: 3pt; margin-bottom: 3pt; padding-left: 90px;"><span style="font-size: 12pt; font-family: Arial, sans-serif; color: #303030; background: white;">{</span></p>
<p style="margin-top: 3pt; margin-bottom: 3pt; padding-left: 90px;"><span style="font-size: 12pt; font-family: Arial, sans-serif; color: #303030; background: white;">&#34;parm1&#34; :&#34;hey there&#34;,</span></p>
<p style="margin-top: 3pt; margin-bottom: 3pt; padding-left: 90px;"><span style="font-size: 12pt; font-family: Arial, sans-serif; color: #303030; background: white;">&#34;parm2&#34;:&#34;hi there&#34;,</span></p>
<p style="margin-top: 3pt; margin-bottom: 3pt; padding-left: 90px;"><span style="font-size: 12pt; font-family: Arial, sans-serif; color: #303030; background: white;">&#34;parm3&#34;:&#34;ho there&#34;,</span></p>
<p style="margin-top: 3pt; margin-bottom: 3pt; padding-left: 90px;"><span style="font-size: 12pt; font-family: Arial, sans-serif; color: #303030; background: white;">&#34;parm4&#34;:&#34;hello world&#34;</span></p>
<p style="margin-top: 3pt; margin-bottom: 3pt; padding-left: 90px;"><span style="font-size: 12pt; font-family: Arial, sans-serif; color: #303030; background: white;">}</span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="margin-top: 3pt; margin-bottom: 3pt; font-size: 12pt; color: #303030;"><span style="font-size: 10pt;">5.</span> <span style="font-weight: bold;">Sensor Script</span>:</span></p>
<p> </p>
<p style="margin-bottom: .0001pt;"><span style="color: #303030;"><span style="font-size: 9pt; font-family: Consolas; background: white;">var</span><span style="font-size: 9pt; font-family: Consolas; background: white;"> results &#61; {output : </span><span style="font-size: 9pt; font-family: Consolas; background: white;">&#39;&#39;, error : &#39;&#39;</span><span style="font-size: 9pt; font-family: Consolas; background: white;">};   </span></span></p>
<p><span style="color: #303030; font-family: Consolas; font-size: 9pt; line-height: 1.5; background-color: #f6f6f6;">results.output &#61; output;   </span><br /><span style="color: #303030; font-family: Consolas; font-size: 9pt; line-height: 1.5; background-color: white;">results.error &#61; error;   </span><br /><span style="color: #303030;"><span style="font-size: 9pt; font-family: Consolas; background: #f6f6f6;">workflow.info(</span><span style="font-size: 9pt; font-family: Consolas; background: #f6f6f6;">&#39;---&gt; [{1}] {0}&#39;, [results.output, &#39;WF:Powershell Test&#39;</span><span style="font-size: 9pt; font-family: Consolas; background: #f6f6f6;">]);   </span></span><br /><span style="color: #303030; font-family: Consolas; font-size: 9pt; line-height: 1.5; background-color: white;">workflow.scratchpad.output &#61; results; </span></p>
<p> </p>
<p> </p>
<p style="padding-left: 60px;"><span style="color: #303030;"><span><span style="font-size: 16px; font-family: Arial; font-weight: bold;">NOTE</span><span style="font-size: 16px; font-family: Arial;">: We will want to hang onto our results for the downstream activities so we need to store them off into a scratchpad variable. </span></span></span></p>
<p> </p>
<p><span style="margin-left: 36pt; color: #303030; font-size: 16px; font-family: Arial;"><span style="font-size: 10pt;">6.</span> Click on the Submit button to save your work.</span></p>
<p><span style="color: #303030;"><br /><span style="font-size: 16px; font-family: Arial; margin-top: 3pt; margin-bottom: 3pt;"><img class="jive-image" style="border-style: none;" src="https://lh5.googleusercontent.com/UlfNGw1gXIJh-VUY6Mce_5_C-NDSjsCIk5uhEBxrpUkO7yWVyVfnQKT_wxNAkBUn31Cwdp7byuXvmLiPLUvGN9LR8gfm1yz56Eg98kG2FKuy2W4LZcUyGeWoNlhtsi_R09rwAKw1" width="624" height="371" /></span></span></p>
<p><span style="color: #303030;"><br /><span style="margin-left: 36pt; font-size: 16px; font-family: Arial;">6. Your workflow should now look something like this:</span><br /></span></p>
<p> </p>
<p><span style="color: #303030; font-size: 16px; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh6.googleusercontent.com/l4SJwhZardz8rwxt_0-CV2USgYzjPvqHqBpnYZ2E0rSaHudjKEkp5amULSSpPrboU8CF0YQHWVIMt3dPbRChmMNqH7QjMlZAPotiBygKkkZniOZIoSFh6Da91kO789AlaAk_29RM" width="624" height="497" /></span></p>
<p><span style="color: #303030;"><br /><span style="margin-left: 36pt; font-size: 16px; font-family: Arial; margin-top: 3pt; margin-bottom: 3pt;">7. Click on the Start button to run the workflow.</span></span></p>
<p><span style="margin-left: 36pt; color: #303030; font-size: 16px; font-family: Arial; margin-top: 3pt; margin-bottom: 3pt;">8. After the workflow completes look at the context.   View the logs.   You should see the echoed back results displayed.</span></p>
<p><span style="color: #303030;"><br /><span style="font-size: 16px; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh6.googleusercontent.com/pegilmi4MQKPPE4JtzzMeL6rriUBkIpBVjz9WvhThkSQcuCSuGAW7QouAX02HBG8twOjYnj5RwaCqACon2tiE7xWxxEVV-NxzReBrDk-n7kW0KoI_yLWXikAXbp719ibH9OZMcxN" width="624" height="160" /></span></span></p>
<p><span style="color: #303030;"><br /><br /><span style="font-weight: bold; font-size: 18.6667px; font-family: Arial;">Lab 1.2: Creating a Custom Activity to Call a PowerShell Script</span><br /></span></p>
<p> </p>
<p><span style="color: #303030; font-size: 16px; font-family: Arial;">So straight out-of-the-box (OOB) with no scripting in the Custom Activity there is no way to pass in the script name as variables, nor the parameters as JSON (like with the Run Powershell Activity).   Period.   That is the reason for &#34;Part 2&#34; to this article.   It requires coding to get it all to work like the original Run Powershell Activity.   Here I will introduce you to the first step, and show you what you can do without a Pre-Processing script.   Most of what you do here will be the same as with my previous article (Lab 1.2).</span></p>
<p> </p>
<p><span style="color: #303030; font-size: 16px; font-family: Arial;">With this method you will need to create a new Custom Activity for every PowerShell script you plan on executing.   There is also no provision in the Custom Activity to allow a single piece of JSON to be used to feed into a single parameter; which does not exist.   Instead you will need to create a separate variable for each one you plan on passing in.   </span></p>
<p><span style="color: #303030;"><br /><span style="font-size: 16px; font-family: Arial;">As in my previous article we will use the same workflow so that we can show the two Activities side-by-side.</span> </span></p>
<p> </p>
<p><span style="margin-top: 3pt; font-size: 12pt; color: #303030;">1. In the Workflow Editor navigate to the Custom tab, and click the plus (&#34;&#43;&#34;) button to create a new Activity.   This will display the context menu where you can choose a custom Activity Template.</span></p>
<p> </p>
<p><span style="margin-bottom: 3pt; font-size: 12pt; color: #303030;">2. Choose the Powershell Template from the menu.   This will display the Activity Designer with the template form.</span></p>
<p><span style="color: #303030;"><br /><span style="font-size: 16px; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh6.googleusercontent.com/Kw_c4oIogu1WoVqromvuNeoSO6bRak4i6eN8ycZne0oN6nBMNBZ1l-1zuxEuhcFZfMP6I9-udx0upX_fTORxE9hVu8NARRK-pKKvQwi_oMlaobCi4hoZRcQQyn3i8CRAOJZ1RVmc" width="549" height="568" /></span> </span></p>
<p> </p>
<p> </p>
<p><span style="font-size: 12pt; color: #303030;">3. Fill out the form with the following:</span></p>
<ol><li><span style="margin-top: 6pt; font-size: 12pt; color: #303030;"><span style="font-weight: bold;">Name</span>: Echoback Script</span></li><li><span style="font-size: 12pt; color: #303030;"><span style="font-weight: bold;">Short Description</span>: Pass parameters, and echo them back</span></li><li><span style="font-size: 12pt; color: #303030;"><span style="font-weight: bold;">Accessible from</span>: All application scopes</span></li><li><span style="font-size: 12pt; color: #303030;"><span style="font-weight: bold;">Category</span>: PowerShell</span></li><li><span style="font-size: 12pt; color: #303030;"><span style="font-weight: bold;">Description</span>: Activity to run a custom PowerShell script with parameters and echo them back</span></li><li><span style="margin-bottom: 6pt; font-size: 12pt; color: #303030;">Click on the Continue button to display the Inputs form.</span></li></ol>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt; color: #303030;"><strong>NOTE</strong>: We will build this example Globally scoped.   If you want to put one into the actual OOB PowerShell folder then you will need to change the application scope to PowerShell, create the new Custom Activity, and clear out the Category.   Then it will appear in the PowerShell folder, and you can still use it in your Globally scoped workflows.</span></p>
<p style="padding-left: 30px;"> </p>
<p><span style="color: #303030;"><br /><span style="font-size: 16px; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh4.googleusercontent.com/O1MFdqm08lcptsXLcQgC1_7LPwvyFaF4KoQzAinjJSGvoyUfrd_2RZdd5Wu4mTm5Llc5GS-JVnm7WEmAeKEljvaVwFoD5Hd9NZEIn2G4XPqmlec9p2LvsUmXE7A-05dTfmLoMom3" width="624" height="245" /></span> </span></p>
<p> </p>
<p><span style="font-size: 12pt; color: #303030;">4. Add six fields</span></p>
<ol><li><span style="margin-top: 6pt; font-size: 12pt; color: #303030;"><span style="font-weight: bold;">Name</span>: Hostname, <span style="font-weight: bold;">Type</span>: String</span></li><li><span style="color: #303030;"><span style="font-size: 16px; font-weight: bold;">Name</span><span style="font-size: 16px;">: parm1, </span><span style="font-size: 16px; font-weight: bold;">Type</span><span style="font-size: 16px;">: String</span></span></li><li><span style="color: #303030;"><span style="font-size: 16px; font-weight: bold;">Name</span><span style="font-size: 16px;">: parm2, </span><span style="font-size: 16px; font-weight: bold;">Type</span><span style="font-size: 16px;">: String</span></span></li><li><span style="color: #303030;"><span style="font-size: 16px; font-weight: bold;">Name</span><span style="font-size: 16px;">: parm3, </span><span style="font-size: 16px; font-weight: bold;">Type</span><span style="font-size: 16px;">: String</span></span></li><li><span style="color: #303030;"><span style="font-size: 16px; font-weight: bold;">Name</span><span style="font-size: 16px;">: parm4, </span><span style="font-size: 16px; font-weight: bold;">Type</span><span style="font-size: 16px;">: String</span></span></li><li><span style="color: #303030;"><span style="font-size: 16px; font-weight: bold;">Name</span><span style="font-size: 16px;">: Credential, </span><span style="font-size: 16px; font-weight: bold;">Type</span><span style="font-size: 16px;">: String</span></span></li><li><span style="font-size: 16px; margin-bottom: 6pt; color: #303030;">Click on the Continue button to display the Execution Command form</span></li></ol>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt; color: #303030;">Are you starting to feel the pain here?   If not, just wait!   :-)</span></p>
<p> </p>
<p><span style="color: #303030;"><span style="font-size: 16px; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh6.googleusercontent.com/3LEXaKvDQc4_aVQ2XgldxJ_kYMP6gGsJQdTfZbASqrGZEYTgWKdh0-APPXORBJSHF4KPzmpLZc-nuMmasTXc8qgQtnPdM1ujzHf62Dpzq6lH5UWK3vJ3g5gyT9mx9tBeA9wyFsXI" width="624" height="308" /></span> </span></p>
<p> </p>
<p><span style="font-size: 12pt; color: #303030;">5. Fill in the form with the following:</span></p>
<ol><li><span style="font-size: 12pt; margin-top: 6pt; color: #303030;">Drag the Hostname field to the Target host field</span></li><li><span style="font-size: 12pt; color: #303030;"><span style="font-weight: bold;">Script Type:</span> MID Server script file</span></li><li><span style="margin-bottom: 6pt; font-size: 12pt; color: #303030;"><span style="font-weight: bold;">MID Server script file</span>:   echoback.ps1</span></li></ol>
<p><span style="font-size: 12pt; color: #303030;"><span style="margin-top: 6pt; margin-bottom: 6pt; margin-left: 72pt;"><span style="font-family: Arial; font-weight: bold;">NOTE</span><span style="font-family: Arial;">: This field that cannot directly be a variable.</span></span></span></p>
<ol start="4"><li><span style="font-size: 12pt; margin-top: 6pt; color: #303030;">Create four Powershell variables named parm1 through parm4</span></li><li><span style="font-size: 12pt; margin-top: 6pt; color: #303030;">Drag their respective input variables over to Value fields for each variable.</span></li><li><span style="font-size: 12pt; color: #303030;">Drag the Credential field to the Credential tag field</span></li><li><span style="font-size: 12pt; margin-bottom: 6pt; color: #303030;">Click the Continue button to continue to the Outputs form.</span></li></ol>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt; color: #303030;">How about now?   Any pain?   Don&#39;t worry I describe a better way in my next article.</span></p>
<p><span style="color: #303030;"><br /><span style="font-size: 12pt; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh6.googleusercontent.com/GCnmCtx5IV_gbf1ju8odOG5HuKt8lj7LCPTz8GhFKHqfOFtaGXov3sKbU539U9NEwdNRC8PULVYR8S5wJ4dOlHveRZoOafYk74eRkgxV2nAvzw2SOIdF3altDyupAziB0YkUj676" width="624" height="367" /></span> </span></p>
<p> </p>
<p><span style="font-size: 12pt; color: #303030;">6. Add three Output fields (from this point forward the creation of the new activity will be the same as in my previous article).</span></p>
<p> </p>
<ol><li><span style="font-size: 16px; margin-top: 6pt; color: #303030;"><strong>Name</strong>: result, <strong>Type</strong>: String</span></li><li><span style="font-size: 16px; color: #303030;"><strong>Name</strong>: output, <strong>Type</strong>: String</span></li><li><span style="font-size: 16px; color: #303030;"><strong>Name</strong>: errorMessage, <strong>Type</strong>: String</span></li><li><span style="font-size: 16px; margin-bottom: 6pt; color: #303030;">Click on the Go To Post-Processing button to continue.</span></li></ol>
<p><span style="color: #303030;"><br /><img class="image-1 jive-image" style="max-width: 1200px; max-height: 900px;" src="d752eb3ddb5c9f04e9737a9e0f961961.iix" /><br /></span></p>
<p> </p>
<p><span style="font-size: 12pt; color: #303030;">7. Fill in the form with the following:</span></p>
<p> </p>
<ol><li><span style="font-size: 12pt; margin-top: 6pt; margin-bottom: 6pt; color: #303030;">Output process script (seem familiar - best way to do this):</span></li></ol>
<p> </p>
<p><span style="color: #303030;"><span style="font-size: 9pt; font-family: Consolas; background: white;">if</span><span style="font-size: 9pt; font-family: Consolas; background: white;"> (gs.nil(executionResult.error)) {   </span></span></p>
<p style="margin-bottom: .0001pt;"><span style="color: #303030;"><span style="font-size: 9pt; font-family: Consolas; background: #f6f6f6;">     activityOutput.result &#61; </span><span style="font-size: 9pt; font-family: Consolas; background: #f6f6f6;">&#34;success&#34;</span><span style="font-size: 9pt; font-family: Consolas; background: #f6f6f6;">;   </span></span></p>
<p style="margin-bottom: .0001pt;"><span style="color: #303030;">       <span style="font-size: 9pt; font-family: Consolas; background: white;">try</span><span style="font-size: 9pt; font-family: Consolas; background: white;"> {   </span></span></p>
<p style="margin-bottom: .0001pt;"><span style="color: #303030;">                   <span style="font-size: 9pt; font-family: Consolas; background: #f6f6f6;">var</span><span style="font-size: 9pt; font-family: Consolas; background: #f6f6f6;"> output &#61; executionResult.output;   </span></span></p>
<p style="margin-bottom: .0001pt;"><span style="color: #303030;">                   <span style="font-size: 9pt; font-family: Consolas; background: white;">if</span><span style="font-size: 9pt; font-family: Consolas; background: white;"> (output !&#61; </span><span style="font-size: 9pt; font-family: Consolas; background: white;">null</span><span style="font-size: 9pt; font-family: Consolas; background: white;">) {   </span></span></p>
<p style="margin-bottom: .0001pt;"><span style="color: #303030;"><span style="font-size: 9pt; font-family: Consolas; background: #f6f6f6;">                             activityOutput.output &#61; output.substring(output.indexOf(</span><span style="font-size: 9pt; font-family: Consolas; background: #f6f6f6;">&#39;&lt;Objects&gt;&#39;</span><span style="font-size: 9pt; font-family: Consolas; background: #f6f6f6;">)); </span></span></p>
<p style="margin-bottom: .0001pt;"><span style="color: #303030;"><span style="font-size: 9pt; font-family: Consolas; background: white;">                             gs.info(</span><span style="font-size: 9pt; font-family: Consolas; background: white;">&#39;---&gt; activityOutput.output: &#39;</span><span style="font-size: 9pt; font-family: Consolas; background: white;"> &#43; activityOutput.output);   </span><span style="font-size: 9pt; font-family: Consolas; background: white;">// DEBUG</span>   </span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 9pt; font-family: Consolas; color: #303030; background: #f6f6f6;">                   } </span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 9pt; font-family: Consolas; color: #303030; background: white;">       }   </span></p>
<p style="margin-bottom: .0001pt;"><span style="color: #303030;">       <span style="font-size: 9pt; font-family: Consolas; background: #f6f6f6;">catch</span><span style="font-size: 9pt; font-family: Consolas; background: #f6f6f6;">(err) { </span></span></p>
<p style="margin-bottom: .0001pt;"><span style="color: #303030;"><span style="font-size: 9pt; font-family: Consolas; background: white;">                   gs.error(</span><span style="font-size: 9pt; font-family: Consolas; background: white;">&#39;---&gt; ERROR: &#39;</span><span style="font-size: 9pt; font-family: Consolas; background: white;"> &#43; err);   </span></span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 9pt; font-family: Consolas; color: #303030; background: #f6f6f6;">       }   </span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 9pt; font-family: Consolas; color: #303030; background: white;">}     </span></p>
<p style="margin-bottom: .0001pt;"><span style="color: #303030;"><span style="font-size: 9pt; font-family: Consolas; background: #f6f6f6;">else</span><span style="font-size: 9pt; font-family: Consolas; background: #f6f6f6;"> {   </span></span></p>
<p style="margin-bottom: .0001pt;"><span style="color: #303030;"><span style="font-size: 9pt; font-family: Consolas; background: white;">       activityOutput.result &#61; </span><span style="font-size: 9pt; font-family: Consolas; background: white;">&#34;failure&#34;</span><span style="font-size: 9pt; font-family: Consolas; background: white;">;   </span></span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 9pt; font-family: Consolas; color: #303030; background: #f6f6f6;">       activityOutput.errorMessage &#61; executionResult.errorMessages;   </span></p>
<p style="margin-bottom: .0001pt;"><span style="color: #303030;"><span style="font-size: 9pt; font-family: Consolas; background: white;">       gs.info(</span><span style="font-size: 9pt; font-family: Consolas; background: white;">&#39;---&gt; activityOutput.errorMessage: &#39;</span><span style="font-size: 9pt; font-family: Consolas; background: white;"> &#43; activityOutput.errorMessage);   </span><span style="font-size: 9pt; font-family: Consolas; background: white;">// DEBUG</span>   </span></p>
<p style="margin-bottom: .0001pt;"><span style="font-size: 9pt; font-family: Consolas; color: #303030; background: #f6f6f6;">}   </span></p>
<p> </p>
<p> </p>
<p><span style="color: #303030;"><img class="jive-image" style="border-style: none;" src="https://lh6.googleusercontent.com/222xyRS5033mEwaO6KkmqwIiYZm6YKIlffX1URodX46hKO3GdBycY0ZVZEes20lSXKAAEvqslkUnss6EtjyZrrklbttLroF9Z0dQIueuYUxOMIAxDIf65HsPvcfkuXMLwzFh4182" width="624" height="325" /></span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt; color: #303030;"><span style="font-size: 10pt;">2.</span> Click the Continue button to continue to the Conditions form.</span></p>
<p> </p>
<p><span style="color: #303030; font-size: 12pt; font-family: Arial;">8. Add two condition fields:</span></p>
<p> </p>
<ol><li><span style="margin-top: 6pt; font-size: 12pt; color: #303030;"><span style="font-weight: bold;">Name</span>: Success</span>
<ol><li><span style="font-size: 12pt; color: #303030;"><span style="font-weight: bold;">Condition</span>:   activityOutput.result &#61;&#61; &#39;success&#39;</span></li><li><span style="font-size: 12pt; color: #303030;"><span style="font-weight: bold;">Order</span>: 100</span></li></ol>
</li><li><span style="font-size: 12pt; color: #303030;"><span style="font-weight: bold;">Name</span>: Failure</span>
<ol><li><span style="font-size: 12pt; color: #303030;"><span style="font-weight: bold;">Condition</span>: activityOutput.result !&#61; &#39;success&#39;</span></li><li><span style="font-size: 12pt; color: #303030;"><span style="font-weight: bold;">Order</span>: 200</span></li></ol>
</li><li><span style="margin-bottom: 6pt; font-size: 12pt; color: #303030;">Click on the Save button to save the new Activity.</span></li></ol>
<p> </p>
<p><span style="font-size: 12pt; color: #303030;">9. In the Workflow Editor navigate to Custom -&gt; Global -&gt; PowerShell.   You will now see your new Echoback Script Activity present.</span></p>
<p> </p>
<p><span style="font-size: 12pt; color: #303030;">10. Go to the Powershell Script Test Workflow.</span></p>
<p> </p>
<p><span style="font-size: 12pt; color: #303030;">11. Navigate to Custom -&gt; Global -&gt; PowerShell and drag out a Echoback Script activity.   The new Activity form will be displayed.</span></p>
<p> </p>
<p><span style="color: #303030;"><br /><span style="font-size: 16px; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh3.googleusercontent.com/wM8FtBP93PIWR0ewfokVKk8Bp9_zA6lDG-hCf0JgGTivRt8VN41muagW86yR7EZz_9qJzQR_91laBiWPOFdvDdx5nB5HjFmR6KDHC5KXxPEdz-sofcxSMNjMMtmnPRe4sfEdAK7C" width="411" height="305" /></span> </span></p>
<p> </p>
<p><span style="font-size: 12pt; color: #303030;">12. Fill in the form with the following:</span></p>
<p> </p>
<ol><li><span style="margin-top: 6pt; font-size: 12pt; color: #303030;"><span style="font-weight: bold;">Name</span>: PowerShell Script Test</span></li><li><span style="font-size: 12pt; color: #303030;"><span style="font-weight: bold;">Hostname</span>: 127.0.0.1</span></li><li><span style="font-size: 12pt; color: #303030;"><span style="font-weight: bold;">Parm1</span>: test1</span></li><li><span style="font-size: 12pt; color: #303030;"><span style="font-weight: bold;">Parm2</span>: test2</span></li><li><span style="font-size: 12pt; color: #303030;"><span style="font-weight: bold;">Parm3</span>: test3</span></li><li><span style="font-size: 12pt; color: #303030;"><span style="font-weight: bold;">Parm4</span>: test4</span></li><li><span style="margin-bottom: 6pt; font-size: 12pt; color: #303030;">Click on Submit to save your work.</span></li></ol>
<p><span style="color: #303030;"><br /><span style="font-size: 16px; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh5.googleusercontent.com/iTlW1mZ_2t5OppDLgf7mkGhQ_N6zjDn7a4aAzfVFkh0UdECstE9GQhlB-NRD5TlIvO0_Wdmh_rHvjLTEjLeQyll52zImnSfwfbilcY85ywnBUKbOUUOXpyehDstzWrB3XARL0wd2" width="624" height="297" /></span> </span></p>
<p><span style="font-size: 12pt; color: #303030;">13. Change the wiring up to look like this:</span></p>
<p><span style="color: #303030;"> <br /><span style="font-size: 16px; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh5.googleusercontent.com/3fOeovMB8F_hOJYJl1qn6OFec_miH2wGK-X95N5FJR-J1mqrVaPScYtCwEQ38_gMW5awHPiRp-UXZ9WOjv2d_jrS-ParC9IpkK8IzZBBlBpBvVVXrXwbOnSA3VQgIlSxZ7cUZ11V" width="624" height="384" /></span> </span></p>
<p> </p>
<p><span style="font-size: 12pt; color: #303030;">14. To hang onto our results for the Custom Activity we will need to add a Run Script Activity after the PowerShell Command; in the Success branch.   The after-activity results from your Custom Activity are available for coding in the Data tab.   </span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt; color: #303030;"><strong>NOTE</strong>: It is important to understand that workflow.scratchpad (and other workflow variables) are not available inside the Custom Activity!</span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt; color: #303030;"><strong>NOTE</strong>: The Data object number will likely be different than mine.   It different for every Custom Activity you add to the form.</span></p>
<p style="padding-left: 30px;"> </p>
<ol><li><span style="margin-top: 6pt; color: #303030;"><span style="font-size: 16px; font-weight: bold;">Name: </span><span style="font-size: 16px;">Handle Results</span></span></li><li><span style="margin-bottom: 6pt; color: #303030;"><span style="font-size: 16px; font-weight: bold;">Script</span><span style="font-size: 16px;">:</span></span></li></ol>
<p> </p>
<p><span style="color: #303030;"><span style="font-size: 12px; font-family: Consolas;">gs.info(</span><span style="font-size: 12px; font-family: Consolas;">&#39;---&gt; previous_activity.result: &#39;</span><span style="font-size: 12px; font-family: Consolas;"> &#43; data.get(</span><span style="font-size: 12px; font-family: Consolas;">3</span><span style="font-size: 12px; font-family: Consolas;">).result);   </span></span></p>
<p><span style="color: #303030;"><span style="font-size: 12px; font-family: Consolas; background-color: #f6f6f6;">gs.info(</span><span style="font-size: 12px; font-family: Consolas; background-color: #f6f6f6;">&#39;---&gt; previous_activity.output: &#39;</span><span style="font-size: 12px; font-family: Consolas; background-color: #f6f6f6;"> &#43; data.get(</span><span style="font-size: 12px; font-family: Consolas; background-color: #f6f6f6;">3</span><span style="font-size: 12px; font-family: Consolas; background-color: #f6f6f6;">).output);   </span></span></p>
<p><span style="color: #303030;"><span style="font-size: 12px; font-family: Consolas;">//gs.info(&#39;---&gt; previous_activity.errorMessage: &#39; &#43; data.get(3).errorMessage);</span><span style="font-size: 12px; font-family: Consolas;">   </span></span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #303030; background-color: #f6f6f6;">   </span></p>
<p><span style="color: #303030;"><span style="font-size: 12px; font-family: Consolas;">var</span><span style="font-size: 12px; font-family: Consolas;"> results &#61; {output : </span><span style="font-size: 12px; font-family: Consolas;">&#39;&#39;, error : &#39;&#39;</span><span style="font-size: 12px; font-family: Consolas;">};   </span></span></p>
<p><span style="color: #303030;"><span style="font-size: 12px; font-family: Consolas; background-color: #f6f6f6;">results.output &#61; data.get(</span><span style="font-size: 12px; font-family: Consolas; background-color: #f6f6f6;">3</span><span style="font-size: 12px; font-family: Consolas; background-color: #f6f6f6;">).output;   </span></span></p>
<p><span style="color: #303030;"><span style="font-size: 12px; font-family: Consolas;">results.error &#61; data.get(</span><span style="font-size: 12px; font-family: Consolas;">3</span><span style="font-size: 12px; font-family: Consolas;">).errorMessage;   </span></span></p>
<p><span style="color: #303030;"><span style="font-size: 12px; font-family: Consolas; background-color: #f6f6f6;">workflow.info(</span><span style="font-size: 12px; font-family: Consolas; background-color: #f6f6f6;">&#39;---&gt; [{1}] {0}&#39;, [results.output, &#39;WF:Powershell Test&#39;</span><span style="font-size: 12px; font-family: Consolas; background-color: #f6f6f6;">]);   </span></span></p>
<p><span style="font-size: 12px; font-family: Consolas; color: #303030;">workflow.scratchpad.output &#61; results; </span></p>
<p> </p>
<p style="padding-left: 30px; font-family: arial, sans-serif; color: #666666;"><span style="color: #303030;">3. <span style="font-size: 12pt;">Click the Submit button to save your work.</span></span></p>
<p> </p>
<p><span style="font-family: Arial; color: #303030;"><img class="jive-image" style="border-style: none;" src="https://lh3.googleusercontent.com/EujwyZZh6NsmNjHTQZ5-RMZZxYZIwhPfZlFBiNbu1tk7bl1-kF35igKr7PqHCK4bh2-11RyKRnqqttGivkDRbj5cbV7gUt0QrQW2juk4XIpbvBowDd8ZcnVLsiL3n3ioZd2UBkwZ" width="624" height="283" /></span></p>
<p> </p>
<p style="margin-left: 36pt;"> </p>
<p> </p>
<p><span style="font-size: 12pt; color: #303030;">15. Your workflow should now look something like this:</span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #303030;"><img class="jive-image" style="border-style: none;" src="https://lh4.googleusercontent.com/8_1BKzPpuD0PW1FzZQ9uqVh1Bo0WuTwGq0HXzuIkzPXt_Q5o1Klp1i1qVYYNTWZ0pFkVUXYXyYni639ddBi9I3_mXpl0M-qLXIxsXzK7VFubQsDjwjowU1yw7vka5nCD-2_nOT55" width="624" height="284" /></span></p>
<p> </p>
<p><span style="font-size: 12pt; color: #303030;">16. Run the workflow.   You should have a successful run that looks like this:</span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #303030;"><img class="jive-image" style="border-style: none;" src="https://lh6.googleusercontent.com/1Cml64617w444SVAzj6G7b2OqUZZ0rLx6EftQTC9R3EiibsP3nT4-GnGtezAcdM6Z4VI6fwNqQY3BH2ryohFQ3D83O_Kxld_dFBeaYqVkaDXLMvwXidwqjRfuqsnxdp7PGU-nMzk" width="624" height="363" /></span></p>
<p> </p>
<p> </p>
<p><span style="font-size: 12pt; color: #303030;">17. <span style="font-family: Arial;">From your instance navigate to System Logs -&gt; System Log -&gt; All.   The System Logs list view will be displayed.</span></span></p>
<p> </p>
<p><span style="font-size: 12pt; color: #303030;">18. <span style="font-family: Arial;">Filter for messages starting with &#34;---&gt;&#34;, and order by Created descending.   You should see an entry like the following:</span></span></p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #303030;"><img class="jive-image" style="border-style: none;" src="https://lh5.googleusercontent.com/uwfbOch8xqcKmGqCt_Ll0-GejxAmxZlvHxK5T-ZQErai6Fpsk7B638NXUDNKxouPJiOCpkSubj1XZKfDX4dnhupbcnecPBNOUDCyR6oRK-HQjrhlF1KSL_2PRwxH4_5AANqgeoIC" width="624" height="257" /></span></p>
<p> </p>
<p> </p>
<p><span style="font-size: 16px; font-family: Arial; color: #303030;">With the Custom Activity the fact that you can&#39;t directly specify an input variable for the MID Server Script field (without coding), and that you can&#39;t pass in the parameters as a single JSON variable (without coding) make this method of Custom Activity creation limited to being used for very specific scripts and purposes.   While the Run PowerShell Activity gives you the flexibility to actually dynamically choose the script and parameters during run-time (OOB).   Both have their places.   In my opinion the latter should not have been deprecated.</span></p>
<p> </p>
<p><span style="color: #303030; font-family: Arial; font-size: 16px; line-height: 1.5;">In my next article I will describe how to modify the Custom PowerShell Activity using a Pre-Processing script to allow you to push the script name and parameters to their respective Input parameters.   This will make it act pretty much the same way as the Run Powershell Activity.   Turns out it isn&#39;t so bad; you just need to know what things are called.</span></p>
<p> </p>
<p><span style="color: #303030; font-family: Arial; font-size: 16px; line-height: 1.5;">BTW, in case you were interested, currently we, as developers, have no way of creating or modifying Custom Activity Templates.   These are located in the Element Providers (wf_element_provider) table, and they are not modifiable (nor can we even see the definition other than as an entry).   Hopefully in the future it will be possible to create our own!</span></p>
<p> </p>
<p>Enjoy!</p>
<p>Steven Bell.</p>
<p style="color: purple;"><strong>If you find this article helps you, don&#39;t forget to log in and &#34;like&#34; it!</strong></p>
<p style="color: purple;"><strong>Also, if you are not already, I would like to encourage you to become a member of our blog!</strong></p>
<p><strong><a href="community?id&#61;community_article&amp;sys_id&#61;330d6ea5dbd0dbc01dcaf3231f961965" rel="nofollow"><img class="image-1 jive-image" src="ae1b6ff1dbd81704ed6af3231f961962.iix" alt="Combined Logo Graphic_Operations.png" width="340" height="92" /></a></strong></p>
<p> </p>