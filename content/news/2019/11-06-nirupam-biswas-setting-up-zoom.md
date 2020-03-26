---
title: "Setting up Zoom with Notify"
date: 2019-11-05T13:00:51.000Z
authors: ["Nirupam Biswas"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=dd8f9fa71bb84810a59033f2cd4bcb82"
---
<p>First ensure that you are at least on <strong>New York</strong> release <strong>Patch 1</strong> and <strong>Notify</strong> is installed there (<a href="https://docs.servicenow.com/bundle/newyork-servicenow-platform/page/product/notify2/task/t_ActivateNotify.html" rel="nofollow">ref</a>).</p>
<p>Next you need to install two ServiceNow provided Store apps :-</p>
<ol><li><strong>Zoom Spokes</strong> – <a href="https://store.servicenow.com/sn_appstore_store.do#!/store/application/5192d6d90b4233006237818393673aea/1.0.2" target="_blank" rel="noopener noreferrer nofollow">https://store.servicenow.com/sn_appstore_store.do#!/store/application/5192d6d90b4233006237818393673aea/1.0.2</a></li><li><strong>Notify Zoom Connector</strong> – <a href="https://store.servicenow.com/sn_appstore_store.do#!/store/application/613f88810b0233008e64aabcb4673a50/1.0.3" target="_blank" rel="noopener noreferrer nofollow">https://store.servicenow.com/sn_appstore_store.do#!/store/application/613f88810b0233008e64aabcb4673a50/1.0.3</a></li></ol>
<p>Now follow the steps in the video below.</p>
<p><iframe id="video_tinymce" style="width: 100%; height: 480px;" src="https://www.youtube.com/embed/48tt1soGAis"></iframe></p>
<p>The video should be comprehensive enough to get you started.</p>
<p><strong>Known issues:</strong></p>
<ul><li><strong>The Zoom integration does not work when run as non-admin user </strong>(<strong>PRB1360915 / PRB1359345</strong>) – The workaround is to make use of the Zoom integration as admin user at least once. Make sure to Create/End Conferences, Add participants to it, etc. The issue is in platform where the Spoke Actions need to be run as admin at least once. When done then you can use it normally without admin privileges. This issue has been addressed in Orlando and will probably be back-ported to some New York later patches.</li><li><strong>Misleading error message when OAuth expires (PRB1360395)</strong> – If the OAuth has expired or has not even been fetched, then trying to use the integration will show an error like – ‘Meeting host must have a valid Zoom account’. The issue will be fixed in next version on “Notify Zoom Connector”. Current version is 1.0.3.</li></ul>