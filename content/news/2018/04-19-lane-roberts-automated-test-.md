---
title: "Automated Test Framework FAQs How can I cancel a test properly"
date: 2018-04-19T02:01:21.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=3e0ce7a5dbe553447b337a9e0f961992"
---
<p><strong>Automated Test Framework FAQs: How can I cancel a test properly?</strong></p>
<p>Test designers and test admins can cancel a test execution by performing <strong>any</strong> of the following:</p>
<ul><li>On the &#34;Run Test&#34; progress viewer, click &#34;Cancel Pending Steps&#34;</li><li>On the &#34;Run Suite&#34; progress viewer, click &#34;Cancel Pending Steps&#34;</li><li>On the Test Result record, click &#34;Show Progress&#34; to open the progress viewer, and then click &#34;Cancel Pending Steps&#34;.</li><li>Delete the Test Result record - the test execution cancels when it can&#39;t find the record on which to update execution status.</li></ul>
<p><strong>NOTE:</strong> If you are impersonating another user that doesn&#39;t have access to these interfaces, then you will need to logout, and log back in, at this point you should be able to do <strong>any</strong> of the above options.</p>
<p>For additional information, please review <a href="https://docs.servicenow.com/bundle/kingston-application-development/page/administer/auto-test-framework/concept/atf-overview.html" target="_blank" rel="nofollow">Automated Test Framework</a> in the ServiceNow Product Documentation.</p>
<p><strong> </strong></p>