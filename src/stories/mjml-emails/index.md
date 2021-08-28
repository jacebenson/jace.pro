---
  "title": "Using MJML to make beautiful emails"
  "publisher": "Jace"
  "publisher-logo-src" : "assets/AMP-Brand-White-Icon.svg"
  "poster-portrait-src": "assets/ilya-pavlov-IcclLmLQuw8-unsplash.jpg"
  "date": 2021-06-05T23:45:57-05:00
  "tags": draft
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
    <h1 grid-area="upper-third"><span  style="background-color: rgba(0, 0, 0, 0.66); padding: 5px;">Pick a notification</span></h1>
    <p grid-area="lower-third" style="background-color: rgba(100, 100, 100, 0.66); padding: 5px;">
      I picked "Verify your email" for this.  Note the actions available in the email (e.g. Unsub, Manage Prefs, etc)
    </p>
  </amp-story-grid-layer>
</amp-story-page>

<!-- Page 2 List your items actual -->
<amp-story-page id="page2">
  <amp-story-grid-layer template="fill">
        <amp-img
      src="assets/new-user-before-mobile.png"
      width="720"
      height="1280"
      layout="responsive"
    >
    </amp-img>
    </amp-img>
  </amp-story-grid-layer>
</amp-story-page>

<!-- Page 3 B Roll Create a report-->
<amp-story-page id="page3">
  <amp-story-grid-layer template="fill">
    <amp-img
      src="assets/new-user-before.pngasdf"
      width="300"
      height="523"
      layout="responsive"
    >
    </amp-img>
  </amp-story-grid-layer>
  <amp-story-grid-layer template="thirds">
    <h1 grid-area="upper-third"><span  style="background-color: rgba(0, 0, 0, 0.66); padding: 5px;">What it's purpose?</span></h1>
    <ul grid-area="lower-third" style="background-color: rgba(100, 100, 100, 0.66); padding: 5px;">
  <li>Have the user take some action</li>
  <li>Inform the user</li>
  <li>Unsubscribe</li>
  <li>Manager preferences</li>
  </ul>
  </amp-story-grid-layer>
</amp-story-page>

<!-- Page 3 B Roll Create a report-->
<amp-story-page id="page3">
  <amp-story-grid-layer template="fill">
    <amp-img
      src="assets/new-user-before.pngasdf"
      width="300"
      height="523"
      layout="responsive"
    >
    </amp-img>
  </amp-story-grid-layer>
  <amp-story-grid-layer template="thirds">
    <h1 grid-area="upper-third"><span  style="background-color: rgba(0, 0, 0, 0.66); padding: 5px;">Clear Purpose!</span></h1>
    <ul grid-area="lower-third" style="background-color: rgba(100, 100, 100, 0.66); padding: 5px;">
  <li>Be clear in what action you want taken</li>
  <li>If information, better be f'in important</li>
  <li>Unsubscribe (people need a way to opt out)</li>
  <li>Manager preferences</li>
  </ul>
  </amp-story-grid-layer>
</amp-story-page>

<!-- Page 1 LIST your items B ROLL -->
<amp-story-page id="page1">
  <amp-story-grid-layer template="fill">
    <amp-img
      src="assets/card-template-things-to-chanasdfge.jpg"
      width="720"
      height="1280"
      layout="responsive"
    >
    </amp-img>
  </amp-story-grid-layer>
  <amp-story-grid-layer template="thirds">
    <h1 grid-area="upper-third"><span  style="background-color: rgba(0, 0, 0, 0.66); padding: 5px;">Find a template</span></h1>
    <h1 grid-area="middle-third"><span  style="background-color: rgba(0, 0, 0, 0.66); padding: 5px;">Or make your own</span></h1>
    <p grid-area="lower-third" style="background-color: rgba(100, 100, 100, 0.66); padding: 5px;">
      It should include elements to match the purpose of the email.
    </p>
  </amp-story-grid-layer>
</amp-story-page>
<!-- Page 1 LIST your items B ROLL -->
<amp-story-page id="page1">
  <amp-story-grid-layer template="fill">
    <amp-img
      src="assets/card-template-things-to-chanasdfge.jpg"
      width="720"
      height="1280"
      layout="responsive"
    >
    </amp-img>
  </amp-story-grid-layer>
  <amp-story-grid-layer template="thirds">
    <h1 grid-area="upper-third"><span  style="background-color: rgba(0, 0, 0, 0.66); padding: 5px;">Own it!</span></h1>
    <p grid-area="middle-third" style="background-color: rgba(0, 0, 0, 0.66); padding: 5px;">
      It should include elements to match the purpose of the email.<br/>
      Load it up in their live editor and make it your own.
    </p>
  </amp-story-grid-layer>
    <amp-story-cta-layer>
    <a href="https://mjml.io/try-it-live/templates/card" class="button">Try it out here!</a>
  </amp-story-cta-layer>
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
    <p grid-area="upper-third" style="background-color: rgba(0, 0, 0, 0.66); padding: 5px;">
    Make Mail Scripts<br/>
    Email Layouts<br/>
    Email Template
    </p>
  </amp-story-grid-layer>
</amp-story-page>

<!-- Page 6 Add columns video -->
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
    <p grid-area="upper-third" style="background-color: rgba(0, 0, 0, 0.66); padding: 5px;">
    Break up the MJML html to;
    <ul><li>header</li><li>body</li><li>footer</li></ul><br/>
    Make your layout with the header and footer<br/>
    Make your template with the body
    </p>
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