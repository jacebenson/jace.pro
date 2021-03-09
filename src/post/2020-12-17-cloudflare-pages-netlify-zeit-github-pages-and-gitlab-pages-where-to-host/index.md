---
title: "CloudFlare Pages, Netlify, Zeit, Github Pages, and Gitlab Pages.  Where to host for free?"
subtitle: "CloudFlare Pages vs Netlify vs Zeit vs Github Pages vs Gitlab Pages"
summary: "I was looking at CloudFlare Pages and thought I want to see all the
  Places with JAMStack hosting compared with all the features."
date: 2020-12-17T21:27:27.004Z
tags: "post"
---
<a name="top"></a>
# CloudFlare Pages, Netlify, Zeit, Github Pages, and Gitlab Pages.  Where to host?

Let me know in the comments or via a [GitHub issue](https://github.com/jacebenson/jace.pro/issues/new) if I'm missing something or got something wrong.

I excluded AWS Amplify as they are "free for a year".  That is a while but it will cost you something every month after that year.  

<table>
<thead>
  <th>Feature</th>
  {%- for vendor in ssg.vendors -%}
    <th>{{vendor}}</th>
  {% endfor %}
</thead>
<tbody>
  {%- for name, feature in ssg.features -%}
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
{% for name, feature in ssg.features %}{%- for item in feature -%}{%- if item.source -%}
| {{item.vendor}} | {{name}} | [{{item.answer}} - {{item.detail}}]({{item.source}}) |
{% endif %}{%- if item.source == "" -%}
| {{item.vendor}} | {{name}} | {{item.answer}} - {{item.detail}} |
{% endif %}{% endfor %}{% endfor %}
