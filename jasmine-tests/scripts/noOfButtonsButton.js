var gameParameters = [];
gameParameters.noOfButons=4;

function adjustNoOfButtons(buttonsUsed) { // change number of buttons when clicked
	if (buttonsUsed == 4) { // if currently 4, set to 6
		gameParameters.noOfButtons = 6;
	}
	else if (buttonsUsed == 6) { // if currently 6, set to 4
		gameParameters.noOfButtons = 4;
	}
	
	return gameParameters.noOfButtons;
	//labelNoOfButtons(gameParameters.noOfButtons); // label button with no of buttons required
	//configureButtons(gameParameters.noOfButtons); // show desired number of buttons on screen
}
