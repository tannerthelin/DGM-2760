
//Javascript Document
/*jslint browser:true*/
"use strict";

function MyWindowResize() {
	// Add window size to page
	var w = window.innerWidth;
	var h = window.innerHeight;

	var widthSentence = "My window is "+ w +" pixels wide.";
	widthSentence += "<br>My window is "+ h +" pixels tall.";

	document.getElementById("window-size").innerHTML = widthSentence;
}

MyWindowResize();



// Add window size to page
var x = window.screenLeft;
var y = window.screenTop;

var widthSentence = "My window is "+ x +" px away from the left edge of the screen,";
widthSentence += "<br>and "+ y +" px away from the top of the screen.";

document.getElementById("window-offset").innerHTML = widthSentence;

// Add window size to page
var x = window.screenLeft;
var y = window.screenTop;

var offsetSentence = "My window is "+ x +" px away from the left edge of the screen,";
offsetSentence += "<br>and "+ y +" px away from the top of the screen.";

document.getElementById("window-offset").innerHTML = offsetSentence;



// Add document URL to page
var myURL = document.URL;

var urlSentence = "The URL of this page is <br>"+ myURL;

document.getElementById("page-url").innerHTML = urlSentence;

// Add document Title to page
var myTitle = document.title;

var titleSentence = "The Title of this page is <br>"+ myTitle;

document.getElementById("document-title").innerHTML = titleSentence;

// Add Last Modified to page
var myModified = document.lastModified;

var modifiedSentence = "This page was last modified <br>"+ myModified;

document.getElementById("modified").innerHTML = modifiedSentence;














