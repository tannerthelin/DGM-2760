//Javascript Document
/*jslint browser:true*/
"use strict";

// Overarching random generation function
function generateRandom (top) {
	var x = Math.random();
	x = x * top;
	x = Math.floor(x);
	x = x + 1;
	return x;
}

// Create my 3 variables to be plugged into the feedback Message
var month = generateRandom(12);
var day = generateRandom(31);
var fortune = generateRandom(5);

//Use the random fortune number to pick out the corresponding fortune.
function getFortune () {
	var msg;
	switch(fortune) {
		case 1: msg = "get attacked by a killer chiuaua.";
		break;
		case 2: msg = "find a rare piece of art on the street.";
		break;
		case 3: msg = "get dumped by your significant other.";
		break;
		case 4: msg = "accidentally throw your remote through your TV.";
		break;
		case 5: msg = "get pulled into a secret CIA operation.";
		break;
	}
	return msg;
}

//Use the random month number to pick out the corresponding month.
function getMonth () {
	var randomMonth;
	switch(month) {
		case 1: randomMonth = "January";
		break;
		case 2: randomMonth = "February";
		break;
		case 3: randomMonth = "March";
		break;
		case 4: randomMonth = "April";
		break;
		case 5: randomMonth = "May";
		break;
		case 6: randomMonth = "June";
		break;
		case 7: randomMonth = "July";
		break;
		case 8: randomMonth = "August";
		break;
		case 9: randomMonth = "September";
		break;
		case 10: randomMonth = "October";
		break;
		case 11: randomMonth = "November";
		break;
		case 12: randomMonth = "December";
		break;
	}
	return randomMonth;
}


// Putting together the fortune
var feedbackMessage = "On " + getMonth() + " " + day + ", you might " + getFortune();

// Add to HTML document
document.getElementById("message").innerHTML = feedbackMessage;