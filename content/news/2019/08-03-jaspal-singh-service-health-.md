---
title: "Service Health Dashboard"
date: 2019-08-03T01:01:08.000Z
authors: ["Jaspal Singh"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=f413c1dddb0fbf0c190dfb24399619bd"
---
<p>Not often we come across a scenario where we need to track the Service status for the services stored in our Business Service (cmdb_ci_service) table. If so, we have Operational status field available that can be used for checking the operational status but this then requires multiple actions (Operational stauts field update, outage record creation, etc). We came across one such scenario where we got a custom dashboard created that requires just a single action (operational status field update) which looks something as below.</p>
<p><img src="https://community.servicenow.com/752581dddb8fbf0c190dfb24399619e6.iix" /></p>
<p>ServiceNow does provides us with an Business Services Status dashboard but this requiers an entry in Outage table (filling of form field) before it can be displayed on the portal which is as below.</p>
<p><img src="https://community.servicenow.com/3ef40dd9db8fbf0c190dfb24399619f3.iix" /></p>
<p> </p>
<p>OOB case has more of outage thing (Operational status down) that is displayed rather showing all Business Services with its current Operational status.</p>
<p>In our business case Operational status when updated for the Business Service on the backend displays the same on the portal thus helping us with</p>
<p>1. Avoiding creation of Outage record.</p>
<p>2. Display all Business Services (can be limited as required).</p>
<p>3. Additional details (Techincal Owner, Status, Business Criticality) specific for the Business Services.</p>
<p>4. Legends.</p>
<p> </p>
<p>For setting up something as above below steps is to be followed.</p>
<p>1. Creation of New Page: business_services_health_status</p>
<p>2. Creation of Widget: business_services_health_status</p>
<p>3. Creation of Widget: services_legends</p>
<p> </p>
<p><strong>Creation of Widget: business_services_health_status</strong></p>
<p>a. HTML snippet.</p>
<pre class="language-markup"><code>&lt;div class&#61;&#34;panel panel-default&#34;&gt;
  &lt;div class&#61;&#34;panel-heading&#34;&gt;&amp;nbsp;&lt;/div&gt;
  &lt;div class&#61;&#34;panel-body&#34;&gt;
    &lt;table class&#61;&#34;tb&#34;&gt;
      &lt;thead&gt;
        &lt;th scope&#61;&#34;col&#34;&gt;
          &lt;!--&lt;h2 class&#61;&#34;panel-title title&#34;&gt;
          ${Status History}
          &lt;/h2&gt;--&gt;
           &lt;h2 class&#61;&#34;panel-title title&#34;&gt;
          ${Business Service}
          &lt;/h2&gt;&lt;/th&gt;
     &lt;th scope&#61;&#34;col&#34; ng-repeat&#61;&#34;date in ::data.dates&#34; class&#61;&#34;date-column&#34;&gt;Operational Status&lt;/th&gt;
        &lt;th scope&#61;&#34;col&#34; ng-repeat&#61;&#34;date in ::data.dates&#34; class&#61;&#34;date-column&#34;&gt;Business Criticality&lt;/th&gt;
        &lt;th scope&#61;&#34;col&#34; ng-repeat&#61;&#34;date in ::data.dates&#34; class&#61;&#34;date-column&#34;&gt;Service Category&lt;/th&gt;
        &lt;th scope&#61;&#34;col&#34; ng-repeat&#61;&#34;date in ::data.dates&#34; class&#61;&#34;date-column&#34;&gt;Technical Owner&lt;/th&gt;
        
   &lt;/thead&gt;
      &lt;tbody&gt;
          &lt;th scope&#61;&#34;col&#34; colspan&#61;&#34;6&#34;&gt;&lt;/th&gt;
&lt;/tr&gt;
      &lt;tr ng-repeat-end ng-repeat&#61;&#34;service in ::category.services&#34;&gt;
          &lt;td scope&#61;&#34;row&#34;&gt;
            &lt;small ng-if&#61;&#34;::service.subscribed&#34; class&#61;&#34;subscribed&#34; title&#61;&#34;${Subscribed to updates}&#34; aria-label&#61;&#34;${Subscribed to updates}&#34;&gt;&lt;i class&#61;&#34;fa fa-envelope&#34;&gt;&lt;/i&gt;&lt;/small&gt;
        &lt;/td&gt;
             &lt;td ng-repeat&#61;&#34;n in [0] track by $index&#34; class&#61;&#34;outage-row&#34; style&#61;&#34;
    padding-top: 15px;&#34;&gt;
                  
         &lt;span class&#61;&#34;fa&#34; ng-class&#61;&#34;::service.outages[0-$index].icon&#34; 
                  sp-tooltip
                 	aria-label&#61;&#34;{{::data.dates[$index].month &#43; &#39; &#39; &#43; data.dates[$index].day &#43; &#39; - &#39; &#43; service.outages[0-$index].msg}}&#34;
									role&#61;&#34;application&#34; 
                  tooltip-smart&#61;&#34;true&#34;
                  tooltip-template&#61;&#34;{{::service.outages[0-$index].msg &#43; &#39; - &#39; &#43; data.dates[$index].month &#43; &#39; &#39; &#43; data.dates[$index].day}}&#34;&gt;
            &lt;/span&gt;
          &lt;/td&gt;
        
        &lt;!--Business Criticality--&gt;
        &lt;td ng-repeat&#61;&#34;n in [0] track by $index&#34; class&#61;&#34;outage-row&#34; style&#61;&#34;
    padding-top: 15px;&#34;&gt;
                  
 &lt;small class&#61;&#34;fontis ng-binding&#34; ng-bind-html&#61;&#34;::service.buscriticality&#34; style&#61;&#34;
    font-size: small;&#34;/&gt;
        &lt;/td&gt;
       
        &lt;!--Service Category--&gt;
        &lt;td ng-repeat&#61;&#34;n in [0] track by $index&#34; class&#61;&#34;outage-row&#34; style&#61;&#34;
    padding-top: 15px;&#34;&gt;
                  
       &lt;small class&#61;&#34;fontis ng-binding&#34; ng-bind-html&#61;&#34;::service.parentis&#34; style&#61;&#34;
    font-size: small;&#34;/&gt;
          
        &lt;!-- Techincal Owner--&gt;
           &lt;td ng-repeat&#61;&#34;n in [0] track by $index&#34; class&#61;&#34;outage-row&#34; style&#61;&#34;
    padding-top: 15px;&#34;&gt;
                  
       &lt;small class&#61;&#34;fontis ng-binding&#34; ng-bind-html&#61;&#34;::service.techowner&#34; style&#61;&#34;
    font-size: small;&#34;/&gt;
        &lt;/td&gt;
        
        &lt;/td&gt;
        &lt;/tr&gt;
      &lt;/tbody&gt;
    &lt;/table&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
<p> </p>
<p>b. Server snippet.</p>
<pre class="language-markup"><code>(function() {

	data.categories &#61; [];
	var svs &#61; new GlideRecord(&#34;cmdb_ci_service&#34;);
	svs.addQuery(&#34;sys_class_name&#34;, &#34;cmdb_ci_service&#34;);
        svs.addEncodedQuery(&#39;busines_criticalityIN1 - most critical,2 - somewhat critical&#39;);//shows operational status 1 &amp; 2 Business services
	svs.setLimit(options.number_of_services || 250);
	svs.orderByDesc(&#34;operational_status&#34;);
	svs.query();
	var currentCategory &#61; &#34;-&#34;;
	var catIndex &#61; -1;
	while (svs.next()) {
		var ostatus&#61;svs.operational_status;
		var cat &#61; svs.getValue(&#34;category&#34;);
		if (cat !&#61; currentCategory) {
			catIndex&#43;&#43;;
			currentCategory &#61; cat;
			data.categories[catIndex] &#61; {};
			data.categories[catIndex].name &#61; cat;
			data.categories[catIndex].label &#61; svs.getDisplayValue(&#34;category&#34;);
			if (data.categories[catIndex].label &#61;&#61; &#34;&#34;)
				data.categories[catIndex].label &#61; gs.getMessage(&#34;Service&#34;);
			data.categories[catIndex].services &#61; [];
		}
		var svc &#61; {};
		svc.sys_id &#61; svs.getUniqueValue();
		svc.name &#61; svs.getDisplayValue();
		svc.techowner&#61;svs.u_technical_owner.getDisplayValue();
		svc.buscriticality&#61;svs.busines_criticality.getValue();
		svc.parentis&#61;svs.parent.getDisplayValue();
		svc.safeName &#61; GlideStringUtil.escapeHTML(svc.name);
		svc.subscribed &#61; isSubscribed(svc.sys_id);
		var svcOutageDay&#61;{};
		var outs&#61;[];
		if(svs.operational_status&#61;&#61;&#39;9&#39;){ //Non-Operational
			//gs.log(&#39;Os is &#39;,svs.operational_status);
			svcOutageDay.icon &#61; &#34;fa-times-circle&#34;;
				svcOutageDay.msg &#61; gs.getMessage(&#34;{0} - Multiple issues&#34;, svc.safeName);
		}
		else if(svs.operational_status&#61;&#61;&#39;7&#39;){ //Operational
		svcOutageDay.icon &#61; &#34;fa-check-circle&#34;;
				svcOutageDay.msg &#61; gs.getMessage(&#34;{0} - No issues&#34;, svc.safeName);
				}
			else if(svs.operational_status&#61;&#61;&#39;1&#39;){ //Unknown
		svcOutageDay.icon &#61; &#34;fa-question-circle&#34;;
				svcOutageDay.msg &#61; gs.getMessage(&#34;{0} - Unknown &#34;, svc.safeName);
				}
		else if(svs.operational_status&#61;&#61;&#39;8&#39;){ //Partial Operational
		svcOutageDay.icon &#61; &#34;fa-exclamation-circle&#34;;
				svcOutageDay.msg &#61; gs.getMessage(&#34;{0} - Partial Operational&#34;, svc.safeName);
				}
	
			outs.push(svcOutageDay);
		svc.outages &#61; outs;
		data.categories[catIndex].services.push(svc);

	}
data.dates &#61; [];
	for (var i &#61; 1; i &gt; 0; i--) {
		var d &#61; new GlideDate();
		d.subtract(1000 * 3600 * 24 * (i - 1));
		data.dates.push(d.getDisplayValueInternal());
	}

	function isSubscribed(id) {
		var subs &#61; new GlideRecord(&#34;m2m_sp_status_subscription&#34;);
		subs.addQuery(&#34;sys_user&#34;, gs.getUserID());
		subs.addQuery(&#34;cmdb_ci_service&#34;, id);
		subs.query();
		return subs.hasNext();
	}
})();</code></pre>
<p> </p>
<p>c. Client snippet.</p>
<pre class="language-markup"><code>function() {
  /* widget controller */
  var c &#61; this;
}</code></pre>
<p> </p>
<p><strong>Creation of Widget: services_legends</strong></p>
<p>a. HTML snippet.</p>
<pre class="language-markup"><code>&lt;div class&#61;&#34;panel panel-{{::options.color}} b&#34; aria-hidden&#61;&#34;true&#34;&gt;
  &lt;div class&#61;&#34;panel-heading&#34;&gt;
    &lt;label class&#61;&#34;panel-title&#34;&gt;${Legend}&lt;/label&gt;
  &lt;/div&gt;
  &lt;div class&#61;&#34;panel-body&#34;&gt;
    &lt;div class&#61;&#34;col-xs-12&#34;&gt;
      
      &lt;!-- Down --&gt;
      &lt;div class&#61;&#34;col-xs-12&#34;&gt;
      &lt;div class&#61;&#34;col-xs-2&#34;&gt;&lt;i class&#61;&#34;fa fa-times-circle&#34; tooltips tooltip-template&#61;&#34;{{::data.timesMsg}}&#34;&gt;&lt;/i&gt;&lt;/div&gt;
      &lt;div class&#61;&#34;col-xs-10&#34;&gt;{{::data.timesMsg}}&lt;/div&gt;
    &lt;/div&gt;
      
      &lt;!-- Partial Operational--&gt;
    &lt;div class&#61;&#34;col-xs-12&#34;&gt;
      &lt;div class&#61;&#34;col-xs-2&#34;&gt;&lt;i class&#61;&#34;fa fa-exclamation-circle&#34; tooltips tooltip-template&#61;&#34;{{::data.partialMsg}}&#34;&gt;&lt;/i&gt;&lt;/div&gt;
      &lt;div class&#61;&#34;col-xs-10&#34;&gt;{{::data.partialMsg}}&lt;/div&gt;
    &lt;/div&gt;
      
      &lt;!--Operational--&gt;
      &lt;div class&#61;&#34;col-xs-12&#34;&gt;
      &lt;div class&#61;&#34;col-xs-2&#34;&gt;&lt;i class&#61;&#34;fa fa-check-circle&#34; tooltips tooltip-template&#61;&#34;{{::data.noIssuesMsg}}&#34;&gt;&lt;/i&gt;&lt;/div&gt;
      &lt;div class&#61;&#34;col-xs-10&#34;&gt;{{::data.noIssuesMsg}}&lt;/div&gt;
    &lt;/div&gt;
    
    &lt;!--Unknown--&gt;
      &lt;div class&#61;&#34;col-xs-12&#34;&gt;
      &lt;div class&#61;&#34;col-xs-2&#34;&gt;&lt;i class&#61;&#34;fa fa-question-circle&#34; tooltips tooltip-template&#61;&#34;{{::data.questionMsg}}&#34;&gt;&lt;/i&gt;&lt;/div&gt;
      &lt;div class&#61;&#34;col-xs-10&#34;&gt;{{::data.questionMsg}}&lt;/div&gt;
    &lt;/div&gt;
    
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
<p>b. Server snippet.</p>
<pre class="language-markup"><code>data.multipleMsg &#61; gs.getMessage(&#34;Multiple issues&#34;);
data.degradationMsg &#61; gs.getMessage(&#34;Service degradation&#34;);
data.maintenanceMsg &#61; gs.getMessage(&#34;Planned maintenance&#34;);
data.noIssuesMsg &#61; gs.getMessage(&#34;Operational&#34;);
data.timesMsg&#61;gs.getMessage(&#34;Down&#34;);
data.questionMsg &#61; gs.getMessage(&#34;Unknown&#34;);
data.partialMsg&#61;gs.getMessage(&#39;Partial Operational&#39;);</code></pre>
<p>c. Client snippet.</p>
<pre class="language-markup"><code>function() {
  /* widget controller */
  var c &#61; this;
}</code></pre>
<p>Since, we had cloned OOB Business Service Status, most of HTML, Client &amp; Server part of the code remains the same with updates so as to make it work per our requirment for custom widget.</p>
<p>Once, configured the Widgets with above code all is required is to place it in a container for the page business_services_health_status that was created by Opening the page in Page Designer. Once placed widgets below is the output that is expected.</p>
<p><img src="https://community.servicenow.com/600c0115db07ff0c190dfb2439961920.iix" /></p>
<p> </p>
<p>Page required can be mad public or can be limited to few users on basis of role to be accessed. Since, its only the operational field that is to be worked with for getting up-to date view of services status on the dashboard it makes life for the Business or Technical owner much simpler. As OOB is dependant on creation of an outage record.</p>
<p>Since, it was one of our requirement to make life simpler for Owners thought of sharing hoping it may help others as well.</p>
<p> </p>
<p>Thanks,</p>
<p>Jaspal Singh </p>