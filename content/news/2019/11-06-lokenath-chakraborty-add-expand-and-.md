---
title: "Add expand and collapse functionality to any Knowledge article"
date: 2019-11-05T11:29:48.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=5faa87a3db3cc8d0190dfb2439961904"
---
<p class="ng-scope">HTML5 provides a way to create this expand/collapse feature with just a few lines of HTML and no JavaScript insight. And this can be done by the <strong>details</strong> and <strong>summary</strong> tags.</p>
<h3 id="how-to-use" class="ng-scope">Working example</h3>
<p> </p>
<p> </p>
<p> </p>
<p><details class="ng-scope" open=""><summary><em><strong>Click here to toggle me</strong></em></summary>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </details></p>
<p> </p>
<p> </p>
<p> </p>
<p class="ng-scope"> </p>
<h3 id="how-to-use" class="ng-scope">The &lt;details&gt; tag</h3>
<p class="ng-scope">There are two relevant elements here: <strong>&lt;details&gt;</strong> and, optionally, <strong>&lt;summary&gt;</strong>. <strong>&lt;details&gt;</strong> is the wrapper for all the content we want to show and hide, and <strong>&lt;summary&gt;</strong> contains the — well, the summary and title of the section. Technically we don’t need the summary. If absent, the browser will use some default text (in Chrome: “details”). Let’s have a look at some markup:</p>
<pre class="ng-scope  language-markup"><code>&lt;details&gt;
  &lt;summary&gt;Show/Hide me&lt;/summary&gt;
  &lt;p&gt;Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.&lt;/p&gt;
&lt;/details&gt;</code></pre>
<p class="ng-scope"> <strong>Output</strong> </p>
<p> </p>
<p> </p>
<p> </p>
<p><details class="ng-scope"><summary>Show/Hide me</summary>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</details></p>
<p> </p>
<p> </p>
<p> </p>
<p class="ng-scope"> It’s a simple example, but it shows off the toggle effect nicely. All this without JavaScript! </p>
<h3 class="ng-scope">The open attribute</h3>
<p class="ng-scope">In the example above, the content is hidden when the page loads. We can make it visible by default by adding the boolean <strong>open</strong> attribute to the <strong>&lt;details&gt;</strong> element </p>
<pre class="ng-scope  language-markup"><code>&lt;details open&gt;
  &lt;summary&gt;Show/Hide me&lt;/summary&gt;
  &lt;p&gt;Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.&lt;/p&gt;
&lt;/details&gt;</code></pre>
<p class="ng-scope"><strong>Output</strong></p>
<p> </p>
<p> </p>
<p> </p>
<p><details class="ng-scope" open=""><summary>Show/Hide me</summary>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</details></p>
<p> </p>
<p> </p>
<p class="ng-scope"> There is no <strong>closed</strong> attribute. It’s the default, so by omitting <strong>open</strong>, you imply <strong>closed</strong>.</p>
<h3 class="ng-scope">The &lt;summary&gt; tag</h3>
<p class="ng-scope">The<strong>&lt;summary&gt;</strong> tag defines a visible heading for the <strong>&lt;details&gt;</strong> element. The heading can be clicked to view/hide the details.</p>
<h3 class="ng-scope">Implementation in ServiceNow</h3>
<ul class="ng-scope"><li>Open the article where expand / collapse functionality needs to be added.</li><li>Click on source code button on TinyMCE editor.</li></ul>
<p class="ng-scope">         <img class="community_image_fullscreen" src="https://community.servicenow.comhttps://community.servicenow.com/20af42badb72b344fff8a345ca961900.iix" alt="image" width="899" height="358" /></p>
<ul class="ng-scope"><li>Add details and summary tags where ever required.</li></ul>
<p class="ng-scope">           <img class="community_image_fullscreen" src="https://community.servicenow.comhttps://community.servicenow.com/a2305e7edb72b344fff8a345ca96191f.iix" alt="image" /></p>
<ul class="ng-scope"><li>Save the record and view the article. </li></ul>
<p class="ng-scope">          <img class="community_image_fullscreen" src="https://community.servicenow.comhttps://community.servicenow.com/17b09eb2dbb2b344fff8a345ca9619d6.iix" alt="image" /></p>
<p class="ng-scope">The use of these tags is just not limited to articles, but it can also be used in ServiceNow Community, questions or wherever ServiceNow HTML editor is used. </p>
<p class="ng-scope">Note: &lt;details&gt; and &lt;summary&gt; tags aren&#39;t supported in IE.</p>