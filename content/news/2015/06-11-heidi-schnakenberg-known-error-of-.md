---
title: "Known Error of the Week Creating a UNIQUE index with online alter enabled corrupts the table"
date: 2015-06-11T01:38:04.000Z
authors: ["heidi.schnakenberg"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=c38de669dbd0dbc01dcaf3231f9619ff"
---
<p>This week we're zeroing in on a important User Interface issue that could impact performance if not addressed carefully. Let's take a look at <a title="i.service-now.com/kb_view.do?sysparm_article=KB0549424" href="https://hi.service-now.com/kb_view.do?sysparm_article=KB0549424">KB0549424: Creating a UNIQUE index via the UI with online alter enabled corrupts the table if the data is not unique</a> and determine what we need to know.</p><p></p><p>Last summer, we received reports from customers that data was lost when they attempted to add a <a title="ki.servicenow.com/index.php?title=Unique_Index#gsc.tab=0" href="http://wiki.servicenow.com/index.php?title=Unique_Index#gsc.tab=0">unique index</a> via the UI. At the time, we were unable to reproduce the issue and had not seen additional cases until more users started upgrading in late fall. A closer look determined that online alter was enabled and the online alter process needed to validate that the data was unique prior to modifying the index table. Failure to do so resulted in records not being inserted into the new table structure and data being lost. <strong>This was due to the INSERT IGNORE bypassing the unique key violations.</strong></p><p class="p1"></p><p>After adding indexes with a unique constraint, you will see these symptoms if your instance is affected:</p><ul><li>Table corruption</li><li>Data loss</li><li>Failure to insert records into the table</li></ul><p></p><p>This issue was found to have originated in Calgary, when online alter was introduced. <span style="font-size: 10pt; line-height: 1.5em;">We investigated this issue and implemented a fix in Eureka Patch 8. </span></p><p></p><p>For customers who are unable to upgrade to Eureka Patch 8 and are using releases from <strong>Calgary to Eureka Patch 7</strong>, the following workaround is recommended:</p><p></p><p>To prevent the loss of data when a unique index is needed and an upgrade is not possible, please use the script below to verify the contents of the column manually before adding the index. The user can determine if there are any duplicate values before creating a unique index by using a script in "Script - Background" such as:</p><p></p><pre __default_attr="plain" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14340507268258260" jivemacro_uid="_14340507268258260">
<p>// This script will: select a, count(*) from table and group by a having count(*) &gt; 1</p>
<p>var tableName = 'table_we_will_add_the_index_to';</p>
<p>var columnName = 'column_that_will_get_the_new_index';</p>
<p></p>
<p>var ga = new GlideAggregate(tableName);</p>
<p>ga.addAggregate('count', columnName);</p>
<p>ga.groupBy(columnName);</p>
<p>ga.addHaving('count','&gt;','1');</p>
<p>ga.query();</p>
<p>if (ga.next()) {</p>
<p>   gs.print('The column ' + columnName + ' on table ' + tableName + ' has duplicates.   Creating a unique index will result in data loss.');</p>
<p>} else {</p>
<p>   gs.print('The column ' + columnName + ' on table ' + tableName + ' does not have duplicate values.');</p>
<p>}</p>
<p></p>




</pre><p></p><p>If non-unique values are found, remove or rename the duplicate values so they are unique.   Once completed, creating a unique index will no longer result in data loss.</p>