---
title: "SSO integration between ServiceNow and Azure Active Directory to use Integration Hub Azure Active Directory spoke"
date: 2019-03-21T23:26:44.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=ab68e646dbd0ff84fff8a345ca961906"
---
<p style="text-align: justify;">Importance of cloud adoption is becoming more pressing as organizations are trying to be more agile and more efficient. And naturally AWS and Azure are the most preferred platforms when it comes to public cloud. When I look at last 3-5 years, I’ve come across various “IT” and “non-IT” scenarios organizations have been trying to move to public cloud. Among those scenarios, interestingly, I started to hear hybrid use-cases (IT/non-IT) such as onboarding/offboarding users, license assignments, role management, etc. more often lately. And since Azure Active Directory is getting more and more popular among many organizations, which can be used to support those use-cases, I thought playing with the integration between Azure AD and ServiceNow to see how we can automate some of them using Integration Hub, would be useful for many of us.</p>
<p style="text-align: justify;">So, here are the steps to have our SSO integration between our ServiceNow instance and our Azure Active Directory:</p>
<p style="text-align: justify;"><strong>STEP 1:</strong> Let&#39;s start with the Azure side. The first thing we need is an Azure account. A free tier Azure account is sufficient to create the integration and test the actions in the Azure AD Spoke; with the exception of &#34;license assignment&#34; actions. Because license assignment actions require a &#34;SKU Id&#34; and we&#39;re not allowed to create SKU Ids within a free account. For the integration, you also need to have admin rights in your Azure account. If you don’t have one, <a href="https://azure.microsoft.com/en-us/free/" rel="nofollow">here</a> is where you can create you own Azure account. This is how it looks when you first log into our Azure account; we need to click the “<strong>Portal</strong>” link to go to Azure Portal:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/6deb229adbd8b7c4fff8a345ca9619e6.iix" /></p>
<p> </p>
<p> </p>
<p style="text-align: justify;"><strong>STEP 2:</strong> And this is how its main page looks like, where we need to click the “<span style="font-weight: bold;">Azure Active Directory</span>” link to go to our Active Directory main page:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/9c5c66dedbd8b7c4fff8a345ca9619b6.iix" /></p>
<p> </p>
<p><strong>STEP 3:</strong> Under our Active Directory, one of the first things we want to do is going to the “<span style="font-weight: bold;">Properties</span>” and copying our “<span style="font-weight: bold;">Directory ID</span>” which is required for Single Sign-on integration:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/fcafe29edb5cb7c4fff8a345ca9619ae.iix" /></p>
<p> </p>
<p><strong>STEP 4:</strong> Then we need to go to “<span style="font-weight: bold;">App registrations</span>” and add a “<span style="font-weight: bold;">New application registration</span>” for our integration:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/ebcf66dedb5cb7c4fff8a345ca961994.iix" /></p>
<p> </p>
<p><strong>STEP 5:</strong> Here we need to enter a name to identify our app registration and the URL of our instance for the integration; and then click &#34;<span style="font-weight: bold;">Create</span>&#34;: </p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/f8efee12db9cb7c4fff8a345ca96199c.iix" /></p>
<p> </p>
<p><strong>STEP 6:</strong> Now there are a couple of things we need to do under the app registration we just created. We first need to copy &#34;<span style="font-weight: bold;">Application ID</span> (as our Client ID)&#34; and &#34;<span style="font-weight: bold;">Object ID</span>&#34; for further steps; and then click &#34;<span style="font-weight: bold;">Settings</span>&#34;: </p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/b3efee12db9cb7c4fff8a345ca96190e.iix" /></p>
<p> </p>
<p><strong>STEP 7:</strong> Under settings, click &#34;<strong>Reply URLs</strong>&#34; and add <strong>&lt;instance url&gt;/oauth_redirect.do</strong>. Click &#34;<strong>Save</strong>&#34;:  </p>
<p>  </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/7affe292db9cb7c4fff8a345ca961983.iix" /></p>
<p> </p>
<p><strong>STEP 8:</strong> Click &#34;<span style="font-weight: bold;">Owners</span>&#34; -&gt; &#34;<span style="font-weight: bold;">Add Owner</span>&#34; to add application owners to your app registration from your existing users:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/29003a92db9cb7c4fff8a345ca961905.iix" /></p>
<p> </p>
<p><strong>STEP 9:</strong> Then under &#34;<span style="font-weight: bold;">Required Permissions</span>&#34;, click &#34;<span style="font-weight: bold;">Add</span>&#34; to give permissions to our users:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/31107e92db9cb7c4fff8a345ca9619bc.iix" /></p>
<p> </p>
<p><strong>STEP 10:</strong> Add “<span style="font-weight: bold;">Microsoft Graph</span>” which is the API we need for the integration. Click &#34;<span style="font-weight: bold;">Select</span>&#34;:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/28207ad2db9cb7c4fff8a345ca961955.iix" /></p>
<p> </p>
<p><strong>STEP 11:</strong> And select all permissions. Click &#34;<span style="font-weight: bold;">Select</span>&#34;:</p>
<p> <img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/9401f6dadb9cb7c4fff8a345ca9619ff.iix" /></p>
<p> </p>
<p><strong>STEP 12:</strong> Click &#34;<span style="font-weight: bold;">Done</span>&#34; to apply changes:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/4511b21edb9cb7c4fff8a345ca9619ab.iix" /></p>
<p>  </p>
<p><strong>STEP 13:</strong> Then go to &#34;<strong>Keys</strong>&#34; to create and copy your &#34;<strong>Client Secret</strong>&#34; key which is required for the integration. We need to copy our  key because once we leave this blade, we won&#39;t be able to retrieve it again. Enter a name for your key, and click &#34;<strong>Save</strong>&#34; to generate you key:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/0821b65edb9cb7c4fff8a345ca961978.iix" /></p>
<p> </p>
<p><strong>STEP 14:</strong> Now let&#39;s do some instance side of settings. After logging into our instance as administrator, the first thing we need to do is enabling the SSO plugin. Search for &#34;<span style="font-weight: bold;">plugins</span>&#34; in the instance search and go to &#34;<span style="font-weight: bold;">System Definition -&gt; Plugins</span>&#34;. Under Plugins page, search for &#34;<span style="font-weight: bold;">Integration - Multiple Provider Single Sign-On Installer</span>&#34; and click &#34;<span style="font-weight: bold;">Install</span>&#34; to install it if it is not already installed:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/93213a5edb9cb7c4fff8a345ca9619e2.iix" /></p>
<p> </p>
<p><strong>STEP 15:</strong> Search for &#34;<span style="font-weight: bold;">Multi-Provider SSO</span>&#34; in the instance search and go to &#34;<span style="font-weight: bold;">Multi-Provider SSO -&gt; Administrator -&gt; Properties</span>&#34;. Under <span style="font-weight: bold;">Multi Provider SSO Properties </span>page, change the settings as shown below:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/8f31b252dbdcb7c4fff8a345ca961966.iix" /></p>
<p> </p>
<p><strong>STEP 16:</strong> In the instance search, search for &#34;<strong>Application Registry</strong>&#34;  and go to &#34;<strong>System OAuth -&gt; Application Registry</strong>&#34;. Under <strong>Application Registries </strong>page, click &#34;<strong>New</strong>&#34; to create a new registry entry:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/f241f692dbdcb7c4fff8a345ca9619bd.iix" /></p>
<p> </p>
<p><strong>STEP 17:</strong> Select &#34;<span style="font-weight: bold;">Connect to a third party OAuth Provider</span>&#34;:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/1a5176d2dbdcb7c4fff8a345ca9619ed.iix" /></p>
<p> </p>
<p><strong>STEP 18:</strong> And fill the form with appropriate details:<br />                  a) Name: Name of the App registry (Azure Admin)<br />                   b) Client Id: Copied from Above<br />                   c) Client Secret: Copied from above<br />                   d) Default Grant Type: Authorization Code<br />                   e) Authorization URL: <a href="https://login.microsoftonline.com/%3CDirectory%20ID%3E/oauth2/v2.0/authorize" rel="nofollow">https://login.microsoftonline.com/&lt;Directory ID&gt;/oauth2/v2.0/authorize</a><br />                   f) Token URL: <a href="https://login.microsoftonline.com/%3CDirectory%20ID%3E/oauth2/v2.0/token" rel="nofollow">https://login.microsoftonline.com/&lt;Directory ID&gt;/oauth2/v2.0/token</a><br />                   g) Redirect URL: <a href="https://%3cinstancename%3e/oauth_redirect.do" rel="nofollow">https://&lt;instancename&gt;/oauth_redirect.do</a><br />               Then select &#34;<strong>OAuth Entity Scopes</strong>&#34; tab in the related lists:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/6161fed2dbdcb7c4fff8a345ca96193c.iix" /></p>
<p> </p>
<p><strong>STEP 19:</strong> And create scope as shown below and then &#34;<span style="font-weight: bold;">Submit</span>&#34; your form:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/8571fa16dbdcb7c4fff8a345ca9619b7.iix" /></p>
<p> </p>
<p><strong>STEP 20:</strong>  After submitting, click &#34;<span style="font-weight: bold;">OAuth Entity Profiles</span>&#34; and select <span style="font-weight: bold;">default_profile</span>.</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/15817e16dbdcb7c4fff8a345ca9619de.iix" /></p>
<p> </p>
<p><strong>STEP 21:</strong> If not already automatically added after you submit the record, manually add the two Entry Scopes which you just added:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/d002325adbdcb7c4fff8a345ca961946.iix" /> </p>
<p><strong>STEP 22:</strong> Now it is time to create our credentials. Search for &#34;<span style="font-weight: bold;">credentials</span>&#34; and go to &#34;<span style="font-weight: bold;">IntegrationHub -&gt; Connections &amp; Credentials -&gt; Credentials</span>&#34;. Under &#34;<span style="font-weight: bold;">Credentials</span>&#34; page click &#34;<span style="font-weight: bold;">New</span>&#34; to create a new credentials:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/ad127e5adbdcb7c4fff8a345ca961967.iix" /></p>
<p> </p>
<p><strong>STEP 23:</strong>  Select &#34;<span style="font-weight: bold;">OAuth 2.0 Credentials&#34;</span></p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/c622329adbdcb7c4fff8a345ca961933.iix" /></p>
<p> </p>
<p><strong>STEP 24:</strong> And fill the form with appropriate details:<br />                      a) Name: Name of the credentials<br />                       b) OAuth Entry Profile: Select the Application Registry default profile which you have created in above step.<br />                       c) Client Secret: Copied from above<br />               Click &#34;<strong>Submit</strong>&#34;:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/954232dadbdcb7c4fff8a345ca961957.iix" /></p>
<p> </p>
<p><strong>STEP 25:</strong> Click &#34;<span style="font-weight: bold;">Get OAuth token</span>&#34; to generate and get your token:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/8352765edbdcb7c4fff8a345ca9619df.iix" /></p>
<p><strong>STEP 26:</strong> A pop-up window will open. Give <span style="font-weight: bold;">consent</span> and &#34;<span style="font-weight: bold;">Accept</span>&#34;:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/c3a2bededbdcb7c4fff8a345ca961964.iix" /></p>
<p> </p>
<p><strong>STEP 27:</strong> And your token is ready to use:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/55c27a12db10f7c4fff8a345ca961919.iix" /></p>
<p> </p>
<p><strong>STEP 28:</strong> A quick detour! Remember, our goal is being able to use Azure AD Spoke. So let&#39;s take a look at it to understand how it is going to use the token we just created. For this we need to &#34;<span style="font-weight: bold;">Flow Designer</span>&#34;. Search for &#34;<span style="font-weight: bold;">integration</span>&#34; and go to &#34;<span style="font-weight: bold;">IntegrationHub -&gt; Action Designer</span>&#34;:</p>
<p>  </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/22d2f252db10f7c4fff8a345ca9619ea.iix" /></p>
<p> </p>
<p><strong>STEP 29:</strong> Once we&#39;re there, click &#34;<span style="font-weight: bold;">Actions</span>&#34; and search for actions under &#34;<span style="font-weight: bold;">Microsoft Azure AD Spoke</span>&#34; application:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/27e276d2db10f7c4fff8a345ca961903.iix" /></p>
<p> </p>
<p> <strong>STEP 30:</strong> Let&#39;s pick one to see how it authenticate itself; &#34;<span style="font-weight: bold;">Look Up User ID</span>&#34; for example:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/4c03bed2db10f7c4fff8a345ca9619f2.iix" /></p>
<p> </p>
<p><strong>STEP 31:</strong> In the action, we&#39;re looking for a &#34;<span style="font-weight: bold;">REST Step</span>&#34; where we make our rest API call. In this particular action, it is &#34;<span style="font-weight: bold;">Lookup User</span>&#34;. Under &#34;<span style="font-weight: bold;">Connection Details</span>&#34; of this step we can see that the step uses a &#34;<span style="font-weight: bold;">Connection Alias</span>&#34; called &#34;<span style="font-weight: bold;">sn_azure_ad_spoke.AzureAD</span>&#34;:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/ec133616db10f7c4fff8a345ca96192a.iix" /></p>
<p> </p>
<p><strong>STEP 32:</strong> <span lang="en-US">Now let&#39;s see where we can find that connection alias and how is it connected to our token. In the application navigator, search for &#34;</span><span lang="en-IN" style="font-weight: bold;">Connections &amp; Credentials</span><span lang="en-US">&#34; and then go to &#34;</span><span lang="en-IN" style="font-weight: bold;">Connections &amp; Credentials -&gt; Connections &amp; Credentials Aliases</span><span lang="en-US">&#34;. Here we can see </span><span lang="en-US" style="font-weight: bold;">sn_azure_ad_spoke.AzureAD</span><span lang="en-US"> as the ID of the &#34;</span><span lang="en-US" style="font-weight: bold;">AzureAD</span><span lang="en-US">&#34; connection alias. Now we need open it to add our connection with the right token:</span></p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/98437296db10f7c4fff8a345ca961960.iix" /></p>
<p> </p>
<p><strong>STEP 33:</strong> In the &#34;<span style="font-weight: bold;">Connections</span>&#34; tab click on the &#34;New&#34; button:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/945332d6db10f7c4fff8a345ca961940.iix" /></p>
<p> </p>
<p> <strong>STEP 34:</strong> And fill the form with appropriate details:<br />                         a) Name: Name of the connection<br />                          b) Select the credential you&#39;ve created<br />                          c) Connection URL: <a href="https://graph.microsoft.com" rel="nofollow">https://graph.microsoft.com</a><br />                Click on &#34;<strong>Update</strong>&#34;</p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/e563761adb10f7c4fff8a345ca96194a.iix" /></p>
<p> </p>
<p><strong>STEP 35:</strong> At this point if we try to run our flow, we get the error below:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/3b9372dadb10f7c4fff8a345ca961917.iix" /></p>
<p> </p>
<p><strong>STEP 36:</strong> We still have a couple steps to take. We don’t have LDAP integration so we need to create a test user manually but without a password; a user we already have in Azure AD, in this case our main user: </p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/93b3ba5edb10f7c4fff8a345ca96192b.iix" /></p>
<p> </p>
<p> </p>
<p><strong>STEP 37:</strong> We also need to create a new application in Azure AD for SSO integration. For that, we need to go back to our Azure AD and then &#34;<span style="font-weight: bold;">Enterprise applications -&gt; All applications -&gt; New application</span>&#34;:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/1335f69edb50f7c4fff8a345ca961969.iix" /></p>
<p> </p>
<p><strong>STEP 38:</strong> Give a name and &#34;<span style="font-weight: bold;">Add</span>&#34;:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/9f55fe52db90f7c4fff8a345ca961988.iix" /> </p>
<p> </p>
<p><strong>STEP 39:</strong> Under the application go to &#34;<span style="font-weight: bold;">Single sign-on</span>&#34; and select &#34;<span style="font-weight: bold;">SAML</span>&#34;:</p>
<p>  </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/be757a52db90f7c4fff8a345ca96193f.iix" /></p>
<p> </p>
<p><strong>STEP 40:</strong> Copy/download the details below for further use and click &#34;<span style="font-weight: bold;">Test</span>&#34; to test SSO integration:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/a8a69961db24f7001cd8a345ca96195e.iix" /> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/c6d6d125db24f7001cd8a345ca961905.iix" /></p>
<p> </p>
<p><strong>STEP 41:</strong> It looks like we also need to add our user to the application we just create:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/c2271569db24f7001cd8a345ca961947.iix" /></p>
<p> </p>
<p><strong>STEP 42:</strong> To do that, we need to go to &#34;<span style="font-weight: bold;">Users and groups</span>&#34; under our application and &#34;<span style="font-weight: bold;">Add user</span>&#34;:</p>
<p>  </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/f6a71921db64f7001cd8a345ca961929.iix" /></p>
<p> </p>
<p><strong>STEP 43:</strong> If we go back and test SSO again, now it should work:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/9cf755e1db64f7001cd8a345ca961987.iix" /></p>
<p> </p>
<p>We should click the &#34;<span style="font-weight: bold;">Activate</span>&#34; button to activate SSO between Azure AD and our ServiceNow instance as stated in the &#34;<span style="font-weight: bold;">SSO Test Connection Summary</span>&#34; message.</p>
<p> </p>
<p><strong>STEP 44:</strong> Let&#39;s go back to flow designer and run our test flow again. We still have permission relate issues:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/be189965db64f7001cd8a345ca961968.iix" /></p>
<p> </p>
<p><strong>STEP 45</strong><strong>:</strong> To fix that, we need to go back to the app registration we created at the beginning and grant permissions:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/7f38d1e5db64f7001cd8a345ca9619c3.iix" /></p>
<p> </p>
<p><strong>STEP 46:</strong> Under the app registration go to &#34;<span style="font-weight: bold;">Settings -&gt; Required permissions -&gt; Microsoft Graph</span>&#34;:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/13689d69db64f7001cd8a345ca96197d.iix" /></p>
<p> </p>
<p><strong>STEP 47:</strong> And &#34;<span style="font-weight: bold;">Grant permissions</span>&#34;:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/9a981de9db64f7001cd8a345ca961979.iix" /></p>
<p> </p>
<p><strong>STEP 48:</strong> Since we changed permissions, we also need to refresh our OAuth token with the new permissions:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/b1b8116ddb64f7001cd8a345ca96190a.iix" /></p>
<p> </p>
<p><strong>STEP 49:</strong> If we run our flow again, now it works and Look Up User ID action returns the user ID that It found in Azure AD:</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/73d8d521dba4f7001cd8a345ca9619c4.iix" /></p>
<p> </p>
<p>In a separate article, I&#39;ll also explain how we can create an example demo flow in flow designer with which we can onboard and offboard users on Azure AD using Integration Hub Azure AD Spoke.</p>
<p> </p>