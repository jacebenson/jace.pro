---
title: "Community Code Snippets  GlideRecord  Bracket Notation Reference vs eval"
date: 2015-08-25T21:58:04.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=34bc6a25dbd0dbc01dcaf3231f96197c"
---
<p><span style="font-size: 10pt; line-height: 1.5em;">I see this particular coding technique from time-to-time.   Use of the eval(...) statement to be able to dynamically get and/or set a GlideRecord record field.</span></p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14405218636407811" jivemacro_uid="_14405218636407811">
<p>var incidentRecords = new GlideRecord('incident');</p>
<p>incidentRecords.query();</p>
<p></p>
<p>while (incidentRecords.next()) {</p>
<p>       var incidentField = 'incidentRecords.impact';</p>
<p>       var incidentFieldValue = eval(incidentField) + '';   // don't do this please.</p>
<p>       gs.print(incidentFieldValue);</p>
<p>}</p>

</pre><p></p><p>The value could be accessed without using eval by using the array bracket notation:</p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14405218636301611" jivemacro_uid="_14405218636301611">
<p>var incidentRecords = new GlideRecord('incident');</p>
<p>incidentRecords.query();</p>
<p></p>
<p>while (incidentRecords.next()) {</p>
<p>       var incidentField = 'impact';</p>
<p>       var incidentFieldValue = incidentRecords[incidentField] + '';   // this is a best practice</p>
<p>       gs.print(incidentFieldValue);</p>
<p>}</p>

</pre><p></p><p>Okay, so here is a use case example:</p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14405218634317530" jivemacro_uid="_14405218634317530">
<p>var tableName = 'incident';</p>
<p>var fieldName = 'impact';</p>
<p>var fieldValue = 1;</p>
<p>var checkName = 'number';</p>
<p>var checkValue = 'INC0010023';</p>
<p></p>
<p>setFieldValue(tableName, fieldName, fieldValue, checkName, checkValue);</p>
<p></p>
<p>function setFieldValue(table, field, value, check, checkValue) {</p>
<p>   <span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">   </span>var genericTable = new GlideRecord(table);</p>
<p>   <span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">   </span>genericTable.addQuery(check, checkValue);</p>
<p>   <span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">   </span>genericTable.query();</p>
<p></p>
<p>   <span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">   </span>while (genericTable.next()) {</p>
<p><span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">   <span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">   <span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">   </span></span></span> genericTable[field] = fieldValue + '';</p>
<p><span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">   <span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">   <span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">   </span></span></span> // genericTable.update();</p>
<p><span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">   <span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">   <span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">     </span></span></span>gs.info('---&gt; table: {0}, field: {1}, field value: {2}', table, field, genericTable[field]);</p>
<p>   <span style="color: rgba(0, 0, 0, 0); font-family: Consolas, 'Courier New', Courier, mono, serif; font-size: 12px;">   </span>}</p>
<p>}</p>

</pre><p></p><p></p><p>As you can see you could really get wild with this if you had some sort of driver table that you pulled the information from that you wanted to pass to the setFieldValue function.</p><p></p><p>If you want to know more about why eval should be avoided read in the book 'JavaScript: The Good Parts' by Douglas Crockford (<a title="op.oreilly.com/product/9780596517748.do" href="http://shop.oreilly.com/product/9780596517748.do">link</a>).   The big one is:   "It compromises the security of your application because it grants too much authority to the eval'd text." p.111.</p><p></p><p>Remember: eval is evil!   :-)</p><p></p><p>Steven Bell</p>