---
title: "Improve performance database indexes and slow queries"
date: 2016-03-31T01:49:32.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=6b4da229dbd0dbc01dcaf3231f9619ad"
---
<p>Performance Degradation of a transaction could possibly reside on the Network, Browser or the Server. When the slowness is on the database server it is usually slow due to non optimal queries which take most of the transaction time. A quick way to optimize these queries is by creating indexes on them to improve query response time. Creating indexes on the queries will improve the overall transaction time. Adding the appropriate indexes to the slow queries can drastically improve the overall instance slowness issues.</p>
<p> </p>
<h2>How to add database indexes in ServiceNow</h2>
<p>The process of <a title="http://wiki.servicenow.com/index.php?title&#61;Creating_a_Custom_Table#Adding_a_Database_Index&amp;gsc.tab&#61;0" href="http://wiki.servicenow.com/index.php?title&#61;Creating_a_Custom_Table#Adding_a_Database_Index&amp;gsc.tab&#61;0" rel="nofollow">Creating a Database index </a>post Fuji is easy. In terms of performance though, one of the most important question for ServiceNow admins is how or what index should be applied to help improve transaction response times. Lets take a step back and ask ourselves what is a database index?</p>
<p> </p>
<p style="text-align: center;"><em>&#34;A <a title="n.wikipedia.org/wiki/Database_index" href="https://en.wikipedia.org/wiki/Database_index" rel="nofollow">Database index</a> is a data structure that improves the speed of data retrieval operations on a database table at the cost of additional writes and storage space to maintain the index data structure.&#34;</em></p>
<p style="text-align: center;"> </p>
<p style="text-align: left;">Slow queries is what we are targeting on which you would applying the indexes.</p>
<p> </p>
<p>DO&#39;s</p>
<ol><li>Always test your indexes in a sub production instance first and see if it helps improve performance <strong>before</strong> applying in production.</li><li>Always consider using <em>&#34;active&#34;</em> in your filter condition as part of your business logic. This enables the query to process on a smaller result set and helps improve query response time.</li><li>Use <em>&#34;is&#34;</em>, <em>&#34;starts with&#34;</em> in your filter/searches wherever possible with &#34;AND&#34; in the query.</li><li>Date fields such as <em>&#34;sys_created_on&#34; or &#34;sys_updated_on</em>&#34; should always be considered in filters/searches which enhances the performance of the query.</li><li>Adding a composite/compound index on single large flattened tables to the <em>&#34;active&#34;</em> and <em>&#34;date_time&#34;</em> fields is bound to give you improved query response time if those are the two fields being used in the query.</li></ol>
<p> </p>
<p>DO NOT&#39;s</p>
<ol><li>Indexes occupy space on disk in memory buffers and there can only be 64 INNODB MySQL indexes per table. Hence do not index every field as that defeats the purpose.</li><li>It is not recommended to index data type such as TEXT, MEDIUM TEXT, LONG TEXT if your search string is going to be long. These are fields which can hold multibyte characters such as short description, comments, and work-notes. Index on these fields may not useful because it only indexes first few characters. But if your search string is small for example you are searching for incidents with<em>&#34;memory low&#34;</em> the index could be beneficial.</li><li>Avoid using &#34;contains&#34; , &#34;OR&#39;s&#34; in your filters/searches wherever possible as the MySQL optimizer may end up doing a full table scan.</li></ol>
<p> </p>
<p><span style="line-height: 1.5;">Just a side note, MySQL is a command prompt shell deducing the syntax of the relational query language. It is the storage engine which is the underlying layer that has the commit, rollback, and crash-recovery capabilities to protect user data. ServiceNow MySQL customer databases are on InnoDB storage engine which is ACID compliant. Most MySQL indexes are stored in B-trees as the underlying data structure.</span></p>
<p> </p>
<h2>How to verify if there is a slow query involved responsible for the slowness:</h2>
<ol><li>In the Filter navigator type &#34;SQL.&#34;</li><li>Click on &#34;Debug SQL DETAILED.&#34;</li></ol>
<p> </p>
<p>Navigate to the form/list/report that is slow and scroll down until you notice the slow query which is taking a long time.</p>
<p><img class="image-15 jive-image" style="width: 620px; height: 270px; display: block; margin-left: auto; margin-right: auto;" src="caa33f31dbdc1fc068c1fb651f9619db.iix" alt="slow query log.jpg" /></p>
<p>Here, the response time is approximately 68 secs seconds out of which 67 seconds or 1.07 minutes were spent executing the slow query. If you hover the mouse over the periods next to &#34;SELECT&#34; it should tell you the columns being selected. If this query has made it to the slow query log you should be able to the see the explain plan and determine what index it is using if it is using one at all.</p>
<p> </p>
<h2>How to view the Explain Plan to determine the slow query</h2>
<p><span style="color: #505050;">An <a title="v.mysql.com/doc/refman/5.5/en/execution-plan-information.html" href="http://dev.mysql.com/doc/refman/5.5/en/execution-plan-information.html" rel="nofollow">explain plan</a> is a representation of a query execution. MySQL optimizer considers different execution plans before devising the optimal one. It helps us read exactly what possible indexes/keys MySQL considered and what it actually went with finally. For further details <span style="color: #2989c5;"><a title="https://docs.servicenow.com/administer/platform_performance/task/t_UseASlowQueryLog.html" href="https://docs.servicenow.com/administer/platform_performance/task/t_UseASlowQueryLog.html" rel="nofollow"><span style="color: #2989c5;">Use a slow query log</span></a> </span>for reference.<br /></span></p>
<p> </p>
<ol><li>
<ol><li>Navigate to <strong>Slow Queries.</strong></li><li>Use the Filter to retrieve your query (Ex: Created on and the Example URL)
<p><img class="image-16 jive-image" style="width: 620px; height: 265px; display: block; margin-left: auto; margin-right: auto;" src="c1ca9982db1cd344e9737a9e0f96194b.iix" alt="explain plan slow.jpg" /></p>
</li><li>Click on the Record and and click on <strong>Explain Plan</strong> on the right hand corner
<p><img class="image-17 jive-image" style="width: 620px; height: 127px; display: block; margin-left: auto; margin-right: auto;" src="b8c3bccedb5cd704ed6af3231f9619e6.iix" alt="record explain.jpg" /></p>
</li><li>Scroll down and click on <strong>Related Lists</strong> to see the explain plan.</li></ol>
</li></ol>
<p><img class="image-18 jive-image" style="width: 620px; height: 117px; display: block; margin-left: auto; margin-right: auto;" src="21331086db141f048c8ef4621f961948.iix" alt="related list explain plan.jpg" /></p>
<p>Notice the possible keys (indexes) available for the MySQL optimizer but the one being used is<strong> <em>task_index1(active,sys_class_name,number)</em> </strong>for the task table going over 60K rows. How do I know what columns are in the index key? You can find the indexes for a give table by navigating to the Tables and Columns module and selecting the table.</p>
<p> </p>
<table border="1"><tbody><tr><td>
<p>For example, here we want to figure out the columns included for <em>TASK table(key: task_index1)</em></p>
<p><img class="image-19 jive-image" style="width: 620px; height: 198px; display: block; margin-left: auto; margin-right: auto;" src="b7e677f1db905fc03eb27a9e0f96191c.iix" alt="task table.jpg" /></p>
<p> </p>
<p>This query can be optimized by using a better index which iterates through a smaller set of rows and retrieves the result faster.</p>
<p> </p>
<p> </p>
<p><span style="text-decoration: underline;"><em><strong>Note</strong>:</em></span> If reference fields are involved in the database query ex(a_ref_1) which are not visible in Tables and Column module, contact support for assistance as this cannot be done via the Index Creation Module.</p>
</td></tr></tbody></table>
<p> </p>
<p>Now here comes the crucial part. Depending on the distribution of data and the query plan above, there are a few options we can think of</p>
<p> </p>
<p>Option 1. Follow the order of the fields in the where clause and created an <strong><em>index key(sys_class_name,active,sys_created_by); This is called a covering index.</em></strong></p>
<p>Option 2. Create an index based on the distribution of data to narrow the subset and create an <em>index key <strong>(active,sys_class_name,sys_created_by)</strong>;</em></p>
<p>Option 3. A higher cardinality column especially for Range Comparisons <em>( sys_created_on   for &#34;&gt; &#34;or &#34;&lt;&#34;)</em> is always a preferred choice as it means less efficient storage, but faster read performance. This due to the fact that it navigates through less number of branches of the B- tree and narrows down the result set. Hence <em><strong>index key(sys_created_by,sys_class_name,active);</strong> </em>can be considered</p>
<p> </p>
<p><span style="text-decoration: underline;"><em><strong>Note:</strong></em></span> A rule of thumb as far as ServiceNow is concerned is to use <em>&#34;active&#34; as part of you query option and part of the index to reduce the result set and increase the query </em><em>efficiency</em></p>
<p> </p>
<p>Why do I say the above statement? I tested my theory and based on the results,<strong> Option 3</strong> was faster and better having a smaller set to process with higher cardinality</p>
<p> </p>
<table border="1"><tbody><tr><td>
<p>Table: Task</p>
<p>Total number of rows: 150K</p>
<p> </p>
<p>Option 1. The execution time was 29 secs <em>(index key: index_compostite(sys_class_name,active,sys_created_by))</em><img class="image-12 jive-image" style="line-height: 1.5; width: 624px; height: 47.0557px; display: block; margin-left: auto; margin-right: auto;" src="29c611c2dbd81b04ed6af3231f96193c.iix" alt="Screen Shot 2016-03-15 at 11.12.34 AM.png" width="624" height="47" /></p>
<p class="p2">Option 2) Here the response time was 30 secs <em>(index key: index_alternative(active,sys_class_name,sys_created_by))</em></p>
<p class="p2"><img class="image-13 jive-image" style="width: 627px; height: 41.4629px; display: block; margin-left: auto; margin-right: auto;" src="2c28f446db9cdfc03eb27a9e0f961999.iix" alt="Screen Shot 2016-03-15 at 11.11.41 AM.png" width="627" height="42" /></p>
<p class="p2">Option 3. Execution time was 0.12ms <em>(index key: index_cardinality(sys_created_by,sys_class_name,active,))</em></p>
<p class="p2"><img class="image-14 jive-image" style="width: 620px; height: 47px; display: block; margin-left: auto; margin-right: auto;" src="38b61446db989704ed6af3231f96199a.iix" alt="Screen Shot 2016-03-15 at 11.45.20 AM.png" /></p>
</td></tr></tbody></table>
<p> </p>
<h2>Its not just about the WHERE Clause - consider Selectivity and Cardinality</h2>
<p>There is more to indexing than just using the &#34;where&#34; clause and selecting the columns. Determining the right index comes down to two major factors: selectivity and cardinality. These should be considered when creating an index.</p>
<p> </p>
<p>Selectivity is calculated by: <span style="font-size: 10.0pt; font-family: &#39;Courier New&#39;; color: #444444;">Selectivity of index &#61; cardinality/(number of rows) * 100% </span></p>
<p> </p>
<p><span style="color: #3d3d3d; font-size: 10pt; font-family: arial,helvetica,sans-serif;">Selectivity is the variety in the values for a column of a table by the total number of rows in it. Cardinality is the uniqueness in the values. </span><span style="color: #3d3d3d; font-size: 10pt; font-family: arial,helvetica,sans-serif;">Cardinality of a column can be found using the &#34;DISTINCT&#34; command in MySQL. It is easier when you can do a sql command directly from MySQL Command box in Background Scripts. This is unavailable for admins post Geneva so you may need to use an alternative. </span></p>
<p> </p>
<p><span style="color: #3d3d3d; font-size: 10pt; font-family: arial,helvetica,sans-serif;"><img class="image-22 jive-image" style="height: 78px; width: 280px;" src="d67c3042db5c9344e9737a9e0f961943.iix" alt="Screen Shot 2016-03-27 at 1.51.20 PM.png" width="280" height="78" /><img class="image-23 jive-image" style="width: 275px; height: 77.039px;" src="fc2b9ccedb5c17049c9ffb651f961940.iix" alt="Screen Shot 2016-03-27 at 1.56.16 PM.png" width="275" height="77" /><img class="image-20 jive-image" style="width: 287px; height: 78.186px;" src="3823ed42db50d7049c9ffb651f9619df.iix" alt="Screen Shot 2016-03-27 at 1.51.00 PM.png" width="287" height="78" /></span></p>
<p> </p>
<p>Using this concept, an index could be applied when the number of matching rows that need to be selected is small in relation to the total number of rows. In other words index the columns with high cardinality first to narrow down the result set. In this case, the difference is hardly any to make a significant difference. In this scenario, our index key <em>(index key: index_alternative(active,sys_class_name,sys_created_by)) </em>was better as it opted for a binary search kind of scenario which shortened the result set into half and broke it down for faster retrieval. Hence, as I mentioned before it all depends on the number of rows in the MySQl table and how they are distributed.</p>
<p> </p>
<p><span style="color: #505050;"><span style="background: none repeat scroll 0% 0% white;">The more indexes you have the harder MySQL optimizer has to work and may incorrectly use/ignore an index and use a table scan instead. The above article is for ServiceNow customer admins to understand how indexes are administered by Service Now engineers and things they consider before making a decision.</span> <span style="background: none repeat scroll 0% 0% white;"><em><br /></em></span></span></p>
<p> </p>
<p> </p>
<p> </p>
<p><span style="; color: #505050; background: none repeat scroll 0% 0% white;">Thank you database guru Gurnish Anand for your guidance. </span></p>