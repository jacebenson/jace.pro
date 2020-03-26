---
title: "Finding duplicates with GlideAggregate"
date: 2018-04-21T02:01:37.000Z
authors: ["Alex North"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=124ffd5adb2517007b337a9e0f9619c2"
---
<p>This afternoon I was helping out Customer Support assist a customer with identifying any Cis which happened to have the same serial number. The following principals could be followed for any table/field combination. Normal SQL hygiene applies – if you can reduce the record sets by including an addActiveQuery clause, then do so. Obviously if you are cleaning up data inconsistencies, you may have to query the whole table to make sure you don’t miss records.<br /> <br />The following example was based on OOB demo data. It shows how you can find the duplicates and extract relevant information directly from the MySQL console, as well as performing the same using Glide functionality. Although our hosted customers don&#39;t have access to the MySQL console, my hope is that seeing the SQL will help illustrate what I&#39;m talking about.</p>
<p><strong>A pure SQL view</strong></p>
<p>1) Get a list of distinct serial_numbers where more than one CI has the same serial number:</p>
<pre class="language-php"><code>select count(serial_number), serial_number from cmdb group by serial_number having count(serial_number) &gt; 1;</code></pre>
<p>2) Get some additional information using a sub-query (yuck):</p>
<pre class="language-php"><code>select sys_id, name, serial_number from cmdb where serial_number in (select serial_number from cmdb group by serial_number having count(serial_number) &gt; 1);</code></pre>
<p><br /><strong>In Glide this can be achieved thus: </strong></p>
<div style="background: #ffffff; overflow: auto; width: auto; border: solid gray; border-width: .1em .1em .1em .8em; padding: .2em .6em;">
<pre style="margin: 0; line-height: 125%;"><span style="color: #888888;">// 1) Get the duplicated values</span>
 
<span style="color: #008800; font-weight: bold;">function</span> getDupes(theTable, dpField) { 
    <span style="color: #008800; font-weight: bold;">var</span> ga <span style="color: #333333;">&#61;</span> <span style="color: #008800; font-weight: bold;">new</span> GlideAggregate(theTable);
    ga.addAggregate(&#39;COUNT&#39;, dpField);
    ga.addHaving(&#39;COUNT&#39;, dpField, &#39;&gt;&#39;, &#39;1&#39;);
    ga.query(); 
    <span style="color: #008800; font-weight: bold;">var</span> arDupes <span style="color: #333333;">&#61;</span> <span style="color: #008800; font-weight: bold;">new</span> <span style="color: #007020;">Array</span>();
    <span style="color: #008800; font-weight: bold;">while</span> (ga.next()) { 
      arDupes.push(ga.getValue(dpField));    
    }
    <span style="color: #008800; font-weight: bold;">return</span> arDupes;
}
 
 
<span style="color: #008800; font-weight: bold;">var</span> theTable <span style="color: #333333;">&#61;</span> &#34;cmdb&#34;;
<span style="color: #008800; font-weight: bold;">var</span> dpField <span style="color: #333333;">&#61;</span> &#34;serial_number&#34;
 
gs.print(getDupes(theTable, dpField));
 

<span style="color: #888888;">// 2) Get all the records which have the duplicated field. Iterate through and do as you will.</span>

<span style="color: #008800; font-weight: bold;">var</span> strQuery <span style="color: #333333;">&#61;</span> &#34;serial_numberIN&#34; <span style="color: #333333;">&#43;</span> getDupes(theTable, dpField); 
<span style="color: #008800; font-weight: bold;">var</span> gr <span style="color: #333333;">&#61;</span> <span style="color: #008800; font-weight: bold;">new</span> GlideRecord(theTable);
gr.addEncodedQuery(strQuery);
gr.query();
 
<span style="color: #008800; font-weight: bold;">while</span> (gr.next()) {
      gs.print(gr.sys_id <span style="color: #333333;">&#43;</span> &#34; &#34; <span style="color: #333333;">&#43;</span> gr.name <span style="color: #333333;">&#43;</span> &#34; &#34;<span style="color: #333333;">&#43;</span> gr.serial_number);
}
</pre>
</div>
<p> </p>
<p><strong>Caution:</strong></p>
<p>Make sure the field you are checking for duplicates on is indexed. Both the aggregate count and the subsequent glide record query will make use of an index on that field if it exists.</p>
<p>Also worth pointing out that the glide example does _not_ perform an SQL sub-query. The getDupes function means we don&#39;t have to go in for that nastiness.</p>