---
title: 'Understanding AI and ML: From ServiceNow to OpenAI'
description: >-
    How I came to understand AI and ML through my experiences with ServiceNow, OpenAI, and other platforms.
date: '2022-12-23'
tags:
  - servicenow
  - service-catalog
  - ai
  - chatgpt
  - tutorial
  - beginner
redirectFrom:
  - /the-good-and-bad-about-openai-and-chatgpt-around-servicenow/
  - /p/2022-12-23-the-good-and-bad-about-openai-and-chatgpt-around-servicenow/
---

## Introduction to AI/ML

ServiceNow's Artificial Intelligence (aka Predictive Intelligence) is complex and . and difficult to set up, and other people weren't impressed with it.

I have this worm in my ear and I need to get it somewhere.

Embrace it or be left behind. 

We fear what we don't understand, I hope my journey will help add some understanding. If it does, please let me know where you can find me.

In 2016 I read about Predictive Intelligence in ServiceNow.  This wa my first real look at anything like this.  I remember thinking this  Artificial Intelligence (AI) or Machine Learning (ML) stuff looked awesome.  It sounded very complicated and difficult to set up. Back then, you needed around 10,000 incidents to train it to assign tickets to the right group. That seemed painful. To keep it up to date, you had to re-train the cortex. I tell you this to emphasize that I walked away; it was too much. 

A while later MoveWorks demo'd their chatbot solution to me.  It was also great.  You'd message it something and it would ask you simple questions to either answer your question or submit a catalog request for you.  I remember how it knows what catalog item or article to surface.  They mentioned they train the bot based on the customers instance and weight the items.  I didn't understand.  I never got to use their product but I didn't understand they were using AI.

## Understanding AI/ML

I saw a [video](https://youtu.be/GVsUOuSjvcg?t=217) by Veratisum on March 4th, 2022 about analog computers and it made sense. He showed how in the 60s they were assigning weights to 20x20 pixel images of dogs to have the Perceptron identify if an image was a dog or not.

It took a while but this video is what made it click for me. I understood the concept. Assign weight things and ask questions so the AI could respond. This had been in my head for months. Then I came across Stable Diffusion and decided to try it out on November 6th. It amazed me, making images of everything. I was paying attention to swyx.io and he had a timeline of how [Open Source is eating AI](https://lspace.swyx.io/p/open-source-ai). To put this into perspective, Stable Diffusion became a thing on September 7th. I looked into Text to Text AI generation, but all I found was Kobold AI which I set up, but it was beyond me. Everything else was too computationally expensive.

Then ChatGPT came out. I was like many, impressed. I wanted to understand more and get Text to Text AI stuff running locally to try things. I hadn't read into OpenAI but I did later that day. One way I learn best is to try to make something. So I did that. I made a little button in ServiceNow to generate code for me. It was neat but I didn't think it would be useful to many. So I took inspiration from SN Utils' extension and started working on an extension. This was December 1st.

## Developing an Scribe.Monster

I released my extension four days after making my OpenAI account. My first commit to <https://scribe.monster> was on December 5th.

Since then, I've been consuming so much AI educational content.

Fine-tuning, Prompt engineering, one-shot, few-shot, and no-shot prompts. It's been a ride if you've been following along you likely have seen how the extension has changed.

I don't know where this will take me, but AI that was inaccessible before is now accessible everywhere. People are using it in crazy novel ways; some of them are dangerous while others are profound. At the end of the day it is a tool, a very complicated autocomplete.

I'd like to think this anti AI and pro AI stuff is like calculators. Back in the day, calculators weren't allowed for math work, [but then they were](https://www.quora.com/When-did-calculators-become-commonplace-in-high-school-classrooms), and things changed. People who grew up memorizing how to do math [can still do it amazingly](https://youtu.be/GYnRCb3ppAg?t=109), but those with calculators now needed one to do math as fast. Like calculators, AI will be a tool, except AI isn't something one can do in their head. You can create a prompt and it will give you an answer, for better or worse.

## The genie is out, and I don't see it being put back

Here we are, at the end of this post. I hope it has helped you understand how I came to understand this stuff. For those who think AI is a fad and will go away, I disagree. I'm not in that group. It will stick around. [Robert Fedoruk posted this on Linkedin](https://www.linkedin.com/posts/rfedoruk_chatgpt-out-for-days-and-has-more-popular-activity-7007550799002173440-dkEL?utm_source=share&utm_medium=member_desktop);

"ChatGPT is out for days and has more popular appeal and use cases than BLOCKCHAIN. Edit: Full disclosure, just a good natured ribbing to my blockchain friends. I know there's some important stuff being worked on. Just showcasing how fast simple use cases scale."

That may have been posted in jest, but he's not wrong. Look at the applications folks are coming out with.

* Canva.com will create content, and create you an image
* Notion.so will create content for you
* Jasper will help you create content and identify AI-generated content
* CopyAI will do copywriting.