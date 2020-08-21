Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}
//debugger;
function setValue(fieldID, value){
  console.log('trying to set', fieldID, 'to', value);
  console.log('document.getElementById("'+fieldID+'").value("'+value+'");')
  document.getElementById(fieldID).value = value;
}
document.addEventListener("DOMContentLoaded", function (event) {
  var urlParam = new URL(document.URL);
  urlParam = new URLSearchParams(urlParam.search)
  if (urlParam.has('text')) {
    setValue('searchtext', urlParam.get('text'));
  }
  if (urlParam.has('start')) {
    setValue('start', urlParam.get('start'));
  } else {
    var start = new Date().addDays(-14);
    start = start.toISOString().split('T')[0];
    var end = new Date().toISOString().split('T')[0];
    setValue('start', start);
    
  }
  if (urlParam.has('end')){
    setValue('end', urlParam.get('end'));  
  } else {
    var end = new Date().toISOString().split('T')[0]; 
    setValue('end', end);  
  }

  function submitForm() {
    //event.preventDefault();  To prevent following the link (optional)
    var form = {};
    form.start = document
      .getElementById('start')
      .value
    form.end = document
      .getElementById('end')
      .value
    form.search = document
      .getElementById('searchtext')
      .value
    form.finalQuery = [];
    form.dateQuery = 'start=' + form.start + '&end=' + form.end;
      form
        .finalQuery
        .push(form.dateQuery);
    if (form.search.length > 0) {
      form.searchQuery = 'text=' + form.search;
      form
        .finalQuery
        .push(form.searchQuery);
    }
    console.log(form);
    window.location.href = './?' + form
      .finalQuery
      .join('&');
  }
  /*
  document
    .getElementById('date')
    .addEventListener('keypress', function (e) {
      var key = e.which || e.keyCode;
      if (key === 13) { // 13 is enter
        // code for enter
        submitForm();
      }
    });
    */
    document
    .getElementById('searchtext')
    .addEventListener('keypress', function (e) {
      var key = e.which || e.keyCode;
      if (key === 13) { // 13 is enter
        // code for enter
        //debugger;
        console.log('enter pressed')
        submitForm();
      }
    });
  document
    .getElementById('submitquery')
    .addEventListener('click', function () {
      submitForm();
    });
  //var url = "https://news.jace.pro/.netlify/functions/server";
  var url = "https://zen-jones-6f4442.netlify.com/.netlify/functions/server";
  var pageUrl = new URL(document.URL);
  url += pageUrl.search;
  if (pageUrl.search) {
    url += '&unique=' + new Date().toISOString();
  } else {
    url += '?unique=' + new Date().toISOString();
  }
  
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": url,
    "method": "GET",
    "headers": {}
  }
  jQuery
    .ajax(settings)
    .done(function (response) {
      console.log(response);
      parseResponse(response);
    });

  function parseResponse(responseObj) {
    console.log(responseObj);
    var table = document.getElementById('newsTable');
    var news = responseObj.filteredFeeds;
    if (news.length === 0) {}
    news.forEach(function (item) {
      var tr = document.createElement('tr');
      var date = document.createElement('td');
      var d = new Date(item.date)
      date.innerText = d.toLocaleDateString();
      var type = document.createElement('td');
      type.innerText = item.category;
      var site = document.createElement('td');
      site.innerText = item.site;
      var author = document.createElement('td');
      if (item.author) {
        var patrons = [
          "Andrew Albury-Dor",
          "Kevin Clark",
          "kevclark",
          "Alex Darby",
          "amullendarby"
        ]
        patrons.forEach(function (name) {
          if (item.author == name) {
            author.classList.add('bg-primary'); // text-white');
            author.classList.add('text-white'); // text-white');
            author.classList.add('rounded'); // text-white');
            item.author = '🌟' + item.author + '🌟';
          }
        });

        if (item.author == "Jace Benson") {
          author.classList.add('bg-secondary'); // text-white');
          author.classList.add('text-white'); // text-white');
          author.classList.add('rounded'); // text-white');
          item.author = '🌟' + item.author + '🌟';
        }
        author.innerText = item.author;
      } else {
        author.innerText = "Unknown";
      }

      var link = document.createElement('td');
      link.innerHTML = '<a href="' + item.link + '" target="_blank">' + item.title + '</a>';
      tr.appendChild(date);
      tr.appendChild(type);
      tr.appendChild(site);
      tr.appendChild(author);
      tr.appendChild(link);
      table.appendChild(tr);
    });
  }
});