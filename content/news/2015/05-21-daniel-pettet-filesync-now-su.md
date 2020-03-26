---
title: "FileSync Now Supports Sass CSS precompilation for theme development"
date: 2015-05-20T12:23:18.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=04fc22a5dbd0dbc01dcaf3231f9619cf"
---
<p><span style="font-size: 16px; line-height: 1.5em;"><a href="https://github.com/dynamicdan/filesync"><span style="font-size: 12pt;">FileSync</span></a><span style="font-size: 12pt;"> is growing in features. Now theme development is even easier with Sass integration. Read on to find out why all CMS developers should use Sass based development where possible.</span></span><span style="font-size: 12pt; font-weight: bold; line-height: 1.5em;"><br/></span></p><p><span style="font-size: 16px; font-weight: bold; line-height: 1.5em;"><br/></span></p><p><span style="font-size: 16px; font-weight: bold; line-height: 1.5em;">The CMS Theme Challenge</span></p><p></p><p>A big challenge with implementing CMS themes in ServiceNow is managing the layers of CSS. In a standard setup we have the following approach:</p><ul><li><span style="font-size: 10pt; line-height: 1.5em;">platform CSS (for lists and inputs, <strong>not changeable</strong>)</span></li><li>platform theme CSS (<strong>not changeable</strong>)</li><li><span style="font-size: 10pt; line-height: 1.5em;">standard service now CSS files (service catalog and menu CSS etc.)</span></li><li><span style="font-size: 10pt; line-height: 1.5em;">custom fixes and style override de-activation from out of the box CSS</span></li><li><span style="font-size: 10pt; line-height: 1.5em;">customer corporate identity CSS (usually provided via a template set)</span></li><li><span style="font-size: 10pt; line-height: 1.5em;">customer <span style="font-size: 13.3333330154419px;">corporate identity enhancements and overrides to fit with the platform</span></span></li><li><span style="font-size: 10pt; line-height: 1.5em;"><span style="font-size: 13.3333330154419px;">custom CSS modules for knowledge base or service catalog that work with and extend the existing CSS</span><br/></span></li></ul><p></p><p>The above list is ordered in terms of general include order. A typical theme would have anywhere between 4 and 10 stylesheets depending on the complexity and CMS integration. It's important to keep standard theme CSS (copied from the default ESS theme) as it is to make use of navigation blocks and menus as well as making the upgrade process easier for future versions of ServiceNow. For maintenance reasons, every standard theme CSS file needs an extra CSS file to act as an override.</p><p>Eg,</p><p></p><p>The "service catalog" CSS record might have:</p><pre __default_attr="css" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14321065915165831" jivemacro_uid="_14321065915165831">
<p><span style="font-size: 10pt; line-height: 1.5em;">.sc_cat_item {</span></p>
<p><span style="font-size: 10pt; line-height: 1.5em;">       border: 1px solid black;</span></p>
<p><span style="font-size: 10pt; line-height: 1.5em;">}</span></p>







</pre><p></p><p>Our "service catalog overrides" CSS record would then have:</p><pre __default_attr="css" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14321065915008819" jivemacro_uid="_14321065915008819">
<p>.sc_cat_item {</p>
<p>       border: none; /* no border needed here */</p>
<p>}</p>







</pre><p></p><p>With this approach we know what the specific customisations have been more easily than relying on comparing versions of the stylesheet record.</p><p>Using this approach is maintainable but can be complicated. If we can make things a bit easier then we should!</p><p></p><h3>What is a CSS Pre-compiler?</h3><p></p><p>CSS pre-compilers have 5 key benefits:</p><ul><li>Validate that the CSS has been written correctly and is valid (syntax checker)</li><li>Re-use common CSS via <a title="ss-lang.com/guide" href="http://sass-lang.com/guide">"mix-ins", "partials" and variable definitions</a> (Eg, define the corporate blue colour in one place and re-use it)</li><li>Better modularisation (create multiple "SCSS" files that are merged into a single CSS file)</li><li>Minimise the output footprint (smaller requests and less requests mean faster client side load and rendering times)</li><li>Provide easy debugging where required (can output comments in CSS to easily reference back to the originating file and line)</li></ul><p></p><p>Check out <a title="mpass-style.org/" href="http://compass-style.org/">Compass</a> which is a framework that wraps the <a title="ss-lang.com/" href="http://sass-lang.com/">SASS</a> tool for more info.</p><p>When using Compass and SASS there are also <a title="ss-tricks.com/css-sprites/" href="https://css-tricks.com/css-sprites/">icon sprite generation</a> advantages. One can dynamically generate icon sprites without needing to perfectly position them in image editing apps like Adobe Photoshop.</p><p></p><p>Using a CSS pre-compiler then allows us to modularise the out of the box CSS and output overrides in the same CSS file. <span style="font-size: 10pt; line-height: 1.5em;">Below is an example of a potential file setup. Experienced CSS developers will see the benefit of using modules to separate CSS.</span></p><p><span style="font-size: 10pt; line-height: 1.5em;"><br/></span></p><pre __default_attr="python" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14321065914819297" jivemacro_uid="_14321065914819297">
<p>compass/sass/service_catalog.scss</p>
<p>compass/sass/_service_catalog_ootb.scss</p>
<p>compass/sass/_service_catalog_mod_product_listing.scss</p>
<p>css_output/service_catalog.css</p>







</pre><p></p><h3></h3><h3>Upgrade Safety and Handover</h3><p></p><p>Upgrading a CMS theme has been traditionally quite hard and complex. Using a clean and structured approach to managing CSS makes a big difference when aligning the theme to a new instance version. FileSync can also upload both the .css and .scss files. The SCSS files can be uploaded to a separate CMS theme to be used as a reference. The resulting output CSS is placed in a theme that your site uses. If the ServiceNow customer does not want to use Saas in the future then simply use Compass or Saas to compile a non-debug version of the CSS for the hand over.</p><p></p><p>I encourage you to give it a try. Like most new things there is a slight learning curve but once you're past that you'll never look back! <span style="font-size: 10pt; line-height: 1.5em;">Full details on how to get started are available on the </span><a title="ithub.com/dynamicdan/filesync" href="https://github.com/dynamicdan/filesync" style="font-size: 10pt; line-height: 1.5em;">FileSync GitHub page</a><span style="font-size: 10pt; line-height: 1.5em;">.</span></p><p></p><p><a href="https://github.com/dynamicdan/filesync#sass-css-pre-compiler-support"><img   alt="Screen Shot 2015-05-20 at 9.09.59.png" class="image-0 jive-image" height="425" src="17c537f1dbd05704ed6af3231f9619ac.iix" style="height: 425px; width: 306.796875px;" width="307"/></a></p>