---
layout: "layouts/simple.njk"
title: "Resources"
description: ""
---

<table>
<thead>
<tr><th>Category</th><th>Links</th></tr>
</thead>
<tbody>
{% for resourceGroup, resource in resources %}
<tr>
<td>{{resourceGroup}}</td>
<td>
{% for Link in resource %}
<a href="{{Link.link}}">{{Link.text}}</a><br/>
{% endfor %}
</td>
</tr>
{% endfor %}
</tbody>
</table>

