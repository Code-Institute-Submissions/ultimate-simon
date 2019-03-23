	//// When page loads, resizes or changes orientation
	///  Show/Hide Buttons to suit the screen width/Height ie Landscape and Portrait
	///  And show either 4 or 6 buttons as per options

	$(window).on('orientation resize load', function() {
		var height = $(window).height();
		var width = $(window).width();
		if (gameParameters.noOfButtons == 6) {
			if (width > height) {
				$('#purple-button-portrait').removeClass('purple-button-style');
				$('#brown-button-portrait').removeClass('brown-button-style');
				$('#purple-button-landscape').addClass('purple-button-style');
				$('#brown-button-landscape').addClass('brown-button-style');

			}
			else {
				$('#purple-button-portrait').addClass('purple-button-style');
				$('#brown-button-portrait').addClass('brown-button-style');
				$('#purple-button-landscape').removeClass('purple-button-style');
				$('#brown-button-landscape').removeClass('brown-button-style');
			}

		}
		else {
			$('#purple-button-portrait').removeClass('purple-button-style');
			$('#brown-button-portrait').removeClass('brown-button-style');
			$('#purple-button-landscape').removeClass('purple-button-style');
			$('#brown-button-landscape').removeClass('brown-button-style');

		}
	});
	