---
title: Now Experience Notes
description: "I was following along with\_Upside-down Andrew's posts\_and taking notes trying to get a now-expierence component to work.\r\n\r\nHere's my notes;\r\n\r\n1. Checked ve..."
date: '2020-03-28'
tags:
  - javascript
  - json
redirectFrom:
  - /now-experience-notes/
  - /p/2020-03-28-now-experience-notes/ 
  - /2020-03-28-now-experience-notes/
---

<!--StartFragment-->

I was following along with [Upside-down Andrew's posts](https://andrew.alburydor.com/posts/2020-03-20-nowui-part1/) and taking notes trying to get a now-expierence component to work.

Here's my notes;

1. Checked version of node; `node --version` it's at 12.16.1
2. Checked version of npm; `npm --version` it's at 6.13.4 (howver there's a upgrade to 6.14.4)
3. Checked version of now-cli; `now-cli --version` it's at 17.0.2
4. Created folder/repository to render a joke from [joke.jace.pro](http://joke.jace.pro/)
5. Created [README.md](http://readme.md/) file with aweseome contnet (thanks AAD)
6. Staged my commit of the update to [README.md](http://readme.md/)
7. Created Repository on Github <https://github.com/jacebenson/now-joke>
8. Added SSH Repository link
9. Ensured `git@github.com:jacebenson/now-joke.git` is returned when `git remote show origin`

   * If you don't have SSH configured with Git, you'll want to undo the git url and use https instead... really set up SSH
   * [Github's docs to do this](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)
10. Push your either by `git push -u origin remote` or with buttons in VS Code. You should see the file on [github.com](http://github.com/) with it's contents
11. You need an empty to build the project, so lets delete that [README.md](http://readme.md/).... you can do that by typing `rm README.md`
12. Now we can create the project, I ran `now-cli project --name "@jace/now-joke" --description "It's what it says on the lid"`
13. It created the scaffolding, you'll need to do a `npm install` or `npm i` to install the package.json dependencies
14. We can finally Start rendering something.... run `now-cli develop --open`
15. Edit the `./src/x-1234-your-component/index.js` line 7 to say something, your browser should update

<!--EndFragment-->