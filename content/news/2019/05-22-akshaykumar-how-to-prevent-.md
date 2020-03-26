---
title: "How to Prevent Values of Variables not Displaying on List and Reports on Madrid"
date: 2019-05-21T10:04:40.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=e9d9b1e1dbadff80f7fca851ca9619e1"
---
<p>After an upgrade to Madrid, if you have an issue with values of variables are not displayed on list or reports. A few variables are not shown in report results though there is valid data for these variables. Read On.</p>
<h1>Why Variables are not displayed on list reports</h1>
<p>This issue happens because of the presence of one or more variables that have been added to the report but contain no value. Setting an item variable to null causes a [java.lang.NullPointerException] on Madrid. The issue has been introduced due to the addition of a new feature in Madrid.</p>
<p><br /> The variable value, if empty, is considered to be null during the generation of reports on the Requested Item Table (sc_req_item). Due to the addition of the new feature <a href="https://docs.servicenow.com/bundle/madrid-it-service-management/page/product/service-catalog-management/task/define-regex-vrble.html" target="_blank" rel="noopener noreferrer nofollow">Regex Validation</a>, we validate the variable based on a regular expression. For this purpose, the value must be converted to a string and hence when null is attempted to be converted to a string, a NULL Pointer Exception is thrown as a result of which the remaining variables, although containing a valid value, are not generated on the reports or lists.</p>
<h2>Symptoms of missing Variables on list reports:</h2>
<ol><li>Issue when setting an item variable to null causes a [java.lang.NullPointerException]</li><li>Variables are not displayed on reports although there is valid data for these variables.</li></ol>
<h3>How to fix the issue:</h3>
<p>There is no concrete workaround available for this issue. However, there is a way of preventing this missing variables on list reports in Madrid. You can  is by not including the variables which do not have any value on the reports.</p>
<p> </p>
<p><strong>Builds Affected</strong>:</p>
<ul><li>Madrid patch 0</li><li>Madrid patch 1</li><li>Madrid patch 2</li><li>Madrid patch 3 </li></ul>
<p><strong>Fixed Versions</strong>: This issue has been fixed on Madrid Patch4 and later branches. Also a hotfix has been provided on Madrid patch3 hotfix 1.</p>
<p> </p>
<p style="text-align: center;">See <a href="https://hi.service-now.com/kb_view.do?sysparm_article&#61;KB0748703" target="_blank" rel="noopener noreferrer nofollow">Madrid: Assigning variable to null causes [java.lang.NullPointerException] and can result in variables not displayed on list/reports</a> for more information.</p>
<div id="articleStarRatingGroup" class="accessibility-disabled" title="This article has not been rated yet. Use up and down arrow keys to select and submit the rating."> </div>
<div class="accessibility-disabled" title="This article has not been rated yet. Use up and down arrow keys to select and submit the rating."> </div>
<div class="accessibility-disabled" title="This article has not been rated yet. Use up and down arrow keys to select and submit the rating.">More information on Regex Validation:</div>
<div class="accessibility-disabled" title="This article has not been rated yet. Use up and down arrow keys to select and submit the rating.">
<ul><li><a href="https://community.servicenow.com/community?id&#61;community_article&amp;sys_id&#61;f5b8a988db057300d82ffb24399619b8" target="_blank" rel="noopener noreferrer nofollow">Service Portal Catalog Items: Regex Field Validation [Madrid]</a></li><li><a href="https://community.servicenow.com/community?id&#61;community_article&amp;sys_id&#61;e334bc4cdbe0bf48fff8a345ca9619c5" target="_blank" rel="noopener noreferrer nofollow">Variable Validation Regex on Madrid - Usage</a></li></ul>
</div>
<div class="accessibility-disabled" title="This article has not been rated yet. Use up and down arrow keys to select and submit the rating.">
<div class="cm-author-details">
<div class="cm-author-details">
<div class="cm-author-image"> </div>
</div>
</div>
</div>