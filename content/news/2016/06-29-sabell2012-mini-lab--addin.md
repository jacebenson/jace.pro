---
title: "MiniLab Adding an LDAP Listener to Monitor AD in VirtualBox"
date: 2016-06-28T18:50:33.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=f0ecea65dbd0dbc01dcaf3231f96196c"
---
<p><span style="font-size: 12pt;"><span style="font-family: &#39;Times New Roman&#39;; color: #666666; font-weight: bold;">NOTE</span><span style="font-family: Arial; color: #666666;">: </span><span style="font-family: &#39;Times New Roman&#39;; color: #666666;">MY POSTINGS REFLECT MY OWN VIEWS AND DO NOT NECESSARILY REPRESENT THE VIEWS OF MY EMPLOYER, ACCENTURE. </span></span></p>
<p> </p>
<p><span style="font-family: &#39;Times New Roman&#39;; color: #666666; font-size: 12pt;">THE FOLLOWING ARTICLE IS A SUGGESTED METHOD FOR DEVELOPING AND TESTING ORCHESTRATION CODE, AND IS NOT AN ENDORSEMENT OF ANY PARTICULAR PRODUCT MENTIONED.</span></p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="font-family: &#39;Times New Roman&#39;; color: #666666;">DIFFICULTY LEVEL:   </span><span style="font-family: &#39;Times New Roman&#39;; color: #ff0000; font-weight: bold;">ADVANCED</span></span></p>
<p><span style="color: #666666; font-size: 12pt; font-family: &#39;Times New Roman&#39;;">Assumes knowledge and/or familiarity of several different areas in ServiceNow and Windows.</span></p>
<p><span style="font-family: Arial; color: #666666; font-size: 12pt;">____________________________________________________________________________</span></p>
<p> </p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000;">Now that we have Active Directory (AD) </span><a href="community?id&#61;community_blog&amp;sys_id&#61;186d6a29dbd0dbc01dcaf3231f96191f" rel="nofollow"><span style="font-family: Arial; color: #1155cc; text-decoration: underline;">installed on a VirtualBox</span></a><span style="font-family: Arial; color: #000000;"> server it is a straight-forward matter to set up LDAP and do a round-trip with Orchestration. After all, we need a way to refresh our ServiceNow User table with any updates, inserts, or deletes, right?   To do this ServiceNow has provided an LDAP listener mechanism.   </span></span></p>
<p> </p>
<p><span style="color: #000000; font-size: 12pt; font-family: Arial;">This article will <span style="text-decoration: underline;">not</span> cover all the in&#39;s-and-out&#39;s of installing LDAP, but only those topics necessary to get things to update from the VirtualBox AD to your Developer Instance User table.   This will give you the final step in the &#34;round-trip&#34; of creating a user using ServiceNow.</span></p>
<p> </p>
<p><span style="color: #000000; font-size: 12pt; font-family: Arial;">BTW, I created this lab without LDAPS or Certificates, but rather took the simpler path of just LDAP.   I leave the LDAPS implementation for you to conquer! </span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">What we will be doing in this article:   </span></p>
<p> </p>
<p style="margin-left: 36pt;"><span style="font-size: 12pt; font-family: Arial; color: #000000;">Orchestration Workflow -&gt; Active Directory -&gt; LDAP Listener -&gt; LDAP Import -&gt; Transform -&gt; ServiceNow User Table.</span></p>
<p> </p>
<p style="margin-left: 36pt;"><span style="font-size: 12pt; font-family: Arial; color: #000000;">The items marked in yellow are what has been completed so far.   The white is to-be-done.</span></p>
<p><span style="font-size: 12pt;"><br /><br /></span></p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/LeuLb6O8CFpzJcBgM0IFw1NpNIOBAO_X1LY7dRjsady_SK3b7XSMYGyPqKOmKV5W8ytJiNi9COuNadFxHIZUaFRLWohvSNEtnsWuPjSjI8eBhaCzWUghM4cin9-rWevWABRwfmoy" width="624" height="417" /></span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000; font-weight: bold;">Prerequisites:</span></p>
<p> </p>
<p><span style="font-size: 12pt; line-height: 1.5;">1. Do the previous two labs in this series for installing a VirtualBox Windows 2008 Server, and setting up Active Directory on it.</span></p>
<p> </p>
<ul><li><span style="font-size: 12pt;"><a style="line-height: 1.5;" href="community?id&#61;community_blog&amp;sys_id&#61;186d6a29dbd0dbc01dcaf3231f96191f" rel="nofollow"><span style="color: #266fc8; text-decoration: underline; background-color: #f8fbfe;">Mini-Lab: Orchestration - Creating your own Windows 2008 Server with VirtualBox</span></a></span></li><li><span style="font-size: 12pt;"><a style="line-height: 1.5;" href="community?id&#61;community_blog&amp;sys_id&#61;f60e2e2ddbd0dbc01dcaf3231f961933" rel="nofollow"><span style="color: #266fc8; background-color: #f8fbfe;">Mini-Lab: Creating your own AD Server with VirtualBox</span></a></span></li></ul>
<p> </p>
<p><span style="font-size: 12pt; line-height: 1.5;">2. Some familiarity with Windows 2008 Server.</span><br /><span style="font-size: 12pt; line-height: 1.5;">3. Familiarity with creating a Transform Map from scratch.</span><br /><span style="font-size: 12pt; line-height: 1.5;">4. Familiarity with User administration.</span><br /><span style="font-size: 12pt; line-height: 1.5;">5. Before starting you will need to spin up your VirtualBox Windows 2008 Server. It needs to be running for the following process to work.</span></p>
<h1><span style="font-size: 12pt;"><br /><br /><span style="color: #000000; font-weight: bold; font-family: Arial;">Lab 1.1: Creating the LDAP Listener</span></span></h1>
<p><span style="font-size: 12pt;"><br /><span style="color: #000000; font-family: Arial;">First we will create the LDAP listener.   </span></span></p>
<p><span style="font-size: 12pt;"><br /><span style="color: #000000; font-family: Arial;">This depends on a couple of factors:</span></span></p>
<p> </p>
<ul><li><span style="font-size: 12pt;">What is the name of your AD domain?</span></li><li><span style="font-size: 12pt;">What is the User ID and Password you will be using for Domain Admin?</span></li></ul>
<p><span style="font-size: 12pt;"><br /><span><span style="font-family: Arial; color: #000000; font-weight: bold;">Note</span><span style="font-family: Arial; color: #000000;">: The values listed below are specific to my laptop and the VirtualBox Windows 2008 Server I had created for the previous labs.</span></span><br /></span></p>
<p> </p>
<p><span style="font-size: 12pt; line-height: 1.5;">1. Navigate to System LDAP.   This will display the out-of-the-box (OOB) LDAP Application.</span></p>
<p> </p>
<p><span style="font-size: 12pt; line-height: 1.5;">2. Navigate to System LDAP -&gt; Create New Server.   This will display the New LDAP Server form.</span></p>
<p> </p>
<p><span style="font-size: 12pt; line-height: 1.5;">3. Fill out the form with the following:</span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">a.<span style="font-weight: bold;"> Type of LDAP Server</span>: Active Directory</span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">b. Server Name<span style="font-weight: 400;">:</span> <span style="font-weight: 400;">myForest LDAP Server</span> </span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">c.<span style="font-weight: bold;"> Server URL</span>:   ldap://192.168.43.6:389/ </span></p>
<p><span style="margin-left: 72pt; color: #000000; font-size: 12pt; font-family: Arial;">(this will depend on your implementation of the AD server in the labs from the last article.   Port 389 is for normal LDAP)</span></p>
<p> </p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">d. <span style="font-weight: bold;">Starting search directory</span>:   DC&#61;myforest,DC&#61;local </span></p>
<p><span style="margin-left: 36pt; color: #000000; text-indent: 36pt; font-size: 12pt; font-family: Arial;">(this will depend on how you set up AD in the labs from the last article)</span></p>
<p><span style="font-size: 12pt;"><br /><span style="margin-left: 36pt; color: #000000; font-family: Arial;">The finished form should look something like this:</span><br /><span style="margin-left: 36pt; color: #000000; font-family: Arial;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/4WLj18mALtks7_09nNaheBuWC2KphPUbq9xTiDYu2UdUqT0yhpFKKBxBjkdfdwbCsViJeVCyFOGjS8lzRYlv7d31KzFVscDIHuC1mPzYZTGYOdZzv4RzPFz8lYHGPqNXNSPCcsCm" width="624" height="652" /></span><br /></span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-family: Arial, sans-serif; color: black; font-size: 12pt;">e. Click on the Submit button to save your work. This will take you to the LDAP Server form for your new server. Continue filling in the form.</span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 60px;"><span style="font-family: Arial, sans-serif; color: black; font-size: 12pt;">i. <strong>Login distinguished name</strong>: myForest\Administrator</span></p>
<p style="padding-left: 90px;"><span style="color: black; font-family: Arial, sans-serif; text-indent: 0.5in; line-height: 1.5; font-size: 12pt;">(I used my domain admin I had created in the last lab)</span></p>
<p style="padding-left: 60px;"><span style="font-family: Arial, sans-serif; color: black; font-size: 12pt;">ii.<strong> Login password</strong>: ***********</span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="font-family: Arial, sans-serif; color: black; font-size: 12pt;">f. Right-click on the header and save your work.</span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="color: black; font-family: Arial, sans-serif; line-height: 1.5; font-size: 12pt;">Ignore any errors that may appear like (this is normal):</span></p>
<p style="margin-bottom: .0001pt;"> </p>
<p><span style="font-size: 12pt;"><span style="margin-left: 36pt; color: #000000; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh5.googleusercontent.com/JNN5TdkCESAEMgFB8-1dPJbz_wu_5L_Z1g5dAniqWeDcgD1A5RSlNbCNLLS6FeYk7Vbogee2Wo-uMryuIWS0gmhHshI-gaCWbzm7eqzpTJCUjSwI4pDASlcBYUH0yEBp_s4h1G7F" width="425" height="66" /></span><br /></span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-family: Arial, sans-serif; color: black; font-size: 12pt;">g. Scroll down to Related Links and make sure the Listener is in stopped state.   If not then click on the Stop Listener link.   You cannot fill in and save the MID Server field unless the Listener is off.</span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 60px;"><span style="font-family: Arial, sans-serif; color: black; font-size: 12pt;">i. Fill in the <strong>MID Server</strong>: StevesFabMid_Lap</span></p>
<p style="padding-left: 90px;"><span style="color: black; font-family: Arial, sans-serif; text-indent: 0.5in; line-height: 1.5; font-size: 12pt;">(this is my laptop Geneva MID Server.   You will need to use your own)</span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="font-family: Arial, sans-serif; color: black; font-size: 12pt;">h. Right-click on the form header and Save to save your work.</span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="font-family: Arial, sans-serif; color: black; font-size: 12pt;">i. Scroll down to the Related Links and click on the Start Listener link.   </span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="font-family: Arial, sans-serif; color: black; font-size: 12pt;">j. After the Listener is back up and running. Then click on the Test Connection link to verify that things are really ok. If all is good your LDAP Server URL should light with a green dot next to it, and the Operational Status column will display &#34;true&#34;.   Also, the Listener check box will be checked in the Advanced Options section. </span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="color: black; font-family: Arial, sans-serif; line-height: 1.5; font-size: 12pt;">Everything should look like this:</span></p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="margin-left: 36pt; color: #000000; font-family: Arial;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/w-DPhmSB10q70LjqBcVAjHQlyczQ3IUqVgJebyzzFO4Zn3rw2de2hBHU1dSuee2HGID0thz261yNXgFY5F0hHZUOwxsck3gfh2OY4weTC5Xw6o3HiN7woBG-4OJTubev58VaVDLG" width="624" height="573" /></span><br /></span></p>
<p> </p>
<p> </p>
<h1><span style="color: #000000; font-weight: bold; font-size: 12pt; font-family: Arial;">Lab 1.2: Creating the Custom LDAP OU Definition and Data Source</span></h1>
<p> </p>
<p><span style="color: #000000; font-family: Arial; font-size: 12pt; line-height: 1.5;">1. Scroll down to the bottom of the LDAP Server form.   You will observe in a related list that two LDAP OU Definitions have been created for you.   These should be Groups, and Users.   We will be adding a third to pull in the ForestAdmins OU users that we created in the last article.</span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">a. Click on the New button on the related list.   This will display the New LDAP OU Definition form.   Fill out the form with the following:</span></p>
<p> </p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;">i.<span style="font-weight: bold;"> Name</span>: ForestAdmins</span></p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;">ii.<span style="font-weight: bold;"> RDN</span>: OU&#61;ForestAdmins</span></p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;">iii.<span style="font-weight: bold;"> Query Field</span>: sAAMAccountName</span></p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;">iv.<span style="font-weight: bold;"> Filter</span>: (&amp;(objectClass&#61;person)(sn&#61;*))</span></p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;">v.<span style="font-weight: bold;"> Server</span>: Should already be auto-filled with your MID Server name.</span></p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;">vi.<span style="font-weight: bold;"> Table</span>: Should already be auto-filled with User [sys_user]</span></p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;">vii. Right-Click on the form head to Save your work.</span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="color: #000000; font-size: 12pt; font-family: Arial;">Your form should look like this:</span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;"><br /><span style="color: #000000; font-family: Arial;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/GNemsjEh9uTTP7zzxtVjmDqwl2Eg--dwX79hwJPp1pfcgrvvFo1ef2SIw5QatcXmPP9UGUnM6X5ahd5CRWjZnmQib497_L2PGw8C_iJt4kvwizK4l1lR32nE9LwRkWS_R3NHiy-5" width="624" height="371" /></span><br /></span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">b. At the bottom of the form under Related Links click on the Browse link.   After a moment this will display the LDAP Browse form.</span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">c. Click on the &#34;&#43;&#34; symbol next to the LDAP Nodes folder to expand the folder.</span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">d. Click on one of the displayed names to bring up that user&#39;s attributes.   If everything is right with the connection your form should look something like this:</span></p>
<p><span style="font-size: 12pt;"><br /><span style="color: #000000; font-family: Arial;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh5.googleusercontent.com/NeMuYACAa7nfZfrEiFxZFaGTALacGKLYGU-Z1nzQpSl253VCERey7nuvwAIVKI5isCfzUSF6Pn79li93EwiPJzmj4sEElgazdxpEuXXT0sh5D7f4cA71DJX2RgHSBOv4F_hIE9U8" width="624" height="524" /></span><br /><br /></span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">e. Back arrow on your browser a couple of times to return to the New LDAP OU Definition form.</span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">f. At the bottom of the form, in the Data Sources related list, click the New button. This will display the new Data Source form.</span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">g. Fill in the form with the following:</span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;">i.<strong> Name</strong>: ForestAdmins_OU_LDAP</span></p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;">ii.<strong> Import set table label</strong>: LDAP Forest Admins OU</span></p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;">iii.<strong> Import set table name</strong>: u_ldap_forest_admins_ou</span></p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;">iv.<strong> Type</strong>: LDAP</span></p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;">v.<strong> LDAP Target</strong>: ForestAdmins</span></p>
<p style="padding-left: 60px;"><span style="font-size: 12pt;">vi. Right click on the form header to save your work.</span></p>
<p style="padding-left: 30px;"> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">Your form should look something like this:</span></p>
<p><span style="font-size: 12pt;"><br /><span style="color: #000000; font-family: Arial;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/7GSTcIWyM9uEOL0zMsXttWJY_uHlwGpBN6llYlzDxWMQ1zulsBNYXNJ2uq-aMXN6rPETvlX92TaHwmLTV6vBB2zFgzoTDgV8ZZAKaevPPNG_TV-lHfgU_-40YyNCWLxMfCBVkAx2" width="624" height="371" /></span><br /></span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">h. Under related links click on the Load All Records link.   This will cause ServiceNow to create the Import set table and load any of the user records currently in the ForestAdmins OU.   When done it should look something like this (you will notice that I had three user records in my ForestAdmins OU.   You should see at least one record insert):</span></p>
<p><span style="font-size: 12pt;"><br /><span style="color: #000000; font-family: Arial;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh4.googleusercontent.com/9L3-pkShBsG9KbqP2S4PDoH4nmeDCFqDChdyuZ6ke4nFintzP_RZ6pl0o8nx5hNtfx98VsClfmEdDGvGgqw7axQYretP2NXUg3je48kaZbxM2GB3FYtDfsHT9s242WZTW6LjQf7n" width="624" height="321" /></span><br /></span></p>
<h1><span style="color: #000000; font-size: 12pt; font-family: Arial;">Lab 1.3: Creating the Custom LDAP Transform</span></h1>
<p> </p>
<p><span style="font-size: 12pt;">1. Click on the Create transform map link.   The new Transform Map form will be displayed.   </span></p>
<p> </p>
<p><span style="font-size: 12pt;">2. Fill in the form with the following:</span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">a. <strong>Name</strong>: ForestAdmins_OU_LDAP</span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">b. <strong>Target table</strong>: User [sys_user]</span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">c. <strong>Run script</strong>: Checked</span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">d. <strong>Script</strong> (I copied this from the User transform that was auto-created):</span></p>
<p> </p>
<p style="margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">(function transformRow(source, target, map, log, isUpdate) {</span></p>
<p> </p>
<p style="margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">                       //</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">                       // The manager coming in from LDAP is the DN value for the manager.   </span></p>
<p style="margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">                       // The line of code below will locate the manager that matches the</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">                       // DN value and set it into the target record. To ignore the manager </span></p>
<p style="margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">                       // from LDAP, remove or comment out the line: ldapUtils.setManager(source, target);</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">                       //</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">                       // NOTE: The &#39;manager&#39; field SHOULD NOT be mapped in the &#39;Field Maps&#39; related list</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">                       // if the manager is brought in through an LDAP import.   The &#39;ldapUtils&#39; scripts</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">                       // here and in the &#39;onComplete&#39; Transform Map will map this value automatically.</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">                       ldapUtils.setManager(source, target);</span></p>
<p> </p>
<p style="margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">                       // Set the source LDAP server into the target record</span></p>
<p style="margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">                       target.ldap_server &#61; source.sys_import_set.data_source.ldap_target.server;</span></p>
<p> </p>
<p style="margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">})(source, target, map, log, action&#61;&#61;&#61;&#34;update&#34;);</span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">e. Right-click on the form head and Save your work.</span></p>
<p style="text-align: left;"> </p>
<p style="text-align: left;"><span style="font-size: 12pt;">3. Under related links click on the Mapping Assist link.   This will display the Mapping Assist tool.</span></p>
<p style="text-align: left;"> </p>
<p style="text-align: left; padding-left: 30px;"><span style="font-size: 12pt;">a. Arrange your fields to look like this:</span></p>
<p><span style="font-size: 12pt;"><span style="color: #000000; font-family: Arial;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/V7xUutxxgjsL28BQVFBja1akCcoMObT91d-_Bz328-rU00sdNDVYbkGy-oF8wpnyjUy0uQ1RXxtulEoF7J08Qw9iulLapd_oSSVUV92-ZMic3Mco0ZxITP2zEekg9e0DuZvMypXS" width="624" height="229" /></span><br /></span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">b. Click update to save your work.</span></p>
<p> </p>
<p><span style="font-size: 12pt;">4. From the fields related list mark the user_name<span style="font-weight: bold;"> Coalesce</span> field to true.</span></p>
<p> </p>
<p><span style="font-size: 12pt;">5. Under Transform Scripts click the New button:</span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">a.<span style="font-weight: bold;"> When</span>: onStart</span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">b.<span style="font-weight: bold;"> Script</span>:</span></p>
<p style="padding-left: 30px;"> </p>
<p style="margin-left: .5in; margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">(function runTransformScript(source, map, log, target /*undefined onStart*/ ) {</span></p>
<p> </p>
<p style="margin-left: .5in; margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">                       gs.include(&#34;LDAPUtils&#34;);</span></p>
<p style="margin-left: .5in; margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">                       var ldapUtils &#61; new LDAPUtils();</span></p>
<p style="margin-left: .5in; margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">                       ldapUtils.setLog(log);</span></p>
<p> </p>
<p style="margin-left: .5in; margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">})(source, map, log, target);</span></p>
<p style="padding-left: 30px;"> </p>
<p><span style="font-size: 12pt;">6. Click the Submit button.</span></p>
<p> </p>
<p><span style="font-size: 12pt;">7. Click the New button again.</span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">a.<span style="font-weight: bold;"> When</span>: onComplete</span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">b.<span style="font-weight: bold;"> Script</span>:</span></p>
<p> </p>
<p style="margin-left: .5in; margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">(function runTransformScript(source, map, log, target /*undefined onStart*/ ) {</span></p>
<p> </p>
<p style="margin-left: .5in; margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">                       //</span></p>
<p style="margin-left: .5in; margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">                       // It is possible that the manager for a user did not exist in the database when</span></p>
<p style="margin-left: .5in; margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">                       // the user was processed and therefore we could not locate and set the manager field.</span></p>
<p style="margin-left: .5in; margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">                       // The processManagers call below will find all those records for which a manager could</span></p>
<p style="margin-left: .5in; margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">                       // not be found and attempt to locate the manager again.   This happens at the end of the</span></p>
<p style="margin-left: .5in; margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">                       // import and therefore all users should have been created and we should be able to</span></p>
<p style="margin-left: .5in; margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">                       // locate the manager at this point</span></p>
<p style="margin-left: .5in; margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">                       ldapUtils.processManagers();</span></p>
<p> </p>
<p style="margin-left: .5in; margin-bottom: .0001pt;"><span style="font-family: &#39;Arial&#39;,&#39;sans-serif&#39;; color: black;">})(source, map, log, target);</span></p>
<p> </p>
<p><span style="font-size: 12pt;">8. Click on the Submit button.</span></p>
<p> </p>
<p><span style="font-size: 12pt;">Your form should look something like this:</span></p>
<p><span style="font-size: 12pt;"><br /><span style="color: #000000; font-family: Arial;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh3.googleusercontent.com/eU6dEiMA4w6kD2XY-I4xaNUMuEEbsfpV6bND7hkSMUDKws4ueLcbs6vS5lnTRVdXdh6etAOtMSxIsbaOOIFzBtKn_4EDgjsB6aBCaFF0p_dRmPmraFCR5VFVh6hDACKF44PwbZ8I" width="624" height="697" /></span><br /></span></p>
<p><span style="font-size: 12pt;">9. From the Related Links click on the Transform link.   This will display the Specify Import set and Transform map.   The ForestAdmins_OU_LDAP - sys_user transform should already be present in the right-hand column.</span><span style="font-size: 12pt;"><br /></span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="color: black; font-size: 12pt; font-family: &#39;Arial&#39;,&#39;sans-serif&#39;;"><strong>NOTE</strong>: If you get an error like this:</span></p>
<p> </p>
<p><span style="margin-left: 36pt; color: #000000; font-size: 12pt; font-family: Arial;"><img class="jive-image" style="border-style: none;" src="https://lh4.googleusercontent.com/d39E9CQgCI6vSOAfFrCNUhYz6Ip2MwT9AL5n8MCvDWrWRssUnMrKsERVmpg53bkG5MzqcBeomTbqyqWFbwRkvSZ-UO1xtlCKcz49RDGA63gCIhgxMUXuQXVQbrHth0gmwTJ_TFe4" width="561" height="178" /></span></p>
<p style="padding-left: 30px;"><span style="font-family: Arial, sans-serif; color: black; font-size: 12pt;">You will need to go and reload your Data Source, and then run the Transform from that.</span></p>
<p style="padding-left: 30px;"> </p>
<p><span style="color: black; font-size: 12pt; font-family: &#39;Arial&#39;,&#39;sans-serif&#39;;">10. Click the Transform button.   You should get a successful transform (all green).   </span></p>
<p> </p>
<p><span style="color: black; font-size: 12pt; font-family: &#39;Arial&#39;,&#39;sans-serif&#39;;">11. Click on the Transform Histories link.   You should see your import record and it should show that one or more new records were inserted.   Go check your User table for the new records.</span></p>
<p> </p>
<p> </p>
<p> </p>
<h1><span style="color: #000000; font-size: 12pt; font-family: Arial;">Lab 1.4: Test Everything Using Orchestration</span></h1>
<p> </p>
<p><span style="color: #000000; font-family: Arial; font-size: 12pt; line-height: 1.5;">Okay now let&#39;s test the round-trip.</span></p>
<p> </p>
<p><span style="font-size: 12pt;">1. Navigate to Workflow -&gt; Workflow Editor.</span></p>
<p> </p>
<p><span style="font-size: 12pt;">2. Open the workflow we created in the last article: AD Server Tester</span></p>
<p> </p>
<p><span style="font-size: 12pt;">3. Open the Run Script Activity named Initialize.</span></p>
<p> </p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">a. Modify the workflow.scratchpad.firstname to be: R2D2</span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">b. Modify the workflow.scratchpad.lastname to be: Robot</span></p>
<p style="padding-left: 30px;"><span style="font-size: 12pt;">c. Click the Update button to save your work.</span></p>
<p> </p>
<p><span style="font-size: 12pt;">4. Run the workflow.</span></p>
<p><span style="font-size: 12pt;"><br /><span style="color: #000000; font-family: Arial;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/cbLrSQDZZy9nGRl7NuQkH9dCatzBlfTuLkod4h0Mf5AT0CEiIbczQ7ZgbKxtCbi7CSUks5w_BI7Ya5-psFgdwFLU8Qr4CBO73vTyPRWfPVyZznltaT8Fzdl8OK30AJII1l8hW847" width="624" height="391" /></span><br /></span></p>
<p><span style="font-size: 12pt; line-height: 1.5;">5. Now check the AD Server to see that R2 showed up where he should have.</span></p>
<p><span style="font-size: 12pt;"><br /><span style="color: #000000; font-family: Arial;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/tG1IVrwCElUP1b3E6pft7hQCvvC6zMxIy8LFqAVuwEBpRZlEgj7aAFMM0lqQ-uwgkdeY-7t1nJ2tDho4xmr_0RGpObP0oakWimaLjzFB0LDGMSzI-T2bj7GHx6gkTgB7qMgupgb7" width="507" height="245" /></span><br /></span></p>
<p><span style="font-size: 12pt; line-height: 1.5;">6. Now check your instance&#39;s User table to see if R2 is present there as well:</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;"><img class="jive-image" style="border-style: none; display: block; margin-left: auto; margin-right: auto;" src="https://lh6.googleusercontent.com/beSmpQzM8OEg76XQcx1yoSuqf2hqIDI2H2x8LvWpON_Dp3rLDktQI-Nq5ing1hvQ4YTrTBUEmr1YITSLhEGHO7Q3Jjo9S2UF76JX3bIJ8jWnWQn-A_c67Tys_feYPk3Hshk-Rhph" width="624" height="192" /></span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">Looks great!</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">So there you have it.   You can now do the round-trip of creating a user in AD from an Orchestration Workflow, and seeing that user being transmitted via LDAP and saved in your User table, and ALL using VirtualBox with your Development Instance!   </span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">Cool, huh?   :-)</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000; font-weight: bold;">Resources:</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">For setting up ServiceNow LDAP I used the following resources:</span></p>
<p> </p>
<p><span style="font-size: 12pt;"><a href="https://docs.servicenow.com/bundle/helsinki-servicenow-platform/page/integrate/ldap/concept/c_LDAPIntegration.html" rel="nofollow"><span style="font-family: Arial; color: #1155cc; text-decoration: underline;">Wiki: LDAP Integration</span></a></span></p>
<p><span style="font-size: 12pt;"><a href="https://docs.servicenow.com/bundle/helsinki-servicenow-platform/page/integrate/ldap/concept/c_LDAPIntegrationSetup.html" rel="nofollow"><span style="font-family: Arial; color: #1155cc; text-decoration: underline;">Wiki: LDAP Integration Setup</span></a><span style="font-family: Arial; color: #000000;"> â†&#xfffd; If you bump into any issues this is a great resource!</span></span></p>
<p><span style="font-size: 12pt;"><a href="https://docs.servicenow.com/bundle/helsinki-servicenow-platform/page/integrate/ldap/concept/c_LDAPIntegrationViaMIDServer.html" rel="nofollow"><span style="font-family: Arial; color: #1155cc; text-decoration: underline;">Wiki: LDAP Integration via MID Server</span></a></span></p>
<p><span style="font-size: 12pt;"><a href="https://docs.servicenow.com/bundle/helsinki-servicenow-platform/page/integrate/ldap/concept/c_LDAPIntegrationTroubleshooting.html" rel="nofollow"><span style="font-family: Arial; color: #1155cc; text-decoration: underline;">Wiki: LDAP Integration Troubleshooting</span></a></span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #000000;">Steven Bell</span></p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; color: #000000;"><img class="jive-image" style="border-style: none;" src="https://lh6.googleusercontent.com/SwFKxfEX3KchXMukdd7_0TrdWtj8w9s8dPXS7nIh6dQcZs9Eznde1nFiObmAnsNIuvMjkQJtVZ7klfcoMbHxVPQnqr-qcurEOBYmUbP-O0QIl5SxZ2diSOt9B_izm9fhLQO9oHdz" alt="accenture logo small.jpg" width="243" height="65" /></span><span style="font-family: Arial; color: #000000;"><img class="jive-image" style="border-style: none;" src="https://lh3.googleusercontent.com/ovByHGhqdaweLbJu9DwZROv_1qQc8ODcOOOxWAXwKs_74CQwUyzvKXrkictQg3u9LejNAx-ueZ7UI4dK9n8ic8FGAkwfcf2KSKn3dLXOrLpjtTZKAfMsFCFaj1ZAbyRzK8qyYWBH" width="135" height="48" /></span><span style="font-family: Arial; color: #000000;"><img class="jive-image" style="border-style: none;" src="https://lh4.googleusercontent.com/Ua_j85w2I4HwD73dTNYeaq_ysFKXw9vTNIKewCKASAyjk4hSgonXY5npjUv5SotMeOsnQDTZp2ZsE91qG7Fvb2KrkmRXTTHLcTJ2U05klyq7Hw9SRpnYJmBKpx9NffZFD2WyaAag" width="135" height="48" /></span></span></p>
<p> </p>
<p><span style="font-size: 12pt;"><span style="font-family: Arial; font-weight: bold;">For a list of all of my articles:   </span><a href="community?id&#61;community_blog&amp;sys_id&#61;289d6a69dbd0dbc01dcaf3231f9619f0" rel="nofollow"><span style="font-family: Arial; color: #266fc8; font-weight: bold;">Community Code Snippets: Articles List to Date</span></a></span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #eb7a3d;">Please Share, Like, Bookmark, Mark Helpful, or Comment this blog if you&#39;ve found it helpful or insightful.</span></p>
<p> </p>
<p><span style="font-size: 12pt; font-family: Arial; color: #eb7a3d;">Also, if you are not already, I would like to encourage you to become a member of our blog!</span></p>