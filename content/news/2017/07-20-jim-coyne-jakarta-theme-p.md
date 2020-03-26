---
title: "Jakarta Theme Properties Visual Guide"
date: 2017-07-19T23:50:06.000Z
authors: ["Jim Coyne"]
link: "https://community.servicenow.com/community?id=community_blog&sys_id=a7ace625dbd0dbc01dcaf3231f96195e"
---
<p style="font-family: arial, sans-serif; color: #666666;"><span style="font-style: inherit; font-family: inherit;"><strong>Other posts related to Themes<br /></strong></span><span style="font-style: inherit; font-family: inherit;"><a class="jive_macro jive_macro_blogpost" title="" href="community?id&#61;community_blog&amp;sys_id&#61;40dd26e9dbd0dbc01dcaf3231f96197e" rel="nofollow">&#34;Helsinki Gray&#34; UI16 Theme<br /></a></span><span style="font-style: inherit; font-family: inherit;"><a class="jive_macro jive_macro_blogpost" title="Istanbul Theme Properties Visual Guide" href="community?id&#61;community_blog&amp;sys_id&#61;de5eaaaddbd0dbc01dcaf3231f96193c" rel="nofollow">Istanbul Theme Properties Visual Guide<br /></a></span><span style="font-style: inherit; font-family: inherit;"><a class="jive_macro jive_macro_blogpost" title="Kingston Theme Properties Visual Guide" href="community?id&#61;community_blog&amp;sys_id&#61;afcda2e9dbd0dbc01dcaf3231f9619e8" rel="nofollow">Kingston Theme Properties Visual Guide<br /></a></span></p>
<p style="font-family: arial, sans-serif; color: #666666;">As a follow-up to my <a class="jive_macro jive_macro_blogpost" title="Istanbul Theme Properties Visual Guide" href="community?id&#61;community_blog&amp;sys_id&#61;de5eaaaddbd0dbc01dcaf3231f96193c" rel="nofollow">Istanbul Theme Properties Visual Guide</a> post, this one describes the Theme properties for UI16 in the Jakarta release.</p>
<p> <span style="color: #3d3d3d; font-family: &#39;Helvetica Neue&#39;, Helvetica, Arial, &#39;Lucida Grande&#39;, sans-serif;"><strong>Test Theme Record</strong></span></p>
<p>Here&#39;s the return of the ugly Theme record, updated for Jakarta:</p>
<p><img class="image-95 jive-image" style="width: 652px; height: 335.465px;" src="49314946db1897041dcaf3231f9619e6.iix" width="652" height="335" /></p>
<p> </p>
<pre class="language-javascript"><code>/* Jakarta Test

      Created by Jim Coyne - https://community.servicenow.com/people/jim.coyne

      This is to help show what elements are affected by the CSS colors - PLEASE, PLEASE, PLEASE DO NOT ACTUALLY USE THIS THEME FOR REAL   :-)

      It uses HTML color names to hopefully make it a little easier to understand and find the color

      The comments include a copy of the UI16 default value:
              https://docs.servicenow.com/bundle/jakarta-servicenow-platform/page/administer/navigation-and-ui/reference/r_DefaultCSSStyle.html

      Refer to this post for more information:
              https://community.servicenow.com/community/develop/blog/2017/07/19/jakarta-theme-properties-visual-guide

*/
 

/* Mostly Banner */
$navpage-header-bg: DodgerBlue   /* #303a46 - banner background   */
$navpage-header-color: Aqua   /*   #ffffff - banner title text   */
$navpage-header-button-color: Coral /*   no default, not documented - logged-in user name &#43; Connect, Help and Settings icons     */
$navpage-header-divider-color: FireBrick   /*   #455464 - banner separator line   */
$navpage-button-color: BlueViolet   /*   #fff - Update Set and Application icons &#43; Navigator icons &#43; Connect icons   */
$navpage-button-color-hover: Yellow   /*   #7EC24F - banner icons &#43; clear search text icons &#43; Navigator buttons when clicked   */

 
/* Mostly Navigator */
$navpage-nav-bg: BurlyWood   /*   #303a46 -   Navigator and Sidebar header and footers &#43; unselected Navigator and Connect tabs background &#43; History time separator background   */
$navpage-nav-bg-sub: Pink   /*   #455464 - Navigator and Sidebar backgrounds &#43; background for Applications, Favorites and History entries   */
$nav-highlight-main: LightSkyBlue   /*   #3D4853   - Module, Favorite, History, Connect and Help item when clicked       */
$subnav-background-color: SlateGray   /*   #455464 - Module background   */
$navpage-nav-app-text: Black /*   #cfd4d8 - Application, Favorite and History text &#43; Connect and Help text   */
$navpage-nav-color-sub: Tomato   /*   #bec1c6 - Module text   */
$navpage-nav-app-text-hover: DarkTurquoise     /*   #ffffff - Selected Module, Favorite, History, Connect and Help item text   */
$navpage-nav-selected-bg: Olive   /*   #4B545F - Selected Navigator and Connect tab background */
$navpage-nav-selected-color: OrangeRed   /*   #ffffff - Active Navigator and Connect tab icons   */
$navpage-nav-unselected-color: Orange   /*   #bec1c6 - Inactive Navigator and Connect tab icons   */
$navpage-nav-border: Magenta   /*   #ddd - Global Search, Navigator and Connect search box outlines &#43; search box filter icons   */
$nav-hr-color: YellowGreen   /* #303a46 - Separator modules without a label &#43; Vertical separator line between main frame and Navigator/Sidebars   */
$nav-highlight-bar-active: Red   /*   #278efc - Highlight line under active Navigator/Connect tabs &#43; selected Connect, Help or Settings icon &#43; number of Connect messages dot   */
$nav-highlight-bar-inactive: PaleGoldenRod   /*   #828890 - Highlight line under inactive Navigator/Connect tabs   */


/* Search text */
$search-text-color: LightGreen   /*   #e7e9eb - Search text &#43; clear search text icons &#43; Navigator bar filter icon when minimized   */


$connect-latest-message: Violet   /*   #cfd4d8 - no idea, not able to see it   */</code></pre>
<p> </p>
<p>Just like the previous test Themes, it is not meant for actual use, but to help point out what properties affect what controls.</p>
<p> </p>
<p>I used the default values from the &#34;Default CSS styles for UI16&#34; section from the <a title="https://docs.servicenow.com/bundle/jakarta-servicenow-platform/page/administer/navigation-and-ui/reference/r_DefaultCSSStyle.html" href="https://docs.servicenow.com/bundle/jakarta-servicenow-platform/page/administer/navigation-and-ui/reference/r_DefaultCSSStyle.html" rel="nofollow">Default CSS styles</a> article on the <a title="ocs.servicenow.com/" href="https://docs.servicenow.com/" rel="nofollow">docs site</a> to build the Theme.   Here is a list of the individual properties with screenshots to show the affected controls/areas, which appear in yellow.</p>
<p> </p>
<p> </p>
<p><strong>$navpage-header-bg - #303a46</strong></p>
<ul><li>Banner frame background</li></ul>
<p><img class="image-51 jive-image" style="width: 793px; height: 60.1145px;" src="0cd9b771dbdcdf04e9737a9e0f961956.iix" width="793" height="60" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-header-color - #ffffff</strong></p>
<ul><li>Banner frame title text</li><li>Domain picker icon</li><li>Global Search icon</li></ul>
<p><img class="image-96 jive-image" style="width: 787px; height: 52.0435px;" src="d7dd1046db5c9fc03eb27a9e0f96198d.iix" width="787" height="52" /></p>
<p> </p>
<p> </p>
<p><span style="color: #666666; font-family: arial, sans-serif;"><strong>$navpage-header-button-color (unknown default, <strong>not listed in the Default CSS styles article</strong>)</strong></span></p>
<ul><li>Logged-in user name text</li><li>Connect, Help and Settings icons</li></ul>
<p><img class="jive-image image-36" style="width: 786px; height: 53.2452px;" src="32aa3c8adb101b04ed6af3231f961975.iix" width="786" height="53" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-header-divider-color - #455464</strong></p>
<ul><li>Banner frame separator line</li></ul>
<p><img class="jive-image image-4" style="max-width: 1200px; max-height: 900px;" src="07047482db9cd704ed6af3231f96193c.iix" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-button-color - #ffffff</strong></p>
<ul><li>Update Set and Application icons</li><li>Minimize Navigator and Edit Favorites icons</li><li>Create a New Conversation, Open Connect standalone interface and Close Connect Sidebar icons</li></ul>
<p><img class="image-34 jive-image" style="width: 803px; height: 58.2823px;" src="9a136582dbdc13043eb27a9e0f96191d.iix" width="803" height="58" /></p>
<p><img class="image-97 jive-image" style="width: 378px; height: 355.68px;" src="c3708002db141344e9737a9e0f961987.iix" width="378" height="356" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-button-color-hover - #7ec24F</strong></p>
<ul><li>Update Set, Application, Global Search, Connect, Help and Settings icons when cursor is over the controls (only the Global Search icon is highlighted in the first screenshot below but the others will highlight when the cursor is over them)</li><li>Clear search text icon when cursor is over the control in Navigator and Connect sidebar</li><li>Navigator bar icons when clicked (some browsers [e.g. Chrome] only remove the highlight after cursor is clicked elsewhere)</li></ul>
<p><img class="image-31 jive-image" style="max-width: 1200px; max-height: 900px;" src="7aa13b31db1cdfc0b322f4621f961921.iix" /></p>
<p><img class="jive-image image-98" style="max-width: 1200px; max-height: 900px;" src="b0f6e502db505b04ed6af3231f9619c0.iix" /></p>
<p><img class="image-41 jive-image" style="height: 351px; width: 179.386px;" src="9529dc8adb1c17049c9ffb651f96194d.iix" width="179" height="351" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-nav-bg - #303a46</strong></p>
<ul><li>Navigator, Connect and Help Sidebar header and footers</li><li>Unselected Navigator and Connect tabs background</li><li>History time separator background</li></ul>
<p> </p>
<p><img class="image-45 jive-image" style="max-width: 1200px; max-height: 900px; width: 478px; height: 240.593px;" src="49c5b3fddb105fc068c1fb651f96193a.iix" width="478" height="241" /></p>
<p><img class="image-44 jive-image" style="width: 122px; height: 257.893px;" src="33f5dccedbd05344e9737a9e0f9619ca.iix" width="122" height="258" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-nav-bg-sub - #455464</strong></p>
<ul><li>Navigator, Connect and Help Sidebar backgrounds</li><li>Background for Applications, Favorites and History entries</li><li>Selected icon when editing a Favorite</li></ul>
<p><img class="image-99 jive-image" style="width: 536px; height: 363.097px;" src="b3b38d02db1497049c9ffb651f9619e7.iix" width="536" height="363" /></p>
<p><img class="image-100 jive-image" style="width: 541px; height: 334.947px;" src="b12dd80edb1c9fc03eb27a9e0f9619a4.iix" width="541" height="335" /></p>
<p><img class="jive-image" style="width: 613px; height: 247.198px;" src="0c1add86db1c1b04ed6af3231f96190a.iix" width="613" height="247" /></p>
<p> </p>
<p> </p>
<p><strong>$nav-highlight-main - #3D4853</strong></p>
<ul><li>Module/Favorite (not in Safari)/History/Help item when clicked (each browser has its own quirks with this one - Safari only shows while clicking the item, others will keep the highlight a second or so, and some keep the Help item highlighted until the cursor is clicked elsewhere)</li><li>Selected Connect item (remains highlighted until another is selected or another record&#39;s chat window is selected or the record&#39;s chat window is closed)</li></ul>
<p><img class="jive-image" style="width: 224px; height: 229.661px;" src="935abbb9db14d3041dcaf3231f9619ca.iix" width="224" height="230" />       <img class="jive-image" style="width: 224px; height: 229.661px;" src="ce5c910edb58d304b322f4621f9619a7.iix" width="224" height="230" />         <img class="jive-image" style="width: 226px; height: 231.711px;" src="9a96d806db9817041dcaf3231f961991.iix" width="226" height="232" /></p>
<p><img class="jive-image" style="width: 224px; height: 138.896px;" src="35299082db989fc03eb27a9e0f9619f7.iix" width="224" height="139" />       <img class="image-49 jive-image" style="width: 228px; height: 138.964px;" src="5d49fc42db9cdfc068c1fb651f9619f9.iix" width="228" height="139" /></p>
<p> </p>
<p> </p>
<p><strong>$subnav-background-color - #455464</strong></p>
<ul><li>Module background</li></ul>
<p><img class="jive-image image-50" style="width: 189px; height: 401.19px;" src="f5961c86db145344e9737a9e0f961994.iix" width="189" height="401" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-nav-color-sub - #bec1c6</strong></p>
<ul><li>Module text</li><li>Edit Module and Add To Favorites icons</li></ul>
<p><img class="image-78 jive-image" style="width: 198px; height: 418.629px;" src="6e2914cadb1c17049c9ffb651f961975.iix" width="198" height="419" /></p>
<p> </p>
<p> </p>
<p> </p>
<p><strong>$navpage-nav-app-text - #cfd4d8</strong></p>
<ul><li>Application title text</li><li>Edit Application and Add to Favorites icons</li><li>&#34;Loading...&#34; Navigator message</li><li>Favorites text</li><li>Delete Favorite icon</li><li>History time separator text</li><li>History items text</li><li>Connect message text</li><li>Connect informational text</li><li>Help sidebar title and items text</li></ul>
<p><img class="image-79 jive-image" style="width: 213px; height: 446.466px;" src="f8d9fbf5db50db048c8ef4621f9619fe.iix" width="213" height="446" />       <img class="image-80 jive-image" style="width: 214px; height: 448.417px;" src="76da91c2db1cd344e9737a9e0f96198d.iix" width="214" height="448" />         <img class="image-55 jive-image" style="width: 212px; height: 444.37px;" src="c6da118edbd0d7041dcaf3231f961924.iix" width="212" height="444" /></p>
<p><img class="jive-image image-58" style="width: 215px; height: 459.388px;" src="46493002db1097049c9ffb651f9619c1.iix" width="215" height="459" />         <img class="image-57 jive-image" style="width: 218px; height: 458.498px;" src="541ad1c6dbd0d7041dcaf3231f961959.iix" width="218" height="458" />       <img class="image-59 jive-image" style="width: 216px; height: 457.548px;" src="c396148edb189fc068c1fb651f9619a7.iix" width="216" height="458" /></p>
<p><img class="image-56 jive-image" style="width: 215px; height: 457.166px;" src="ee9bb8c2db1c9304b322f4621f961901.iix" width="215" height="457" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-nav-app-text-hover <span style="color: #666666; font-family: arial, sans-serif;"><strong> (unknown default, <strong>not listed in the Default CSS styles article</strong>)</strong></span></strong></p>
<ul><li>Module text, Edit Module and Add To Favorites icons when Module is selected/clicked</li><li>Favorite text and Delete Favorite icon when Favorite is selected/clicked</li><li>History text, Connect message and Help item text when selected/clicked</li><li>First Module that matches a Navigator search</li></ul>
<p><img class="image-93 jive-image" style="width: 678px; height: 457.103px;" src="c8a38806db941344e9737a9e0f961999.iix" width="678" height="457" /></p>
<p><img class="jive-image image-94" style="width: 445px; height: 460.228px;" src="b484e542db18d7041dcaf3231f961911.iix" width="445" height="460" /><img class="image-101 jive-image" style="width: 241px; height: 462.165px;" src="afcdf3f5db14db048c8ef4621f96190f.iix" alt="" width="241" height="462" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-nav-selected-bg - #4b545F</strong></p>
<ul><li>Active Navigator tab background (Apps, Favorites or History)</li><li>Active Connect tab background (Chat or Support)</li></ul>
<p><img class="jive-image image-83" style="width: 482px; height: 149.249px;" src="439bb8cadb1c9344e9737a9e0f961924.iix" width="482" height="149" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-nav-selected-color - #ffffff</strong></p>
<ul><li>Active Navigator tab icon (Apps, Favorites or History)</li><li>Active Connect tab icon (Chat or Support)</li></ul>
<p><img class="image-84 jive-image" style="width: 495px; height: 146.698px;" src="0d2b3731db101344e9737a9e0f9619d8.iix" width="495" height="147" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-nav-unselected-color - #bec1c6</strong></p>
<ul><li>Inactive Navigator tab icons (Apps, Favorites or History)</li><li>Inactive Connect tab icons (Chat or Support)</li></ul>
<p><img class="image-85 jive-image" style="width: 546px; height: 160.696px;" src="defa65cadb901744e9737a9e0f961974.iix" width="546" height="161" /></p>
<p> </p>
<p> </p>
<p><strong>$nav-highlight-bar-active - #278efc</strong></p>
<ul><li>Highlight line under active Navigator tab (Apps, Favorites or History)</li><li>Highlight line under active Connect tab (Chat or Support)</li><li>Selected Connect, Help or Settings icon (only the Connect icon is highlighted in the screenshot below but the others will highlight when clicked/selected)</li><li>Number of Connect messages dot</li><li>Outline of logged-in user control when selected</li></ul>
<p><img class="image-73 jive-image" style="width: 239px; height: 146.484px;" src="a123148adb1817049c9ffb651f9619b8.iix" width="239" height="146" />       <img class="jive-image image-76" style="width: 234px; height: 186.194px;" src="8f13694adb5c130468c1fb651f961966.iix" width="234" height="186" /></p>
<p><img class="image-77 jive-image" style="width: 252px; height: 72.1241px;" src="5faa30c6db1097049c9ffb651f9619f0.iix" width="252" height="72" />       <img class="image-75 jive-image" style="width: 269px; height: 79.4585px;" src="97a13fb1dbd89b048c8ef4621f961941.iix" width="269" height="79" /></p>
<p> </p>
<p> </p>
<p><strong>$nav-highlight-bar-inactive - #828890</strong></p>
<ul><li>Line under inactive Navigator tabs</li><li>Line under inactive Connect tabs</li></ul>
<p><img class="image-86 jive-image" style="width: 527px; height: 157.557px;" src="a038490edbd0130468c1fb651f9619cb.iix" width="527" height="158" /></p>
<p> </p>
<p><strong>$nav-hr-color - #303a46</strong></p>
<ul><li>Separator modules without a label</li><li>Vertical separator line between main frame and Navigator/Sidebars</li></ul>
<p><img class="image-70 jive-image" style="width: 233px; height: 490.964px;" src="2304b4c6db5097041dcaf3231f961921.iix" width="233" height="491" /></p>
<p><img class="jive-image image-87" style="width: 654px; height: 171.939px;" src="8ec4600edb90dfc03eb27a9e0f9619bd.iix" width="654" height="172" /></p>
<p> </p>
<p> </p>
<p><strong>$navpage-nav-border - #dddddd</strong></p>
<ul><li>Global Search, Navigator and Connect search box outlines</li><li>Navigator and Connect search box filter icons</li><li>Outline of logged-in user control when selecting a drop-down menu item</li></ul>
<p><img class="image-68 jive-image" style="width: 798px; height: 99.1065px;" src="486a7331db54d3049c9ffb651f9619b3.iix" width="798" height="99" /></p>
<p><img class="jive-image image-69" style="max-width: 1200px; max-height: 900px;" src="ae5cdd0edb1cd344e9737a9e0f9619cf.iix" /></p>
<p> </p>
<p> </p>
<p><strong>$search-text-color - #e7e9eb</strong></p>
<ul><li>Global Search, Navigator and Connect search text</li><li>Clear search text icon in Navigator and Connect search boxes</li><li>Navigator bar filter icon when minimized</li></ul>
<p><img class="image-42 jive-image" style="width: 714px; height: 110.555px;" src="6bc93bf5db50db048c8ef4621f9619f6.iix" width="714" height="111" /></p>
<p><img class="image-6 jive-image" style="max-width: 1200px; max-height: 900px;" src="41235c4edbd49704ed6af3231f961934.iix" /></p>
<p> </p>
<p> </p>
<p> </p>
<p><strong>Updates</strong></p>
<p>I&#39;ll try to keep this post updated with anything new that I find.   Please let me know if I&#39;ve missed anything, or if something is incorrect.   Thanks in advance.</p>
<p> </p>
<p> </p>
<p><strong>Updated Sunday, December 10, 2017</strong></p>
<ul><li>added &#34;First Module that matches a Navigator search&#34; to the &#34;$navpage-nav-app-text-hover&#34; property</li></ul>