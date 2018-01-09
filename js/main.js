//Javascript Document
/*jslint browser:true*/
"use strict";

var d = new Date();

document.getElementById("date").innerHTML = d;


// Prompt for name and display on page
var userName = prompt("Enter your name.");

var myName = "Hello "+ userName +", welcome to the page.";
document.getElementById("userName").innerHTML = myName;