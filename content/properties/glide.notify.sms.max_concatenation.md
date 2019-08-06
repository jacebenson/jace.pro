---
layout: page
title: glide.notify.sms.max_concatenation
description: "Notify supports the concept of SMS concatenation. When the SMS body exceeds the maximum length of a single SMS (160 characters for plaintext SMS messages or 70 characters for Unicode SMS messages) Notify can concatenate up to 10 SMS messages which will be joined on the receiver's mobile phone. This property configured the maximum number of SMS messages that will be concatenated  into one large SMS message. If the body length is exceeded the body will be truncated and a message will be logged.  Note that charges are per sms, which means that 1600 character SMS will be 10 times as expensive as a 160 character SMS. Also note that not all providers support SMS concatenation. "
---
10