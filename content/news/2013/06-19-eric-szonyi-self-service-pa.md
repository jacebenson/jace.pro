---
title: "Self Service Password Reset with Active Directory"
date: 2013-06-19T01:27:13.000Z
authors: ["eric.szonyi"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=db4da229dbd0dbc01dcaf3231f96196c"
---
<p>I needed to get a solution for self-service password reset for users authenticated by Active Direcrory. I enabled the following plugin:<br/><br/><a title="k-external-small" class="jive-link-external-small" href="http://wiki.servicenow.com/index.php?title=Self_Service_Password_Reset_plugin" rel="nofollow" target="_blank">http://wiki.servicenow.com/index.php?title=Self_Service_Password_Reset_plugin</a><br/><br/>This plugin only works for locally authenticated users. Fortunately adding AD functionality can be accomplished with just a few steps.<br/><br/>1. Create a workflow which leverages the Reset AD User Password activity (Requires Orchestration).<br/><br/>2. On the workflow select Edit Inputs from the settings menu and create two string variables (or similar): <br/> - one for the username ('u_username')<br/> - one for the password ('u_password').<br/><br/>3. Open the Reset AD User Password activity and assign the following values as variables:<br/> - Username = ${workflow.inputs.u_username}<br/> - Password = ${workflow.inputs.u_password}<br/><br/>4. Under System Definition &gt; Script includes, modify the PasswordResetAJAX script as follows:<br/><br/>Change the following section so it does not bypass LDAP accounts:<br/></p><pre class="plain" name="code">

                 /////     FROM     //////

                 //alert and exit if ldap account
                 if (usr.source.toString().startsWith('ldap')) {
                       msg = gs.getMessage("Use your network password to log into Service-now. If your network password does not work, contact your service desk.");
                       return "Error:" + msg;
                 }

                 /////     TO     //////

                 if (usr.source.toString().startsWith('ldap')) {
                       // msg = gs.getMessage("Use your network password to log into Service-now. If your network password does not work, contact your service desk.");
                       // return "Error:" + msg;
                       newpw = "";
                       var availablechars = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                       for(var x = 0; x &lt; 8; x++) {
                             randomNumber = Math.floor(Math.random() * availablechars.length);
                             newpw += availablechars[randomNumber];
                       }
                       //create the variables for calling the workdlow
                       var vars = {};
                       vars.u_username = userid;
                       vars.u_password = newpw;

                       //call the AD Password Reset workflow
                       var w = new Workflow();
                       var wfid = w.getWorkflowFromName("AD Password Reset");
                       w.startFlow(wfid, null, 'AD Password Reset', vars);
                       msg = gs.getMessage("Your password has been reset and will be emailed to the address in our system");
                       return "Success:" + msg;                                 
                 }
</pre><div style="display:none;"> </div><br/><br/><span>This is a simple solution to prove out the functionality. This will allow the password reset functionality to work for locally authenticated users and Active Directory users. Tailor the logic, temporary password generation logic and Password Reset Activity parameters as necessary to suit your needs.</span>