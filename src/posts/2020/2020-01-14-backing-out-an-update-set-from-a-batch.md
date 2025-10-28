---
title: Backing Out an Update Set From a Batch
description: "Author's Note: I know backing out isn't the right term but it's how I think of it.\r\n\r\n## Backing out update sets can be a pain.\r\n\r\nHere's the thing. Update S..."
date: '2020-01-14'
tags:
  - update-sets
  - troubleshooting
redirectFrom:
  - /backing-out-an-update-set-from-a-batch/
  - /p/2020-01-14-backing-out-an-update-set-from-a-batch/ 
  - /2020-01-14-backing-out-an-update-set-from-a-batch/
---

<!--StartFragment-->

Author's Note: I know backing out isn't the right term but it's how I think of it.

## [Backing out update sets can be a pain.](https://jace.pro/post/2020-01-14-backing-out-update-set-from-a-batch/#backing-out-update-sets-can-be-a-pain)

Here's the thing. Update Set Batches are **amazing**, until you have a problem.

One problem I've experienced with batching work in development is;\
Handling errors on update set batches.\
Sometimes this is due to a missing plugin or some other update set that needs to wait. How do you correct this? With help from @paige and @ajb I will answer this;

Quotes;

> ... delete the previewed update sets (all of them, including parent). Remove it from the parent in the source instance and bring it all back over. - @paige
>
> ... un-parent it, or as Paige said - delete the whole thing - and re-parent in development - @ajb

When I've done the delete way in the past I've had issues and now reading through these comments I can guess why. You need to ensure you "... have to ensure you get ALL the update sets." as @paige said. I suspect I didn't get all the update sets.

Going forward now that I've had success doing this are these steps;

1. Delete the Target Instance Update Sets, & Batch Update set
2. Un-parent in source
3. Re-import

Can issues still arise? Sure, keep this in mind;

So update sets can fail two ways in regards to batching;

* An update set completed can be pulled before it's associated with a batch. If you want that to be included in the batch it needs to be removed from the target instance.
* An update set was included but before applying it you want to exclude it. To do this, delete batch's related update sets, then the parent(batch) update set. Change the source update set batch and re-import.

<!--EndFragment-->