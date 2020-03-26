---
title: "Create an ACL if Comments Field is Missing for ITIL Users on London Instances"
date: 2019-03-05T00:21:21.000Z
authors: ["mohankrishna"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=fe244360db4cb3081cd8a345ca961978"
---
<p class="p1">If you recently upgraded your instance to the London release and noticed that your ITIL users are unable to post comments on RITM (sc_req_item) records, it may be due to <a href="https://docs.servicenow.com/bundle/london-platform-administration/page/administer/contextual-security/concept/acl-rule-types.html" rel="nofollow"><span class="s1">Write ACLs</span></a> added in London.</p>
<p class="p1">Missing comment fields is fixed in <a href="https://docs.servicenow.com/bundle/london-release-notes/page/release-notes/quality/london-patch-6.html" rel="nofollow"><span class="s1"><strong>London Patch 6</strong></span></a> and <strong>Madrid</strong> version of ServiceNow. So if your “Additional comments” field is not visible for ITIL users on RITM or Tasks, don’t fret. You can patch/upgrade or use the workaround provided here.</p>
<p class="p1">However, please create a new Write ACL on <em>sc_req_item.comments</em> and give it the ITIL role.</p>
<p class="p1"><strong>Workaround:</strong></p>
<p class="p1">1. Navigate to “System Security” &gt; Access Control (ACL) (sys_security_acl_list.do)</p>
<p class="p1">2. Click on “Create New”</p>
<p class="p1">3. Create an ACL with the following information </p>
<p class="p1" style="padding-left: 30px;">a. Type: record</p>
<p class="p1" style="padding-left: 30px;">b. Operation: Write</p>
<p class="p1" style="padding-left: 30px;">c. Active: True</p>
<p class="p1" style="padding-left: 30px;">d. Admin Overrides: True</p>
<p class="p1" style="padding-left: 30px;">e. Name: “Requested Item [sc_req_item]”. “Additional Comments”</p>
<p class="p1" style="padding-left: 30px;">f: Role: ITIL</p>
<p class="p3"><span class="s2">For more information on this behavior see <a href="http://bit.ly/KB0714297" rel="nofollow"><span class="s3">Write ACL added in London for Additional Comments field on sc_req_item table is not allowing ITIL users to access the field</span></a></span><span class="s4">. </span><span class="s2">It also includes an update set that you can import to provide a temporary fix.</span></p>