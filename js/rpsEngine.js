function numToSign(num) {
    switch (num) {
        case 0: 
            console.log("Rock");
            break;
        case 1:
            console.log("Paper");
            break;
        case 2:
            console.log("Scissors");
            break;
        default:
            console.log("Error, bad input");
            break;
    }
}

function computerPlay() {
    numToSign(Math.floor(Math.random()*3));
}