function labelDirectionButton(directionFwd) { // label direction button when called
	var direction;
	if (directionFwd == true) { // if fwd play
		direction = "Fwd"; // set label to Fwd
	}
	else { // if rev play
		direction = "Rev"; // set label to Rev
	}
	//$("#Direction-Button").empty();
	//$("#Direction-Button").append("Direction: " + Direction); // give button label
	
	return direction;
}