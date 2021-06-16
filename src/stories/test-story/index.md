---
  "title": "Joy of Jace"
  "publisher": "Jace"
  "publisher-logo-src" : "assets/AMP-Brand-White-Icon.svg"
  "poster-portrait-src": "assets/cover.jpg"
  "date": 2021-06-05T23:25:57-05:00
  eleventyExcludeFromCollections: true
---

<amp-story-page id="cover">
  <!-- Each amp-story-page component must have at least one or more layer components, which stack upon one another to create visual effects. -->
  <amp-story-grid-layer template="fill">
    <amp-img
      src="assets/cover.jpg"
      width="720"
      height="1280"
      layout="responsive"
    >
    </amp-img>
  </amp-story-grid-layer>
  <amp-story-grid-layer template="vertical">
    <h1>{{title}}</h1>
    <p>By {{publisher}}</p>
  </amp-story-grid-layer>
</amp-story-page>

<!-- Page 1 (Cat): 1 layer (vertical) -->
<amp-story-page id="page1">
  <amp-story-grid-layer template="vertical">
    <h1>Cats</h1>
    <amp-img
      src="assets/cat.jpg"
      width="720"
      height="1280"
      layout="responsive"
    >
    </amp-img>
    <q
      >Dogs come when they're called. Cats take a message and get back to
      you. --Mary Bly</q
    >
  </amp-story-grid-layer>
</amp-story-page>

<!-- Page 2 (Dog): 2 layers (fill + thirds) -->
<amp-story-page id="page2">
  <amp-story-grid-layer template="fill">
    <amp-img
      src="assets/dog.jpg"
      width="720"
      height="1280"
      layout="responsive"
    >
    </amp-img>
  </amp-story-grid-layer>
  <amp-story-grid-layer template="thirds">
    <h1 grid-area="upper-third">Dogs</h1>
    <p grid-area="lower-third">
      Dogs were probably the first tame animals. They have accompanied
      humans for some 10,000 years. Some scientists assert that all dogs,
      domestic and wild, share a common ancestor in the small South Asian
      wolf.
    </p>
  </amp-story-grid-layer>
</amp-story-page>

<!-- Page 3 (Bird): 3 layers (fill + vertical + vertical) + Audio-->
<amp-story-page id="page3" background-audio="assets/bird-singing.mp3">
  <amp-story-grid-layer template="fill">
    <amp-img
      src="assets/bird.jpg"
      width="720"
      height="1280"
      layout="responsive"
    >
    </amp-img>
  </amp-story-grid-layer>
  <amp-story-grid-layer template="vertical">
    <h1>Birds</h1>
  </amp-story-grid-layer>
  <amp-story-grid-layer template="vertical" class="bottom">
    <q
      >A bird is three things: Feathers, flight and song, And feathers are
      the least of these.--Marjorie Allen Seiffert
    </q>
  </amp-story-grid-layer>
</amp-story-page>

<!-- Page 4 (Rabbit): 3 layers (fill (video) + vertical + vertical) -->
<amp-story-page id="page4">
  <amp-story-grid-layer template="fill">
    <amp-video
      autoplay
      loop
      width="720"
      height="1280"
      poster="assets/rabbit.jpg"
      layout="responsive"
    >
      <source src="assets/rabbit.mp4" type="video/mp4" />
    </amp-video>
  </amp-story-grid-layer>
  <amp-story-grid-layer template="vertical">
    <h1>Rabbits</h1>
  </amp-story-grid-layer>
  <amp-story-grid-layer template="vertical" class="bottom">
    <p>
      Rabbits can learn to follow simple voice commands and come when
      called by name, and are curious and playful.
    </p>
  </amp-story-grid-layer>
</amp-story-page>

<!-- Page 5 (Collage): 2 layers + animations -->
<amp-story-page id="page5">
  <amp-story-grid-layer template="vertical" class="noedge">
    <div class="wrapper">
      <amp-img
        src="assets/cat.jpg"
        width="720"
        height="1280"
        layout="responsive"
        animate-in="fade-in"
        animate-in-delay="0.4s"
      >
      </amp-img>
      <amp-img
        src="assets/dog.jpg"
        width="720"
        height="1280"
        layout="responsive"
        animate-in="fade-in"
        animate-in-delay="0.6s"
      >
      </amp-img>
      <amp-img
        src="assets/bird.jpg"
        width="720"
        height="1280"
        layout="responsive"
        animate-in="fade-in"
        animate-in-delay="0.8s"
      >
      </amp-img>
      <amp-img
        src="assets/rabbit.jpg"
        width="720"
        height="1280"
        layout="responsive"
        animate-in="fade-in"
        animate-in-delay="1.0s"
      >
      </amp-img>
    </div>
  </amp-story-grid-layer>
  <amp-story-grid-layer template="vertical" class="center-text">
    <p class="banner-text" animate-in="whoosh-in-right">
      Pets can lower your stress levels!
    </p>
  </amp-story-grid-layer>
</amp-story-page>

<!-- The bookend is the correct way to properly bring a clean, shareable end to the Web Story. -->
<!-- Bookend -->
<amp-story-bookend src="bookend.json" layout="nodisplay">
  <!-- View the associated json file to understand the linking here. -->
</amp-story-bookend>