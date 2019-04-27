var gameParameters=[];
gameParameters.noOfRounds = 5;

function adjustRounds(roundsToPlay) { // on click add 5 to number of rounds in play
	if (roundsToPlay == 60) { // max = 60 if click return to 5
		gameParameters.noOfRounds = 5;
	}
	else { // if less than 60, add 5 to number of buttons
		gameParameters.noOfRounds += 5;
	}
	//labelRoundsButton(gameParameters.noOfRounds); // label button with no of rounds to be played.
	return gameParameters.noOfRounds;
}