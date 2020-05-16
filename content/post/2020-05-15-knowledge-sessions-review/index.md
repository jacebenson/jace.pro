---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Knowledge20 Session Review Week of May 10th"
subtitle: "So I was going to do this at the end, but I'll try this weekly"
summary: "A short review of sessions I looked up during Knowledge20"
authors: ["jace"]
tags: []
categories: []
date: 2020-05-15T21:57:49-05:00
lastmod: 2020-05-15T21:57:49-05:00
featured: false
draft: false

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

So Knowledge20 is a new experience for everyone, attendees and organizers.  Everything has changed.

I want to first say I am **amazed** at the work ServiceNow did to make this event happen remotely when it was slated to be an in person event at no cost.

There's a lot of opportunity here for small and large partners to pick up leads where things were missed but not much was missed on the content.  The way the content is fulfilled could have been better but over all it's been pretty great.  I want to note the issues I had when trying to get to sessions up until this point. 

  - Inconsistent redirects
  - Forced logins on labs and sessions
  - Live Session links not redirected to the "NowLearning" equivalent

A few things gained from this;

  - Watching videos at the speed of "Now" (aka 2x)
  - 6 weeks to watch the content instead of 5 days
  - Money saved from not having to pay for a ticket, and not having to pay for lodging and travel

With all that being said, here's what I attended and my thoughts on those.

## Watched Sessions

- [Building your reputation with Now Community](https://events.servicenow.com/widget/servicenow/knowledge2020/knowledgecatalog/session/1578864824499001IFtX) - Robert Fedoruk and Mark Obee

    - How to build your reputation.  I found this useful

- [Creating now community content that matters](https://events.servicenow.com/widget/servicenow/knowledge2020/knowledgecatalog/session/1578864913431001De0N) - Chuck Tomasi and Mark Obee

    - How does Chuck create impactful content? @6:40
		- Be Passionate About the topic, know your audience and what you want to say, and then find the right delivery channel for that.

  		- If you're not passionate about the content.  You will stop.

        - Consider why the audience should care.  "What's in it for me?"

		- Structure your content that you want to hit so when you're creating it you don't miss a point.
		- Understand what's the topic, purpose and Call to action and other "typical presentation stuff Chuck isn't going to get into."

        - Think about the type of content, does it lend it self to be better made as a video, podcast, blog or tweet?

    - Advise to get started creating content
		- Participate in the community, be passionate about the content you want to write about.
		- Focus your content to fine point.
		- Think about ways to share the content in many places

	    - Get feedback from trusted individual

		- Get started creating content - Mark Obee

- [Visibility for TLS Certificates and automation of task workflows](https://events.servicenow.com/widget/servicenow/knowledge2020/knowledgecatalog/session/1574470626591001xEbX)

  > I have a personal interest in this as I've written integrations with Sectigo and other Certificate authorities to end-to-end provision certificates.  This seems to be just a tool to watch when certificates expire, not provisioning them.  

	- Visibility to deployed TLS Certificates
	- Proactive Management for TLS cert expiry stuff
	- Automated incident creation
	- Integrations with Vulnerability management and Risk Management
	- With Orlando you can discover the certificates via Discovery
	- No automation to generate the certificates today @4:30
	- This is a store app @6:55

- [Tackling the terror of tech debt - with VividCharts](https://events.servicenow.com/widget/servicenow/knowledge2020/knowledgecatalog/session/1576673589858001tPww)

	- Software Tech Debt
	- Process Tech Debt
	- Vendor Tech Debt

- [What's new in IT asset management](https://events.servicenow.com/widget/servicenow/knowledge2020/knowledgecatalog/session/1583175599754001xD10)

    - Shows new connection setup for custom saas licensing if you're into that kind of thing.

- [How to make forms public on the service portal](https://youtu.be/aQZo3spBuVs?t=233) by Travis Toulson (CodeCreative)

	- Concerns

		- Denial of Service due to too many calls
		- Recaptca is not a catch-all.  It needs to be implemented correctly.
		- A good way may be to do the "captcha" verification server side.
		- ServiceNow can cache 401 responses but not 429, forcing users to the auth first limits your attack vectors
		- Chris Nanda says Processors is reserved for `maint` only ... This must have changed.

- [Building components with the Now Experience UI framework](https://events.servicenow.com/widget/servicenow/knowledge2020/myagenda/session/1579800994423001T4Sz)

  - Very helpful, had links to other Component videos in the description
  - Very technical

- [Upgrade faster, test smarter](https://events.servicenow.com/widget/servicenow/knowledge2020/knowledgecatalog/session/1587579161003001Kz3A) - By LH, when to use ATF

	- Make use of quick start tests
	- Test based on reliable best practices
	- Avoid inconsistency by eliminating common user testing errors
	- Ease of use for both technical and non-technical users
	- Accelerate time to production
	- https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/success/quick-answer/automated-test-framework-use.pdf
	- https://developer.servicenow.com/dev.do#!/learn/courses/orlando/app_store_learnv2_atf_orlando_automated_test_framework

- [Guided Tours](https://events.servicenow.com/widget/servicenow/knowledge2020/knowledgecatalog/session/1587579892890001lI56) - By LH

- [Flow Designer](https://events.servicenow.com/widget/servicenow/knowledge2020/knowledgecatalog/session/1587579888604001lCN9) - By LH

- [Intro to Now Experience for developers - By Chris Haas](https://events.servicenow.com/widget/servicenow/knowledge2020/knowledgecatalog/session/1579800548638001jUme)

	-	How did "experience evolve"

		- 2008-2016 UI has been lists and forms with different skins
		- Workspaces are a new of showing this data.  It breaks the old lists and forms

	-	Tech Stack

		- Now Experience UI Framework (JS Framework)
		- Now CLI
		- Now Experience Components (Library of 30+ components as of Orlando)
		- Now Experience UI Builder (drag and drop ui builder)
		- Benefits

			- Modern Technology
			- Future-Proofed Platform

	-	Developer Workflow

		1. Install Node.js
		2. Install Now CLI `npm i @servicenow/cli`
		3. Authenticate `now-cli login`
		4. Create Component `now-cli project`
		5. Build & Run `now-cli develop`
		6. Deploy `now-cli deploy`
		7. Build Landing Pages on the UI Builder
		8. Augment Record Pages with Platform Configuration

	-	Demo @9:05 in the video (skip ahead) 

		- Starts at `now-cli project` cause he set up the 1-3 steps ahead of time

	-	More info on the developer site...

- [Hackathon Finale](https://events.servicenow.com/widget/servicenow/knowledge2020/knowledgecatalog/session/1586463324172001DzpR?)

	- Team Sopra Steria presenting [JetVet] - Vendor Risk Lookup tool with many api calls
	- Team World Class Wrackin' Cru presenting [KICK: Key Items Crisis Kit](https://www.youtube.com/watch?v=vSBrCXQN-4Y) Organize supply and demand in this pandemic
	- Team Volteoans presenting [Clinical Care Management(EMR)]
	- Team Extra Crispy Stimulus Package presenting Zoom: Extra Crispy - Zoom Apis to show words brought up
	- Team NewRocket presenting [Reach](https://serviceportal.io/reach-by-newrocket/)
	Other notable mentions

		- [Adventure Capitalist Clone By Earl Duque](https://www.youtube.com/watch?v=vEUxMH58Kvc)
		- [Resus Runner](https://www.youtube.com/watch?v=SSyaTxgmdI4)
- [Building Awesome UX with the Now Experience Components (By Aileen Hackett)](https://events.servicenow.com/widget/servicenow/knowledge2020/knowledgecatalog/session/1579653551394001jqSd)

	-	Overview of now components

		- Focus is to allow the customization that customers want
		- Components are built in a generic way to allow multiple use cases

	-	Deep Dive into current components

		- As of Orlando we have 36 components and more are to come in future releases those are all in these categories ;

			- Buttons
			- Navigation
			- Identifiers
			- Content Display
			- Dialogs/Notifications

	-	Where to find out more

		- https://developer.servicenow.com/dev.do#!/reference/libraries/orlandlo/now-components

- [Automate ServiceNow CI/CD](https://events.servicenow.com/widget/servicenow/knowledge2020/knowledgecatalog/session/1587574582468001Xnup)

	- [Lab Guide](https://developer.servicenow.com/connect.do#!/event/knowledge2020/CCW1856)
	- Link to video is now defunct... why, it makes no sense!
	- Notes about the lab
	- In the video It was discussed that ServiceNow may end up doing this officially but it's still a great learning exercise to see these new features;

		- Selective Git Commits
		- Warnings when two developers modify the same record connected to source control
		- Has some great Developer Tips

		> DEVELOPER TIP: Commit comments should describe what was done, why it was done, and give context for you and other developers on the team an understanding of what is contained inside of the commit. Standardize the structure for Commit comments in your organization or team to ensure the Commit comments contain the details you need. In the example, the Commit comment begins with the initials of the developer committing the changes and describes the updates.
  
## Unwatched Sessions

Sessions I didn't get a chance to look at but intend to.  This post may be updated with notes if I get to them.

- [4 Reasons People Report on Old Unreliable Data and How to Fix It(VividCharts and GlideFast)](https://glidefast.zoom.us/webinar/register/WN_lJMdsWThQACCAksOlbqbRg)

- [Common Service Data Model and APM](https://events.servicenow.com/widget/servicenow/knowledge2020/knowledgecatalog/session/1588617955336001RsrQ) - Accenture

- [NOT ON-DEMAND until 5/7 - Use IntegrationHub ETL to import data](https://events.servicenow.com/widget/servicenow/knowledge2020/knowledgecatalog/session/1587494607617001oCDk?sessionId=1587494607617001oCDk)

- [LAB NOT ON-DEMAND until 5/7 - Performance Analytics (PA) Essentials (Orlando)](https://events.servicenow.com/widget/servicenow/knowledge2020/knowledgecatalog/session/1588477527078001VZ6l)

- [Making Service Portal Widgets Work Together by Travis Toulson (from K18)](https://codecreative.io/blog/making-service-portal-widgets-work-together/)