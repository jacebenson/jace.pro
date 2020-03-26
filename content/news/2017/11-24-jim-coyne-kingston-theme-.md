---
title: "Kingston Theme Properties Visual Guide"
date: 2017-11-23T12:03:46.000Z
authors: ["Jim Coyne"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=afcda2e9dbd0dbc01dcaf3231f9619e8"
---
<p><strong>Other posts related to Themes<br /></strong><a class="jive_macro jive_macro_blogpost" title="" href="community?id&#61;community_blog&amp;sys_id&#61;40dd26e9dbd0dbc01dcaf3231f96197e" rel="nofollow">&#34;Helsinki Gray&#34; UI16 Theme<br /></a><a class="jive_macro jive_macro_blogpost" title="Istanbul Theme Properties Visual Guide" href="community?id&#61;community_blog&amp;sys_id&#61;de5eaaaddbd0dbc01dcaf3231f96193c" rel="nofollow">Istanbul Theme Properties Visual Guide<br /></a><a class="jive_macro jive_macro_blogpost" title="Jakarta Theme Properties Visual Guide" href="community?id&#61;community_blog&amp;sys_id&#61;a7ace625dbd0dbc01dcaf3231f96195e" rel="nofollow">Jakarta Theme Properties Visual Guide<br /></a><a class="jive_macro jive_macro_blogpost" title="Jakarta Theme Properties Visual Guide" href="community?id&#61;community_blog&amp;sys_id&#61;a7ace625dbd0dbc01dcaf3231f96195e" rel="nofollow"><br /></a></p>
<p>We are talking about Themes once again in this post, this time for the <a title="ocs.servicenow.com/bundle/kingston-release-notes/page/release-notes/family-release-notes.html" href="https://docs.servicenow.com/bundle/kingston-release-notes/page/release-notes/family-release-notes.html" rel="nofollow">Kingston</a> release.</p>
<p><strong>Test Theme Record</strong></p>
<p>Here is everyone&#39;s favorite Theme record, updated for Kingston:</p>
<p><img class="image-1 jive-image" style="width: 663px; height: 310.113px;" src="b95165cadbd8d304b322f4621f9619b4.iix" width="663" height="310" /></p>
<p> </p>
<pre class="language-javascript"><code>/* Kingston Test

      Created by Jim Coyne - https://community.servicenow.com/people/jim.coyne

 

      This is to help show what elements are affected by the CSS colors - PLEASE, PLEASE, PLEASE DO NOT ACTUALLY USE THIS THEME FOR REAL   :-)

      It uses HTML color names to hopefully make it a little easier to understand and find the color

 
      The comments include a copy of the UI16 default value for Kingston:

              https://docs.servicenow.com/bundle/kingston-servicenow-platform/page/administer/navigation-and-ui/reference/r_DefaultCSSStyle.html

 

      Refer to this post for more information:

              https://community.servicenow.com/community/develop/blog/2017/11/22/kingston-theme-properties-visual-guide

*/


/* Mostly Banner */

$navpage-header-bg: DodgerBlue   /* #303a46 - banner background   */

$navpage-header-color: Aqua  /*  #ffffff - banner frame title text &#43; Domain and Encryption Context picker icons   */

$navpage-header-button-color: Coral /*   no default, not documented - logged-in user name &#43; Connect, Help and Settings icons     */

$navpage-header-divider-color: FireBrick   /*   #455464 - banner separator line   */

$navpage-button-color: BlueViolet   /*   #fff - Update Set and Application icons &#43; Navigator icons &#43; Connect icons   */

$navpage-button-color-hover: Yellow   /*   #7EC24F - banner icons &#43; clear search text icons &#43; Navigator buttons when clicked   */

 
 
/* Mostly Navigator */

$navpage-nav-bg: BurlyWood   /*   #303a46 -   Navigator and Sidebar header and footers &#43; unselected Navigator and Connect tabs background &#43; History time separator background   */

$navpage-nav-bg-sub: Pink   /*   #455464 - Navigator and Sidebar backgrounds &#43; background for Applications, Favorites and History entries   */

$nav-highlight-main: LightSkyBlue   /*   #3D4853   - Module, Favorite, History, Connect and Help item when clicked   */

$subnav-background-color: SlateGray   /*   #455464 - Module background   */

$navpage-nav-app-text: Black /*   #cfd4d8 - Application, Favorite and History text &#43; Connect and Help text   */

$navpage-nav-color-sub: Tomato   /*   #bec1c6 - Module text   */

$navpage-nav-app-text-hover: DarkTurquoise     /*   no default, not documented - Selected Module, Favorite, History, Connect and Help item text   */

$navpage-nav-selected-bg: Olive   /*   #4B545F - Selected Navigator and Connect tab background */

$navpage-nav-selected-color: OrangeRed   /*   #ffffff - Active Navigator and Connect tab icons   */

$navpage-nav-unselected-color: Orange   /*   #bec1c6 - Inactive Navigator and Connect tab icons   */

$navpage-nav-border: Magenta   /*   #ddd - Global Search, Navigator and Connect search box outlines &#43; search box filter icons   */

$nav-hr-color: YellowGreen   /* #303a46 - Separator modules without a label &#43; Vertical separator line between main frame and Navigator/Sidebars   */

$nav-highlight-bar-active: Red   /*   #278efc - Highlight line under active Navigator/Connect tabs &#43; selected Connect, Help or Settings icon &#43; number of Connect messages dot   */

$nav-highlight-bar-inactive: PaleGoldenRod   /*   #828890 - Highlight line under inactive Navigator/Connect tabs   */


/* Search text */

$search-text-color: LightGreen   /*   #e7e9eb - Search text &#43; clear search text icons &#43; Navigator bar filter icon when minimized   */
 

/* unknown properties, listed as a default on the docs site   */

$connect-latest-message: Violet   /*   #cfd4d8   */

</code></pre>
<p> </p>
<p>Just like the previous test Themes, it is not meant for actual use, but to help point out what properties affect what controls.</p>
<p style="font-family: arial, sans-serif; color: #666666;"> </p>
<p style="font-family: arial, sans-serif; color: #666666;">I used the default values from the &#34;Default CSS styles for UI16&#34; section from the <a title="ocs.servicenow.com/bundle/kingston-servicenow-platform/page/administer/navigation-and-ui/reference/r_DefaultCSSStyle.html" href="https://docs.servicenow.com/bundle/kingston-servicenow-platform/page/administer/navigation-and-ui/reference/r_DefaultCSSStyle.html" rel="nofollow">Default CSS styles</a> article on the <a style="font-weight: inherit; font-style: inherit; font-family: inherit; color: #266fc8;" title="" href="https://docs.servicenow.com/" target="_blank" rel="noopener noreferrer nofollow">docs site</a> to build the Theme.   Below is a list of the individual properties with screenshots to show the affected controls/areas, which appear in yellow.</p>
<p style="font-family: arial, sans-serif; color: #666666;"> </p>
<p style="font-family: arial, sans-serif; color: #666666;">I&#39;ve also listed any changes from Jakarta as well as some note/comments/opinions.</p>
<p> </p>
<p style="font-family: arial, sans-serif; color: #666666;"><span style="font-style: inherit; font-family: inherit;"><strong>$navpage-header-bg - #303a46</strong></span></p>
<ul><li>Banner frame background</li></ul>
<p><span style="font-family: arial, sans-serif; color: #666666;"><img class="image-2 jive-image" style="width: 769px; height: 58.2952px;" src="083c7482db509f048c8ef4621f9619b3.iix" width="769" height="58" /></span></p>
<p> </p>
<p> </p>
<p><strong>$navpage-header-color - #ffffff</strong></p>
<ul><li>Banner frame title text</li><li>Domain picker icon</li><li>Encryption Context picker icon</li></ul>
<p><img class="image-3 jive-image" style="width: 766px; height: 51.8903px;" src="d4cb1c0adb9c17041dcaf3231f9619eb.iix" width="766" height="52" /><img src="1f9dd726db3057804837f3231f961945.iix" width="763" height="45" /></p>
<p>Change from Jakarta:</p>
<ul><li>Global Search icon no longer uses the property</li></ul>
<p> </p>
<p>Notes:</p>
<ul><li>Domain and Encryption Context picker icons should be using &#34;$navpage-header-button-color&#34; instead for consistency</li></ul>
<p> </p>
<p> </p>
<p><span style="color: #666666; font-family: arial, sans-serif;"><strong>$navpage-header-button-color (#ffffff, <strong>not listed in the Default CSS styles article</strong>)</strong></span></p>
<ul><li>Logged-in user name text</li><li>OpenFrame (phone), Global Search (magnifying glass), Connect (text bubbles), Help (question mark) and Settings (gear) icons</li><li>Xplore: Developer Toolkit icon (eyeglasses) (see note below)</li></ul>
<p><img class="image-6 jive-image" style="width: 759px; height: 51.4161px;" src="8f3b2942db905b04ed6af3231f9619b3.iix" width="759" height="51" /></p>
<p>Changes from Jakarta:</p>
<ul><li>Global Search icon uses this property now</li></ul>
<p> </p>
<p>Notes:</p>
<ul><li>almost there - only need the Update Set, Application and Domain picker icons to use it now for consistency</li><li>The Xplore: Developer Toolkit is an excellent third-party tool from <a class="jive_macro jive_macro_user" title="James.Neale" href="community?id&#61;community_user_profile&amp;user&#61;5cc1daaddb981fc09c9ffb651f961987" rel="nofollow">James.Neale</a> and company, available on <a title="hare.servicenow.com/app.do#/detailV2/9a1be70e13800b000de935528144b04c/overview" href="https://share.servicenow.com/app.do#/detailV2/9a1be70e13800b000de935528144b04c/overview" rel="nofollow">Share</a></li></ul>
<p> </p>
<p> </p>
<p style="font-family: arial, sans-serif; color: #666666;"><span style="font-style: inherit; font-family: inherit;"><strong>$navpage-header-divider-color - #455464</strong></span></p>
<ul><li>Banner frame separator line</li></ul>
<p><img class="image-5 jive-image" style="max-width: 1200px; max-height: 900px;" src="8f7b3f79db54d3041dcaf3231f9619aa.iix" /></p>
<p> </p>
<p> </p>
<p style="font-family: arial, sans-serif; color: #666666;"><span style="font-style: inherit; font-family: inherit;"><strong>$navpage-button-color - #ffffff</strong></span></p>
<ul><li>Update Set and Application icons</li><li>Minimize Navigator and Edit Favorites icons</li><li>Create a New Conversation, Open Connect standalone interface and Close Connect Sidebar icons</li></ul>
<p><img class="image-7 jive-image" style="width: 739px; height: 50.0613px;" src="c18885c2db90d344e9737a9e0f961956.iix" width="739" height="50" /></p>
<p><img class="jive-image image-8" style="height: 367px; width: 390.03px;" src="4715a04edb1457049c9ffb651f9619fe.iix" width="390" height="367" /></p>
<p>Notes:</p>
<ul><li>Update Set and Application icons should be using &#34;$navpage-header-button-color&#34; instead for consistency</li></ul>
<p> </p>
<p> </p>
<p style="font-family: arial, sans-serif; color: #666666;"><span style="font-style: inherit; font-family: inherit;"><strong>$navpage-button-color-hover - #7ec24F</strong></span></p>
<ul><li>Update Set, Application, Global Search, Connect, Help and Settings icons when cursor is over the controls (only the Global Search icon is highlighted in the first screenshot below but the others will highlight when the cursor is over them)</li><li>Clear search text icon when cursor is over the control in Navigator and Connect sidebar</li><li>Navigator bar icons when clicked (some browsers [e.g. Chrome] only remove the highlight after cursor is clicked elsewhere)</li></ul>
<p><img class="image-9 jive-image" style="width: 729px; height: 77.6032px;" src="c1f3440adb181304b322f4621f96195b.iix" width="729" height="78" /></p>
<p><img class="jive-image image-10" style="max-width: 1200px; max-height: 900px;" src="b8d4294edb90df048c8ef4621f9619bb.iix" /></p>
<p><img class="image-11 jive-image" style="width: 182px; height: 356.116px;" src="17864502dbd0130468c1fb651f961910.iix" width="182" height="356" /></p>
<p>Notes:</p>
<ul><li>the Domain picker icon does not actually do anything so there&#39;s no change when hovering over it</li></ul>
<p> </p>
<p> </p>
<p><strong>$navpage-nav-bg - #303a46</strong></p>
<ul><li>Navigator, Connect and Help Sidebar header and footers</li><li>Unselected Navigator and Connect Sidebar tab backgrounds</li><li>Connect Sidebar section headers</li><li>History time separator background</li></ul>
<p><img class="jive-image image-14" style="width: 721px; height: 337.242px;" src="3a40444edb985704ed6af3231f961957.iix" width="721" height="337" /></p>
<p><img class="image-13 jive-image" style="width: 181px; height: 356.829px;" src="643e1cc6db1057041dcaf3231f96191d.iix" width="181" height="357" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-nav-bg-sub - #455464</strong></p>
<ul><li>Navigator, Connect and Help Sidebar backgrounds</li><li>Background for Applications, Favorites and History entries</li><li>Selected icon when editing a Favorite</li></ul>
<p><img class="image-15 jive-image" style="max-width: 1200px; max-height: 900px;" src="6fd161c6db9c13043eb27a9e0f961900.iix" /></p>
<p><img class="image-16 jive-image" style="max-width: 1200px; max-height: 900px;" src="8e244942db90130468c1fb651f961958.iix" /></p>
<p><img class="image-17 jive-image" style="max-width: 1200px; max-height: 900px;" src="8c8dd40edb985304b322f4621f9619a5.iix" /></p>
<p> </p>
<p> </p>
<p><strong>$nav-highlight-main - #3D4853</strong></p>
<ul><li>Module/Favorite (not in Safari)/History item when clicked (each browser has its own quirks with this one - Safari only shows while clicking the item, others will keep the highlight a second or so)</li><li>Selected Connect item (remains highlighted until another is selected or another record&#39;s chat window is selected or the record&#39;s chat window is closed)</li></ul>
<p><img class="jive-image image-18" style="max-width: 1200px; max-height: 900px;" src="a62ef7fddbd45fc068c1fb651f9619e4.iix" /></p>
<p><img class="image-19 jive-image" style="width: 189px; height: 117.643px;" src="de516182dbdc1b04ed6af3231f9619b3.iix" width="189" height="118" /></p>
<p> </p>
<p>Notes:</p>
<ul><li>Help item is no longer highlighted (shown differently now in Kingston)</li></ul>
<p> </p>
<p> </p>
<p><strong>$subnav-background-color - #455464</strong></p>
<ul><li>Module background</li></ul>
<p><img class="image-20 jive-image" style="width: 184px; height: 390.504px;" src="2c3c3002db5097049c9ffb651f961925.iix" width="184" height="391" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-nav-app-text - #cfd4d8</strong></p>
<ul><li>Application title text</li><li>Separator Module icon</li><li>&#34;Loading...&#34; Navigator message</li><li>Favorites text</li><li>Delete Favorite icon</li><li>History time separator text</li><li>History items text</li><li>Connect message text</li><li>Connect informational text</li><li>Help Sidebar title and context menu icon</li></ul>
<p><img class="jive-image image-21" style="width: 713px; height: 435.85px;" src="09cb50c6db9c17049c9ffb651f9619f1.iix" width="713" height="436" /></p>
<p><img class="jive-image image-25" style="max-width: 1200px; max-height: 900px; width: 710px; height: 448.591px;" src="ff7bfff9db90db048c8ef4621f9619fc.iix" width="710" height="449" /></p>
<p><img class="image-26 jive-image" style="width: 224px; height: 447.182px;" src="573b658adb98d7041dcaf3231f9619ac.iix" width="224" height="447" /></p>
<p>Notes:</p>
<ul><li>Edit Application and Add to Favorites icons no longer use this property</li></ul>
<p> </p>
<p> </p>
<p><strong>$navpage-nav-color-sub - #bec1c6</strong></p>
<ul><li>Module text</li><li>Favorite icon</li><li>Edit Module and Add To Favorites icons when hovering over them</li></ul>
<p><img class="image-27 jive-image" style="width: 221px; height: 431.739px;" src="f988498edbd0130468c1fb651f9619df.iix" width="221" height="432" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-nav-app-text-hover <span style="color: #666666; font-family: arial, sans-serif;"><strong> (unknown default, <strong>not listed in the Default CSS styles article</strong>)</strong></span></strong></p>
<ul><li>Module text, Edit Module and Add To Favorites icons when Module is selected/clicked</li><li>Favorite text and Delete Favorite icon when Favorite is selected/clicked</li><li>History text, Connect message</li><li>First Module that matches a Navigator search</li></ul>
<p><img class="image-28 jive-image" style="max-width: 1200px; max-height: 900px;" src="6f15e406db905f048c8ef4621f961953.iix" /></p>
<p><img class="jive-image image-29" style="width: 427px; height: 413.226px;" src="29f38486db5c5704ed6af3231f961934.iix" width="427" height="413" /></p>
<p>Notes:</p>
<ul><li>Help item text when selected/clicked no longer uses this property (Help works differently in Kingston)</li></ul>
<p> </p>
<p> </p>
<p><strong>$navpage-nav-selected-bg - #4b545F</strong></p>
<ul><li>Active Navigator tab background (Apps, Favorites or History)</li><li>Active Connect tab background (Chat or Support)</li></ul>
<p><img class="image-30 jive-image" style="width: 429px; height: 132.838px;" src="5dd46d8adb101744e9737a9e0f961978.iix" width="429" height="133" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-nav-selected-color - #ffffff</strong></p>
<ul><li>Active Navigator tab icon (Apps, Favorites or History)</li><li>Active Connect tab icon (Chat or Support)</li></ul>
<p><img class="image-31 jive-image" style="width: 426px; height: 126.25px;" src="00968182db541b04ed6af3231f9619fc.iix" width="426" height="126" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-nav-unselected-color - #bec1c6</strong></p>
<ul><li>Inactive Navigator tab icons (Apps, Favorites or History)</li><li>Inactive Connect tab icons (Chat or Support)</li></ul>
<p><img class="jive-image image-32" style="width: 431px; height: 126.849px;" src="a53e9846dbdc9704ed6af3231f96194a.iix" width="431" height="127" /></p>
<p> </p>
<p> </p>
<p><strong>$nav-highlight-bar-active - #278efc</strong></p>
<ul><li>Highlight line under active Navigator tab (Apps, Favorites or History)</li><li>Highlight line under active Connect tab (Chat or Support)</li><li>Navigator and Connect search box outlines when selected</li><li>Selected Connect, Help or Settings icon (only the Connect icon is highlighted in the screenshot below but the others will highlight when clicked/selected)</li><li>Number of Connect messages dot</li><li>Outline of logged-in user control when selected</li></ul>
<p><img class="jive-image image-47" style="width: 534px; height: 255.803px;" src="52d5e00adb14d704ed6af3231f961960.iix" width="534" height="256" /></p>
<p> </p>
<p> </p>
<p><strong>$nav-highlight-bar-inactive - #828890</strong></p>
<ul><li>Line under inactive Navigator tabs</li><li>Line under inactive Connect tabs</li></ul>
<p><img class="image-38 jive-image" style="width: 449px; height: 134.237px;" src="93404846db94db048c8ef4621f9619cf.iix" width="449" height="134" /></p>
<p> </p>
<p> </p>
<p><strong>$nav-hr-color - #303a46</strong></p>
<ul><li>Separator modules without a label</li><li>Vertical separator line between main frame and Navigator/Sidebars</li></ul>
<p><img class="image-39 jive-image" style="height: 421px; width: 199.797px;" src="ea888946db949f048c8ef4621f9619d4.iix" width="200" height="421" /></p>
<p><img class="image-40 jive-image" style="height: 174px; width: 663.947px;" src="9c25a80edbdc5304b322f4621f96196e.iix" width="664" height="174" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-nav-border - #dddddd</strong></p>
<ul><li>Global Search, Navigator and Connect search box outlines</li><li>Navigator and Connect search box filter icons</li><li>Outline of logged-in user control when selecting a drop-down menu item</li></ul>
<p><img class="image-41 jive-image" style="width: 684px; height: 84.9484px;" src="02f30442db58db048c8ef4621f9619bb.iix" width="684" height="85" /></p>
<p><img class="image-42 jive-image" style="width: 367px; height: 77.2195px;" src="8ed4694edb90df048c8ef4621f961949.iix" width="367" height="77" /></p>
<p> </p>
<p> </p>
<p><strong>$search-text-color - #e7e9eb</strong></p>
<ul><li>Global Search, Navigator and Connect search text</li><li>Clear search text icon in Navigator and Connect search boxes</li><li>Navigator bar filter icon when minimized</li></ul>
<p><img class="image-48 jive-image" style="width: 687px; height: 106.374px;" src="ef56c486dbdcd3049c9ffb651f96192f.iix" width="687" height="106" /></p>
<p><img class="image-49 jive-image" style="width: 70px; height: 215.506px;" src="2354ab75dbd093049c9ffb651f9619ca.iix" width="70" height="216" /></p>
<p> </p>
<p> </p>
<p><strong>Updates</strong></p>
<p>I&#39;ll try to keep this post updated with anything new that I find.   Please let me know if I&#39;ve missed anything, or if something is incorrect.   I started this article based on the Jakarta one, so please forgive any copy/paste errors (but let me know about any).   Thanks in advance.</p>
<p> </p>
<p><strong>Updated Thursday, March 15, 2018</strong></p>
<ul><li>added Encryption Context picker icon to the &#34;$navpage-header-color&#34; property</li></ul>