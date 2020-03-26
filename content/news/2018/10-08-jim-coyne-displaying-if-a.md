---
title: "Displaying if a Record has an Attachment in UI"
date: 2018-10-07T09:40:54.000Z
authors: ["Jim Coyne"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=e51dbd74db4523409d612926ca96193a"
---
<p>Note: I&#39;ve written about this a few years ago (<a href="community?id&#61;community_blog&amp;sys_id&#61;a26c6ea1dbd0dbc01dcaf3231f96197c" rel="nofollow">Displaying if a Record has an Attachment</a>), but UI15 changed the way Field Styles in list views are shown.  This was carried over into UI16 as well.  I just thought it was time to add an updated article.</p>
<p>If you want to simply display in a list view when a record has an attachment, you can easily do it with a <a href="https://docs.servicenow.com/bundle/kingston-platform-administration/page/administer/navigation-and-ui/task/t_DefineFieldStyles.html" rel="nofollow">Field Style</a> record:</p>
<p><img src="041df5f4db4523409d612926ca961915.iix" /></p>
<p>The following Field Style will add a paperclip image to the Number field for all Task tables, as shown above for the Incident table:</p>
<pre class="language-javascript"><code>Table: Task
Field name: Number
Value: javascript:current.hasAttachments()
Style:
background-image: url(&#34;u_attachment16x16.pngx&#34;);
background-repeat: no-repeat;
background-position: 98% 5px;
padding-right: 30px;</code></pre>
<p>You can set the Table to whatever you need, but setting it on Task will then display the image for any sub-class table as well, but you can certainly target individual tables instead.  You would just need to add a Field Style for each of those tables.</p>
<p>Next thing you need to do is add the image you want to use by clicking on the &#34;System UI \ Images&#34; Module and creating a new record (<a href="https://docs.servicenow.com/bundle/kingston-platform-user-interface/page/administer/navigation-and-ui/task/t_UploadingMultipleImages.html" rel="nofollow">Upload one or more images</a>).  I&#39;ve attached the paperclip image used in the screenshot above to this post, if you don&#39;t already have an image you want to use.  I grabbed it from the button shown on form views to attach a file to the record, derived from the Retina icons used in the platform.</p>
<p><img src="b07dbdf4db4523409d612926ca961943.iix" /></p>
<p>The issue with UI15/16 is any Field Style is now shown to the left of the data in the column.  This causes a staggered look to the Number column as shown in the screenshot above.  We can fix that by adding another Field Style record with the following details:</p>
<pre class="language-javascript"><code>Table: Task
Field name: Number
Value: javascript:!current.hasAttachments()
Style:
background-image: url(&#34;u_blank16x16.pngx&#34;);
background-repeat: no-repeat;
background-position: 98% 5px;
padding-right: 30px;</code></pre>
<p>Notice the &#34;!&#34; in front of the word &#34;current&#34; in the Value field.  This will return true for all records that do NOT have an attachment.  Using an image that is blank (transparent background without anything else) and the same size as the attachment image, will then push the number over the same amount as the paperclip image.  You&#39;ll need to add another image for the style:</p>
<p><img src="ad44ca3cdbc1ebc4feb1a851ca961908.iix" /></p>
<p>Now you&#39;ll end up with a better looking list view:</p>
<p><img src="a39c79b4db4523409d612926ca96193e.iix" /></p>
<p>So basically, you need 2 Field Style records - one for records with an attachment and another for those without an attachment.</p>
<p>Attached below are the 2 images and 2 Field Style records needed to get the above look.  Try it out in your personal dev instance.</p>