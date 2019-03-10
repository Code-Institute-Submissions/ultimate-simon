var $noOfRounds = 30;
var $buttons = 4;

function playSequence(arrayToPlay) {

}


function startGame() {
  var noToLoad = 0;
  var fwdPlayArray = {};
  var revPlayArray = {};
  var j = 0;
  for (var i = $noOfRounds; i--;) {
    noToLoad = Math.trunc(Math.random() * ($buttons - 0.001));
    fwdPlayArray[i] = noToLoad;
    console.log(fwdPlayArray[i]+'fwd'+i);
    revPlayArray[j] = noToLoad;
    console.log(revPlayArray[j]+'rev'+j);
    j++;
  }
}
