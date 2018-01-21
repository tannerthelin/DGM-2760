//Javascript Document
/*jslint browser:true*/
"use strict";

// Create an array with some trees
var treeArray = ["Oak Tree", "Apple Tree", "Cherry Tree", "Maple Tree"];
var a = document.getElementById("addStart");
var b = document.getElementById("addEnd");
var c = document.getElementById("remove-first");
var d = document.getElementById("remove-second");
var e = document.getElementById("remove-last");
var f = document.getElementById("sort-alphabetically");
var g = document.getElementById("make-lowercase");
var h = document.getElementById("tell-number-2");
var i = document.getElementById("tell-number-4");



var displayArrayItems = function() {
	var myString = "";
	var i;

	for (i = 0; i < treeArray.length; i++) {
		myString += treeArray[i] + "<br>";
	}
	document.getElementById("displayTrees").innerHTML = myString;
}; //end of function

displayArrayItems();





Array.prototype.myLcase = function() {
    for (i = 0; i < this.length; i++) {
        this[i] = this[i].toLowerCase();
    }
};








// Add Item to Beginning
a.onclick  = function() {
	treeArray.unshift("Blue Spruce");
	displayArrayItems();
}

// Add Item to End
b.onclick  = function() {
	treeArray.push("Blue Spruce");
	displayArrayItems();
}


// Remove First Item
c.onclick = function () {
	if (treeArray.length < 1) {
		document.getElementById("messages").innerHTML = "There are not enough items in this list.";
	}
	else{
		treeArray.shift();
		displayArrayItems();
	}
}


// Remove Second Item
d.onclick = function () {
	if (treeArray.length < 2) {
		document.getElementById("messages").innerHTML = "There are not enough items in this list.";
	}
	else{
		treeArray.splice(1, 1);
		displayArrayItems();
	}	
}


// Remove last item
e.onclick = function () {
	if (treeArray.length < 1) {
		document.getElementById("messages").innerHTML = "There are not enough items in this list.";
	}
	else{
		treeArray.pop();
		displayArrayItems();
	}	
}


// Sort Alphabetically
f.onclick = function () {
	treeArray.sort();
	displayArrayItems();
}

// Make Lowercase
g.onclick = function () {
	treeArray.myLcase();
	displayArrayItems();
	}



// Display the name of #2 on the list
h.onclick  = function() {

	if (treeArray[1] == null) {
		document.getElementById("messages").innerHTML = "There are not enough items in this list.";
		} 
	else {
		document.getElementById("messages").innerHTML = treeArray[1];
		}
		displayArrayItems();
}






// Display the name of #4 on the list
i.onclick  = function() {

	if (treeArray[3] == null) {
		document.getElementById("messages").innerHTML = "There are not enough items in this list.";
		} 
	else {
		document.getElementById("messages").innerHTML = treeArray[3];
		}
		displayArrayItems();
}
