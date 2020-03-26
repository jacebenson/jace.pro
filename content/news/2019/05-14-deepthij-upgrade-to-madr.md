---
title: "Upgrade to Madrid Patch  if you are getting an onSubmit script error when updating a catalog task"
date: 2019-05-13T22:06:59.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=08725747db1d3b4cd82ffb243996193a"
---
<p><span style="font-size: 12pt;"><strong>Issue</strong></span>: When saving a catalog task, form will not save and seeing below errors in the form -</p>
<p><span style="font-size: 12pt;"><strong>Error in the console log</strong></span>: Uncaught ReferenceError: g_ui_scripts is not defined</p>
<p>onSubmit script error: ReferenceError: g_ui_scripts is not defined:</p>
<p>function() {</p>
<p>saveAllSelected([ gel(id) ],[ gel(ref) ],&#39;,&#39;, &#39;\\&#39;,&#39;--None--&#39;);</p>
<p>}</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/8ef1df03db1d3b4cd82ffb24399619a6.iix" width="625" height="103" /></p>
<p><span style="font-size: 12pt;"><strong>Reason</strong><strong>: </strong></span>If a catalog item has &#34;Email&#34; or &#34;URL&#34; type variables then the related &#34;Catalog tasks&#34; cannot be updated if &#39;variable editor&#39; is added to the form (which displays the &#34;Email&#34; or &#34;URL&#34; type variables). When saving or updating the form you will get the console error.</p>
<p><strong><span style="font-size: 12pt;">Steps to Reproduce: </span></strong></p>
<p>1. Go to any catalog item and an &#34;Email&#34; or &#34;URL&#34; type variable<br />2. Go to the workflow that is attached to the catalog item and add a &#34;Catalog Task&#34; activity<br />3. Make sure to add the variables created in step 1, in the &#34;Add Variables&#34; section on the &#34;Catalog Task&#34; workflow activity<br />4. Order the item <br />5. Open the catalog task and make sure that &#34;Variable Editor&#34; is added to the form<br />6. Try to save the form</p>
<p>The form will not be saved and we can see this error in the console:<br />Uncaught ReferenceError: g_ui_scripts is not defined</p>
<p><strong><span style="font-size: 12pt;">Resolution:</span></strong> There is a Know error article for the issue. Please find the KE article here - <a href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0728538" rel="nofollow">KB0728538</a></p>
<p>Fix is available in Madrid Patch 2 and going forward.</p>
<p><span style="font-size: 12pt;"><strong>Workaround</strong></span> - Deactivate the validation script if using Email - deactivate &#34;sc_email&#34; and if using URL - then deactivate &#34;sc_url&#34; temporarily to work as expected. Activate them back to Madrid Patch 2 or higher. This is only valid if you don&#39;t use service portal.</p>
<p>Steps to deactivate - </p>
<p>Under system definitions &gt; validation scripts &gt; looks for &#34;sc_email&#34; or &#34;sc_url&#34; under type and deactivate.</p>