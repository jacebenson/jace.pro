---
title: "REST calls where seperate Auth token must be requested  a dash of AJAX Client Script with CloudBolt Example"
date: 2018-04-20T20:46:59.000Z
authors: ["toneyvecchio"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=d547f492db61d300fc5b7a9e0f9619d2"
---
<p>Greetings all,</p>
<p>In some outbound REST calls, basic auth may not be sufficient. I’ve had a few requirements where a seperate request must first be made to get an auth token, and wanted to share one example.</p>
<p>Our example today is CloudBolt, and though the specifics may not apply same way everytime, the concept is universal. I’ve seen this in a number of other services as well.</p>
<p>Let’s review what we will accomplish today</p>
<ul><li>Create an auth POST to obtain a token</li><li>Pass that token into another GET/POST to perform some integrated function</li><li>Create a Script Include so that we can seemlessly execute this two-step process anywhere in the platform</li><li>Call the GET API on client script during a catalog order form with AJAX to populate a dropdown list dynamically</li></ul>
<h2 style="display: inline !important;">Outbound REST Message I: Auth</h2>
<p>I want to ask CloudBolt to do something like spin up a server. For me to make that API call, I first must perform a seperate API call all together to get an Auth Token.</p>
<p><img class=" size-full wp-image-1090 aligncenter" src="https://smarterservicenow.files.wordpress.com/2018/04/2018-04-20-10_53_56-document1-word.png?w&#61;616" alt="2018-04-20 10_53_56-Document1 - Word" /></p>
<p>Let’s navigate to <strong>System Web Services &gt; Outbound &gt; REST Message</strong> within ServiceNow and get started.</p>
<p>Create a new REST Message called CloudBolt. Provide in the <strong>HTTP Request Headers:</strong><br /><strong>Accept</strong> : application/json<br /><strong>X-CSRFToken </strong>: Provided by your CloudBolt admin (if directed)</p>
<p>Your CloudBolt admin will also provide a basic Auth username/password. Don’t put it here yet.</p>
<hr />
<p>Now in the related list below, create a new HTTP Method: [Endpoint may vary, consult your CloudBolt admin]</p>
<p><strong>Name</strong> &#61; Auth<br /><strong>HTTP Method</strong> &#61; POST<br /><strong>Endpoint</strong> &#61; https://cloudmanager.[YourCompany]/api/v2/api-token-auth<br /><strong>Authentication Type</strong> &#61; Basic<br /><strong>Content</strong> &#61; {“username”:”<em>USERNAME</em>“,”password”:”<em>PASSWORD</em>“}</p>
<p>Save it and hit Test, you should get back a Response (Fake example)</p>
<div>
<div id="highlighter_825793" class="syntaxhighlighter  plain">
<table border="0" cellspacing="0" cellpadding="0"><tbody><tr><td class="gutter">
<div class="line number1 index0 alt2"> </div>
</td><td class="code">
<div class="container">
<div class="line number1 index0 alt2"><code class="plain plain">{&#34;token&#34;:&#34;eyJhFeef34DFG9ydEBpaGcuY29tIiwiZXhwIjoxNTI0MTcwNjMwfQ.tetMp3jjXlbRRPCCF6zacspxfdDwRA4hrbvDWsogqe4&#34;}</code></div>
</div>
</td></tr></tbody></table>
</div>
</div>
<p>That token should be good for a bit so copy to notepad.</p>
<p> </p>
<h2>Outbound REST Message II: Desired Function</h2>
<p>In this example, I am going to GET a list of groups from CloudBolt to later populate into a Catalog Item Dropdown list.</p>
<p>Using same REST Message for CloudBolt, I will create a second HTTP Method:</p>
<p><strong>Name</strong> &#61; CBL-Groups<br /><strong>HTTP Method</strong> &#61; GET<br /><strong>Endpoint</strong> &#61; https://cloudmanager.[YourCompany]/api/v2/groups/?page_size&#61;1000<br /><strong>HTTP Request Headers :</strong><br /><strong>Accept</strong> : application/json<br /><strong>Content-Type</strong> : application/json<br /><strong>Authorization </strong>: Bearer ${token}</p>
<p>Create new Variable Substituation with:<br /><strong>Name</strong> &#61; token<br /><strong>Test value</strong> &#61; paste the long Token string obtained prior</p>
<h3>The key here is that a variable with be used where we pass the token</h3>
<p>This way, we can dynamically insert new tokens on the fly. Hit Test and watch the magic happen! I hope.. Maybe pull that Auth token again.</p>
<p> </p>
<h2>Tie them together in a Script Include</h2>
<p>To chain these two APIs together, we will build a new Script Include</p>
<p>In our use case, we will call this from Client Script so first:<br /><strong>Name</strong> &#61; CloudBoltAPI<br /><strong>Client callable</strong> &#61; True</p>
<p><a href="https://gist.github.com/ToneyTime/75bcdf617017c5ad17310be3f5cbd5ee" target="_blank" rel="nofollow">Copy the code here</a></p>
<p><img class="alignnone size-full wp-image-1091" src="https://smarterservicenow.files.wordpress.com/2018/04/2018-04-20-11_33_30-document1-word.png?w&#61;616" alt="2018-04-20 11_33_30-Document1 - Word" /></p>
<hr />
<p> </p>
<h2>Using AJAX to pull multi-step API</h2>
<p>I’ll be calling both APIs with one Ajax call on a Catalog based Client Side Script. My goal is to get the list of groups from CloudBolt and populate a dropdown list.</p>
<p><a href="https://gist.github.com/ToneyTime/4e433df9524c982db6bb9fb2576d85af" target="_blank" rel="nofollow">Copy the code here</a></p>
<p><img class="alignnone size-full wp-image-1092" src="https://smarterservicenow.files.wordpress.com/2018/04/2018-04-20-11_39_02-ccs_cbl-groups_load_sb-_-catalog-client-scripts-_-dev-ihg-mysupport.png?w&#61;616" alt="2018-04-20 11_39_02-ccs_CBL-Groups_load_sb _ Catalog Client Scripts _ DEV - IHG MySupport.png" /></p>
<p> </p>
<h2>Conclusion</h2>
<p>Wether you came here for multi-step auth API how-to or Client Side AJAX API call, I hope this was clear and helpful. If you have any questions, feel free to comment and share!</p>
<p>You can find more Blogs and share with me at my Blog: <a href="https://servicestartsnow.com/" target="_blank" rel="nofollow">https://servicestartsnow.com/</a> </p>