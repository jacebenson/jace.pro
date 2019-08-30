---
date: '2019-08-25'
keywords:
- "service portal"
- "custom form"
- "embedded form"
layout: post
title: 'Embedding a widget form in a widget on Service Portal'
---

So this weekend I had the opportunity to help someone out with an issue
on their side project.  They had this list they wanted to access from 
a phone, and wanted the ability to add a new record from a phone.

Simple enought I though.  Just make a [bootstrap list](https://getbootstrap.com/docs/3.3/components/#list-group)
of sorts and add a button, to open a [spModal](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=SPM-open_O)
to the OOB form widget.

That worked, but we ended up with 3 buttons, and 2 headers.

So that didn't work.  Sure, I could have removed the buttons, by setting 
the `buttons` array to blank.  Also I could have looked into the 
`widget-form` options.  I didn't though.  Because it was for a rating 
system and needed to use something that has a [star ranking](https://angular-ui.github.io/bootstrap/#!#rating)

In case you are not aware, ServiceNow does a few things for you, like load
in a bunch of UI Bootstrap directives.  

Enter `<uib-rating>`

This get's a little fuzzy here, but essentially, if you have a numeric scale;
1-10 or less, you can represent it with stars or other icons.  You cannot do 
this with the OOB widgets you'll need your own input form.  That's where this 
post really shines for me.  I need to remember how I did this.

So we had a Widget already, called "Home" for the list of ratings.  Then we 
wanted a spModal to load a new widget that was the form.  One of the fields
is this UIB Rating thing.  Then when the [OK] is pressed, send the data back
up to the parent widget, and make a new Rating record, and refresh the list.

When sorting this out, I didn't have that last paragraph.  So it took me a bit
to find how to pass the data but here's the cruicial bits if you find yourself
in a similiar situation.

Below is a Home widget which makes the call to spModal.open.  That has a promise
to handle the response in the `then` bit.  That's where this magic happens.  It
wasn't in the docs.  Thankfully this markdown file was still out on [Github](https://github.com/service-portal/x-archive/blob/master/documentation/spModal.md#example-5-embedded-widget-with-shared-data).

End result was this;

![](/uploads/2019-08-25-sp-embedded-widgets.gif)

That example shows how to do this for variable, and I wanted to do this for five.

### Home Widget

```html
<div class="list-group">
  <a href="#" class="list-group-item" ng-repeat="book in c.data.books">
    {{book.name}} <span class="badge">{{book.ratingCount}}</span>
  </a>  
</div>
<button ng-click="c.onWidget() "class="btn btn-default">
  Add Rating
</button>
```

```js
//Client Script
function(spModal) 
{
	/* widget controller */
	var c = this;
	var shared = {};
	c.onWidget = function (){
		spModal.open({
			shared: shared,
			value: c.response,
			title: 'titkfadsf',
			widget: 'rating_form', 
			widgetInput: {}
		}).then(function () {
					console.log(shared);
					c.data.bookrating=shared;
					c.server.update()		
})
	}
}
```

```js
//Server Script
(function() {
	/* populate the 'data' object */
	/* e.g., data.table = $sp.getValue('table'); */	
	if (input) {//if submitted rating
		console.log(input)
		var rating=new GlideRecord('x_86691_heardit_ratings')
		rating.newRecord();
		rating.book=input.bookrating.title;
		rating.stars=input.bookrating.stars;
		rating.author=input.bookrating.input;
		rating.genre=input.bookrating.genre;
		rating.u_comments=input.bookrating.comments;
		rating.insert()
	}
	data.books = [];
	var countRatings = new GlideAggregate('x_86691_heardit_ratings');
	//parm1: COUNT, MIN, MAX, parm2: field
	countRatings.addAggregate('COUNT', 'book');
	countRatings.addAggregate('AVG', 'stars');
	countRatings.query();
	while (countRatings.next()) {
		var book = countRatings.getValue('book');
		var ratingCount = countRatings.getAggregate('COUNT', 'book');
		var averageRating = countRatings.getAggregate('AVG', 'stars');
		data.books.push({
			name:book,
			averageRating:averageRating,
			ratingCount: ratingCount
		});
	}


})();
```

### Form Widget

```html
<form class="form-horizontal"
      ng-model-options="{getterSetter: true}">
<fieldset>

<!-- Form Name -->
<legend>Form Name</legend>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">Title</label>  
  <div class="col-md-4">
  <input id="bookTitle" 
         ng-model='c.title' 
         ng-model-options="{getterSetter:true}"
         name="textinput" 
         type="text" 
         placeholder="placeholder" 
         class="form-control input-md">
    
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">Author</label>  
  <div class="col-md-4">
  <input id="bookAuthor" 
         ng-model='c.author' 
         ng-model-options="{getterSetter:true}"
         name="textinput" 
         type="text" 
         placeholder="placeholder" 
         class="form-control input-md">
    
  </div>
</div>

<!-- Select Basic -->
<div class="form-group">
  <label class="col-md-4 control-label" for="selectbasic">Genre</label>
  <div class="col-md-4">
    <select id="bookGenre" 
            ng-model='c.genre' 
            ng-model-options="{getterSetter:true}"
            name="selectbasic"
            class="form-control">
      <option value="">Pick One</option>
      <option value="Action/Adventure">Action/Adventure</option>
      <option value="Autobiography/Biography/Memoir">Autobiography/Biography/Memoir</option>
      <option value="Children's Fiction">Children's Fiction</option>
      <option value="Comedy/Humor">Comedy/Humor</option>
      <option value="Crime/Mystery">Crime/Mystery</option>
      <option value="Drama/Romance">Drama/Romance</option>
      <option value="History/Classic">History/Classic</option>
      <option value="Horror/Paranormal">Horror/Paranormal</option>
      <option value="Motivational/Educational/Health & Wellness">Motivational/Educational/Health &amp; Wellness</option>
      <option value="Mystery/Suspense/Thriller">Mystery/Suspense/Thriller</option>
      <option value="Poetry">Poetry</option>
      <option value="Religion/Spirituality">Religion/Spirituality</option>
      <option value="Sci-Fi/Fantasy">Sci-Fi/Fantasy</option>
      <option value="Other">Other</option>
    </select>
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">Stars</label>  
  <div class="col-md-4">
  <uib-rating ng-model='c.stars' 
              ng-model-options="{getterSetter:true}"
              max="5"
              ></uib-rating>
  </div>
</div>

<!-- Textarea -->
<div class="form-group">
  <label class="col-md-4 control-label" for="textarea">Comments</label>
  <div class="col-md-4">                     
    <textarea ng-model='c.comments' 
              ng-model-options="{getterSetter:true}"
              class="form-control" 
              id="bookComments" 
              name="bookComments">default text</textarea>
    
  </div>
</div>
</fieldset>
</form>
```

```js
//Client Script
function() {
  /* widget controller */
  var c = this;
	var shared = c.widget.options.shared;
	c.title = function title(newVal){
		return angular.isDefined(newVal) ? (shared.title = newVal) : shared.title;
	}
	c.author = function author(newVal){
		return angular.isDefined(newVal) ? (shared.author = newVal) : shared.author;
	}
	c.genre = function genre(newVal){
		return angular.isDefined(newVal) ? (shared.genre = newVal) : shared.genre;
	}
	c.stars = function stars(newVal){
		return angular.isDefined(newVal) ? (shared.stars = newVal) : shared.stars;
	}
	c.comments = function comments(newVal){
		return angular.isDefined(newVal) ? (shared.comments = newVal) : shared.comments;
	}
}
```

```js
//Server Script
(function() {
  /* populate the 'data' object */
  /* e.g., data.table = $sp.getValue('table'); */

})();
```

