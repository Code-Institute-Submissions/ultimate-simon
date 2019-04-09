//// When page loads, resizes or changes orientation
///  Show/Hide Buttons to suit the screen width/Height ie Landscape and Portrait
///  And show either 4 or 6 buttons as per options, also adjust button size to suit
///  The number of buttons on screen

$(window).on('orientation resize load', function() {
	configureButtons(gameParameters.noOfButtons);
});



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

function labelNoOfButtons(buttonsLabel) {
	$('#No-Of-Buttons').empty();
	$('#No-Of-Buttons').append(buttonsLabel + " Buttons");
}

function adjustNoOfButtons(buttonsUsed) {
	if (buttonsUsed == 4) {
		buttonsUsed = 6;
	}
	else if (buttonsUsed == 6) {
		buttonsUsed = 4;
	}
	labelNoOfButtons(buttonsUsed);
	configureButtons(buttonsUsed);
	gameParameters.noOfButtons = buttonsUsed;
}

function adjustDirection(FwdDirection) {
	if (FwdDirection == true) {
		FwdDirection = false;
	}
	else if (FwdDirection == false) {
		FwdDirection = true;
	}
	labelDirectionButton(FwdDirection);
	gameParameters.playForward = FwdDirection;
}

function adjustRounds(roundsToPlay) {
	if (roundsToPlay == 60) {
		roundsToPlay = 5;
	}
	else {
		roundsToPlay += 5;
	}
	labelRoundsButton(roundsToPlay);
	gameParameters.noOfRounds = roundsToPlay;
}
