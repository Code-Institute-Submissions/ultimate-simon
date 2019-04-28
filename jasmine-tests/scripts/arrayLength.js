function startGame(currentRound, noOfRounds, noOfButtons) {
  "use strict";
  //hideButtons();                                                                            // during gameplay hide parameter buttons
  //showUserInfo(currentRound);                                                               // display current round
  var noToLoad = 0;                                                                         // The following defines the array to play to the user
 // var PlayArray = [0, 1, 2, 3, 0, 1, 2, 3];       *** Predictable Array used for testing
  var i = 0;
  var playArray = [];


    for (var i = noOfRounds; i--;) {                                                        // create array of button clicks for the number of rounds selected
      noToLoad = Math.trunc(Math.random() * (noOfButtons - 0.001));                         // calculate random number from 0 to 3 to load into array for button click
      console.log(noToLoad);
      playArray.push(noToLoad);                                                             // store button click in array    
    }
    
    return (playArray.length);
  
 // playSequence(playArray, userSequence, playSequence);                                      // Uses the array defined to play the buttons for the user to copy
}