---
title: " ways to Recover Missing Reference fields after Madrid Upgrade"
date: 2019-07-26T02:05:50.000Z
authors: ["Roger Chew"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=a625c4b61bbeb304d01143f6fe4bcb14"
---
<p>If you’ve upgraded to Madrid recently, you may have experienced an issue where certain <a href="https://docs.servicenow.com/bundle/madrid-platform-administration/page/administer/field-administration/concept/c_ReferenceField.html" target="_blank" rel="noopener noreferrer nofollow">reference field</a> records (e.g. Configuration item, Department, Caller, Location) are missing in the reference lookup. In some cases, no records are shown at all. The behavior you are seeing is actually expected behavior as a result of enforcing the Company field dependency in Madrid.</p>
<h2>Reference fields are missing in the reference lookup after upgrade to Madrid</h2>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/08e4cddd1b0f3b08ada243f6fe4bcba4.iix" /></p>
<h3>3 ways to recover missing reference fields after Madrid upgrade</h3>
<p>If you are running into this issue, here are two ways you can resolve it depending on your requirements:</p>
<ol><li><strong>Remove the dependency:</strong><br />Go to the field&#39;s dictionary entry and blank out the <strong>Dependent</strong> field value under the <strong>Dependent Field</strong> form section.<br /><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/5aa5cd951b4f3b08ada243f6fe4bcb19.iix" /><br /><br /></li><li><strong>Fix the data:</strong><br />Update the data so that the <strong>Dependent</strong> field (for example, &#34;Company&#34;) has a value in the reference table record (example: Configuration Item, Location, User etc.), so that the reference field records are populated when clicking on its reference icon.<br /><br /><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/a6b58d951b4f3b08ada243f6fe4bcb23.iix" /><br /><br /></li><li><strong>Add a System Property:</strong><br />Add a system property called &#34;glide.ui.reference.use_hidden_dependent&#34; and set to &#34;false&#34;.</li></ol>
<p><strong>Additional Information</strong></p>
<ul><li><a href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0749870" rel="nofollow">KB0749870</a>: Reference fields (i.e. Configuration item, Department, Caller, Location) are not showing all records in the reference popup after upgrade to Madrid</li></ul>