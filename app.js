// 0. Screen loads and displays components
// - Start button
// - Game board
// - Game-round display window (inside the game board)
// - Game status section (3 different kind of messages >> upon loading use #1)
// 		1. Welcome! Please click Start button to play. 
// 		2. You win! What a great memory! 
// 		     Press Start button to play again.
// 		3. You lose! Press Start button to play again.
// - Instruction section

// 1. A player clicks the start button
// (1) Start button
// - Grab the button with querySelector
// - Attach an eventListener 
// - (Logic) Click will start generating a random play sequence 
// - (UI) The game board buttons will highlight according to the sequence
// (2) Random play sequence:
// - (Logic) The sequence is an array populated with button selections (=indices) 
// - (Logic) Apply Math.random for index selection (range is 0-3)
// - (Logic) The length of the array increases by 1 as the round progresses (use .push)
// - (UI) Highlight the selected game button to display sequence to the player (CSS - two different background colors applied)
// - (UI) Use setInterval to give some time between each selection (i.e. blue >> 1 second >> yellow >> 1 second >> yellow)

// 2. A player replicates the sequence
// (1) Gameboard
// - Consists of 4 divs (index 0-3 >> use semantic Ids >> i.e upper-left, upper-right etc. for clarity)
// - Grab each div with getElementById and attach an eventListener
// - Player's clicks will be stored as indices of an array (= initially an empty array); apply with .push
// (2) Sequence comparison
// - If the game board array = player array >> move on to the next round 
// 	- Grab the round display window with getElementById and increment (i++) the innerHTML by 1
// 	- As far as the winning continues (game board array = player array) the player will continue to play until reaching the 10th round (use 'for (let i = 0; i < 10; i++)')
// - else (game board array !== player array) >> player loses

// 3. When game ends (win or lose)
// - Game message updates
// 	- Grab the element with querySelector
// 	- Populate the innerHTML with winning or losing message depending on the result of the conditionals written for the sequence comparison
// - remove evenListeners for divs (divs are no longer clickable) 

//*-----Global variables--------*/
// let gameboard = [];
let playerArray = [];
let computerArray = [];
let gameActive = true;
let computerPlaying = true;
let winningMessage = `You win! What a great memory! Press Start button to play again.`
let losingMessage = `You lose! Press Start button to play again.`

//*-----Selectors--------*/
let startButton = document.getElementById('start-button')
let messageToPlayer = document.getElementById('game-status-message')
let buttons = document.querySelectorAll('.button')
let upperLeft = document.getElementById('upper-left')
let upperRight = document.getElementById('upper-right')
let lowerLeft = document.getElementById('lower-left')
let lowerRight = document.getElementById('lower-right')
let roundDisplay = document.getElementById('round-display')

let round = roundDisplay.innerHTML;
// console.log(round)

//*-----Attaching eventListeners---------*/
startButton.addEventListener ('click', gameStart);
upperLeft.addEventListener ('click', flash);
upperRight.addEventListener ('click', flash);
lowerLeft.addEventListener ('click', flash);
lowerRight.addEventListener ('click', flash);


function gameStart() {
    gameActive = true;
    messageToPlayer.innerHTML= 'Have fun!';
    computerSequence ()
}

function computerSequence() {
    if (gameActive === true) {
        let radomButton = buttons[Math.floor(Math.random() * 4)];
        computerArray.push(radomButton);
        for (i = 0; i < computerArray.length; i ++) {
            if (i > 0)
                computerArray[i]
                .classList.remove("changeColor");
            
            
                ???
}

function playerClicks (event) {
    event.target.classList.add("changeColor");
    setTimeout(function() {
        event.target.classList.remove("changeColor");
    }, 500);
    playerArray.push(event.target);
        console.log(test)
    }

function win() {
    messageToPlayer.innerHTML= winningMessage
}

function lose() {
    messageToPlayer.innerHTML= losingMessage
    computerArray = [];
    playerArray = [];
    gameActive = false;
}