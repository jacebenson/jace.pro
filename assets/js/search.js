function searchPosts(){
    //console.log('arguments', arguments)
    //console.log('arguments[0]',arguments[0]);
    //console.log("document.getElementById('searchText').value;", document.getElementById('searchText').value);
    var text = arguments[0] || document.getElementById('searchText').value;
    text = text.toLowerCase();
    var returnArr = posts.filter(function(post){
        var title = post.title.toLowerCase();
        var content = post.content.toLowerCase();
        var meta = post.meta.toLowerCase();
        if(title.includes(text) || 
        content.includes(text) ||
        meta.includes(text)){
            return true;
        } else { 
            return false;
        }
        //if(post.content, post.meta, post.title, post.url)
    });
    returnArr = returnArr.sort(function(a,b){
        return b-a;
    })
    showSearchResults(returnArr);
    return returnArr
}
function showSearchResults(arrOfPosts){
    var searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';//clear results
    arrOfPosts.forEach(function(post){
        var div = document.createElement('div');
        var localeDate = new Date(post.date).toISOString().split('T')[0];
        div.innerHTML = localeDate + ' - <a href="' + post.url + '">' + post.title + '</a>';
        document.getElementById('searchResults').appendChild(div);
    });
}
function preventSubmitwithEnter() {
  var formElement = document.getElementById("search-form");

  function handleForm(event) {
    event.preventDefault();
  }
  formElement.addEventListener('submit', handleForm);
}
function submitWithEnterInTextbox() {
  document
    .getElementById('searchText')
    .addEventListener('keypress', function (event) {
      //debugger;
      var key = event.which || event.keyCode;
      if (key === 13) { // 13 is enter
        // code for enter
        //debugger;
        console.log('enter pressed')
        searchPosts();
      }
    });
}
document.addEventListener("DOMContentLoaded", function (event) {
  preventSubmitwithEnter();
  submitWithEnterInTextbox();
});