# MODULE 5 (Interactive Frontend Development) PROJECT - Code Institute Full Stack Developer Diploma
# Simon Game

## BRIEF

CREATE A MEMORY GAME

Build a simple single-player memory game inspired by Simon. Check out this short video and Wikipedia entry to understand the rules of the game

Provide details in your README.md of the logic you have used to build your game as well as an explanation of how you tested your logic

## CHOSEN PROJECT

I decided to choose the Simon Game Project, because this is a game that I remember playing in my childhood.  Both in its original format of
remembering items laid out on a tray and then listing them, as well as the electronic game which this website is based on.  The idea of this 
project was to highlight the ability to use logic in different ways to allow the game to run as well as provided other functionality, like
page layout and option changes.  

The idea of this game is to watch the sequence of coloured lights highlighted, and to repeat them in the same order as shown.  The lights are
presented round by round, and the number of lights shown increases with each round.  The number of lights shown are equal to the round that the
player is on.  The sequence that is required to be repeated is shown at the beginning of each round, so that the player has a fresh view of the
sequence required to progress to the next round.  The player completes the game is he/she has completed the number of rounds that are determined
in the optons panel.

## UX

As part of the development process wireframes of my game before starting:

See my repository's file list:

Wireframe 4 Buttons Landscape.pdf
Wireframe 4 Buttons Portrait.pdf
Wireframe 6 Buttons Landscape.pdf
Wireframe 6 Buttons Portrait.pdf

Which are located in the Wireframe directory.


## Features



Header (at start):      1.	This presents the user with the start button to initiate the game.  There is also an information icon, this presents a pop up modal box
                            to the player to give the idea and rules of the game.  There is also a link the the Simon Game's Wikipedia page for the history of the game.
                            These buttons are hidden during the game so that the player cannot set off a second game, or interrupt the game with the information button.
                            Also hiding these buttons at the start of the game, makes way for the infotmation described next.
                            
Header (during game):   2.	During the game, the header presents the player with prompts of when to watch the lights being highlighted, or when to repeat the sequence that was 
                            shown, so that they know that the sequence is complete.  If the player clicks while the sequence is being shown, a prompt to let them know
                            that they are clicking too early will be shown in the header.  Also if the player completes the game by completing all the rounds or fails
                            the game by making an incorrect click, this will also be prompted here.  The Repeat Prompts will also remind the user whether to repeat the 
                            sequence as they saw it, or whether to repeat it in reverse.
                            
Main body:	            3.	Here the buttons that show the sequence and read the player's clicks are shown.  These buttons will highlight slightly to indicate that they
                            have been hovered over.  They will also highlight fully and play the appropriate tone when the sequence is being played or if the player clicks
                            on them at the appropriate time.  
                            
                            Depending on the Player's selection in the footer, the main body will display either 4 or 6 buttons.  The buttons are fully responsive and will 
                            resize to suit smaller screens and to fit either the 4 or 6 buttons.  The responsiveness will also allow the user to turn the screen of a mobile device
                            and have the screen change accordingly.  This will have the header and footer move to the usual top and bottom of the page, and also if there are
                            6 buttons then the buttons will reconfigure to fit the screen accordingly.
        
Footer (at start):      4.  The footer presents the user with 3 option buttons for game play:
                            
                            i)   The number of rounds that will have to be played before the user wins the game.  The default value is 5 rounds, and the number of rounds increases
                                 by 5 each time that the button is clicked.  The maximum number of rounds is 60, and if the player clicks again, then the number of rounds will 
                                 return to 5
                                
                            ii)  The direction that the player will have to repeat the given sequence in.  If the player picks "Fwd", then they will have to repeat the sequence in
                                 the forward direction, or as they see it.  It the player picks "Rev", then they will have to repeat each sequence in the reverse direction of 
                                 which it was shown to them.
                            
                            iii) The number of buttons to be used during the game.  The two options are 4 and 6, and clicking on this button will toggle between these values.
                            
                            Again these buttons are hidden during gameplay, to prevent any changes being made during the game, and to make way for the game to display the number
                            of the current round to the user.


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

## Testing

Each new feature had been tested after each stage of development within the CLOUD 9 environment.  This has included:

				1.	General play         - checking that the buttons highlighted correctly, the sounds initiated.
				2.	Win/Lose             - check that the game responded correctly on correct player response (move to next round/win game) 
				                           and incorrect player response (lose game).
				3.	No Of Buttons Option - used jasmine to test that this button toggled between 4 and 6 buttons, and displayed the correct number 
				                           on the button itself.  Also check that the ui displayed the correct number of buttons selected.
				4	No Of Rounds Option  - used jasmine to test that this button toggled in increments of 5, from 5 to 60 and then back to 5
				                           again.  Jasmine was also used to check that the array of button clicks was the correct length according
				                           to the number of rounds.
				5.  Direction Option     - used jasmine to test that this button toggled between forward and reverse direction on clicking it.  Also
				                           check that the information on the button updated to show that the correct direction selected.
				6.  PlayButton           - used jasmine	to test that this function returned the correct colour when the button number was given as input.
				7.	playArray            - used jasmine to test that this function returned an array of the correct length, according to the number of rounds   
				                           selected.

After deployment the site has been tested for the above on:

				1.	iPhone 5s on portrait screen (iOS 11).
				2.	iPhone 5s on landscape screen. (iOS 11)
				3.	iPad Air 2 on portrait screen. (iOS 11)
				4.	iPad Air 2 on landscape screen. (iOS 11)	
				5.  10" GoTab Android Table on portrait screen. (Android 4.2.2 - Jelly Bean)
				6.  10" GoTab Android Table on landscape screen. (Android 4.2.2 - Jelly Bean)
				7. 	Hanns-G 20" widescreen monitor. (Windows 10)

Issues:

				1.  Found that the array of button clicks was consistently 1 value too long.  Found 
				    that I had started this for loop from 0, so had to make it stop at the (noOfRounds - 1).
				    (rectified)
				2.	Sometimes after a few rounds the buttons sit off centre of the screen. (not rectified)
				

## Deployment

This project has been deployed via GitHub at https://keefm6776.github.io/ultimate-simon/index.html.  


## Credits

### Content
				- Despite having memories of the original game, I researched the Simon game on Wikipedia.  I used this information 
				  to add extra funtionality to the game, beyond the basic 4 button game to respod to.  This provided the ideas from 
				  newer versions of the game to allow a choice or 4 or 6 buttons, to have the player respond in forward or reverse 
				  sequence.  

### Acknowledgements

                - Code institute notes for basics on Javascript and JQuery.
                - https://www.w3schools.com/ for information and examples to base my code on.
                - https://stackoverflow.com/ for information and examples to base my code on.
                - My Mentor Theo Despoudis - for guidance on how to use callbacks to have the code wait
                  for user input and the different stages of logic checks required to check user clicks etc.