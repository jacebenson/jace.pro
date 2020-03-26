---
title: "LDAP User  Group sync"
date: 2018-06-14T20:18:30.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=40300400dbfe5f405ed4a851ca96193e"
---
<p>Came across a question in community where LDAP Users &amp; Group sync was established &amp; well in place with ServiceNow &amp; worked well for all create, updates &amp; other operations. But there were 2 scenarios where it did not work as desired.</p>
<p>1. When Manager value in AD was changed to empty/blank</p>
<p>2. When all Members of Group were removed at AD</p>
<p>These worked well at AD (&amp; should as it was source end) but it did not reflect the same in ServiceNow.</p>
<p>On digging deep in to the issue found that<strong> LDAPUtils </strong>script include had to be modified so as to make the Scenario 1. work.</p>
<p><strong>setManager</strong> function of <strong>LDAPUtils</strong> script include was modified</p>
<p><em>From </em></p>
<pre class="language-markup"><code>setManager: function(source, target) {
var ge &#61; source.getElement(this.manager);
if (!ge || ge.isNil())
return;
</code></pre>
<p>Here, variable <strong>ge</strong> has the Manager value that has come in from AD &amp; is stored in import set table. If it is blank/empty it is returned directly &amp; hence the value of the Manger field on the record stays as is.<br /><br /></p>
<p><em>To</em></p>
<p> </p>
<pre class="language-markup"><code>setManager: function(source, target) {
var ge &#61; source.getElement(this.manager);
//if (!ge || ge.isNil())
//return;
if(ge.isNil())
{
target.manager&#61;&#39;&#39;;
}</code></pre>
<p>So, in order to update the manger field with the value it got from AD (when empty/blank) which is stored in import set table it was modified as above which sets the Manager field as blank when <strong>ge</strong> has blank value for Manager.</p>
<p> </p>
<p>However, it works well when there is a change in Manager field at AD end as we have below script that is remains as is</p>
<pre class="language-markup"><code>this._getLdapUserUpdate();
var lda
LanguageHTML/XML
p &#61; new GlideLDAPUserUpdate();
var mid &#61; this.ldapUserUpdate.getManagerValue(target, ge.toString());
if (mid &#61;&#61; null)
return;

target.manager &#61; mid;</code></pre>
<p> </p>
<p><strong>For scenario 2.</strong> the Group-User part all that is required is to get a check for system property <strong>glide.ldap.allow_empty_group </strong>with choices as<strong> True/False </strong>&amp; value as<strong> True. </strong>If there does not exist any it needs to be created as below</p>
<p><img src="42e5b3b7db6a5f405ed4a851ca961991.iix" /></p>
<p> </p>
<p>This property checks if the Groups coming in from AD has some User records or not. Setting the value as <strong>True</strong> would imply that it would remove all the Members from the Groups in ServiceNow if they are removed from AD.</p>
<p>If the value is set to <strong>False</strong> or there isn&#39;t any property as above then removal of all Members from Group in AD would not reflect the same in ServiceNow.</p>
<p> </p>
<p><strong>Note:</strong> This property is only to check for Groups that does not have any User members. If a Group has 10 members &amp; 9 of them were removed from AD then it would remove those from ServiceNow as well. Only issue would happen when the remaining member from that Group is removed from AD as it would not remove that remaining user from ServiceNow. Configuring the above property would help us achieve that.</p>
<p> </p>
<p>Hopefully the information in this blog helps understand LDAP - ServiceNow sync a step further.</p>
<p> </p>
<p>Thanks,</p>
<p>Jaspal Singh</p>