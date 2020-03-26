---
title: "Batch API in London"
date: 2018-08-16T03:10:22.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=0a01fcc4dbcce740200f0b55ca9619cd"
---
<p>Prior to London if you wanted to query multiple tables like Incident, Users, Knowledge etc using REST you would have to call Table APIs individually for each Incident, User, Knowledge or Build your own Scripted REST API that does this. </p>
<p>Due to &#34;<strong>Session Sync</strong>&#34; nature of our platform concurrent REST requests are processed in a serial manner. Say you have a Service Portal dashboard page that&#39;s making 10 API calls. if one gets stuck, the following calls are stuck as well. </p>
<p>The new Batch REST API allows you to call multiple REST APIs in a single request. </p>
<ul><li>One endpoint /api/now/v1/batch</li><li>Only POST method supported</li><li>Requires Authentication (non-public)</li><li>Model your request/response in a big JSON payload</li><li>The body of a batch item request/response is base64 encoded</li><li>All existing APIs are supported for batch processing</li><li>Allows combining different request/response formats into the same batch</li><li>Un-serviced batch item requests are identified and listed separately in the response</li></ul>
<p> </p>
<p>Available in REST API Explorer (for maint user). Don&#39;t worry if you are not maint, you can still hit this endpoint via <a href="https://www.getpostman.com/" rel="nofollow">postman</a></p>
<p><img src="d0410e58dbccef40200f0b55ca961945.iix" /></p>
<p> </p>
<p> A sample Batch API raw request body is shown below</p>
<pre class="language-javascript"><code>{
    &#34;batch_request_id&#34;: &#34;1&#34;,
    &#34;rest_requests&#34;: [
        {
            &#34;id&#34;: &#34;11&#34;,
            &#34;exclude_response_headers&#34;: &#34;true&#34;,
            &#34;headers&#34;: [
                { &#34;name&#34;: &#34;Content-Type&#34;,&#34;value&#34;: &#34;application/json&#34;},
                { &#34;name&#34;: &#34;Accept&#34;,&#34;value&#34;: &#34;application/json&#34;}
            ],
            &#34;url&#34;: &#34;/api/now/table/incident?sysparm_query&#61;assigned_to%3Daeb628c0db002300f6e4da75ca961930&amp;sysparm_fields&#61;number%2Cshort_description&#34;,
            &#34;method&#34;: &#34;GET&#34;
        },
        {
            &#34;id&#34;: &#34;12&#34;,
            &#34;exclude_response_headers&#34;: &#34;false&#34;,
            &#34;headers&#34;: [
                { &#34;name&#34;: &#34;Content-Type&#34;,&#34;value&#34;: &#34;application/json&#34;},
                { &#34;name&#34;: &#34;Accept&#34;, &#34;value&#34;: &#34;application/json&#34;}
            ],
            &#34;url&#34;: &#34;/api/now/table/incident?sysparm_fields&#61;short_description&#34;,
            &#34;method&#34;: &#34;POST&#34;,
            &#34;body&#34;: &#34;eyJzaG9ydF9kZXNjcmlwdGlvbiI6ImJhdGNoIHJlc3QgYmFieSEifQ&#61;&#61;&#34;
        },
        {
            &#34;id&#34;: &#34;13&#34;,
            &#34;exclude_response_headers&#34;: &#34;false&#34;,
            &#34;headers&#34;: [
                { &#34;name&#34;: &#34;Content-Type&#34;, &#34;value&#34;: &#34;application/json&#34; },
                { &#34;name&#34;: &#34;Accept&#34;, &#34;value&#34;: &#34;application/json&#34; }
            ],
            &#34;url&#34;: &#34;/api/now/table/problem?sysparm_query&#61;assigned_to%3Daeb628c0db002300f6e4da75ca961930&amp;sysparm_fields&#61;number%2Cshort_description&#34;,
            &#34;method&#34;: &#34;GET&#34;
        },
        {
            &#34;id&#34;: &#34;14&#34;,
            &#34;exclude_response_headers&#34;: &#34;true&#34;,
            &#34;headers&#34;: [
                { &#34;name&#34;: &#34;Content-Type&#34;,&#34;value&#34;: &#34;application/json&#34;},
                { &#34;name&#34;: &#34;Accept&#34;, &#34;value&#34;: &#34;application/json&#34; }
            ],
            &#34;url&#34;: &#34;/api/now/table/change_request?sysparm_query&#61;assigned_to%3Daeb628c0db002300f6e4da75ca961930&amp;sysparm_fields&#61;number%2Cshort_description&#34;,
            &#34;method&#34;: &#34;GET&#34;
        }
    ]
}</code></pre>
<p> </p>
<p><strong>batch_request_id</strong> to help users keep track of the requests we are sending.</p>
<p><strong>rest_requests</strong> array in the above JSON object you can see I have 3 different batch requests.</p>
<p>Each batch request item has following attributes</p>
<p><strong>id, </strong>this is for convenience for users if they want to do any further processing once response comes back.</p>
<p><strong>exclude_response_headers </strong>this boolean flag can be used to exclude the headers that come back in response (save bandwidth)</p>
<p><strong>headers </strong>can set headers for each request individually.</p>
<p><strong>url </strong>we want to hit, this should be partial URL  <strong>(IMPORTANT)</strong></p>
<p><strong>method </strong>the http method</p>
<p><strong>body </strong>base64 encoded body</p>
<p> </p>
<p>In the first batch request item, I am querying Incidents assigned to me</p>
<pre class="language-javascript"><code>{
            &#34;id&#34;: &#34;11&#34;,
            &#34;exclude_response_headers&#34;: &#34;true&#34;,
            &#34;headers&#34;: [
                { &#34;name&#34;: &#34;Content-Type&#34;,&#34;value&#34;: &#34;application/json&#34;},
                { &#34;name&#34;: &#34;Accept&#34;,&#34;value&#34;: &#34;application/json&#34;}
            ],
            &#34;url&#34;: &#34;/api/now/table/incident?sysparm_query&#61;assigned_to%3Daeb628c0db002300f6e4da75ca961930&amp;sysparm_fields&#61;number%2Cshort_description&#34;,
            &#34;method&#34;: &#34;GET&#34;
        }</code></pre>
<p> </p>
<p>In the second batch request item, I am creating an Incident using post method. The data needed to create the incident is base64 encoded and sent as the body. If you <a href="https://www.base64decode.org/" rel="nofollow">decode</a> base64 value it should say {&#34;short_description&#34;:&#34;batch rest baby!&#34;}. Since we have the exclude_response_headers to false, in response we will get all the headers back.</p>
<pre class="language-markup"><code>{
            &#34;id&#34;: &#34;12&#34;,
            &#34;exclude_response_headers&#34;: &#34;false&#34;,
            &#34;headers&#34;: [
                { &#34;name&#34;: &#34;Content-Type&#34;, &#34;value&#34;: &#34;application/json&#34; },
                { &#34;name&#34;: &#34;Accept&#34;, &#34;value&#34;: &#34;application/json&#34; }
            ],
            &#34;url&#34;: &#34;/api/now/table/incident?sysparm_fields&#61;short_description&#34;,
            &#34;method&#34;: &#34;POST&#34;,
            &#34;body&#34;: &#34;eyJzaG9ydF9kZXNjcmlwdGlvbiI6ImJhdGNoIHJlc3QgYmFieSEifQ&#61;&#61;&#34;
}</code></pre>
<p> </p>
<p>In the <strong>third</strong> and <strong>fourth</strong> batch request item, I am querying <strong>problems</strong> and <strong>change requests</strong> assigned to me.</p>
<p> </p>
<p>Now let&#39;s make use of this Batch API to build a simple Service Portal page and wire the data to widgets using the Batch API. </p>
<p>Our page will have 4 widgets, and it will look like below</p>
<ul><li>Homepage Search (OOB widget)</li><li>My Incidents (Custom)</li><li>My Problems (Custom)</li><li>My Changes (Custom)</li></ul>
<p><img src="29b65adcdb842380200f0b55ca961944.iix" /></p>
<p>Instead of calling 3 different REST APIs to get data for My Incident, My Problems and My Changes, we will make use of Batch API to get data for all 3 widgets at once. </p>
<p>For simplicity sake, I have attached the update set for above page below. After you install the update set, a new page called &#34;<strong>Batch API Demo</strong>&#34;,  three new widgets &#34;<strong>My Incident, My Problems and My Changes</strong>&#34; and UI script called as &#34;<strong>Batch Service</strong>&#34; must be added to your instance.</p>
<p>If you look at the Client Script for <strong>My Incident </strong>widget, I am injecting an angular service called <strong>batchService, </strong> into the controller. All the heavy lifting of API happens in here, this service is added as a dependency for this widget. </p>
<p>When <strong>My Incident</strong> widget is loaded on the page, we call the<strong> </strong>batchService<strong>.getHomepageData()</strong> to hit Batch API</p>
<p><strong>My Incident (Client Script)</strong></p>
<pre class="language-javascript"><code>function myIncidents(batchService, $rootScope,$scope) {
  /* widget controller */
  var c &#61; this;
  batchService.getHomepageData($scope.user.sys_id).then(function (response) {
    var incidents &#61; atob(response.serviced_requests[0].body);
    var problems &#61; atob(response.serviced_requests[2].body);
    var changereqs &#61; atob(response.serviced_requests[3].body);
	  
    c.myIncidentList &#61; JSON.parse(incidents);
    
   $rootScope.$broadcast(&#34;problemsList&#34;, JSON.parse(problems));
   $rootScope.$broadcast(&#34;changeList&#34;,JSON.parse(changereqs));

});}</code></pre>
<p>Response from Batch API comes back in below format. Any unserviced requests will come back as a separate array.</p>
<p><img src="3d1fd6dcdb082380200f0b55ca961930.iix" /> </p>
<p>We are interested in<strong> serviced_request</strong> array. The response data for each request is base64 encoded and comes back in a body. </p>
<p>On lines 5,6,7 We parse individual requests and convert the bas64 body to a string using atob() API, then broadcast the data for <strong>My Problems and My Changes</strong> widgets on line 11, 12.</p>
<p>Also if you check the list of incidents on the native UI, you must see a new incident created from our second Batch Request </p>
<p><img src="eed1e6d4db482380200f0b55ca9619b3.iix" /></p>
<p> </p>
<p>We have successfully made use of Batch API to query 3 different tables and to create an incident all in one request.</p>
<p>Hope this gives you all an idea how to use the new Batch API that&#39;s coming out in London :)</p>
<p> </p>
<p>Thanks,</p>
<p>Sush</p>