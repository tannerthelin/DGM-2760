/*jslint browser:true */
"use strict";

var linkList = document.querySelectorAll("ul#primaryNavigation li a");

var unorderedList = document.createElement("UL");
	unorderedList.setAttribute("id", linkHref);
	



for (var i = 0; i < linkList.length; i++) {
	// Get the link's attributes
	var linkHref = linkList[i].getAttribute("href");
	var linkText = linkList[i].text;


	var anchorLink = document.createElement("A");
	anchorLink.setAttribute("href", linkHref);
	anchorLink.innerHTML = linkText;

	var listItem = document.createElement("LI");
	listItem.appendChild(anchorLink);
	unorderedList.appendChild(listItem);
	
}

document.getElementById("smallNavArea").appendChild(unorderedList);