---
title: >-
  CloudFlare Pages, Netlify, Vercel, Github Pages, and Gitlab Pages. Where to
  host for free?
description: "CloudFlare Pages, Netlify, Zeit, Github Pages, and Gitlab Pages. Where to host?\r\n\r\nLet me know in the comments or via a\_GitHub issue\_if I'm missing something..."
date: '2020-12-17'
tags:
  - javascript
  - troubleshooting
redirectFrom:
  - /cloudflare-pages-netlify-zeit-github-pages-and-gitlab-pages-where-to-host-for-free/
  - /p/2020-12-17-cloudflare-pages-netlify-zeit-github-pages-and-gitlab-pages-where-to-host-for-free/
---

<!--StartFragment-->

# [CloudFlare Pages, Netlify, Zeit, Github Pages, and Gitlab Pages. Where to host?](https://jace.pro/post/2020-12-17-cloudflare-pages-netlify-zeit-github-pages-and-gitlab-pages-where-to-host/#cloudflare-pages-netlify-zeit-github-pages-and-gitlab-pages-where-to-host)

Let me know in the comments or via a [GitHub issue](https://github.com/jacebenson/jace.pro/issues/new) if I'm missing something or got something wrong.

I excluded AWS Amplify as they are "free for a year". That is a while but it will cost you something every month after that year.

<div class="view-toggle">
  <button onclick="showTable()" id="table-btn" class="active">Comparison Table</button>
  <button onclick="showCards()" id="cards-btn">Nutrition Labels</button>
</div>

<div class="vendor-selector">
  <h3>Select Vendors to Compare (max 2):</h3>
  <div class="vendor-checkboxes">
    {% for vendor in ssg.vendors %}
    <label class="vendor-checkbox">
      <input type="checkbox" value="{{ vendor }}" onchange="handleVendorSelection(this)"{% if loop.index <= 2 %} checked{% endif %}>
      <span>{{ vendor }}</span>
    </label>
    {% endfor %}
  </div>
  <p class="selection-hint">Select up to 2 vendors for focused comparison</p>
</div>

<div class="comparison-table" id="comparison-table">
<table>
<thead>
  <th>Feature</th>
  {%- for vendor in ssg.vendors -%}
    <th>{{vendor}}</th>
  {% endfor %}
</thead>
<tbody>
  {% for feature in ssg.features %}
  <tr>
  <th>{{feature[0]}}</th>
  {% for i in range(7) %}
  <td>
  {% if feature[1][i].source %}
  <a title="{{feature[1][i].detail}}" href="{{feature[1][i].source}}">{{feature[1][i].answer}}</a>
  {% else %}
  {{feature[1][i].answer}}
  {% endif %}
  </td>
  {% endfor %}
  </tr>
  {% endfor %}
<tbody>
</table>
</div>

<div class="vendor-cards" id="vendor-cards" style="display: none;">
  {% set vendor_index = 0 %}
  {% for vendor in ssg.vendors %}
  <div class="vendor-card">
    <h3>{{ vendor }}</h3>
    <div class="nutrition-facts">
      <h4>Hosting Facts</h4>
      
      <!-- Build & Deploy Group -->
      <div class="feature-group">
        <h5>Build & Deploy</h5>
        {% set build_features = ["Build Limit","Build Time to Error","Build Time per Month","Concurrent Builds","Deploy Limits"] %}
        {% for feature in ssg.features %}
          {% if feature[0] in build_features %}
          <div class="feature-item {% if feature[0] == 'Build Limit' or feature[0] == 'Deploy Limits' %}critical-feature{% endif %}">
            <div class="feature-label">{{ feature[0] }}</div>
            <div class="feature-value">
              {% if feature[1][vendor_index].source %}
              <p><a title="{{ feature[1][vendor_index].detail }}" href="{{ feature[1][vendor_index].source }}">{{ feature[1][vendor_index].answer }}</a></p>
              {% else %}
              <p>{{ feature[1][vendor_index].answer }}</p>
              {% endif %}
            </div>
          </div>
          {% endif %}
        {% endfor %}
      </div>
      
      <!-- Features Group -->
      <div class="feature-group">
        <h5>Core Features</h5>
        {% set feature_features = ["Deploy Previews","Serverless Functions","Invocations/Month","Duration Allowed","DNS Management","HTTPS Available"] %}
        {% for feature in ssg.features %}
feature[0] in           {% if feature_features %}
          <div class="feature-item {% if feature[0] == 'Serverless Functions' or feature[0] == 'HTTPS Available' %}critical-feature{% endif %}">
            <div class="feature-label">{{ feature[0] }}</div>
            <div class="feature-value">
              {% if feature[1][vendor_index].source %}
              <p><a title="{{ feature[1][vendor_index].detail }}" href="{{ feature[1][vendor_index].source }}">{{ feature[1][vendor_index].answer }}</a></p>
              {% else %}
              <p>{{ feature[1][vendor_index].answer }}</p>
              {% endif %}
            </div>
          </div>
          {% endif %}
        {% endfor %}
      </div>
      
      <!-- Limits Group -->
      <div class="feature-group">
        <h5>Usage Limits</h5>
        {% set limit_features = ["Bandwidth/Month","Site Limit","Default URL"] %}
        {% for feature in ssg.features %}
feature[0] in           {% if limit_features %}
          <div class="feature-item {% if feature[0] == 'Bandwidth/Month' %}critical-feature{% endif %}">
            <div class="feature-label">{{ feature[0] }}</div>
            <div class="feature-value">
              {% if feature[1][vendor_index].source %}
              <p><a title="{{ feature[1][vendor_index].detail }}" href="{{ feature[1][vendor_index].source }}">{{ feature[1][vendor_index].answer }}</a></p>
              {% else %}
              <p>{{ feature[1][vendor_index].answer }}</p>
              {% endif %}
            </div>
          </div>
          {% endif %}
        {% endfor %}
      </div>
      
      <!-- Team & Users Group -->
      <div class="feature-group">
        <h5>Collaboration</h5>
        {% set team_features = ["# of Team Members","Team SSO Available","# of Users","User SSO Available"] %}
        {% for feature in ssg.features %}
feature[0] in           {% if team_features %}
          <div class="feature-item">
            <div class="feature-label">{{ feature[0] }}</div>
            <div class="feature-value">
              {% if feature[1][vendor_index].source %}
              <p><a title="{{ feature[1][vendor_index].detail }}" href="{{ feature[1][vendor_index].source }}">{{ feature[1][vendor_index].answer }}</a></p>
              {% else %}
              <p>{{ feature[1][vendor_index].answer }}</p>
              {% endif %}
            </div>
          </div>
          {% endif %}
        {% endfor %}
      </div>
      
      <!-- Additional Features Group -->
      <div class="feature-group">
        <h5>Extras</h5>
        {% set extra_features = ["Form Submissions/Month","Analytics","Split A/B Testing","Allowed for Business Use"] %}
        {% for feature in ssg.features %}
feature[0] in           {% if extra_features %}
          <div class="feature-item {% if feature[0] == 'Allowed for Business Use' %}critical-feature{% endif %}">
            <div class="feature-label">{{ feature[0] }}</div>
            <div class="feature-value">
              {% if feature[1][vendor_index].source %}
              <p><a title="{{ feature[1][vendor_index].detail }}" href="{{ feature[1][vendor_index].source }}">{{ feature[1][vendor_index].answer }}</a></p>
              {% else %}
              <p>{{ feature[1][vendor_index].answer }}</p>
              {% endif %}
            </div>
          </div>
          {% endif %}
        {% endfor %}
      </div>
    </div>
  </div>
  {% set vendor_index = vendor_index + 1 %}
  {% endfor %}
</div>

<script>
let selectedVendors = [];
const maxVendors = 2;

function showTable() {
  document.getElementById('comparison-table').style.display = 'block';
  document.getElementById('vendor-cards').style.display = 'none';
  document.getElementById('table-btn').classList.add('active');
  document.getElementById('cards-btn').classList.remove('active');
  updateTableVisibility();
}

function showCards() {
  document.getElementById('comparison-table').style.display = 'none';
  document.getElementById('vendor-cards').style.display = 'grid';
  document.getElementById('table-btn').classList.remove('active');
  document.getElementById('cards-btn').classList.add('active');
  updateCardVisibility();
}

function handleVendorSelection(checkbox) {
  const vendor = checkbox.value;
  const isChecked = checkbox.checked;
  
  if (isChecked) {
    if (selectedVendors.length >= maxVendors) {
      // If we're at the limit, uncheck this box and show a message
      checkbox.checked = false;
      alert(`You can only select up to ${maxVendors} vendors for comparison.`);
      return;
    }
    selectedVendors.push(vendor);
  } else {
    selectedVendors = selectedVendors.filter(v => v !== vendor);
  }
  
  // Update visual state
  updateCheckboxStyles();
  
  // Update the displayed content based on current view
  const isTableView = document.getElementById('table-btn').classList.contains('active');
  if (isTableView) {
    updateTableVisibility();
  } else {
    updateCardVisibility();
  }
}

function updateCheckboxStyles() {
  const checkboxes = document.querySelectorAll('.vendor-checkbox');
  checkboxes.forEach(label => {
    const checkbox = label.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
      label.classList.add('checked');
    } else {
      label.classList.remove('checked');
    }
  });
}

function updateTableVisibility() {
  const table = document.querySelector('#comparison-table table');
  if (!table) return;
  
  const headers = table.querySelectorAll('thead th');
  const rows = table.querySelectorAll('tbody tr');
  
  // Show/hide columns based on selected vendors
  headers.forEach((header, index) => {
    if (index === 0) return; // Always show the "Feature" column
    
    const vendorName = header.textContent.trim();
    const shouldShow = selectedVendors.length === 0 || selectedVendors.includes(vendorName);
    header.style.display = shouldShow ? '' : 'none';
  });
  
  // Show/hide corresponding cells in each row
  rows.forEach(row => {
    const cells = row.querySelectorAll('td, th');
    cells.forEach((cell, index) => {
      if (index === 0) return; // Always show the feature name column
      
      const headers = table.querySelectorAll('thead th');
      const vendorName = headers[index] ? headers[index].textContent.trim() : '';
      const shouldShow = selectedVendors.length === 0 || selectedVendors.includes(vendorName);
      cell.style.display = shouldShow ? '' : 'none';
    });
  });
}

function updateCardVisibility() {
  const cards = document.querySelectorAll('.vendor-card');
  cards.forEach(card => {
    const vendorName = card.querySelector('h3').textContent.trim();
    const shouldShow = selectedVendors.length === 0 || selectedVendors.includes(vendorName);
    card.style.display = shouldShow ? 'block' : 'none';
  });
}

// Initialize with first 2 vendors selected
document.addEventListener('DOMContentLoaded', function() {
  const checkboxes = document.querySelectorAll('.vendor-checkbox input[type="checkbox"]');
  checkboxes.forEach((checkbox, index) => {
    if (index < maxVendors && checkbox.checked) {
      selectedVendors.push(checkbox.value);
    }
  });
  updateCheckboxStyles();
  updateTableVisibility();
});
</script>

## Comments



> **[yashwanth2804](https://github.com/yashwanth2804)** commented [on Jul 3, 2021](https://github.com/jacebenson/jace.pro/issues/260#issuecomment-873416684)
>
> Great JOB, please also include the if the free tire allows to have commercial website

> **[jacebenson](https://github.com/jacebenson)** commented [on Jul 6, 2021](https://github.com/jacebenson/jace.pro/issues/260#issuecomment-875032990)
>
> [@yashwanth2804](https://github.com/yashwanth2804) I thought I did include that.. Allowed for Business Use is the label.
>
> I can relabel it or you can make a PR.
>
> Just modify this file as needed. [https://github.com/jacebenson/jace.pro/blob/master/src/_data/ssg.js](https://github.com/jacebenson/jace.pro/blob/master/src/_data/ssg.js)

> **[fmartins-andre](https://github.com/fmartins-andre)** commented [on Aug 18, 2021](https://github.com/jacebenson/jace.pro/issues/260#issuecomment-901362924)
>
> Vercel free tier is not allowed to business use! Netlify and CloudFlare Pages are.\
> These I checked.

> **[jacebenson](https://github.com/jacebenson)** commented [on Aug 18, 2021](https://github.com/jacebenson/jace.pro/issues/260#issuecomment-901602297)
>
> Thanks I'll update the page

> **[jacebenson](https://github.com/jacebenson)** commented [on Aug 19, 2021](https://github.com/jacebenson/jace.pro/issues/260#issuecomment-901962252)
>
> Can you share your sources for this?
>
> **[fmartins-andre](https://github.com/fmartins-andre)** commented [on Aug 19, 2021](https://github.com/jacebenson/jace.pro/issues/260#issuecomment-902107504)
>
> <https://vercel.com/docs/platform/fair-use-policy#commercial-usage>
>
> Here, mate.\
> I didn't find anything like this in Netlify or Cloudflare Pages.

> **[jacebenson](https://github.com/jacebenson)** commented [on Aug 19, 2021](https://github.com/jacebenson/jace.pro/issues/260#issuecomment-902182720)
>
> For Vercel, I didn't see that when I looked before.\
> I've updated it.
>
> I looked again for Cloudflare, they dont say aynthing one way or the other. Where as Github explicitly says you can't. So I'm making an assumption. Below the table I add a comment to each element.
>
> I looked again at Netlify and like you said it's not explicitly stated, but they also don't say you cannot. There's a post about it on their answers site here where they say, don't [break the TOS and you wont have an issue](https://answers.netlify.com/t/is-the-free-tier-safe-for-client-projects/13535)

> **[fmartins-andre](https://github.com/fmartins-andre)** commented [on Aug 19, 2021](https://github.com/jacebenson/jace.pro/issues/260#issuecomment-902190872)
>
> I think it's secure to assume that if they say nothing, you can use it for business purposes. But it seems to these free tier solutions are all under the same kind of discretion about the termination of the offer. Vercel also has some statements about this:
>
> > 4. Hobby Plan. We offer a free hobby plan at our sole discretion. We may change the terms and conditions applicable to the hobby plan or discontinue offering the hobby plan at any time. We reserve the right to disable or remove any project or website deployment on the hobby plan with or without notice at our sole discretion. We may shut down and terminate projects or deployments using the hobby plan without notice for any reason or no reason.(...)\
> >    --(<https://vercel.com/legal/terms>)

> **[dacog](https://github.com/dacog)** commented [on Oct 21, 2021](https://github.com/jacebenson/jace.pro/issues/260#issuecomment-948915832)
>
> Great comparison! Thank you!

<!--EndFragment-->