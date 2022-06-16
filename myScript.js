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


function standardizeMove(playerSelection) {
    let trimmedMove = playerSelection.trim();
    let playerMove = trimmedMove.charAt(0).toUpperCase() + trimmedMove.slice(1).toLowerCase();
    return playerMove;
}


function isValidMove(playerMove) {
    if (playerMove != 'Rock' || playerMove != 'Paper' || playerMove != 'Scissors') {
        return false;
    } else {
        return true;
    }
}


function playerPlay() {
    let playerSelection = prompt("Type one of Rock, Paper, or Scissors");
    let playerMove = standardizeMove(playerSelection);
    if (isValidMove(playerMove)) {
        return playerMove;
    } else {
        throw "Invalid Input";
    }
}


function playRound(playerSelection, computerSelection, playerWins, computerWins) {
    if (playerSelection == computerSelection) {
        console.log("It's a tie!")
        return false;
    } else if (computerSelection == 'Rock') {
        if (playerSelection == 'Paper') {
            console.log("You win! Paper beats Rock");
            playerWins++;
        } else {
            console.log("You lose. Rock beats Scissors");
            computerWins++;
        }
    } else if (computerSelection == 'Paper') {
        if (playerSelection == 'Rock') {
            console.log("You lose. Paper beats Rock");
            computerWins++;
        } else {
            console.log("You win! Scissors beats Paper");
            playerWins++;
        }
    } else {
        if (playerSelection == 'Paper') {
            console.log("You lose. Scissors beats Paper");
            computerWins++;
        } else {
            console.log("You win! Rock beats Scissors");
            playerWins;
        }
    }
    return true;
}


function game() {
    let round = 1;
    let playerWins = 0;
    let computerWins = 0;

    while (round <= 5) {
        console.log(`Round: ${round}`);
        while (!playRound(playerPlay(), computerPlay(), playerWins, computerWins)) {
            console.log("Try again!")
        }
        console.log(`Score: You: ${playerWins} vs Computer: ${computerWins}`);
        round++;
    }
    if (playerWins >= computerWins) {
        return "You won!"
    } else {
        return "You lost."
    }
}