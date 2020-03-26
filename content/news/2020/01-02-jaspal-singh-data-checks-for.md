---
title: "Data Checks for Group without Users Manager Parent Type"
date: 2020-01-01T16:38:54.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=df04f18edbcec4145ed4a851ca96196d"
---
<p>Data management on ServiceNow platform for smooth functioning is must &amp; should be given utmost importance. For instance, there is a workflow that requires Group Manager&#39;s approval for fulfillment but the Group does not have Manager data updated. Another one being, a task to be fulfilled &amp; is assigned to a team/group which does not have members. </p>
<p>In order to be sure that data is in place we can do few checks on regular basis so as to avoid workflow being stuck.</p>
<p>Below are few random checks that can be done by using background scripts or fix scripts. If required same can be used in schedule jobs (to receive mail) with some minor alterations in code. In addition, reports can be created for the same &amp; can be further published as dashboard so as to get a view of everything on single frame.</p>
<p>1. Groups without Members/Users</p>
<pre class="language-markup"><code>var gr &#61; new GlideRecord(&#34;sys_user_group&#34;);
gr.query();
while (gr.next()) {
    var gr1 &#61; new GlideRecord(&#34;sys_user_grmember&#34;);
    gr1.addQuery(&#34;group&#34;, gr.sys_id);
    gr1.query();
    if (gr1.getRowCount() &#61;&#61; 0) {
        gs.print(gr.getRowCount()); //Just for reference can be commented
        gs.print(gr.name); //Prints Group Name without members
    }
}</code></pre>
<p> </p>
<p>2. Groups without Managers</p>
<pre class="language-markup"><code>var gr &#61; new GlideRecord(&#34;sys_user_group&#34;);
gr.addEncodedQuery(&#34;managerISEMPTY&#34;);
gr.query();
while (gr.next()) {
    var gr1 &#61; new GlideRecord(&#34;sys_user_grmember&#34;);
    gr1.addQuery(&#34;group&#34;, gr.sys_id);
    gr1.query();
    if (gr1.getRowCount() &#61;&#61; 0) {
        gs.print(gr.getRowCount());//Just for reference can be commented
        gs.print(gr.name);//Prints Group Name without Manager
    }
}
</code></pre>
<p> </p>
<p>3. Groups without Type</p>
<pre class="language-markup"><code>var gr &#61; new GlideRecord(&#34;sys_user_group&#34;);
gr.addEncodedQuery(&#34;typeISEMPTY&#34;);
gr.query();
while (gr.next()) {
    var gr1 &#61; new GlideRecord(&#34;sys_user_grmember&#34;);
    gr1.addQuery(&#34;group&#34;, gr.sys_id);
    gr1.query();
    if (gr1.getRowCount() &#61;&#61; 0) {
        gs.print(gr.getRowCount());//Just for reference can be commented
        gs.print(gr.name);//Prints Group Name without Group Type
    }
}
</code></pre>
<p> </p>
<p>4. Groups without Parent</p>
<pre class="language-markup"><code>var gr &#61; new GlideRecord(&#34;sys_user_group&#34;);
gr.addEncodedQuery(&#34;parentISEMPTY&#34;);
gr.query();
while (gr.next()) {
    var gr1 &#61; new GlideRecord(&#34;sys_user_grmember&#34;);
    gr1.addQuery(&#34;group&#34;, gr.sys_id);
    gr1.query();
    if (gr1.getRowCount() &#61;&#61; 0) {
        gs.print(gr.getRowCount());//Just for reference can be commented
        gs.print(gr.name);//Prints Group Name without Parent
    }
}
</code></pre>
<p> </p>
<p>5. Users not part of any Group</p>
<pre class="language-markup"><code>var gr &#61; new GlideRecord(&#39;sys_user&#39;);
gr.addEncodedQuery(&#34;active&#61;true&#34;);
gr.query();
while (gr.next()) {
    var gr1 &#61; new GlideRecord(&#39;sys_user_grmember&#39;);
    gr1.addQuery(&#39;user&#39;, gr.sys_id);
    gr1.query();
    if (!gr1.next()) {
        gs.print(&#39;Count of Users without Group: &#39; &#43; gr.getRowCount());//Prints Count of Users without Group
        gs.print(&#39;Users are :&#39;&#43;gr.name); //Prints User Name
	}
}</code></pre>
<p>Similary, for User without Managers, Department, Business Phone, etc. can be checked for by simply replacing</p>
<pre class="language-markup"><code>gr.addEncodedQuery(&#34;active&#61;true&#34;);</code></pre>
<p>of point 5. with appropriate query so as to get required results. </p>
<p> </p>
<p>Hope it helps!</p>
<p> </p>
<p>Thanks,</p>
<p>Jaspal Singh</p>
<p> </p>
<p>Hit Helpful or Correct on the impact of response.</p>