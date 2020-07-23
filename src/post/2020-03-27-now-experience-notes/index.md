---
title: "Now Experience Notes"
subtitle: "Working with new tech is always a learning experience"
summary: "Here I go through following along Andrew's detailed posts in setting up a Now Expierence Component"
date: 2020-03-27T22:37:06-05:00
---
I was following along with [Upside-down Andrew's posts](https://andrew.alburydor.com/posts/2020-03-20-nowui-part1/) and taking notes trying to get a now-expierence component to work.  

Here's my notes;

1.  Checked version of node; `node --version` it's at 12.16.1
1.  Checked version of npm; `npm --version` it's at 6.13.4 (howver there's a upgrade to 6.14.4)
1.  Checked version of now-cli; `now-cli --version` it's at 17.0.2
1.  Created folder/repository to render a joke from joke.jace.pro
1.  Created README.md file with aweseome contnet (thanks AAD)
1.  Staged my commit of the update to README.md
1.  Created Repository on Github https://github.com/jacebenson/now-joke
1.  Added SSH Repository link
1.  Ensured `git@github.com:jacebenson/now-joke.git` is returned when `git remote show origin`
    * If you don't have SSH configured with Git, you'll want to undo the git url and use https instead... really set up SSH
    * [Github's docs to do this](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)
1.  Push your either by `git push -u origin remote` or with buttons in VS Code.  You should see the file on github.com with it's contents
1.  You need an empty to build the project, so lets delete that README.md.... you can do that by typing `rm README.md`
1.  Now we can create the project, I ran `now-cli project --name "@jace/now-joke" --description "It's what it says on the lid"`
1.  It created the scaffolding, you'll need to do a `npm install` or `npm i` to install the package.json dependencies
1.  We can finally Start rendering something.... run `now-cli develop --open`
1.  Edit the `./src/x-1234-your-component/index.js` line 7 to say something, your browser should update
