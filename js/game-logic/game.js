function playButton(buttonNo) {                 // takes button number from original array or from user click to illuminate the corresponding button and play the tone.
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

function convertDivToNumber(divName) {                  // function to convert buton div name back into corresponding div number for playing button etc.
  if (divName == "red-button") { return 0; }
  else if (divName == "green-button") { return 1; }
  else if (divName == "yellow-button") { return 2; }
  else if (divName == "blue-button") { return 3; }
  else if ((divName == "purple-button-portrait") || (divName == "purple-button-landscape")) { return 4; }
  else if ((divName == "brown-button-portrait") || (divName == "brown-button-landscape")) { return 5; }
}

function userSequence(arraytoPlay, callPlaySequence) {
  $("div div div").click(function() {         //When user clicks a button div enters function to read response
    var divClicked = this.id;                 //REads the name of the button div clicked eg. red-button
    var divNumber = convertDivToNumber(divClicked);   //calls function to convert the button div name into the corresponding number
    playButton(divNumber);                            // calls the function to light the button and play the sound
    userResponseArray.push(divNumber);                //stores this clicked button div number in an array to check response against sequence later
    console.log("div pressed" + divNumber);
  });
  if(userResponseArray.length == )
  callPlaySequence(arrayToPlay);
}

function playSequence(arrayToPlay) {
  for (var k = 0; k < gameParameters.currentRound; k++) {    
    console.log(k);
    var delay = k * 2500;                                 // calculates delay required to have the buttons play in sequence and not together.
    setTimeout(playButton, delay, arrayToPlay[k]);        // plays the current button in the array with the delay calculate
  } /*for loop k*/
  
} /* playSequence function*/

function startGame() {
  var noToLoad = 0;
  //var fwdPlayArray = {};
  //var revPlayArray = {};
  // The following defines the array to play to the user 
  
  var fwdPlayArray = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4];
  var revPlayArray = [4, 3, 2, 1, 0, 4, 3, 2, 1, 0];
  var j = 0;

  /* The following is a randomised array of numbers to play the buttons */
  /*I am currently using a predicatable array so I know what is happening each time */
  
  /*for (var i = gameParameters.noOfRounds; i--;) {
    noToLoad = Math.trunc(Math.random() * (gameParameters.noOfButtons - 0.001));
    fwdPlayArray[i] = noToLoad;
    console.log(fwdPlayArray[i] + 'fwd' + i);
    revPlayArray[j] = noToLoad;
    console.log(revPlayArray[j] + 'rev' + j);
    j++;
  }*/
  playSequence(fwdPlayArray);  // Uses the array defined to play the buttons for the user to copy
  userSequence(fwdPlayArray, playSequence);  // Looks to read the response for the user
}

