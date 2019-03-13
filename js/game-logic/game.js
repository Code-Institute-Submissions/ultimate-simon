var $noOfRounds = 30;
var $buttons = 6;

function stopButton(buttonNo) {
  if (buttonNo == 0) {
    $('.red-button').addClass('red-button');
  }
  else if (buttonNo == 1) {
    $('.green-button').removeClass('high-green-button');
  }
  else if (buttonNo == 2) {
    $('.yellow-button').removeClass('high-yellow-button');
  }
  else if (buttonNo == 3) {
    $('.blue-button').removeClass('high-blue-button');
  }
  else if (buttonNo == 4) {
    $('.purple-button').removeClass('high-purple-button');
  }
  else if (buttonNo == 5) {
    $('.brown-button').removeClass('high-brown-button');
  }
}



function playButton(buttonNo) {
  if (buttonNo == 0) {
    $('.red-button').addClass('high-red-button');
  }
  else if (buttonNo == 1) {
    $('.green-button').addClass('high-green-button');
  }
  else if (buttonNo == 2) {
    $('.yellow-button').addClass('high-yellow-button');
  }
  else if (buttonNo == 3) {
    $('.blue-button').addClass('high-blue-button');
  }
  else if (buttonNo == 4) {
    $('.purple-button').addClass('high-purple-button');
  }
  else if (buttonNo == 5) {
    $('.brown-button').addClass('high-brown-button');
  }
}


function playSequence(arrayToPlay) {
  for (var k = $noOfRounds; k--;) {
    playButton(arrayToPlay[k]);
    setTimeout(function(){ stopButton(arrayToPlay[k]); }, 1000);
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
