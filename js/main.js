//Javascript Document
/*jslint browser:true*/
"use strict";

// Change title & subtitle from the Javascript
document.getElementById("company-name").innerHTML = "avenue studios design";
document.getElementById("company-slogan").innerHTML = "Nobody does it better than us.";


// Add Date to page
var d = new Date();

document.getElementById("date").innerHTML = d;


// Prompt for name and display on page
var userName = prompt("Enter your name.");

var myName = "Hello "+ userName +", welcome to the page.";
document.getElementById("userName").innerHTML = myName;