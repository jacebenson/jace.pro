---
title: "What to do when Text after Emojis is Being Truncated"
date: 2019-02-13T03:28:35.000Z
authors: ["Jisamma K"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=ae3fa49edbaf63c0f0612183ca9619b9"
---
<div>On instances before Kingston, if an email contains special characters, like for example a smiley icon, all content after that character will be missing when stored in the system. This doesn&#39;t happen all of the time so it can catch someone off guard if mid sentence, your text gets truncated at the Emoji (&#x1f600;&#x1f92b;&#x1f92e;).<br /><br /></div>
<h1>Truncated emojis mid sentence</h1>
<p>So why is your text being truncated after using an emoji? Well,  the reason for it is because the “String” <a href="https://docs.servicenow.com/bundle/istanbul-servicenow-platform/page/administer/reference-pages/reference/r_FieldTypes.html" target="_blank" rel="noopener noreferrer nofollow">field type</a> in the platform does not officially support emojis. How to identify your text is being cut off after Emoji usage</p>
<div style="text-align: center;"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/1cb8b5b8dbff2380fece0b55ca9619a0.iix" /></div>
<p>If you or your customer tries to edit an email field or journal field and includes a sassy emoji (sometimes known as emoticon) they may find that the text following is cut off or truncated. </p>
<p><strong>How to determine this effects you:</strong></p>
<ul><li>User types a sentence in email field.</li><li>User inserts Emoji mid sentence.</li><li>All text following emoji does not appear. </li></ul>
<h2>What to do when your text after Emojis is being truncated</h2>
<div>The “String (Full UTF-8)” field type does, and should be used if we expect to use emojis in that field. There is a slightly more overhead when using the String (Full UTF-8) type.</div>
<div> </div>
<div>Our email form (sys_email) has support for Four-byte UTF8 Unicode characters on the <em>subject</em>, <em>body</em>, and <em>body_text</em> fields on Kingston releases and newer.</div>
<div style="text-align: center;"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/14c8b9b8dbff2380fece0b55ca961939.iix" /></div>
<div style="text-align: center;"> </div>
<div style="text-align: left;">However, if an inbound action or processing is triggered, and the string contains Four-byte UTF8 Unicode characters, you need to ensure your target record fields support Four-byte UTF8 Unicode characters to avoid truncating data on those fields. The field type &#39;String (Full-UTF8)&#39; is capable of handling the 4-byte emoji&#39;s character in all current releases. </div>
<div> </div>
<p> </p>
<div style="text-align: center;"><em>Note: Please make sure to change downstream field types everywhere a special characters is expected or need to be retained.</em></div>
<div> </div>
<div>For more information on using Emojis in ServiceNow see:</div>
<div class="snc-article-header-title-readonly snc-article-header-toolbar-title-no-image">
<ul><li><a href="http://bit.ly/KB0621602" target="_blank" rel="noopener noreferrer nofollow">Four-byte UTF8 emoji characters cause emails text to be truncated when stored in the database</a></li><li>
<ul><li>Unable to support emojis in Journal entries – Workaround is available in Kingston. Pre-K, Journal entries (aka comments/work notes) could not use emojis even with the String (Full UTF-8) field.</li><li>After Kingston, this works by changing specific fields to the String (Full UTF-8) type</li></ul>
</li><li><a href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0696765" target="_blank" rel="noopener noreferrer nofollow">String fields are truncated when an emoji is inserted – work in progress. </a></li></ul>
</div>