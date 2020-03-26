---
title: "Make every field on a form readonly"
date: 2011-10-14T19:27:52.000Z
authors: ["SimonMorris"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=8ffc66a5dbd0dbc01dcaf3231f96199a"
---
<p>Xavier asked on the Community forums "<a title="50254" href="/community?id=community_question&sys_id=1c884321db5cdbc01dcaf3231f96190e">Can I make every field on a form read-only?</a>"<br /><br />You can! Use a g_form method to enumerate the editable fields on a form, and then iterate through them, setting them as read-only.<br /><br /><pre __default_attr="plain" __jive_macro_name="code" class="jive_text_macro jive_macro_code"><br /><br />var fields = g_form.getEditableFields();<br />for (var x = 0; x &lt; fields.length; x++) {<br />    g_form.setReadOnly(fields[x], true);<br />}<br /></pre></p>