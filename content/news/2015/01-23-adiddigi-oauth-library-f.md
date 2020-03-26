---
title: "oAuth library for GotoMeeting"
date: 2015-01-23T04:16:57.000Z
authors: ["adiddigi"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=109d6a69dbd0dbc01dcaf3231f9619a5"
---
<p>Earlier last year, I blogged about a way to mimic <a title="" _jive_internal="true" href="/community?id=community_blog&sys_id=cffc66a5dbd0dbc01dcaf3231f96199b">oAuth using HTTP Client</a>. But it is of no use because the package HTTPClient is retired from Calgary. Also, we aren't using the Service Now features to do the same. Henceforth, I came up with a another way to do<a title="eveloper.citrixonline.com/api/gotomeeting-rest-api/apimethod/oauth" href="https://developer.citrixonline.com/api/gotomeeting-rest-api/apimethod/oauth"> oAuth authentication for GotoMeeting</a>.</p><p></p><p>Again this might be a repetition of a post that I made long back, but don't seem to find that post. Also this isn't packaged well as the main goal of this post isn't re-usability, but to go over some details of oAuth.</p><p></p><p>Google, Twitter, Github, GotoMeeting and many others will follow a slightly different way to do a oAuth 2.0 authentication. I will slowly start adding more methods to this script soon for other websites too.</p><p></p><p><span style="text-decoration: underline;"><strong>Philosophy of this Script Include:</strong></span></p><p></p><p>1. Never use any <a title="ki.servicenow.com/index.php?title=Packages_Call_Replacement_Script_Objects" href="http://wiki.servicenow.com/index.php?title=Packages_Call_Replacement_Script_Objects">Package</a> code, unless absolutely necessary. Always use any Service Now OOB functionality if available.</p><p></p><p>That's the only rule this Script Include and it's corresponding code will abide by.</p><p></p><p>Before I start with the code, I will explain oAuth 2.0   for GotoMeeting in a nutshell:</p><p></p><p>1. From service now, redirect the user to the Citrix site, where the user will authenticate the third party( here it's service now)</p><p>2. Once the user authenticates, Citrix can redirect back to a Service Now URL where in it appends something called [code] code[/code]. We need to exchange this `code` to a Authorization code, with which you will do all your   other calls.</p><p>3. Store the Authorization code   somewhere, so that you can make subsequent calls until it expires.</p><p></p><p></p><p>Before you do any of this, you need to register yourself on the Citrix Developer site for a Developer Key, that you will use so that Citrix identifies your application. Also create an App.</p><p></p><p>Let's first prepare the URL that you need to point the user to, the below piece of code will do that :</p><p></p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14219660753061571" jivemacro_uid="_14219660753061571" modifiedtitle="true">
<p>_gotoCall:function(){</p>
<p>               //Some common variables.</p>
<p></p>
<p>               var developer_key = 'dce44dd4d7c3d5153a9342e81b7df08c';</p>
<p><span>               var URL = '</span><a title="k-external-small" class="jive-link-external-small" href="https://api.citrixonline.com/oauth/authorize?client_id='+developer_key;" rel="nofollow" target="_blank">https://api.citrixonline.com/oauth/authorize?client_id='+developer_key;</a></p>
<p></p>
<p>               //Goto meeting's oAuth can be summarised this way.</p>
<p>               //1. Point the user's browser to the link upon which you will receive a code.</p>
<p>               //2. The code should be exchanged to a Access token</p>
<p>               //Check if the user already has a access token for GOTOMeeting</p>
<p>               var grOAuth   = new GlideRecord("u_oauth_token_info");</p>
<p>               grOAuth.addQuery("u_user",gs.getUserID());</p>
<p>               grOAuth.addQuery("state","valid");</p>
<p>               grOAuth.query();</p>
<p>               //We already have a User and his payload. Hence we don't do the calls again, until the access is</p>
<p>               //revoked. This will not be handles in this Script Include. As we only do oAuth.</p>
<p>               if(grOAuth.next()){</p>
<p>                       //if there is already an access token return JSON object which can be used for furthur calls.</p>
<p>       </p>
<p>                       return grOAuth.u_payload;</p>
<p>               }</p>
<p>               else{</p>
<p>                       //return the URL - and point it to browser.</p>
<p><span>                       //responsibilty of the code to check if it has a `</span><a title="" _jive_internal="true" href="/" rel="nofollow" target="_blank">https://</a><span>` and decide if it's a JSON object</span></p>
<p>                       //or URL</p>
<p><span>                       //A redirect URL need to be specified like this : </span><a title="k-external-small" class="jive-link-external-small" href="https://api.citrixonline.com/oauth/authorize?client_id=" rel="nofollow" target="_blank">https://api.citrixonline.com/oauth/authorize?client_id=</a><span>{api_key}&amp;redirect_uri={redirect}</span></p>
<p>       </p>
<p><span>                       var redirect_uri = '</span><a title="" _jive_internal="true" href="/" rel="nofollow" target="_blank">https://</a><span>&lt;instancename&gt;.service-now.com/oAuth_callback.do?';</span></p>
<p>                       redirect_uri = redirect_uri+"&amp;sysparm_client=goto_meeting"+"&amp;sysparm_userID="+this.user_id;</p>
<p>                       var finalURL = URL+'&amp;redirect_uri='+redirect_uri;</p>
<p>                       if(this.enable_log) this.log("The URL being sent to Citrix "+finalURL);</p>
<p>                               return finalURL;</p>
<p>               }</p>
<p></p>
<p></p>
<p>       }</p>



</pre><p></p><p>If there is already a Valid key for the user, then just return the payload which Contains the Authorization code. Else return the URL to which you need to point the code.</p><p></p><p>The user will need to login into that URL, Login and approve your application. Once he does that, GOTOmeeting calls a URL on Service Now.</p><p>You can use a UI page as a |redirect_url| but you need to make it a <a title="ki.servicenow.com/index.php?title=Making_a_Page_Public" href="http://wiki.servicenow.com/index.php?title=Making_a_Page_Public">Public Page</a>.</p><p></p><p>My redirect URL is something like this :   <span style="color: #484848; font-family: Arial, sans-serif;"><a title="k-external-small" class="jive-link-external-small" href="https://instanceName.service-now.com/oAuth_callback.do&amp;sysparm_client=goto_meeting" rel="nofollow" target="_blank">https://instanceName.service-now.com/oAuth_callback.do&amp;sysparm_client=goto_meeting</a></span></p><p></p><p>Now, the reason why we are setting |sysparm_client| is because, we can extend the UI page by setting that parameter. Say you are going to do a Google oAuth integration, then you will just need to change |sysparm_client| to |google|.</p><p></p><p>And the code in the UI page is something like this( You can do a LOT here, I'm making it simple)</p><p>UI Page Name : oAuth_callback</p><p>[code]</p><p></p><pre __default_attr="xml" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_1421966075240975" jivemacro_uid="_1421966075240975">
<p>&lt;?xml version="1.0" encoding="utf-8" ?&gt;</p>
<p>&lt;j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null"&gt;</p>
<p>&lt;g:evaluate&gt;</p>
<p>var URL = RP.getReferringURL();</p>
<p>var code = URL.split('code')[1].replace('=','');</p>
<p><span style="font-size: 10pt; line-height: 1.5em;">var gr = new GlideRecord("u_oauth_token_info");</span></p>
<p>gr.initialize();</p>
<p>gr.u_user = gs.getUserID();</p>
<p>gr.u_code = code;</p>
<p>gr.insert();</p>
<p></p>
<p></p>
<p>&lt;/g:evaluate&gt;</p>
<p>You have been successfully authorized. You can now close this window.</p>
<p>&lt;/j:jelly&gt;</p>



</pre><p>[/code]</p><p></p><p>From the UI page, we glide the table, and update the record for the user with the code we received from Citrix.</p><p></p><p>The last step: Exchange |code| for |Authorization code|</p><p></p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro _jivemacro_uid_1421966075210415 jive_macro_code" jivemacro_uid="_1421966075210415" modifiedtitle="true">
<p>gotoExchange:function(){</p>
<p>               var developer_key = 'dce44dd4d7c3d5153a9342e81b7df08c';</p>
<p>               var grOAuth   = new GlideRecord("u_oauth_token_info");</p>
<p>               grOAuth.addQuery("u_user",gs.getUserID());</p>
<p>               grOAuth.addQuery("state","valid");</p>
<p>               grOAuth.query();</p>
<p>               //We already have a User and his payload. Hence we don't do the calls again, until the access is</p>
<p>               //revoked. This will not be handles in this Script Include. As we only do oAuth.</p>
<p>               if(grOAuth.next()){</p>
<p>       </p>
<p>                       var r = new RESTMessage('GoTo Meeting', 'get');</p>
<p>       </p>
<p>       </p>
<p>                       r.setStringParameter('code',grOAuth.u_code);</p>
<p>                       r.setStringParameter('client_id',developer_key);</p>
<p>                       var response = r.execute();</p>
<p>                       gs.log(response.getBody());</p>
<p>                       if(response.haveError()){</p>
<p>                               grOAuth.u_payload   = response.getBody();</p>
<p>               </p>
<p>                       }</p>
<p>                       else{</p>
<p>               </p>
<p>                               var payload = response.getBody();</p>
<p>                               </p>
<p>                               grOAuth.u_payload = payload;</p>
<p>                               var expiryTime = new JSON().decode(payload)['expires_in'];//stores the expiry for this token in seconds.</p>
<p>                               </p>
<p>                               var hours = (0.000277778 * expiryTime)/24;</p>
<p>                               </p>
<p>                               var days = -1*hours;</p>
<p>                               </p>
<p>                               grOAuth.setValue('u_expiry_date',gs.daysAgo(days));</p>
<p>               </p>
<p>               </p>
<p>               </p>
<p>                       }</p>
<p>                       grOAuth.update();</p>
<p>       </p>
<p>       </p>
<p>               }</p>
<p></p>
<p>       }</p>



</pre><p></p><p></p><p>As you can see, I am using something called |new RESTMessage()| you need to create a RESTMessage before hand and point it to this URL |<a href="https://api.citrixonline.com/oauth/access_token?grant_type=authorization_code&amp;code=${code}&amp;client_id=${client_id}" title="https://api.citrixonline.com/oauth/access_token?grant_type=authorization_code&amp;code=${code}&amp;client_id=${client_id}">https://api.citrixonline.com/oauth/access_token?grant_type=authorization_code&amp;code=${code}&amp;client_id=${client_id}</a>|</p><p></p><p>There you go. Once you execute the above script, you will get the JSON payload in the below format :</p><p></p><p></p><p><span style="color: #dd1144; font-family: Menlo, Monaco, 'Courier New', monospace; font-size: 12px; background-color: #f7f7f9;">{</span></p><p><span style="color: #dd1144; font-family: Menlo, Monaco, 'Courier New', monospace; font-size: 12px; background-color: #f7f7f9;">"access_token":"1234567890",</span></p><p><span style="color: #dd1144; font-family: Menlo, Monaco, 'Courier New', monospace; font-size: 12px; background-color: #f7f7f9;">"expires_in":"30758399",</span></p><p><span style="color: #dd1144; font-family: Menlo, Monaco, 'Courier New', monospace; font-size: 12px; background-color: #f7f7f9;">"refresh_token":"7ae3a10234234161914ec65b8db6650c",</span></p><p><span style="color: #dd1144; font-family: Menlo, Monaco, 'Courier New', monospace; font-size: 12px; background-color: #f7f7f9;">"organizer_key":"2000000000003345",</span></p><p><span style="color: #dd1144; font-family: Menlo, Monaco, 'Courier New', monospace; font-size: 12px; background-color: #f7f7f9;">"account_key":"200000000000002211",</span></p><p><span style="color: #dd1144; font-family: Menlo, Monaco, 'Courier New', monospace; font-size: 12px; background-color: #f7f7f9;">"account_type":"corporate"</span></p><p><span style="color: #dd1144; font-family: Menlo, Monaco, 'Courier New', monospace; font-size: 12px; background-color: #f7f7f9;">}</span></p><p></p><p></p><p>You can use the |access_token| to make any subsequent calls.</p><p></p><p>The below is the complete Script Include :</p><p></p><p>Name : OAuth</p><p></p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14219660751484123" jivemacro_uid="_14219660751484123">
<p>var OAuth = Class.create();</p>
<p></p>
<p></p>
<p>OAuth.prototype = {</p>
<p></p>
<p>       /* Constructor. It handles all the oAuth 2.0 calls*/</p>
<p></p>
<p>       initialize:function(/*Implementation client name*/ impl_name,/*enable log*/ enable_log){</p>
<p></p>
<p></p>
<p>               this.props = new Packages.java.util.Properties();//for storing properties.</p>
<p>               this.impl_name = impl_name;</p>
<p>               this.user_id = gs.getUserID();</p>
<p>               this.enable_log = enable_log;</p>
<p></p>
<p>       },</p>
<p></p>
<p>       /** Execute function, that handles all the oAuth 2.0 calls*/</p>
<p></p>
<p>       execute:function(){</p>
<p></p>
<p>               if(this.impl_name == 'goto_meeting'){</p>
<p>       </p>
<p>                       return this._gotoCall();</p>
<p>               }</p>
<p>       },</p>
<p>       _gotoCall:function(){</p>
<p>               //Some common variables.</p>
<p></p>
<p>               var developer_key = 'dce44dd4d7c3d5157a9342e81b7df08c'; //your developer key</p>
<p><span>               var URL = '</span><a title="k-external-small" class="jive-link-external-small" href="https://api.citrixonline.com/oauth/authorize?client_id='+developer_key;" rel="nofollow" target="_blank">https://api.citrixonline.com/oauth/authorize?client_id='+developer_key;</a></p>
<p></p>
<p>               //Goto meeting's oAuth can be summarised this way.</p>
<p>               //1. Point the user's browser to the link upon which you will receive a code.</p>
<p>               //2. The code should be exchanged to a Access token</p>
<p>               //Check if the user already has a access token for GOTOMeeting</p>
<p>               var grOAuth   = new GlideRecord("u_oauth_token_info");</p>
<p>               grOAuth.addQuery("u_user",gs.getUserID());</p>
<p>               grOAuth.addQuery("state","valid");</p>
<p>               grOAuth.query();</p>
<p>               //We already have a User and his payload. Hence we don't do the calls again, until the access is</p>
<p>               //revoked. This will not be handles in this Script Include. As we only do oAuth.</p>
<p>               if(grOAuth.next()){</p>
<p>                       //if there is already an access token return JSON object which can be used for furthur calls.</p>
<p>       </p>
<p>                       return grOAuth.u_payload;</p>
<p>               }</p>
<p>               else{</p>
<p>                       //return the URL - and point it to browser.</p>
<p><span>                       //responsibilty of the code to check if it has a `</span><a title="" _jive_internal="true" href="/" rel="nofollow" target="_blank">https://</a><span>` and decide if it's a JSON object</span></p>
<p>                       //or URL</p>
<p><span>                       //A redirect URL need to be specified like this : </span><a title="k-external-small" class="jive-link-external-small" href="https://api.citrixonline.com/oauth/authorize?client_id=" rel="nofollow" target="_blank">https://api.citrixonline.com/oauth/authorize?client_id=</a><span>{api_key}&amp;redirect_uri={redirect}</span></p>
<p>       </p>
<p><span>                       var redirect_uri = '</span><a title="k-external-small" class="jive-link-external-small" href="https://infypov.service-now.com/oAuth_callback.do?';" rel="nofollow" target="_blank">https://infypov.service-now.com/oAuth_callback.do?';</a></p>
<p>                       redirect_uri = redirect_uri+"&amp;sysparm_client=goto_meeting"+"&amp;sysparm_userID="+this.user_id;</p>
<p>                       var finalURL = URL+'&amp;redirect_uri='+redirect_uri;</p>
<p>                       if(this.enable_log) this.log("The URL being sent to Citrix "+finalURL);</p>
<p>                               return finalURL;</p>
<p>               }</p>
<p></p>
<p></p>
<p>       },</p>
<p></p>
<p>       gotoExchange:function(){</p>
<p>               var developer_key = 'dce44dd4d7c3d5153a9342e81b7df08c';</p>
<p>               var grOAuth   = new GlideRecord("u_oauth_token_info");</p>
<p>               grOAuth.addQuery("u_user",gs.getUserID());</p>
<p>               grOAuth.addQuery("state","valid");</p>
<p>               grOAuth.query();</p>
<p>               //We already have a User and his payload. Hence we don't do the calls again, until the access is</p>
<p>               //revoked. This will not be handles in this Script Include. As we only do oAuth.</p>
<p>               if(grOAuth.next()){</p>
<p>       </p>
<p>                       var r = new RESTMessage('GoTo Meeting', 'get');</p>
<p>       </p>
<p>       </p>
<p>                       r.setStringParameter('code',grOAuth.u_code);</p>
<p>                       r.setStringParameter('client_id',developer_key);</p>
<p>                       var response = r.execute();</p>
<p>                       gs.log(response.getBody());</p>
<p>                       if(response.haveError()){</p>
<p>                               grOAuth.u_payload   = response.getBody();</p>
<p>               </p>
<p>                       }</p>
<p>                       else{</p>
<p>               </p>
<p>                               var payload = response.getBody();</p>
<p>                       </p>
<p>                               grOAuth.u_payload = payload;</p>
<p>                               var expiryTime = new JSON().decode(payload)['expires_in'];//stores the expiry for this token in seconds.</p>
<p>                       </p>
<p>                               var hours = (0.000277778 * expiryTime)/24;</p>
<p>                       </p>
<p>                               var days = -1*hours;</p>
<p>                       </p>
<p>                               grOAuth.setValue('u_expiry_date',gs.daysAgo(days));</p>
<p>               </p>
<p>               </p>
<p>               </p>
<p>                       }</p>
<p>                       grOAuth.update();</p>
<p>       </p>
<p>       </p>
<p>               }</p>
<p></p>
<p>       },</p>
<p></p>
<p></p>
<p>       log:function(value){</p>
<p>               gs.log("Logging from oAuth 2.0" + value);</p>
<p>       }</p>
<p></p>
<p>};</p>



</pre><p></p><p><span style="text-decoration: underline;">Usage:</span></p><p></p><p>First call,</p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14219660751328157" jivemacro_uid="_14219660751328157">
<p>var payload = new OAuth('goto_meeting',true<span style="font-size: 10pt; line-height: 1.5em;">).execute();</span></p>
<p><span style="font-size: 10pt; line-height: 1.5em;"><span>if(payload.indexOf('</span><a title="" _jive_internal="true" href="/" rel="nofollow" target="_blank">https://</a><span>') &gt; -1){ // we have a URL</span></span></p>
<p><span style="font-size: 10pt; line-height: 1.5em;">// redirect the user.<br/></span></p>
<p><span style="font-size: 10pt; line-height: 1.5em;">}</span></p>
<p><span style="font-size: 10pt; line-height: 1.5em;">else{</span></p>
<p>//use the payload.</p>
<p>|payload| gives the JSON object, which you can process and exteact the |authorization code|</p>
<p>}</p>


</pre><p>If the user is redirected, then an entry will be made in the intermediate table. Once that is done, run this:</p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14219660751157815" jivemacro_uid="_14219660751157815">
<p>new OAuth().gotoExchange(); // This should give you the Payload which has |Authorization code|</p>


</pre><p></p><p>Another oAuth library ( for twitter ) by Andrew Venables is here : <a href="https://share.servicenow.com/app.do#/detailV2/93411faf874075002e7fb92489434d3d/overview" title="https://share.servicenow.com/app.do#/detailV2/93411faf874075002e7fb92489434d3d/overview">ServiceNow Share</a></p><p><span style="text-decoration: underline;">Thanks</span></p><p></p><p>To <span style="color: #000000; font-family: Arial; font-size: 15px; background-color: #e9eeff;">jimmy.yuan</span> for being a <a title=".wikipedia.org/wiki/Drona" href="http://en.wikipedia.org/wiki/Drona">Dronacharya</a> to an <a title=".wikipedia.org/wiki/Ekalavya" href="http://en.wikipedia.org/wiki/Ekalavya">Ekalavya</a>.</p>