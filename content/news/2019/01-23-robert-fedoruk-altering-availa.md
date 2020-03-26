---
title: "Altering available nontask categories in Worker Porta"
date: 2019-01-22T11:43:43.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=499d05d7db0baf00fa192183ca9619f8"
---
<p>Spent 10 or 15 minutes searching docs for this, and only 1 minute executing.  Hopefully this saves someone 14 minutes.  <br /><br /><strong>Scenario:  The customer has seen the beautiful Worker Portal interface but wants to remove and add options to the list of available non-task work options:<br /><img src="c76c8993db0baf00fa192183ca9619ba.iix" /><br /></strong></p>
<p>This is as simple as going to the raw time_card form.  Look at the choice list for the Category field.  <br />Yes, its that simple.  For those with less experience on choice lists, please continue.<br /><img src="88bc8117db0baf00fa192183ca9619de.iix" /></p>
<p>At this point its simple choice list manipulation.<br />Set values in the Inactive column to true to remove an option from the Worker Portal list.<br />Use New button to create new values in the table to add them. (I added Travel then marked appointment as inactive)<br /><img src="cb2d0957db0baf00fa192183ca961933.iix" /></p>
<p> </p>
<p>Et voila!<br /><img src="497dcd97db0baf00fa192183ca961949.iix" /></p>