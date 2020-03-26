---
title: "Underscorejs client side templates in CMS"
date: 2015-10-14T23:51:21.000Z
authors: ["kevinanderson"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=3c9ceae1dbd0dbc01dcaf3231f961981"
---
<p>I spent a few days working to get client side js based templates to work in our CMS.   I wanted to share with everyone how I made that work.</p><p></p><p>1. The templates will have to be embedded in the DOM under script tags.</p><p>2. The template syntax will require using the Jelly tags for special characters, and some interesting 2 stage parsing to clean up the mess jelly leaves in the templates</p><p>         this includes replacing the "&amp;", "&lt;" and "&gt;" characters with jelly equivalents: ${AMP}, ${LT}, ${GT}</p><p>3.   Jelly mangles the special characters contained in HTML attributes, which is the reason for a wierd second stage string replace in the client</p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14448485000665603" jivemacro_uid="_14448485000665603" modifiedtitle="true">
<p>// do a global replace for the html character codes jelly produces for brackets</p>
<p>// second pass required for any brackets encased in html attributes</p>
<p> templ_str = _.unescape($templ.html()).replace(/&amp;amp;lt;/g, '&lt;').replace(/&amp;amp;gt;/g, '&gt;');</p>
</pre><p>4. jQuery is used to pull the templates out of the DOM and the HTML contained in the script tag is passed to the underscore template engine</p><p></p><p>1.   two dynamic blocks are used, one acts as a container for all client side templates</p><p>wrapper</p><pre __default_attr="xml" __jive_macro_name="code" class="_jivemacro_uid_14448482457823066 jive_text_macro jive_macro_code" jivemacro_uid="_14448482457823066">
<p>&lt;?xml version="1.0" encoding="utf-8" ?&gt;</p>
<p>&lt;j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null"&gt;</p>
<p>       &lt;!-- sysid: ******************************* --&gt;</p>
<p>       &lt;div class="hidden" data-descr="template container for underscore.js client side templates"&gt;</p>
<p>               &lt;!-- large search auto-complete hints --&gt;</p>
<p>               &lt;g:content_block type="content_block_programmatic" id="128c***********************a1549"/&gt;</p>
<p>                           </p>
<p>               &lt;!-- search - catalog items --&gt;</p>
<p>               &lt;g:content_block type="content_block_programmatic" id="e1cb***********************a1528"/&gt;               </p>
<p></p>
<p></p>
<p>               &lt;!-- search - knowedge base articles --&gt;</p>
<p>               &lt;g:content_block type="content_block_programmatic" id="e79e***********************a150d"/&gt;</p>
<p>                                               </p>
<p>       &lt;/div&gt;</p>
<p>&lt;/j:jelly&gt;</p>
</pre><p></p><p>client side template - search</p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro _jivemacro_uid_14448483803574189 jive_macro_code" jivemacro_uid="_14448483803574189" modifiedtitle="true">
<p>&lt;?xml version="1.0" encoding="utf-8" ?&gt;</p>
<p>&lt;j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null"&gt;</p>
<p>       &lt;!-- sys_id: *************************** --&gt;</p>
<p>       </p>
<p>       &lt;script&gt;</p>
<p>               </p>
<p>               ${LT}% if(data.length){   %${GT}</p>
<p>               </p>
<p>                       &lt;div class="col-sm-12 padding-left-0 padding-right-0" data-category="${LT}%= category_name %${GT}"&gt;</p>
<p></p>
<p></p>
<p>                               &lt;div class="row"&gt;</p>
<p>                                       &lt;div class="col-sm-12 header padding-top-2pct padding-bottom-1pct"&gt;</p>
<p>                                               &lt;h3 class="h3"&gt;Knowledge Base&lt;/h3&gt;</p>
<p>                                       &lt;/div&gt;</p>
<p>                               &lt;/div&gt;                       </p>
<p>                               &lt;div class="row"&gt;</p>
<p>                                       &lt;div class="col-sm-12 request_list" data-delegate-bound="true"&gt;                               </p>
<p>                                               &lt;ul class="styled_link"&gt;</p>
<p>                                                       ${LT}% _.each(data, function(obj, key){   %${GT}</p>
<p>                                                               &lt;li data-sys-id="${LT}%= obj.sys_id %${GT}"&gt;</p>
<p>                                                                       &lt;div class="title"&gt;</p>
<p>                                                                               &lt;a target="_new" href="#"&gt;</p>
<p>                                                                                       &lt;span&gt;${LT}%= obj.descr %${GT}&lt;/span&gt;</p>
<p>                                                                               &lt;/a&gt;</p>
<p>                                                                       &lt;/div&gt;</p>
<p>                                                                       &lt;div class="short-description"&gt;</p>
<p>                                                                               &lt;span&gt;${LT}%= obj.intro %${GT}&lt;/span&gt;</p>
<p>                                                                       &lt;/div&gt;</p>
<p>                                                               &lt;/li&gt;</p>
<p>                                                       ${LT}% });   %${GT}</p>
<p>                                               &lt;/ul&gt; </p>
<p>                                       &lt;/div&gt;</p>
<p>                               &lt;/div&gt;     </p>
<p></p>
<p></p>
<p>                       &lt;/div&gt;     </p>
<p>               ${LT}% } %${GT}           </p>
<p>       &lt;/script&gt;</p>
<p>&lt;/j:jelly&gt;</p>
</pre><p></p><p>Client script function to parse template from DOM</p><pre __default_attr="javascript" __jive_macro_name="code" class="jive_text_macro jive_macro_code _jivemacro_uid_14448485817634127" jivemacro_uid="_14448485817634127">
<p>/**</p>
<p>           read underscore.js formatted js template from DOM, and convert to a template function</p>
<p>           @method _getTemplate</p>
<p>           @param {str} tmpl_id DOM id of the template</p>
<p>           @returns {function} underscore template fx</p>
<p><span>           @link </span><a title="k-external-small" class="jive-link-external-small" href="http://stackoverflow.com/questions/4778881/how-to-use-underscore-js-as-a-template-engine" rel="nofollow" target="_blank">http://stackoverflow.com/questions/4778881/how-to-use-underscore-js-as-a-template-engine</a></p>
<p>           </p>
<p>       */</p>
<p>       _getTemplate : function(tmpl_id){</p>
<p>               var result;</p>
<p>               var context = this;</p>
<p>               // prevent jQuery and prototype collision with an IIFE</p>
<p>               (function($){</p>
<p>                       try{</p>
<p>                               if (!(_.isString(tmpl_id) &amp;&amp; tmpl_id.length)){</p>
<p>                                       throw new Error('Invalid parameter "template id"');</p>
<p>                               }</p>
<p>                                       </p>
<p>                               // pull up the template and correct for the html encoded brackets</p>
<p>                               var $templ = $('#'+tmpl_id);</p>
<p>                               var templ_str = '';</p>
<p>                               if ($templ &amp;&amp; $templ.length){</p>
<p>                                       if ($templ.html().length){</p>
<p>                                               // do a global replace for the html character codes jelly produces for brackets</p>
<p>                                               // second pass required for any brackets encased in html attributes</p>
<p>                                               templ_str = _.unescape($templ.html()).replace(/&amp;amp;lt;/g, '&lt;').replace(/&amp;amp;gt;/g, '&gt;');</p>
<p>                                               //log.info(templ_str);</p>
<p>                                               result = _.template(templ_str);</p>
<p>                                       }</p>
<p>                                       else{</p>
<p>                                               throw new Error('Template "'+tmpl_id+'" is empty. No HTML found to render');</p>
<p>                                       }</p>
<p>                               }</p>
<p>                               else{</p>
<p>                                       throw new Error('Template "'+tmpl_id+'" not found in the DOM');</p>
<p>                               }</p>
<p>                               </p>
<p>                       }</p>
<p>                       catch(e){</p>
<p>                             log.error('Error: '+e.message+' - _getTemplate::'+context.type); </p>
<p>                       }</p>
<p>               })(jQuery);</p>
<p>               </p>
<p>               return result;</p>
<p>               </p>
<p>       },</p>
</pre>