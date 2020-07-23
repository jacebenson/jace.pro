---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "2019 Hackathon"
event: "2019 Hackathon"
event_url: "https://www.meetup.com/Minneapolis-ServiceNow-Developer-Meetup/events/261674348/"
location: Mattersight, 7700 France Ave S \# 210, Minneapolis, MN
summary: This is a different type of event. Bring your laptop and ideas. Any opensource project that relates in anyway to ServiceNow is what we're looking for. Lets all hack on something collectively.
abstract:

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: 2019-10-10T18:00:00-05:00
date_end: 2019-10-10T21:00:00-05:00
all_day: false

# Schedule page publish date (NOT talk date).
publishDate: 2019-09-02T22:12:41-05:00

authors: ['jace']

# Is this a featured talk? (true/false)
featured: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: Hacktoberfest
  url: https://hacktoberfest.digitalocean.com/
  icon_pack: fas
  icon: code
- name: Meetup
  url: https://www.meetup.com/Minneapolis-ServiceNow-Developer-Meetup/events/261674348/
  icon_pack: fab
  icon: meetup

# Optional filename of your slides within your talk's folder or a URL.
url_slides:

url_code:
url_pdf:
url_video:

# Markdown Slides (optional).
#   Associate this talk with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
faIcon: "calendar"
---
This is a different type of event. Bring your laptop and ideas. Any opensource project that relates in anyway to ServiceNow is what we're looking for. Lets all hack on something collectively.

- [Hacktoberfest details](https://hacktoberfest.digitalocean.com/)
- [Meetup RSVP](https://www.meetup.com/Minneapolis-ServiceNow-Developer-Meetup/events/261674348/)

- [Hackathon Ideas](https://docs.google.com/spreadsheets/d/1OBKZ0Y-E4jBsjCpZcfBKKd0KWc6dyNGiZ_Xhkg4j6mc/edit?usp=sharing)
- [Hackathon Idea form](https://docs.google.com/forms/d/e/1FAIpQLScuETH1NqC2RO3FkD8_OFNvgMHa1-B2R7AnQ4zoeoun1S7Z2g/viewform)

## Agenda

- 6pm - Welcome, introduction and prices. Thanks everyone for coming. This is all about encouraging meaningful contributions to open source, for beginners and veterans alike.
- 6:30pm - Hack time
- 9pm - Ends

### Hack time

During this time, I will be making myself available to help get started contributing to open source projects.
Here's an overview of what this will detail for folks who've never done so.

- Setup your [GitHub](https://github.com) account
- [Understanding the Github Flow](https://guides.github.com/introduction/flow/)\
  Seeing this visually should help identify how this all works.
- [Forking repositories](https://guides.github.com/activities/forking/)\
  Before working on the Repository, you need access to write to it.  It's likely you won't get that access.  The way to do this is to make it your own, and do the work there.
- [Probot - Pullbot](https://probot.github.io/apps/pull/)\
  This keeps your fork up to date with the original repository.  With Servicenow forcing the hash to be the same its crucial to be able to pull updates and get the most recent changes on the `master` branch.
- [Branching repositories](https://help.github.com/en/articles/about-branches)\
  Because `master` now is possibly going to overwrote by the original repository, you should create a branch to keep your work seperate.
- [Creating a branch in servicenow](https://docs.servicenow.com/bundle/newyork-application-development/page/build/applications/task/t_CreateBranch.html)
- [Switching branches in servicenow](https://docs.servicenow.com/bundle/newyork-application-development/page/build/applications/task/t_SwitchBranch.html)
- Create/Fix Feature/Bug - This will be just taking the action to make it work as asked.
- [Committing the update to your branch in servicenow](https://docs.servicenow.com/bundle/newyork-application-development/page/build/applications/task/t_CommitChanges.html)\
  Once you've made the changes you want, add a commit message in **past tense** and keep it 
- [Making a pull request in GitHub](https://guides.github.com/activities/forking/#making-a-pull-request)