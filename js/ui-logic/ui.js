//// When page loads, resizes or changes orientation
///  Show/Hide Buttons to suit the screen width/Height ie Landscape and Portrait
///  And show either 4 or 6 buttons as per options, also adjust button size to suit
///  The number of buttons on screen

$(window).on('orientation resize load', function() {
	configureButtons(gameParameters.noOfButtons);
});

function loserLoser(cbResetGame, buttonsInUse) {
	var i = 0;
	do {
		var delay = i * 250;
		setTimeout(playButton, delay, 0, '200');
		i++;
	} while (i < buttonsInUse);
	var delayReset = delay * 2.8;
	setTimeout(cbResetGame, delayReset);
}


function winnerWinnerChickenDinner(cbResetGame, buttonsInUse) {
	var i = 0;
	do {
		var delay = i * 250;
		setTimeout(playButton, delay, i, '200');
		i++;
	} while (i < buttonsInUse);
	var delayReset = delay * 2.8;
	setTimeout(cbResetGame, delayReset);
}



function configureButtons(buttonsInUse) {
	var height = $(window).height();
	var width = $(window).width();
	if (buttonsInUse == 6) {
		$('#red-button').css({ 'height': '15vh', 'width': '15vh' });
		$('#yellow-button').css({ 'height': '15vh', 'width': '15vh' });
		$('#green-button').css({ 'height': '15vh', 'width': '15vh' });
		$('#blue-button').css({ 'height': '15vh', 'width': '15vh' });
		if (width > height) {
			$('#purple-button-portrait').removeClass('purple-button-style');
			$('#brown-button-portrait').removeClass('brown-button-style');
			$('#purple-button-landscape').addClass('purple-button-style').css({ 'height': '15vh', 'width': '15vh' });
			$('#brown-button-landscape').addClass('brown-button-style').css({ 'height': '15vh', 'width': '15vh' });

		}
		else {
			$('#purple-button-portrait').addClass('purple-button-style').css({ 'height': '15vh', 'width': '15vh' });
			$('#brown-button-portrait').addClass('brown-button-style').css({ 'height': '15vh', 'width': '15vh' });
			$('#purple-button-landscape').removeClass('purple-button-style');
			$('#brown-button-landscape').removeClass('brown-button-style');
		}

	}
	else {
		$('#purple-button-portrait').removeClass('purple-button-style');
		$('#brown-button-portrait').removeClass('brown-button-style');
		$('#purple-button-landscape').removeClass('purple-button-style');
		$('#brown-button-landscape').removeClass('brown-button-style');
		$('#red-button').css({ 'height': '20vh', 'width': '20vh' });
		$('#yellow-button').css({ 'height': '20vh', 'width': '20vh' });
		$('#green-button').css({ 'height': '20vh', 'width': '20vh' });
		$('#blue-button').css({ 'height': '20vh', 'width': '20vh' });
	}
}

function labelRoundsButton(roundsLabel) {
	$('#Rounds-Button').empty();
	$('#Rounds-Button').append(roundsLabel + " Rounds");
}

function labelDirectionButton(DirectionFwd) {
	var Direction;
	if (DirectionFwd == true) {
		Direction = "Fwd";
	}
	else {
		Direction = "Rev";
	}
	$('#Direction-Button').empty();
	$('#Direction-Button').append("Direction: " + Direction);
}

function labelNoOfButtons(noOfButtons) {
	$('#No-Of-Buttons').empty();
	$('#No-Of-Buttons').append(noOfButtons + " Buttons");
}

function adjustDirection(playFwd) {
	if (playFwd == true) {
		gameParameters.playForward = false;
	}
	else if (playFwd == false) {
		gameParameters.playForward = true;
	}
	labelDirectionButton(gameParameters.playForward);
}

function adjustNoOfButtons(buttonsUsed) {
	if (buttonsUsed == 4) {
		gameParameters.noOfButtons = 6;
	}
	else if (buttonsUsed == 6) {
		gameParameters.noOfButtons = 4;
	}
	labelNoOfButtons(gameParameters.noOfButtons);
	configureButtons(gameParameters.noOfButtons);
}

function adjustDirection(FwdDirection) {
	if (FwdDirection == true) {
		gameParameters.playForward = false;
	}
	else if (FwdDirection == false) {
		gameParameters.playForward = true;
	}
	labelDirectionButton(gameParameters.playForward);
}

function adjustRounds(roundsToPlay) {
	if (roundsToPlay == 60) {
		gameParameters.noOfRounds = 5;
	}
	else {
		gameParameters.noOfRounds += 5;
	}
	labelRoundsButton(gameParameters.noOfRounds);
}

function hideButtons() {
	$('#Rounds-Button').fadeOut(500);
	$('#Direction-Button').fadeOut(500);
	$('#No-Of-Buttons').fadeOut(500);
	$('#start-button').fadeOut(500);
}

function showUserInfo(Round) {
	$("#options-panel").text("Round: " + Round);
}

function showUserPrompt(Prompt) {
	$("#start-panel").text(Prompt);
}
