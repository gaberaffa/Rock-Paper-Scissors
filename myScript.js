/* Some Global Variables */
let round = document.querySelector("#round-title");
let computerScore = document.querySelector("#computer-score");
let userScore = document.querySelector("#user-score");
let topBin = document.querySelector("#top");
let buttons = Array.from(document.querySelectorAll("button"));

/* The main operating mechanics */
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let status = playRound(button.querySelector("h2").textContent.trim(), computerPlay());
        if (isGameOver()) {
            deleteMessage();
            resetGame();
            return;
        };
        setTimeout(deleteMessage, 1000);
        if (status) updateRound();
        return;
    });
});

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

/* Randomizes a choice of Rock, Paper, or Scissors on behalf of the Computer */
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
    message_box.setAttribute("class", "round");
    topBin.appendChild(message_box);
};

function deleteMessage() {
    topBin.removeChild(topBin.lastChild);
}

/* Updates the score shown on the website */
function updateScore(element) {
    let trimmed = element.textContent.trim()
    let val = trimmed.charAt(trimmed.length - 1);
    let updated = +val;
    element.textContent = element.textContent.replace(val, (++updated).toString());
};

/* Updates the round shown on the page */
function updateRound() {
    let currentRound = +(round.textContent.trim()[6]);
    let newRound = (++currentRound).toString();
    round.textContent = round.textContent.replace(round.textContent.trim()[6], newRound);
};

/* Simulates a round of Rock, Paper, Scissors */
function playRound(playerSelection, computerSelection) {
    if (playerSelection.charAt(0) == computerSelection.charAt(0)) {
        printMessage("It's a tie! Try again");
        return 0;
    } 
    if (computerSelection == 'Rock') {
        if (playerSelection == 'Paper') {
            printMessage("You win! Paper beats Rock");
            updateScore(userScore);
        } else {
            printMessage("You lose. Rock beats Scissors");
            updateScore(computerScore);
        }
    } else if (computerSelection == 'Paper') {
        if (playerSelection == 'Rock') {
            printMessage("You lose. Paper beats Rock")
            updateScore(computerScore);
        } else {
            printMessage("You win! Scissors beats Paper");
            updateScore(userScore);
        }
    } else {
        if (playerSelection == 'Paper') {
            printMessage("You lose. Scissors beats Paper");
            updateScore(computerScore);
        } else {
            printMessage("You win! Rock beats Scissors");
            updateScore(userScore);
        }
    }
    return 1;
}

/* Checks whether the game is over */
function isGameOver() {
    let trimmedUser = userScore.textContent.trim();
    let trimmedComputer = computerScore.textContent.trim();
    return trimmedUser.charAt(trimmedUser.length - 1) == 3 || trimmedComputer.charAt(trimmedComputer.length - 1) == 3;
};

/* Resets the homepage for a fresh new start */
function resetGame() {
    printMessage("Game Over");
    setTimeout(deleteMessage, 1000);
    let trimmedUser = userScore.textContent.trim();
    let trimmedComputer = computerScore.textContent.trim();
    if (trimmedUser.charAt(trimmedUser.length - 1) > trimmedComputer.charAt(trimmedComputer.length - 1)) {
        printMessage("You Won!")
    } else {
        printMessage("You Lost")
    }
    setTimeout(deleteMessage, 1000);
    userScore.textContent = "User: 0"
    computerScore.textContent = "Computer: 0"
    round.textContent = "Round 1 of 5:"
}