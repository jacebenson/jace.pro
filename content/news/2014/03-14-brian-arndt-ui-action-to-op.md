---
title: "UI action to open a form in a new window"
date: 2014-03-13T22:32:40.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=e3cce265dbd0dbc01dcaf3231f961956"
---
<p>I've long been waiting for a ServiceNow platform feature to allow me, when looking at the form view of an existing record in the content frame of the standard user interface, to open the form in its own window. The need typically occurs when I want to look up some related piece of information and I need to navigate away from the current record but want to keep it close at hand.</p><p></p><p>In lieu of a ServiceNow feature, I created my own UI action.</p><p></p><p>Name: Pop Out (or whatever you want to call it)</p><p>Table: Global</p><p>Order: -2,000 (or wherever you want to put it)</p><p>Client: true</p><p>Form button: true</p><p>Show update: true</p><p>Hint: Open this record in a new window</p><p>Onclick: popOutLink()</p><p>Condition: none (unless you want it only available for certain users)</p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_13947283358514779" jivemacro_uid="_13947283358514779" modifiedtitle="true">
<p>function popOutLink() {</p>
<p>   g_form.checkMandatory = false; //opt out of the check for empty mandatory fields</p>
<p>   var table = g_form.getTableName(); //used to build the table name portion of the URL</p>
<p>   var record = g_form.getUniqueValue(); //used to build the unique ID portion of the URL</p>
<p>   //if any of the fields have changed without being saved yet, confirm</p>
<p>   if(g_form.modified){</p>
<p>             if(!confirm('Changes have been made that will not be carried over to the new window.\n\nDo you want to continue opening this record in a new window?')) {</p>
<p>             return;</p>
<p>             }</p>
<p>   }</p>
<p>   window.open(table + '.do?sys_id=' + record);</p>
<p>}</p>
</pre><p></p><p>While I'd prefer the function to be part of the platform (a little popout arrow would look right at home in the title bar next to the attachment icon), this gets the job done until <a title="scott.ferguson" __default_attr="4072" __jive_macro_name="user" class="jive_macro_user jive_macro" data-objecttype="3" data-orig-content="scott.ferguson" href="/community?id=community_user_profile&user=b92352a5db1c1fc09c9ffb651f961945">scott.ferguson</a> can make that happen).</p><p></p><p>Let me know if you have any ideas for improvement!</p>