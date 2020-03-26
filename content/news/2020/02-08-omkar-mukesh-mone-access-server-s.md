---
title: "Access Server Side variable directly in the script tag of HTML in widget"
date: 2020-02-07T16:10:34.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=2c6094c6db3684d82be0a851ca961947"
---
<p>All,</p>
<p>Recently I came across as post on community where, the requirement was to access the server script variable in the &lt;script&gt; section in the HTML code.</p>
<p> As data.var_name or c.data.var_name are not accessible in the &lt;script&gt;, they throw <strong>data</strong> and <strong>c</strong> not defined error.</p>
<p>It was obvious that these we not actually known to the scope of the HTML code.</p>
<p>Now reading the AngularJS docs somewhere I came across a variable called &#39;<strong>top&#39;</strong> that is accessible in the script section in the HTML as it the $window kind of object.</p>
<p>I made a following tweak to make this work.</p>
<p>Hope this helps everyone, also some easy way to do this is much appreciated.</p>
<p> </p>
<p>HTML - </p>
<p>&lt;div&gt;</p>
<p>  &lt;script&gt;</p>
<p>    console.log(top.<strong>Val</strong>);</p>
<p>  &lt;/script&gt;</p>
<p>&lt;/div&gt;</p>
<p> </p>
<p>Client Controller - </p>
<p>function($scope) {</p>
<p>  /* widget controller */</p>
<p>  var c &#61; this; </p>
<p>top.<strong>Val</strong> &#61; c.data.valuefromserver;</p>
<p> </p>
<p>}</p>
<p> </p>
<p>Server Script - </p>
<p>(function() {</p>
<p>    data.valuefromserver &#61; &#34;test&#34;;</p>
<p>})();</p>
<p> </p>
<p> </p>
<p>Here, as at the Server Side, we won’t be able to access the top variable as it is a window object, I had to do manipulations at the client side and push the data needed in the top object in order to access it in the &lt;script&gt; section of HTML.</p>
<p> </p>
<p>Suggestions are always appreciated&#x1f60a;</p>
<p> </p>
<p><em><strong>If this article helped you in any way, please then bookmark it or mark it as helpful.</strong></em></p>
<p> </p>
<p><strong>Regards</strong></p>
<p><strong>Omkar Mone</strong></p>
<p><strong>2019 Community Leader.</strong></p>
<p><strong>2020 Community MVP.</strong></p>