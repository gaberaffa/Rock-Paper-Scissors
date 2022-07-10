/* Some Global Variables */
let round = document.querySelector("#round");
let computerScore = document.querySelector("#computer-score");
let userScore = document.querySelector("#user-score");
// use global ints instead!s
let curr_round;
let userWins;
let computerWins;
let topBin = document.querySelector("#top");
let buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.querySelector("h2").innerHTML, computerPlay());
        //topBin.removeChild(topBin.lastChild);
    });
});

/* 
 * Randomizes a choice of Rock, Paper, 
 * or Scissors on behalf of the Computer
 */
function computerPlay() {
    move =  Math.random()
    switch (true) {
        case move <= 0.333:
            return 'Rock';
        case move <= 0.666:
            return 'Paper';
        default:
            return 'Scissors';
    }
};

/* Prints a message on the screen regarding the status of the game */
function printMessage(message) {
    let message_box = document.createElement("h2");
    message_box.textContent = message;
    message_box.setAttribute("class", "round")
    topBin.appendChild(message_box);
};

/* Updates the score shown on the website */
function updateScore(element) {
    let val = element.innerHTML.charAt(score.length - 1);
    element.innerHTML.replace(val, ++Number(val).toString);
};

/* Simulates a round of Rock, Paper, Scissors */
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        printMessage("It's a tie! Try again");
        return;
    } else if (computerSelection == 'Rock') {
        if (playerSelection == 'Paper') {
            printMessage("You win! Paper beats Rock");
            updateScore(userScore);
        } else {
            printMessage("You lose. Rock beats Scissors");
            updateScore(computerScore);
        }
        return;
    } else if (computerSelection == 'Paper') {
        if (playerSelection == 'Rock') {
            printMessage("You lose. Paper beats Rock")
            updateScore(computerScore);
        } else {
            printMessage("You win! Scissors beats Paper");
            updateScore(userScore);
        }
        return;
    } else {
        if (playerSelection == 'Paper') {
            printMessage("You lose. Scissors beats Paper");
            updateScore(computerScore);
        } else {
            printMessage("You win! Rock beats Scissors");
            updateScore(userScore);
        }
        return;
    }
}

/* Checks whether the game is over */
function isGameOver() {
    return curr_round == 5;
};

/* Resets the homepage for a fresh new start */
function resetGame() {
    printMessage("Game Over");
    if (userWins > computerWins) {
        printMessage("You Won!")
    } else {
        printMessage("You Lost")
    }
}