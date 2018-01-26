var peopleInfo = document.getElementById("personal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open("GET", "http://www.filltext.com/?rows=9&fname={firstName}&lname={lastName}&tel={phone|format}}&city={city}&pretty=true");
  ourRequest.onload = function () {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
  };
  ourRequest.send()
    
  btn.classList.add("hide-me");
});

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + "My name is " + data[i].fname + " " + data[i].lname + ". I'm from " + data[i].city + " and my phone number is " + data[i].tel + ".</p>";
  }

  peopleInfo.insertAdjacentHTML("beforeend", htmlString);
};