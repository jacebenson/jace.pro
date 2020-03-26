---
title: "How to get variable values for RITM"
date: 2016-08-09T13:01:02.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=aa2da6e5dbd0dbc01dcaf3231f961911"
---
<p>In Request Item(RITM) we show all variables from the Item. If a variable is not available in RITM, it could very well be because of Catalog Item Scripts or Catalog UI Policy.</p><p>The following will help to figure out all the variables in the RITM that should be present.</p><ul><li>Open sc_item_option_mtom List</li><li>Configure the list layout to add the following columns. Sort based on Order<br/><img  __jive_id="154938" class="image-1 jive-image" src="b31c3779db945fc068c1fb651f961961.iix" style="max-width: 1200px; max-height: 900px;"/></li><li>Search for the RITM, the list shows the variables for the RITM and the corresponding values<br/><img  __jive_id="154939" class="image-2 jive-image" src="16ded186db10df048c8ef4621f9619ce.iix" style="max-width: 1200px; max-height: 900px;"/></li></ul>