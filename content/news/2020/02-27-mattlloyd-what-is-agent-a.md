---
title: "What is Agent Assist"
date: 2020-02-26T18:17:13.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=9193e6ccdbdf84104819fb2439961967"
---
<p>Agent Assist automatically searches for possible solutions when an agent is working on a record in Agent Workspace.</p>
<p>In this blog, I will use the Orlando version of Agent Assist for IT Service Management (ITSM) as an example.</p>
<p>Agent Assist for ITSM is preconfigured to assist an agent who is working on an Incident, Problem, or a Change and uses <a href="https://docs.servicenow.com/bundle/orlando-platform-administration/page/administer/contextual-search/concept/c_ContextualSearch.html" rel="nofollow">Contextual Search</a> to search for possible Knowledge articles, Questions (also known as Social Q&amp;A), Catalog items, Incidents, Problems, Changes, and Outages. Optionally, Predictive Intelligence can also be used to search for Knowledge articles, Incidents, Problems, and Changes.</p>
<p>Clicking the graduation cap (icon) in the Contextual Side panel will display Agent Assist.</p>
<p style="text-align: center;"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/26b5e684db13c4104819fb2439961932.iix" /></p>
<p>When an agent opens a record, Agent Assist runs an automatic search based on a field in the record, typically the short description. Each search result is shown in a card.</p>
<p style="text-align: center;"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/08d52e84db13c4104819fb2439961978.iix" /></p>
<p>If more than one search source is available to the agent, they can use the source selector to switch to a different source to search.</p>
<p style="text-align: center;"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/ade522c4db13c4104819fb2439961932.iix" /></p>
<h2>Agent Assist search components diagram</h2>
<p>You can adjust the width of the Contextual Side panel to see more cards at a time or provide a wider preview when you select a card.</p>
<p>Some of the Agent Assist search components are as follows:</p>
<p style="text-align: center;"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/45f522c4db13c4104819fb24399619eb.iix" /></p>
<p style="text-align: center;"> </p>
<p style="text-align: center;"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/9416a6c4db13c4104819fb243996197e.iix" /></p>
<p>Clicking the menu (icon) on a card will display the list of actions available for this search result, for example, Attach, Helpful, Flag Article, and View Full Article.</p>
<p style="text-align: center;"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/27266608db13c4104819fb2439961903.iix" /></p>
<h2>Table Configuration</h2>
<p><strong>Table Configuration</strong> is the place where you configure the Agent Assist title, search context, and search actions for the record type the agent is working on. Agent Assist table configurations are configured as part of Contextual Search.</p>
<p>To configure Agent Assist components, navigate to: <strong>Contextual Search</strong> &gt; <strong>Table Configuration</strong> where the <strong>UI type</strong> is <strong>Workspace</strong>.</p>
<p>From Orlando, Agent Assist for ITSM is preconfigured for Incident, Problem and Change. To know how to enable Agent Assist on other record types on your system, refer to <a href="https://docs.servicenow.com/bundle/orlando-servicenow-platform/page/administer/workspace/task/set-up-agent-assist.html" rel="nofollow">Set up Agent Assist</a>.</p>
<p>The <strong>Search Action Configurations</strong> can be found in the <strong>Search Action Configurations</strong> related list within a table configuration. The search actions are preconfigured, the available search actions are based on the selected search context. For more information, refer to <a href="https://docs.servicenow.com/bundle/orlando-platform-administration/page/administer/contextual-search/task/modify-search-actions-avail-for-cxs.html" rel="nofollow">Modify or disable search actions available for contextual search</a>.</p>
<p><em>Note: It is not currently possible to create your own search actions.</em></p>
<h2>Search Contexts</h2>
<p>The <strong>Search Context</strong> is where you configure the search sources that are available to the agent for a given table configuration.<br />Navigate to <strong>Contextual Search</strong> &gt; <strong>Search Contexts</strong> module.</p>
<p>From Orlando, Agent Assist for ITSM can include any of the following preconfigured search sources:</p>
<ul><li>Knowledge articles or Questions (also known as Social Q&amp;A).</li><li>Catalog items: if your agents order items to fulfill requests, for example: sending a keyboard to the requestor.</li><li>Incidents, Problems, Changes or Outages.</li></ul>
<p><em>Note: Additional preconfigured search sources may be available when you are licensed for Customer Service Management (CSM), Human Resources (HR) or Finance. It is not currently possible to create your own search sources or your own search actions.</em></p>
<h3>Review the search sources available in Agent Assist for the Incident record</h3>
<p>In the base version of ServiceNow, the Incident table configuration of Agent Assist for ITSM uses the <strong>Incident Deflection</strong> search context.</p>
<p>How to find out which search context is being used for a table configuration:</p>
<ul><li>On the platform, go to: <strong>Contextual Search</strong> &gt; <strong>Table Configuration</strong>.</li><li>Open the <strong>Incident</strong> table configuration where the <strong>UI type</strong> is <strong>Workspace</strong> to see the selected search context, which typically should be <strong>Incident Deflection</strong>.</li></ul>
<p>You can navigate to the search context through the table configuration, or directly, go to: <strong>Contextual Search</strong> &gt; <strong>Search Contexts</strong>.</p>
<p>The <strong>Incident Deflection</strong> search context:</p>
<ul><li>The <strong>Searcher</strong> defines whether this search context will include Knowledge articles, Questions or Catalog items.</li><li>
<ul><li><em>The searcher is a preconfigured group of search sources. It is not currently possible to add your own searcher group, but you can select one of the preconfigured searchers. For example: Knowledge only, Catalog only, Knowledge, and catalog.</em></li><li><em>The Searcher is optional (from Orlando).</em></li></ul>
</li><li>Additional search sources can also be included by using the <strong>Additional Resource Configurations</strong> related list.</li><li>Select the <strong>Additional Resource Configurations</strong> related list:</li><li>
<ul><li>You can select which preconfigured standard or Predictive Intelligence additional search sources to make available to the agent by using the <strong>Edit</strong> button. <br /><em>Additional search sources are optional.</em></li><li>Typically, the incident deflection search context includes Open Incidents, Resolved Incidents, Problems, Open Problems, Resolved Problems, Open Changes, Closed Changes, Outages, and Open Outages.</li></ul>
</li><li>The agent will only be able to select from additional search sources when the <strong>Search on tab</strong> setting is <strong>checked</strong>.</li></ul>
<p>To set the default selected source for this search context, refer to <a href="https://docs.servicenow.com/bundle/orlando-platform-administration/page/administer/contextual-search/task/set-source-search-context.html" rel="nofollow">Set default source for search context</a>.</p>
<h2>Search Result Display Configuration</h2>
<p>The <strong>Search Result Display Configuration</strong> is where you configure the title, description, or additional fields that are shown for a search result card.<br />For cards other than Knowledge or Catalog items, you can typically also define the fields for the detailed preview when you select a specific card in Agent Assist.<br />Navigate to: <strong>Contextual Search</strong> &gt; <strong>Search Result Display Configuration</strong> module.</p>
<p>ITSM includes the following preconfigured display cards:</p>
<ul><li>Incident</li><li>Problem</li><li>Change</li><li>Outage</li><li>Knowledge articles</li><li>Questions</li><li>Catalog items</li></ul>
<p><em>Note: It is not currently possible to add your own card configurations.</em></p>
<h2>How to add the Knowledge article number into the Knowledge articles card</h2>
<ul><li>On the platform, go to: <strong>Contextual Search</strong> &gt; <strong>Search Result Display Configuration</strong>.</li><li>Open the <strong>kb_knowledge</strong> display configuration where the <strong>UI type</strong> is <strong>Workspace</strong>.</li><li>Card additional fields: <strong>number</strong>.</li><li>Select <strong>Update</strong>.</li><li>That’s it!</li></ul>
<p style="padding-left: 30px; text-align: center;"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/62aeaa48db93c4104819fb2439961990.iix" /></p>
<h2>Filter based on form values</h2>
<p>From Orlando, you can create filter configurations (known as dynamic filters) that filter based on fields in the form for the following search sources:</p>
<ul><li>Knowledge articles or questions.</li><li>Incidents, problems, change requests or outages.</li></ul>
<p>Examples:</p>
<ul><li>Filter knowledge articles using the category from the form.</li><li>Filter incidents to those created by the caller from the form.</li></ul>
<h3>How to filter knowledge articles using the category from the form</h3>
<p>The <strong>Filters</strong> can be found in the <strong>Filter Configurations</strong> related list within a table configuration.</p>
<ul><li>On the platform, go to: <strong>Contextual Search</strong> &gt; <strong>Table Configuration</strong>.</li><li>Open the <strong>Incident</strong> table configuration where <strong>UI type</strong> is <strong>Workspace</strong>.</li><li>Select the <strong>Filter Configurations</strong> related list.</li><li>Select <strong>New</strong>.</li><li>Select the <strong>Resource configuration</strong>: <strong>Knowledge Articles</strong>.</li><li>Scripted filter: <strong>checked</strong>.</li><li><strong>Save</strong> (right-click the header and select Save).</li><li>Use the following script:</li></ul>
<pre class="language-javascript"><code>(function(current, query_table){

    // current: A GlideRecord representing the Form or Record producer.
    // query_table: The table to apply the filter on.

    // Active results only.
    query_table.addActiveQuery();

    // The selected category in the form.
    var formCategory &#61; current.getValue(&#39;category&#39;);

    // Filter the knowledge query_table based on the selected category in the form.
    // Note: Dot-walk the knowledge table kb_category reference to be able to 
    // filter by the label.
    query_table.addQuery(&#39;kb_category.label&#39;, &#39;&#61;&#39;, formCategory);

    // Return the encoded query
    return query_table.getEncodedQuery();

})(current, query_table);</code></pre>
<ul><li>Select <strong>Update</strong>.</li><li>That’s it!</li><li>Now, the dynamic filter will be applied based on the form category when searching for knowledge articles with agent assist from an incident record.</li></ul>
<h2>Predictive Intelligence recommendations</h2>
<p>If you are licensed for Predictive Intelligence, Agent Assist can provide recommendations when an agent is working on an incident record to save them time.</p>
<p>The following recommendations are based on using Predictive Intelligence to find similar incidents to incident the agent is working on. Then looking for trends on those similar incidents.</p>
<p>The following trends are evaluated in this order:</p>
<table style="border-color: #cccccc;" border="1" cellpadding="3"><tbody><tr><td><strong>Recommended action</strong></td><td><strong>Condition</strong></td><td><strong>Trend</strong></td></tr><tr><td>Link to an existing Major Incident</td><td>Major incident state is None <br />AND <br />Parent incident is empty</td><td>
<p>Any of the similar incidents is linked to a major incident.</p>
<p><em>This recommendation is included if you are licensed for Major Incident Management.</em></p>
</td></tr><tr><td>Propose a Major Incident</td><td>Major incident state is None AND <br />Parent incident is empty AND <br />Incident state is not Resolved</td><td>
<p>Any of the similar incidents have high urgency but not linked to a major incident.</p>
<p><em>This recommendation is included if you are licensed for Major Incident Management.</em></p>
</td></tr><tr><td>Link to a Problem</td><td>Problem is empty</td><td>3 or more of the similar incidents are linked to the same problem.</td></tr><tr><td>Link to Change</td><td>Caused by is empty</td><td>3 or more of the similar incidents are linked to the same change request.</td></tr><tr><td>Attach</td><td> </td><td>3 or more of the similar incidents are linked to the knowledge article.</td></tr><tr><td>Copy resolution</td><td>Resolution code is None</td><td>3 or more of the similar incidents share the same resolution code.</td></tr></tbody></table>
<p><em>Note: It is not currently possible to create your own search actions.</em></p>
<p><strong>Example Agent Assist recommendation: Link to Problem</strong></p>
<p style="text-align: center;"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/a41aaec4db53c4104819fb24399619d0.iix" /></p>
<h2>More than one Agent Assist per table</h2>
<p>Optionally, you can provide a more targeted experience by splitting up your search sources across multiple Agent Assists in the Contextual Side panel.</p>
<p>Examples:</p>
<ul><li>Knowledge Assist to only search for knowledge articles and questions.</li><li>ITSM Assist to only search for catalog items, incidents, problems, changes, or outages.</li><li>Employee Documents enables HR users to search for employee documents, filtered by the Caller in the HR Case record.</li></ul>
<p style="text-align: center;"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/a63a6248db53c4104819fb2439961992.iix" /></p>
<p>For more information, refer to <a href="https://docs.servicenow.com/bundle/orlando-servicenow-platform/page/administer/workspace/task/set-up-multiple-agent-assists.html" rel="nofollow">Set up multiple Agent Assists</a>.</p>
<h2>Next steps</h2>
<p>You can read more about the Orlando Agent Assist release in the <a href="https://docs.servicenow.com/bundle/orlando-servicenow-platform/page/administer/workspace/task/set-up-agent-assist.html" rel="nofollow">documentation</a> and <strong>New Agent Assist features</strong> in the <a href="https://docs.servicenow.com/bundle/orlando-release-notes/page/release-notes/summary/rn-summary-new-features.html" rel="nofollow">release notes</a>.<br />To share your ServiceNow product ideas, please visit the <a href="https://community.servicenow.com/community?id&#61;ideas_list&amp;sysparm_module_id&#61;enhancement_requests" rel="nofollow">idea portal</a>.</p>