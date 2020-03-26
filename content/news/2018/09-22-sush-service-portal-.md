---
title: "Service Portal Search Facets   London"
date: 2018-09-22T02:49:59.000Z
authors: ["Sush"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=483fcf73dbe4a348200f0b55ca9619b9"
---
<p>Today I will go over the new <strong>Search Facets </strong>feature added in London for Service Portal.</p>
<p>Now SP admin can create facets to filter their search results.</p>
<p>Let&#39;s create a simple Search Source and add facets. </p>
<p>Create a new Search Source with below information.</p>
<p><strong>Name: Incidents</strong></p>
<p><strong>ID: incidents</strong></p>
<p>Don&#39;t change the <strong>Search page template</strong></p>
<p><strong>Fill out the Data source portion like below and save the record.</strong></p>
<p> </p>
<p><img src="62c7dbf3dba8a348200f0b55ca961909.iix" /></p>
<p> After you save the search source you must see Portals and Facets tab.</p>
<p><img src="2d28df37dba8a348200f0b55ca9619e5.iix" /></p>
<p>We will create a new <strong>Facet</strong> to filter incidents based on <strong>Priority. </strong>Go ahead create the facet record with below information and save it. </p>
<p>As you can see below the <strong>Selection type </strong>determines whether you can pick Single or Multiple filter choices.</p>
<p>We will talk about <strong>Mapped Filters</strong> later  </p>
<p> </p>
<p><img src="f9ff1f77db2ca348200f0b55ca9619c0.iix" /></p>
<p> </p>
<p>Once you are done creating the Facet, make sure to add this new <strong>Search Source to your Portal</strong>. In the below screenshot, I have added this to OOTB SP portal. </p>
<p><img src="205a937fdba8a348200f0b55ca961982.iix" /></p>
<p> </p>
<p><strong>Now if you search for something on the homepage and hit enter, you should be directed to the new search page</strong></p>
<p><img src="1f0fd7b3db2ca348200f0b55ca961982.iix" /></p>
<p>Our<strong> Facet Incidents</strong> is displayed on the page. You can use that to filter the results.  </p>
<p>Now if you want to only see <strong>Critical</strong> Incidents, click on it, results are filtered and the selected <strong>Filter appears a pill on top</strong>, you can clear the filter by just <strong>clicking on x</strong></p>
<p><img src="0751efbbdb2ca348200f0b55ca961985.iix" /></p>
<p> </p>
<p> </p>
<h3>Let&#39;s take a look at Mapped Facet Filters. </h3>
<ul><li>Not tied to a single field in the table</li><li>You can create filters with and/or queries of multiple fields</li></ul>
<p>Now we will create a mapped filter. For the Incident Search source, we created earlier, click on <strong>New</strong> to create another Facet.</p>
<p><img src="eca2e333db6ca348200f0b55ca9619ad.iix" /></p>
<p> Call it <strong>Created</strong>, we will use it to filter incidents based on the created time. Choose <strong>Selection Type as Multiple</strong> and make the <strong>Use mapped facet filter as true </strong>and save the record.</p>
<p><strong><img src="99a36ff3db6ca348200f0b55ca96192c.iix" /></strong></p>
<p> </p>
<p>As soon as you save it, you should see <strong>Facet Filter</strong> related record list appear below.</p>
<p><img src="87f3af37db6ca348200f0b55ca9619c2.iix" /></p>
<p> </p>
<p>Click New to create one. Fill out the form like below and Submit it.</p>
<p> </p>
<p><img src="787423f7db6ca348200f0b55ca961958.iix" /></p>
<p> </p>
<p><strong> Similar to above, create another Mapped Facet Filter call This Month, to filter active incidents created this month.</strong></p>
<p> </p>
<p>Now if you refresh your search results page, you should see our new Mapped Filters <strong>This Year</strong> and <strong>This Month</strong> appear as filters. Since we choose <strong>Created facet to be Selection type as Multiple, you can choose more than one filters here.</strong></p>
<p><img src="9d6523bbdb6ca348200f0b55ca961907.iix" /></p>
<p> </p>
<p> </p>
<p>Note: Search Facets can also be scripted, I will cover it in another blog post.</p>
<p>Well, I hope this has given some insights into new Service Portal Search Facets coming out in London. </p>