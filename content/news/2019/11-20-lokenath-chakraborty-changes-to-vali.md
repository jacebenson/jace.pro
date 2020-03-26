---
title: "Changes to validto date functionality in Knowledge Management"
date: 2019-11-19T18:13:50.000Z
authors: ["Lokenath Chakraborty"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=6a6d6858dbd54cd0d58ea345ca961939"
---
<p><strong>What is Valid_To date?</strong></p>
<p>The valid_to date on a knowledge article indicates the date up to which that article is visible to users. Articles are not searchable once the valid_to date is passed.</p>
<p>Valid_to date used to be defaulted to 01/01/2020 until New York, and then could be changed by the knowledge author. So to handle article expiration scenarios in 2020, the following changes are introduced in London Patch 10 (LP10), Madrid Patch 7 (MP7), New York Patch 1 Hot Fix 1,  New York Patch 2 (NP2) onwards.</p>
<p><u>For Existing Articles:</u></p>
<ul><li>A fix script to change valid_to of existing articles from 01/01/2020 to 01/01/2100.</li><li>This fix script will update only those articles which have valid_to&#61;&#34;01/01/2020&#34;.</li><li>This fix script will run only the first time customer upgrades to any of the above mentioned or later patches.</li></ul>
<p><u>For New Articles:</u></p>
<ul><li>The default value of the knowledge article valid_to field is changed to 01/01/2100 if and only if the default value has not been customized to a date other than what is shipped by ServiceNow in the base product.</li><li>Any new article created after upgrading to the above-mentioned patches or later will default valid_to to 01/01/2100.</li></ul>
<p>Please read this <a href="https://hi.service-now.com/kb?id&#61;kb_article_view&amp;sysparm_article&#61;KB0781937" rel="nofollow">KB article</a> for further information (you will need to login).</p>