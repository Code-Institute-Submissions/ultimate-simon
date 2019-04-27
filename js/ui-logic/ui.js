//// When page loads, resizes or changes orientation
///  Show/Hide Buttons to suit the screen width/Height ie Landscape and Portrait
///  And show either 4 or 6 buttons as per options, also adjust button size to suit
///  The number of buttons on screen

"use strict";

$(window).on("orientation resize load", function() { // on changes to screen reconfigure the buttons
	configureButtons(gameParameters.noOfButtons); // according to number and orientation of screen
});

function loserLoser(cbResetGame, buttonsInUse) { // on user selecting an incorrect button
	var i = 0;
	gameParameters.gameOver = true;
	do {
		var delay = i * 250; // calculate delay for button to highlight each time
		setTimeout(playButton, delay, 0, "200"); //  play red button repeatedly
		i++;
	} while (i < buttonsInUse);
	var delayReset = delay * 3; // calculate delay of restting game
	setTimeout(cbResetGame, delayReset); // reset game when sequence finishes
}


function winnerWinnerChickenDinner(cbResetGame, buttonsInUse) { // on user completeing game successfully
	var i = 0;
	gameParameters.gameOver = true;
	do {
		var delay = i * 250; // calculate delay for each button press
		setTimeout(playButton, delay, i, "200"); // play buttons of winner sequence
		i++;
	} while (i < buttonsInUse); // while less than buttons on screen
	var delayReset = delay * 3; // calculate delay for reset
	setTimeout(cbResetGame, delayReset); // reset game after winning sequence finishes
}



function configureButtons(buttonsInUse) {
	var height = $(window).height(); // read screen height
	var width = $(window).width(); // read screen width
	if (buttonsInUse == 6) { // if 6 buttons in use
		$("#red-button").css({ "height": "15vh", "width": "15vh" }); // set button size to 15%
		$("#yellow-button").css({ "height": "15vh", "width": "15vh" }); // of viewport height
		$("#green-button").css({ "height": "15vh", "width": "15vh" });
		$("#blue-button").css({ "height": "15vh", "width": "15vh" });
		if (width > height) { // if landscape screen
			$("#purple-button-portrait").removeClass("purple-button-style"); // remove portrait purple/brown buttons
			$("#brown-button-portrait").removeClass("brown-button-style");
			$("#purple-button-landscape").addClass("purple-button-style").css({ "height": "15vh", "width": "15vh" }); // add extra buttons to landscape arrangement
			$("#brown-button-landscape").addClass("brown-button-style").css({ "height": "15vh", "width": "15vh" });

		}
		else { // if portrait sceen
			$("#purple-button-portrait").addClass("purple-button-style").css({ "height": "15vh", "width": "15vh" }); // show portrait purple/brown buttons
			$("#brown-button-portrait").addClass("brown-button-style").css({ "height": "15vh", "width": "15vh" });
			$("#purple-button-landscape").removeClass("purple-button-style"); // hide landscapr purple/brown buttons
			$("#brown-button-landscape").removeClass("brown-button-style");
		}

	}
	else { // if 4 buttons selected
		$("#purple-button-portrait").removeClass("purple-button-style"); // hide purple/brown buttons
		$("#brown-button-portrait").removeClass("brown-button-style");
		$("#purple-button-landscape").removeClass("purple-button-style");
		$("#brown-button-landscape").removeClass("brown-button-style");
		$("#red-button").css({ "height": "20vh", "width": "20vh" }); // set button size to 20% viewport height
		$("#yellow-button").css({ "height": "20vh", "width": "20vh" });
		$("#green-button").css({ "height": "20vh", "width": "20vh" });
		$("#blue-button").css({ "height": "20vh", "width": "20vh" });
	}
}

function labelRoundsButton(roundsLabel) { // Label Rounds button when called
	$("#Rounds-Button").empty();
	$("#Rounds-Button").append(roundsLabel + " Rounds");
}

function labelDirectionButton(DirectionFwd) { // label direction button when called
	var Direction;
	if (DirectionFwd == true) { // if fwd play
		Direction = "Fwd"; // set label to Fwd
	}
	else { // if rev play
		Direction = "Rev"; // set label to Rev
	}
	$("#Direction-Button").empty();
	$("#Direction-Button").append("Direction: " + Direction); // give button label
}

function labelNoOfButtons(noOfButtons) { //  label no of buttons button
	$("#No-Of-Buttons").empty();
	$("#No-Of-Buttons").append(noOfButtons + " Buttons"); // give button label of buttons in use
}

function adjustDirection(playFwd) { // change direction when button clicked
	if (playFwd == true) { // if fwd change to reverse
		gameParameters.playForward = false;
	}
	else if (playFwd == false) { // if reverse change to fwd
		gameParameters.playForward = true;
	}
	labelDirectionButton(gameParameters.playForward); // label button with direction
}

function adjustNoOfButtons(buttonsUsed) { // change number of buttons when clicked
	if (buttonsUsed == 4) { // if currently 4, set to 6
		gameParameters.noOfButtons = 6;
	}
	else if (buttonsUsed == 6) { // if currently 6, set to 4
		gameParameters.noOfButtons = 4;
	}
	labelNoOfButtons(gameParameters.noOfButtons); // label button with no of buttons required
	configureButtons(gameParameters.noOfButtons); // show desired number of buttons on screen
}

function adjustDirection(FwdDirection) { // adjust direction of play when called
	if (FwdDirection == true) { // if fwd, on click set to reverse
		gameParameters.playForward = false;
	}
	else { //  if rev, on click set to fwd
		gameParameters.playForward = true;
	}
	labelDirectionButton(gameParameters.playForward); // label button according to direction selected.
}

function adjustRounds(roundsToPlay) { // on click add 5 to number of rounds in play
	if (roundsToPlay == 60) { // max = 60 if click return to 5
		gameParameters.noOfRounds = 5;
	}
	else { // if less than 60, add 5 to number of buttons
		gameParameters.noOfRounds += 5;
	}
	labelRoundsButton(gameParameters.noOfRounds); // label button with no of rounds to be played.
}

function hideButtons() { // on call (when game in play), hide parameter buttons
	$("#Rounds-Button").fadeOut(500);
	$("#Direction-Button").fadeOut(500);
	$("#No-Of-Buttons").fadeOut(500);
	$("#start-button").fadeOut(500);
}

function showUserInfo(Round) { // on call, update current rounds being played onto screen
	$("#options-panel").text("Round: " + Round);
}

function showUserPrompt(Prompt) { // on call, prompt user to watch or repeat, as given in call
	$("#start-panel").text(Prompt);
}
