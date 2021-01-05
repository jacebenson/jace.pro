---
title: "Adding Close notes to Ticket Conversations"
subtitle: "Close notes are important.  But OOB they aren't on Ticket Conversations."
summary: "Ticket conversations only include comments and attachemnts.  This post goes over ways to add Close Notes."
date: 2021-01-05T21:24:20.624Z
tags: "draft"
---

# Adding Close notes to Ticket Conversations

We'll if you're here, you're lookign for help.

From what I've read there's a few ways to deal with this.

1.  Add Close notes to additional comments.  
    ntd13 wrote https://community.servicenow.com/community?id=community_question&sys_id=d0a297a1db101fc01dcaf3231f961995#answer_7bbbe3a1db181fc01dcaf3231f9619f7
    
    ```js
    // insert: true
    // update: true
    // advaced: true
    // condition: current.close_notes.changes()
    current.comments = current.close_notes.toString()
    ```

2.  Add Close notes to the top of the comments
    Nia wrote https://community.servicenow.com/community?id=community_question&sys_id=b7bfa8e9dbc36340b1b102d5ca9619c2#answer_427956c3db0beb004abd5583ca961917
    
    

2.  Add Close notes to the "Stream" of comments
    Phonsie Hevey wrote this comment https://community.servicenow.com/community?id=community_question&sys_id=d0a297a1db101fc01dcaf3231f961995#answer_b39ce751db682c10190b1ea66896194f
    It nearly gets your working.
