---
title: "Servicenow Integration with YouTube"
date: 2019-01-25T03:31:17.000Z
authors: ["Harshvardhan"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=38a97ec0db9bef402e8c2183ca96199e"
---
<p>We can integrate Service-now with YouTube by using google API.</p>
<p>Here i tried to Retrieve one of the YouTube Video &#34;View Count&#34; , &#34;Likes&#34;, &#34;Number of Comments&#34;.</p>
<p> </p>
<p>Steps:</p>
<ul><li>You need to check the API from https://console.developers.google.com.</li><li>once you access the above URL then you need to create a Project.</li></ul>
<p><img src="9635bac0db1bef402e8c2183ca9619e1.iix" width="950" height="534" /></p>
<p> </p>
<p>if you see i have already create one project as &#34;ServiceNow Dev&#34;. same way you can create your new project.</p>
<p>Once you will create the project then go to the &#34;Credentials&#34; and click on edit icon to copy the API Key.</p>
<p> </p>
<p><img src="c4f57ac4db1bef402e8c2183ca9619c8.iix" width="947" height="533" /></p>
<p> </p>
<p>Once you will be done with above steps then you will use the &#34;<span class="gwt-InlineLabel">YouTube.videos.list</span>&#34; API to get the YouTube videos count, like , or other details related to video.</p>
<p>if you want to learn more about the YouTube API you can refer the below link.</p>
<p>https://developers.google.com/apis-explorer/#s/</p>
<p> </p>
<p>Now i am coming to the Service-now , here i have used rest message.</p>
<p>Rest Message:</p>
<p> </p>
<p><img src="9037baccdb1bef402e8c2183ca9619c5.iix" width="939" height="528" /></p>
<p> </p>
<p><img src="be57f640db5bef402e8c2183ca961963.iix" width="943" height="530" /></p>
<p> </p>
<p>Business rule i used :</p>
<p> </p>
<pre class="language-markup"><code>(function executeRule(current, previous /*null when async*/) {
	
	// Add your code here
	try {
		var r &#61; new sn_ws.RESTMessageV2(&#39;youtubeApi&#39;, &#39;Default GET&#39;);
		r.setStringParameterNoEscape(&#39;YOUR_API_KEY&#39;, &#39;AIzaSyBcvG_6AknJN30yT4y9RSOqncVOe0gW_Ns&#39;);
		r.setStringParameterNoEscape(&#39;video_id&#39;,current.u_video_id);
		var json &#61; new global.JSON();	
		var response &#61; r.execute();
		var responseBody &#61; response.getBody();
		var httpStatus &#61; response.getStatusCode();
		gs.log(&#39;check status&#39;&#43;httpStatus);
		var decodedResponse &#61; json.decode(responseBody);
		var check &#61; decodedResponse.items.length;
		for(var i&#61;0; i&lt;check; i&#43;&#43;)
			{
				gs.log(&#39;hey hey&#39;&#43;decodedResponse.items[i].statistics.viewCount);
				var gr &#61; new GlideRecord(&#39;u_youtube_applciation&#39;);
				gr.get(current.sys_id);
				gr.u_video_view_count&#61;decodedResponse.items[i].statistics.viewCount;
				gr.u_number_of_likes&#61;decodedResponse.items[i].statistics.likeCount;
				gr.u_video_comment_count&#61;decodedResponse.items[i].statistics.commentCount;
				gr.update();
			}
		
		
		
	}
	catch(ex) {
		var message &#61; ex.message;
	}
	
})(current, previous);</code></pre>
<p> </p>
<p>i have created one custom table with the columns &#34;<span id="section_tab.5f716a48db572300e4d95740cf9619f0" class="tabs2_section tabs2_section_0 tabs2_section0 "><span id="section-5f716a48db572300e4d95740cf9619f0" class="section "><span class="label-text" title="">Video ID</span></span></span>&#34; , &#34;Video Count&#34;, &#34;Number of Likes&#34; , &#34;Video Comment Count&#34;.</p>
<p><img src="12d73604db5bef402e8c2183ca96198e.iix" width="968" height="544" /></p>
<p> </p>
<p>so here i will simply pass the YouTube video id and based on that it will fetch the number of details.</p>
<p>Example : I opened any youtube video and copied the id and paste it in my &#34;Video Id&#34; field then it will give me the details like below.</p>
<p> </p>
<p><img style="max-width: 100%; max-height: 480px;" src="14b8fa88db5bef402e8c2183ca96191c.iix" width="897" height="504" /></p>
<p>if you see the number of likes, views comment count came in my fields.</p>
<p><img src="5ad8fec8db5bef402e8c2183ca961999.iix" width="927" height="521" /></p>
<p> </p>
<p>many other integration we can do by using google API with service-now.</p>
<p> </p>
<p>Thanks,</p>
<p>Harshvardhan</p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>