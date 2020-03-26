---
title: "How To Make Custom Pivot Tables"
date: 2015-06-01T16:04:42.000Z
authors: ["tltoulson"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=cabc2e25dbd0dbc01dcaf3231f961916"
---
<p><iframe src="https://youtube.com/embed/vugEPqdO8pE" width="425" height="350"/></p><p></p><p>Well, it seems that pivot tables are just a little bit popular in community and while sometimes native pivot tables will suffice, there are times when custom is the only route to take.   Sadly, these pivot table questions have all too often gone unanswered or answered with the dreaded "You can't do that out of box".   Well no more.   The technique covered in Code Creative Episode 3 can be used to build nearly any pivot table imaginable!   Here is just a sample of the questions I could find that this might benefit:</p><p></p><p>"I was wondering how you active the 'grid' section to show the count and percentage in text below the bars?"</p><p>- <a title="David Hreben" __default_attr="13684" __jive_macro_name="user" class="jive_macro_user jive_macro" data-orig-content="David Hreben" href="/community?id=community_user_profile&user=70035ee1db1c1fc09c9ffb651f96198d">David Hreben</a> (<a title="Code Creative - Episode 1 - How to Build Custom Charts and Reports" __default_attr="4202" __jive_macro_name="blogpost" class="jive_macro jive_macro_blogpost" data-orig-content="Code Creative - Episode 1 - How to Build Custom Charts and Reports" href="/community?id=community_blog&sys_id=317d2269dbd0dbc01dcaf3231f961911">Code Creative - Episode 1 - How to Build Custom Charts and Reports</a>)</p><p></p><p>"We can create "Pivot Table" using HighCharts API? I went through the HighCharts plotOptions. Didn't find anything there."</p><p>- <a title="Probir Das" __default_attr="15716" __jive_macro_name="user" class="jive_macro_user jive_macro" data-orig-content="Probir Das" href="/community?id=community_user_profile&user=9e4fcea5db181fc09c9ffb651f9619c7">Probir Das</a></p><p></p><p>"A requirement came up to create a report very similar to a pivot table, however, with multiple columns for the rows field."</p><p>- <a title="Raul Ron" __default_attr="20191" __jive_macro_name="user" class="jive_macro_user jive_macro" data-orig-content="Raul Ron" href="/community?id=community_user_profile&user=e7211e65db981fc09c9ffb651f9619be">Raul Ron</a> (<a title="Pivot table with multiple "row" columns" __default_attr="722602" __jive_macro_name="message" class="jive_macro_message jive_macro" data-orig-content="Pivot table with multiple &quot;row&quot; columns" href="/community?id=community_question&sys_id=04b9c3e5db5cdbc01dcaf3231f9619d5">Pivot table with multiple "row" columns</a>)</p><p></p><p>"Has anyone create report of Incident Category by Month in a Pivot Table format such as followed?"</p><p>- <a title="Alex Ng" __default_attr="31014" __jive_macro_name="user" class="jive_macro_user jive_macro" data-orig-content="Alex Ng" href="/community?id=community_user_profile&user=0ba09e6ddb581fc09c9ffb651f9619db">Alex Ng</a> (<a title="Pivot table - Incident Category by Month report" __default_attr="746480" __jive_macro_name="message" class="jive_macro_message jive_macro" data-orig-content="Pivot table - Incident Category by Month report" href="/community?id=community_question&sys_id=b3980f21db5cdbc01dcaf3231f961990">Pivot table - Incident Category by Month report</a>)</p><p></p><p>"Has anyone created report for number of created incidents per hour in a Pivot Table using custom charts format such as followed?:"</p><p>- <a title="vaigai.kothandaraman Last" __default_attr="9262" __jive_macro_name="user" class="jive_macro_user jive_macro" data-orig-content="vaigai.kothandaraman Last" href="/community?id=community_user_profile&user=2ce01261db981fc09c9ffb651f9619c5">vaigai.kothandaraman Last</a> (<a title="Custom Chart Scripts" __default_attr="182000" __jive_macro_name="thread" class="jive_macro_thread jive_macro" data-orig-content="Custom Chart Scripts" href="/community?id=community_question&sys_id=caac87e5db9cdbc01dcaf3231f961938">Custom Chart Scripts</a>)</p><p></p><p>"This works perfect for presenting the results, just what I need, except the pivot report totals the rows and columns, which I don't particularly care for, since the metrics might be amount of users and another mailbox space used, these two values don't really mean anything added up."</p><p>- <a title="William Sun" __default_attr="2486" __jive_macro_name="user" class="jive_macro_user jive_macro" data-orig-content="William Sun" href="/community?id=community_user_profile&user=ed129225dbd81fc09c9ffb651f9619aa">William Sun</a> (<a title="Can you remove the totals from the pivot table reports?" __default_attr="716371" __jive_macro_name="message" class="jive_macro_message jive_macro" data-orig-content="Can you remove the totals from the pivot table reports?" href="/community?id=community_question&sys_id=14d04f65db98dbc01dcaf3231f96197e">Can you remove the totals from the pivot table reports?</a>)</p><p></p><p>"Does anyone know how to a pivot table report with more than one column within ServiceNow? (see example attached).</p><p>All of the records and information needed comes from the same source table."</p><p>- <a title="April Edwards" __default_attr="4144" __jive_macro_name="user" class="jive_macro_user jive_macro" data-orig-content="April Edwards" href="/community?id=community_user_profile&user=aa431a29db1c1fc09c9ffb651f96197f">April Edwards</a> (<a title="Advanced Reporting (Pivot Table) Question" __default_attr="728786" __jive_macro_name="message" class="jive_macro_message jive_macro" data-orig-content="Advanced Reporting (Pivot Table) Question" href="/community?id=community_question&sys_id=70509329dbdcdbc01dcaf3231f9619f1">Advanced Reporting (Pivot Table) Question</a>)</p><p></p><p>And here's the code:</p><p></p><p><strong>UI Page</strong></p><p></p><pre __default_attr="xml" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14331566905235763" jivemacro_uid="_14331566905235763">
<p>&lt;?xml version="1.0" encoding="utf-8" ?&gt;</p>
<p>&lt;j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null"&gt;</p>
<p>       &lt;g2:evaluate&gt;</p>
<p>               var openQuery = 'stateIN1,2,3,4,5',</p>
<p>                       resolvedQuery = 'state=6^resolved_atONToday@javascript:gs.daysAgoStart(0)@javascript:gs.daysAgoEnd(0)',</p>
<p>                       closedQuery = 'state=7^closed_atONToday@javascript:gs.daysAgoStart(0)@javascript:gs.daysAgoEnd(0)',</p>
<p>                       allQuery = 'stateIN1,2,3,4,5^NQstate=6^resolved_atONToday@javascript:gs.daysAgoStart(0)@javascript:gs.daysAgoEnd(0)^NQstate=7^closed_atONToday@javascript:gs.daysAgoStart(0)@javascript:gs.daysAgoEnd(0)',</p>
<p>                       ga,</p>
<p>                       categories = [],</p>
<p>                       series = [];</p>
<p></p>
<p></p>
<p>               // Setup Categories</p>
<p>               var ga = new GlideAggregate('incident');</p>
<p>               ga.addEncodedQuery(allQuery);</p>
<p>               ga.addAggregate('COUNT');</p>
<p>               ga.groupBy('location');</p>
<p>               ga.orderBy('location');</p>
<p>               ga.query();</p>
<p>               while (ga.next()) {</p>
<p>                       categories.push(ga.location.getDisplayValue() + '' || '(empty)');</p>
<p>               }</p>
<p></p>
<p></p>
<p>               // Reusable function for building the 3 Series</p>
<p>               function getSeries(name, index, query, categories) {</p>
<p>                       var ga = new GlideAggregate('incident'),</p>
<p>                               data = [],</p>
<p>                               i,</p>
<p>                               cat;</p>
<p></p>
<p></p>
<p>                       // Fill data with 0's</p>
<p>                       for (i = 0; i != categories.length; i++) {</p>
<p>                               data.push(0);</p>
<p>                       }</p>
<p></p>
<p></p>
<p>                       ga.addEncodedQuery(query);</p>
<p>                       ga.addAggregate('COUNT');</p>
<p>                       ga.groupBy('location');</p>
<p>                       ga.orderBy('location');</p>
<p>                       ga.query();</p>
<p>                       while (ga.next()) {</p>
<p>                               // Find category index</p>
<p>                               for (i = 0; i != categories.length; i++) {</p>
<p>                                       cat = ga.location.getDisplayValue() + '' || '(empty)';</p>
<p>                                       if (categories[i] == cat) {</p>
<p>                                               break;</p>
<p>                                       }</p>
<p>                               }</p>
<p></p>
<p></p>
<p>                               data[i] = ga.getAggregate('COUNT') * 1;</p>
<p>                       }</p>
<p></p>
<p></p>
<p>                       return { 'name': name, 'legendIndex': index, 'data': data };</p>
<p>               }</p>
<p></p>
<p></p>
<p>               // Add the 3 series to an array for output</p>
<p>               series.push(getSeries('Opened Currently', 0, openQuery, categories));   // Add Open Series</p>
<p>               series.push(getSeries('Resolved Today', 1, resolvedQuery, categories)); // Add Resolved Series</p>
<p>               series.push(getSeries('Closed Today', 1, closedQuery, categories)); // Add Closed Series</p>
<p>       &lt;/g2:evaluate&gt;</p>
<p>   &lt;style&gt;</p>
<p>               .my-table {</p>
<p>                       color: #485563;</p>
<p>               }</p>
<p></p>
<p></p>
<p>   caption.my-tables {</p>
<p>                       font-weight: bold;</p>
<p>                       font-size: 2em;</p>
<p>                       margin-bottom: .75em;</p>
<p>               }</p>
<p></p>
<p></p>
<p>               th.my-table-h {</p>
<p>                       text-align: center;</p>
<p>                       width: 10em;</p>
<p>                       padding-bottom: 1em;</p>
<p>               }</p>
<p></p>
<p></p>
<p>               td.my-table-td {</p>
<p>                       text-align: center;</p>
<p>                       font-size: 1.25em;</p>
<p>                       padding: .5em .5em;</p>
<p>               }</p>
<p></p>
<p></p>
<p>               td.my-table-td:hover {</p>
<p>                       font-size: 1.75em;</p>
<p>               }</p>
<p></p>
<p></p>
<p>               td.my-row-h {</p>
<p>                       font-weight: bold;</p>
<p>                       text-align:right;</p>
<p>               }</p>
<p></p>
<p></p>
<p>               tr.my-row {</p>
<p>                       border-radius: .5em;</p>
<p>               }</p>
<p></p>
<p></p>
<p>               tr.my-row:hover {</p>
<p>                       background-color: #f3f3f3;</p>
<p>               }</p>
<p>   &lt;/style&gt;</p>
<p>       &lt;table class="wide my-table"&gt;</p>
<p>               &lt;caption class="my-tables"&gt;Incident Status Update&lt;/caption&gt;</p>
<p>   &lt;tr&gt;</p>
<p>   &lt;th&gt;&lt;/th&gt;</p>
<p>   &lt;j2:forEach items="$[categories]" var="jvar_cat"&gt;</p>
<p>   &lt;th class="my-table-h"&gt;$[jvar_cat]&lt;/th&gt;</p>
<p>   &lt;/j2:forEach&gt;</p>
<p>   &lt;/tr&gt;</p>
<p>   &lt;j2:forEach items="$[series]" var="jvar_series"&gt;</p>
<p>   &lt;tr class="my-row"&gt;</p>
<p>   &lt;g2:evaluate jelly="true"&gt;</p>
<p>   var curSeriesName = jelly.jvar_series.name;</p>
<p>   var curSeriesData = jelly.jvar_series.data;</p>
<p>   &lt;/g2:evaluate&gt;</p>
<p>   &lt;td class="my-table-td my-row-h"&gt;$[curSeriesName]&lt;/td&gt;</p>
<p>   &lt;j2:forEach items="$[curSeriesData]" var="jvar_val"&gt;</p>
<p>   &lt;td class="my-table-td"&gt;$[jvar_val]&lt;/td&gt;</p>
<p>   &lt;/j2:forEach&gt;</p>
<p>   &lt;/tr&gt;</p>
<p>   &lt;/j2:forEach&gt;</p>
<p>   &lt;/table&gt;</p>
<p>&lt;/j:jelly&gt;</p>

</pre>