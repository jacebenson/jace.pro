---
title: "Six Tips for Useful URLs in Your Knowledge Base Articles"
date: 2018-08-01T03:25:12.000Z
authors: ["janiceg"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=f894634bdbe79384feb1a851ca96191b"
---
<p><span class="ng-scope"><em>This is the fourth in a series of suggested practices for creating knowledge base content. </em></span></p>
<p>Your knowledge base content is even more helpful if it includes links to other helpful content. Note these tips for constructing and formatting external and sample links:</p>
<h3>There&#39;s No &#34;Here&#34; Here</h3>
<p><img style="max-width: 100%; max-height: 480px;" src="e66f0320dbfb5b009d612926ca961945.iix" align="right" vspace="15" />Use the target title for your link text rather than generic words like &#34;here&#34; or &#34;click&#34;.</p>
<p><strong>Not helpful</strong>: &#34;For more information, click <span style="color: blue;"><u>here</u></span>.&#34;</p>
<p><strong>More helpful</strong>: For more information, see <span style="color: blue;">Constructing Useful Links</span>.</p>
<h3>Lose the URL</h3>
<p>Don&#39;t use the URL as the link text – use the target title text instead so people know the subject of where they&#39;re headed.</p>
<h3>Set the Context</h3>
<p>Let people know if they&#39;re leaving your site to go to an external location. For bonus points, let them know what type of information the link provides, for example, a documentation topic, an article, a PDF file, and the like.</p>
<h3>Use Variables in Sample URLs</h3>
<p>When providing a sample URL, use variables rather than internal server or employee names. <br /><br />For example, <span style="font-family: courier\ new, courier;">https//:&lt;instance-name&gt;.example.com/dev/</span>.</p>
<h3>Clicking the Clicky Thing</h3>
<p><img style="max-width: 100%; max-height: 480px;" src="b09d5fecdb3f5b009d612926ca96199e.iix" align="left" hspace="10" /></p>
<p>Make sure that sample URLs are not automatically converted to clickable links that will not work. They should appear as regular article text.</p>
<p><strong>Tip</strong> – In the HTML source, use the &amp;lt; and &amp;gt; special characters rather than typing angle brackets.<br /><br />For example, <span style="font-family: courier\ new, courier;">&lt;p&gt;When testing your app, go to https://&amp;lt;instance-name&amp;gt;.plirg.com/test/.&lt;p&gt;</span></p>
<h3>Irreplaceable</h3>
<p>Set the link to open in a new window/tab so it does not replace the open article in the current window/tab. Within the <span style="font-family: courier\ new, courier;">&lt;a&gt;</span> tags, include <span style="font-family: courier\ new, courier;">target&#61;&#34;_blank&#34;</span> as well as the <span style="font-family: courier\ new, courier;">href&#61;</span> URL.<br /><br />For example, <span style="font-family: courier\ new, courier;">&lt;a target&#61;&#34;_blank&#34; href&#61;&#34;https://docs.plirg.com/testing-links.html&#34;&gt;</span></p>
<h3>More Tips for Authoring Knowledge Base Content</h3>
<p>For even more helpful tips for authoring good knowledge base content, see the other posts in this series:</p>
<ul><li>
<p><a href="http://bit.ly/ImproveKBcontent1" target="_blank" rel="nofollow">8 Tips to Help Improve Content in your Knowledge Base</a></p>
</li><li>
<p><a href="http://bit.ly/ImproveKBcontent2" target="_blank" rel="nofollow">10 tips to make sure your Attachments and Screenshots are relevant and useful </a></p>
</li><li>
<p><a href="http://bit.ly/ImproveKBcontent3" target="_blank" rel="nofollow">Tips for writing Steps to Reproduce and procedures</a></p>
</li></ul>
<p> </p>