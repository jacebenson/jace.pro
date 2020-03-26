---
title: "Tips for implementing and troubleshooting Cloud Management"
date: 2018-02-27T23:26:08.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=224bdde9dbacdf00b61ff3231f9619ef"
---
<h3>Who&#39;s using our organization&#39;s cloud resources? Why is the cost so high for last month&#39;s billings? How can we make it easier for users to get the cloud resources they need?</h3>
<p>If these questions are coming up in your organization, it&#39;s time to take control of your cloud resources. The Cloud Management application in ServiceNow addresses these challenges by delivering a single ServiceNow interface to access cloud resources, publish cloud offerings to a catalog, and manage the usage of those resources.</p>
<p>In this installment of our <a href="/community?id=community_blog&sys_id=6e7d6269dbd0dbc01dcaf3231f9619c0" rel="nofollow">NOWSupport best practices series</a>, we offer tips to help you implement Cloud Management. You&#39;ll find all of these tips and more in our <a href="https://www.youtube.com/watch?v&#61;7WcNn-v2YT8&amp;index&#61;1&amp;list&#61;PLCOmiTb5WX3rp38yvFTBaacYpZDpg245G" rel="nofollow">Cloud Management video series</a> on the <a href="https://www.youtube.com/user/servicenowdemo" rel="nofollow">NOWSupport YouTube channel</a>.</p>
<p>--</p>
<p><em>Note: This blog post and the videos referenced herein apply to ServiceNow releases starting with Jakarta.</em></p>
<p><em>--</em></p>
<p>Here&#39;s our <strong>Cloud Management | Introduction</strong> video to get you started:</p>
<p><iframe src="https://www.youtube.com/embed/7WcNn-v2YT8?rel&#61;0" width="640" height="360"></iframe></p>
<h4>And now for the tips! </h4>
<p>--</p>
<h3>Use policies to control your Cloud Management implementation</h3>
<p>You can gain detailed control over many aspects of your Cloud Management implementation, such as:</p>
<ul><li>Approvals</li><li>Resource operations</li><li>Blueprint operations</li><li>Catalog items</li></ul>
<p>Use policies to:</p>
<ul><li>Run or abort a workflow.</li><li>Execute a custom script.</li><li>Require approval from a manager or a change review before provisioning a cloud resource to a user.</li><li>Override a value. </li></ul>
<p>Here&#39;s an example of a policy that overrides a value from our <strong>Cloud Management | Introduction</strong> video (04:10 - 04:27):</p>
<p><iframe src="https://www.youtube.com/embed/7WcNn-v2YT8?rel&#61;0&amp;start&#61;250" width="640" height="360"></iframe></p>
<p> To learn more about policies, see <a href="https://docs.servicenow.com/bundle/jakarta-it-operations-management/page/product/cloud-management-v2/concept/cloud-policy.html" rel="nofollow">Policy governance for Cloud Management</a>.</p>
<p> </p>
<h3>Use resource quotas <em>and</em> quota configurations to control usage</h3>
<p>Resource quotas allow you to set limits on usage of a resource block. Quota configurations allow you to set usage quotas for individual users, or for a group. By setting values for both, you gain granular control over usage of a resource block.</p>
<p>Your create resource quotas by first creating a cloud quota definition, and then adding the associated quota configurations. Learn more about both here in <a href="https://docs.servicenow.com/bundle/jakarta-it-operations-management/page/product/cloud-management-v2/task/create-cloud-quota.html" rel="nofollow">Create a cloud quota definition</a>.</p>
<p> </p>
<h3>Limit cloud sprawl by using capacity limits</h3>
<p>In conjunction with the previous tip, you&#39;ll also want to prevent cloud sprawl, which is the uncontrolled proliferation of your organization&#39;s cloud resources. You can do this by <a href="https://docs.servicenow.com/bundle/jakarta-it-operations-management/page/product/cloud-management-v2/task/set-capacity-limits.html" rel="nofollow">setting capacity limits</a>, which define per-datacenter limitations on resources.</p>
<p>Learn more about capacity limits in our <strong>Cloud Management | Billing Setup</strong> video (03:19 - 04:19):</p>
<p><iframe src="https://www.youtube.com/embed/lnfNSjXhZms?rel&#61;0&amp;start&#61;199" width="640" height="360"></iframe></p>
<p> </p>
<h3>Speed up and simplify cloud resource delivery using blueprints</h3>
<p>A <a href="https://docs.servicenow.com/bundle/jakarta-it-operations-management/page/product/cloud-management-v2/concept/blueprints.html" rel="nofollow">blueprint</a> is a cloud-agnostic template for publishing a catalog item that a cloud user can use to request a stack. You can import blueprints from cloud resource providers, or you can <a href="https://docs.servicenow.com/bundle/jakarta-it-operations-management/page/product/cloud-management-v2/task/create-blueprint-cmp.html" rel="nofollow">create your own custom blueprints</a> by assembling reusable objects. Because blueprints are cloud agnostic, you can use them with any cloud service provider.</p>
<p> <img style="max-width: 100%; max-height: 480px;" src="5334abb1db6013887b337a9e0f961979.iix" /></p>
<p> </p>
<h3>Know the prerequisites for integrating with supported cloud providers</h3>
<p>In the ServiceNow product documentation, see <a href="https://docs.servicenow.com/bundle/jakarta-it-operations-management/page/product/cloud-management-v2/concept/cloud-prereqs.html" rel="nofollow">Prerequisites for Cloud Management</a> (Jakarta) to see how to integrate with:</p>
<ul><li>VMWare</li><li>Amazon Web Services (AWS)</li><li>Microsoft Azure</li></ul>
<p> </p>
<h3>Understand the roles in Cloud Management and assign them accordingly</h3>
<p>The Root administrator role in Cloud Management (<strong>sn_cmp.cmp_root_admin)</strong> provides the assigned user with access rights to <em>everything</em> in Cloud Management. In other words, assign this role with care! This role is <em>not</em> the same as the Cloud administrator role (<strong>sn_cmp.cloud_admin</strong>), which allows the assigned user to configure the Cloud Management application and set up the cloud infrastructure.</p>
<p>All other Cloud Management roles provide access to other specific functions. Here&#39;s the list of <a href="https://docs.servicenow.com/bundle/jakarta-it-operations-management/page/product/cloud-management-v2/concept/cloud-roles.html" rel="nofollow">Cloud Management roles </a>in Jakarta.</p>
<p>For more information about initial setup, see our <strong>Cloud Management | Initial Setup</strong> video:</p>
<p><iframe src="https://www.youtube.com/embed/fSgYPPeKAjU?rel&#61;0" width="640" height="360"></iframe></p>
<p> </p>
<h3>When setting up data centers for a cloud account, closer is better</h3>
<p>When setting up the data centers for a cloud account, choose the data center closest to the physical location of where traffic will be originating. Closer &#61; faster.</p>
<p> </p>
<h3>Use compute profiles to streamline provisioning setup</h3>
<p>You don&#39;t need a separate blueprint or catalog item to provide different options for a cloud resource. By setting up compute profiles, you can map them to locations within a cloud account.</p>
<p>Learn more about setting up compute profiles in our <strong>Cloud Management | Provisioning Setup</strong> video (02:52 - 03:18):</p>
<p><iframe src="https://www.youtube.com/embed/7HWL5nJvkWk?rel&#61;0&amp;start&#61;172" width="640" height="360"></iframe></p>
<p> Compute profiles are a type of resource profile. Learn more in <a href="https://docs.servicenow.com/bundle/jakarta-it-operations-management/page/product/cloud-management-v2/task/create-resource-profile.html" rel="nofollow">Create a Cloud Resource profile.</a></p>
<p> </p>
<h3>Use cloud templates to quickly get started using Azure and AWS cloud services</h3>
<p>You can export a template from Cloud Management on one instance, import it into another instance, and then click <strong>Create Blueprint and Catalog Item</strong> to create the catalog item right from the template.</p>
<p> <img style="max-width: 100%; max-height: 480px;" src="601037f5dba413887b337a9e0f96198b.iix" /></p>
<p> </p>
<h3>Use root cause analysis to troubleshoot a failed request in the Cloud User Portal</h3>
<p>Why did that cloud provisioning request fail? It&#39;s easy to track down a failed request using the Request Item Number:</p>
<ol><li>In the Cloud User Portal, click <strong>View Activities</strong>.</li><li>Select the failed request.</li><li>Open the <strong>Request Details</strong> tab.</li><li>Copy the <strong>RINumber</strong>.</li><li>Open the <strong>Cloud Root Cause Analysis Dashboard</strong>.</li><li>Paste the <strong>RINumber</strong> into the <strong>Request Item</strong> menu.</li><li>The <strong>Cloud Orchestration Trails Details</strong> list refreshes and displays only trails for that Request Item, allowing you to analyze the output and see exactly where the issue started.</li></ol>
<p>Here’s an example from 01:35 – 02:28 in our <strong>Cloud Management | Troubleshooting and Operations </strong>video:</p>
<p><iframe src="https://www.youtube.com/embed/gDf9wwNO8jo?rel&#61;0&amp;start&#61;95" width="640" height="360"></iframe></p>
<p> </p>
<h4>For more information:</h4>
<p><a href="https://docs.servicenow.com/bundle/jakarta-it-operations-management/page/product/cloud-management-v2/concept/cloud-management-v2-landing-page.html" rel="nofollow">Cloud Management</a> (product documentation)</p>
<p><a href="https://docs.servicenow.com/bundle/jakarta-it-operations-management/page/product/cloud-management-v2/concept/cloud-policy.html" rel="nofollow">Policy governance for Cloud Management </a>(product documentation)</p>
<p><a href="https://docs.servicenow.com/bundle/jakarta-it-operations-management/page/product/cloud-management-v2/task/create-cloud-quota.html" rel="nofollow">Create a cloud quota definition</a> (product documentation)</p>
<p><a href="https://docs.servicenow.com/bundle/jakarta-it-operations-management/page/product/cloud-management-v2/task/set-capacity-limits.html" rel="nofollow">Set capacity limits on cloud resources</a> (product documentation) </p>
<p><a href="https://docs.servicenow.com/bundle/jakarta-it-operations-management/page/product/cloud-management-v2/concept/blueprints.html" rel="nofollow">Blueprints</a> (product documentation)</p>
<p><a href="https://docs.servicenow.com/bundle/jakarta-it-operations-management/page/product/cloud-management-v2/task/create-blueprint-cmp.html" rel="nofollow">Create a Cloud Management blueprint </a>(product documentation)</p>
<p><a href="https://docs.servicenow.com/bundle/jakarta-it-operations-management/page/product/cloud-management-v2/concept/cloud-prereqs.html" rel="nofollow">Prerequisites for Cloud Management</a> (product documentation)</p>
<p><a href="https://docs.servicenow.com/bundle/jakarta-it-operations-management/page/product/cloud-management-v2/concept/cloud-roles.html" rel="nofollow">Cloud Management roles</a> (product documentation)</p>
<p><a href="https://docs.servicenow.com/bundle/jakarta-it-operations-management/page/product/cloud-management-v2/task/create-resource-profile.html" rel="nofollow">Create a Cloud Resource profile</a> (product documentation)</p>
<p><a href="https://www.youtube.com/watch?v&#61;7WcNn-v2YT8&amp;list&#61;PLCOmiTb5WX3rp38yvFTBaacYpZDpg245G" rel="nofollow">Cloud Management video playlist</a> (<a href="https://www.youtube.com/user/servicenowdemo" rel="nofollow">NOWSupport YouTube channel</a>) </p>
<p> </p>
<p>---</p>
<p> </p>
<p>Behind the scenes here at ServiceNow, the Knowledge Management and Multimedia teams work closely with subject matter experts to disseminate critical information to our customers. We’ve found that certain topics come up frequently, in the form of best practices that can help you keep your ServiceNow instances running smoothly. This series targets those topics so that you and your organization can benefit from our collective expertise. If you have a best practices topic you’d like us to cover in this series, please let us know in the comments below. To access all of the blog posts in this series, see our <a href="/community?id=community_blog&sys_id=6e7d6269dbd0dbc01dcaf3231f9619c0" rel="nofollow">NOWSupport best practices series list.</a></p>