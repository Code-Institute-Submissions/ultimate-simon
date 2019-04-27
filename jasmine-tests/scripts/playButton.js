function playButton(buttonNo, delay) { // takes button number from original array or from user click to illuminate the corresponding button and play the tone.
  "use strict";
  //const synth = new Tone.Synth(); // start new Tone instatnce
  //synth.toMaster(); // ouput tone to speakers
  if (buttonNo == 0) { // if red button
    //synth.triggerAttackRelease("A4", 1.8); // play red tone
    //$("#red-button").animate({ opacity: "1.0" }, "slow").delay(delay).animate({ opacity: "0.5" }, "slow"); // highlight red button
    return ("red");
  }
  else if (buttonNo == 1) { // if green button
    //synth.triggerAttackRelease("E5", 1.8); // play green tone
    //$("#green-button").animate({ opacity: "1.0" }, "slow").delay(delay).animate({ opacity: "0.5" }, "slow"); // highlight green button
    return ("green");
  }
  else if (buttonNo == 2) { // if yellow button
    //synth.triggerAttackRelease("C4", 1.8); // play yellow tone
    //$("#yellow-button").animate({ opacity: "1.0" }, "slow").delay(delay).animate({ opacity: "0.5" }, "slow"); // highlight yellow button
    return ("yellow");
  }
  else if (buttonNo == 3) { //if blue button
    //synth.triggerAttackRelease("E4", 1.8); // play blue tone
    //$("#blue-button").animate({ opacity: "1.0" }, "slow").delay(delay).animate({ opacity: "0.5" }, "slow"); // highlight blue button
    return ("blue");
  }
  else if (buttonNo == 4) { // if purple button
    //synth.triggerAttackRelease("C5", 1.8); // play purple tone
    //$("#purple-button-landscape").animate({ opacity: "1.0" }, "slow").delay(delay).animate({ opacity: "0.5" }, "slow"); //highlight landscape purple button
    //$("#purple-button-portrait").animate({ opacity: "1.0" }, "slow").delay(delay).animate({ opacity: "0.5" }, "slow"); //highlight portrait purple button
    return ("purple");
  }
  else if (buttonNo == 5) { // if brown button
    //synth.triggerAttackRelease("A5", 1.8); // play brown tone
    //$("#brown-button-landscape").animate({ opacity: "1.0" }, "slow").delay(delay).animate({ opacity: "0.5" }, "slow"); // highlight landscape brown button
    //$("#brown-button-portrait").animate({ opacity: "1.0" }, "slow").delay(delay).animate({ opacity: "0.5" }, "slow"); // highlight portrait brown button
    return ("brown");
  }
}
