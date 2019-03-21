var $noOfRounds = 10;
var $buttons = 6;

function playButton(buttonNo) {
  const synth = new Tone.Synth();
  synth.toMaster();
  if (buttonNo == 0) {
    synth.triggerAttackRelease('A4','8n');
    $('#red-button').animate({ opacity: '1.0' }, "slow").delay('1000').animate({ opacity: '0.5' }, "slow");
  }
  else if (buttonNo == 1) {
    synth.triggerAttackRelease('E5','8n');
    $('#green-button').animate({ opacity: '1.0' }, "slow").delay('1000').animate({ opacity: '0.5' }, "slow");
  }
  else if (buttonNo == 2) {
    synth.triggerAttackRelease('C4','8n');
    $('#yellow-button').animate({ opacity: '1.0' }, "slow").delay('1000').animate({ opacity: '0.5' }, "slow");
  }
  else if (buttonNo == 3) {
    synth.triggerAttackRelease('E4','8n');
    $('#blue-button').animate({ opacity: '1.0' }, "slow").delay('1000').animate({ opacity: '0.5' }, "slow");
  }
  else if (buttonNo == 4) {
    synth.triggerAttackRelease('C5','8n');
    $('#purple-button-landscape').animate({ opacity: '1.0' }, "slow").delay('1000').animate({ opacity: '0.5' }, "slow");
    $('#purple-button-portrait').animate({ opacity: '1.0' }, "slow").delay('1000').animate({ opacity: '0.5' }, "slow");
  }
  else if (buttonNo == 5) {
    synth.triggerAttackRelease('A5','8n');
    $('#brown-button-landscape').animate({ opacity: '1.0' }, "slow").delay('1000').animate({ opacity: '0.5' }, "slow");
    $('#brown-button-portrait').animate({ opacity: '1.0' }, "slow").delay('1000').animate({ opacity: '0.5' }, "slow");
  }
}


function playSequence(arrayToPlay) {
  for (var k = 0; k < $noOfRounds; k++) {
    var delay = k * 2500;
    setTimeout(playButton, delay, arrayToPlay[k]);
  }
}


function startGame() {
  var noToLoad = 0;
  var fwdPlayArray = {};
  var revPlayArray = {};
  var j = 0;

  for (var i = $noOfRounds; i--;) {
    noToLoad = Math.trunc(Math.random() * ($buttons - 0.001));
    fwdPlayArray[i] = noToLoad;
    console.log(fwdPlayArray[i] + 'fwd' + i);
    revPlayArray[j] = noToLoad;
    console.log(revPlayArray[j] + 'rev' + j);
    j++;
  }
  playSequence(fwdPlayArray);

}
