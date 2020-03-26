---
title: "The right server call  http vs server update"
date: 2018-11-22T00:31:13.000Z
authors: ["Gaurav Bajaj"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=1faa60a3dbb9a38011762183ca9619d6"
---
<p> </p>
<p>This blog post covers two fundamental use cases of calling server side code from client side in a widget as part of service Portal i.e means of c<span style="font-size: 8pt;">lient server communication</span> in service portal.</p>
<p>Thanks to <a href="community?id&#61;community_question&amp;sys_id&#61;31ee07a1dbdcdbc01dcaf3231f961920" target="_blank" rel="nofollow">TechNow Ep 28 | Service Portal</a> and <a href="https://serviceportal.io/communicating-between-the-client-script-and-the-server-script-of-a-widget/" rel="nofollow">Communicating between the Client Script and the Server Script of a widget</a>, I was able to use the these methods for sending inputs from client script to server script. So I will be covering up the same methods in details with their individual benefits.</p>
<p>1) <strong>The one which refresh the scope</strong> : You would have encountered these methods at least once in pursuit of building custom widgets whether you want to save up comments on a form, submit a record producer or updating any field value and many other times.</p>
<p> </p>
<ul><li>Method Name : c.server.update(), c.server.get(), $scope.refresh()</li><li>Feature : Copies entire data object to input object on server.( leaves no stone unturned)</li><li>Key point : Refreshes the scope synchronously as soon as an action is performed on server side.</li></ul>
<p> 2) <strong>The one which doesn&#39;t refresh the scope : </strong>This method might not be used at several occasions but as soon as start building widget, you would feel a need of it as there could be lot of instances where refreshing the scope might not be a good idea. This is achieved by using REST call to the server with $HTTP service.( a service available in the client controller of a widget)</p>
<p>      </p>
<ul><li>Method Name : $https.post. $http.get, $http.put etc (any CRUD operation)</li><li>Feature : Just send the parameter to server with a web service call through REST.</li><li>Key point: No refresh of the scope.</li></ul>
<p>     </p>
<p>Lets understand it with below example.</p>
<p>Here we have an knowledge article page with View Count on the top and provision to provide feedback on the article.</p>
<p> I have added two buttons to save the feedback.</p>
<ul><li> Server Update : The one which refreshes the scope.</li><li> Rest Call : The one which just send the data to server and sits with peace(does not refresh the scope).</li></ul>
<p> </p>
<p>In the server side of widget, there is an OOB method which update the view count every time someone views the page.(  i.e incrementViewCount()). <span style="text-decoration: underline;">Server Update</span> method when clicked send the user&#39;s input from feedback field to server side and update the kb_feedback table and also re-runs the entire server side code.This increments the view count value every time a user provide his feedback on an article. (not an expected behavior)</p>
<p> </p>
<p> </p>
<p> On the other hand, if we click on Rest Call button, it does take the user&#39;s input to the kb_feedback table but doesn&#39;t re-run server side code and thus keeps view count intact. </p>
<p> </p>
<p><iframe id="video_tinymce" style="width: 100%; height: 480px;" src="https://www.youtube.com/embed/-bJDYy6gxo0"></iframe></p>
<p>I will add the code snippets from here for better understanding( for both the Server Update and Rest Call)</p>
<p>a) HTML Code </p>
<pre class="language-markup"><code>&lt;textarea class&#61;&#34;form-control z-depth-1&#34; id&#61;&#34;exampleFormControlTextarea6&#34; rows&#61;&#34;3&#34; placeholder&#61;&#34;Please give your feedback here...&#34; ng-model&#61;&#34;feedback&#34;&gt;&lt;/textarea&gt;


&lt;button type&#61;&#34;button&#34; class&#61;&#34;btn btn-primary pull-right submit&#34; ng-click&#61;&#34;serverUpdate();&#34;&gt;${Server Update}&lt;/button&gt;
&lt;button type&#61;&#34;button&#34; class&#61;&#34;btn btn-success submit&#34; ng-click&#61;&#34;restCall();&#34;&gt;${Rest Call}&lt;/button&gt;
 </code></pre>
<p> </p>
<p> </p>
<p> b) Client Controller </p>
<p> </p>
<pre class="language-javascript"><code>/* This method call the server and send fedback parameter to the server side
for storing it in the kb_feedback table. This makes whole of server side code
to re-run and then updates the entire $scope.
*/
$scope.serverUpdate &#61; function(){
	//c.data.message&#61;&#39;&#39;;
	$scope.data.feedback&#61;$scope.feedback;
	c.server.update().then(function(){
		$scope.feedback&#61;&#39;&#39;;
			c.data.message &#61; &#34;Your feedback has been submitted&#34;;
		})
	
	
	
}

/* This method call the server through REST web service using the table API urls
and post the feedback paramter into the kb_feedback table.
Although no change in the #scope at all.
*/
$scope.restCall &#61; function(){

var dataURL&#61; $scope.data.instanceURL&#43;&#39;/api/now/table/kb_feedback&#39;;
//create object for data to be sent through REST API
var feedbackObj&#61;{};
feedbackObj.user&#61;$scope.data.loggedInUser;
feedbackObj.comments&#61;$scope.feedback;
	feedbackObj.article&#61;$scope.data.articleObj.sysId;



  $http.post(dataURL, feedbackObj).success(function(response) {
		
	});


}</code></pre>
<p> </p>
<p> </p>
<p>Conclusion : Updating the scope is most beautiful feature that could have happened in service portal but there are still good number of scenario where it would be causing an issue. In all such cases, we can rely on $http service and utilize it based on the table/scripted API.</p>
<p> </p>
<p>PS : I have attached the widget xml with complete code.</p>
<p> </p>
<p>Thanks</p>
<p>Gaurav </p>
<p>Happy Learning!!</p>
<p><strong><span style="font-size: 14pt;">   </span></strong></p>
<p> </p>
<p> </p>