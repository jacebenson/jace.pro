---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Making a custom probe & sensor"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2019-11-13T21:07:51-06:00
lastmod: 2019-11-13T21:07:51-06:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: true

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---
The other day I was trying to create a custom probe/sensor for a probe for our linux machines. 

The only example I could find was to read a text file and make a ci based on that.  That was not what I wanted.

I was specifically asking a program to tell me about its facts and I wanted to relate those details to the currently identified CI.

I couldnt remember how to do this;

Thankfully Rob G. pointed me in the right direction.

- Created Probe to run the command ``sudo `which factor` -pj``
- Created Sensor to respond to the probe
- Opened the Classifiers, and added the Probe to the Linux one
- Created a Test Discovery schedule so I could test the Probe & Sensor

![probe](probe.png)
![sensor](sensor.png)

Notes;

- `result.output` is going to be string output as its what's on the shell that is returned.   If it's an object, you gotta parse it.
- `var serverGR = this.getCmdbRecord();` is the way I used to get the currently identified CI.
