---
title: "New Search Results Page for Portal  London"
date: 2018-09-22T04:41:58.000Z
authors: ["Sush"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=9cd8677bdbaca348200f0b55ca96190d"
---
<p>London is here! I thought I will share with about updates coming for Service Portal Search results page. </p>
<p><strong>Search results page is Improved/optimized for mobile and results can be paginated in London release.</strong></p>
<p>Yes, there is a new page added to display your portal search results called <em><strong>sp_search</strong></em>, which is mobile optimized. There is page route added to redirect users to the new search page, please make sure its active like below.</p>
<p><img style="max-width: 100%; max-height: 480px;" src="faee4b77dbe4a348200f0b55ca9619f8.iix" /></p>
<p>Now all your users are redirected to this new search results page.</p>
<p>Here is the comparison of the <strong>old</strong> search page and the <strong>new</strong> side by side on mobile.</p>
<p> </p>
<p><img src="d7c093bfdbe4a348200f0b55ca96196a.iix" />         <img src="087153f3db28a348200f0b55ca961961.iix" /></p>
<p><strong>Now you can Limit the number of results a search source displays to improve performance. </strong></p>
<p>If it is a simple Search Source you can simply set <strong>Paginate Results</strong> fields to <strong>true. </strong>This will trigger <strong>Load more</strong> <strong>results</strong> link to appear below the results.</p>
<p><img src="6eb8a73bdbaca348200f0b55ca96190f.iix" /></p>
<p> </p>
<p>If you want to add Pagination to advanced Search Source you must modify data fetch script to handle multiple pages of results. I will go over this in another Blog Post.</p>