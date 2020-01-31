---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Ok Orlando - Automated Testing Framework changes"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2020-01-27T13:15:24-06:00
lastmod: 2020-01-27T13:15:24-06:00
featured: false
draft: true

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---
# OK Orlando - A series of features worth note

In Orlando there's a bunch of [Automated Test Framework(ATF) updates].

Lets go over them and see what we think;

## Copy an automated test suite

In the past copying a test suite kept the past scope.
Lets see how good this works.

- If a suite spans multiple scopes, copying scopes doesn't copy anything out of the current scope.
- Copying a test suite isn't available unless you're in the suite's scope.

## Custom UI test steps - misleading

So in the new section there's a "Custom UI test steps" but it goes on to say;

> Test workspaces using the Form category test steps. The Custom UI category steps don't support available workspace.

So it's just a heads up, to test workspaces goto the form category, not custom ui.

## List and related list steps

- Validate related list visibility - tested
- Apply filter to list - tested
- Validate record present in list - tested - no way to validate list is empty or test that 
- Validate ui actions in lists
- Open a record in list

## Email

- Validate outbound email
- Generate inbound reply email

## Other

- Generate Random String - only input is how long to make the input...

[Automated Test Framework(ATF) updates]: https://docs.servicenow.com/bundle/orlando-release-notes/page/release-notes/summary/rn-summary-new-features.html