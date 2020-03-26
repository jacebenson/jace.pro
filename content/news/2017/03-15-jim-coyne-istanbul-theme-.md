---
title: "Istanbul Theme Properties Visual Guide"
date: 2017-03-14T22:13:28.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=de5eaaaddbd0dbc01dcaf3231f96193c"
---
<p style="font-family: arial, sans-serif; color: #666666;"><span style="font-style: inherit; font-family: inherit;"><strong>Other posts related to Themes<br /></strong></span><span style="font-style: inherit; font-family: inherit;"><a class="jive_macro jive_macro_blogpost" title="" href="community?id&#61;community_blog&amp;sys_id&#61;40dd26e9dbd0dbc01dcaf3231f96197e" rel="nofollow">&#34;Helsinki Gray&#34; UI16 Theme<br /></a></span><span style="font-style: inherit; font-family: inherit;"><a class="jive_macro jive_macro_blogpost" title="Jakarta Theme Properties Visual Guide" href="community?id&#61;community_blog&amp;sys_id&#61;a7ace625dbd0dbc01dcaf3231f96195e" rel="nofollow">Jakarta Theme Properties Visual Guide<br /></a></span><span style="font-style: inherit; font-family: inherit;"><a class="jive_macro jive_macro_blogpost" title="Kingston Theme Properties Visual Guide" href="community?id&#61;community_blog&amp;sys_id&#61;afcda2e9dbd0dbc01dcaf3231f9619e8" rel="nofollow">Kingston Theme Properties Visual Guide<br /></a><br /></span></p>
<p style="font-family: arial, sans-serif; color: #666666;">In a previous post, <a class="jive_macro jive_macro_blogpost" title="" href="community?id&#61;community_blog&amp;sys_id&#61;40dd26e9dbd0dbc01dcaf3231f96197e" rel="nofollow">&#34;Helsinki Gray&#34; UI16 Theme</a>, I wrote about a new Theme I designed for Helsinki.   I tried to reproduce the look in Istanbul but ran into some issues because of changes to how the Theme properties are used on the controls.   So I spent some time trying to understand which properties set the color of what controls.   Took awhile to do and decided to share what I found here. </p>
<p><strong>Test Theme Record</strong></p>
<p>While trying to figure everything out, I created a new test Theme called &#34;Istanbul Test&#34;, similar to the one I created for <a title="" href="community?id&#61;community_blog&amp;sys_id&#61;40dd26e9dbd0dbc01dcaf3231f96197e" rel="nofollow">Helsinki</a>:</p>
<p><img class="image-3 jive-image" style="max-width: 1200px; max-height: 900px;" src="a373990adbd89f048c8ef4621f9619c9.iix" /></p>
<p> </p>
<p>I realize it&#39;s ugly.   Really ugly, but I made it that way in order for the different controls to stand out from each other, so it did have to be kinda crazy looking.   I used the standard HTML color names to make it easier to spot where they are used.   Here&#39;s the CSS for it:</p>
<pre class="language-javascript"><code>/* Istanbul Test
      Created by Jim Coyne - https://community.servicenow.com/people/jim.coyne

      This is to help show what elements are affected by the CSS colors - PLEASE, PLEASE, PLEASE DO NOT ACTUALLY USE THIS THEME FOR REAL   :-)

      It uses HTML color names to hopefully make it a little easier to understand and find the color

      The comments include a copy of the UI16 default value:
              https://docs.servicenow.com/bundle/istanbul-servicenow-platform/page/administer/navigation-and-ui/reference/r_DefaultCSSStyle.html

      I&#39;ve added my own comments within () to hopefully clarify what is affected by the color

*/

 
/* Header Colors */
$navpage-header-bg: DodgerBlue   /* #303a46   Topbar background color (the banner) */
$navpage-header-color: Aqua /* #ffffff   Topbar text color and history hover color (Banner title text, Global Search &#43; Application &#43; Update Set icon outlines) */
$navpage-header-button-color: Coral /* (Logged-in user name text &#43; Connect, Help and Settings icons) */
$navpage-header-divider-color: FireBrick /* #455464   Bottom border color on topbar (banner separator line) */
$navpage-button-color: BlueViolet /* #ffffff   Default button/icon colors   (Nav bar [maximized] buttons, Favorite and History 1st line text, Connect msg record display value and Create a new converstaion icon) */
$navpage-button-color-hover: Yellow /* #7ec24F   Topbar buttons hover color (Global Search, Connect, Help and Gear icons hover &#43; clear search text icon hover &#43; selected Nav bar icon [temporary effect only]) */

 
/* Search Colours */
$search-text-color: LightGreen /* #e7e9eb   Search text color (&#43; clear search text icon &#43; Nav bar [minimized] buttons) */
$navpage-nav-border: Magenta   /* #dddddd   Color of outline for search (Global, Nav and Connect search box outlines &#43; outline of logged-in user control when selected) */
 

/* Left nav and navigation toolbar background color */
$nav-highlight-main: LightSkyBlue /* #3D4853   Navigator hover color (Last Module/Favorite/History/Connect/Help item selected [temporary effect only]) */
$subnav-background-color: SlateGray /* #455464   Background for expanded navigation items (NO IDEA) */
$navpage-nav-bg: BurlyWood /* #303a46   Background for navigator (left side only). (Nav bar, Connect bar and Module backgrounds &#43; History separators) */
$navpage-nav-bg-sub: Pink /* #455464   Background for Favorites list, history list, and Connect list background. (background for Apps/Favorites/History and Connect/Help bars and selected icon when editing a favorite) */
$navpage-nav-color-sub: Tomato   /* #bec1c6   Text color in main navigation (NO IDEA) */
$navpage-nav-mod-text-hover: Purple /* #ffffff   Text color when hovering over items in main nav (NO IDEA) */
$nav-hr-color: YellowGreen /* #303a46   Divider color in Navigator (Separator module [ones without a label]) */

 
/* Navigator tabs */
$nav-highlight-bar-active: Red /* #278efc   Active nav item underneath search (thin line under selected Apps, Favorites or History icons, selected Connect, Help or Gear icon &#43; number of Connect msgs dot)   */
$nav-highlight-bar-inactive: PaleGoldenRod   /* #828890   Inactive nav items underneath search (thin line under Apps, Favorites or History icon when not selected) */
$navpage-nav-selected-bg: Olive /* #4b545F   Background for currently selected navigation item underneath search (background for selected Apps, Favorites or History icon) */
$navpage-nav-selected-color: OrangeRed /* #ffffff   Color of icon for currently active nav item. (Apps, Favorites or History icon when   selected) */
$navpage-nav-unselected-color: Orange   /* #bec1c6   Color of icons for non inactive nav items. (Apps, Favorites or History icon when not selected and Module title text)   */


/* Navigator Application text */
$connect-latest-message: White   /* #cfd4d8   Color for latest connect messages in right bar. (NO IDEA) */
$nav-timeago-header-color: Cyan   /* #303a46   Timestamp header backgrounds in History tab (NO IDEA) */
$navpage-nav-app-text: Black   /* #cfd4d8   Core content text color (Application title, History hover &#43; 2nd line text &#43; separator text, Connect &#34;OPEN CONVERSATIONS&#34; &#43; &#34;No results found&#34; &#43; message line text, Help bar title &#43; hover text) */
$navpage-nav-app-text-hover: #ffffff   /* #ffffff   Core content text color hover (NO IDEA) */</code></pre>
<p> </p>
<p>I used one of the OOB Theme records (I forget which one it was) as a starting point and added my own comments within () to hopefully clarify what is affected by the property.   Some of the comments from the OOB Theme are incorrect now in Istanbul.   I&#39;ve added a comment of &#34;NO IDEA&#34; to some of the properties because I do not know what they control now, and suspect they no longer affect anything.</p>
<p> </p>
<p>Here are the property names, along with it&#39;s default value, used in the Theme record and screenshots of the controls/areas they affect.   I used yellow as the value for each property so the controls would stand out in the screenshots (sorry for the flash of yellow about half-way down the article ).</p>
<p> </p>
<p><strong>$navpage-header-bg - #303a46</strong></p>
<ul><li>Banner frame background</li></ul>
<p><img class="image-41 jive-image" style="height: 64px; width: 862.769px;" src="3c835d02db5813043eb27a9e0f9619e1.iix" width="863" height="64" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-header-color - #ffffff</strong></p>
<ul><li>Banner frame title text</li><li>Global Search, Application and Update Set icon outlines</li></ul>
<p><img class="image-33 jive-image" style="height: 65px; width: 857.447px;" src="62ed23fddbd893049c9ffb651f96194b.iix" width="857" height="65" /></p>
<p> </p>
<p> </p>
<p><span style="color: #666666; font-family: arial, sans-serif;"><strong>$navpage-header-button-color (no default, not documented)</strong></span></p>
<ul><li>Logged-in user name text</li><li>Connect, Help and Settings icons</li></ul>
<p><img class="image-71 jive-image" style="height: 61px; width: 859.545px;" src="a9673c02db9cdfc03eb27a9e0f96193e.iix" width="860" height="61" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-header-divider-color - #455464</strong></p>
<ul><li>Banner frame separator line</li></ul>
<p><img class="image-20 jive-image" style="max-width: 1200px; max-height: 900px;" src="59cd8d0adb9413043eb27a9e0f96198d.iix" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-button-color - #ffffff</strong></p>
<ul><li>Buttons in the Navigator bar (when maximized)</li><li>Favorite items text</li><li>1st line of History items</li><li>Connect message record display value text</li><li>Create a New Conversation, Open Connect standalone interface and Close Connect Sidebar icons</li></ul>
<p><img class="image-23 jive-image" style="width: 215px; height: 423.04px;" src="59b7a3f9db181704ed6af3231f9619bf.iix" width="215" height="423" />         <img class="image-24 jive-image" style="width: 216px; height: 423.041px;" src="60d3d986dbd4d344e9737a9e0f961979.iix" width="216" height="423" />       <img class="jive-image image-25" style="width: 214px; height: 423.381px;" src="6d12f0c6db1097041dcaf3231f961957.iix" width="214" height="423" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-button-color-hover - #7ec24F</strong></p>
<ul><li>Global Search, Connect, Help and Settings icons when cursor is over the control (only the Global Search icon is highlighted in the first screenshot below but the others will highlight when the cursor is over them)</li><li>Clear search text icon when cursor is over the control in Navigator and Connect sidebar</li><li>Navigator bar icon when clicked (some browsers [e.g. Chrome] only remove the highlight after cursor is clicked elsewhere)</li></ul>
<p><img class="image-26 jive-image" style="max-width: 1200px; max-height: 900px;" src="82515846db9417041dcaf3231f961949.iix" /></p>
<p><img class="image-27 jive-image" style="max-width: 1200px; max-height: 900px;" src="3ed473f1db9cdfc0b322f4621f96194a.iix" />       <img class="jive-image image-29" style="max-width: 1200px; max-height: 900px;" src="c752994adb581b04ed6af3231f96193e.iix" /></p>
<p><img class="image-30 jive-image" style="width: 208px; height: 407.77px;" src="9daea406db949304b322f4621f961944.iix" width="208" height="408" /></p>
<p> </p>
<p> </p>
<p><strong>$search-text-color - #e7e9eb</strong></p>
<ul><li>Global Search, Navigator and Connect search text</li><li>Clear search text icon in Navigator and Connect search boxes</li><li>Navigator bar icons when minimized</li></ul>
<p><img class="image-15 jive-image" style="height: 101px; width: 869.722px;" src="5a3c488edb1c1344e9737a9e0f961946.iix" width="870" height="101" /></p>
<p><img class="image-70 jive-image" style="max-width: 1200px; max-height: 900px;" src="4d3bd50edb9c9f048c8ef4621f96196b.iix" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-nav-border - #dddddd</strong></p>
<ul><li>Global Search, Navigator and Connect search box outlines</li><li>Navigator and Connect search box filter icons</li><li>Outline of logged-in user control when selecting a drop-down menu item</li></ul>
<p><img class="image-31 jive-image" style="height: 70px; width: 923.582px;" src="550e8846db149704ed6af3231f9619cb.iix" width="924" height="70" /></p>
<p> </p>
<p><img class="jive-image image-18" style="width: 371px; height: 88.4159px;" src="28892ffddbd493049c9ffb651f9619b6.iix" width="371" height="88" /></p>
<p> </p>
<p> </p>
<p><strong>$nav-highlight-main - #3D4853</strong></p>
<ul><li>Module/Favorite (not in Safari)/History/Help item when clicked (each browser has its own quirks with this one - Safari only shows while clicking the item, others will keep the highlight a second or so, and some keep the Help item highlighted until the cursor is clicked elsewhere)</li><li>Selected Connect item (remains highlighted until another is selected or another record&#39;s chat window is selected or the record&#39;s chat window is closed)</li><li>Vertical separator line between main frame and Navigator/Sidebars</li></ul>
<p><img class="image-35 jive-image" style="max-width: 1200px; max-height: 900px;" src="f9bca8c2db18dfc03eb27a9e0f961908.iix" /><img class="jive-image image-36" style="max-width: 1200px; max-height: 900px;" src="873c8002db509fc03eb27a9e0f96194f.iix" />         <img class="image-37 jive-image" style="max-width: 1200px; max-height: 900px;" src="0d892b3ddb54dfc0b322f4621f9619a6.iix" /></p>
<p><img class="image-39 jive-image" style="max-width: 1200px; max-height: 900px;" src="2d0e484edb909fc068c1fb651f96193b.iix" />     <img class="image-38 jive-image" style="max-width: 1200px; max-height: 900px;" src="c6ae6cc6db58dfc03eb27a9e0f9619d4.iix" /></p>
<p><img class="image-34 jive-image" style="max-width: 1200px; max-height: 900px; width: 417px; height: 107.659px;" src="5483d502db981b04ed6af3231f9619bf.iix" width="417" height="108" /><img class="image-40 jive-image" style="width: 418px; height: 108.407px;" src="13ed2bb1db5c1704ed6af3231f961967.iix" width="418" height="108" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-nav-bg - #303a46</strong></p>
<ul><li>Navigator, Connect and Help Sidebar header and footers</li><li>Unselected Navigator tabs background</li><li>Module background</li><li>History time separator background</li></ul>
<p><img class="image-44 jive-image" style="width: 214px; height: 457.914px;" src="2abce08adb1c57041dcaf3231f961900.iix" width="214" height="458" /><img class="image-45 jive-image" style="width: 213px; height: 455.86px;" src="ef3cc48adb509fc068c1fb651f96196e.iix" width="213" height="456" /> <img class="image-46 jive-image" style="width: 213px; height: 418.623px;" src="b589e73ddb54dfc0b322f4621f9619eb.iix" width="213" height="419" /><img class="jive-image image-47" style="width: 213px; height: 416.111px;" src="0acd4506db1897049c9ffb651f9619cc.iix" width="213" height="416" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-nav-bg-sub - #455464</strong></p>
<ul><li>Navigator, Connect and Help Sidebar backgrounds</li><li>Background for Apps/Favorites/History</li><li>Selected icon when editing a Favorite</li></ul>
<p><img class="image-48 jive-image" style="height: 420px; width: 211.522px;" src="d6e6780edb989344e9737a9e0f96192d.iix" width="212" height="420" /> <img class="image-49 jive-image" style="width: 212px; height: 420.95px;" src="9943d40edbd417041dcaf3231f961914.iix" width="212" height="421" /> <img class="jive-image image-50" style="width: 212px; height: 420.95px;" src="a3d1f73ddb9c1fc03eb27a9e0f961948.iix" width="212" height="421" /></p>
<p><img class="image-51 jive-image" style="width: 211px; height: 415.884px;" src="063dd98edb9c97049c9ffb651f961938.iix" width="211" height="416" /> <img class="image-52 jive-image" style="width: 211px; height: 415.884px;" src="b039b0cedbdc5f048c8ef4621f9619ad.iix" width="211" height="416" /></p>
<p><img class="image-53 jive-image" style="width: 603px; height: 243.145px;" src="cb5b9482db9c17049c9ffb651f9619ba.iix" width="603" height="243" /></p>
<p> </p>
<p> </p>
<p><strong>$nav-hr-color - #303a46</strong></p>
<ul><li>Separator modules without a label</li></ul>
<p><img class="jive-image image-54" style="width: 216px; height: 427.068px;" src="0e29b335db145fc068c1fb651f961995.iix" width="216" height="427" /></p>
<p> </p>
<p> </p>
<p><strong>$nav-highlight-bar-active - #278efc</strong></p>
<ul><li>Highlight line under active Navigator tab (Apps, Favorites or History)</li><li>Selected Connect, Help or Settings icon (only the Connect icon is highlighted in the screenshot below but the others will highlight when clicked/selected)</li><li>Number of Connect messages dot</li><li>Outline of logged-in user control when selected</li></ul>
<p><img class="image-55 jive-image" style="max-width: 1200px; max-height: 900px;" src="603b950edb9c9f048c8ef4621f961975.iix" /><img class="jive-image image-58" style="max-width: 1200px; max-height: 900px;" src="5c269842db145344e9737a9e0f961911.iix" /></p>
<p><img class="image-57 jive-image" style="max-width: 1200px; max-height: 900px;" src="49677446db5cdfc068c1fb651f96199d.iix" /></p>
<p><img class="jive-image image-69" style="max-width: 1200px; max-height: 900px;" src="6e2973f1db501304b322f4621f96198a.iix" /></p>
<p> </p>
<p> </p>
<p><strong>$nav-highlight-bar-inactive - #828890</strong></p>
<ul><li>Line under inactive Navigator tab</li></ul>
<p><img class="image-59 jive-image" style="max-width: 1200px; max-height: 900px;" src="6b05f779dbd8df04e9737a9e0f96192e.iix" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-nav-selected-bg - #4b545F</strong></p>
<ul><li>Background for currently selected Navigator tab (Apps, Favorites or History)</li></ul>
<p><img class="image-60 jive-image" style="max-width: 1200px; max-height: 900px;" src="779751c6db90d7041dcaf3231f961989.iix" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-nav-selected-color - #ffffff</strong></p>
<ul><li>Active Navigator tab icon (Apps, Favorites or History)</li></ul>
<p><img class="jive-image image-61" style="max-width: 1200px; max-height: 900px;" src="8397b486dbdc57049c9ffb651f9619a6.iix" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-nav-unselected-color - #bec1c6</strong></p>
<ul><li>Inactive Navigator tab icons (Apps, Favorites or History)</li><li>Module title text</li></ul>
<p><img class="image-62 jive-image" style="max-width: 1200px; max-height: 900px;" src="f8051042db5817041dcaf3231f9619f1.iix" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-nav-app-text - #cfd4d8</strong></p>
<ul><li>Application title text and Application hover title text</li><li>Edit Application and Add to Favorites icons</li><li>History time separator text</li><li>History 2nd line text</li><li>History hover text</li><li>Connect message text</li><li>Connect &#34;OPEN CONVERSATIONS&#34; and other informational text</li><li>Help sidebar title and hover text</li></ul>
<p><img class="image-63 jive-image" style="max-width: 1200px; max-height: 900px;" src="82a8f37ddbd05fc068c1fb651f96195e.iix" /></p>
<p><img class="image-64 jive-image" style="max-width: 1200px; max-height: 900px;" src="50381d0edb98d344e9737a9e0f96197a.iix" /></p>
<p><img class="jive-image image-65" style="max-width: 1200px; max-height: 900px;" src="36e6b882db5cdfc068c1fb651f9619e3.iix" />     <img class="image-66 jive-image" style="max-width: 1200px; max-height: 900px;" src="46439c86db141f048c8ef4621f96190a.iix" />         <img class="image-67 jive-image" style="max-width: 1200px; max-height: 900px;" src="98e1f73ddb9c1fc03eb27a9e0f9619fa.iix" /></p>
<p><img class="image-68 jive-image" style="max-width: 1200px; max-height: 900px;" src="275b984adbd89fc03eb27a9e0f96191e.iix" /></p>
<p> </p>
<p> </p>
<p><strong>No Longer Used?</strong></p>
<p>Here are some properties used in Helsinki that do not seem to be used in Istanbul anymore:</p>
<ul><li>$subnav-background-color - #455464</li><li>$navpage-nav-color-sub - #bec1c6</li><li>$navpage-nav-mod-text-hover - #ffffff</li><li>$connect-latest-message - #cfd4d8</li><li>$nav-timeago-header-color - #303a46</li><li>$navpage-nav-app-text-hover - #ffffff</li></ul>
<p> </p>
<p>The default values listed are from Helsinki.</p>
<p> </p>
<p> </p>
<p><strong>Unkown Properties</strong></p>
<p>Here are a few controls or places in the UI that I do not know the name of the property that controls the color:</p>
<ul><li>Search boxes placeholder text</li><li>Unselected Apps/Favs/History icon hover background</li><li>Last Application selected background</li><li>Application hover background</li><li>Module hover background</li><li>Icon hover backgrounds (Banner frame, Nav bar, Connect, etc...)</li></ul>
<p> </p>
<p> </p>
<p><strong>Setting a Default Theme for Users</strong></p>
<p>The currently selected Theme for each user is saved in a User Preference called &#34;glide.css.theme.ui16&#34;.   The value of the preference contains either &#34;system&#34; for the &#34;System&#34; Theme or the sys_id of one of the other Theme records.</p>
<p> </p>
<p>You can set a default Theme for everyone by creating a new User Preference record with the &#34;System&#34; field checked and the &#34;User&#34; field left empty.   That will set the Theme for each user until they actually select a different one, which will then be saved in a User Preference record of their own.</p>
<p> </p>
<p>Setting a default Theme does not, however, affect the look of the login page - it will use the properties of the &#34;System&#34; Theme - and that would look a little odd, the colors switching on the user as they login.</p>
<p> </p>
<p> </p>
<p><strong>Overriding the &#34;System&#34; Theme</strong></p>
<p>You may have noticed that all the Themes that are listed in the System Settings popup window have a corresponding Theme record (System UI \ Themes) except for the &#34;System&#34; one:</p>
<p><img class="image-5 jive-image" style="max-width: 1200px; max-height: 900px; width: 600px; height: 333.333px;" src="5dbc608adb1c57041dcaf3231f961957.iix" width="600" height="333" /></p>
<p>That&#39;s because the &#34;System&#34; Theme uses hard-coded values and System Properties to override them.   To override a &#34;System&#34; Theme color, you must create or edit one of the System Properties and not an actual Theme record.   The name of the System Property would be &#34;css.&#34; &#43; name of the css property from above (e.g. &#34;css.$nav-highlight-bar-active&#34;)</p>
<p> </p>
<p> </p>
<p><strong>What&#39;s Missing?</strong></p>
<p>The most obvious omission with the Theme concept, I believe, is the ability to set a banner frame logo right in the Theme record because some themes may have a light background, requiring a dark logo, while others may have a dark background requiring a lighter logo.</p>
<p> </p>
<p>I also believe some properties should not be shared.   For instance, the Global Search and Navigator search text colors should be controlled by different properties because the banner background may be a light color requiring a dark text color for the Global Search text box and the Navigator background may be darker, requiring a lighter color for it&#39;s search text.   Same thing for their control outlines.</p>
<p> </p>
<p> </p>
<p><strong>Please Create a System Theme record</strong></p>
<p>It would be a lot more useful if the &#34;System&#34; Theme was actually a record instead of all the System Properties.   Would make editing the default Theme a lot easier.</p>
<p> </p>
<p> </p>
<p><strong>Resources</strong></p>
<p>Here are a couple links to the Istanbul docs and other pages that may be useful:</p>
<ul><li><a title="https://docs.servicenow.com/bundle/istanbul-servicenow-platform/page/administer/navigation-and-ui/task/t_CreateOrCustomizeATheme.html" href="https://docs.servicenow.com/bundle/istanbul-servicenow-platform/page/administer/navigation-and-ui/task/t_CreateOrCustomizeATheme.html" rel="nofollow">Create or customize a theme</a></li><li><a title="https://docs.servicenow.com/bundle/istanbul-servicenow-platform/page/administer/navigation-and-ui/reference/r_DefaultCSSStyle.html#r_DefaultCSSStyle" href="https://docs.servicenow.com/bundle/istanbul-servicenow-platform/page/administer/navigation-and-ui/reference/r_DefaultCSSStyle.html#r_DefaultCSSStyle" rel="nofollow">Default CSS styles</a></li><li><a title="https://www.w3schools.com/colors/colors_names.asp" href="https://www.w3schools.com/colors/colors_names.asp" rel="nofollow">HTML Color Names</a></li></ul>
<p> </p>
<p> </p>
<p><strong>Updates</strong></p>
<p>I&#39;ll try to keep this post updated with anything new that I find.   Please let me know if I&#39;ve missed anything.   Thanks in advance.</p>
<p> </p>
<p> </p>
<p><strong>Updated Thursday, April 20, 2017</strong></p>
<ul><li>added &#34;$navpage-header-button-color&#34; property</li></ul>