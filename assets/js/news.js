document.addEventListener("DOMContentLoaded", function (event) {
  var urlParam = new URL(document.URL);
  urlParam = new URLSearchParams(urlParam.search)
  if (urlParam.has('text')) {
    document
      .getElementById('searchtext')
      .value = urlParam.get('text');
  }
  if (urlParam.has('start') && urlParam.has('end')) {
    document
      .getElementById('date')
      .value = urlParam
      .get('start')
      //.substring(0, 5) 
      + '/'
      + urlParam
      .get('end')
      //.substring(0, 4)
  }

  function submitForm() {
    //event.preventDefault();  To prevent following the link (optional)
    var form = {};
    form.date = document
      .getElementById('date')
      .value
    form.search = document
      .getElementById('searchtext')
      .value
    form.finalQuery = [];
    if (form.date.length === 4) {
      form.dateQuery = 'start=' + form.date + '-01-01&end=' + form.date + '-12-31';
      form
        .finalQuery
        .push(form.dateQuery);
    } else if (form.date.length > 4 && form.date.length < 10 && form.date.indexOf('-') > -1) {
      form.dateQuery = 'start=' + form
        .date
        .split('-')[0] + '-01-01&end=' + form
        .date
        .split('-')[1] + '-12-31';
      form
        .finalQuery
        .push(form.dateQuery);
    } else if (form.date.length > 16) {
      //assume its either
      //yyyy-mm-dd-yyyy-mm-dd or other seperator
      form.dateQuery = 'start=' + form.date.substring(0,10) + '&end=' + form.date.substring(11,form.date.length);
      form
        .finalQuery
        .push(form.dateQuery);
    }
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
  document
    .getElementById('date')
    .addEventListener('keypress', function (e) {
      var key = e.which || e.keyCode;
      if (key === 13) { // 13 is enter
        // code for enter
        submitForm();
      }
    });
    document
    .getElementById('searchtext')
    .addEventListener('keypress', function (e) {
      var key = e.which || e.keyCode;
      if (key === 13) { // 13 is enter
        // code for enter
        submitForm();
      }
    });
  document
    .getElementById('submitquery')
    .addEventListener('click', function () {
      submitForm();
    });
  var params = (new URL(document.location)).searchParams;
  var start = params.get('start'); // is the string "Jonathan Smith".
  var end = params.get('end');
  var url = "https://news.jace.pro/.netlify/functions/server";
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