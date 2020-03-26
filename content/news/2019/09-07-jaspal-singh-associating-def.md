---
title: "Associating default favourites for ITIL Users"
date: 2019-09-06T15:01:46.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=52890f1cdb73f3c8f7fca851ca9619f3"
---
<p>Bookmarks/Favourites can be defaulted on basis of roles/groups any other condition if required &amp; can be pushed for all existing Users in one go. Thus helping Users with a specific role/group to get default set of favourites added instead of Users going &amp; getting it created for themselves.</p>
<p class="ng-scope">For instance Users with ITIL role can be defaulted with below favourites. </p>
<p class="ng-scope">1. SLA for My Group Tasks</p>
<p class="ng-scope">2. SLA for Ny Tasks</p>
<p class="ng-scope">3. Tasks Assigned to Me</p>
<p class="ng-scope">3. My approvals</p>
<p class="ng-scope">Since, Bookmarks (sys_ui_bookmark)  table holds the favourites below fix script/background script can be used for pushing favourites as mentioned above in one go for all Users with ITIL role. A scheduled job also can be written if required with appropriate condition to avoid duplication of favourites being added to same set of Users.</p>
<p class="ng-scope"><strong>For Fix Script/Background script</strong></p>
<pre class="language-markup"><code>var jsonFavList &#61; {
  &#34;SLA for My Group Tasks&#34;: &#34;task_list.do?sysparm_query&#61;assignment_groupDYNAMICd6435e965f510100a9ad2572f2b47744&amp;sysparm_first_row&#61;1&amp;sysparm_view&#61;&#34;,
  &#34;SLA for My Tasks&#34;: &#34;task_list.do?sysparm_query&#61;%5Eassigned_toDYNAMIC90d1921e5f510100a9ad2572f2b477fe&amp;sysparm_first_row&#61;1&amp;sysparm_view&#61;&#34;,
  &#34;Tasks Assigned to Me&#34;: &#34;stateNOT INclosed_complete,closed_abandoned^assigned_toDYNAMIC90d1921e5f510100a9ad2572f2b477fe&#34;,
  &#34;My approvals&#34;: &#34;sysapproval_approver_list.do?sysparm_query&#61;approverDYNAMIC90d1921e5f510100a9ad2572f2b477fe&amp;sysparm_first_row&#61;1&amp;sysparm_view&#61;&#34;
};

var g &#61; new GlideRecord(&#34;sys_user_has_role&#34;);
g.addEncodedQuery(&#34;role&#61;282bf1fac6112285017366cb5f867469&#34;);//considering sys_id for ITIL role is 282bf1fac6112285017366cb5f867469
g.query();
while (g.next()) {
	for (var fav in jsonFavList) {
		var grBookMark &#61; new GlideRecord(&#34;sys_ui_bookmark&#34;);
		grBookMark.addEncodedQuery(&#34;user&#61;&#34; &#43; g.user &#43; &#34;^title&#61;&#34; &#43; fav &#43; &#34;^url&#61;&#34; &#43; jsonFavList[fav]);
		grBookMark.query();
		if (!grBookMark.next()) {
			grBookMark.initialize();
			grBookMark.pinned &#61; true;
			grBookMark.title &#61; fav;
			grBookMark.url &#61; jsonFavList[fav];
			grBookMark.user &#61; g.user;
			grBookMark.insert();
		}
	}
}</code></pre>
<p> </p>
<p><strong>For Scheduled job</strong></p>
<pre class="language-markup"><code>var jsonFavList &#61; {
  &#34;SLA for My Group Tasks&#34;: &#34;task_list.do?sysparm_query&#61;assignment_groupDYNAMICd6435e965f510100a9ad2572f2b47744&amp;sysparm_first_row&#61;1&amp;sysparm_view&#61;&#34;,
  &#34;SLA for My Tasks&#34;: &#34;task_list.do?sysparm_query&#61;%5Eassigned_toDYNAMIC90d1921e5f510100a9ad2572f2b477fe&amp;sysparm_first_row&#61;1&amp;sysparm_view&#61;&#34;,
  &#34;Tasks Assigned to Me&#34;: &#34;stateNOT INclosed_complete,closed_abandoned^assigned_toDYNAMIC90d1921e5f510100a9ad2572f2b477fe&#34;,
  &#34;My approvals&#34;: &#34;sysapproval_approver_list.do?sysparm_query&#61;approverDYNAMIC90d1921e5f510100a9ad2572f2b477fe&amp;sysparm_first_row&#61;1&amp;sysparm_view&#61;&#34;
};

var g &#61; new GlideRecord(&#34;sys_user_has_role&#34;);
g.addEncodedQuery(&#34;role&#61;282bf1fac6112285017366cb5f867469^sys_created_onONYesterday&#64;javascript:gs.beginningOfYesterday()&#64;javascript:gs.endOfYesterday()&#34;);
//considering sys_id for ITIL role is 282bf1fac6112285017366cb5f867469 &amp; created on yesterday
g.query();
while (g.next()) {
	for (var fav in jsonFavList) {
		var grBookMark &#61; new GlideRecord(&#34;sys_ui_bookmark&#34;);
		grBookMark.addEncodedQuery(&#34;user&#61;&#34; &#43; g.user &#43; &#34;^title&#61;&#34; &#43; fav &#43; &#34;^url&#61;&#34; &#43; jsonFavList[fav]);
		grBookMark.query();
		if (!grBookMark.next()) {
			grBookMark.initialize();
			grBookMark.pinned &#61; true;
			grBookMark.title &#61; fav;
			grBookMark.url &#61; jsonFavList[fav];
			grBookMark.user &#61; g.user;
			grBookMark.insert();
		}
	}
}</code></pre>
<p>Script above adds favourites as listed in same order as required. If there is something that is to be added it can be added in the array list value for variable jsonFavList.</p>
<p>Once above script is executed condition specified in the GlideRecorded table  (in case above User Role) will be satisfied &amp; will push the favourites to that set of Users. The script above covers for Users with ITIL role. This can again be altered as required so as to push favourites &amp; defatult it as per business requirements.</p>
<p> </p>
<p>Hope it helps!</p>
<p> </p>
<p>Thanks,</p>
<p>Jaspal Singh</p>