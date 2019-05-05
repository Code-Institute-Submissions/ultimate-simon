# MODULE 5 (Interactive Frontend Development) PROJECT - Code Institute Full Stack Developer Diploma
# Simon Game

## BRIEF

CREATE A MEMORY GAME

Build a simple single-player memory game inspired by Simon. Check out this short video and Wikipedia entry 
to understand the rules of the game

Provide details in your README.md of the logic you have used to build your game as well as an explanation 
of how you tested your logic

## CHOSEN PROJECT

I decided to choose the Simon Game Project, because this is a game that I remember playing in my childhood.  
Both in its original format of remembering items laid out on a tray and then listing them, as well as the 
electronic game which this website is based on.  The idea of this project was to highlight the ability to use 
logic in different ways to allow the game to run as well as provided other functionality, like page layout 
and option changes.  I have tried to keep the layout as original as possible, with the positioning of each button
being the same as the original game and keeping the same musical notes for the individual buttons also.

The idea of this game is to watch the sequence of coloured lights highlighted, and to repeat them in the same 
order as shown.  The lights are presented round by round, and the number of lights shown increases with each 
round.  The number of lights shown are equal to the round that the player is on.  The sequence that is required 
to be repeated is shown at the beginning of each round, so that the player has a fresh view of the sequence 
required to progress to the next round.  The player completes the game is he/she has completed the number of 
rounds that are determined in the optons panel.

## UX

As part of the development process wireframes of my game before starting:

See my repository's file list:

Wireframe 4 Buttons Landscape.pdf
Wireframe 4 Buttons Portrait.pdf
Wireframe 6 Buttons Landscape.pdf
Wireframe 6 Buttons Portrait.pdf

Which are located in the Wireframe directory.


## Features



Header (at start):      1.	This presents the user with the start button to initiate the game.  There is also an 
							information icon, this presents a pop up modal box to the player to give the idea and 
							rules of the game.  There is also a link the the Simon Game's Wikipedia page for the 
							history of the game.  These buttons are hidden during the game so that the player cannot 
							set off a second game, or interrupt the game with the information button.  Also hiding 
							these buttons at the start of the game, makes way for the infotmation described next.
                            
Header (during game):   2.	During the game, the header presents the player with prompts of when to watch the lights 
							being highlighted, or when to repeat the sequence that was shown, so that they know that 
							the sequence is complete.  If the player clicks while the sequence is being shown, a prompt 
							to let them know that they are clicking too early will be shown in the header.  Also if the 
							player completes the game by completing all the rounds or fails the game by making an 
							incorrect click, this will also be prompted here.  The Repeat Prompts will also remind the user 
							whether to repeat the sequence as they saw it, or whether to repeat it in reverse.
                            
Main body:	            3.	Here the buttons that show the sequence and read the player's clicks are shown.  These 
							buttons will highlight slightly to indicate that they have been hovered over.  They will 
							also highlight fully and play the appropriate tone when the sequence is being played or 
							if the player clicks on them at the appropriate time.  
                            
                            Depending on the Player's selection in the footer, the main body will display either 4 or 6 
                            buttons.  The buttons are fully responsive and will resize to suit smaller screens and to fit 
                            either the 4 or 6 buttons.  The responsiveness will also allow the user to turn the screen of 
                            a mobile device and have the screen change accordingly.  This will have the header and footer 
                            move to the usual top and bottom of the page, and also if there are 6 buttons then the buttons 
                            will reconfigure to fit the screen accordingly.
        
Footer (at start):      4.  The footer presents the user with 3 option buttons for game play:
                            
                            i)   The number of rounds that will have to be played before the user wins the game.  The default 
                            	 value is 5 rounds, and the number of rounds increases by 5 each time that the button is clicked.  
                            	 The maximum number of rounds is 60, and if the player clicks again, then the number of rounds will 
                                 return to 5
                                
                            ii)  The direction that the player will have to repeat the given sequence in.  If the player picks 
                                 "Fwd", then they will have to repeat the sequence in the forward direction, or as they see it.  
                                 It the player picks "Rev", then they will have to repeat each sequence in the reverse direction of 
                                 which it was shown to them.
                            
                            iii) The number of buttons to be used during the game.  The two options are 4 and 6, and clicking on 
                            	 this button will toggle between these values.
                            
                            Again these buttons are hidden during gameplay, to prevent any changes being made during the game, 
                            and to make way for the game to display the number of the current round to the user.


Footer (during game):   5.  The footer displays the number of the current round to the user.


## Technologies Used

				1.	CLOUD 9		    -   All the HTML/CSS/JAVASCRIPT was edited using CLOUD 9.
	
				2.	HTML 5 		    -   The structure of the page has been created in HTML5.

				3.	SCSS/CSS 3	    -   The pages were styled using SCSS which was compiled into CSS3.

				4.	FLEXBOX	        -   Flexbox was used to centre buttons and titles.

				5.	FONT AWESOME    -   Font Awesome was used to provide the information icon and the Wikipedia icon for the information modal box.
				
				6.  JAVASCRIPT      -   Javascript was used to create the random light sequence, and to play the sequence out to the player.  It
				                        was then used to read the player's response clicks and then to determine whether the click sequence matched
				                        the sequence provided and whether the player had played it back in reverse if this was selected.
				
				7.  JQUERY 3.3.1    -   JQuery was used extensively to select the button that needed to be hightlighted to display the sequence.
				                        It was also used to watch for clicks by the user and to set off the javascript in relation to clicks during
				                        the game.  JQuery was also used to reconfigure the buttons on screen according to the screen's size and
				                        orientation. 
				
				8.  TONE.js         -   Tone.js was used to play the relevant sound when a button was played or clicked.  This library allowed me
				                        to play notes by name and set their duration in a straight forward manner.
				
				9.  JASMINE         -   Jasmine was used to test functions 
				
				10. Google Chrome Developer Tools - Used To Test While Developing, checking output and values during processing.  Testing Functions
													during development, general tesing of website responsiveness
				
				11. Git/GitHub		-	Used for version control with regular commits.
## Logic

The project relies heavily on logic to form the array of button clicks, play this array, read the player's attempt at the sequence, to validate this 
attempt and to end the game as a winner or a loser.  The following is a description of the game.js file which relates to the game logic.

				1.  From the start the isWaitingForUser value is false, so that if the player clicks at anytime during the sequence being played, 
					they will be prompted to wait.

				2.	The startGame function uses a for loop to form an array of integers from 0 to 3, by creating a random number and multiplying it
					by the number of buttons in use.  I have taken 0.001 to eliminate the small chance that 4 would be created.  Then this for loop 
					truncates the random number generated at the first digit leaving us with an integer between 0 and 3.  This is then added to the 
					playArray.  This function the calls playSequence, passing playArray to that the sequence can be shown to the user.  It also passes 
					the playSequence function as a callback, so that this will be called again when the playSequence function has completed. 
					
				3.	During the playSequence function an if statement checks to see if the player has selected forward or reverse play, and displays 
					the correct prompt for the player.  A for loop is used to iterate through the playArray up to the current round showing the user 
					the sequence.  Each iteration of the playArray calls playButton, which is described next.  These calls have been delayed by 2500ms 
					multiplies but the iteration number so that the buttons will play in sequence and not together.
				    
				4.	During the playButton function the button number and delay is passed so that the button selected is highlighted and the correct 
					tone is played.  Each button has been assigned a number 0 = Red, 1 = Green, 2 = Yellow, 3 = Blue, 4 = Purple and 5 = Brown, which 
					are the integers which are stored in the playArray.  An if statement handles each integer passed and selected the correct button 
					and tone according to the number passed.  The delay is also passed so that this function can be re-used for playing the sequence, 
					indicating a user click of a button and the winner/loser sequences because they all have different play timing for the buttons.
				   
				5.	After each round of the playSequence is completed the code will call the userSequence function as a callback.  The isWaitingForUser 
					is then set to true, so that this will accept player button clicks.  This function will wait until the user has clicked buttons 
					as many times as exepected, relevant to the current round.  So round 2 the program would expect 2 clicks to complete the sequence 
					shown.  Each time that the player clicks a button, the data-myval value is read and stored in am array to check later.  The program 
					calls the checkUserInput function to check that the user button click is correct for that round.  If the player button click is correct 
					then the program will return to this function and will increase the round by 1, so that the player advances to the next round.
					The user response array is also cleared, and the callbacks to initiate the next sequence display, player prompts of round and 
					to watch are dislayed after an appropriate delay.
					
				6.  When check user input is called, an if statement checks to see if the forward or reverse play mode has been selected.  This then 
					gives sequenceCheck the correct value at the start of the array for forward play or at the end of the array for reverse play.  
					Now the checking begins, if the player's button click does not match the expected button click then the prompt will update to 
					"Sorry - You Lost" and the loserLoser sequence will be envoked.  If the player Click is correct and the game has reached to total 
					number of rounds selected by the player and they are all correct, then the winnerWinnerChickenDinner function will be envoked, and 
					the user prompt will update to "Congratulations - You WON!!"  If the player has clicked the correct button sequence for this round, 
					but has not reached the number of rounds set, then the currentSequenceIndex is set back to 0, and the currentSequenceIndexRev is 
					set back to the current round value, so that the next round is ready to start for either option.  If the player has not clicked the 
					full response to the current round then the process has to continue, so the currentSequenceIndex is increased by 1, and the 
					currentSequenceIndexRev is reduced by 1 so that the program knows where the player has reached with button clicks to compare against 
					the playArray.
					
				7.	The resetGame function clears the playArray and then reloads the screen to that the games resets for the player to play again.
				
The following is a description of the UI.js file which relates to the UI logic.  

				1.  The first function will be called on change of screen orientation, resizing of the screen and on screen load and confiures the buttons 
					& fonts accordingly.  This resizes the buttons and fonts so that they are relevant to the current screen size.  Also in the event of 
					there being 6 buttons selected this will lie the buttons 3 across in the event of a landscape screen and lie the buttons 2 across in the event 
					of a portrait screen.
				
				2.	The loserLoser function is called from point 6 of the game.js description when the player makes an incorrect button click according to the 
					checkUserInput function.  This function repeatedly plays the red button in a do while loop until the counter reaches the number of buttons 
					in use, either 4 or 6.  Each pass through the do while loop increases the delay on the button plays so that they are played one after the 
					other and not together.  On exiting the loop the delay is calculated to reset the game, then the resetGame function is called from the 
					callback after this delay to allow the sequence to finish.
				
				3.	The winnerWinnerChickenDinner function is called from point 6 of the game.js description when the player makes correct button clicks according 
					to the checkUserInput function, and has reached the maximum number of rounds set by the user.  This function plays through the sequence of buttons 
					in a do while loop until the counter reaches the number of buttons in use, either 4 or 6.  Each pass through the do while loop increases the delay 
					on the button plays so that they are played one after the other and not together.  On exiting the loop the delay is calculated to reset the game, 
					then the resetGame function is called from the callback after this delay to allow the sequence to finish.
				
				4.	The configureButtons function accepts the no of buttons in use as a parameter, and is called from point 1 of the UI.js file.  This reconfigures 
				    the buttons according to screen size and orientation.  The function reads the screen height and screen width to determine whether the screen is 
				    landscape, when width is greater than height and portrait, when height is greater than width.  This then uses if statements when the number of 
				    buttons is 6, to set the buttons to 15% of vertical height, and then if the screen is landscape the extra two buttons are added to the side so 
				    that they are in rows of 3 buttons.  Alternatively if the screen is in portrait modes then the extra 2 buttons are added to the botton of the 
				    screen so that there are 2 columns of buttons.  In the event of there only being 4 buttons, the button size is set to 20% of vertical height and 
				    all extra buttons are hidden.
				
				5.  The function adjustDirection is called when this button is clicked, if the parameter is set to true then the value is set to false, and if it is 
					false it is set to true using an if statement.  This function then calls the labelDirectionButton function to update the direction on the button 
					itself, displaying "Fwd" when in forward mode and "Rev" when in reverse mode.  The labelDirectionButton function is also called on the initial 
					load to label this button.
				
				6.	The function adjustNoOfButtons is called when this button is clicked, if the parameter is set to 6 then the value is set to 4, and if it is 4 it is 
					set to 6 using an if statement.  This function then calls the labelNoOfButtons function to update the number of buttons on the button itself, 
					displaying the relevant number of buttons.  The labelNoOfButtons function is also called on the initial load to label this button.
				
				7.	The function adjustRounds is called when this button is clicked, if the parameter is set to 60 then the value is set to 5, using an if statement, 
					then using the else statement if it is between 5 & 55 then 5 rounds are added to the setting. The labelNoOfButtons function is then called to 
					label this button, it is also called at the initial load to label the button also.
				    
				    
				
## Testing

Each new feature had been tested after each stage of development within the CLOUD 9 environment.  This has included:

				1.	General play         - By playing the game with a pre-defined array of button clicks, to check that the correct buttons highlighted 
										   and the correct sounds initiated.
										   
				2.	Win/Lose             - By playing the game with a pre-defined array of button clicks, check that the game responded correctly on correct 
										   player response (move to next round/win game) and incorrect player response (lose game).
										   
				3.	No Of Buttons Option - I used jasmine to test that this button toggled between 4 and 6 buttons, and displayed the correct number 
				                           on the button itself.  Also check that the ui displayed the correct number of buttons selected. (You can run this test
				                           by selecting indexNoOfButtons.html, and clicking Run from the Menu Bar.  You now need to select the link provided at the 
				                           bottom of the cloud9 screen).  I have manually tested this button also.
				                           
				4	No Of Rounds Option  - I used jasmine to test that this button toggled in increments of 5, from 5 to 60 and then back to 5
				                           again.  Jasmine was also used to check that the array of button clicks was the correct length according
				                           to the number of rounds. (You can run this test by selecting indexNoOfRounds.html, and clicking Run from the Menu Bar.  
				                           You now need to select the link provided at the bottom of the cloud9 screen).  I manually tested this button also.
				                           
				5.  Direction Option     - I used jasmine to test that this button toggled between forward and reverse direction on clicking it.  Also
				                           check that the information on the button updated to show that the correct direction selected.  (You can run this test
				                           by selecting indexLabelDirButton.html , and clicking Run from the Menu Bar.  You now need to select the link provided at 
				                           the bottom of the cloud9 screen).  I manually tested this button also.
				                           
				6.  PlayButton           - I used jasmine to test that this function returned the correct colour when the button number was given as input. (You 
										   can run this test by selecting indexPlayButton.html, and clicking Run from the Menu Bar.  You now need to select the 
										   link provided at the bottom of the cloud9 screen).  I also checked this was working by playing the game with a predefined array.
										   
				7.	playArray            - I used jasmine to test that this function returned an array of the correct length, according to the number of rounds   
				                           selected.   (You can run this test by selecting indexArrayLength.html, and clicking Run from the Menu Bar. You now need to 
				                           select the link provided at the bottom of the cloud9 screen)
				                         
				                         - I also tried to use jasmine to test that each element of the playArray held a number from 0 to 3, but was unable to 
				                           get this to work.  However during development and testing I have had this value being printed to the console and this
				                           value has only ever been 0, 1, 2 or 3.
				                          

After deployment the site has been tested for the above on:

				1.	iPhone 5s on portrait screen (iOS 11 - Safari).
				2.	iPhone 5s on landscape screen. (iOS 11 - Safari)
				3.	iPad Air 2 on portrait screen. (iOS 11 - Safari)
				4.	iPad Air 2 on landscape screen. (iOS 11 - Safari)	
				5.  Samsung Galaxy s9 on portrait screen. (Android 8.0.0 (Oreo) - Samsung Internet)
				6.  Samsung Galaxy s9 on landscape screen. (Android 8.0.0 - (Oreo) - Samsung Internet)
				7. 	Hanns-G 20" widescreen monitor. (Windows 10 - Google Chrome 74.0.3729.108, Firefox 66.0.3, MS Edge 42.17134.1.0, Opera 60.0.3255.56)
				
I have covered all the main browsers on the most common platforms with this testing.  I have found that they were all responsive to orientation when applicable, and the
game ran as expected in all these scenarios.  I was unable to test Internet Explorer because it would not run on my Windows 10 computer, but I am not particularly concerned
as this has a very low market share from between 3-4% from the stats quoted on Wikipedia.  At this stage this share would only be decreasing with desktop computers being on the 
decline and Windows 10 taking over this market with MS Edge.  

Issues:

				1.  Found that the array of button clicks was consistently 1 value too long.  Found 
				    that I had started this for loop from 0, so had to make it stop at the (noOfRounds - 1).
				    (rectified)
				2.	Sometimes after a few rounds the buttons sit off centre of the screen. (not rectified)
				
Code Validation:

				1.  I have checked my HTML with validator.w3.org, and almost had a full validation.  However an error still remains of:
				    "Error: Start tag body seen but an element of the same type was already open.  From line 68, column 1; to line 68, column 6"
				    I am unable to establish why this error is being shown.
				2.	I have checked my CSS file with jigsaw.w3.org, and this found no errors in the CSS.
				3.	I In the absence of what I would consider an official javascript validator, I have checked both my javascript files with 
				    http://esprima.org/demo/validate.html, which indicated that both were syntatically valid.
				

## Deployment

This project has been deployed via GitHub at https://keefm6776.github.io/ultimate-simon/index.html.  


## Credits

### Content
				- Despite having memories of the original game, I researched the Simon game on Wikipedia.  I used this information 
				  to add extra funtionality to the game, beyond the basic 4 button game to respond to.  This provided the ideas from 
				  newer versions of the game to allow a choice or 4 or 6 buttons, to have the player respond in forward or reverse 
				  sequence.  

### Acknowledgements

                - Code institute notes for basics on Javascript and JQuery to adapt and base my code on.
                - https://www.w3schools.com/ for information and examples to adapt and base my code on.
                - https://stackoverflow.com/ for information and examples to adapt and base my code on.
                - My Mentor Theo Despoudis - for guidance on how to use callbacks to have the code wait
                  for user input and the different stages of logic checks required to check user clicks etc.
                  He also made suggestions to improve my code so that it was more efficient and easier to test.