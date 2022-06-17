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
}

/*
 * Transforms string input to
 * capitalize the first letter only
 */
function standardizeMove(playerSelection) {
    let trimmedMove = playerSelection.trim();
    let playerMove = trimmedMove.charAt(0).toUpperCase() + trimmedMove.slice(1).toLowerCase();
    return playerMove;
}

/*
 * Determines whether a move / string is valid
 * in the context of Rock, Paper, Scissors
 */
function isValidMove(playerMove) {
    if (playerMove == 'Rock' || playerMove == 'Paper' || playerMove == 'Scissors') {
        return true;
    } else {
        return false;
    }
}

/*
 * Prompts the user for move input
 * as part of Rock, Paper, Scissors
 */
function playerPlay() {
    let playerSelection = prompt("Type one of Rock, Paper, or Scissors");
    let playerMove = standardizeMove(playerSelection);
    if (isValidMove(playerMove)) {
        return playerMove;
    } else {
        console.log("Invalid Input");
        playerPlay();
    }
}

/* 
 * Simulates a round of Rock, Paper, Scissors.
 * Returns 1 if the user wins, -1 if the computer wins
 * and 0 if there is a tie. It also provides commentary
 * on game status in the form of short updates
 */
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("It's a tie! Try again")
        return 0;
    } else if (computerSelection == 'Rock') {
        if (playerSelection == 'Paper') {
            console.log("You win! Paper beats Rock");
            return 1;
        } else {
            console.log("You lose. Rock beats Scissors");
            return -1;
        }
    } else if (computerSelection == 'Paper') {
        if (playerSelection == 'Rock') {
            console.log("You lose. Paper beats Rock");
            return -1;
        } else {
            console.log("You win! Scissors beats Paper");
            return 1;
        }
    } else {
        if (playerSelection == 'Paper') {
            console.log("You lose. Scissors beats Paper");
            return -1;
        } else {
            console.log("You win! Rock beats Scissors");
            return 1;
        }
    }
    return true;
}

/* Simulates a five-round Rock,
 * Paper, Scissors game and provides
 * ongoing updates and a final assessment
 */
function game() {
    let round = 1;
    let playerWins = 0;
    let computerWins = 0;

    while (round <= 5) {
        console.log(`Round ${round}:`);
        flag = true;
        while(flag) {
            flag = false;
            switch(playRound(playerPlay(), computerPlay())) {
                case 1: 
                    playerWins++;
                    break;
                case -1: 
                    computerWins++;
                    break;
                default:
                    flag = true;
            }
        }
        console.log(`Score:\n You: ${playerWins} - Computer: ${computerWins}`);
        round++;
    }
    console.log(`Game Over. Final Score:\n You: ${playerWins} - Computer: ${computerWins}`)
    if (playerWins >= computerWins) {
        return "You won!"
    } else {
        return "You lost."
    }
}