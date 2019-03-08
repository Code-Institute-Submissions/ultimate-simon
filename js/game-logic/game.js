var $noOfRounds = 30;
var $buttons = 4;

function startGame() {
  var noToLoad = 0;
  var fwdPlayArray = {};
  for (var i = $noOfRounds; i--;) {
    noToLoad = Math.trunc(Math.random() * ($buttons - 0.001));
    fwdPlayArray[i] = noToLoad;
    console.log(noToLoad);
  }
}
