let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
const results = document.createElement("div");
const hChoiceDiv = document.createElement("div");
const cChoiceDiv = document.createElement("div");
const hScoreDiv = document.createElement("div");
const cScoreDiv = document.createElement("div");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * 3); //Generate number between 0 and 2
    cChoiceDiv.textContent = "Computer choice: " + choices[index];
    return choices[index];
}

function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        results.textContent = "It's a tie!";
        tieScore++;
    }
    else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
             (humanChoice === 'scissors' && computerChoice === 'paper') ||
             (humanChoice === 'paper' && computerChoice === 'rock')) {
        results.textContent = "Human wins round!";
        humanScore++;
    }
    else {
        results.textContent = "Computer wins round!";
        computerScore++;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanScore >= 5 || computerScore >= 5) return;
    
    determineWinner(humanChoice, computerChoice);

    if (humanScore >= 5) {
        results.textContent = "Human wins the game!";
    }
    else if (computerScore >= 5) {
        results.textContent = "Computer wins the game!";
    }

    hScoreDiv.textContent = "Human Score: " + humanScore;
    cScoreDiv.textContent = "Computer Score: " + computerScore;
}

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
rockBtn.addEventListener("click", () => {
    hChoiceDiv.textContent = "Human Choice: rock";
    playRound("rock", getComputerChoice());
});
const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
paperBtn.addEventListener("click", () => {
    hChoiceDiv.textContent = "Human Choice: paper";
    playRound("paper", getComputerChoice());
});
const scissBtn = document.createElement("button");
scissBtn.textContent = "Scissors";
scissBtn.addEventListener("click", () => {
    hChoiceDiv.textContent = "Human Choice: scissors";
    playRound("scissors", getComputerChoice());
});

document.body.appendChild(rockBtn);
document.body.appendChild(paperBtn);
document.body.appendChild(scissBtn);
document.body.appendChild(hChoiceDiv);
document.body.appendChild(cChoiceDiv);
document.body.appendChild(hScoreDiv);
document.body.appendChild(cScoreDiv);
document.body.appendChild(results);