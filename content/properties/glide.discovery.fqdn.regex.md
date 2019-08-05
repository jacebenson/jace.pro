---
layout: page
title: glide.discovery.fqdn.regex
description: "<b>DNS Host Name And Domain Name Regex: </b> The default parsing of FQDN (Fully Qualified Domain Name) is to pick the first name separated by dots as the host name and the rest of the names as the domain name. For example, 'machine1.testlab.service-now.com' has host name of 'machine1' and domain name of 'testlab.service-now.com'. The property allows regex with two capturing groups with the first group representing the host name and the second group the domain name."
---
^([^.]+)\.((?:[^.]+\.)+[^.]+)$