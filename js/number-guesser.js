
//Javascript Document
/*jslint browser:true*/
"use strict";

// Function used to generate random number
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

// Generate a random number & print it
var randomNumber = getRandomInt (15);
//document.getElementById("randomNum").innerHTML = randomNumber;

var timesSubmitted = 0;
document.getElementById("times-submitted").innerHTML = timesSubmitted; 

function SubmitInput() {
	timesSubmitted += 1;
	document.getElementById("times-submitted").innerHTML = timesSubmitted; 
	var myInput = document.getElementById("numberInput").value;

	//Check if the input is within the range
	if (myInput < 1 || myInput > 15) {
		document.getElementById("message").innerHTML = "Please enter a number between 1 and 15.";
	} 
	// If input is less than the random number
	else if (myInput < randomNumber) {
		document.getElementById("message").innerHTML = "Your number is too low. Try again!";
	} 
	// If you guessed the correct number
	else if (myInput == randomNumber) {
		win(timesSubmitted);
		document.getElementById("message").innerHTML = "You win!";
	} 
	// If input is greater than the random number
	else if (myInput > randomNumber) {
		document.getElementById("message").innerHTML = "Your number is too high. Try again!";
	}
}


function win(int) {

	var pathToImage;
	var ribbonColor;

	switch(timesSubmitted){

    case 1:
    case 2:
    case 3:
        pathToImage = "assets/images/blue-ribbon.png";
        ribbonColor = "blue";
        break;

    case 4:
    case 5:
    case 6:
        pathToImage = "assets/images/red-ribbon.png";
        ribbonColor = "red";
        break;

    default:
        pathToImage = "assets/images/yellow-ribbon.png";
        ribbonColor = "yellow";
	}

	var awardImage = document.createElement("IMG");
	awardImage.setAttribute('src', pathToImage);
	awardImage.setAttribute("width", "70");
	awardImage.setAttribute("padding-top", "50px");
	console.log(awardImage);

	document.getElementById("image-here").appendChild(awardImage);
	document.getElementById("award-message").innerHTML = "You submitted " + int + " times, so you get a  " + ribbonColor + " ribbon.";
}




















