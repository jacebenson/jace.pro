---
title: "Multiline text fields exceeding character limit"
date: 2018-11-13T00:59:31.000Z
authors: ["Jisamma K"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=4eda1ee4db7d6f001089e15b8a9619c8"
---
<p>As per documentation, for 254 characters or less, the string field is a single-line text field. Anything 255 characters or above appears as a multi-line text box.</p>
<p style="text-align: center;">Please note that this is expected behavior.</p>
<p>By default, multi-line text fields have a 4,000-character limit. To help users see how many characters remain before they reach the limit, you can enable the <strong>glide.ui.textarea.character_counter</strong> property.</p>
<p>Please refer to documentation for more details <a title="" href="https://docs.servicenow.com/bundle/london-platform-administration/page/administer/reference-pages/task/t_TextFieldCharacterCounter.html" target="_blank" rel="nofollow">here</a> and knowledge article <a href="https://hi.service-now.com/kb_view.do?sys_kb_id&#61;3f35c72adbfd13002b6dfb651f961959" rel="nofollow">KB0685779</a></p>