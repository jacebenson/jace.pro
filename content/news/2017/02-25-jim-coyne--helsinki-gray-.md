---
title: "Helsinki Gray UI Theme"
date: 2017-02-24T13:56:13.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=40dd26e9dbd0dbc01dcaf3231f96197e"
---
<p style="font-family: arial, sans-serif; color: #666666;"><span style="font-style: inherit; font-family: inherit;"><strong>Other posts related to Themes<br /></strong></span><a class="jive_macro jive_macro_blogpost" title="Istanbul Theme Properties Visual Guide" href="community?id&#61;community_blog&amp;sys_id&#61;de5eaaaddbd0dbc01dcaf3231f96193c" rel="nofollow">Istanbul Theme Properties Visual Guide<br /></a><a class="jive_macro jive_macro_blogpost" title="Jakarta Theme Properties Visual Guide" href="community?id&#61;community_blog&amp;sys_id&#61;a7ace625dbd0dbc01dcaf3231f96195e" rel="nofollow">Jakarta Theme Properties Visual Guide<br /></a><a class="jive_macro jive_macro_blogpost" title="Kingston Theme Properties Visual Guide" href="community?id&#61;community_blog&amp;sys_id&#61;afcda2e9dbd0dbc01dcaf3231f9619e8" rel="nofollow">Kingston Theme Properties Visual Guide<br /></a><a href="community?id&#61;community_blog&amp;sys_id&#61;92381ed4dba423400be6a345ca9619df" rel="nofollow">London Theme Properties Visual Guide</a><a class="jive_macro jive_macro_blogpost" title="Kingston Theme Properties Visual Guide" href="community?id&#61;community_blog&amp;sys_id&#61;afcda2e9dbd0dbc01dcaf3231f9619e8" rel="nofollow"><br /></a></p>
<p style="font-family: arial, sans-serif; color: #666666;">I&#39;ve been spending some time lately working on a new Theme for Helsinki.   I ended up spending way too much time because it took a while to understand what elements were affected by the different properties in the Theme files.   I was originally inspired by <a class="jive_macro jive_macro_user" title="James.Neale" href="community?id&#61;community_user_profile&amp;user&#61;5cc1daaddb981fc09c9ffb651f961987" rel="nofollow">James.Neale</a>&#39;s Theme on the Share site - <a title="hare.servicenow.com/app.do#/detailV2/29f831e57c1d52007c393e4ab6de3445/overview" href="https://share.servicenow.com/app.do#/detailV2/29f831e57c1d52007c393e4ab6de3445/overview" rel="nofollow">Magnum</a>.</p>
<p>I say it&#39;s for Helsinki only because Istanbul kinda messes things up and reverses the gray and whites as well as changes the properties that the background elements on the Nav and side bars use so it does not quite look the same.   Another reason it took me a while to figure it all out.</p>
<p>This is what it looks like:</p>
<p><img class="image-1 jive-image" style="width: 423px; height: 362.279px;" src="30c4284adb9457041dcaf3231f961974.iix" width="423" height="362" /></p>
<p> </p>
<p>Clean and simple (I think).   I like the light gray background of the Applications and white for the Modules.   Makes it easy to differentiate between the two.   The gray matches the gray in the list and form views.   It ends up looking very similar to the OOB system Themes for Fuji and UI15.   It also seems less aggressive than the UI16 default one.   You can change the banner color to match whatever corporate colors you use.</p>
<p> </p>
<p>The only thing I&#39;m not too crazy about is the Nav bar search text color:</p>
<p><img class="image-2 jive-image" style="max-width: 1200px; max-height: 900px;" src="8014c082db58db048c8ef4621f961931.iix" /></p>
<p> </p>
<p>The problem is the same CSS property (<span style="color: #000000; font-family: Consolas, &#39;Courier New&#39;, Courier, mono, serif; font-size: 12px; background-color: #f6f6f6;">$search-text-color</span>) is used for all three search boxes - Nav bar, Global Search and Connect chat.   The color could be made darker depending on the color used in the banner.   If it&#39;s dark, then the text color has to be light to be visible in the Global Search box, but not too light because it would disappear in the Nav bar.  </p>
<p> </p>
<p>Here&#39;s the CSS I ended up coming up with:</p>
<p> </p>
<pre class="language-javascript"><code>/* Helsinki Gray
      Created by Jim Coyne - https://community.servicenow.com/people/jim.coyne
      Inspired by James Neale&#39;s &#34;Magnum&#34; Theme:
              https://share.servicenow.com/app.do#/detailV2/29f831e57c1d52007c393e4ab6de3445/overview

      The comments include a copy of the UI16 default value:
              https://docs.servicenow.com/bundle/istanbul-servicenow-platform/page/administer/navigation-and-ui/reference/r_DefaultCSSStyle.html#r_DefaultCSSStyle

      I&#39;ve added my own comments within () to hopefully clarify what is affected by the color

*/
 

/* Header Colors */
$navpage-header-bg: #1c3857   /* #303a46   Topbar background color (the banner) */
$navpage-header-color: #ffffff   /* #ffffff   Topbar text color and history hover color (Title text and Global Search icon outline) */
$navpage-header-divider-color: #455464   /* #455464   Bottom border color on topbar (banner separator line) */
$navpage-button-color:   #777777   /* #ffffff   Default button/icon colors   (Nav bar buttons) */
$navpage-button-color-hover: #7ec24F /* #7ec24F   Topbar buttons hover color (Global Search icon and Nav bar button hover) */

 
/* Search Colours */
$search-text-color: #bbbbbb /* #e7e9eb   Search text color (&#43; filter icon &#43; Connect msg record display value) */
$navpage-nav-border: #bbbbbb   /* #dddddd   Color of outline for search (search box outline) */
 

/* Left nav and navigation toolbar background color */
$nav-highlight-main: #1c3857   /* #3D4853   Navigator hover color (App/Module hover background) */
$subnav-background-color: #ffffff   /* #455464   Background for expanded navigation items (Modules background) */
$navpage-nav-bg: #e6e8ea   /* #303a46   Background for navigator (left side only). (Nav/side bar and App backgrounds) */
$navpage-nav-bg-sub: #ffffff   /* #455464   Background for Favorites list, history list, and Connect list background. */
$navpage-nav-color-sub: #4d4d4d   /* #bec1c6   Text color in main navigation (Module text &#43; favorite icon hover) */
$navpage-nav-mod-text-hover: #ffffff   /* #ffffff   Text color when hovering over items in main nav (App/Module hover text) */
$nav-hr-color: #303a46   /* #303a46   Divider color in Navigator (Separator module [ones without a label]) */
 

/* Navigator tabs */
$nav-highlight-bar-active: #2871b8   /* #278efc   Active nav item underneath search (thin line under selected Apps, Favorites or History icon &#43; Connect, Help or Gear icon hover and selected &#43; number of Connect msgs dot) */
$nav-highlight-bar-inactive:   #eaeaea   /* #828890   Inactive nav items underneath search (thin line under Apps, Favorites or History icon when not selected) */
$navpage-nav-selected-bg: #979a9b   /* #4b545F   Background for currently selected navigation item underneath search (background for selected Apps, Favorites or History icon) */
$navpage-nav-selected-color: #ffffff   /* #ffffff   Color of icon for currently active nav item. (Apps, Favorites or History icon when   selected) */
$navpage-nav-unselected-color: #737373   /* #bec1c6   Color of icons for non inactive nav items. (Apps, Favorites or History icon when not selected and Module text)   */


/* Navigator Application text */
$connect-latest-message: #777777   /* #cfd4d8   Color for latest connect messages in right bar. (Last Connect msg in Connect bar) */
$nav-timeago-header-color: #316198   /* #303a46   Timestamp header backgrounds in History tab*/
$navpage-nav-app-text: #272428   /* #cfd4d8   Core content text color (Application and Favorite text) */
$navpage-nav-app-text-hover: #ffffff   /* #ffffff   Core content text color hover (NO IDEA) */</code></pre>
<p> </p>
<p>Now while I was experimenting with the colors and properties, I also built this other Theme called &#34;Helsinki Test&#34;:</p>
<p><img class="image-3 jive-image" style="max-width: 1200px; max-height: 900px; width: 667px; height: 319.509px;" src="64d42fb5db1493041dcaf3231f9619d0.iix" width="667" height="320" /></p>
<p>Please, please, please do not use it for real as it may damage your eyesight.     But seriously, it looks terrible, but it might help you understand the different elements that are affected by the CSS.   I used the standard HTML color names to make it easier to spot where they are used.   Here&#39;s the CSS for it as well:</p>
<pre class="language-javascript"><code>/* Helsinki Test

      This is to help show what elements are affected by the CSS colors - Please, please, please do not actually use this theme for real   :-)

      It uses the HTML color names to hopefully make it a little easier to understand

      Created by Jim Coyne - https://community.servicenow.com/people/jim.coyne

      The comments include a copy of the UI16 default value:
              https://docs.servicenow.com/bundle/istanbul-servicenow-platform/page/administer/navigation-and-ui/reference/r_DefaultCSSStyle.html#r_DefaultCSSStyle

      I&#39;ve added my own comments within () to hopefully clarify what is affected by the color

*/


/* Header Colors */
$navpage-header-bg: DodgerBlue   /* #303a46   Topbar background color (the banner) */
$navpage-header-color: Yellow /* #ffffff   Topbar text color and history hover color (Title text and Global Search icon outline) */
$navpage-header-divider-color: FireBrick /* #455464   Bottom border color on topbar (banner separator line) */
$navpage-button-color:   BlueViolet /* #ffffff   Default button/icon colors   (Nav bar buttons) */
$navpage-button-color-hover: Green /* #7ec24F   Topbar buttons hover color (Global Search icon and Nav bar button hover) */
 

/* Search Colours */
$search-text-color: LightGreen/* #e7e9eb   Search text color (&#43; filter icon &#43; Connect msg record display value) */
$navpage-nav-border: Magenta   /* #dddddd   Color of outline for search (search box outline) */

 
/* Left nav and navigation toolbar background color */
$nav-highlight-main: LightSkyBlue /* #3D4853   Navigator hover color (App/Module hover background) */
$subnav-background-color: SlateGray /* #455464   Background for expanded navigation items (Modules background) */
$navpage-nav-bg: BurlyWood /* #303a46   Background for navigator (left side only). (Nav/side bar and App backgrounds) */
$navpage-nav-bg-sub: Pink /* #455464   Background for Favorites list, history list, and Connect list background. */
$navpage-nav-color-sub: Tomato   /* #bec1c6   Text color in main navigation (Module text &#43; favorite icon hover) */
$navpage-nav-mod-text-hover: Purple /* #ffffff   Text color when hovering over items in main nav (App/Module hover text) */
$nav-hr-color: YellowGreen /* #303a46   Divider color in Navigator (Separator module [ones without a label]) */


/* Navigator tabs */
$nav-highlight-bar-active: Red /* #278efc   Active nav item underneath search (thin line under selected Apps, Favorites or History icon &#43; Connect, Help or Gear icon hover and selected &#43; number of Connect msgs dot) */
$nav-highlight-bar-inactive:   PaleGoldenRod   /* #828890   Inactive nav items underneath search (thin line under Apps, Favorites or History icon when not selected) */
$navpage-nav-selected-bg: Olive /* #4b545F   Background for currently selected navigation item underneath search (background for selected Apps, Favorites or History icon) */
$navpage-nav-selected-color: OrangeRed /* #ffffff   Color of icon for currently active nav item. (Apps, Favorites or History icon when   selected) */
$navpage-nav-unselected-color: Orange   /* #bec1c6   Color of icons for non inactive nav items. (Apps, Favorites or History icon when not selected and Module text)   */


/* Navigator Application text */
$connect-latest-message: White   /* #cfd4d8   Color for latest connect messages in right bar. (Last Connect msg in Connect bar) */
$nav-timeago-header-color: Cyan   /* #303a46   Timestamp header backgrounds in History tab*/
$navpage-nav-app-text: Black   /* #cfd4d8   Core content text color (Application and Favorite text) */
$navpage-nav-app-text-hover: #ffffff   /* #ffffff   Core content text color hover (NO IDEA) */</code></pre>
<p> </p>