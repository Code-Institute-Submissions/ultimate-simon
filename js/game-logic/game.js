function resetGame() {
  var fwdPlayArray = [];
  var revPlayArray = [];
  setTimeout(location.reload.bind(location), 2500);
}

function playButton(buttonNo) { // takes button number from original array or from user click to illuminate the corresponding button and play the tone.
  const synth = new Tone.Synth();
  synth.toMaster();
  if (buttonNo == 0) {
    synth.triggerAttackRelease('A4', 1.8);
    $('#red-button').animate({ opacity: '1.0' }, "slow").delay('1000').animate({ opacity: '0.5' }, "slow");
  }
  else if (buttonNo == 1) {
    synth.triggerAttackRelease('E5', 1.8);
    $('#green-button').animate({ opacity: '1.0' }, "slow").delay('1000').animate({ opacity: '0.5' }, "slow");
  }
  else if (buttonNo == 2) {
    synth.triggerAttackRelease('C4', 1.8);
    $('#yellow-button').animate({ opacity: '1.0' }, "slow").delay('1000').animate({ opacity: '0.5' }, "slow");
  }
  else if (buttonNo == 3) {
    synth.triggerAttackRelease('E4', 1.8);
    $('#blue-button').animate({ opacity: '1.0' }, "slow").delay('1000').animate({ opacity: '0.5' }, "slow");
  }
  else if (buttonNo == 4) {
    synth.triggerAttackRelease('C5', 1.8);
    $('#purple-button-landscape').animate({ opacity: '1.0' }, "slow").delay('1000').animate({ opacity: '0.5' }, "slow");
    $('#purple-button-portrait').animate({ opacity: '1.0' }, "slow").delay('1000').animate({ opacity: '0.5' }, "slow");
  }
  else if (buttonNo == 5) {
    synth.triggerAttackRelease('A5', 1.8);
    $('#brown-button-landscape').animate({ opacity: '1.0' }, "slow").delay('1000').animate({ opacity: '0.5' }, "slow");
    $('#brown-button-portrait').animate({ opacity: '1.0' }, "slow").delay('1000').animate({ opacity: '0.5' }, "slow");
  }
}

function checkUserInput(arrayToCheck, userArray, userResponse) {
  if (arrayToCheck[gameParameters.currentSequenceIndex] !== userResponse) {
    showUserPrompt("Sorry - You Lose!");
    resetGame();
  }
  console.log("currentRound: " + gameParameters.currentRound);
  console.log("arrayLength: " + userArray.length);
  if (userArray.length === gameParameters.currentRound) {
    gameParameters.currentSequenceIndex = 0;
  }
  else { gameParameters.currentSequenceIndex += 1; }
}

function userSequence(arrayInUse, callPlaySequence) {
  if (gameParameters.isWaitingForUser == true) {
    showUserPrompt("Repeat")
    $(".simon-button").click(function() { //When user clicks a button div enters function to read response
      var divNumber = ($(this).data("myval"));
      playButton(divNumber); // calls the function to light the button and play the sound
      userResponseArray.push(divNumber); //stores this clicked button div number in an array to check response against sequence later
      checkUserInput(arrayInUse, userResponseArray, divNumber);
      if (userResponseArray.length == gameParameters.currentRound) {
        gameParameters.currentRound += 1;
        userResponseArray = [];
        setTimeout(callPlaySequence, 3000, arrayInUse);
        setTimeout(showUserInfo, 3000, gameParameters.currentRound);
      }
    });
  }

}

function playSequence(arrayToPlay, cbUserSequence, cbplaySequence) {
  showUserPrompt("Watch")
  gameParameters.isWaitingForUser = false;
  for (var k = 0; k < gameParameters.currentRound; k++) {
    console.log(k);
    var delay = k * 2500; // calculates delay required to have the buttons play in sequence and not together.
    setTimeout(playButton, delay, arrayToPlay[k]); // plays the current button in the array with the delay calculate
  } /*for loop k*/
  gameParameters.isWaitingForUser = true;
  cbUserSequence(arrayToPlay, cbplaySequence);
} /* playSequence function*/

function startGame(Parameters) {
  hideButtons();
  $('#Rounds-Button').show(500);
  showUserInfo(gameParameters.currentRound);
  var noToLoad = 0;
  // The following defines the array to play to the user 

  var fwdPlayArray = [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5];
  var revPlayArray = [5, 4, 3, 2, 1, 0, 5, 4, 3, 2, 1, 0];
  var j = 0;

  /* The following is a randomised array of numbers to play the buttons */
  /*I am currently using a predicatable array so I know what is happening each time */

  /*for (var i = Parameters.noOfRounds; i--;) {
    noToLoad = Math.trunc(Math.random() * (Parameters.noOfButtons - 0.001));
    fwdPlayArray[i] = noToLoad;
    console.log(fwdPlayArray[i] + 'fwd' + i);
    revPlayArray[j] = noToLoad;
    console.log(revPlayArray[j] + 'rev' + j);
    j++;
  }*/
  playSequence(fwdPlayArray, userSequence, playSequence); // Uses the array defined to play the buttons for the user to copy
  //userSequence(fwdPlayArray, playSequence); // Looks to read the response for the user
}
