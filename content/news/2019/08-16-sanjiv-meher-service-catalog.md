---
title: "Service Catalog Use Cases"
date: 2019-08-15T06:53:09.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=d2b6081ddb5fbf041cd8a345ca9619f5"
---
<p>As always, I would like to provide solutions to the most common use cases we work on in our projects. This time it is Service Catalog Use cases.</p>
<p>Use Case 1: Auto-populate Requested For variable<br />Use Case 2: Auto-populate Requested For&#39;s details<br />Use Case 3: Using reference qualifiers<br />Use Case 4: Using advance reference qualifier with script include<br />Use Case 5: Using advance reference qualifier in a Lookup Select Box</p>
<p> </p>
<p>Please mark the blog helpful, if you find it helpful.</p>
<p> </p>
<p><span style="font-size: 14pt;"><strong>Use Case 1: Auto-populate Requested For variable</strong></span></p>
<p>The most common use case we get is auto-populate the requested for field with current logged in user.</p>
<p>You can do that my setting the default value of the variable to javascript:gs.getUserID();</p>
<p><img src="https://community.servicenow.com/5fa6841ddb5fbf041cd8a345ca9619cb.iix" width="600" height="250" /></p>
<p><span style="font-size: 14pt;"><strong>Use Case 2: Auto-populate Requested For&#39;s details</strong></span></p>
<p>Now there could be cases, where based on selection of the user, you want to auto-populate the user&#39;s details, such as manager, email id, company etc. You can utilize this example in other scenarios as well where you have a reference variable and you would like to auto-populate additional information about that reference based on selection of the reference variable.</p>
<p> </p>
<p>In this example, I have 3 variables on the request form, which is related to Requested for.</p>
<p>-Email is a string variable.</p>
<p>-Manager is a reference variable to sys_user table, since manager is a user record.</p>
<p>-Department is a reference variable to cmn_department table</p>
<p> </p>
<p>I would like to auto-populate these field on selection of Requested For.</p>
<p><img src="https://community.servicenow.com/d1798c1ddb9fbf041cd8a345ca9619c5.iix" width="550" height="300" /></p>
<p><strong>Client Script:</strong></p>
<p>I will need an on-Change client script to run when the requested_for changes. This script calls a script include using glide-ajax method. The reason for using GlideAjax is, it is asynchronous and doesn&#39;t impact the UI performance. You shouldn&#39;t use GlideRecord in client script since it is not a best practice and could impact performance of the UI.</p>
<p>Type: onChange</p>
<p>Field: requested_for</p>
<pre class="language-javascript"><code>function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue &#61;&#61; &#39;&#39;) {
        return;
    }

    var ga &#61; new GlideAjax(&#39;SCUserUtil&#39;);
    ga.addParam(&#39;sysparm_name&#39;, &#39;getDetails&#39;);
    ga.addParam(&#39;sysparm_user_id&#39;, newValue);
    ga.getXML(responseParse);

    function responseParse(response) {
        var answer &#61; response.responseXML.documentElement.getAttribute(&#34;answer&#34;);
		var res &#61; JSON.parse(answer);
        g_form.setValue(&#39;email&#39;, res.email);
		g_form.setValue(&#39;manager&#39;, res.manager);
		g_form.setValue(&#39;department&#39;, res.department);
    }
}</code></pre>
<p> </p>
<p><strong>Script Include:</strong></p>
<p>Name: SCUserUtil</p>
<p>Client Callable: True</p>
<p> </p>
<pre class="language-javascript"><code>var SCUserUtil &#61; Class.create();
SCUserUtil.prototype &#61; Object.extendsObject(AbstractAjaxProcessor, {
    getDetails: function() {
        var user_sys_id &#61; this.getParameter(&#39;sysparm_user_id&#39;);
        var user &#61; new GlideRecord(&#39;sys_user&#39;);

        var result &#61; {
            email: &#34;&#34;,
            manager: &#34;&#34;,
            department: &#34;&#34;
        };

        if (user.get(user_sys_id)) {
            result.email &#61; user.email.toString();
            result.manager &#61; user.manager.toString();
            result.department &#61; user.department.toString();
        }

        return JSON.stringify(result);

    },
    type: &#39;SCUserUtil&#39;
});</code></pre>
<p> </p>
<p>And the result is, on selection of Requested for, Email, Manager and Department are auto-populated.</p>
<p><img src="https://community.servicenow.com/8f169811db17ff041cd8a345ca961956.iix" width="550" height="300" /></p>
<p> </p>
<p><span style="font-size: 14pt;"><strong>Use Case 3: Using reference qualifiers</strong></span></p>
<p><span style="font-size: 8pt;">You can use advance reference qualifier to add a filter to a Lookup Select Box or a Reference field. There are different types of reference qualifiers such as</span></p>
<p><span style="font-size: 8pt;">Simple</span></p>
<p><span style="font-size: 8pt;">Advance</span></p>
<p><span style="font-size: 8pt;">An example for a simple reference qualifier is &#39;Show only users from company ACME South America&#39;</span></p>
<p><span style="font-size: 8pt;"><img src="https://community.servicenow.com/8ce99052dbd733001cd8a345ca961992.iix" /></span></p>
<p> </p>
<p><span style="font-size: 8pt;">An example for an advance reference qualifier is &#39;Show users based on another variable on the catalog form&#39;. In below screenshot, I want to show all users based on a variable on the form called &#39;manager&#39;. </span></p>
<p><span style="font-size: 8pt;"><img src="https://community.servicenow.com/2e3adcd2dbd733001cd8a345ca961954.iix" /></span></p>
<p><span style="font-size: 14pt;"><strong>Use Case 4: Using advance reference qualifier with script include</strong></span></p>
<p>You can also use a script include in advance reference qualifier to build a filter.</p>
<p>For ex, here I want to pull a list of groups, the requested for is part of.</p>
<p> </p>
<p>So I will create a Reference variable &#39;group&#39; with reference to Group Table with below reference qualifier. Here I am calling a script include &#39;SCUserUtil&#39; and passing the &#39;requested_for&#39; as parameter to the function &#39;getGroups&#39;</p>
<pre class="language-javascript"><code>javascript:&#39;sys_idIN&#39;&#43;new global.SCUserUtil().getGroups(current.variables.requested_for)</code></pre>
<p> </p>
<p>Below is the script include which I have used Use Case 2 as well. I just added another function to it.</p>
<p>Name: SCUserUtil</p>
<p>Client Callable: True</p>
<pre class="language-javascript"><code>var SCUserUtil &#61; Class.create();
SCUserUtil.prototype &#61; Object.extendsObject(AbstractAjaxProcessor, {
    getDetails: function() {
        var user_sys_id &#61; this.getParameter(&#39;sysparm_user_id&#39;);
        var user &#61; new GlideRecord(&#39;sys_user&#39;);

        var result &#61; {
            email: &#34;&#34;,
            manager: &#34;&#34;,
            department: &#34;&#34;
        };

        if (user.get(user_sys_id)) {
            result.email &#61; user.email.toString();
            result.manager &#61; user.manager.toString();
            result.department &#61; user.department.toString();
        }

        return JSON.stringify(result);

    },
	
	getGroups: function(user_id) {
		var grpList &#61; [];
		var grp &#61; new GlideRecord(&#39;sys_user_grmember&#39;);
		grp.addQuery(&#39;user&#39;,user_id);
		grp.query();
		
		while(grp.next())
		{
			grpList.push(grp.getValue(&#39;group&#39;));
		}
		return grpList.toString();
	},
    type: &#39;SCUserUtil&#39;
});</code></pre>
<p> </p>
<p><span style="font-size: 14pt;"><strong>Use Case 5: Using advance reference qualifier in a Lookup Select Box</strong></span></p>
<p>The above filter in use case 4 works fine when the Group variable is a Reference type.</p>
<p>But when using a Lookup Select Box, the select box <strong>doesn&#39;t refresh</strong> with new values automatically. You need to add a variable attribute to refresh it automatically.</p>
<p>The variable attribute should be as below. You need to assign the variable name to the ref_qual_elements, based on which the Lookup Select box should refresh. For ex, here I want the Group variable list to refresh its list based on &#39;requested_for&#39; variable.</p>
<pre class="language-markup"><code>ref_qual_elements&#61;requested_for</code></pre>
<p><img src="https://community.servicenow.com/36d560dedb1b33001cd8a345ca96198e.iix" /></p>
<p>Let me know, if you think any other use case can be added which could be helpful to everyone.</p>