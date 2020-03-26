---
title: "Add A Simple KB Search to Any Form"
date: 2013-04-20T06:49:59.000Z
authors: ["eric.szonyi"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=ae4e66addbd0dbc01dcaf3231f961968"
---
<p>Sometimes you may want to launch a KB search with a simple click that will use the contents of one or multiple fields from your form as the search text. It is quite simple.<br/><br/>Create a UI Action and in the Script field you perform a redirect to the kb_find.do UI page. The example searches two example fields from a form. This is server-side so the record will need to be saved before launching the search. The example is also set to make it an OR query.<br/><br/></p><pre class="plain" name="code">

var url = "kb_find.do?sysparm_search=" + escape(current.FIRST_FIELD) + ' ' + escape(current.SECOND_FIELD) + "&amp;sysparm_operator=IR_OR_QUERY";
action.setRedirectURL(url);
</pre><div style="display:none;"> </div><br/>