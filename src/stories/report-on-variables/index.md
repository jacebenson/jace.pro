---
  "title": "Show catalog variables in a list"
  "publisher": "Jace"
  "publisher-logo-src" : "assets/AMP-Brand-White-Icon.svg"
  "poster-portrait-src": "assets/ilya-pavlov-IcclLmLQuw8-unsplash.jpg"
  "date": 2021-06-05T23:45:57-05:00
---
<!--
1.  Mp4 showing variables in a list.
    1.  Need screenshot
2.  First open a list of items using the same item.  (gif)
    1.  Create gif loading a list of items
3.  Then create a report
    1.  Create a gif showing the right-click bar chart
4.  Next change report type to list
    1.  screenshot with highlights
5.  Remove the group by, customize the columns
    1.  screenshot with highlights
6.  See the magical "Variables" and add them
    1.  Create a gif showing the variables
7.  BONUS - make the link work out of reports
    1.  screenshot highlighting this
8.  add group by "active", then click the grouped link.done
    1.  gif
-->
<amp-story-page id="cover">
  <!-- Each amp-story-page component must have at least one or more layer components, which stack upon one another to create visual effects. -->
  <amp-story-grid-layer template="fill">
    <amp-img
      src="assets/ilya-pavlov-IcclLmLQuw8-unsplash.jpg"
      width="720"
      height="1280"
      layout="responsive"
    >
    </amp-img>
  </amp-story-grid-layer>
  <amp-story-grid-layer template="vertical">
  <div style="background-color: rgba(0, 0, 0, 0.66); padding: 5px;">
    <h1>{{title}}</h1>
    <p>By {{publisher}}</p>
    </div>
  </amp-story-grid-layer>
</amp-story-page>

<!-- Page 1 LIST your items B ROLL -->
<amp-story-page id="page1">
  <amp-story-grid-layer template="fill">
    <amp-img
      src="assets/austin-distel-Imc-IoZDMXc-unsplash.jpg"
      width="720"
      height="1280"
      layout="responsive"
    >
    </amp-img>
  </amp-story-grid-layer>
  <amp-story-grid-layer template="thirds">
    <h1 grid-area="upper-third"><span  style="background-color: rgba(0, 0, 0, 0.66); padding: 5px;">List your items</span></h1>
    <p grid-area="lower-third" style="background-color: rgba(100, 100, 100, 0.66); padding: 5px;">
      First get a list of items you want to work with.  Go ahead I'll wait.
    </p>
  </amp-story-grid-layer>
</amp-story-page>

<!-- Page 2 List your items actual -->
<amp-story-page id="page2">
  <amp-story-grid-layer template="fill">
    <amp-video
      autoplay
      loop
      width="720"
      height="1280"
      poster="assets/list-your-items.png"
      layout="responsive"
    >
      <source src="assets/list-your-items.mp4" type="video/mp4" />
    </amp-video>
    </amp-img>
  </amp-story-grid-layer>
</amp-story-page>

<!-- Page 3 B Roll Create a report-->
<amp-story-page id="page3">
  <amp-story-grid-layer template="fill">
    <amp-img
      src="assets/david-boca-wh7ruevEmrY-unsplash.jpg"
      width="720"
      height="1280"
      layout="responsive"
    >
    </amp-img>
  </amp-story-grid-layer>
  <amp-story-grid-layer template="thirds">
    <h1 grid-area="upper-third"><span  style="background-color: rgba(0, 0, 0, 0.66); padding: 5px;">Create a Report</span></h1>
    <ul grid-area="lower-third" style="background-color: rgba(100, 100, 100, 0.66); padding: 5px;">
  <li>Create a report 📈 to access the variables.</li>
  <li>Change the type to list.</li>
  <li>Remove the group by.</li>
  </ul>
  </amp-story-grid-layer>
</amp-story-page>

<!-- Page 4 Create a report video -->
<amp-story-page id="page4">
  <amp-story-grid-layer template="fill">
    <amp-video
      autoplay
      loop
      width="720"
      height="1280"
      poster="assets/make-it-a-report.png"
      layout="responsive"
    >
      <source src="assets/make-it-a-report.mp4" type="video/mp4" />
    </amp-video>
    </amp-img>
  </amp-story-grid-layer>
</amp-story-page>

<!-- Page 5 B Roll Add Columns-->
<amp-story-page id="page5">
  <amp-story-grid-layer template="fill">
    <amp-img
      src="assets/t-s-zRF033lvm8s-unsplash.jpg"
      width="720"
      height="1280"
      layout="responsive"
    >
    </amp-img>
  </amp-story-grid-layer>
  <amp-story-grid-layer template="thirds">
    <h1 grid-area="upper-third"><span  style="background-color: rgba(0, 0, 0, 0.66); padding: 5px;">Add variables 🚀</span></h1>
  </amp-story-grid-layer>
</amp-story-page>

<!-- Page 6 Add columns video -->
<amp-story-page id="page6">
  <amp-story-grid-layer template="fill">
    <amp-video
      autoplay
      loop
      width="720"
      height="1280"
      poster="assets/add-columns.png"
      layout="responsive"
    >
      <source src="assets/add-columns.mp4" type="video/mp4" />
    </amp-video>
    </amp-img>
  </amp-story-grid-layer>
</amp-story-page>

<!-- Page 7 Congrats-->
<amp-story-page id="page7">
  <amp-story-grid-layer template="fill">
    <amp-img
      src="assets/congrats.png"
      width="720"
      height="1280"
      layout="responsive"
    >
    </amp-img>
  </amp-story-grid-layer>
  <amp-story-grid-layer template="thirds">
    <h1 grid-area="upper-third"><span  style="background-color: rgba(0, 0, 0, 0.66); padding: 5px;">You did it! 🎉🎉</span></h1>
  </amp-story-grid-layer>
</amp-story-page>

<!-- The bookend is the correct way to properly bring a clean, shareable end to the Web Story. -->
<!-- Bookend -->
<amp-story-bookend src="bookend.json" layout="nodisplay">
  <!-- View the associated json file to understand the linking here. -->
</amp-story-bookend>