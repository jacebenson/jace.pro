---
title: " ways to set up your Service Portal for redirection SUCCESS"
date: 2017-04-01T04:24:44.000Z
authors: ["Brandon May"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=cbcda2e9dbd0dbc01dcaf3231f961949"
---
<p>Wouldn&#39;t it be nice if there were only two types of users and two points to direct traffic through your site? When dealing with redirection on an enterprise level, it&#39;s rare to just send &#39;A users&#39; here, and &#39;B users&#39; there. Usually, there is an A user, a B user, an A.b user, a B.a user, an A.b.c….you get where I&#39;m going. I receive a lot of questions regarding how to set up login redirection with Service Portal.</p>
<p> </p>
<p>Most of the content here can be found throughout the <a title="cs.servicenow.com/" href="http://docs.servicenow.com/" rel="nofollow">docs</a> site (like the <a title="ocs.servicenow.com/bundle/istanbul-servicenow-platform/page/administer/security/concept/c_LoginSecurity.html" href="https://docs.servicenow.com/bundle/istanbul-servicenow-platform/page/administer/security/concept/c_LoginSecurity.html" rel="nofollow">login security page </a>and <a title="ocs.servicenow.com/bundle/istanbul-servicenow-platform/page/build/service-portal/concept/c_SPSSOLoginAndRedirects.html" href="https://docs.servicenow.com/bundle/istanbul-servicenow-platform/page/build/service-portal/concept/c_SPSSOLoginAndRedirects.html" rel="nofollow">Service Portal Single Sign On, logins, and URL redirects</a>), community, and external resources. This is meant to be a sort-of hub for that information as well as a place to provide ways of setting up your redirection in Service Portal, asking questions on setting it up, and where other members of the community can share their tips. I will provide links to sources where I can. This post is focused on login redirection, <strong>not</strong> UI Action or List redirection in Service Portal and mostly deals with the common uses for redirection after login.</p>
<p style="text-align: left;" align="center"><img class="image-1 jive-image" style="font-size: 21.3333px; text-align: center; width: 323px; height: 242.25px; display: block; margin-left: auto; margin-right: auto;" src="bce7b882dbd097041dcaf3231f961996.iix" alt="Picture1.png" width="323" height="242" /></p>
<p>I&#39;ll touch on some of the most popular Service Portal questions we get. Plus, questions we see customers asking on the community and on social media.</p>
<p> </p>
<p><strong> In this post, I will introduce you to:</strong></p>
<ul><li>How to set up a portal for user redirection</li><li>Enable user login directly on the Service Portal</li><li>How to direct user traffic in the portal</li><li>Only allow authenticated users to access portal content</li><li>How to set up role-based user redirection in the Service Portal</li><li>Single-Sign-on (SSO) and Service Portal</li></ul>
<p> </p>
<p> </p>
<h1>Setting Up Your Service Portal Redirection</h1>
<p>I will provide you with a high-level overview and walk you through each process of Portal redirection. Hopefully, this will provide you with direction on how to set things up for yourself.</p>
<p> </p>
<p>For the most part, Service Portal will function the same way as it does on the front-facing UI (<a title="" href="/community?id=community_blog&sys_id=70bd2aa9dbd0dbc01dcaf3231f961991" rel="nofollow">UI16</a>). You are probably used to Login Rules, the &#39;<span style="font-size: 10.5pt; font-family: Arial; background: white;">glide.entry.loggedin.page_ess&#39;</span> System Property and Installation Exits to decipher where a user should be redirected to. The primary source for setting up redirection in Service Portal is the <strong>SPEntryPage</strong> script include (<strong>System UI &gt; Script Includes</strong>). The ScriptIncludes works in conjunction with two system properties that I will go over later. Service Portal used to utilize the SPLoginRedirect script in the early versions of Helsinki, but this is no longer used and was fully replaced by SPEntryPage. Think of the SPEntryPage script as the login handler of Service Portal. There is a lot of stuff going on in this script, and I won&#39;t cover all of it here, but this will be a general, high-level overview of it.</p>
<p> </p>
<p>First, you will need to make sure that you are directing traffic to your preferred portal URL suffix. You can access your available URL suffixes by going to <strong>Service Portal &gt; Portals</strong>. See script on line 22:</p>
<p><img class="image-8 jive-image" style="width: 620px; height: 76px; display: block; margin-left: auto; margin-right: auto;" src="6f8b198edb98130468c1fb651f961987.iix" alt="spentrypage.jpg" /></p>
<p>In a base instance, this script is set up to handle redirection to a <strong>single</strong> portal. Setting this script up to redirect to multiple portals based on roles will not be covered here</p>
<p> </p>
<h2>User login directly through Service Portal</h2>
<p>The first thing the instance will do is check the &#39;glide.entry.page.script&#39; system property, which calls a server script that will redirect users to a defined location to log in. On the base system, this is set to &#39;new CMSEntryPage().getEntryPage()&#39; by default. This is checking the CMSEntryPage script include for its redirection source for specific users that need to be redirected to a specified content management site (typically users without a role).</p>
<p> </p>
<p>In order to send users to the Service Portal to log in, we need to call the SPEntryPage script include and then get our login URL. We can do this by changing the value of this property to &#39;new SPEntryPage().getLoginURL()&#39;.</p>
<p>The differences between the default and the new value of the &#39;glide.entry.page.script property&#39;. Admins will often only change the first part of this value because they see the &#39;get&#39; and ignore everything after it. This will cause the script to fail because getEntryPage does not exist in the SPEntryPage .</p>
<p>Once this value is set, your users will be sent to the default landing page. You can modify the page you want users to reach from the portal record page (see below).</p>
<p><img class="image-9 jive-image" style="width: 620px; height: 280px; display: block; margin-left: auto; margin-right: auto;" src="4df8f84edbdc5f048c8ef4621f9619c2.iix" alt="portal login page.jpg" /></p>
<p>Just because users are logging in through the Service Portal login page, does not mean they are going to be <em>sent</em> to the Service Portal. This is defined by a separate system property and will depend on the URL they are trying to go to. This aspect simply handles the login process.</p>
<p> </p>
<p>Below is an example of what an ESS user (no roles) would see on login if they were going directly to &lt;instance_name&gt;.service-now.com using Service Portal to login.</p>
<p> </p>
<p><img class="image-2 jive-image" style="display: block; margin-left: auto; margin-right: auto; height: 347px; width: 699.832px;" src="9fa55c4adb589704ed6af3231f961932.iix" alt="SP_justLogin.gif" width="699" height="347" /></p>
<p> </p>
<p>and here is what the same user would see if they went to &lt;instance_name&gt;.service-now.com/sp.</p>
<p> </p>
<p style="text-align: center;"><img class="image-3 jive-image" style="width: 702px; height: 348.075px;" src="5858f3b1dbd05fc03eb27a9e0f96199f.iix" alt="SP_justLoginToSP.gif" width="702" height="348" /></p>
<p> </p>
<h2>Directing user traffic in the Service Portal</h2>
<p>Now that we have setup the login aspect, we can work on handling where users will go afterward. This will require a new system property called &#39;glide.entry.first.page.script&#39; to be created. See <a title="ocs.servicenow.com/bundle/istanbul-servicenow-platform/page/administer/reference-pages/task/t_CreatingAPropertiesModule.html" href="https://docs.servicenow.com/bundle/istanbul-servicenow-platform/page/administer/reference-pages/task/t_CreatingAPropertiesModule.html" rel="nofollow">creating system properties</a>, for instructions on how to achieve this.</p>
<p> </p>
<p>This property&#39;s value will need to be set to <strong>new SPEntryPage().getFirstPageURL()</strong>. Once this property is set, it will check against the users&#39; roles and determine where the user will need to go next. In the base system, this is set to check if the user has any roles and is not trying to go the Service Portal directly. If both pass, then it will send them to value of the <strong>glide.login.home</strong> property or the page they were attempting to load prior to logging in. If the user does not have any roles, it will send them to the equivalent of that page in Service Portal.</p>
<p> </p>
<p>For example:</p>
<p><a title="" href="https://" target="_blank" rel="nofollow">https://</a>&lt;instance_name&gt;.service-now.com/change_requests_list.do</p>
<p> </p>
<p>will send non-role users to</p>
<p><a title="" href="https://" target="_blank" rel="nofollow">https://</a>&lt;instance_name&gt;.service-now.com/sp/?id&#61;list&amp;table&#61;change_request</p>
<p> </p>
<h2>Setting up a role-based redirection</h2>
<p>If you want to be specific with directing certain roles (not just users without any roles) you can modify the SPEntryPage script include to meet your needs. It would be worth your time to also check out <a class="jive_macro jive_macro_user" title="kobby.adu-nti" href="/community?id=community_user_profile&user=3bff0ae1db581fc09c9ffb651f961984" rel="nofollow">kobby.adu-nti</a>&#39;s blog on <a title="" href="/community?id=community_blog&sys_id=4a9c6ee1dbd0dbc01dcaf3231f96197c" rel="nofollow">overcoming issues with role redirection with the SPEntryPage</a></p>
<p>Modifying the SPEntryPage script will set sys_customer_update to true and sys_replace_on_upgrade to false.</p>
<p> </p>
<p>In the SPEntryPage script on lines 69-70, you will see where we check for any roles (not specific roles) and whether it&#39;s a redirect URL or if the user is trying to access the portal directly.</p>
<p><img class="image-10 jive-image" style="width: 620px; height: 31px; display: block; margin-left: auto; margin-right: auto;" src="0e469802db989704ed6af3231f9619ec.iix" alt="role redirection portal.jpg" /></p>
<p> </p>
<p>Here I have commented out these two lines (to keep the original code) and added a specific role(s) check by using hasRole()</p>
<p style="text-align: center;"><img class="image-13 jive-image" style="width: 620px; height: 35px;" src="821af775db945704ed6af3231f961992.iix" alt="Screen Shot 2017-06-15 at 10.55.58 AM.png" /></p>
<p style="text-align: center;"> </p>
<p>This will allow users who have admin (because <a title="ki.servicenow.com/index.php?title&#61;GlideUser_(g_user)#gsc.tab&#61;0" href="http://wiki.servicenow.com/index.php?title&#61;GlideUser_%28g_user%29#gsc.tab&#61;0" rel="nofollow">hasRole automatically passes admin as true</a>) and snc_123 roles to go directly to UI16, all others will be reverted to the Service Portal. Again, this is just an example but provides you with a starting point to configuring your redirection.</p>
<p> </p>
<h2>SSO and Service Portal</h2>
<p>Applying your SSO with Service Portal should be setup the same way as you had it with any prior implementations for your instance. Service Portal will redirect to your IdP the same way it does in UI16, and if you have multiple IdP&#39;s, you will see the same &#39;Use External Login&#39; link under the username and password fields on the Service Portal login widget. The widget will check the value of the &#39;glide.authenticate.multisso.enabled&#39; property and the default IdP through the &#39;glide.authenticate.sso.redirect.idp&#39; property.</p>
<p> </p>
<p>Helpful information for how to set up SSO in your Service Portal:</p>
<ul><li><a title="ocs.servicenow.com/bundle/geneva-servicenow-platform/page/integrate/single_sign_on/task/t_ConfigureMultiProviderSSOProps.html" href="https://docs.servicenow.com/bundle/geneva-servicenow-platform/page/integrate/single_sign_on/task/t_ConfigureMultiProviderSSOProps.html" rel="nofollow">Configure multi-provider SSO properties</a></li><li><a title="ocs.servicenow.com/bundle/helsinki-servicenow-platform/page/integrate/single-sign-on/task/t_ConfigureUsersMultiProviderSSO.html" href="https://docs.servicenow.com/bundle/helsinki-servicenow-platform/page/integrate/single-sign-on/task/t_ConfigureUsersMultiProviderSSO.html" rel="nofollow">Configure users for multi-provider SSO</a></li><li><a title="ocs.servicenow.com/bundle/helsinki-servicenow-platform/page/integrate/okta/concept/c_OktaSSOIntegration.html" href="https://docs.servicenow.com/bundle/helsinki-servicenow-platform/page/integrate/okta/concept/c_OktaSSOIntegration.html" rel="nofollow">OKTA SSO Integration</a></li></ul>
<p> </p>
<h2>Deeplinking</h2>
<p>As long as your IdP supports the RelayState URL parameter, deep linking will function for links to Service Portal. An authentication request will be sent to the IdP using this parameter to hold the original URL the user is wanting to access. Once the user is authenticated, it will then send the user to the URL with the appended RelayState value. You may also want to review our documentation on <a title="ocs.servicenow.com/bundle/helsinki-servicenow-platform/page/integrate/single-sign-on/concept/c_EmailLinksWithSSO.html" href="https://docs.servicenow.com/bundle/helsinki-servicenow-platform/page/integrate/single-sign-on/concept/c_EmailLinksWithSSO.html" rel="nofollow">Email links with SSO</a>.</p>
<p> </p>
<h2>Debugging SPEntry</h2>
<p style="margin-bottom: 9px; font-family: SourceSansPro, &#39;Helvetica Neue&#39;, Arial; color: #333333; font-size: 16px;"><span style="font-family: arial, helvetica, sans-serif; font-size: 10pt;">To view debug output from SPEntryPage and see the session variables it redirects based on:</span></p>
<ol style="margin-bottom: 9px; font-family: SourceSansPro, &#39;Helvetica Neue&#39;, Arial; color: #333333; font-size: 16px;"><li><span style="margin-bottom: 9px; font-family: arial, helvetica, sans-serif; font-size: 10pt;">Make sure the system property glide.entry.first.page.script has the value <strong>new SPEntryPage().getFirstPageURL()</strong>.</span></li><li><span style="margin-bottom: 9px; font-family: arial, helvetica, sans-serif; font-size: 10pt;">Open the SPEntryPage script include and find and set <strong>this.logVariables</strong> to <strong>true</strong>.</span></li><li><span style="margin-bottom: 9px; font-family: arial, helvetica, sans-serif; font-size: 10pt;">In a different browser (or &#34;incognito&#34; or &#34;inPrivate&#34; session), log in.</span></li><li><span style="font-size: 10pt; font-family: arial, helvetica, sans-serif; margin-bottom: 9px;">The log output can be viewed by navigating to <strong>System Logs &gt; System Log &gt; All </strong>or by going directly to:</span></li></ol>
<p> </p>
<pre class="jive_macro_quote jive_text_macro"><span style="font-family: arial, helvetica, sans-serif; font-size: 10pt;">/syslog_list.do?sysparm_query&#61;level%3D0%5EORDERBYDESCsys_created_on&amp;sysparm_first_row&#61;1&amp;sysparm_view&#61;</span></pre>
<p> </p>
<p> </p>
<p>--</p>
<p> </p>
<p>I hope this helps with setting up your Service Portal redirection. As content can be updated, I will do so. Special thanks to <a class="jive_macro jive_macro_user" title="jesseadams" href="/community?id=community_user_profile&user=0f8e4ea9dbd41fc09c9ffb651f9619bc" rel="nofollow">jesseadams</a>, Imran Ali, and Michael DiBlandia for their contributions. If you have any questions, comments, or ideas, let me know. If you have a case that is not mentioned here, please provide your comments so that other users who are looking to accomplish the same thing can use it as a reference.</p>