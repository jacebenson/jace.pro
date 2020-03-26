---
title: "Clear User Settings Tool"
date: 2015-03-22T09:04:38.000Z
authors: ["Jim Coyne"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=06ade2a9dbd0dbc01dcaf3231f961997"
---
<p>I've been meaning to share this functionality for a while, but I have not had the time until now.   It's a Form link UI Action on the User table, available to users with the "admin" role and to all users when looking at their own record:</p><p><img   alt="_Screenshot.png" class="image-0 jive-image" src="0ac14042dbd41304b322f4621f96195a.iix" style="height: auto; width: auto;"/></p><p><span style="font-size: 13.3333330154419px;">It's a quick way to reset a user's settings back to what they originally were when they first logged in.   It might be useful to give your "itil" users permission as well so your Service Desk techs can clear the settings for your users.   </span>The user is asked to confirm the action before deleting records from the following tables:</p><ul><li>Bookmarks [sys_ui_bookmark]</li><li>User Preferences [sys_user_preference]</li><li>List View customizations [sys_ui_list]</li><li>Tags [label]</li><li>Label History [label_history]</li><li>Notification Messages [cmn_notif_message]</li></ul><p></p><p>Name: Clear User Settings</p><p>Table: User [sys_user]</p><p>Order: 100</p><p>Action name: u_clear_user_settings</p><p>Active: Checked</p><p>Show update<span style="font-size: 13.3333330154419px;">: Checked</span></p><p><span style="font-size: 13.3333330154419px;">Client<span style="font-size: 13.3333330154419px;">: Checked</span></span></p><p><span style="font-size: 13.3333330154419px;">Application: Global       (for Fuji and above)</span></p><p><span style="font-size: 13.3333330154419px;">Form link<span style="font-size: 13.3333330154419px;">: Checked</span></span></p><p><span style="font-size: 13.3333330154419px;">Onclick: u_clearUserSettingsClient();</span></p><p><span style="font-size: 13.3333330154419px;">Condition: current.isValidRecord() &amp;&amp; (gs.hasRole("admin") || gs.getUserID() == current.getValue("sys_id"))</span></p><p><span style="font-size: 13.3333330154419px; line-height: 1.5em;">Script:</span></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14269973648644506" jivemacro_uid="_14269973648644506">
<p>//client function that runs 'onclick'</p>
<p>function u_clearUserSettingsClient() {</p>
<p>   var confirmMessage = "Are you sure you want to clear this user's settings?";</p>
<p></p>
<p>   //is this the user's own record?</p>
<p>   if (g_user.userID == g_form.getUniqueValue()){</p>
<p>   confirmMessage = "Are you sure you want to clear your settings?";</p>
<p>   }</p>
<p></p>
<p>   if(confirm(confirmMessage)) {</p>
<p>   gsftSubmit(null, g_form.getFormElement(), "u_clear_user_settings");     //MUST call the 'Action name' set in this UI Action</p>
<p>   }</p>
<p>}</p>
<p></p>
<p>//code that runs on server</p>
<p>//ensure call to server-side function with no browser errors</p>
<p>(function() {</p>
<p>   if (typeof window == 'undefined') u_clearUserSettingsServer();</p>
<p>})();</p>
<p></p>
<p>function u_clearUserSettingsServer() {</p>
<p>   //First, commit any changes to the record</p>
<p>   current.update();</p>
<p></p>
<p>   //get the record's sys_id</p>
<p>   var sysId = current.getValue("sys_id");</p>
<p></p>
<p>   var infoMessage = "Settings cleared - have the user logout then back in for the change to take effect.";</p>
<p>   if (gs.getUserID() == sysId){</p>
<p>   infoMessage = "Settings cleared - logout then back in for the change to take effect.";</p>
<p>   }</p>
<p></p>
<p>   //Clear Bookmarks</p>
<p>   var gr = new GlideRecord('sys_ui_bookmark');</p>
<p>   gr.addEncodedQuery('user=' + sysId);</p>
<p>   gr.deleteMultiple();</p>
<p></p>
<p>   //Clear User Preferences</p>
<p>   var gr = new GlideRecord('sys_user_preference');</p>
<p>   gr.addEncodedQuery('user=' + sysId);</p>
<p>   gr.deleteMultiple();</p>
<p></p>
<p>   //List view customizations</p>
<p>   var gr = new GlideRecord('sys_ui_list');</p>
<p>   gr.addEncodedQuery('sys_user=' + sysId);</p>
<p>   gr.deleteMultiple();</p>
<p></p>
<p>   //Clear Tags</p>
<p>   var gr = new GlideRecord('label');</p>
<p>   gr.addEncodedQuery('owner=' + sysId);</p>
<p>   gr.deleteMultiple();</p>
<p></p>
<p>   //Recently Accessed records/modules</p>
<p>   var gr = new GlideRecord('label_history');</p>
<p>   gr.addEncodedQuery('user=' + sysId);</p>
<p>   gr.deleteMultiple();</p>
<p></p>
<p>   //Notification messages</p>
<p>   var gr = new GlideRecord('cmn_notif_message');</p>
<p>   gr.addEncodedQuery('user=' + sysId);</p>
<p>   gr.deleteMultiple();</p>
<p></p>
<p>   gs.addInfoMessage(infoMessage);</p>
<p>   action.setRedirectURL(current);</p>
<p>}</p>

</pre><p><span style="font-size: 10pt; line-height: 1.5em;"><br/></span></p><p><span style="font-size: 10pt; line-height: 1.5em;">It will then display a message to the user to logout then back in for the change to take effect.   Not 100% sure if that is necessary, but it doesn't hurt.   </span><span __jive_emoticon_name="wink" __jive_macro_name="emoticon" class="jive_macro jive_emote" src="/6.0.3.0/images/emoticons/wink.png"></span></p><p></p><p>If you want <span style="font-size: 13.3333330154419px; line-height: 1.5em;">to give your "itil" users permission to clear settings as well, change the Condition field to:</span></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14269973648574823" jivemacro_uid="_14269973648574823">
<p>current.isValidRecord() &amp;&amp; (gs.hasRole("itil") || gs.getUserID() == current.getValue("sys_id"))</p>

</pre><p><span style="font-size: 13.3333330154419px;"><br/></span></p><p><span style="font-size: 13.3333330154419px;">The "<span style="font-size: 13.3333330154419px;">gs.hasRole("itil")" snippet will return true for "admin" users as well.</span><br/></span></p><p></p><p>Please let me know if there are any tables that I missed.</p>