---
title: "Methods for Chat Actions"
date: 2013-03-18T07:27:29.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=7ddca665dbd0dbc01dcaf3231f961997"
---
<p>I was trying to configure a few custom chat actions but outside but had some challenges finding documentation on the methods available to the g_chat object. I decided to use standard Javascript to enumerate the methods in the g_form object to see what was available to use. I placed the following in my Chat Action - Onclick Action Script:<br/><br/></p><pre class="plain" name="code">

var x;
for (var str in g_chat) {
//x += str + ': ' + g_chat.getProperty(str);
if(str.startsWith('get')) { x+= str + '\n' + g_chat[str] + '\n\n'; }
}
alert(x);
</pre><div style="display:none;"> </div><br/><br/><span>So from here it gave me all of the 'get' methods and the functions behind them so I would also know what methods had arguments. This is a useful approach for enumerating JavaScript objects when they are not full documented. Here is the output for reference:</span><br/><br/><pre class="plain" name="code">

getOffset
function () {
return this.box.getOffset();
}

getWidth
function () {
return this.box.getWidth();
}

getHeight
function () {
return this.box.getHeight();
}

getMessageType
function () {
return this.getType() == LiveGUI.WINDOW_CONVERSATION ? LiveGUI.MESSAGE_TYPE_CHAT : LiveGUI.MESSAGE_TYPE_MUC;
}

getThreadID
function () {
return this.getProperty(LiveGUI.WIN_PROP_THREAD_ID) || '';
}

getUser
function (userJID) {
var i = this._users.length;
var user;
while (i--) {
user = this._users&lt;i&gt;;
if (user.jid.toBareJID() == userJID.toBareJID())
return user;
}
return null;
}

getActiveUsers
function () {
return this._getSortedUsersByStatus(this.STATUS_ACTIVE);
}

getInvitedUsers
function () {
return this._getSortedUsersByStatus(this.STATUS_INVITED);
}

getConversationUserJID
function () {
return this._users[1] ? this._users[1].jid : null;
}

getChatType
function () {
if (this.getType() == LiveGUI.WINDOW_CONVERSATION) {
return LiveGUI.MESSAGE_TYPE_CHAT;
}
else if (this.getProperty(LiveGUI.WIN_PROP_QUEUE_JID)) {
var jid = new JID(this.getProperty(LiveGUI.WIN_PROP_CHAT_QUEUE_USER));
if (LiveMux.get().getUserJID().equals(jid))
return LiveGUI.TYPE_QUEUE_USER;
jid = new JID(this.getProperty(LiveGUI.WIN_PROP_CHAT_QUEUE_AGENT));
if (LiveMux.get().getUserJID().equals(jid))
return LiveGUI.TYPE_QUEUE_AGENT;
}
return LiveGUI.MESSAGE_TYPE_MUC;
}

getChatQueueUser
function () {
var bareJID = this.getProperty(LiveGUI.WIN_PROP_CHAT_QUEUE_USER);
return bareJID ? new JID(bareJID).getID() : '';
}

getChatQueueAgent
function () {
var bareJID = this.getProperty(LiveGUI.WIN_PROP_CHAT_QUEUE_AGENT);
return bareJID ? new JID(bareJID).getID() : '';
}

getView
function () {
return this.options.view;
}

getCreationDate
function () {
return this.options.creationDate;
}

getInternalId
function () {
return this.options.internalId;
}

getWindowJID
function () {
return this.options.windowJID;
}

getChannelJID
function () {
return this.options.channelJID;
}

getType
function () {
return this.options.type;
}

getProperty
function (k) {
return this.options.dataProps[k];
}

getProperties
function () {
return this.options.dataProps;
}

getDisplayProperty
function (k) {
return this.options.displayProps[k];
}

getDisplayProperties
function () {
return this.options.displayProps;
}

getWindowTitle
function () {
return this.getProperty(LiveGUI.WIN_PROP_TITLE);
}

getWindowIconClass
function () {
return this._windowIconClass;
}
</pre><div style="display:none;"> </div>