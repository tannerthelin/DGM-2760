//Javascript Document
/*jslint browser:true*/
"use strict";

function story() {
	var myNounArray = document.getElementById("nounsInput").value.toLowerCase().split(/\s+|\n/);
	var myAdjectiveArray = document.getElementById("adjectivesInput").value.toLowerCase().split(/\s+|\n/);
	var myVerbArray = document.getElementById("verbsInput").value.toLowerCase().split(/\s+|\n/);





	var myStory = "Once upon a time, there were four " + myAdjectiveArray[0] + " " + myNounArray[0] + "s named Flopsy, Mopsy, Cottontail, and Peter. " +
	"They lived with their mother underneath a " + myNounArray[1] + " near a " + myAdjectiveArray[1] + " " + myNounArray[2] + "." + "<br><br>" +
	"Now my dears, said " + myAdjectiveArray[2] + " Mrs. Rabbit, you may go over the " + myNounArray[3] + " or the " + myNounArray[4] + ", but do not go into Mr. McGregor's " + myNounArray[5] + "." +
	"Your father had an accident there and he was put in a " + myNounArray[6] + " by Mrs. McGregor." + "<br>" +
	"Now " + myVerbArray[0] + " along, and don't get into mischief. I am going " + myVerbArray[1] +"ing.";





	document.getElementById("storyArea").innerHTML = myStory;
	console.log(myNounArray);
}