var $noOfRounds = 30;
var $buttons = 6;

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


function playSequence(arrayToPlay) {
  for (var k = $noOfRounds; k--;) {
    playButton(arrayToPlay[k]);
    //setTimeout(function(){ stopButton(arrayToPlay[k]); }, 1000);
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
