/*jslint browser:true */
"use strict";

function test(){
	var nameEntry;
	var phoneEntry;
	var creditEntry;
	var paymentRadio;
	var vehicleDropdown;
	var i;
	var status = true;

	var requiredSections = ['fullName', 'phoneNumber', 'payMethod', 'ccNumber', 'vehicle'];
	for (i = 0; i < requiredSections.length; i++) {
		document.getElementById(requiredSections[i]).className = "normal";
	}



	//Name
	nameEntry = document.forms.myForm.fullName.value;
	if(nameEntry === "" || nameEntry === null) {
		status = false;
		document.getElementById("fullName").className = "error";
	}



	//Phone Number
	phoneEntry = document.forms.myForm.phoneNumber.value;
	phoneEntry = phoneEntry.replace(/-/g, '');

	if(phoneEntry.length < 10 || phoneEntry.length > 15) {
		status = false;
		document.getElementById("phoneNumber").className = "error";
	}



	//Credit Card
	creditEntry = document.forms.myForm.ccNumber.value;
	creditEntry = creditEntry.replace(/ /g, '');

	if(creditEntry.length != 15) {
		status = false;
		document.getElementById("ccNumber").className = "error";
	}



	//Payment Type (Radio Button)
	paymentRadio = document.getElementsByName("payMethod");
	var foundCheckedButton = false;
	for (i = 0; i < paymentRadio.length; i++) {
		if (paymentRadio[i].checked) {
			foundCheckedButton = true;
			break;
		} // end of the "if" statement
	} // end of the "for" loop


	if (foundCheckedButton === false) {
		status = false;
		document.getElementById("payMethod").className = "error";
	}


	// Vehicle Type
	vehicleDropdown = document.forms.myForm.vehicle.selectedIndex;
	if (vehicleDropdown === 0) {
		status = false;
		document.getElementById("vehicle").className = "error";

	}


	if (status === false) {
		document.getElementById("formProblems").className = "showErrorMsg";
	}

	return status; 
}