---
title: "Service Catalog on Service Portal"
date: 2017-05-05T23:22:30.000Z
authors: ["Bharath Padaki"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=e00d2aa5dbd0dbc01dcaf3231f96194c"
---
<p><strong><span style="color: #ff0000;">***Since this question has been coming up a lot, I want to clarify that the iFrame approach proposed below is only applicable to pre-Kingston instances. We have not and do not intend to test or support this on Kingston and future instances as the new Kingston experience addresses a number of these issues. Please use the <a style="color: #ff0000;" href="https://docs.servicenow.com/bundle/kingston-it-service-management/page/product/service-catalog-management/concept/catalog-on-portal.html" rel="nofollow">Service Catalog in Service Portal</a> page to understand the changes coming with the Kingston release.</span></strong></p>
<p> </p>
<p>Let&#39;s focus on the Service Catalog experience in Service Portal for the Jakarta release. Before we begin, there are a few aspects of the catalog you need to have a solid grasp on in order to better understand Service Catalog on Service Portal.</p>
<p> </p>
<ol><li>Catalog Client Scripts, Catalog UI Policy and Data Lookup support</li><li>Supported Variables</li><li>Order Guides</li><li>Catalog Item/Record Producer layouts</li><li>Approach on aligning with the Service Portal way</li></ol>
<p> </p>
<p><strong>Catalog Client Scripts, Catalog UI Policies and Data Lookups</strong></p>
<p>There is no support for Data Lookups. As for Catalog Client scripts, only UI Type options &#34;Mobile / Service Portal&#34; and &#34;All&#34; will be supported. UI Type &#34;Desktop&#34; catalog client scripts will not execute on the Service Portal. For complete list of APIs supported, see <a title="ithub.com/service-portal/documentation/blob/master/documentation/client_scripting.md" href="https://github.com/service-portal/documentation/blob/master/documentation/client_scripting.md" rel="nofollow">Service Portal &amp; Client Scripts.</a></p>
<p> </p>
<p>Finally, all Catalog UI Policies will be supported as long as the APIs listed above are used, when using scripts.</p>
<p> </p>
<p><strong>Supported Variables</strong></p>
<p>Within the Service Portal, all <a title="ocs.servicenow.com/bundle/istanbul-it-service-management/page/product/service-catalog-management/concept/c_ServiceCatalogVariables.html" href="https://docs.servicenow.com/bundle/istanbul-it-service-management/page/product/service-catalog-management/concept/c_ServiceCatalogVariables.html" rel="nofollow">Service Catalog variables</a> will be supported except for UI Macros, for which you will need to create a new widget and include the same as part of your catalog item. Any validations set up as part of the System Definition &gt; Validation Scripts for variables will not be supported in the Service Portal. The only validations supported are -</p>
<ol><li>Mandatory variables</li><li>Read-only variables</li><li>Variable visibility - Show/Hide</li></ol>
<p> </p>
<p><strong>Order Guides</strong></p>
<p>Using Order Guides, customers can submit a single service catalog request and receives a set number of requests. For example, if a manager takes on a new hire they can select multiple items that all new hires can order with one request.</p>
<p> </p>
<p>For the <a title="ocs.servicenow.com/bundle/istanbul-it-service-management/page/product/service-catalog-management/concept/c_ServiceCatalogOrderGuides.html" href="https://docs.servicenow.com/bundle/istanbul-it-service-management/page/product/service-catalog-management/concept/c_ServiceCatalogOrderGuides.html" rel="nofollow">Order Guides</a>, we do not support the following in Service Catalog within Service Portal:</p>
<ol><li>3-step checkout</li><li>Attachments</li></ol>
<p> </p>
<h1>Catalog Item/Record producer Layouts</h1>
<p>In my experience, I have seen our customers build both simple and complex forms. A <strong>simple form</strong>, in my opinion, is one consisting for no more than eight to ten variables requesting information from the requestor. The variables are usually laid out in a single column layout or a two-column layout, with tab ordering pre-defined so the requestor is guided intuitively through the form. A <strong>complex form</strong> would consist of more than ten variables, multiple sections built out using containers and complex Client scripts and UI policies which control the user experience on the form.</p>
<p> </p>
<p>I am a huge proponent of simple forms. There are some advantages to keeping your forms simple:</p>
<ol><li>Simple and intuitive experience for our end users or requestors.</li><li>Easy to maintain on a day-to-day basis; as well as, through upgrades.</li><li>The experience translates well on different form factors such as desktops, tablets or smartphones</li></ol>
<p> </p>
<p>Our approach with the Service Portal, and by that I mean Service Catalog on the Service Portal, is to keep the experience simple. Going back to my earlier definition of a simple form, This means that we intend to only support specific aspects.</p>
<ol><li>Two-column layouts.</li><li>Any support for Catalog Client Scripts or Catalog UI Policies would be similar to the mobile experience.</li><li>Containers and Variable sets within catalog forms will be translated back to the two-column layout.</li></ol>
<p> </p>
<p style="text-align: center;"><img class="image-16 jive-image" style="width: 620px; height: 265px;" src="2aced54adb54d7041dcaf3231f9619fc.iix" alt="Service Portal catalog layout1.png" /></p>
<p> </p>
<p><img class="image-17 jive-image" style="width: 620px; height: 348px; display: block; margin-left: auto; margin-right: auto;" src="e9ea700edb9cdfc068c1fb651f961938.iix" alt="Service Portal catalog layout2.png" /></p>
<p> </p>
<p> </p>
<p style="text-align: center;"><img class="image-18 jive-image" style="width: 620px; height: 345px;" src="b69dbf35db14db048c8ef4621f96195f.iix" alt="Service Portal catalog layout3.png" /></p>
<p> </p>
<p>The following GIFs demonstrate the different layout examples captured based on our analysis of the various layouts we have seen across our customers. We have attempted to share the most common layouts to utilize. and the GIFs show how these will be rendered within the Service Portal. First, a few of ground rules -</p>
<p> </p>
<ol><li>Only the top level container settings will be honored</li><li>If there are other containers within the top level container, these will be rendered as a single column layouts
<ul><li>If there are container splits within these additional containers, these will be rendered as single column layouts as well.</li></ul>
</li><li>Variables Sets are treated as containers and the above rules apply to Variable Sets as well as containers within them.</li><li>Variable Default Size feature coming in Jakarta is not supported on the Service Portal</li></ol>
<p> </p>
<h2>Different types of Service Catalog layouts</h2>
<p>The layouts showcased below are also available as part of the attachment to this blog. The file is named &#34;<strong>Service Catalog Layouts on Service Portal</strong>&#34;.</p>
<p> </p>
<h3>Layout example 1: Two containers with variables laid out in single column layouts</h3>
<p><img class="image-10 jive-image" style="width: 620px; height: 235px; display: block; margin-left: auto; margin-right: auto;" src="f9ff9c46dbdc9fc03eb27a9e0f9619f1.iix" alt="Layout 1.gif" /></p>
<p> </p>
<h3>Layout example 2: Two containers, first container has 2-column layout and the second will be single column container</h3>
<p><img class="image-11 jive-image" style="width: 620px; height: 286px; display: block; margin-left: auto; margin-right: auto;" src="da9d3ff1db141304b322f4621f9619a9.iix" alt="Layout 2.gif" /></p>
<p> </p>
<h3>Layout example 3: Nested containers</h3>
<p><img class="image-12 jive-image" style="width: 620px; height: 320px; display: block; margin-left: auto; margin-right: auto;" src="a964ad42db1053043eb27a9e0f961994.iix" alt="Layout 3.gif" /></p>
<p> </p>
<h3>Layout example 4: Nested containers with variable sets</h3>
<p><img class="image-13 jive-image" style="width: 620px; height: 349px; display: block; margin-left: auto; margin-right: auto;" src="b53fb846db909f048c8ef4621f96197e.iix" alt="Layout 4.gif" /></p>
<p> </p>
<h3>Layout example 5: Variable sets with nested containers</h3>
<p><img class="image-14 jive-image" style="width: 620px; height: 386px; display: block; margin-left: auto; margin-right: auto;" src="d02c584edb585304b322f4621f961991.iix" alt="Layout 5.gif" /></p>
<p> </p>
<h3>Layout example 6: Complex nested containers</h3>
<p><img class="image-15 jive-image" style="width: 620px; height: 353px; display: block; margin-left: auto; margin-right: auto;" src="6430c846db585fc068c1fb651f961949.iix" alt="Layout 6.gif" /></p>
<p> </p>
<h1>How do I adopt Service Catalog on Service Portal?</h1>
<p>The Service Portal is not a replacement for the <a title="ocs.servicenow.com/bundle/istanbul-servicenow-platform/page/build/service-portal/concept/c_CMSAndSP.html" href="https://docs.servicenow.com/bundle/istanbul-servicenow-platform/page/build/service-portal/concept/c_CMSAndSP.html" rel="nofollow">CMS</a> or the Platform UI, it is only an alternative. The intent with Service Portal is to enable our customers to provide modern, easy-to-use, device agnostic experiences for their end users or requestors. We do not intend to provide full feature parity between the Platform experience and the Service Portal experience.</p>
<p> </p>
<p>Having said that, we do understand that you may have built out catalog item forms that are fairly complex and do not render well in the Service Portal today. Hopefully, the updates provided above will help you overcome some of those challenges. If they do not, the following is an option that you might find useful.</p>
<p> </p>
<p>Before we get into the details, I&#39;d like to clarify:</p>
<ol><li>This approach is not a product offering, but only provided as an option that you can use, if you choose to do so. There will be <strong>NO SUPPORT</strong> for this.</li><li>This is intended to be a short-term option so you can continue to use the Service Catalog on the Service Portal, while you set in motion plans to transform your catalog item forms to fit the Service Portal experience.</li></ol>
<p>Lets get into the details now. What we are offering isn&#39;t new, it is the age old iFrame solution, but we have made some additional changes that are targeted at masking the <a title="ocs.servicenow.com/bundle/istanbul-servicenow-platform/page/administer/content-management/concept/c_IFrameMethods.html" href="https://docs.servicenow.com/bundle/istanbul-servicenow-platform/page/administer/content-management/concept/c_IFrameMethods.html" rel="nofollow">iFrame</a> experience, so the difference to the end users is as subtle as possible. The solution consists of the following:</p>
<ol><li>Update Set named &#34;<strong>iFramedItem.xml</strong>&#34; - As part of this update set, we are adding 2 new fields to the sc_cat_item table -
<ul><li><strong>iFrame on Portal</strong> - This is a True/False field, with the default value set to false.</li><li><strong>Support on Portal</strong> - This is a String field with max length set to 1000.</li></ul>
</li><li>Export of Script Include named &#34;<strong>Analyzer Script.xml</strong>&#34; - Importing this file will add a new Script Include named &#34;<strong>PortalCatItemAnalyzer</strong>&#34;.</li></ol>
<p> </p>
<p>Once you have applied the update set and imported the script include, you can run the following commands using Background Scripts:</p>
<p> </p>
<p style="padding-left: 30px; text-align: left;"><em>var analyzer &#61; new PortalCatItemAnalyzer();</em></p>
<p style="padding-left: 30px; text-align: left;"><em>analyzer.analyze();</em></p>
<p> </p>
<p>This will only analyze the catalog items (catalog item/record producer/order guide) in your environment and output the results without making any actual changes.</p>
<p> </p>
<p style="padding-left: 30px;"><em>var analyzer &#61; new PortalCatItemAnalyzer();</em></p>
<p style="padding-left: 30px;"><em>analyzer.analyzeAndSetCatItemFields();</em></p>
<p> </p>
<p>This will make updates to your catalog items (catalog item/record producer/order guide). The script will analyze every catalog item to see if it can be rendered on the portal as it was designed in Platform. The parameters include: Nested Containers or Variable Sets, complex scripts which may include either unsupported APIs or ajax calls. If an item is found to be meeting any of these criteria, then the script will set the <strong>iFrame on Portal</strong> flag to true and update the <strong>Support on Portal</strong> field with the details of the analysis. Once the flag has been set to true, this item will be displayed within an iFrame on the Service Portal automatically.</p>
<p> </p>
<h2>How a catalog item, a record producer and an Order Guide will be rendered within an iFrame on the Service Portal.</h2>
<p> </p>
<center>
<p><iframe id="video_tinymce_9188" style="width: 100%; height: 480px;" src="https://youtube.com/embed/fLcupN7iaBI?showinfo&#61;0"></iframe></p>
</center>
<p> </p>
<p>We have taken care to ensure that all user interactions with these items in the Service Portal continue to keep the user within the portal without exposing the Platform view to them. This includes ordering items, adding them to the cart, editing the cart or clicking on Continue Shopping. Some of the disadvantages with this approach as you might have noticed in the video above:</p>
<ol><li>On catalog items and record producers, you will lose the ability to see the attachment icon. As a result, users will not be able to attach any files during the submission. On ServiceNow Share, please review the <a title="hare.servicenow.com/app.do#/detailV2/8fcdfce08780e9008bf84b0b0e434df6/overview" href="https://share.servicenow.com/app.do#/detailV2/8fcdfce08780e9008bf84b0b0e434df6/overview" rel="nofollow">Add Attachment Button</a> share from Cloud Sherpas. This provides a way to add a &#34;Add Attachment&#34; button to your forms.</li><li>Click-through for the hover-over icon has been turned off and will not be available.</li></ol>
<p> </p>
<p>My recommendation would be to install the update set and the script include in your dev or sandbox environments first to get a better understanding of how it works. Once the script has been run, depending on how complicated your environment is, the script may take a long time to execute. If you are happy with the outcome, I would suggest installing only the update set in the Production environment and move the updates to the actual items as part of a separate update set.</p>
<p> </p>
<p>We will continue to enhance the Service Catalog experience on the Service Portal through our next few releases. This will include a combination of bringing existing features on the Platform to the portal and defining newer, more modern UI experiences for the catalog. Stay tuned!!</p>