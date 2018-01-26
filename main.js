﻿document.addEventListener("DOMContentLoaded", function() {

var pageCounter = 1;
var peopleInfo = document.getElementById("personal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open("GET", "https://raw.githubusercontent.com/LukaszSzmyga/json-example/master/people-" + pageCounter + ".json");
  ourRequest.onload = function () {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
  };
  ourRequest.send();
  pageCounter++;
  if (pageCounter > 4) {
    btn.classList.add("hide-me");
  }
});

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + "My name is " + data[i].fname + " " + data[i].lname + ". I'm from " + data[i].city + " and my phone number is " + data[i].tel + ".</p>";
  }

  peopleInfo.insertAdjacentHTML("beforeend", htmlString);
};
});