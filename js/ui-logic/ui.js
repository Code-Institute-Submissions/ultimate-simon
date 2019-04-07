var gameParameters = {
	currentRound: 1,
	noOfRounds: 5,
	noOfButtons: 4,
	playForward: false
};

var userResponseArray = [];

//// When page loads, resizes or changes orientation
///  Show/Hide Buttons to suit the screen width/Height ie Landscape and Portrait
///  And show either 4 or 6 buttons as per options, also adjust button size to suit
///  The number of buttons on screen

$(window).on('orientation resize load', function(){
	configureButtons();
});

function configureButtons() {
	var height = $(window).height();
	var width = $(window).width();
	if (gameParameters.noOfButtons == 6) {
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

function labelRoundsButton() {
	$('#Rounds-Button').empty();
	$('#Rounds-Button').append(gameParameters.noOfRounds + " Rounds");
}

function labelDirectionButton() {
	var Direction;
	if (gameParameters.playForward == true) {
		Direction = "Fwd";
	}
	else {
		Direction = "Rev";
	}
	$('#Direction-Button').empty();
	$('#Direction-Button').append("Direction: " + Direction);
}

function LabelNoOfButtons() {
	$('#No-Of-Buttons').empty();
	$('#No-Of-Buttons').append(gameParameters.noOfButtons + " Buttons");
}

function adjustNoOfButtons(){
	if (gameParameters.noOfButtons == 4){
		gameParameters.noOfButtons = 6;
	}
	else if (gameParameters.noOfButtons == 6){
		gameParameters.noOfButtons = 4;
	}
	configureButtons();
	LabelNoOfButtons();
}

function adjustDirection(){
	if (gameParameters.playForward == true){
		gameParameters.playForward = false;
	}
	else if (gameParameters.playForward == false){
		gameParameters.playForward = true;
	}
	labelDirectionButton();
}

function adjustRounds(){
	if (gameParameters.noOfRounds == 60){
		gameParameters.noOfRounds = 5;
	}
	else {
		gameParameters.noOfRounds += 5;
	}
	labelRoundsButton();
}
