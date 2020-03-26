---
title: "The ULTIMATE Service Portal CSS Guide"
date: 2019-11-08T06:56:25.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=48e8a9ec1b050414d01143f6fe4bcb98"
---
<p>I work a lot with Service Portal, and luckily my background in web development has meant that I can see through it’s sometimes complex world, so that when something strange is going on I can usually find out why it’s happening, and know what to do to resolve it.</p>
<p>However, often people don’t have the advantage of having done web development from scratch before, and have not had the need, opportunity, or perhaps even desire to learn the fundamentals of web development. If you now want to do advanced widget creation in Service Portal it can be quite overwhelming.</p>
<p>Perhaps you’re a ServiceNow Administrator, and your manager has now tasked you with creating new widgets for your Service Portal. You might be a specialist in desktop enterprise application development and moving into the exciting world of Now Platform wanting to develop a custom interface for your apps in Service Portal. You might even be a web developer already, but new to ServiceNow and having trouble with understanding exactly how the many CSS fields that make up a Service Portal go together into one whole.</p>
<p>Without knowing the fundamentals, or having anyone with the necessary skills to lean on, it could be quite easy to spend hours or even days troubleshooting an issue. Worse even, after that time troubleshooting you may apply what you think is a fix, which will just cause more issues and confusion further down the line.</p>
<p>In this article, I’m going to explain some of the fundamental concepts of CSS, the various ways to create that CSS in Service Portal, and best practices when doing so. So read along, and if you like the article please share it on your social networks of choice! You can also follow me on Twitter at <a href="https://twitter.com/dylanlindgren" rel="nofollow">&#64;dylanlindgren</a> to get updates when I post similar articles in the future!</p>
<h2>CSS Concepts</h2>
<p>Along with HTML and JavaScript, CSS is one of the fundamental technologies of the web. Being a core web technology, knowledge of how it works will benefit you in the short, medium, and long term, as opposed to some technology concepts which can be quite ephemeral.</p>
<p>CSS is an acronym, which stands for Cascading Style Sheets. Knowing that they are related to a website, some key things we can derive from just that name alone is that:</p>
<ul><li>They’re used to apply styling to a website</li><li>“Sheets” is a plural, hence you can have more than one of them.</li><li>The relevant definition of “cascade” in this context is to <a href="https://www.wordnik.com/words/cascade" rel="nofollow">“pass (something) on to a succession of others”</a>. So, as the style sheets are “cascading” we know they pass something on from one to the other, in a way similar to a waterfall, cascading downwards.</li></ul>
<p>For some people, CSS is a strange beast. But, spending a little time understanding what I would say are the three key concepts about it, it can also become a very <strong>fun</strong> beast! It’s what transforms your ugly, brutalist website into a spectacular piece of art that you can be proud to show other people.</p>
<p>Thankfully, the internet has moved on! Back in the age of Internet Explorer 6, even when the design wasn’t that complex one would have to develop CSS which conformed to <a href="http://w3.org/Style/CSS/#specs" rel="nofollow">W3C standards</a> (Firefox, Opera, Safari, etc), and then sometimes a completely different set of styles to allow it to work in Microsoft browsers. There are still sometimes cross-browser issues, but most can be worked out by testing early, and often, and almost never does something fundamental break.</p>
<h3>Rule Sets</h3>
<p>Without a doubt, if you’ve been exposed to web development (even by simply opening up your browser’s developer tools) you’ll have seen a CSS rule set before. Here’s an example of what one looks like:</p>
<p> </p>
<div class="wp-block-image">
<figure class="aligncenter is-resized"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/c218692c1b050414d01143f6fe4bcba5.iix" /><br /> A CSS Rule Set</figure>
</div>
<p> </p>
<p>A rule set is made up of two components:</p>
<ul><li><strong>The</strong> <strong>selector</strong>: selects what elements the declarations within the rule set will apply to.</li><li><strong>Declarations</strong>: particular properties to set on any elements which match the selector.</li></ul>
<p> </p>
<div class="wp-block-image">
<figure class="aligncenter is-resized"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/f928292c1b050414d01143f6fe4bcba3.iix" /><br /> The selector and declaration of a CSS rule set</figure>
</div>
<p> </p>
<p>Similarly, the declaration also contains two parts:</p>
<ul><li><strong>Property</strong>: the name of the property to set the value of.</li><li><strong>Value</strong>: the value to set for that property.</li></ul>
<p> </p>
<div class="wp-block-image">
<figure class="aligncenter is-resized"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/1538ad2c1b050414d01143f6fe4bcb8e.iix" /><br /> The property and value components of a CSS declaration</figure>
</div>
<p> </p>
<p>A declaration can also have the <em>!important</em> flag appended to the end which, as the name suggests, notes that the declaration is important.</p>
<p> </p>
<div class="wp-block-image">
<figure class="aligncenter is-resized"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/9c48616c1b050414d01143f6fe4bcba6.iix" /><br /> The optional !important flag</figure>
</div>
<p> </p>
<p>We will see how this flag affects things shortly.</p>
<h3>Stylesheets</h3>
<p>As mentioned earlier, you can have multiple style sheets for a single document. There are three different types of stylesheets in a document:</p>
<ul><li><strong>User-agent stylesheets</strong>: the default styles that come in a web browser, for example, to make a <em>&lt;button&gt;</em> element look like a button.</li><li><strong>Author stylesheets</strong>: the style sheets supplied by the web page itself – i.e., the ones created by the developers of the website. Note that in the case of Service Portal, this means stylesheets <strong><em>you</em></strong> created, that <strong><em>ServiceNow</em></strong> created, and from any <strong><em>external libraries</em></strong> you’ve included.</li><li><strong>User stylesheets</strong>: style sheets that can be defined by the user of the website.</li></ul>
<p>Style declarations can also be made directly in-line with the HTML like so:</p>
<p> </p>
<div class="wp-block-image">
<figure class="aligncenter is-resized"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/4c58692c1b050414d01143f6fe4bcb07.iix" /><br /> An in-line style declaration</figure>
</div>
<h3> </h3>
<h3>Cascade</h3>
<p>With the amount of CSS from multiple sources that goes into making a website, a common scenario is that you might have multiple rule sets with declarations targeting the exact same property on the exact same element – a “competing declaration”. The cascade algorithm determines which of these declarations will win, and thus be used by the element.</p>
<p>Having competing declarations could be something you do intentionally, for example a generic rule set saying that the <em>background-color</em> property of a button is grey, and another “primary button” rule set saying that it is blue. You would target only the primary button on the page with the “primary button” rule set, but all buttons on the page with the generic rule set. This means for the primary button, it would have competing declarations for the <em>background-color</em> property.</p>
<p> </p>
<div class="wp-block-image">
<figure class="aligncenter is-resized"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/2f58216c1b050414d01143f6fe4bcbb6.iix" /><br /> Conflicting CSS declarations</figure>
</div>
<p> </p>
<p>In the case of a competing declaration, which gets used is determined using the order shown below. Note that the lower the number, the more important it is.</p>
<ol><li>Whether the declaration is included in-line with the HTML.</li><li>Whether the declaration includes the !important flag.</li><li>What type of style sheet the declaration is made in.</li><li>What the <em>specificity</em> of the declaration is (more on this later).</li><li>Which rule appears last in the stylesheet.</li></ol>
<p>You can read more about the CSS Cascade on the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade" rel="nofollow">MDN Web Docs</a>.</p>
<h3>Specificity</h3>
<p>If a competing declaration makes it all the way to step 4, the one with the most <strong><em>specific</em></strong> selector will be used for the targeted element.</p>
<p>A rule set’s selector is made up of one or more individual selectors. The number of individual selectors, along with the types of selectors, combine together to form the weight (specificity) of the rule set that will be applied to the declarations inside.</p>
<p>The number of type <strong>A</strong> selectors will be considered first. The more of this type of selector, the higher the weight. If there’s a tie, type <strong>B</strong> selectors will be considered next. Lastly, type <strong>C</strong> selectors are considered.</p>
<p> </p>
<div class="wp-block-image">
<figure class="aligncenter is-resized"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/3268e56c1b050414d01143f6fe4bcb36.iix" /><br /> Specificity calculation</figure>
</div>
<p> </p>
<p>Going back to the previous example of a primary &lt;button&gt; element with two competing <em>background-color</em> declarations made on it, let’s see how this would play out.</p>
<p> </p>
<div class="wp-block-image">
<figure class="aligncenter is-resized"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/9278ed6c1b050414d01143f6fe4bcbe2.iix" /><br /> Specificity calculation example</figure>
</div>
<p> </p>
<p>Here are some other example selectors, along with their specificity, and what order the elements would appear in given this.</p>
<table class="wp-block-table aligncenter is-style-regular" style="border-color: #ccc; border-collapse: collapse;" border="1" cellspacing="0" cellpadding="5"><tbody><tr><td><strong>Selector</strong></td><td><strong>Elements</strong></td><td><strong>Specificity Weights</strong></td><td><strong>Specificity Order</strong></td></tr><tr><td><em><span style="font-family: monospace;">.myClass</span></em></td><td>1 class selector</td><td>A: 0<br />B: 1<br />C: 0</td><td>5</td></tr><tr><td><em>#myItem</em></td><td>1 ID selector</td><td>A: 1<br />B: 0<br />C: 0</td><td>3</td></tr><tr><td><em>body div .myClass</em></td><td>1 class selector<br />2 type selectors</td><td>A: 0<br />B: 1<br />C: 2</td><td>4</td></tr><tr><td><em>body #myItem div</em></td><td>1 ID selector<br />2 type selectors</td><td>A: 1<br />B: 0<br />C: 2</td><td>2</td></tr><tr><td><em>body #myItem .myClass</em></td><td>1 ID selector<br />1 class selector<br />1 type selector</td><td>A: 1<br />B: 1<br />C: 1</td><td>1</td></tr></tbody></table>
<p>You can read more about specificity on the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity" rel="nofollow">MDN Web Docs</a>.</p>
<h3>Inheritance</h3>
<p>If there are no declarations made for a particular property (whether it be in-line, or in a style sheet), some properties will inherit their value from their parent element. A common example of an inheritable property is <em>color</em> Often, this is set on the <em>&lt;body&gt;</em> element of a page, and it is inherited down throughout its children on the rest of the page.</p>
<p>There are also non-inheritable properties – <em>border </em>is an example of this.</p>
<p>This is quite useful behaviour, as it would be beyond annoying to have to define for every element in the page that the font color is black. It would also be similarly annoying to have to un-set the border on child elements of an element which has the border set on it.</p>
<p>You can read more about inheritance on the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Inheritance" rel="nofollow">MDN Web Docs</a>.</p>
<h2>CSS Problems</h2>
<p>As time has gone on, and CSS and web applications have become more feature rich and complex, developers started struggling with some very familiar problems. A lot of the problems related to the limited ability of CSS to adhere one of the key principles of software development: <strong>Don’t Repeat Yourself</strong> (DRY).</p>
<p>For example, if you wanted to use the same colour as a background color for a box, and as a text color elsewhere on the page, you would have to hard-code that color in separate declarations:</p>
<p> </p>
<div class="wp-block-image">
<figure class="aligncenter is-resized"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/9588ad6c1b050414d01143f6fe4bcbc6.iix" /><br /> Duplicated values</figure>
</div>
<p> </p>
<p>For more complex sites, sometimes you’ll want to use a very specific selector. For example, the one below to define the border of a box:</p>
<p> </p>
<div class="wp-block-image">
<figure class="aligncenter"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/3f88e1ac1b050414d01143f6fe4bcbc5.iix" /></figure>
</div>
<p> </p>
<p>If you now wanted to style some items inside that box, you’d need to repeat that selector all over again. For example, this is the selector you’d need to use to add some styling to an image in the box above:</p>
<p> </p>
<div class="wp-block-image">
<figure class="aligncenter is-resized"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/6798a96c1b050414d01143f6fe4bcb6d.iix" /><br /> Repeated selectors</figure>
</div>
<p> </p>
<p>Lastly, if there was a group of declarations which you wanted to apply to many rule sets, you’d be repeating the same code again and again:</p>
<p> </p>
<div class="wp-block-image">
<figure class="aligncenter is-resized"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/d6a82dac1b050414d01143f6fe4bcbe4.iix" /><br /> Repeated blocks of the same declarations</figure>
</div>
<p> </p>
<p>All the above are not great when you’re trying to keep your code as “DRY” as possible. They increase complexity, which lowers maintainability, and increases the potential for bugs to exist, or be introduced in future versions.</p>
<p>The problem is that introducing features that solve the above problems are not really a good idea to do in the browser, as it requires changing the way that CSS fundamentally works. As of yet, no solutions to address the above problems have been introduced into the CSS specification.</p>
<h3>Enter: SASS (and compilation)</h3>
<p><a href="https://sass-lang.com/" rel="nofollow">SASS</a> is language which extends CSS, and adds extra features to it to make it easier to use for developers. It stands for “Syntactically Awesome Style Sheets” (presumably they cared about the acronym rather than the name).</p>
<p>SASS works not by changing CSS language itself (which would require changing the browser), but instead by adding extra syntax and then compiling the code (converting it) into CSS once the developer is finished.</p>
<h3>Features of SASS</h3>
<p>All the problems mentioned in the previous section are addressed by three key features of SASS:</p>
<h4>Nesting</h4>
<p>Nesting allows you to enclose CSS rule sets inside other CSS rule sets, and in the compiled CSS the selector on the inner rule set will be prefixed with the selector of the outer rule set. This <strong>eliminates the need to have repeated CSS selectors</strong> when targeting elements inside other elements that already have a rule set.</p>
<p>More on this at the <a href="https://sass-lang.com/documentation/style-rules#advanced-nesting" rel="nofollow">Style Rules page</a> on the the official SASS website.</p>
<h4>Variables</h4>
<p>Similar to variables in programming languages like JavaScript, variables in SASS allow you to define a value in a single place, and make use of it in other places in the file. This means you can group values together to reuse the same variable, and to change that value you only have to do it in one place, <strong>rather than have duplicated values</strong>.</p>
<p>More on this at the <a href="https://sass-lang.com/documentation/variables" rel="nofollow">Variables page</a> on the official SASS website.</p>
<h4>Mix-ins</h4>
<p>Mix-ins allow you to define blocks of declarations, and then reuse them throughout multiple rulesets. This is useful when you want to apply the same group of declarations (for example, border styling) to multiple elements on the page, and stops you from needing to have <strong>repeated blocks of the same declarations</strong> on the page.</p>
<p>Note that you should always be mindful that comma-separating selectors in a rule set can accomplish similar results, of sharing a block of declarations across multiple elements. Even though in your SASS you won’t be repeating the block, by using mix-ins the resulting compiled CSS <strong><em>will</em></strong> have the block repeated, which can cause the CSS to be bloated and take longer to load.</p>
<p>You can read more one the <a href="https://sass-lang.com/documentation/at-rules/mixin" rel="nofollow">Mix-ins page</a> of the official SASS website.</p>
<h4>More Features</h4>
<p>There are many more features of SASS. You can find the full list of features on the <a href="https://sass-lang.com/" rel="nofollow">official SASS website</a>.</p>
<h3>SASS or SCSS?</h3>
<p>There are two different syntaxes supported by SASS:</p>
<ul><li><strong>Indented</strong>: The original syntax released with SASS. I’m really not sure why this exists. The start and end of a rule set is controlled by indentation, rather than the curly braces <em>{}</em> in standard CSS.</li><li><strong>SCSS</strong>: A syntax very similar to CSS, with rule sets opened and closed using curly braces.</li></ul>
<p>You can see a comparison of these syntaxes at the <a href="https://sass-lang.com/documentation/syntax" rel="nofollow">Syntax page</a> on the official SASS website.</p>
<h2>Implementation in Service Portal</h2>
<p>So the first thing is that EVERY field that you can enter CSS into in Service Portal you can also enter SASS into. Before making its way to the user’s browser, the ServiceNow instance runs an in-built SASS processor over your fields to compile them into pure CSS, and sends that compiled CSS to the browser. Yay!</p>
<p>In total there are 6 different places that CSS can make its way from a Service Portal record into the user’s browser window. Below you can see each field, and what its purpose is:</p>
<p> </p>
<table class="wp-block-table" style="border-color: #ccc; border-collapse: collapse;" border="1" cellspacing="0" cellpadding="5"><tbody><tr style="height: 17px;"><td style="height: 17px;"><strong>#</strong></td><td style="height: 17px;"><strong>Table</strong></td><td style="height: 17px;"><strong>Field</strong></td><td style="height: 17px;"><strong>Purpose</strong></td></tr><tr style="height: 17px;"><td style="height: 17px;"><strong>1</strong></td><td style="height: 17px;">Service Portal</td><td style="height: 17px;">CSS Variables</td><td style="height: 17px;">Declare reusable variables that can be used in other fields</td></tr><tr style="height: 34px;"><td style="height: 34px;"><strong>2</strong></td><td style="height: 34px;">Service Portal Theme</td><td style="height: 34px;">CSS Variables</td><td style="height: 34px;">Declare reusable variables that can be used in other fields, across multiple portals</td></tr><tr style="height: 17px;"><td style="height: 17px;"><strong>3</strong></td><td style="height: 17px;">Style Sheet</td><td style="height: 17px;">CSS</td><td style="height: 17px;">CSS that should apply throughout the entire Service Portal</td></tr><tr style="height: 34.9375px;"><td style="height: 34.9375px;"><strong>4</strong></td><td style="height: 34.9375px;">Page</td><td style="height: 34.9375px;">Page Specific CSS</td><td style="height: 34.9375px;">CSS that should only apply to a specific page</td></tr><tr style="height: 17px;"><td style="height: 17px;"><strong>5</strong></td><td style="height: 17px;">Widget</td><td style="height: 17px;">CSS</td><td style="height: 17px;">CSS that should only apply to all instances of a particular widget</td></tr><tr style="height: 17px;"><td style="height: 17px;"><strong>6</strong></td><td style="height: 17px;">Widget Instance</td><td style="height: 17px;">CSS</td><td style="height: 17px;">CSS that should only apply to a specific instance of a widget</td></tr></tbody></table>
<p> </p>
<p>Even though it’s possible to enter any SASS/CSS into fields 1 and 2, to use Service Portal the way it is designed only SASS variables should be placed into these fields. Before we go into why this is the case, first I should explain scoping.</p>
<h3>Scoping</h3>
<p>As widgets can be thought of as reusable, self-contained components, if you define a CSS rule set inside field 5 (widget), it should only apply to elements inside that widget, and not to other widgets. The same can be said for the field 4 (page) – rule sets defined in there should only apply to the page it’s contained in. This shows that for a number of the fields above, some type of scoping is needed – to scope it off from other elements on the page.</p>
<p> </p>
<table class="wp-block-table" style="border-collapse: collapse;" border="1" cellspacing="0" cellpadding="5"><tbody><tr><td><strong>Field</strong></td><td><strong>Requires scoping?</strong></td><td><strong>Reason</strong></td></tr><tr><td><strong>1</strong></td><td>No</td><td>Doesn’t ever make its way to the client directly – more on this later.</td></tr><tr><td><strong>2</strong></td><td>No</td><td>Doesn’t ever make its way to the client directly – more on this later.</td></tr><tr><td><strong>3</strong></td><td>No</td><td>This file will only exist on the page for the portal which is included in.</td></tr><tr><td><strong>4</strong></td><td>Yes</td><td>Styles in this field should only apply to the page.</td></tr><tr><td><strong>5</strong></td><td>Yes</td><td>Styles in this field should only apply to any uses of the widget.</td></tr><tr><td><strong>6</strong></td><td>Yes</td><td>Styles in this field should only apply to the individual widget instance.</td></tr></tbody></table>
<p> </p>
<p>Service Portal automatically attaches an identifying class or ID to each of the elements that contain a widget, a widget instance, or the whole page itself. When the database retrieves the contents of the fields that require scoping, they’re wrapped in a containing rule set (using SASS nesting) that selects the right element using the identifying class or ID.</p>
<p> </p>
<table class="wp-block-table aligncenter is-style-regular" style="border-collapse: collapse;" border="1" cellspacing="0" cellpadding="5"><tbody><tr><td><strong>Field</strong></td><td><strong>Field contents</strong></td><td><strong>Identifying class/ID format</strong></td><td><strong>Example output on client</strong></td></tr><tr><td><strong>4</strong></td><td><em>.myClass {}</em></td><td>.page-<em>[page_sys_id]</em></td><td><em>.page-273170321bbcc8106206b95bdc4bcb89 .myClass {}</em></td></tr><tr><td><strong>5</strong></td><td><em>.myClass {}</em></td><td>.v<em>[widget_sys_id]</em></td><td><em>.v45e270b21bbcc8106206b95bdc4bcbb8 .myClass {}</em></td></tr><tr><td><strong>6</strong></td><td><em>.myClass {}</em></td><td>#x<em>[instance_sys_id]</em></td><td>#x73a145721bfcc8106206b95bdc4bcb07 .myClass {}</td></tr></tbody></table>
<p> </p>
<p>One absolutely key thing to understand here is that because all your CSS in these fields are prefixed by a scoping class, it will affect the specificity of your definitions inside the fields:</p>
<ul><li>For CSS inside the fields on your <strong>page</strong> and <strong>widget</strong> records, it will <strong>add a type B selector</strong>, as it gets prefixed with a <strong>class</strong>.</li><li>For CSS in the fields on <strong>widget instance</strong> records, it will <strong>add a type A selector</strong>, as it gets prefixed with an <strong>ID</strong>.</li></ul>
<p>Because of the importance of specificity in CSS this is very crucial to remember, especially when dealing with competing declarations across the various fields.</p>
<p>So now we know how Service Portal restricts fields so they only apply in the right places, let’s look into how the styles get to the browser.</p>
<h3>Transmission</h3>
<p>A file called <em>sp_bootstrap.scss</em> is automatically included as a style sheet in the <em>&lt;head&gt;</em> tag of Service Portal. When Service Portal loads, this triggers the browser to make a request for it, and passes into it the <em>portal_id</em> parameter. This parameter identifies which portal we are accessing so it knows which record to look at for fields 1 – 3. Fields 1 and 2 are read from the database, combined in that order, and then the content from any style sheets (field 3) attached to the Service Portal Theme are added below them. The resulting SASS is compiled into CSS and sent back as a response.</p>
<p> </p>
<figure class="wp-block-image is-resized"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/2cd8a9ec1b050414d01143f6fe4bcb28.iix" /><br /> The &lt;link&gt; element that requests sp-bootstrap.scss</figure>
<p> </p>
<p>Separately, the content of page you’re accessing is requested through the Service Portal API. This gets the structure of the page, such as containers, rows, columns, widgets, widget instances, and any widget dependencies. When each of the fields associated with these items is read from the database (potentially fields 3 – 6), the fields are scanned to see if any SASS variables are used, and if so once again the content from fields 1 and 2 are prepended to each of them which uses a SASS variable. Each item’s combined SASS is compiled into CSS and sent back with the response.</p>
<p>When the client receives the above from the Service Portal API, the compiled CSS for the page, each widget, and widget instance gets its own <em>&lt;style&gt;</em> element created by Service Portal’s JavaScript inside the <em>&lt;head&gt;</em> tag of the page. As new pages are loaded, and widgets are added and removed, these elements also get added and removed as necessary.</p>
<p> </p>
<div class="wp-block-image">
<figure class="aligncenter is-resized"><img style="max-width: 100%; max-height: 480px;" src="https://community.servicenow.com/e4c869ec1b050414d01143f6fe4bcb96.iix" /><br /> A &lt;style&gt; element created by Service Portal to host a widget’s CSS</figure>
</div>
<p> </p>
<p>Because of the behaviour of prepending fields 1 and 2 before the other fields, it is strongly advised to never put anything other than SASS variables into these fields. If you do, you will end up with duplicate declarations in each field which you have used a SASS variable in. SASS variables get removed as part of the process of compiling to CSS, and so there is no duplication in this case.</p>
<h2>Best Practices</h2>
<p>A lot of the information above I had to research for this article, and even though I’ve been working with Service Portal since it came out I’ve been able to get by without fully knowing the specifics of exactly how it works. It’s a lot to get your head around, especially if you’re new to web development, however hopefully you can use this article as a reference whenever something happens in Service Portal CSS which you don’t fully understand, and it can help you to get to the bottom of the issue, and apply the correct fix. I’ll be using it as a reference too!</p>
<p>Even though some of these details are new to me, the below best practices have served me well over the years to avoid pitfalls.</p>
<h3>Prefix Class Names</h3>
<p>Even though Service Portal widgets can be thought of as self-contained components, and there is some scoping applied to its CSS to stop it from affecting other things on the page, that doesn’t mean that other things can’t affect it.</p>
<p>An example of this is you could have a class called <em>.alert</em> defined in your widget. You can also have the same class defined on your page’s CSS, or in your theme. Of course, this may be intentional, however with a common selector like <em>.alert</em> it’s quite likely other things on your page could be selected by that too.</p>
<p>Furthermore, embedded widgets can still be affected by the widgets that they are embedded into. So a <em>.alert</em> class defined in a containing widget would apply to the embedded widget.</p>
<p>External CSS could also have an <em>.alert</em> class in it, and as external CSS doesn’t get scoped it would apply to your widget too.</p>
<p>My best practice I try to keep to is to come up with a short name or acronym for each page, widget, and portal, and prefix all my classes/ID’s etc inside it with that short name. For example, if I’m building a portal called “Marketing Event Manager” and the widget is called “Gantt Chart”, then for CSS classes in the widget I will call them something like <em>.mem-gc-aler</em>t. There is a very low likelihood that a competing declaration could exist for that classes name unless it’s something I’m doing intentionally.</p>
<h3>SASS Variable Naming</h3>
<p>SASS variables are great as they allow you to modify the styling of your widgets, without needing to change/copy the widget itself. You can use the same widget on different portals, or different pages, and have things like font color, background color, and header size change to accommodate.</p>
<p>To give as much flexibility as possible. For example, you might be creating an alert widget. In the default color scheme of the widget your border color and text color may be the same. However, you should offer flexibility to allow these to be different. So, instead of using a variable name like <em>$my-main-color</em> you should separate that out to be <em>$mem-gc-alert-text-color</em> and <em>$mem-gc-alert-border-color</em>.</p>
<h3>Default SASS Variables</h3>
<p>Don’t forget, when a widget’s SASS is compiled, fields 1 and 2 are prepended to it. So, make sure you use the <em>!default</em> flag on all SASS variables in your widget. This flag basically means that this value will be used for this variable only if it doesn’t already exist.This will ensure that the values of the variables defined in your theme/portal get used, rather than the ones in your widget.</p>
<h3>CSS Variables in the Theme</h3>
<p>If you plan on using the branding editor on your Service Portal, be careful as modifications to it will saves the values in the CSS Variables field of your Portal record, overwriting any value already stored in there.</p>
<p>Put CSS Variable declarations into the CSS Variables field of the Theme record where possible.</p>
<h3>Style Sheets for Portal-wide CSS</h3>
<p>Lastly, I’ll repeat you shouldn’t be putting anything other than SASS variables into fields 1 and 2. If you have CSS that you want to apply to the entire portal, this should go in a Style Sheet record and should be included through the CSS Includes related list on the Theme record.</p>
<h2>Conclusion</h2>
<p>Once again, I hope this article has been valuable to you. Please share this article on social media, and let me know in the comments any feedback you have, questions, comments. Please do follow me on <a href="http://twitter.com/dylanlindgren" rel="nofollow">Twitter</a> as well to keep up to date on new posts!</p>