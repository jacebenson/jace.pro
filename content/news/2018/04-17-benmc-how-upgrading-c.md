---
title: "How upgrading can fix your Order Now button"
date: 2018-04-16T18:35:00.000Z
authors: ["benmc"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=70b2b374dbe59f802b6dfb651f96197e"
---
<p>Are you having problems with your Order Now Buttons?</p>
<p><strong>Problem:</strong></p>
<p>There are two known errors seen where Automated Test Framework (ATF) tests fail to find the &#39;Add to Cart&#39; button on a catalog item.</p>
<ul><li><a href="https://hi.service-now.com/nav_to.do?uri&#61;/kb_view.do%3Fsysparm_article%3DKB0656699%26sysparm_stack%3D%26sysparm_view%3D" rel="nofollow">KB0656699</a> - Automated Test Framework fails when a catalog item does not use the functionality &#34;Use cart layout&#34;</li><li>
<ul><li><strong>Fixed</strong> in Jakarta Patch 6 &amp; Kingston</li></ul>
</li></ul>
<ul><li><a href="https://hi.service-now.com/nav_to.do?uri&#61;/kb_view.do%3Fsysparm_article%3DKB0682516%26sysparm_stack%3D%26sysparm_view%3D" rel="nofollow">KB0682516</a> - Automated Test Framework fails when individual catalog item has &#39;use cart layout&#39; set to false. (Extension of PRB1192151. Error &#39;FAILURE: Cannot find &#39;Add to Cart&#39; button.)</li><li>
<ul><li><strong>Fixed</strong> in Jakarta Patch 6 &amp; Kingston Patch 3</li></ul>
</li></ul>
<p> <strong>Example of the Error and Workaround for those on Pre fix platform version:</strong></p>
<p>When the &#39;sc.use_cart_layout&#39; system property is set to true and the use sc layout option is false at the individual item level, the Add Item to cart and the Order Item ATF test steps fail.</p>
<div id="articleStarRatingGroup" class="accessibility-disabled"><strong>Steps to reproduce:</strong></div>
<ol><li>Create a test.</li><li>Add a step to <strong>Open a catalog item</strong>, such as a standard laptop. Make sure item is set to <strong>Use cart layout</strong> &#61; <strong>false</strong>.</li><li>Add the step <strong>Add item to shopping cart</strong>.</li><li>Test Run.</li></ol>
<p><strong>Error Output:</strong></p>
<pre style="padding-left: 30px;">Status: Failure
Summary: FAILURE: Cannot find &#39;Add to Cart&#39; button.</pre>
<p><strong>Workaround:</strong></p>
<p style="padding-left: 30px;">Set the sc.use_cart_layout system property to false</p>
<p style="padding-left: 30px;">(If &#39;use cart layout&#39; is set on the item itself, there is no workaround for this.)</p>
<p> </p>
<p>For further info regarding <strong>ATF</strong>, pls visit: <a href="https://docs.servicenow.com/bundle/kingston-application-development/page/administer/auto-test-framework/concept/atf-basic-concepts.html" rel="nofollow">https://docs.servicenow.com/bundle/kingston-application-development/page/administer/auto-test-framework/concept/atf-basic-concepts.html</a></p>
<p> </p>
<p>As we are talking about Order Now buttons, here is a knowledge base article that shows you how to tackle a situation where hitting the Order Now Button gives a blank page.  This could be down to two main reasons, Orphaned or Duplicate records that need attention.</p>
<p><a href="https://hi.service-now.com/nav_to.do?uri&#61;/kb_view.do%3Fsysparm_article%3DKB0598810%26sysparm_stack%3D%26sysparm_view%3D" rel="nofollow">Troubleshooting - Cart Submission Issue</a></p>
<p> </p>
<p> </p>
<p> </p>