---
title: "Service Portal  Bookmark Widget"
date: 2018-02-20T09:58:53.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=5d6f964bdbd4d3445322f4621f961917"
---
<p>Hi All,</p>
<p>I intent to share series of widgets which are usually required for any SP portal projects.</p>
<p>This blog will cover bookmark widget which you can reuse to handle bookmarks on your SP pages.</p>
<p><strong>Body HTML Template:</strong></p>
<p>&lt;div&gt;<br /> &lt;button ng-click&#61;&#34;c.toggleSubscribe($event)&#34;&gt;<br /> &lt;span ng-class&#61;&#34;{&#39;icon icon-bookmark&#39;:c.data.subscription,&#39;icon icon-bookmark-outline&#39;:!c.data.subscription}&#34; style&#61;&#34;font-size: 28px&#34;&gt;&lt;/span&gt;<br /> &lt;span class&#61;&#34;tablet-and-up-only&#34;&gt;Bookmark&lt;/span&gt;<br /> &lt;/button&gt;<br />&lt;/div&gt;</p>
<p> </p>
<p><strong>CSS:</strong></p>
<p>span.icon-bookmark-outline {<br /> font-size : 28px;<br />}</p>
<p><strong>Server Script:</strong></p>
<p>(function() {<br /> /* populate the &#39;data&#39; object */<br /> data.userID &#61; gs.getUserID();<br /> data.title &#61; options.title;<br /> data.bookmark_type &#61; options.bookmark_type || &#39;Page&#39;;<br />})();</p>
<p> </p>
<p><strong>Client Controller</strong>:</p>
<p>function($http, $scope, $rootScope,$location) {<br /> /* widget controller */<br /> var c &#61; this;<br /> //var location &#61; window.location.href;<br /> //c.data.path &#61; $location.absUrl();<br /> c.data.subscription &#61; &#39;&#39;;<br /> <br /> $http({method: &#39;GET&#39;,url:&#34;/api/now/table/sys_ui_bookmark?sysparm_query&#61;user&#61;&#34;&#43;c.data.userID}).then(function (response) {<br /> if (response.status &#61;&#61;&#61; 200) {<br /> for (i &#61; 0;i &lt; response.data.result.length; i&#43;&#43;) {<br /> if(response.data.result[i].url &#61;&#61; $location.absUrl()){<br /> c.data.subscription &#61; response.data.result[i].sys_id;<br /> c.isSubscribedStyle();<br /> break;<br /> }<br /> }<br /> }<br /> });<br /> <br /> c.isSubscribedStyle &#61; function() {<br /> return {color: (c.data.subscription !&#61;&#61; &#34;&#34;) ? &#39;#fcc742&#39; : &#39;#cfcfcf&#39;};<br /> };<br /> <br /> c.toggleSubscribe &#61; function(){<br /> if (c.data.subscription){<br /> $scope.server.get({action : &#39;delete_bookmark&#39;, url : $location.absUrl()}).then(function(r){<br /> c.data.subscription &#61; r.data.subscription;<br /> //$rootScope.helpfulContent &#61; r.data.subscription;<br /> c.isSubscribedStyle();<br /> });<br /> }<br /> if (c.data.subscription) {<br /> $http({ method: &#34;DELETE&#34;,url: &#34;/api/now/table/sys_ui_bookmark/&#34;&#43;c.data.subscription}).then(function(response) {<br /> if (response.status &#61;&#61;&#61; 204) {<br /> c.data.subscription &#61; &#34;&#34;;<br /> }<br /> });<br /> }else {<br /> var payload &#61; {};<br /> payload.user &#61; c.data.userID;<br /> payload.title &#61; c.data.title;<br /> payload.u_bookmark_type &#61; c.data.bookmark_type;<br /> payload.window_name &#61; &#34;_blank&#34;;<br /> payload.url &#61; $location.absUrl();<br /> $http.post(&#34;/api/now/table/sys_ui_bookmark&#34;,payload).then(function(response) {<br /> if (response.status &#61;&#61;&#61; 201) {<br /> c.data.subscription &#61; response.data.result.sys_id;<br /> }<br /> });<br /> }<br /> };<br /> }</p>
<p>I hope this widget will help SP developers.</p>
<p>Regards,</p>
<p>Sachin</p>
<p> </p>
<p> </p>
<p> </p>