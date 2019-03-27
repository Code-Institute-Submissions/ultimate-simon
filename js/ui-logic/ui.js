var gameParameters = {
	currentRound: 1,
	noOfRounds: 12,
	noOfButtons: 4,
	playForward: false
};

//// When page loads, resizes or changes orientation
///  Show/Hide Buttons to suit the screen width/Height ie Landscape and Portrait
///  And show either 4 or 6 buttons as per options, also adjust button size to suit
///  The number of buttons on screen

$(window).on('orientation resize load', function configureButtons() {
	var height = $(window).height();
	var width = $(window).width();
	if (gameParameters.noOfButtons == 6) {
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
});

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
	var userLevels = parseInt(prompt("Please enter your required Number of Levels.  NB: Levels have to be between 5 and 50"));
	
	while (isNaN(userLevels) || userLevels < 6 || userLevels >50) {

        if (isNaN(userLevels)) {
            userLevels = parseInt(prompt("Please enter positive whole numbers only, between 5 & 50"));
        }
        else if (userLevels < 6 || userLevels > 50) {
            userLevels = parseInt(prompt("Please enter a positive whole number between 5 & 50"));
        }
    }
	gameParameters.noOfRounds=userLevels;
	labelRoundsButton();
}
