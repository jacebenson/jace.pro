---
title: "GRC Roles  What you need to know"
date: 2020-02-14T22:15:26.000Z
authors: ["Jan Spurlin"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=7d07e198db4b0cdc5ed4a851ca961994"
---
<p>The following details are as of the Orlando version of ServiceNow.</p>
<p>The ServiceNow suite of GRC applications involves several scoped applications. Each of these application scopes have their own set of roles. After reading this article, you should understand how all this works together.</p>
<p>When the GRC application was first developed on the ServiceNow platform (way back in Geneva in 2015) the need for separate roles by risk, compliance and audit was not a requirement. Consequently, we ended up with a generic set of roles that still exist today. These roles are referred to as the <strong>GRC Legacy roles</strong>. These include:</p>
<p style="padding-left: 30px;"><br />• sn_grc.admin<br />• sn_grc.developer<br />• sn_grc.manager<br />• sn_grc.reader<br />• sn_grc.user<br />• sn_grc.target_user</p>
<p>These roles are in the GRC: Profiles application scope.<br /><span style="color: #ff0000;"><strong>While these roles still exist, you should not be assigning groups and users to these roles.</strong></span></p>
<p>There are roles for each scoped GRC application.<br />Note that there are a number of scoped apps associated with GRC.</p>
<table style="width: 67px; height: 60px;" border="1"><tbody><tr><td style="width: 15.1136px;">Policy &amp; Compliance </td><td style="width: 15.1136px;">Risk</td><td style="width: 15.1136px;">Audit</td></tr><tr><td style="width: 15.1136px;">sn_compliance.admin<br />sn_compliance.attestation_creator<br />sn_compliance.developer<br />sn_compliance.manager<br />sn_compliance.reader<br />sn_compliance.user</td><td style="width: 15.1136px;">sn_risk.admin<br />sn_risk.asmt_creator<br />sn_risk.manager<br />sn_risk.reader<br />sn_risk.user</td><td style="width: 15.1136px;">sn_audit.admin<br />sn_audit.developer<br />sn_audit.external_auditor<br />sn_audit.manager<br />sn_audit.user</td></tr></tbody></table>
<p> </p>
<table border="1"><tbody><tr><td>Compliance Assessment</td><td>Performance Analytics</td><td>Advanced Risk</td><td>UCF</td></tr><tr><td>sn_comp_asmt.compliance_assessor</td><td>sn_grc_pa.sn_grc_pa_viewer</td><td>No new roles</td><td>sn_comp_ucf.admin</td></tr></tbody></table>
<p> </p>
<p>What you will find is that the GRC Legacy Roles are CONTAINED within the new scoped application roles where they are needed.</p>
<p>For example, the sn_grc.manager roles is contained within the following roles:</p>
<p style="padding-left: 30px;"><br />• sn_compliance.manager<br />• sn_risk.manager<br />• sn_audit.manager<br />Thus, there is no need to directly assign the sn_grc.manager role to any group or user.</p>
<p>So, why are these sn_grc.X roles still around?<br />There a couple of reasons the legacy roles have not been removed.</p>
<p style="padding-left: 30px;"><br />• The legacy roles are embedded in code throughout the GRC application. While we could have replaced them with the new roles, we don’t know what customizations customers have made that are related to these roles. We don’t want to break custom code that is currently in use by a customer.<br />• These Legacy roles may be useful if you are developing custom code. There may be certain actions that you want to make available to all the GRC managers. You could specify the Risk Manager, Compliance Manager and Audit Manager individually – or you can reference the legacy GRC manager role.</p>
<p>NOTE: This post covers the primary GRC applications. It does not include details on any of the Content Packs/Accelerators. Those scoped applications may have additional roles.</p>
<p>There may be other benefits to these legacy roles, these are the ones I have heard about so far. If you have other benefits (or concerns) feel free to post them in the replies to this post.</p>