---
title: What is Business Rules (google search trend)
description: >-
  This sentence has five words. Here are five more words. Five-word sentences
  are fine. But several together become monotonous. Listen to what is happening.
  Th...
date: '2022-12-25'
tags:
  - servicenow
  - business-rules
redirectFrom:
  - /what-is-business-rules-google-search-trend/
---

This sentence has five words. Here are five more words. Five-word sentences are fine. But several together become monotonous. Listen to what is happening. The writing is getting boring. The sound of it drones. It’s like a stuck record. The ear demands some variety.

Now listen. I vary the sentence length, and I create music. Music. The writing sings. It has a pleasant rhythm, a lilt, a harmony. I use short sentences. And I use sentences of medium length.

And sometimes, when I am certain the reader is rested, I will engage him with a sentence of considerable length, a sentence that burns with energy and builds with all the impetus of a crescendo, the roll of the drums, the crash of the cymbals–sounds that say listen to this, it is important. — Gary Provost

<!--StartFragment-->

ServiceNow Business Rules are a powerful feature that allow administrators to automate certain tasks and apply custom logic to any data stored within the ServiceNow platform. Business Rules can be used to set field values, run scripts, create notifications, and more. They are used to ensure data integrity, enforce business logic, and automate workflows.

<!--EndFragment-->

Business rules are one of the few CORE components of ServiceNow.  If you can master these you can solve most problems with them.  I plan to write about the other CORE components of ServiceNow, so look forward to my introduction to Script Includes, Events and Script Actions.  

Most problems can be solved with a business rule.  It may not be the "best" way to solve it now but knowing how you can solve some common reqeusts may drive you to the best way to solve your problem.

Request: Don't let bad data in this field!
Answer: Create a business rule before insert or update that checks the content and does a abort action if the data is "bad".

Request: Make the server value of the correlation id available to client script for Ajax requests on the page.
Answer: Enter Display Business rule and the use of the scratchpad.  Set a property of `g_scratchpad.correlation_id = current.getValue('correlation_id');`  Now that' will be available to client scripts, and client side UI actions.

Request: Show a message on the list of records saying this data syncs every day at 5pm CST.
Answer: Make a Before Query Business rule with `gs.addInfoMessage("YOUR MESSAGE HERE");`

Request: When someone sets their email address on their profile, send them an email.
Answer: Trigger an event (gs.eventQueue) and pass in the email they set as a parameter.  

Request: Don't allow folks to clear "valid to" on kb articles if they didn't change the status.  
Answer: Before Insert/Update and set abort action if valid_to changes and status.changes() == false.

Some of these would be better as a straight notification, some would be better as a data policy.

I hope this helps.