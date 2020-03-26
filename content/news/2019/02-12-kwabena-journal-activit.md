---
title: "Journal Activity Formatter  With A Bit More Style"
date: 2019-02-12T03:47:36.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=e3f967b1db6f27001089e15b8a96194f"
---
<p> </p>
<p>Many of you, who are familiar with Service Now have come across a journal type field. For those of you whom a less intimate with the platform, a field with the type &#34;journal&#34; allows end users to store inputs on the task extended tables, such as incident, they also display the combined history of user inputs in an activity formatter (or the activity stream in UI16), which is typically displayed below the input text field. The journal field is limited in that it can only display plain text, this limitation can be overcome however by embedding text between a [code] tag. In fields of type journal, the [code] tag grants the ability to render HTML. When utilised correctly, an end user can create richly formatted text inputs. For a detailed examination of the markup available for [code] tag please see the community article linked to below:</p>
<p> </p>
<p><strong><a href="community?id&#61;community_blog&amp;sys_id&#61;4d9ceae1dbd0dbc01dcaf3231f9619e1#comment-27461" rel="nofollow">Formatting within Journal fields using HTML &amp; [code]</a></strong></p>
<p> </p>
<p>About a year and a half ago, I created a blog post on the Service Now Community site that presented a short-cut on how to format journal fields, rather than utilising markup language featured in the link above, I advised users to employ an independent HTML editor to format their text and then copy the HTML source from the editor and paste this in the journal field. To my disappointment, the post was not widely well received. Some customers who happened to comment on my article were critical of the necessity for the journal field to require the [code] tags to render rich text formatting at all.</p>
<p> </p>
<p><iframe id="video_tinymce" style="width: 100%; height: 480px;" src="https://www.youtube.com/embed/TF9DLYZAGpQ"></iframe></p>
<p> </p>
<p>For those of you familiar with Service Now, I no doubt do not need to tell you of the versatility of the platform. So I took the criticism of journal field as an opportunity to showcase how easy Service Now it is to develop custom utilities within the platform. I created a custom application named the HTML Post. This UI Action button enables a field of type HTML to behave like a Journal type field in Service Now. That is, once the end user has completed their update and clicks on the button to post or submit their text, the activity stream be updated to display their entry and the HTML field will clear ready for the next input. The following video presentation displays how it works:</p>
<p> </p>
<p><iframe id="video_tinymce" style="width: 100%; height: 480px;" src="https://www.youtube.com/embed/4SJNrp8M6qU"></iframe></p>
<p> </p>
<p>The HTML Post is available for free on the ServiceNow Development site:</p>
<p><a href="https://developer.servicenow.com/app.do#!/share/contents/8247777_html_post?v&#61;1.0&amp;t&#61;PRODUCT_DETAILS" rel="nofollow">Update Set for the HTML Post</a></p>
<p>Enjoy &#x1f642;</p>
<p> </p>
<p> </p>