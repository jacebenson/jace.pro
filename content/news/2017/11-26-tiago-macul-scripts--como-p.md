---
title: "Scripts Como pegar o SessionId vusersessionsessionid Logged in User"
date: 2017-11-25T08:58:20.000Z
authors: ["Tiago Macul"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=71dda6e9dbd0dbc01dcaf3231f9619f7"
---
<p>Scripts: Como pegar o SessionId?</p><p></p><p>Logged in User</p><p></p><p>v_user_session.session_id</p><p></p><p></p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_macro_code _jivemacro_uid_15115787848811774 jive_text_macro" data-renderedposition="176_8_1192_16" jivemacro_uid="_15115787848811774"><p>gs.print("SessionId = " + gs.getSession().getSessionID());</p></pre>