// 0. Screen loads and displays components
// - Start button
// - Game board
// - Game-round display window (inside the game board)
// - Game status section (3 different kind of messages >> upon loading use #1)
// 		1. Welcome! Please click Start button to play. 
// 		2. You win! What a great memory! 
// 		     Press Start button to play again.
// 		3. You lose! Please try again.
// 		     Press Start button to play again.
// - Instruction section

// 2. A player clicks the start button
// (1) Start button
// - Grab the button with querySelector
// - Attach an eventListener 
// - (Logic) Click will start generating a random play sequence 
// - (UI) The game board buttons will highlight according to the sequence
// (2) Random play sequence:
// - (Logic) The sequence is an array populated with button selections (=indices) 
// - (Logic) Apply Math.random for index selection (range is 0-3)
// - (Logic) The length of the array increases by 1 as the round progresses (use .push)
// - (UI) Highlight the selected game button to display sequence to the player (CSS - two different background colors applied -- use 'if conditional')
// - (UI) Use setInterval to give some time between each selection (i.e. blue >> 1 second >> yellow >> 1 second >> yellow)

// 3. A player replicates the sequence
// (1) Gameboard
// - Consists of 4 divs (index 0-3)
// - Grab each div with getElementByI and attach an eventListener
// - Player's clicks  will be stored as indices of an array (= initially empty array); apply with .push
// (2) Sequence comparison
// - If the game board array = player array >> move on to the next round 
// 	- Grab the round display window with getElementById and increment (i++) the innerHTML by 1
// 	- As far as the winning continues (game board array = player array) the player will continue to play until reaching the 10th round (use 'for (let i = 0; i < 10; i++)')
// - else ( game board array !== player array)>> player loses

// 4. When game ends (win or lose)
// - Game message updates
// 	- Grab the element with querySelector
// 	- Populate the innerHTML with winning or losing message depending on the result of the conditionals written for the sequence comparison
// - remove evenListeners for divs (divs are no longer clickable) 