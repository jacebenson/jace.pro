---
title: Terminology and Wording
description: "I took this from,\_Hi's styleguide as I don't trust anyone to keep anything online. So this is just a local copy with opinions about word choices.\r\n\r\n> Note: ..."
date: '2019-09-19'
tags:
  - reporting
  - html
  - troubleshooting
redirectFrom:
  - /terminology-and-wording/
  - /p/2019-09-18-terminology-and-wording/ 
  - /2019-09-18-terminology-and-wording/
---

<!--StartFragment-->

I took this from, [Hi's styleguide](https://hi.service-now.com/styles/heisenberg/styleguide/docs/terminology_and_wording.html) as I don't trust anyone to keep anything online. So this is just a local copy with opinions about word choices.

> Note: Consider consulting with a technical writer before you commit UI text. Tech writers can help with clarity and consistency of UI text.

## Avoid Using "Please"

Using "please" is unnecessary, unless you are asking the user to do something that is inconvenient or a result of a system error.

| Do                                                                                                               | Do not                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Select custom application                                                                                        | Please Select a custom application                                                                        |
| Error encountered while executing the selected rules. Please contact system administrator for further assistance | Error encountered while executing the selected rules. Contact system administrator for further assistance |

## Avoid Using Words Interchangeably

Some words can have multiple meanings, depending on the context. Often, these words are used interchangeably with another word. For clarity, select and consistently use the less ambiguous meaning for each word.

For example, *because* and *since* should not be used interchangeably. The word *since* can have two meanings. To avoid ambiguity, always use *because* to provide a reason, and use *since* when referring to a specific point in time.

| Do                                                                                | Do not                                                                          |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Group approval for {0} was deleted because it no longer matches approval rule {1} | Group approval for {0} was deleted since it no longer matches approval rule {1} |

As another example, *once* and _after_should not be used interchangeably. The word *once* has two meanings. Always use *after* when referring to events that occur later than or in succession to another event, and use *once* when referring to events that occur one time.

| Do                                                         | Do not                                                    |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| You cannot change the State after it is Closed or Canceled | You cannot change the State once it is Closed or Canceled |

## Spell Out Contractions

Contractions can be hard to translate. Avoid contractions if at all possible.

| Do                                 | Do not                            |
| ---------------------------------- | --------------------------------- |
| You do not have any archived tasks | You don't have any archived tasks |

## Use Present Tense

Present tense is easier to read and understand.

Avoid future tense and past tense if at all possible.

| Do                                                                  | Do not                                                                   |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Problem is closed when the related change is marked Closed Complete | Problem will be closed when the related change is marked Closed Complete |

## Write Brief But Effective Text

In messages that tell users about an action that they can perform, use active voice by providing a direct command or addressing users directly with *you*.

| Do                                                           | Do not                                                    |
| ------------------------------------------------------------ | --------------------------------------------------------- |
| Specify the start date                                       | Start date must be specified                              |
| You can create bookmarks by dragging a link to the left edge | Bookmarks are created by dragging a link to the left edge |

Only include enough detail to help users complete tasks.

| Do                                                      | Do not                                                                                                                    |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Provide a brief explanation for rejecting this code     | Enter your comments for rejecting this code. This comment will be useful for the developer who submitted this code change |
| Edit the report settings, and then click **Run Report** | You've chosen Edit mode, make adjustments above and press the button titled **Run Report**                                |

Remove unnecessary words. Examples of words that you can usually remove without altering your meaning include: - Adverbs. For example, really, quickly, and easily. - Articles (for example, the, a, and an) in the beginning of sentences. - Forms of “to be” that are used with another verb.

| Do                    | Do not                                     |
| --------------------- | ------------------------------------------ |
| Article was not found | Unfortunately, the article cannot be found |
| Chart is loading      | The chart is being loaded                  |

<!--EndFragment-->