const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(parseInt(button.id));
    });
});

const results = document.querySelector('.outcome');
const score = document.querySelector('.score')
let playerScore = 0;
let computerScore = 0;
results.textContent = "Select your weapon."
score.textContent = `Player: ${playerScore}    Computer: ${computerScore}`
//converts numerical values to strings for printing
function numToSign(num) {
    switch (num) {
        case 2: 
        case 5:
            return "Rock";
        case 3:
            return "Paper";
        case 1:
        case 4:
            return "Scissors";
        default:
            return console.log("Error, bad input");
    }
}

function computerPlay() {
    // Determines a -1, 0, or 1(lose, draw, win)
    return (Math.floor(Math.random()*3-1));
}

function playRound(playerSelection, computerSelection = computerPlay()) {
    let computerNum = computerSelection + playerSelection;
    if(computerSelection === 1) {
        computerScore++;
        results.textContent = `You lose! ${numToSign(playerSelection+computerSelection)} beats ${numToSign(playerSelection)}.`;
        score.textContent = `Player: ${playerScore}    Computer: ${computerScore}`
    }
    else if(computerSelection === -1) {
        playerScore++;
        results.textContent = `You win! ${numToSign(playerSelection)} beats ${numToSign(playerSelection+computerSelection)}.`;
        score.textContent = `Player: ${playerScore}    Computer: ${computerScore}`
    }
    else if(computerSelection === 0) {
        results.textContent = `It's a draw! You both selected ${numToSign(playerSelection)}.`;
        score.textContent = `Player: ${playerScore}    Computer: ${computerScore}`
    }

    if(playerScore === 5 || computerScore===5) {
        score.textContent = `Game over! ${(playerScore ===5) ? "Player" : "Computer"} is victorious! Scores restarting.`
        playerScore = 0;
        computerScore = 0;
    }
}