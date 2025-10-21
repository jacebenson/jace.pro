---
title: Post with a gallery
description: >-
  A gallery with good old "popup" functionality inside a dialog element, a new
  image shortcode that links directly to the image with its original dimensions,
  and a regular loop over images.
date: '2024-01-30'
tags:
  - javascript
  - css
  - html
---

This post has a gallery set in its front matter as a list of objects, each with an `image`, `alt`, and `caption` property.

When you import the gallery component, the images are listed in a grid as buttons, each linked to the respective image in a `<dialog>` HTML element. A close button within each dialog allows the image to be hidden again. Includes `gallery.css` for styling the modal dialogs and backdrop, `gallery.js` manages modal dialog interactions.

{% include "partials/gallery.njk" %}

## Loop through images without additional interactivity:

<ul class="gallery" role="list" style="padding: 0;">
  {%- for item in gallery -%}
    <li>{% image item.image, item.alt %}</li>
  {%- endfor -%}
</ul>