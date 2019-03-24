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

$(window).on('orientation resize load', function() {
	var height = $(window).height();
	var width = $(window).width();
	if (gameParameters.noOfButtons == 6) {
		if (width > height) {
			$('#purple-button-portrait').removeClass('purple-button-style');
			$('#brown-button-portrait').removeClass('brown-button-style');
			$('#purple-button-landscape').addClass('purple-button-style').css({'height': '15vh', 'width': '15vh'});
			$('#brown-button-landscape').addClass('brown-button-style').css({'height': '15vh', 'width': '15vh'});

		}
		else {
			$('#purple-button-portrait').addClass('purple-button-style').css({'height': '15vh', 'width': '15vh'});
			$('#brown-button-portrait').addClass('brown-button-style').css({'height': '15vh', 'width': '15vh'});
			$('#purple-button-landscape').removeClass('purple-button-style');
			$('#brown-button-landscape').removeClass('brown-button-style');
		}

	}
	else {
		$('#purple-button-portrait').removeClass('purple-button-style');
		$('#brown-button-portrait').removeClass('brown-button-style');
		$('#purple-button-landscape').removeClass('purple-button-style');
		$('#brown-button-landscape').removeClass('brown-button-style');
		$('#red-button').css({'height': '20vh', 'width': '20vh'});
		$('#yellow-button').css({'height': '20vh', 'width': '20vh'});
		$('#green-button').css({'height': '20vh', 'width': '20vh'});
		$('#blue-button').css({'height': '20vh', 'width': '20vh'});
	}
});
