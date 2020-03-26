---
title: "Importing LDAP Data  Matching on Multiple Fields"
date: 2018-07-11T23:52:31.000Z
authors: ["Jim Coyne"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=ae14fbe8dbd75740fff8a345ca961992"
---
<p>You may find yourself in a situation where the data in AD is not 100% correct (it never is) and making the corrections in AD could take a while.  For instance, you may find half of your AD records have the &#34;company&#34; attribute set to &#34;ACME Corporation&#34; and the other half set to &#34;ACME Corp&#34;.</p>
<p>Instead of waiting for the data to be updated, one solution to work around this issue is to create a new field on the Company table to hold a second name found in AD that we want to match on:</p>
<p> <img style="max-width: 100%; max-height: 480px;" src="e34fa3a0db975740fff8a345ca961910.iix" /></p>
<p><span style="font-weight: 400;">You will probably want to check the </span><a href="https://docs.servicenow.com/bundle/kingston-platform-administration/page/administer/field-administration/task/t_RequiringUniqueValuesForAField.html" rel="nofollow"><span style="font-weight: 400;">&#34;Unique&#34; field</span></a><span style="font-weight: 400;"> on the Dictionary Entry for the new field you create to ensure each new entry is unique.  That should </span><a href="https://docs.servicenow.com/bundle/kingston-platform-administration/page/administer/table-administration/task/t_CreateCustomIndex.html" rel="nofollow"><span style="font-weight: 400;">create a new index</span></a><span style="font-weight: 400;"> for you as well, speeding up searches on the field.</span></p>
<p><span style="font-weight: 400;">We leverage this new field by changing the Field Map for the Company field to use a script instead of the source field.  The following script will match the AD info with either the &#34;Name&#34; or the new custom &#34;Name used in Active Directory&#34; field:</span></p>
<pre class="language-javascript"><code>answer &#61; (function() {
    var sourceData &#61; source.getValue(&#34;u_company&#34;);
    var gr &#61; new GlideRecord(&#34;core_company&#34;);
    gr.addEncodedQuery(&#34;name&#61;&#34; &#43; sourceData &#43; &#34;^ORu_ad_name&#61;&#34; &#43; sourceData);
    gr.query();
    if (gr.next()) {
        return gr.getValue(&#34;sys_id&#34;);
    }
    return -1;
})();</code></pre>
<p><span style="font-weight: 400;">It&#39;s a simple way to move on with the user imports without having to wait for all the data cleanup.  And it keeps working after any data cleanup operation (i.e. someone puts the &#34;wrong&#34; data in again later on).  The same solution can be used for any reference field, such as the Location and Department fields.</span></p>