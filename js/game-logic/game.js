function playButton(buttonNo) {
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


function playSequence(arrayToPlay) {

  for (var k = 0; k <= gameParameters.noOfRounds; k++) {
    console.log(k);
    var delay = k * 2500;
    setTimeout(playButton, delay, arrayToPlay[k]);
  } /*for loop k*/
} /* playSequence function*/


function startGame() {
  var noToLoad = 0;
  //var fwdPlayArray = {};
  //var revPlayArray = {};
  var fwdPlayArray = [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5];
  var revPlayArray = [5, 4, 3, 2, 1, 0, 5, 4, 3, 2, 1, 0];
  var j = 0;

  /*for (var i = gameParameters.noOfRounds; i--;) {
    noToLoad = Math.trunc(Math.random() * (gameParameters.noOfButtons - 0.001));
    fwdPlayArray[i] = noToLoad;
    console.log(fwdPlayArray[i] + 'fwd' + i);
    revPlayArray[j] = noToLoad;
    console.log(revPlayArray[j] + 'rev' + j);
    j++;
  }*/
  playSequence(fwdPlayArray);
}
