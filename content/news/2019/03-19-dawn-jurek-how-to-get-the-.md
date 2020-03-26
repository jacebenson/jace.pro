---
title: "How to Get the Latest Security Operations and GRC Applications"
date: 2019-03-19T03:08:30.000Z
authors: ["Dawn Jurek"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=fa6eff4ddb58b3841cd8a345ca961918"
---
<p>Starting with Madrid, you can get Security Operations and Governance, Risk, and Compliance (GRC) applications, integrations and content right from the ServiceNow Store! This means that you can get new features for these applications to your instance outside of the normal family release schedule.</p>
<p>In this installment of our <a title="NOWSupport best practices series list" href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" target="_blank" rel="noopener noreferrer nofollow">NOWSupport best practices series list</a>, we show you how to get the applications you need in our video below, and address some additional questions you may have.</p>
<p><iframe id="video_tinymce" style="width: 100%; height: 480px;" src="https://www.youtube.com/embed/UUnaAQJyZrY"></iframe></p>
<h3>Frequently Asked Questions</h3>
<h4>I installed an app from the store but didn&#39;t install demo data. How do I enable it later?</h4>
<p>You need to run a one line background script, with the application scope as the variable:</p>
<pre style="padding-left: 30px;">GlidePluginManager.loadDemoData(&#39;<em>application_scope</em>&#39;); </pre>
<p>For example, in the following code the variable <em>sn_vul</em> is the application scope for Vulnerability Response. Running this code will install Vulnerability Response demo data.</p>
<pre style="padding-left: 30px;">GlidePluginManager.loadDemoData(&#39;sn_vul&#39;); </pre>
<p><strong>To run the script:</strong></p>
<ol><li>As System Administrator [admin], navigate to <strong>System Definition &gt;</strong> <strong>Scripts &gt; Background</strong>.<strong><br /></strong></li><li>Copy the following command in the Run script window:<br />
<pre>GlidePluginManager.loadDemoData(&#39;<em>&lt;application scope&gt;</em>&#39;);</pre>
</li><li>Click <strong>Run script</strong> in scope <strong>global</strong>. </li></ol>
<p> </p>
<p><strong>To find the application scope:</strong></p>
<ol><li>Navigate to <strong>System Applications &gt; Applications &gt; Installed</strong>.</li><li>Search for your application.</li><li>Single-click on the application record.</li><li>Copy the value in the <strong>Scope</strong> field.  </li></ol>
<p> </p>
<h4>I reported a PRB - how do I make sure it gets fixed in the application I have installed?</h4>
<p>Fixes for PRBs on applications from the ServiceNow Store will be delivered by a &#34;fix-only&#34; release. This will display as an update to an application in the System Applications page (Navigate to <strong>System Applications &gt; Applications &gt; All</strong> and search for the application).</p>
<p>  </p>
<h4>How do I find the components installed with an application?</h4>
<p>You can find the components installed with an application the same way as you do for plugins. Follow the instructions in <a title="Find components installed with an application" href="https://docs.servicenow.com/bundle/madrid-platform-administration/page/administer/plugins/task/find-components.html" target="_blank" rel="noopener noreferrer nofollow">Find components installed with an application</a>. </p>
<p> </p>
<h4>Is there any change in the process for reviewing &#34;Skipped Updates&#34; when I upgrade my instance?</h4>
<p>Yes, the Installation Logs related list on the sys_store_app record for the specific application will show the status of each file loaded with the application.</p>
<p>  </p>
<h3>For more information:</h3>
<p><a title="Security Operations and the ServiceNow Store" href="https://docs.servicenow.com/bundle/madrid-security-management/page/product/planning-and-policy/concept/secops-and-store.html" target="_blank" rel="noopener noreferrer nofollow">Security Operations and the ServiceNow Store</a> (product documentation)</p>
<p><a title="Governance, Risk, and Compliance and the ServiceNow Store" href="https://docs.servicenow.com/bundle/madrid-governance-risk-compliance/page/product/grc-common/concept/grc-and-store.html" target="_blank" rel="noopener noreferrer nofollow">Governance, Risk, and Compliance and the ServiceNow Store</a> (product documentation)</p>
<p>--</p>
<p>Behind the scenes here at ServiceNow, the Knowledge Management and Multimedia teams work closely with subject matter experts to disseminate critical information to our customers. We&#39;ve found that certain topics come up frequently, in the form of best practices that can help you keep your ServiceNow instances running smoothly. This series targets those topics so that you and your organization can benefit from our collective expertise. If you have a best practices topic you&#39;d like us to cover in this series, please let us know in the comments below.</p>
<p> </p>
<p>To access all of the blog posts in this series, see our <a title="NOWSupport best practices series list" href="https://community.servicenow.com/community?id&#61;community_blog&amp;sys_id&#61;6e7d6269dbd0dbc01dcaf3231f9619c0" target="_blank" rel="noopener noreferrer nofollow">NOWSupport best practices series list</a>.</p>
<div class="cm-attachments-body"> </div>