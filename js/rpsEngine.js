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
//assigns player choices a numerical value to determine victory
function signToNum(sign) {
    switch (sign.toLowerCase()) {
        case ("rock"):
            return 2;
        case ("paper"):
            return 3;
        case ("scissors"):
            return 4;
        default:
            return 3;
    }
}

function computerPlay() {
    // Determines a -1, 0, or 1(lose, draw, win)
    return (Math.floor(Math.random()*3-1));
}

function playRound(playerSelection, computerSelection = computerPlay()) {
    let playerNum = signToNum(playerSelection);
    let computerNum = computerSelection + playerNum;
    if(computerNum > playerNum) {
        return [`You lose! ${numToSign(computerNum)} beats ${numToSign(playerNum)}.`, -1]
    }
    else if(computerNum < playerNum) {
        return [`You win! ${numToSign(playerNum)} beats ${numToSign(computerNum)}.`, 1]
    }
    else if(computerNum == playerNum) {
        return [`It's a draw! You both selected ${numToSign(playerNum)}.`, 0]
    }
}

function game(rounds = 5) {
    let score = 0;
    for(let i = 1; i <= rounds; i++) {
        let result = playRound(prompt("Rock, Paper, or Scissors?"));
        score += result[1];
        console.log(result[0]);
    }
    if (score == 0){
        return "The game is a draw, no winner.";
    }
    else if(score>0) {
        return `The game is over. You beat your opponent by ${score} points!`;
    }
    else {
        return `The game is over. The computer won by ${score*-1} points.`;
    }
}