---
title: "What features are on each of these SSG tools?"
subtitle: "11ty, Jekyll, Hugo, Hexo, and Gatsby are all systems I've used and will be comparing"
summary: "I've personally built sites with each of these and want to keep a list tracking these differences"
date: 2021-04-21T21:27:27.004Z
tags: "draft"
---

<a name="top"></a>
# What features are on each of these SSG tools?

Let me know in the comments or via a [GitHub issue](https://github.com/jacebenson/jace.pro/issues/new) if I'm missing something or got something wrong.

I excluded other static site generators I'm not familiar with, but if you'd like me to write about them, let me know via a comment or issue.

<table>
<thead>
  <th>Feature</th>
  {%- for tool in ssgtools.tools -%}
    <th>{{tool}}</th>
  {% endfor %}
</thead>
<tbody>
  {%- for name, feature in ssgtools.features -%}
  <tr>
  <th style="text-align:left">{{name}}</th>
    {%- for item in feature -%}
  <td style="font-size:10px">
    {% if item.source %}
  <a title="{{item.detail}}" href="{{item.source}}">{{item.answer}}</a>
    {% endif %}
    {% if item.source == "" %}
  <p title="{{item.detail}}">{{item.answer}}<p>
    {% endif %}
  </td>
    {% endfor %}
  </tr>
  {% endfor %}
<tbody>
</table>


| Vendor | Feature | Comment |
| ----   | -----   | -----   |
{% for name, feature in ssgtools.features %}{%- for item in feature -%}{%- if item.source -%}
{%set answer = item.answer %}

| {{item.vendor}} | {{name}} | [{{answer|replace("\n",",")}} - {{item.detail}}]({{item.source}}) |
{% endif %}{%- if item.source == "" -%}
| {{item.vendor}} | {{name}} | {{item.answer}} - {{item.detail}} |
{% endif %}{% endfor %}{% endfor %}
