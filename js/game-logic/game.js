var $noOfRounds = 30;
var $buttons = 4;

function stopButton(buttonNo) {
  if (buttonNo == 0) {
    $('#red-button').toggleClass('high-red-button-style');
  }
  else if (buttonNo == 1) {
    $('#green-button').toggleClass('high-green-button-style');
  }
  else if (buttonNo == 2) {
    $('#yellow-button').toggleClass('high-yellow-button-style');
  }
  else if (buttonNo == 3) {
    $('#blue-button').toggleClass('high-blue-button-style');
  }
  else if (buttonNo == 4) {
    $('#purple-button').toggleClass('high-purple-button-style');
  }
  else if (buttonNo == 5) {
    $('#brown-button').toggleClass('high-brown-button-style');
  }
}



function playButton(buttonNo) {
  const synth = new Tone.Synth();
  synth.toMaster();
  if (buttonNo == 0) {
    $('#red-button').toggleClass('high-red-button-style');
    synth.triggerAttackRelease('A4','8n');
  }
  else if (buttonNo == 1) {
    $('#green-button').toggleClass('high-green-button-style');
    synth.triggerAttackRelease('E5','8n');
  }
  else if (buttonNo == 2) {
    $('#yellow-button').toggleClass('high-yellow-button-style');
    synth.triggerAttackRelease('C4','8n');
  }
  else if (buttonNo == 3) {
    $('#blue-button').toggleClass('high-blue-button-style');
    synth.triggerAttackRelease('E4','8n');
  }
  else if (buttonNo == 4) {
    $('#purple-button').toggleClass('high-purple-button-style');
    synth.triggerAttackRelease('C5','8n');
  }
  else if (buttonNo == 5) {
    $('#brown-button').toggleClass('high-brown-button-style');
    synth.triggerAttackRelease('A5','8n');
  }
}


function playSequence(arrayToPlay) {
  for (var k = $noOfRounds; k--;) {
    
    playButton(arrayToPlay[k]);
    
    setTimeout(function() {
        stopButton(arrayToPlay[k]);
    }, 500);
    
    
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
