---
title: "Prioritizing Your Skipped Updates After an Upgrade"
date: 2016-06-14T22:04:24.000Z
authors: ["janiceg"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=dabc2e25dbd0dbc01dcaf3231f961988"
---
<p>The Helsinki release includes the <strong>Upgrade History</strong> module that <a title="" href="community?id&#61;community_blog&amp;sys_id&#61;ca7d2269dbd0dbc01dcaf3231f9619a8" rel="nofollow">tracks every upgrade</a> that has been made to an instance. You can use it to resolve conflicts and, thanks to a prefiltered list, <a title="ocs.servicenow.com/bundle/helsinki-release-notes/page/customer-support/task/t_ResolveASkippedUpdate.html" href="https://docs.servicenow.com/bundle/helsinki-release-notes/page/customer-support/task/t_ResolveASkippedUpdate.html" rel="nofollow">review skipped updates</a>. Use this <strong>Update Details</strong> list to determine whether you want to keep the customization or possibly revert to the base system when a handy new feature has been included in an upgrade that covers the reason you created the customization in the first place.</p>
<p> </p>
<p><img class="image-2 jive-image" style="width: 620px; height: 368px; display: block; margin-left: auto; margin-right: auto;" src="41cbec42dbd45f048c8ef4621f961942.iix" alt="resolve skipped update.jpg" /></p>
<p> </p>
<h2>The Upgrade History Module Reveals All</h2>
<p>The <strong>Upgrade History</strong> module shows you the version name of the previous .<span style="font-family: courier new,courier;">war</span> file and the new applied .<span style="font-family: courier new,courier;">war</span> file, and time stamps for when the upgrade process began and when it was completed. It also counts records by disposition:</p>
<p> </p>
<ul><li>Inserted, updated, or deleted</li><li>Skipped due to a customization</li><li>Skipped due to an error</li><li>Unchanged, and unchanged and customized if the component was customized but has not changed since the last release</li><li>Total (a count of all records that were affected by the upgrade)</li><li>Related list of every record that was affected by the upgrade (open a record to compare the base system and customized versions)</li></ul>
<p> </p>
<h2>Reviewing Skipped Updates After an Upgrade</h2>
<p><img class="image-1 jive-image" style="float: right;" src="bf9b410edb5413043eb27a9e0f9619ce.iix" alt="rope-skipping.jpg" align="right" /></p>
<p>If your instance includes customizations, part of your duties as the administrator is to resolve each skipped update after an upgrade. To prevent your customizations from being overwritten during system upgrades, the upgrade process skips (does not apply the update to) objects that have been customized.</p>
<p> </p>
<p>For this purpose, the <strong>Upgrade History</strong> module provides the very useful <strong>Upgrade Details</strong> related list, which displays each record that was skipped during the upgrade process. Use the list to review the reason for each skipped record in the list and then either merge your customization or revert your customization to the base system. For information on why an OOB feature was skipped,   see <a class="jive_macro jive_macro_blogpost" title="Upgrades and their relation to customizations: Updated for Geneva." href="community?id&#61;community_blog&amp;sys_id&#61;1dace225dbd0dbc01dcaf3231f96194a" rel="nofollow">Upgrades and their relation to customizations: Updated for Geneva.</a></p>
<p> </p>
<h3>What Does the List Look Like?</h3>
<p class="note">By default, the list is filtered by <strong>Disposition &#61; Skipped </strong>and<strong> Resolution Status &#61; Not Reviewed</strong>. The <span class="uicontrol">Priority</span> value is color-coded with red for P1 and green for P5 priority. Text field differences are also color-coded: the <strong><span class="uicontrol">File differences</span></strong> field displays a side-by-side comparison of the customization and the update version with deletions highlighted in red, additions in green, and changes in yellow.</p>
<p class="note"> </p>
<h3>What Can I Do With a Skipped Update?</h3>
<p>After reviewing the changes, you can choose from the actions listed in the following table.</p>
<p> </p>
<table border="1"><tbody><tr><td style="width: 40%; text-align: center;"><strong>   Desired Action</strong></td><td style="text-align: center;"><strong>   Process</strong></td></tr><tr><td>
<p>  Retain (keep) a customization with no changes</p>
</td><td>
<p>  Set <strong><span class="uicontrol">Resolution Status</span></strong> to <strong>Reviewed and Retained</strong>.</p>
</td></tr><tr><td>  Retain a customization by merging changes from the <br />   updated object</td><td>
<ol><li>Click the right-arrow button for the field.</li><li>Click a text box to view and edit the detailed differences.</li><li>When you have merged all appropriate fields, click <strong><span class="uicontrol">Merge</span></strong>.</li></ol>
<ul><li>The <strong><span class="uicontrol">Disposition</span></strong> changes from <strong>Skipped</strong> to <strong>Merged</strong>.</li><li>The <strong><span class="uicontrol">Resolution Status</span></strong> changes to <strong>Reviewed and Merged</strong>.</li></ul>
</td></tr><tr><td>
<p>  Revert a customized object to the updated version</p>
<p>  (that is, overwrite the customization)</p>
</td><td>
<p>  Click <strong><span class="uicontrol">Revert to Base System</span></strong>.</p>
<ul><li>The <strong><span class="uicontrol">Disposition</span></strong> changes from <strong>Skipped</strong> to <strong>Reverted</strong>.</li><li>The <strong><span class="uicontrol">Resolution Status</span></strong> changes to <strong>Reviewed and Reverted</strong>.<br /><br /></li></ul>
<p><strong>   Note</strong> — Reverting a customization is not tracked in update sets. You must perform</p>
<p>  the revert procedure on each instance where you want to revert your customizations.</p>
<p>  At any time after you revert a customization, you can click <strong>Reapply Changes</strong> to</p>
<p>  reapply the customization (undo the revert).</p>
</td></tr><tr><td>
<p>  Review the skip and perform no action on the object</p>
</td><td>  Set <strong><span class="uicontrol">Resolution Status</span></strong> to <strong>Reviewed</strong>.</td></tr></tbody></table>
<p> </p>
<p>Only skipped updates with a Resolution Status of &#34;Not Reviewed&#34; appear in the Upgrade Details related list. Any action you take that changes the Resolution Status to a value other than Not Reviewed removes the skipped update from list. If you have chosen to keep a customization and are having issues, you might want to check your variables.</p>