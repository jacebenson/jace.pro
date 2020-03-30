---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "2020 03 27 Now Experience Notes"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2020-03-27T22:37:06-05:00
lastmod: 2020-03-27T22:37:06-05:00
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
1.  Checked version of node; `node --version` it's at 12.16.1
1.  Checked version of npm; `npm --version` it's at 6.13.4 (howver there's a upgrade to 6.14.4)
1.  Checked version of now-cli; `now-cli --version` it's at 17.0.2
1.  Created folder/repository to render a joke from joke.jace.pro
1.  Created README.md file with aweseome contnet (thanks AAD)
1.  Staged my commit of the update to README.md
1.  Created Repository on Github https://github.com/jacebenson/now-joke
1.  Added SSH Repository link
1.  Ensured `git@github.com:jacebenson/now-joke.git` is returned when `git remote show origin`
    1. If you don't have SSH configured with Git, you'll want to undo the git url and use https instead... really set up SSH
    1.  LINK HERE
1.  Push your either by `git push -u origin remote` or with buttons in VS Code.  You should see the file on github.com with it's contents
1.  You need an empty to build the project, so lets delete that README.md.... you can do that by typing `rm README.md`
1.  Now we can create the project, I ran `now-cli project --name "@jace/now-joke" --description "It's what it says on the lid"`
1.  It created the scaffolding, you'll need to do a `npm install` or `npm i` to install the package.json dependencies
1.  We can finally Start rendering something.... run `now-cli develop --open`
1.  Edit the `./src/x-1234-your-component/index.js` line 7 to say something, your browser should update
