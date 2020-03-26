---
title: "Related Attachments Related List"
date: 2016-07-15T00:56:48.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=928c2ae1dbd0dbc01dcaf3231f961927"
---
<p><span style="line-height: 1.5;">I&#39;ve seen a lot of requests in the Community to see related attachments on multiple forms.   For instance, people want to see Requested Item attachments on the related Catalog Task records as well.   Most &#34;solutions&#34; that are suggested involve copying the attachments from one record to the other, which you really do not want to do (synching problems, duplicate records for no reason, etc...).   My solution is to create a Defined Related List (</span><a style="line-height: 1.5;" title="http://wiki.servicenow.com/index.php?title&#61;Creating_Defined_Related_Lists" href="http://wiki.servicenow.com/index.php?title&#61;Creating_Defined_Related_Lists" rel="nofollow">Creating Defined Related Lists - ServiceNow Wiki</a><span style="line-height: 1.5;">) which can display attachments from multiple records.</span></p>
<p><span style="line-height: 1.5;">We start by adding a new Relationship record (System Definition \ Relationships):</span></p>
<p><span style="line-height: 1.5; font-family: &#39;courier new&#39;, courier;">Name:                   Related Attachments<br /></span><span style="line-height: 1.5; font-family: &#39;courier new&#39;, courier;">Applies to table:       Global [global]<br /></span><span style="line-height: 1.5; font-family: &#39;courier new&#39;, courier;">Queries from table:     Attachment [sys_attachment]<br /></span><span style="line-height: 1.5; font-family: &#39;courier new&#39;, courier;">Query with:</span></p>
<pre class="language-javascript"><code>(function refineQuery(current, parent) {
  var tableName &#61; parent.getTableName();
  var queryString &#61; &#34;table_name&#61;&#34; &#43; tableName &#43; &#34; ^table_sys_id&#61;&#34; &#43; parent.getValue(&#34;sys_id&#34;);   //default query

  switch (tableName){
    //add your table-specific blocks from below
  }

  current.addEncodedQuery(queryString);

  function u_getRelatedRecords(table, field, sysId){
    var result &#61; &#34;&#34;;
    var gr &#61; new GlideRecord(table);
    gr.addQuery(field, sysId);
    gr.query();
    while (gr.next()){
      result &#43;&#61; &#34;,&#34; &#43; gr.getValue(&#34;sys_id&#34;);
    }
    return result;
  }

})(current, parent);</code></pre>
<p> </p>
<p><span style="color: #666666; font-family: arial, sans-serif; line-height: 1.5;">The script checks the table name for the record being displayed and then builds the appropriate query.   As a safety measure, the queryString variable is given a default query to display the attachments for just that one record, otherwise all attachments would appear in the list if the Related List was added to a form that did not have any specific &#34;case&#34; block.   I created the private &#34;u_getRelatedRecords&#34; function to simplify the whole script as we use the same GlideRecord query to retrieve the appropriate sys_ids regardless of the table.</span></p>
<p> </p>
<p><span style="color: #666666; font-family: arial, sans-serif; line-height: 1.5;">The above script is just the starting block - we&#39;ll add table specific examples next.   Each of the next blocks of code should be inserted within the &#34;switch&#34; block at line 6:</span></p>
<p> </p>
<p><span style="color: #666666; font-family: arial, sans-serif; line-height: 1.5;"><strong>Request, Requested Item and Catalog Task Tables</strong></span></p>
<pre class="language-javascript"><code>      //&#61;&#61;&#61;&#61;&#61; Requests &#61;&#61;&#61;&#61;&#61;

      case &#34;sc_request&#34;:

      queryString &#61; &#34;table_nameINsc_request,sc_req_item,sc_task^table_sys_idIN&#34; &#43; parent.getValue(&#34;sys_id&#34;);

      //find the related Requested Items
      queryString &#43;&#61; u_getRelatedRecords(&#34;sc_req_item&#34;, &#34;request&#34;, parent.getValue(&#34;sys_id&#34;));

      //and then the Catalog Tasks
      queryString &#43;&#61; u_getRelatedRecords(&#34;sc_task&#34;, &#34;request_item.request&#34;, parent.getValue(&#34;sys_id&#34;));

      break;


      //&#61;&#61;&#61;&#61;&#61; Requested Items &#61;&#61;&#61;&#61;&#61;
      case &#34;sc_req_item&#34;:
      queryString &#61; &#34;table_nameINsc_request,sc_req_item,sc_task^table_sys_idIN&#34; &#43; parent.getValue(&#34;request&#34;) &#43; &#34;,&#34; &#43; parent.getValue(&#34;sys_id&#34;);

      //find the related Catalog Tasks
      queryString &#43;&#61; u_getRelatedRecords(&#34;sc_task&#34;, &#34;request_item&#34;, parent.getValue(&#34;sys_id&#34;));

      break;

 
      //&#61;&#61;&#61;&#61;&#61; Catalog Tasks &#61;&#61;&#61;&#61;&#61;
      case &#34;sc_task&#34;:
      queryString &#61; &#34;table_nameINsc_request,sc_req_item,sc_task^table_sys_idIN&#34; &#43; parent.request_item.request.toString() &#43; &#34;,&#34; &#43; parent.getValue(&#34;request_item&#34;);

      //find the related Catalog Tasks
      queryString &#43;&#61; u_getRelatedRecords(&#34;sc_task&#34;, &#34;request_item&#34;, parent.getValue(&#34;request_item&#34;));

      break;</code></pre>
<p> </p>
<p> </p>
<p><strong>Incident and Service Desk Call Tables</strong></p>
<pre class="language-javascript"><code>      //&#61;&#61;&#61;&#61;&#61; Incidents &#61;&#61;&#61;&#61;&#61;
      case &#34;incident&#34;:
      queryString &#61; &#34;table_nameINincident,new_call^table_sys_idIN&#34; &#43; parent.getValue(&#34;sys_id&#34;);

      //find the related New Call
      queryString &#43;&#61; u_getRelatedRecords(&#34;new_call&#34;, &#34;transferred_to&#34;, parent.getValue(&#34;sys_id&#34;));

      break;


      //&#61;&#61;&#61;&#61;&#61; Service Desk Calls &#61;&#61;&#61;&#61;&#61;
      case &#34;new_call&#34;:
      queryString &#61; &#34;table_nameINincident,new_call^table_sys_idIN&#34; &#43; parent.getValue(&#34;sys_id&#34;) &#43; &#34;,&#34; &#43; parent.getValue(&#34;transferred_to&#34;);

      break;</code></pre>
<p> </p>
<p> </p>
<p><strong>Idea and Demand Tables</strong></p>
<p> </p>
<pre class="language-javascript"><code>      //&#61;&#61;&#61;&#61;&#61; Idea &#61;&#61;&#61;&#61;&#61;
      case &#34;idea&#34;:
      queryString &#61; &#34;table_nameINidea,dmn_demand^table_sys_idIN&#34; &#43; parent.getValue(&#34;sys_id&#34;) &#43; &#34;,&#34; &#43; parent.getValue(&#34;demand&#34;);

      break;


      //&#61;&#61;&#61;&#61;&#61; Demand &#61;&#61;&#61;&#61;&#61;
      case &#34;dmn_demand&#34;:
      queryString &#61; &#34;table_nameINidea,dmn_demand^table_sys_idIN&#34; &#43; parent.getValue(&#34;sys_id&#34;) &#43; &#34;,&#34; &#43; parent.getValue(&#34;idea&#34;);

      break;</code></pre>
<p> </p>
<p> </p>
<p><strong>Project and Project Task Tables</strong></p>
<pre class="language-javascript"><code>  //&#61;&#61;&#61;&#61;&#61; Project &#61;&#61;&#61;&#61;&#61;
  case &#34;pm_project&#34;:
  queryString &#61; &#34;table_nameINpm_project,pm_project_task,idea,dmn_demand^table_sys_idIN&#34; &#43; parent.getValue(&#34;sys_id&#34;);
 
  //find the related Project Tasks
  queryString &#43;&#61; u_getRelatedRecords(&#34;pm_project_task&#34;, &#34;top_task&#34;, parent.getValue(&#34;top_task&#34;));

  //find the related Idea and Demand
  queryString &#43;&#61; u_getRelatedRecords(&#34;dmn_demand&#34;, &#34;project&#34;, parent.getValue(&#34;sys_id&#34;));
  queryString &#43;&#61; u_getRelatedRecords(&#34;idea&#34;, &#34;demand.project&#34;, parent.getValue(&#34;sys_id&#34;));

  break;


  //&#61;&#61;&#61;&#61;&#61; Project Task &#61;&#61;&#61;&#61;&#61;
  case &#34;pm_project_task&#34;:
  queryString &#61; &#34;table_nameINpm_project,pm_project_task,idea,dmn_demand^table_sys_idIN&#34; &#43; parent.getValue(&#34;top_task&#34;);
 
  //find the related Project Tasks
  queryString &#43;&#61; u_getRelatedRecords(&#34;pm_project_task&#34;, &#34;top_task&#34;, parent.getValue(&#34;top_task&#34;));

  //find the related Idea and Demand
  queryString &#43;&#61; u_getRelatedRecords(&#34;dmn_demand&#34;, &#34;project&#34;, parent.getValue(&#34;top_task&#34;));
  queryString &#43;&#61; u_getRelatedRecords(&#34;idea&#34;, &#34;demand.project&#34;, parent.getValue(&#34;top_task&#34;));

  break;</code></pre>
<p> </p>
<p> </p>
<p><strong>HR Case and HR Task Tables</strong></p>
<pre class="language-markup"><code>      //&#61;&#61;&#61;&#61;&#61; HR Case &#61;&#61;&#61;&#61;&#61;
      case &#34;hr_case&#34;:
      queryString &#61; &#34;table_nameINhr_case,hr_task^table_sys_idIN&#34; &#43; parent.getValue(&#34;sys_id&#34;); 

      //find the related HR Tasks
      queryString &#43;&#61; u_getRelatedRecords(&#34;hr_task&#34;, &#34;parent&#34;, parent.getValue(&#34;sys_id&#34;));

      break;


      //&#61;&#61;&#61;&#61;&#61; HR Tasks &#61;&#61;&#61;&#61;&#61;
      case &#34;hr_task&#34;:
      queryString &#61; &#34;table_nameINhr_case,hr_task^table_sys_idIN&#34; &#43; parent.getValue(&#34;sys_id&#34;) &#43; &#34;,&#34; &#43; parent.getValue(&#34;parent&#34;);

      break;</code></pre>
<p> </p>
<p> </p>
<p>Now you can see all the attachments from related records if you add the &#34;Related Attachments&#34; Related List to a form:</p>
<p><img class="image-1 jive-image" style="height: 267px; width: 899.674px;" src="5c97c842dbdcd3041dcaf3231f9619cc.iix" width="900" height="267" /></p>
<p> </p>
<p>The above blocks of code are just examples of what you can do and there are quite a few more that can be added.   I&#39;ll add some more as I come across some more ideas or people ask for more.</p>
<p> </p>
<p><span style="color: #e23d39;"><strong>If you want a better looking and more useful list view, you will want to read this post -</strong></span> <a class="jive_macro jive_macro_blogpost" title="Improving the Attachments List View" href="community?id&#61;community_blog&amp;sys_id&#61;1e5eaaaddbd0dbc01dcaf3231f961939" rel="nofollow">Improving the Attachments List View</a>:</p>
<p><img class="image-2 jive-image" style="width: 901px; height: 267.394px;" src="8e33afb5db9c9f04e9737a9e0f961937.iix" width="901" height="267" /></p>
<p>You will be able to see the record the attachment is actually on (instead of a sys_id), and even click on the link to go to that particular record.</p>
<p> </p>
<p><strong>NOTE:</strong> My earlier blog post, <a class="jive_macro jive_macro_blogpost" title="A Better Requested Item Attachments Related List" href="community?id&#61;community_blog&amp;sys_id&#61;adfce2a5dbd0dbc01dcaf3231f961934" rel="nofollow">A Better Requested Item Attachments Related List</a>, got a little messy so I split it into 2 different posts so it would be easier to read and update if required.   This post is the first of those 2 new posts.</p>