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
let round = 0;
let winningMessage = `You win! What a great memory! &#128525`;
let continueMessage = `Great! Continue playing! &#128579;`
let losingMessage = `Game over! &#128565; Please try again.`;

//*-----Selectors--------*/
let startButton = document.getElementById('start-button');
let messageToPlayer = document.getElementById('game-status-message');
let buttons = document.querySelectorAll('.button');
let upperLeft = document.getElementById('0');
let upperRight = document.getElementById('1');
let lowerLeft = document.getElementById('2');
let lowerRight = document.getElementById('3');
let roundDisplay = document.getElementById('round-display');
let randomIndex = Math.floor(Math.random() * 4);

//*-----Attaching eventListeners---------*/
startButton.addEventListener ('click', gameStart);
upperLeft.addEventListener ('click', playerPlays);
upperRight.addEventListener ('click', playerPlays);
lowerLeft.addEventListener ('click', playerPlays);
lowerRight.addEventListener ('click', playerPlays);

function gameStart() {
    // let gameActive = true;
    // buttons.classList.remove("unclickable");
    messageToPlayer.innerHTML= 'Have fun! &#x1F60E';
    setTimeout(computerPlays, 1000)
}

function computerPlays() {
    // buttons.classList.add("unclickable");
    let randomIndex = Math.floor(Math.random() * 4);
    computerArray.push(randomIndex);
    // console.log(computerArray)
    for (let i = 0; i < computerArray.length; i++) {
        setTimeout(function() {
            buttons[computerArray[i]].classList.add("changeColor")
            setTimeout(function() {
                buttons[computerArray[i]].classList.remove("changeColor");
            }, 300);
        }, 800 * i);
        roundDisplay.innerHTML=i+1
        setTimeout(function() {
            messageToPlayer.innerHTML = `Your turn! &#x1F609;`
        }, computerArray.length * 800 + 1000);
    }
    playerPlays();
}

function playerPlays (event) {
    // buttons.classList.remove("unclickable");
    //player clicks to make button change color 
    event.target.classList.add("changeColor");
    // console.log(event.target)
    setTimeout(function() {
        event.target.classList.remove("changeColor");
    }, 500);
    // / add player's selection to playerArray
    let nextPlayerArray = [...playerArray].push(parseInt(event.target.id));
    playerArray = nextPlayerArray
    compareArrays();
    setTimeout(function() {
        messageToPlayer.innerHTML = `Computer's turn &#x1F60C;`
    }, playerArray.length * 800 + 1000);
    computerPlays();
}

// function playerPlays() {
//         upperLeft.addEventListener ('click', upperLeft.classList.add("changeColor"));   
//         setTimeout(function() {
//             upperLeft.classList.remove("changeColor");
//         }, 500);
//         upperRight.addEventListener ('click', upperRight.classList.add("changeColor"))   
//         setTimeout(function() {
//             upperRight.classList.remove("changeColor");
//         }, 500);
//         lowerLeft.addEventListener ('click', lowerLeft.classList.add("changeColor"));   
//         setTimeout(function() {
//             lowerLeft.classList.remove("changeColor");
//         }, 500);
//         lowerRight.addEventListener ('click', lowerRight.classList.add("changeColor"));   
//         setTimeout(function() {
//             lowerRight.classList.remove("changeColor");
//         }, 500);
//     // / add player's selection to playerArray
//     playerArray.push(parseInt(event.target.id));
//     compareArrays()
//     // messageToPlayer.innerHTML = `It's computer's turn.`
//     setTimeout(computerPlays, 3000)
    // }

function compareArrays() {
    if (JSON.stringify.playerArray !== JSON.stringify.computerArray) { //https://www.geeksforgeeks.org/how-to-compare-two-arrays-in-javascript/
        // console.log(playerArray)
        // console.log(computerArray)
        lose();
    } else if (playerArray === computerArray && playerArray.length !== 10) {
        messageToPlayer.innerHTML= `Computer's turn &#x1F60C`
        updateRound();
        setTimeout(computerPlays, 1000)
    } else if (playerArray.length === 10) {
        buttons.classList.add("unclickable");
        win();
    }
}

function win() {
    messageToPlayer.innerHTML= winningMessage;
    buttons.classList.add("unclickable");
}

function lose() {
    messageToPlayer.innerHTML= losingMessage;
    buttons.classList.add("unclickable");
}