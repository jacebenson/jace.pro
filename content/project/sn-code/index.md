---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "SN Code"
summary: "Code Searcher"
authors: ["jace"]
tags: []
categories: []
date: 2019-08-31T23:53:19-05:00

# Optional external URL for project (replaces project detail page).
external_link: ""

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_code: "https://github.com/jacebenson/servicenow-code/tree/docs"
url_pdf: ""
url_slides: ""
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""
---

This is a scoped application for Service-now to allow easier searching all code sources.

# Code Search

This is a scoped application for Service-now to allow easier searching all code sources.

## Features

- Table of contents of results
- Inline code that is found
- Code Checker

## Setup (Studio)

1. Open Studio on your environment
1. Import from source
1. Paste in the following url: `https://github.com/jacebenson/servicenow-code.git`

### Setup (Update set)

1. Open Retrieved Update Sets
1. Import from XML
1. Attach xml file from `/dist` folder or from [Share](https://developer.servicenow.com/app.do#!/share/contents/7596230_code_share_for_sp?v=2.3&t=PRODUCT_DETAILS)
1. Preview Update Set
1. Commit Update Set

## Usage

After you import this you can start to use it by in the following ways;

- Navigating to `/code` on your instance and typing in your term
- Navigating to `/code?q=getMyApprovals` on your instance and waiting for it's response
- You may want to enable the code checker, if so, just set the property `x_8821_code.allow.code.inspection` to `true`
