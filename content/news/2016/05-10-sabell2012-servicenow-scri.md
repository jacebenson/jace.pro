---
title: "ServiceNow Scripting  Calling a SubWorkflow Part I"
date: 2016-05-10T00:21:51.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=fdbd6aa9dbd0dbc01dcaf3231f9619ed"
---
<p style="font-family: arial, sans-serif; color: #666666;"><span style="font-style: inherit; font-family: inherit;"><strong>NOTE</strong></span>: ON APRIL 1, 2016 ACCENTURE COMPLETED THE ACQUISITION PROCESS OF CLOUDSHERPAS.   AT THAT TIME THE CLOUDSHERPAS BLOG SITES WERE DOWNED FOREVER.</p>
<p> </p>
<p style="font-family: arial, sans-serif; color: #666666;">THIS IS THE RE-PUBLICATION OF MY ARTICLE FROM <span style="font-style: inherit; font-family: inherit;"><strong>September 10, 2015</strong></span> ON THE CLOUDSHERPAS SERVICENOW SCRIPTING 101 BLOG.</p>
<p style="font-family: arial, sans-serif; color: #666666;">____________________________________________________________________________</p>
<p style="font-family: arial, sans-serif; color: #666666;"> </p>
<p style="font-family: arial, sans-serif; color: #666666;"> </p>
<p><span style="color: #000000; font-weight: normal; font-size: 12pt; line-height: 1.5; font-family: arial, helvetica, sans-serif;">If you&#39;re using ServiceNow Orchestration, I recommend introducing sub-workflows to &#34;build upon&#34; existing functionality and reduce workflow complexity. Of course this recommendation often leads to some questions. In fact, the question I&#39;m asked most frequently in Orchestration classes and beyond is: What is the best practice for calling a sub-workflow from a workflow in ServiceNow?</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif; color: #000000;">To answer these questions, I created a set of labs that you can use to learn about this with your Developer Instance and your local device (laptop or desktop). Part one will describe how to set up your own local MID Server and create the sub-workflow, and part two will review how to create the framework that will drive the sub-workflow.</span></p>
<p> </p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif; color: #666666; font-size: 14pt;">Prerequisites</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif; color: #000000;">For this lab to be effective, you will need:</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;">1. Familiarity with the ServiceNow Workflow Editor and ServiceNow Scripting</span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt; line-height: 1.5;">2. Your own </span><span style="color: #1155cc; text-decoration: underline;"><a style="font-family: arial, helvetica, sans-serif; font-size: 12pt; line-height: 1.5;" href="community?id&#61;community_blog&amp;sys_id&#61;a2bc2e25dbd0dbc01dcaf3231f9619e0" rel="nofollow">Personal Developer Instance of ServiceNow</a></span></p>
<p><span style="color: #1155cc; text-decoration: underline;">https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;a2bc2e25dbd0dbc01dcaf3231f9619e0</span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt; line-height: 1.5;">3. The </span><span style="color: #1155cc; text-decoration: underline;"><a style="font-family: arial, helvetica, sans-serif; font-size: 12pt; line-height: 1.5;" href="community?id&#61;community_blog&amp;sys_id&#61;919c2ee1dbd0dbc01dcaf3231f961930" rel="nofollow">Orchestration Plugin installed on your Personal Instance</a></span></p>
<p><span style="color: #1155cc; text-decoration: underline;">https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;919c2ee1dbd0dbc01dcaf3231f961930</span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt; line-height: 1.5;">4. A new Update Set to contain your changes set to current</span></p>
<p> </p>
<p><span style="color: #000000; font-size: 12pt; font-family: arial, helvetica, sans-serif;">All set? Let&#39;s get started then!</span></p>
<p> </p>
<p> </p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif; color: #666666; font-size: 14pt;">Lab 1.1: Set up a Local MID Server</span></p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><span><span style="color: #000000;">To start, you need to set up a local MID Server. For a step-by-step guide on how to do this, </span><span style="color: #1155cc; text-decoration: underline;"><a href="community/operations-management/discovery/blog/2016/04/18/servicenow-https:/community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;a2bc2e25dbd0dbc01dcaf3231f9619e0" rel="nofollow">click here</a></span><span style="color: #000000;">.</span></span> <span style="color: #000000;">For this lab, you&#39;ll need to configure the MID Server as follows:</span> </span></p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">1. Select tabbed forms (<a href="http://wiki.servicenow.com/index.php?title&#61;Tabbed_Forms#gsc.tab&#61;0" rel="nofollow"><span style="color: #1155cc; text-decoration: underline;">Eureka</span></a>,<a href="http://wiki.servicenow.com/index.php?title&#61;Navigation_and_the_User_Interface#gsc.tab&#61;0" rel="nofollow"><span style="color: #1155cc; text-decoration: underline;"> Fuji</span></a>, <a title="ocs.servicenow.com/" href="https://docs.servicenow.com/" rel="nofollow">Geneva</a>)</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;">2. Navigate to Orchestration &gt; MID Server Properties</span></p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><span style="color: #000000; text-align: center;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/E2yMzk230tERcWQIXxDYCGjQe56MYOpZbA_O1khz3GAnCAxyeqgRh8KJJFhxhir-tuQQtyYuNYCeOyDUFAH9DCdwRMcJkJdpClewztF3SIe5rPX_Bi7yZAebM6EuiKPA1lTVQqE" width="181" height="78" /></span><br /></span><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;">3. The default MID Server field should be filled in with your MID Server&#39;s name</span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><br /><span style="color: #000000; text-align: center;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/YGfiSJWqMGZ30AQGZz1Jm6OVggwWhn8PJXXLQm2Q3euYS7WvYPnygalIfUvy0YykV0sHcC-ydW8TuvGGmxHLq4wXwDeVSD77GcA8jDily6ZKawRv3iTmm3SoVmhfH0-U6IHwqMg" width="429" height="302" /></span><br /></span></p>
<p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;">4. Navigate to Orchestration &gt; MID Servers</span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><br /><span style="color: #000000; text-align: center;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/awxU9Q4q2EPNGJs3c10SYdLUGoJhtwPq-UkQWwOVDKnY1fuEZbWrEuaX_dnoSov_RJPgR0NVa3CS5QkDw5CjkAwwxNgqHgvVV9k3p8_hKTHWmNW2_HzTHWbng8iIcsJYv1hCDec" width="193" height="86" /></span><br /></span><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;">5. You should see a list of MID Servers pointed at your instance</span></p>
<p> </p>
<p><span style="font-size: 12pt;">6. <span style="font-family: arial, helvetica, sans-serif;">Click on the MID Server name link of the default MID Server from step 4</span></span></p>
<p> </p>
<p><span style="font-size: 12pt;">7. <span style="font-family: arial, helvetica, sans-serif;">The MID Server detail form will appear</span></span></p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">               a. Click on the Configuration Parameters Tab. If the mid.use_powershell parameter is not present, you will need to add it.</span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><br /><span style="margin-left: 36pt; color: #000000; text-align: center;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/1nVUk798LlnH4HmckB1NHmunb9Zqap1LXoz4fxVUA3vFBvQqeJV7Z7vUXT5O_au4aGNwFSpca-0QTJcKvKEht0FM3ljPcbcchlNOpkFqIYJwHF66QJOA7k7CQDXPhwxPFrrZbKg" width="536" height="273" /></span><br /> </span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;"><strong>NOTE</strong>: Since you will be working with your own MID Server, you won&#39;t need to set up Credentials. Since there is only one MID Server in use, you also won&#39;t need to set up capabilities.</span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><br /><span style="color: #000000;">Now that we have our environment set up, let&#39;s get to work!</span></span></p>
<p> </p>
<p> </p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif; color: #666666; font-size: 14pt;">Lab 1.2: The Sub-Workflow</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;">1. Create a new Workflow</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;">               a. Navigate to Orchestration &gt; Workflow Editor</span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><span style="margin-left: 36pt; color: #000000; text-align: center;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/zy-9thZIDSpLXev75neLVE-tvSCNiEZ_XR7quHVSgh7pHEr1qORyPsHZzFCLiR7Y1CTp-l9Dti_RzE99fAh3_hnD6e6XVMwVZZrRWZVHRgn8ziBairO5aYCsViJdz4PrhbJUoQE" width="218" height="247" /></span><br /></span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">b. <span style="font-family: arial, helvetica, sans-serif;">A new tab on your browser should open to the Workflow Welcome page</span></span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><br /><span style="margin-left: 36pt; color: #000000;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/EuNOFbK2_r0sZUXr8-9sxwBwGJgJgZsusG1Sox80EIfRleJYc8w5wEidJ6QJc6lUEmqpSYBJQeP1GIsQwZwyLnpccbCHg50IukWbhxVzLiuQDxjddu7d9L6miiGj2b1MXzfA1Js" width="558" height="427" /></span><br /><br /></span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">c. <span style="font-family: arial, helvetica, sans-serif;">To the far right, click on the Workflows tab, then click the plus button. This will display the New Workflows form.</span></span></p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><br /><span style="margin-left: 36pt; color: #000000; text-align: center;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/YUAiOYLXLV1rKgd2WhQ60iXyUlwvz4oMLgpdyyprw8OQ-jcnHQ6AiWf_aVlA4_Ae2UbKh04TSExi-x3q6jqYDY4flawxYWUCEdwtBGQYGQMDG_tqHAD6_Ti_i2SZCWhI5sSs_34" width="354" height="78" /></span><br /></span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">d. <span style="font-family: arial, helvetica, sans-serif;">Fill in the form with the following:</span></span></p>
<p style="padding-left: 60px;"><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><span style="font-weight: bold;">i.     Name</span>: Powershell Sub-Workflow</span></p>
<p style="padding-left: 60px;"><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><span style="font-weight: bold;">ii.   Table</span>: Global</span></p>
<p style="padding-left: 60px;"><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><span style="font-weight: bold;">iii. If condition matches</span>: -- None —</span></p>
<p style="padding-left: 60px;"><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;">iv.   Click the Submit button to create the new workflow</span></p>
<p style="padding-left: 30px;"> </p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><br /><span style="color: #000000; text-align: center;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/p6SskEdQ9ujz92jtA4PYDA1Dpv8YRE89m1_fyr22Tk8ThBeGFDQ9PVP06XDGrW7lamzHypd7413Mno4L_NhG61h4BDxcETfvCc7_PtKUXHrbDSpXwI6onIMaRUnPbpfR9dwvCsE" width="624" height="245" /></span><br /></span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">e. <span style="font-family: arial, helvetica, sans-serif;">Your Workflow Desktop should look like this:</span></span></p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><br /><span style="color: #000000; text-align: center;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/-uA8LQk7T_df_PVaQ14Pcx_2W2bILEX_ThQgRuVYa36jVfa2nzKuSVZfynWJQ5MX2DQv8E3XMsgHlTsQ1dt4U1q6UHzNI1Wur5aUO7ADbtbV2I5VnHPFHjciF0oyBHl3Whpu5cE" width="477" height="374" /></span><br /></span></p>
<p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;">2. Click on the triple bar in the upper left of the Desktop, then click on Edit Inputs. We will use this to define two test input variables for our workflow.</span></p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><br /><span style="text-align: center;"> <span style="color: #000000;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/4m9EPYEnoZEw1C5BgfluthdGxe8wKT6-_hhJbU_XwoHmwTU2MiKF3OYX0Wk5nFADgx0qAyzO4Ly8Xp4j1WHcY8e2NpPXSq2OzNS8FxKMpHwE689f1CI3S1GOKSmomOjS4HwtZDc" width="225" height="341" /></span></span> </span></p>
<p><span style="font-size: 12pt;">3. <span style="font-family: arial, helvetica, sans-serif;">Add two new input variables:</span></span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;"><span style="font-family: arial, helvetica, sans-serif; line-height: 1.5; font-weight: bold;">a. Name</span><span style="font-family: arial, helvetica, sans-serif; line-height: 1.5;">: Host IP</span></span></p>
<p style="padding-left: 90px;"> </p>
<p style="padding-left: 60px;"><span style="font-weight: bold;">i.     Column Name</span><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt; line-height: 1.5;">: u_host_ip</span></p>
<p style="padding-left: 60px;"><span style="font-weight: bold;">ii.   Type</span><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt; line-height: 1.5;">: String</span></p>
<p style="padding-left: 60px;"><span style="font-weight: bold;">iii. Order</span><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt; line-height: 1.5;">: 100</span></p>
<p style="padding-left: 60px;"><span style="font-weight: bold;">iv.   Length</span><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt; line-height: 1.5;">: 100</span></p>
<p style="padding-left: 60px;"><span style="font-weight: bold;">v.     Default Value</span><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt; line-height: 1.5;">: localhost</span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-weight: bold;">b. Name</span><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt; line-height: 1.5;">: Powershell Command</span></p>
<p style="padding-left: 90px;"> </p>
<p style="padding-left: 60px;"><span style="font-weight: bold;">i.     Column Name</span><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt; line-height: 1.5;">: u_powershell_command</span></p>
<p style="padding-left: 60px;"><span style="font-weight: bold;">ii.   Type</span><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt; line-height: 1.5;">: String</span></p>
<p style="padding-left: 60px;"><span style="font-weight: bold;">iii. Order</span><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt; line-height: 1.5;">: 200</span></p>
<p style="padding-left: 60px;"><span style="font-weight: bold;">iv.   Length</span><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt; line-height: 1.5;">: 100</span></p>
<p style="padding-left: 60px;"><span style="font-weight: bold;">v.     Default Value</span><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt; line-height: 1.5;">: ls</span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt; line-height: 1.5;">c. Close the Workflow Inputs form</span></p>
<p style="padding-left: 30px;"> </p>
<p><span style="font-family: arial, helvetica, sans-serif;"><br /><span style="color: #000000; text-align: center;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/NedIV_q2fiXkzTV5gKQ94PFH7ONqOqiQBgY5ZPMVuE8ziXpFFfKdLepGCXLcXJpSoY9yS367kuYyoGDsrMwfZAJmuyUpwxJuTtH2z8YsKEZGNAFrTtdPArN1lB_cFL5HaKAHPFo" width="624" height="171" /></span><br /></span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">4. On the far right, click on the Core tab to view the available Activities</span></p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><br /><span style="color: #000000; text-align: center;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/NasIigcb9h-STqnjvgo8MTgj_uCmEo3P1R7ANMkEvkGhMEM9F0aODTxdbBj4-IDhgGf7EZz6FaUq4Yt2rGkTPpK1EntUc2dBeyGSHaPmMxBWLr5GxUExKIRvJc-GMBvsf95CSd8" width="257" height="94" /></span><br /></span></p>
<p><span style="font-size: 12pt;">5. <span style="font-family: arial, helvetica, sans-serif;">At the bottom of the Core Activities list, expand the Utilities section</span></span></p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="font-family: arial, helvetica, sans-serif;">6. </span><span style="font-family: arial, helvetica, sans-serif;">Left click and drag a Run Script activity out onto the desktop</span></span><span style="font-family: arial, helvetica, sans-serif;"><br /><span style="color: #000000; text-align: center;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/ukS5yUts8F8STdcrc-8EBby35ZDcRc6bgUdilSTX4o5xDQugTq6UnCkfguQocBY5nJFjImTl0jbC8fgHFcyyb7c38mZ_DYY-JdSlVmK6Qe7PV7RVmwL3ctaPOo5rKXHvRurH7Ao" width="166" height="281" /></span><br /></span></p>
<p><span style="font-size: 12pt;">7. <span style="font-family: arial, helvetica, sans-serif;">Fill in the form as follows:</span></span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;"><span style="font-family: arial, helvetica, sans-serif; line-height: 1.5; font-weight: bold;">a. Name</span><span style="font-family: arial, helvetica, sans-serif; line-height: 1.5;">: Initialize</span></span><br /><span style="font-size: 12pt;"><span style="font-family: arial, helvetica, sans-serif; line-height: 1.5; font-weight: bold;">b. Script</span><span style="font-family: arial, helvetica, sans-serif; line-height: 1.5;">:</span></span></p>
<p style="padding-left: 30px;"> </p>
<p><span style="color: #000000; font-family: arial, helvetica, sans-serif;">workflow.scratchpad.hostname &#61; workflow.inputs.u_host_ip;</span></p>
<p><span style="color: #000000; font-family: arial, helvetica, sans-serif;">workflow.scratchpad.command &#61; workflow.inputs.u_powershell_command;</span></p>
<p><span style="color: #000000; font-family: arial, helvetica, sans-serif;">gs.info(&#39;---&gt; WF:PowerShell Sub-Workflow.initialize:\nFQDN: {0}, PS Command: {1}&#39;,</span></p>
<p style="padding-left: 30px;"><span style="color: #000000; font-family: arial, helvetica, sans-serif;">workflow.scratchpad.hostname,</span></p>
<p style="padding-left: 30px;"><span style="color: #000000; font-family: arial, helvetica, sans-serif;">workflow.scratchpad.command);</span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">c. <span style="font-family: arial, helvetica, sans-serif;">Click the update button to save</span></span></p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif;"><span style="text-align: center;"> <span style="color: #000000;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/BAgR8v5DiQVcOoP5AFbZwMhu7i7igBm0MaGrhsTtM18jSFGxV_sx-l4xzeqh3hNiGBaMGIrcC6UxuA9hAzQFqSozxNTa4YaRzs9dexBqykl08v6Hxodemgik4hfPBPMkHPskHzg" width="624" height="217" /></span></span> </span></p>
<p> </p>
<p><span style="font-size: 12pt;">8. <span style="font-family: arial, helvetica, sans-serif;">Wire up your workflow to look like the following diagram:</span></span></p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif;"><span style="text-align: center;"> <span style="color: #000000;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/un1l4ckmhGuFwarG9BcPQNZgGDgsRD0go5vnjl0K_1T1xQGSS6g0aGZGa6PDkBjjPldk5koUtCWBkEAxITQBMPFitEQdXdsq5Q-Fs22OwG-vJiAKYdK6R5cD0DQOhS1ZKLMvFRg" width="576" height="399" /></span></span> </span></p>
<p><span style="font-size: 12pt;">9. <span style="font-family: arial, helvetica, sans-serif;">Drag the Resolve DNS Name activity out of the Core Activities &gt; Orchestration tab. This activity takes a fully qualified domain name (like   xyz.servicenow.com) and returns the IP representing that name (note that IPs are the desired host designation when working in Orchestration).</span></span></p>
<p><span style="font-family: arial, helvetica, sans-serif;"><br /><span style="text-align: center;"> <span style="color: #000000;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/CCCMoYuCCFdXgkx00rL5rENixlgHsksNWkSkkrl9cURIdLbmmqGVKSJsvN5tOfDlrX7QG5G6YpPefHJ1e3noUGfoXoK3pDk-DbKTvzzeiBOwupOEU4iG1-H32cUzERfaoCkTtn4" width="210" height="273" /></span></span> </span></p>
<p> </p>
<p><span style="font-size: 12pt;">10. <span style="font-family: arial, helvetica, sans-serif;">Fill in the form as follows:</span></span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><span style="font-weight: bold;">a. Name</span>: Resolve FQDN to IP</span></p>
<p style="padding-left: 30px;"><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><span style="font-weight: bold;">b. FQDN</span>: ${workflow.scratchpad.hostname}</span></p>
<p style="padding-left: 30px;"><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">c. Click the update button to save</span></p>
<p><span style="font-family: arial, helvetica, sans-serif;"><br /><span style="text-align: center;"> <span style="color: #000000;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/qtlHC_4ns7W14pnGrdVBpDtGpJg0P3fM5lZQdisVckM8UpudMofRf1US9RG4v7Zwim94d_XKpAgXWxVTUtLO5yYOS6130Nao_V1d6UsRF9a3LBHsV8LAnAhtn66cVCKXeWO4py0" width="425" height="262" /></span></span> </span></p>
<p><span style="font-size: 12pt;">11. <span style="font-family: arial, helvetica, sans-serif;">Wire up your workflow to look like the following diagram:</span></span></p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif;"><span style="text-align: center;"><span style="color: #000000;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/Qs4AsW1RfVuPA-F8S4Z_F1uPPIHmh9bgE_8i8PhbxAmlg3iDEEXrx_o-SADM_j1ueYZhsa7aUcX2NbG3quy43O_JIOYB_8WaVyc-IwpjK9aj_REQrntVZM3SQ2wmx4fttDSIqG0" width="441" height="321" /></span> </span><br /></span></p>
<p><span style="font-size: 12pt;">12. <span style="font-family: arial, helvetica, sans-serif;">Drag out a Run Powershell activity from Core Activities &gt; Orchestration — PowerShell   </span></span></p>
<p><span style="font-family: arial, helvetica, sans-serif;"><br /><span style="text-align: center;"> <span style="color: #000000;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/alXl37HQZb4hqM3HrGnhnB20uhDmqhgoajX41pDDuIoM3-CINLZXSamME3gJpKog5NklboPm0ajR8lggRaz1js0r8kq5brnBkC204S9KmvEylv9fCtxPhhLoHktBuMYcszoktjc" width="254" height="399" /></span></span> </span></p>
<p><span style="font-size: 12pt;">13. <span style="font-family: arial, helvetica, sans-serif;">Fill in the form as follows:</span></span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;"><span style="font-family: arial, helvetica, sans-serif; line-height: 1.5; font-weight: bold;">a. Name</span><span style="font-family: arial, helvetica, sans-serif; line-height: 1.5;">: Get OS Details</span></span><br /><span style="font-size: 12pt;"><span style="font-family: arial, helvetica, sans-serif; line-height: 1.5; font-weight: bold;">b. Hostname</span><span style="font-family: arial, helvetica, sans-serif; line-height: 1.5;">: ${workflow.scratchpad.resolved_ip}</span></span><br /><span style="font-size: 12pt;"><span style="font-family: arial, helvetica, sans-serif; line-height: 1.5; font-weight: bold;">c. Command</span><span style="font-family: arial, helvetica, sans-serif; line-height: 1.5;">: ${workflow.scratchpad.command}</span></span><br /><span style="font-size: 12pt;"><span style="font-family: arial, helvetica, sans-serif; line-height: 1.5; font-weight: bold;">d. Script</span><span style="font-family: arial, helvetica, sans-serif; line-height: 1.5;">:</span></span></p>
<p> </p>
<p> </p>
<p><span style="color: #000000; font-family: arial, helvetica, sans-serif;">var results &#61; {output : &#39;&#39;, error : &#39;&#39;};</span></p>
<p><span style="color: #000000; font-family: arial, helvetica, sans-serif;">results.output &#61; output;</span></p>
<p><span style="color: #000000; font-family: arial, helvetica, sans-serif;">results.error &#61; error;</span></p>
<p><span style="color: #000000; font-family: arial, helvetica, sans-serif;">gs.log(&#39;---&gt; &#39; &#43; results.output, </span><span style="font-family: arial, helvetica, sans-serif; line-height: 1.5; color: #000000;">&#39;WF:PowerShell Sub-Workflow.Get OS Details&#39;);</span></p>
<p><span style="font-family: arial, helvetica, sans-serif; line-height: 1.5; color: #000000;">workflow.scratchpad.output &#61; results;</span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">e. <span style="font-family: arial, helvetica, sans-serif;">NOTE: The workflow.scratchpad.resolved_ip variable is auto-populated by a successful Resolve DNS Name activity</span></span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;">f. Click the update button to save </span></p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif;"><span> <span style="color: #000000;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/K4NWNAozMjWsWziLyYHaeVqm1LupUINyyTTmD6F2zqFZtn1lQEp8sVRcm8yoYi6akPXMBGD-GkFr2kFpGRHxB3RAJqScRsfkK3d9M2juMehn_uplQlMJ81LMomVN_8Uf8B2WcAw" width="624" height="427" /></span></span></span></p>
<p> </p>
<p> </p>
<p><span style="font-size: 12pt;">14. <span style="font-family: arial, helvetica, sans-serif;">Wire up your workflow to look like the following diagram:</span></span></p>
<p><span style="font-family: arial, helvetica, sans-serif;"><br /><span><span style="color: #000000;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/MPXKlAcKQo1fZmHxwGxI-1VZWuNVYOTcUd3k5ox__bEmBS3dDm7hT8dra6AY7g98wEqD-CtDl0Ub8olN4lbZk_EyuqNIV-3PYujC6x3oU-L2nG3fCdkaitb_fE-XvI_HO3W33tM" width="622" height="319" /></span> </span></span></p>
<p><span style="font-size: 12pt;">15. <span style="font-family: arial, helvetica, sans-serif;">Drag out another Run Script Activity. You can use this to manage any errors returned from the Resolve DNS Activity.</span></span></p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">16. Fill the the form as follows:</span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><span style="font-weight: bold;">a. Name</span>: Handle Error</span></p>
<p style="padding-left: 30px;"><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><span style="font-weight: bold;">b. Script</span>:</span></p>
<p> </p>
<p><span style="color: #000000; font-family: arial, helvetica, sans-serif;">var results &#61; {output : &#39;&#39;, error : &#39;&#39;};</span></p>
<p><span style="color: #000000; font-family: arial, helvetica, sans-serif;">results.error &#61; &#39;Failed to properly resolved DNS for: &#39; &#43; workflow.scratchpad.hostname;</span></p>
<p><span style="color: #000000; font-family: arial, helvetica, sans-serif;">workflow.scratchpad.output &#61; results;</span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">c. Click the update button to save</span></p>
<p><span style="font-family: arial, helvetica, sans-serif;"> <span style="color: #000000; text-align: center;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/WQiALMMB_03gV0fd1RBjpMYVzvn16NL-7t0hk_RAasw7l_nozAICBP-SoPgDCjFvXo2KxWTtp0V4hoWmjon9KO4fIdrzVomfUaswlyzDYDa8hzV8fE95zH2GossXZG2y6FRYBHs" width="624" height="275" /></span> </span></p>
<p> </p>
<p><span style="font-size: 12pt;">17. <span style="font-family: arial, helvetica, sans-serif;">Wire up your workflow to look like the following diagram:</span></span></p>
<p><span style="font-family: arial, helvetica, sans-serif;"><br /><span style="color: #000000; text-align: center;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/LUw_TINH9U5nZMyRW68jklN5JgG2HaF-4jV-lerUAgsU84FRuHBCk2_oiRNb-lu2opIrakdGNffB79DZXZnqa_ru-MSTdCJjb67dMwH1ktp7PUjUnnHkA3XY5Jgrg7KjElBVhPo" width="624" height="335" /></span> </span></p>
<p><span style="font-size: 12pt;">18. <span style="font-family: arial, helvetica, sans-serif;">Drag a Return Value Activity out of the Core Activities &gt; Utilities. This activity will return information back to a calling Workflow.</span></span></p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif;"><span style="text-align: center;"> <span style="color: #000000;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/JXHh9_l8IvrRH_RHgfm9u6DUIVSK8GsRzKerpzyjxVivuUYpkLF2sFcqaS31dJCQ2HvLZGyAsc3WY-sJXvb9TDfiXM0PnAwVOSGXTjo8tasXVw6W6Ajk3PyVmCTyii3fKTpcyhc" width="177" height="298" /></span></span> </span></p>
<p> </p>
<p><span style="font-size: 12pt;">19. <span style="font-family: arial, helvetica, sans-serif;">Fill in the form as follows:</span></span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><span style="font-weight: bold;">a. Name</span>: Handle Return</span></p>
<p style="padding-left: 30px;"><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><span style="font-weight: bold;">b. Value</span>:   ${workflow.scratchpad.output}</span></p>
<p style="padding-left: 30px;"><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;">c. Click on the update button to save</span></p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif;"><br /><span style="text-align: center;"> <span style="color: #000000;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/QB18z7UjRjP0gwHynfFGxMDbK60Yeaw_waA3Hw54buKtxx8dtbc-OHTAurd24nfL3oeWdaJleL_eVRxwle2AQ8fKlcvCgBxX3U9qW-LQqZIonPkOWY7Zr34Wx6oHApaOs-DdwYA" width="433" height="309" /></span></span> </span></p>
<p><span style="font-size: 12pt;">20. <span style="font-family: arial, helvetica, sans-serif;">Wire up your workflow to look like the following diagram:</span></span></p>
<p> </p>
<p><span style="color: #000000; font-size: 12pt; font-family: arial, helvetica, sans-serif; text-align: center;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/SiCFvNttA2v2UHigmQGj0Rl_dyV0LoywxMqV7bPf1b1hDW7AHbSdvrjTJADWN_VX4ACJiH_JnEsFLY1vU4VhmlaAZ1P7r1AhDNXIWtTPwNvno9HCSRMtsaZfy7Bm5K6ukTekR4E" width="557" height="463" /></span></p>
<p><span style="font-family: arial, helvetica, sans-serif; color: #666666; font-size: 14pt;">Testing</span></p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><span style="color: #000000;">Still with me? Good! Now it&#39;s time to test the workflow…</span><br /></span></p>
<p> </p>
<p><span style="font-size: 12pt;">1. <span style="font-family: arial, helvetica, sans-serif;">Click on the Run Workflow button in the upper right corner of the desktop to display the Start Workflow form</span></span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><br /><span> <span style="color: #000000;"><img class="jive-image" style="border-style: none;" src="https://lh3.googleusercontent.com/EywTPQJCk3CBfFCEajhBZVTRecamG2NzCElSZhZlvWskpLj05Pt2KYIB5kh_zMmrL3oKrwQQfKNpdnvIdMltWlrkLPPSzJIwF0UOp00eBWdl4_YH3J8xlRehfJpNYy1HUi_ViAY" width="164" height="63" /></span></span> </span></p>
<p> </p>
<p><span style="font-size: 12pt;">2. <span style="font-family: arial, helvetica, sans-serif;">Accept the defaults and click the start button</span></span></p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"> <span><span style="color: #000000;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/IZmvagSXzXkFbT4fvtWXuCNZJpC2vW8EuSENpjltZTp6L79cxI7caP99yiOpzj453Z_R5iVFPhqvXTWySYJvZLP5AeLy598Alw0kGHC3NDkFK_4QjQQgd4wJ-VDIBCg4dW-6XWA" width="617" height="266" /></span> </span><br /></span></p>
<p><span style="font-size: 12pt;">3. <span style="font-family: arial, helvetica, sans-serif;">The workflow will begin executing. The context form will display and you will be able to watch the workflow progress by clicking on the refresh command in the upper right corner of the form. If your setup is correct, you should see a successful path.</span></span></p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><br /><span style="color: #000000; text-align: center;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/Y0KT0HbfUiOeATg5sL8jsWxxhswuexyvC20UPWxPwUA1H5NFGq8xaNCnyo7MaAjzVszhLjCCiNCmrBsLdl-QO_OiLmkzXmhbeIoNmZD2SEZEXkZfjrKQMj4HJSjT2L4ypz0UbIo" width="624" height="315" /></span> </span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;">4. Upon completion, close the context window.</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;">5. From the ServiceNow browser tab, navigate to Orchestration &gt; Definition &gt; ECC Queue. Once the ECC Queue list view appears, sort by Created in descending order. </span></p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><span style="text-align: center;"> <span style="color: #000000;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/Ii1zzf0bSySBISsUMaT2gGYrcd6mtH1fotZcWmZg60qjCHtALeXIzT-T703gLYQEdDdSi-0bfcTTWeVwr3E4B_igKHRj83F2haD2eUFlXsZo63mrfM1HxYs7mVw_D6asZXriauE" width="624" height="103" /></span></span> </span></p>
<p> </p>
<p><span style="font-size: 12pt;">6. <span style="font-family: arial, helvetica, sans-serif;">Click on the entry &#34;Windows — Powershell (nodes — 3)&#34; with the Queue name of &#34;input.&#34; The Queue — Powershell form will display and should look like this:</span></span></p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"> <span><span style="color: #000000;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/IjGSf-ZEh-dHHYQSvfPTz9GHAi29p1p8nfqanVPVvs6fi2owf3NosuGg6WDIUXFUrI8qtcftOjaK5-YdtsusJBHsgf0MZLi9bh4jyBYBLvz7xNgi8hc9TI26stVtMfSz8nU3OhI" width="624" height="331" /></span> </span> </span></p>
<p><span style="font-size: 12pt;">7. <span style="font-family: arial, helvetica, sans-serif;">Close the form</span></span></p>
<p> </p>
<p><span style="font-size: 12pt;">8. <span style="font-family: arial, helvetica, sans-serif;">Navigate to System Log &gt; System Log &gt; All to display a list view of all log records for today and sort by Created in descending order</span></span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;">9. Search the Message Field for: ---&gt;</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;">10. You should see something similar to the list view below:</span></p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"> <span style="color: #000000;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/rvjoxpMBpPsuf8sMXdXDmTa-uObQl9XyV7sIbyPZ-cPH8wYiKiGfVvCcQUl_Nt7INYHLDejAbCBdBWd2mT2jWjwTdG0CiR_cxia-f3aOvJxfW7eNJj7u3QDOGyl0s479Rw4nxxY" width="624" height="225" /></span></span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif; color: #000000;">That completes the testing: You now have a working sub-workflow! </span></p>
<p> </p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif; color: #666666; font-size: 14pt;">What&#39;s Next?</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif; color: #000000;">In <a href="community?id&#61;community_blog&amp;sys_id&#61;11ecea65dbd0dbc01dcaf3231f9619f4" rel="nofollow">part two</a> of this post, I&#39;ll review how to call this sub-workflow from another workflow and how to interpret the results.</span></p>
<p> </p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 12pt;"><span style="color: #000000;">In the meantime, I recommend reviewing these </span><a href="community?id&#61;community_blog&amp;sys_id&#61;861d22e5dbd0dbc01dcaf3231f961973" rel="nofollow"><span style="color: #1155cc; text-decoration: underline;">Orchestration best practices</span></a><span style="color: #000000;">. You can also </span><a href="https://share.servicenow.com/app.do#/detailV2/ea2852e055d246007c3953512138ef2f/overview" rel="nofollow"><span style="color: #1155cc; text-decoration: underline;">check out the code for this lab on ServiceNow Share</span></a><span style="color: #000000;">. </span></span></p>
<p> </p>
<p> </p>
<p><span style="color: #666666; font-family: arial, helvetica, sans-serif; font-size: 12pt;">Steven Bell</span></p>
<p> </p>
<p><span style="color: purple; font-weight: inherit; font-size: 12pt; font-family: arial, helvetica, sans-serif; font-style: inherit;"><strong>If you find this article helps you, don&#39;t forget to log in and &#34;like&#34; it!</strong></span></p>
<p> </p>
<p><span style="color: purple; font-weight: inherit; font-size: 12pt; font-family: arial, helvetica, sans-serif; font-style: inherit;"><strong>Also, if you are not already, I would like to encourage you to become a member of our blog!</strong></span></p>
<p> </p>
<p><span style="color: purple; font-weight: inherit; font-size: 12pt; font-family: arial, helvetica, sans-serif; font-style: inherit;"><strong><img class="image-1 jive-image" style="width: auto; height: auto;" src="780eaccadb9857049c9ffb651f96192d.iix" alt="accenture technology logo.png" /><img class="image-2 jive-image" style="width: auto; height: auto;" src="0caa40c6db5017041dcaf3231f961939.iix" alt="sn-community-mvp.png" /></strong></span></p>
<p style="font-weight: inherit; font-style: inherit; font-family: inherit; color: #666666;"> </p>
<p style="font-weight: inherit; font-style: inherit; font-family: inherit; color: #666666;"><strong>For a list of all of my articles:   <a style="font-size: 15px; font-family: arial, sans-serif; color: #266fc8; background-color: #f8fbfe;" href="community?id&#61;community_blog&amp;sys_id&#61;289d6a69dbd0dbc01dcaf3231f9619f0" rel="nofollow">Community Code Snippets: Articles List to Date</a></strong></p>