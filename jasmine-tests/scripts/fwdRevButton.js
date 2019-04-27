var gameParameters=[];
gameParameters.playForward = true;

function adjustDirection(fwdDirection) { // adjust direction of play when called
	if (fwdDirection == true) { // if fwd, on click set to reverse
		gameParameters.playForward = false;
	}
	else { //  if rev, on click set to fwd
		gameParameters.playForward = true;
	}
	//labelDirectionButton(gameParameters.playForward); // label button according to direction selected.
	return gameParameters.playForward;
}