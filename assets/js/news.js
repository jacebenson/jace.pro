
var url = new URL(document.URL);
if(url.search){
window.location.replace('https://news.jace.pro/' + url.search);
}else {
  window.location.replace('https://news.jace.pro/');
}