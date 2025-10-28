---
title: Making a custom probe and sensor
description: >-
  My notes on how I made a custom probe and sensor for ServiceNow Discovery to get
  data from a command line tool.
date: '2019-11-14'
tags:
  - discovery
  - tutorial
redirectFrom:
  - /making-a-custom-probe-sensor/
  - /p/2019-11-13-making-a-custom-probe-sensor/ 
  - /2019-11-13-making-a-custom-probe-sensor/
---

<!--StartFragment-->

The other day I was trying to create a custom probe/sensor for a probe for our linux machines.

The only example I could find was to read a text file and make a ci based on that. That was not what I wanted.

I was specifically asking a program to tell me about its facts and I wanted to relate those details to the currently identified CI.

I couldnt remember how to do this;

Thankfully Rob G. pointed me in the right direction.

* Created Probe to run the command ``sudo `which factor` -pj``
* Created Sensor to respond to the probe
* Opened the Classifiers, and added the Probe to the Linux one
* Created a Test Discovery schedule so I could test the Probe & Sensor

<!--EndFragment-->

![](/assets/images/probe-01.png)

![](/assets/images/probe-02-sensor.png)

<!--StartFragment-->

Notes;

* `result.output` is going to be string output as its what's on the shell that is returned. If it's an object, you gotta parse it.
* `var serverGR = this.getCmdbRecord();` is the way I used to get the currently identified CI.

<!--EndFragment-->