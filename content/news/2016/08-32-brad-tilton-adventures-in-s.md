---
title: "Adventures in Service Portaling The Form Widget"
date: 2016-08-31T20:00:00.000Z
authors: ["Brad Tilton"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=ac1eae2ddbd0dbc01dcaf3231f961949"
---
<p style="font-family: arial, sans-serif; color: #666666;"><span style="color: #666666; font-family: arial, sans-serif;">One of the nice features of Service Portal is the sheer number of widgets that are included by default after activating the plugins. </span>In today&#39;s AISP (yep, I acronymed it) post I&#39;m going to explore one of those widgets a bit. The Form Widget.</p>
<p style="font-family: arial, sans-serif; color: #666666;"> </p>
<p style="font-family: arial, sans-serif; color: #666666;">One of the most common questions I used to see around CMS was something like: &#34;How do I open this record in CMS?&#34; There were a couple of different ways to do it with content types and detail records, a static iframe, or with a little bit of work a more dynamic iframe that would take in url parameters and render some content. Each of these methods had some drawbacks and I was never quite satisfied with both the learning curve and the result. Oh, and they all used iframes.</p>
<p style="font-family: arial, sans-serif; color: #666666;"> </p>
<p style="font-family: arial, sans-serif; color: #666666;">With the form widget it&#39;s easy to display any record in ServiceNow within your Service Portal without doing any configuration, all you need to do is link to it. Lets take a look at the self-service view of an incident form in the standard view of ServiceNow:</p>
<p style="font-family: arial, sans-serif; color: #666666;"> </p>
<p style="font-family: arial, sans-serif; color: #666666;"><img class="image-1 jive-image" style="width: 620px; height: 395px;" src="2a38d8c6db589fc03eb27a9e0f96195d.iix" alt="incidentdefault.PNG" /></p>
<p style="font-family: arial, sans-serif; color: #666666;"> </p>
<p style="font-family: arial, sans-serif; color: #666666;">We know that this form has a url that looks something like:</p>
<p style="font-family: arial, sans-serif; color: #666666;"><a class="unlinked" title="https://instance.service-now.com/nav_to.do?uri&#61;incident.do?sys_id&#61;b28a474f4fb8220067d9b5e18110c758&amp;sysparm_view&#61;ess">https://instance.service-now.com/nav_to.do?uri&#61;<span style="color: #e23d39;">incident</span>.do?<span style="color: #303030;">sys_id</span>&#61;<span style="color: #3a0699;">b28a474f4fb8220067d9b5e18110c758</span>&amp;sysparm_view&#61;<span style="color: #2873ee;">ess</span></a></p>
<p> </p>
<p>Without doing anything other than making sure that the Service Portal plugins are enabled, I can show this same record in my Service Portal using this url:</p>
<p><a class="unlinked" title="https://dev12285.service-now.com/sp?id&#61;form&amp;table&#61;incident&amp;sys_id&#61;b28a474f4fb8220067d9b5e18110c758&amp;view&#61;ess">https://</a><a class="unlinked" style="text-decoration: inherit; color: #666666; font-family: arial, sans-serif;" title="https://instance.service-now.com/nav_to.do?uri&#61;incident.do?sys_id&#61;b28a474f4fb8220067d9b5e18110c758&amp;sysparm_view&#61;ess">instance</a><a class="unlinked" title="https://dev12285.service-now.com/sp?id&#61;form&amp;table&#61;incident&amp;sys_id&#61;b28a474f4fb8220067d9b5e18110c758&amp;view&#61;ess">.service-now.com/sp?id&#61;form&amp;table&#61;<span style="color: #e23d39;">incident</span>&amp;sys_id&#61;<span style="color: #3a0699;">b28a474f4fb8220067d9b5e18110c758</span>&amp;view&#61;<span style="color: #2873ee;">ess</span></a></p>
<p> </p>
<p><img class="image-2 jive-image" style="width: 620px; height: 443px;" src="ca3937b9db9cdf04e9737a9e0f961981.iix" alt="incidentformwidget.PNG" /></p>
<p> </p>
<p>The form widget is on a page already by default that can be called in any service portal called <em>form</em>. You&#39;re then able to pass the page the following url parameters:</p>
<ul><li>table - the name of the ServiceNow table where the record is located</li><li>sys_id - the unique identifier of the record</li><li>view - an optional parameter where you can specify which view the fields are pulled from</li><li>query - allows you to specify a query</li></ul>
<p> </p>
<p>If you want to include this widget on another page, you also have some widget options you can set:</p>
<ul><li>Disable UI Actions on Form</li><li>Display current form view</li><li>Omit header options icon</li></ul>
<p> </p>
<p>You may have noticed that by default the form widget includes ui actions, all fields and related lists on the form view, and also client scripts and ui policies. However, there are some exceptions to those. They are documented <a title="ithub.com/service-portal/documentation/blob/master/documentation/form.md" href="https://docs.servicenow.com/bundle/kingston-servicenow-platform/page/build/service-portal/reference/unsupported-features-sp.html" rel="nofollow">here</a>, but I&#39;ll list them out:</p>
<ul><li>Client side ui actions</li><li>Anything that uses jelly, including
<ul><li>UI Macros</li><li>UI Pages/Formatters</li></ul>
</li><li>Client Scripts where <em>Run scripts in ui type</em> is <em>Desktop</em></li></ul>
<p> </p>
<p>In addition to those, there are a number of different client side scripting techniques and methods that are not supported. All of the Service Portal supported objects and methods are listed in the github doc below, and these are not limited to the form widget.</p>
<p><a title="https://docs.servicenow.com/bundle/kingston-servicenow-platform/page/build/service-portal/concept/unsupported_client_scripts.html" href="https://docs.servicenow.com/bundle/kingston-servicenow-platform/page/build/service-portal/concept/unsupported_client_scripts.html" rel="nofollow">Service Portal and client scripts</a></p>
<p> </p>
<p>Previous blogs in this series:</p>
<p><a class="jive_macro jive_macro_blogpost" title="Adventures in Service Portaling: Introduction and Resources" href="community?id&#61;community_blog&amp;sys_id&#61;b9cc2265dbd0dbc01dcaf3231f9619c7" rel="nofollow">Adventures in Service Portaling: Introduction and Resources</a></p>
<p><a class="jive_macro jive_macro_blogpost" title="Adventures in Service Portaling: How Do I Get To That?" href="community?id&#61;community_blog&amp;sys_id&#61;ca8da669dbd0dbc01dcaf3231f961932" rel="nofollow">Adventures in Service Portaling: How Do I Get To That?</a></p>