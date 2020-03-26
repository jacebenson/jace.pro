---
title: "Hello World A Beginners Tutorial to Angular in ServiceNow"
date: 2015-08-28T04:48:13.000Z
authors: ["BenPhillipsSNC"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=fabc6e25dbd0dbc01dcaf3231f961927"
---
<p><span style="font-size: 10pt; line-height: 1.5em;"><img  alt="angularjs servicenow.jpeg" class="image-0 jive-image" height="174" src="c703b779db9c1fc068c1fb651f9619ee.iix" style="max-width: 620px; height: 173.193548387097px; width: 295px; float: right;" width="295"/>AngularJS is a powerful framework developed to make HTML more usable for web applications. It can be used in ServiceNow instances to build powerful and dynamic single-page apps in the CMS, in scoped applications, or just as a standalone UI page. It is also a great alternative to building Jelly templates, a trait many SN developers cheer heartily.</span></p><p><span style="font-size: 10pt; line-height: 1.5em;"><br/></span></p><p><span style="font-size: 10pt; line-height: 1.5em;"><a title="John Anderson" __default_attr="6964" __jive_macro_name="user" class="jive_macro_user jive_macro" data-orig-content="John Anderson" href="/community?id=community_user_profile&user=fb519a29db981fc09c9ffb651f9619c2">John Anderson</a> has written a few very useful blog posts about AngularJS in ServiceNow as well, such as</span> <span style="font-size: 10pt; line-height: 1.5em;"><a __default_attr="3662" __jive_macro_name="blogpost" class="jive_macro jive_macro_blogpost" data-orig-content="Adding AngularJS and other Javascript Libraries to your Instance" href="/community?id=community_blog&sys_id=0e6c2ea1dbd0dbc01dcaf3231f9619f2" modifiedtitle="true" title="Adding AngularJS and other Javascript Libraries to your Instance">Adding AngularJS and other Javascript Libraries to your Instance</a></span><span style="font-size: 10pt; line-height: 1.5em;"> and a mini-series on his personal site <a href="http://www.john-james-andersen.com/" title="http://www.john-james-andersen.com/">http://www.john-james-andersen.com.</a> Be sure to check those out if interested. </span></p><p><span style="font-size: 10pt; line-height: 1.5em;"><br/></span></p><p><span style="font-size: 10pt; line-height: 1.5em;">I'm a firm believer in baby steps<a title="-media-cache-ak0.pinimg.com/236x/5f/93/23/5f9323f763efc8f9d10d5308bd633215.jpg" href="https://s-media-cache-ak0.pinimg.com/236x/5f/93/23/5f9323f763efc8f9d10d5308bd633215.jpg">,</a> so o</span><span style="font-size: 10pt; line-height: 1.5em;">ur goal in this tutorial will be very simple: to install the AngularJS framework and create a single-UI-page Angular app that returns a message "Hello from Angular!" from your Angular controller.</span><span style="font-size: 10pt; line-height: 1.5em; font-weight: bold;"> </span></p><p><span style="font-size: 10pt; line-height: 1.5em; font-weight: bold;"><br/></span></p><p><span style="font-size: 10pt; line-height: 1.5em; font-weight: bold;">At the end of this tutorial you will:</span></p><ul><li><span style="font-size: 10pt; line-height: 1.5em;">Have the AngularJS library installed on your instance</span></li><li><span style="font-size: 10pt; line-height: 1.5em;">Know the right syntax to include Angular in a UI page or application</span></li><li><span style="font-size: 10pt; line-height: 1.5em;">Know how to declare an Angular module and controller, and get it to successfully update your view (your HTML).</span></li></ul><p></p><h2>1. Install the AngularJS Library</h2><p></p><p>The AngularJS library does not come pre-installed in ServiceNow. To develop with AngularJS, we will need to install it manually as a UI Script.</p><ol><li>Go to <a href="https://angularjs.org/" title="https://angularjs.org/">https://angularjs.org/</a><span style="font-size: 10pt; line-height: 1.5em;"><strong> </strong></span>and click the blue <span style="color: #0000ff;"><strong>Download</strong></span> button<span style="font-size: 10pt; line-height: 1.5em;"><strong>.</strong></span><span style="font-size: 10pt; line-height: 1.5em;">   </span></li><li><span style="font-size: 10pt; line-height: 1.5em;">For branch, pick the latest, then copy the link for the CDN. Paste this url into your browser's address bar. </span></li><li><span style="font-size: 10pt; line-height: 1.5em;">Select the entire contents of that script and copy it to your clipboard.   </span></li><li><span style="font-size: 10pt; line-height: 1.5em;">Now go to your instance, and go to UI Scripts.</span></li><li>Click "New". Name it "angular.min", set to Global, set to Active, and click Submit.</li><li>Now that you are back in the list view on the UI Scripts table, make sure you can view the "Script" column on your view. Double-click the Script cell on your angular.min row and paste the contents of your clipboard into it.</li><li>Hit enter.</li></ol><p></p><p>The library is now installed on your instance!</p><p><img   alt="Screen Shot 2015-08-27 at 3.47.19 PM.png" class="image-0 jive-image" src="8116108edb545304b322f4621f961968.iix" style="height: 139px; width: 620px; display: block; margin-left: auto; margin-right: auto;"/></p><p></p><h2>2. Create a new UI page</h2><p><span style="font-size: 10pt; line-height: 1.5em;"><br/></span></p><p><span style="font-size: 10pt; line-height: 1.5em;">Now that the AngularJS library is installed on your instance, create a new UI page by going to<strong> System UI &gt; UI Pages</strong>. Name it "Angular Hello World." On line 3, under the jelly start tag, we are going to include the Angular library with a <strong>g:requires</strong> tag. Put this code on line 3 to require our Angular library when the UI page loads:</span></p><p></p><pre __default_attr="xml" __jive_macro_name="code" class="jive_text_macro _jivemacro_uid_14408019334316615 jive_macro_code" jivemacro_uid="_14408019334316615">
<p>&lt;g:requires name="angular.min.jsdbx"/&gt;</p>



















</pre><p></p><p></p><h2>3. Define your Angular module</h2><p><span style="font-size: 10pt; line-height: 1.5em;"><br/></span></p><p><span style="font-size: 10pt; line-height: 1.5em;">Now that we are including AngularJS in our UI page, we are going to declare our angular module. </span><span style="font-size: 10pt; line-height: 1.5em;">You can think of a module as a container for the different parts of your app — controllers, services, filters, directives, etc.</span></p><p></p><p><span style="font-size: 10pt; line-height: 1.5em;">At line 4, add this code to declare your Angular module. We are going to call our module angularHelloWorldApp.</span></p><p></p><pre __default_attr="xml" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14408019334222125" jivemacro_uid="_14408019334222125">
<p>&lt;!-- angular modules --&gt;</p>
<p>&lt;script&gt;var app = angular.module("angularHelloWorldApp",[]);&lt;/script&gt;</p>



















</pre><p></p><p>And save. Our Angular module is now defined.</p><p><span style="font-size: 10pt; line-height: 1.5em;"><br/></span></p><p><span style="font-size: 10pt; line-height: 1.5em;">Now we need to link our module to our DOM. We do this by putting "ng-app" into an HTML element. The "ng-app" </span><span style="font-size: 10pt; line-height: 1.5em;">is a directive to auto-bootstrap an AngularJS application. The ngApp directive designates the root element of the application and is typically placed near the root element of the page - e.g. on the &lt;body&gt; or &lt;html&gt; tags. <span style="font-size: 8pt;">(<a title="ocs.angularjs.org/api/ng/directive/ngApp" href="https://docs.angularjs.org/api/ng/directive/ngApp">more</a>)</span></span></p><p></p><p><span style="font-size: 10pt; line-height: 1.5em;">Insert a body tag on line 4 just under your &lt;g:requires&gt; tag, and link the app to it like this:</span></p><p></p><pre __default_attr="xml" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14408019331908064" jivemacro_uid="_14408019331908064">
<p>&lt;body ng-app="angularHelloWorldApp"&gt;</p>
<p>&lt;/body&gt;</p>



















</pre><p></p><p></p><h2><strong>4. Define the Controller</strong></h2><p><span style="font-size: 10pt; line-height: 1.5em;"><br/></span></p><p><span style="font-size: 10pt; line-height: 1.5em;">The ngController directive attaches a controller class to the view. This is a key aspect of how angular supports the principles behind the Model-View-Controller design pattern. <span style="font-size: 8pt;">(<a title="ocs.angularjs.org/api/ng/directive/ngController" href="https://docs.angularjs.org/api/ng/directive/ngController">more</a>)</span> We will be using our controller as a place to store properties with values that we will later send into our view (our HTML). </span><span style="font-size: 10pt; line-height: 1.5em;">On line 8, just above your &lt;/j:jelly&gt; closing tag and below your module, put:</span></p><p></p><pre __default_attr="xml" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14408019331835778" jivemacro_uid="_14408019331835778">
<p>&lt;!-- angular controllers --&gt;</p>
<p>&lt;script&gt;</p>
<p>   app.controller('MainController', ['$scope', function($scope) {</p>
<p>           $scope.greeting = "Hello from Angular!";</p>
<p>   }]);</p>
<p>&lt;/script&gt;</p>



















</pre><p></p><p>Our $scope data property will allow us to access data from Angular in our DOM. We will be able to access our <em>greeting</em> property in our HTML soon. <span style="font-size: 10pt; line-height: 1.5em;">Now, we'll tie the controller to our DOM. On line 4, insert these on new lines inside of the &lt;body&gt;&lt;/body&gt; tags:</span></p><p></p><pre __default_attr="xml" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14408019331759639" jivemacro_uid="_14408019331759639">
<p>   &lt;div ng-controller="MainController"&gt;</p>
<p>           &lt;h1&gt;{{ greeting }}&lt;/h1&gt;</p>
<p>   &lt;/div&gt;</p>



















</pre><p></p><p>We just tied our controller to this div, then inside of an h1 tag we used an Angular <a title="ocs.angularjs.org/guide/expression" href="https://docs.angularjs.org/guide/expression">expression</a> which will query our Angular scope data for a property named <em>greeting,</em> and should return the value of it, rendering it as HTML.</p><h2></h2><p><span style="font-size: 10pt; line-height: 1.5em;">Now that we have defined our Angular module, bound it to our HTML body element, defined our controller, bound that to a div tag, and included an expression, it's time to try it out! Click <strong>Try It</strong>.</span></p><p><span style="font-size: 10pt; line-height: 1.5em;"><br/></span></p><p><span style="font-size: 10pt; line-height: 1.5em;">If you see </span><span style="font-size: 14pt;"><strong>Hello from Angular! </strong></span><span style="font-size: 10pt; line-height: 1.5em;">then congratulations! You just used Angular to populate and manipulate your HTML document. </span></p><p><span style="font-size: 10pt; line-height: 1.5em;"><br/></span></p><p><span style="font-size: 10pt; line-height: 1.5em;">Here is what my final markup looks like on the UI Page:</span></p><pre __default_attr="xml" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14408019331488253" jivemacro_uid="_14408019331488253">
<p>&lt;?xml version="1.0" encoding="utf-8"?&gt;</p>
<p>&lt;j:jelly xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null" trim="false"&gt;</p>
<p>   &lt;g:requires name="angular.min.jsdbx"/&gt;</p>
<p>       &lt;body ng-app="angularHelloWorldApp"&gt;</p>
<p>               &lt;div ng-controller="MainController"&gt;</p>
<p>                       &lt;h1&gt;{{ greeting }}&lt;/h1&gt;</p>
<p>               &lt;/div&gt;</p>
<p>       &lt;/body&gt;</p>
<p>       &lt;!-- angular modules --&gt;</p>
<p>       &lt;script&gt;var app = angular.module("angularHelloWorldApp",[]);&lt;/script&gt;</p>
<p>       &lt;!-- angular controllers --&gt;</p>
<p>       &lt;script&gt;</p>
<p>           app.controller('MainController', ['$scope', function($scope) {</p>
<p>                       $scope.greeting = "Hello from Angular!";</p>
<p>           }]);</p>
<p>   &lt;/script&gt;</p>
<p>&lt;/j:jelly&gt;</p>





</pre><p></p><p style="font-size: 13.3333330154419px;"><span style="font-size: 10pt; line-height: 1.5em;"><span style="font-size: 13.3333330154419px;">For more</span> information, review:</span></p><ul><li><span style="font-size: 10pt; line-height: 1.5em;"><a href="https://angularjs.org/" title="https://angularjs.org/">https://angularjs.org/</a></span></li><li><a href="https://www.codecademy.com/en/courses/learn-angularjs" style="font-size: 10pt; line-height: 1.5em;" title="https://www.codecademy.com/en/courses/learn-angularjs">Learn AngularJS | Codecademy</a></li><li><span style="font-size: 10pt; line-height: 1.5em;"><a href="https://docs.angularjs.org/api" title="https://docs.angularjs.org/api">https://docs.angularjs.org/api</a></span></li></ul>