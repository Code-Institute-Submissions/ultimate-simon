//// When page loads, resizes or changes orientation
///  Show/Hide Buttons to suit the screen width/Height ie Landscape and Portrait
///  And show either 4 or 6 buttons as per options, also adjust button size to suit
///  The number of buttons on screen

$(window).on('orientation resize load', function() {
	configureButtons(gameParameters.noOfButtons);
});

<<<<<<< HEAD
function configureButtons(noOfButtons) {
	var height = $(window).height();
	var width = $(window).width();
	if (noOfButtons == 6) {
=======


function configureButtons(buttonsInUse) {
	var height = $(window).height();
	var width = $(window).width();
	if (buttonsInUse == 6) {
>>>>>>> a78ee176f846ac5f5f3d45f4532f49b0bd57662e
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

<<<<<<< HEAD
function labelRoundsButton(Rounds) {
	$('#Rounds-Button').empty();
	$('#Rounds-Button').append(Rounds + " Rounds");
}

function labelDirectionButton(playFwd) {
	var direction ;
	if (playFwd == true) {
		direction = "Fwd";
=======
function labelRoundsButton(roundsLabel) {
	$('#Rounds-Button').empty();
	$('#Rounds-Button').append(roundsLabel + " Rounds");
}

function labelDirectionButton(DirectionFwd) {
	var Direction;
	if (DirectionFwd == true) {
		Direction = "Fwd";
>>>>>>> a78ee176f846ac5f5f3d45f4532f49b0bd57662e
	}
	else {
		direction = "Rev";
	}
	$('#Direction-Button').empty();
	$('#Direction-Button').append("Direction: " + direction);
}

<<<<<<< HEAD
function LabelNoOfButtons(noOfButtons) {
	$('#No-Of-Buttons').empty();
	$('#No-Of-Buttons').append(noOfButtons + " Buttons");
}

function adjustNoOfButtons(noOfButtons){
	if (noOfButtons == 4){
		gameParameters.noOfButtons = 6;
	}
	else if (noOfButtons == 6){
			 gameParameters.noOfButtons = 4;
	}
	configureButtons(gameParameters.noOfButtons);
	LabelNoOfButtons(gameParameters.noOfButtons);
}

function adjustDirection(playFwd){
	if (playFwd == true){
		gameParameters.playForward = false;
	}
	else if (playFwd == false){
		gameParameters.playForward = true;
	}
	labelDirectionButton(gameParameters.playForward);
}

function adjustRounds(setRounds){
	if (setRounds == 60){
		gameParameters.noOfRounds = 5;
=======
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
>>>>>>> a78ee176f846ac5f5f3d45f4532f49b0bd57662e
	}
	else {
		roundsToPlay += 5;
	}
<<<<<<< HEAD
	labelRoundsButton(gameParameters.noOfRounds);
=======
	labelRoundsButton(roundsToPlay);
	gameParameters.noOfRounds = roundsToPlay;
>>>>>>> a78ee176f846ac5f5f3d45f4532f49b0bd57662e
}
