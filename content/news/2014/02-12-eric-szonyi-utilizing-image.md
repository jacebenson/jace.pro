---
title: "Utilizing Image Fields in UI Pages"
date: 2014-02-12T04:14:28.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=e0edeae9dbd0dbc01dcaf3231f961965"
---
<p>I'm not sure how often you come across this or utilize <a title="k-external-small" class="jive-link-external-small" href="http://wiki.servicenow.com/index.php?title=Using_Image_Fields" rel="nofollow" target="_blank">Image Fields</a> outside of a form but I needed to recently.</p><p style="min-height: 8pt; height: 8pt; padding: 0px;">  </p><p>When you add an <a title="k-external-small" class="jive-link-external-small" href="http://wiki.servicenow.com/index.php?title=Using_Image_Fields" rel="nofollow" target="_blank">Image Field</a> to a form you are provided with an Add dialog first time and later you can Update or Delete the image. When you display the form, the image will display next to the field label.</p><p style="min-height: 8pt; height: 8pt; padding: 0px;">  </p><p>But, what if you need to display the image in a UI page or somewhere else ?</p><p style="min-height: 8pt; height: 8pt; padding: 0px;">  </p><p>Unlike the Images module, Image Fields do not store the images in the <strong>db_image</strong> table. These images are stored in the <strong>sys_attachment</strong> table. The sample code below can be utilized to grab the image name for the correct record. We will use the <strong>photo</strong> field from the user record as an example:</p><p style="min-height: 8pt; height: 8pt; padding: 0px;">  </p><pre class="javascript" name="code">
//declare a variable to hold the image name
var imageName = '';
//get the record for the attachment table
var a = new GlideRecord('sys_attachment');
a.addQuery('table_name','ZZ_YYsys_user'); //the ZZ_YY is the prefix we use
a.addQuery('file_name','photo'); //this is really the name of the image field
if (a.get('table_sys_id',gs.getUserID())) { //this is the sys_id of the actual record in our table which has the Image Field
       imageName = a.sys_id + '.iix'; //this is the extension we append for the image itself
}
imageName;
</pre><div style="display:none;"> </div><p style="min-height: 8pt; height: 8pt; padding: 0px;">  </p><p>The full sample UI page would look as follows:</p><p style="min-height: 8pt; height: 8pt; padding: 0px;">  </p><pre class="xml" name="code">
&lt;?xml version="1.0" encoding="utf-8" ?&gt;
&lt;j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null"&gt;


&lt;g:evaluate var="jvar_user_photo_path" jelly="true"&gt;
//declare a variable to hold the image name
var imageName = '';
//get the record for the attachment table
var a = new GlideRecord('sys_attachment');
a.addQuery('table_name','ZZ_YYsys_user'); //the ZZ_YY is the prefix we use
a.addQuery('file_name','photo'); //this is really the name of the image field
if (a.get('table_sys_id',gs.getUserID())) { //this is the sys_id of the actual record in our table which has the Image Field
       imageName = a.sys_id + '.iix'; //this is the extension we append for the image itself
}
imageName;
&lt;/g:evaluate&gt;


&lt;div&gt;
&lt;img src="${jvar_user_photo_path}"&gt;&lt;/img&gt;
&lt;/div&gt;


&lt;/j:jelly&gt;
</pre><div style="display:none;"> </div><p style="min-height: 8pt; height: 8pt; padding: 0px;">  </p><p>Hope this helps !</p>