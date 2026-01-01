let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * 3); //Generate number between 0 and 2
    console.log("Computer choice: " + choices[index]);
    return choices[index];
}

function getHumanChoice() {
    let choice = prompt("Type rock, paper, or scissors: ").toLowerCase();
    console.log("Human choice: " + choice);
    return choice;
}

function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        tieScore++;
    }
    else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
             (humanChoice === 'scissors' && computerChoice === 'paper') ||
             (humanChoice === 'paper' && computerChoice === 'rock')) {
        console.log("Human wins!");
        humanScore++;
    }
    else {
        console.log("Computer wins!");
        computerScore++;
    }
}

function playRound(humanChoice, computerChoice) {
    determineWinner(humanChoice, computerChoice);
}

function playGame() {
    for (i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        console.log("Human wins the game!");
    }
    else if (humanScore === computerScore) {
        console.log("The game ends in a tie!");
    }
    else
        console.log("Computer wins the game!");

}

playGame();
