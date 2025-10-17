---
title: Setting up a custom theme cliff notes by Ty
author: Jace Benson
date: 2022-10-28T18:04:23.053Z
draft: true
stage: research
prism: false
---
ty.roach
  1 day ago
@ashley
's link has it all and the video I posted has it too (so does the one that 
@eric
 posted) but here's my cliff notes for anyone interested
Step 1. Create a style.
Open a tab in your browser to bring up ServiceNow's Theme Generator: https://theme.deoprototypes.com/color-generator-p/
Click the Auto Generate button at the top
Select values for the Brand Neutral, Brand Primary and Brand Secondary then click the Generate button
Click the "Copy Jason" button at the top (to copy the style to the clipboard)
Step 2. Associate your style with a theme.
Open your ServiceNow instance and navigate to Now Experience Framework > Theme Management > Themes
Create a new theme (give it a unique name)
Create a new "Style" entry in the Compositional: App Theme section (UX Theme Styles embedded list) by clicking "Insert a new row…" then tabbing over to the Style and click "New"
In the "Style" field type: { "properties": <insert-copied-clipboard-here>} then paste your copied style from step 1 into here.
Step 3. Activate your custom theme
Create a new system property (or update the existing one if it already exists): glide.ui.polaris.theme.custom
Paste that theme's sys_id in the value (maybe put the Theme Name in the property description...my two cents)
Refresh your browser to see the new custom theme

https://www.youtube.com/watch?v=zuITYAOBlUU
https://www.youtube.com/watch?v=0XKjy2GaOHE