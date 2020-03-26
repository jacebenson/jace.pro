---
title: "London Background Script Execution History and Rollback"
date: 2018-07-31T15:28:34.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=27804903db63530054250b55ca961938"
---
<p>Wow, what a great new capability this is!</p>
<p>Introduced in London we now have the ability to view script execution histories and even roll them back!</p>
<p>Have you ever run a background script, had it finished executing and clicked away before making a note of the result, sound familiar? Well now you can view the history of your script executions!</p>
<p>Even better tho, have you ever accidentally run a background script and then instantly regretted it? Maybe you had a typo in your addQuery and updated more records that you intended? Well now the script execution gives you the ability to roll back the script, including the changes it made to instance data.</p>
<p>Lets see it in action, with a simple script to update incident records,</p>
<p><img src="fbe36c27dbf7934067a72926ca961996.iix" width="600" /></p>
<p>After the script is run, we now have some additional output above the script:</p>
<p><img src="592f758bdbe7930054250b55ca9619bf.iix" width="600" /></p>
<p>If we click on the &#34;available here&#34; link at the top we are taken to the Script Execution History record that has been generated. These are stored in the sys_script_execution_history table whenever a background script is run with the &#34;Record for rollback?&#34; checkbox checked. We can also view a list of these script execution histories by typing sys_script_execution_history.list in the left navigation bar.</p>
<p>The Script Execution History record has lots of information on the script that was run:</p>
<p><img src="777e7507dbe7930054250b55ca9619ad.iix" width="600" /></p>
<p>Specifically we can see the start and finish time, the instance node, script that was run and the output. There&#39;s also some information on the number of SQL transactions, processing time etc. </p>
<p> </p>
<p>Now let&#39;s take a look at the list of open incidents on the instance, as you can see below, all the open incidents on the instance have been updated with the same short description - oops!</p>
<p>Even worse we can see that all of the Caller fields have been set to empty, this must be caused by some logic (probably a business rule) on the incident table. </p>
<p> <img src="5d8468abdbf7934067a72926ca961930.iix" width="600" /> </p>
<p> </p>
<p>So lets roll back this script by using the new rollback script execution functionality, to do this on the Script Execution History form there is a <strong>Rollback Script Execution...</strong> under the <strong>Related Links</strong> list.</p>
<p>Select this action and a new dialog will open asking you to confirm your choice, </p>
<p><img src="aa108e43db2b930054250b55ca961962.iix" /></p>
<p>Type <strong>yes</strong> in the dialog box and click ok.</p>
<p>A progress bar will appear and show you the progress of the rollback:</p>
<p><img src="b6b08a07db2b930054250b55ca961955.iix" width="600" /></p>
<p>When it&#39;s complete, check the list of records again to verify the rollback is successful,</p>
<p><img src="20e5a427db3b934067a72926ca961992.iix" width="600" /></p>
<p>Crucially, not only has the short description been returned to the previous value but the caller field has been re-populated. The rollback will reverse the whole transaction, not just the field that was actually changed in the script. </p>
<p> </p>
<p>Perfect! The rollback has worked and the records have been restored so we can be more careful next time when we run scripts :)</p>
<p> </p>
<p>Great, now we have a mechanism to audit, review and rollback the background scripts that are run.</p>
<p>Happy scripting.</p>
<p> </p>
<p><strong>Note</strong>: The Script Execution History [sys_script_execution_history] table has an Auto Flush rule configured on it meaning entries will be removed after 7 days. If you want to keep the history longer than that you can alter this rule in the sys_auto_flush table to a higher age.</p>