---
title: "User Criteria on Any table Including Custom Tables"
date: 2019-02-06T04:50:02.000Z
authors: ["dvp"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=a3beb0c0db6baf804abd5583ca9619d9"
---
<p>User criteria is one of the wonderful features SN provided, but it is opened to only a set of tables.  It is a handy configuration to grant access to the record against user information like companies, roles, groups.</p>
<p>Recently there was a requirement where we need to grant read access to records dynamically. After a little research, I found out that there are similar needs by many developers. Below are some of scenarios that I came across</p>
<ul><li>Catalogs</li><li>News</li><li>Announcements(Fixed in London)</li></ul>
<p>Here is what I had implemented</p>
<p>1. Create a m2m relation between User Criteria and desired table (u_news). Navigate to sys_m2m.LIST and submit the details as shown in the screenshot</p>
<p><img src="07ea4a53dbdfeb004abd5583ca961924.iix" width="1395" height="241" /></p>
<p><img src="869cce1bdbdfeb004abd5583ca961919.iix" width="1281" height="93" /></p>
<p>2. Add the user criteria related list to News form by Configure &gt; Related Lists</p>
<p><img src="129b8e97dbdfeb004abd5583ca96199e.iix" width="595" height="180" /></p>
<p>3. Create a script include</p>
<p>Name: UserCriteria</p>
<p>Client callable: False</p>
<p><strong>Script</strong></p>
<pre class="language-javascript"><code>var UserCriteria &#61; Class.create();
UserCriteria.prototype &#61; {
	initialize: function() {
	},
	
	
	canAccess: function(table, record, id){
		
		//Get all the user criteria&#39;s for the seleted record
		var usr_crit &#61; new GlideRecord(table);
		usr_crit.addQuery(record, id);
		usr_crit.query();
		
		// Grant access to record If there are no user criteria&#39;s for the record
		if(usr_crit.getRowCount() &#61;&#61; 0)
			return true;
		
		while (usr_crit.next()) {
			
			var crit &#61; new GlideRecord(&#39;user_criteria&#39;);
			crit.addQuery(&#39;sys_id&#39;, usr_crit.u_user_criteria);
			crit.addActiveQuery();
			crit.query();
			
			while(crit.next()){
				
				//Get company, location and department information of the current user. 
				var gr &#61; new GlideRecord(&#39;sys_user&#39;);
				gr.addQuery(&#39;sys_id&#39;, gs.getUserID());
				gr.query();
				
				var company, location, department &#61; &#39;&#39;;
				
				if(gr.next()){
					
					company &#61; gr.company;
					location &#61; gr.location;
					department &#61; gr.department;
				}
				
				var groups &#61; [];
				groups &#61; crit.group.toString();
				
				var evaluator &#61; new GlideScopedEvaluator();
				
				var match_arr &#61; [];
				
				// Check if the current user is one of the users in user criteria
				if(crit.user !&#61; &#39;&#39;){
					
					if(crit.user.indexOf(gs.getUserID()) &gt; -1)
						match_arr.push(true);
					else
						match_arr.push(false);
				}
				
				// Check if the Groups of a user belong to is one of groups in user criteria
				if(crit.group!&#61; &#39;&#39;){
					match_arr.push(this._isMyGroup(groups));
				}
				
				
				// Check if logged in user roles is one of roles in user criteria
				if(crit.role !&#61; &#39;&#39;){
					match_arr.push(gs.hasRole(crit.role.getDisplayValue()));
				}
				
				// Check if the logged in user company is one of companies in user criteria
				if(crit.company !&#61; &#39;&#39; &amp;&amp; company !&#61; &#39;&#39;){
					
					if(crit.company.indexOf(company) &gt; -1)
						match_arr.push(true);
					else
						match_arr.push(false);
				}
				
				// Check if the logged in user location is one of locations in user criteria
				if(crit.location !&#61; &#39;&#39; &amp;&amp; location !&#61; &#39;&#39;){
					if(crit.location.indexOf(location) &gt; -1)
						match_arr.push(true);
					else
						match_arr.push(false);
				}
				
				// Check if the logged in user department is one of departments in user criteria
				if(crit.department !&#61; &#39;&#39; &amp;&amp; department !&#61; &#39;&#39;){
					if(crit.department.indexOf(department) &gt; -1)
						match_arr.push(true);
					else
						match_arr.push(false);
				}
				
				//execute the script in user criteria
				if(crit.advanced &#61;&#61; true){
					match_arr.push(evaluator.evaluateScript(crit, &#39;script&#39;, &#39;&#39;));
				}
				
				
				var matched;
				
				//If Match all, in user criteria is marked false, then any one of fields match is enough
				if(crit.match_all &#61;&#61; false){
					
					if(match_arr.indexOf(true) &gt; -1)
						matched &#61; true;
					else
						matched &#61; false;
				}
				
				// If Match all is marked true then all of the values should be true
				else{
					if(match_arr.every(this._isValueTrue) &#61;&#61; true)
						matched &#61; true;
					else
						matched &#61; false;
				}

				// Matching one of the user criteria should return the value. No need to execute the rest of the user criteria
				if(matched &#61;&#61; true){
					return true;
				}
				
			}
		}
		// If none of the user criteria matches then return false
		return false;
		
	},
	
	_isMyGroup: function(groupIDs){
		
		var groups_arr &#61; groupIDs.split(&#39;,&#39;);
		
		for(i&#61;0; i&lt;groups_arr.length; i&#43;&#43;){
			if(gs.getUser().isMemberOf(groups_arr[i]))
				return true;
		}
		return false;
	},
	
	// Function to verify if all the values in an array are true
	_isValueTrue: function (currentValue) {
		return currentValue &#61;&#61; true;
	},
	
	type: &#39;UserCriteria&#39;
};</code></pre>
<p>4. Create a read acl to restrict read access to the record and use the below script</p>
<pre class="language-javascript"><code>answer &#61; new UserCriteria().canAccess(&#39;u_m2m_news_user_criteria&#39;, &#39;u_news&#39;, current.sys_id);

/* canAccess menthod accepts the following input paramenters
table: M2M table name
record: Field name of News reference field on M2M table
id: sys_id of news record
*/</code></pre>
<p>5. Use GlideRecordSecure for reference qualifers and glide queries, as GlideRecordSecure enforce read ACL rules.</p>
<p> </p>
<p>Hope this helps!!</p>