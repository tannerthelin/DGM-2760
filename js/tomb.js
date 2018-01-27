//Javascript Document
/*jslint browser:true*/
"use strict";

var tomb = {

	incorrect: 1,
	correct: 2,

	check: function(x) {


		if (x==tomb.correct) {
			document.getElementById("textArea").innerHTML = "You got it!";
		} else {
			document.getElementById("textArea").innerHTML = "Nope.";
		}


	} //End of method

};//End of object