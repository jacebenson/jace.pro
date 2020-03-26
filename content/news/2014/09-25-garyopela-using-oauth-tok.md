---
title: "Using OAUTH Tokens with REST Interfaces"
date: 2014-09-25T02:19:16.000Z
authors: ["garyopela"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=894deee5dbd0dbc01dcaf3231f96197b"
---
<p>I had recently written an integration between service-now and one of our in-house project management tools. The purpose of this integration was to pull in funding data.</p><p>We got to the point where we needed to secure it. My only option was to use OAUTH Tokens, as that is the way the REST services which I were consuming were configured to allow for security.</p><p></p><p>I already had an end point set up that worked well. I had set up the end point, and then specifically the 'get' function of the REST Message. After speaking with the architects who developed the REST endpoint which I was consuming, they said it was simple to authenticate. All I needed to do was to, in the REST Message Header, pass the phrase: "Authentication : Bearer &lt;token&gt;" where token was generated at the time of the call.</p><p></p><p>To get the token, I had to make another REST call to the endpoint which generated the token. So now I had two endpoints.</p><p></p><ol><li>REST Message to grab the token:<ol><li>Name: Get Token</li><li>REST endpoint: &lt;Endpoint of the token generator&gt;</li><li>Use basic auth: &lt;blank&gt;</li><li>REST Message Headers: &lt;blank&gt;</li><li>REST Message Functions:<ol><li>post<ol><li>REST endpoint: &lt;Endpoint of the token generator&gt;</li><li>Use basic auth: &lt;blank&gt;</li><li>Lock: &lt;blank&gt;</li><li>Use MID Server: &lt;Mid-server I'm using&gt;</li><li>REST Message Function Headers<ol><li>Name: Content-Type</li><li>Value: application/json</li></ol></li><li>Content: {"username":"&lt;user&gt;","password":"&lt;password&gt;"}</li></ol></li></ol></li></ol></li><li>REST Message to actually pull the data in:<ol><li>Name: Get Data</li><li>REST endpoint: &lt;Endpoint of the data pull&gt;</li><li>Use basic auth: &lt;blank&gt;</li><li>REST Message Headers: &lt;blank&gt;</li><li>REST Message Functions:<ol><li>get<ol><li>REST endpoint: &lt;Endpoint of the data pull&gt;</li><li>Use basic auth: &lt;blank&gt;</li><li>Lock: &lt;blank&gt;</li><li>Use MID server: &lt;Mid-server I'm using&gt;</li><li>REST Message function headers<ol><li>Name: Authorization</li><li>Value: ${token}</li></ol></li></ol></li></ol></li></ol></li></ol><p>Now that I have my endpoints worked out, it's time to set up the code. I was using a scheduled job to do a batch pull every morning of the data.</p><p></p><p>First, you need to create a function which will return the token when called:</p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14115929798331943" jivemacro_uid="_14115929798331943" modifiedtitle="true">
<p>function getToken(){</p>
<p>       var r = new RESTMessage('Get Token', 'post');</p>
<p>       var response = r.execute();</p>
<p>     </p>
<p>       var k = 1;</p>
<p>       while (response == null){</p>
<p>               response = r.getResponse(1000);</p>
<p>               k++;</p>
<p>             </p>
<p>               if (k&gt;60){</p>
<p>                       gs.log("Failed to get token in a timely manner.");</p>
<p>                       return;</p>
<p>               }</p>
<p>       }</p>
<p>     </p>
<p>       var jsonString = response.getBody();</p>
<p>       var parser = new JSONParser();</p>
<p>       var parsed = parser.parse(jsonString);</p>
<p>     </p>
<p>       var token = parsed.data.access_token;</p>
<p>       return ("Bearer " + token);</p>
<p>}</p>
</pre><p></p><p>Now once we have a nice function set up to easily return a token, we can simply do our normal REST call, making sure to pass in the token:</p><p></p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14115930771393020" jivemacro_uid="_14115930771393020" modifiedtitle="true">
<p>function updateData(pplCode){</p>
<p>       var token = getToken();</p>
<p>       var r = new RESTMessage('Get Data', 'get');</p>
<p>       r.setStringParameter('num', pplCode);</p>
<p>       r.setStringParameter('token', token); //here is where you pass the token</p>
<p>       var response = r.execute();</p>
<p>     </p>
<p>       var k = 1;</p>
<p>       while (response == null){</p>
<p>               response = r.getResponse(1000);</p>
<p>               k++;</p>
<p>             </p>
<p>               if (k&gt;60){</p>
<p>                       gs.log('Data Loader ran too long trying to pull back data for: ' + pplCode);</p>
<p>                       return;</p>
<p>               }</p>
<p>       }</p>
<p>     </p>
<p>       var jsonString = response.getBody();</p>
<p>       var parser = new JSONParser();</p>
<p>       var parsed = parser.parse(jsonString);</p>
<p>     </p>
<p>       var arg1 = parsed.data[0].firstField;</p>
<p>       var arg2 = parsed.data[0].secondField;</p>
<p>}</p>
</pre><p>Now we are able to generate a token based off of a service account, then use that token in the next REST call. I set up my code to generate a new token each time, and then use that token whenever it needs to do the next REST call.</p>