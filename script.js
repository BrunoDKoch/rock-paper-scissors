function game() {
    for (var i = 0; i < 5; i++) {
        var playerSelection = playerPlay().toLowerCase();
        while (playerSelection === "wrong") {
            playerSelection = playerPlay();
        }
        var computerSelection = computerPlay();
        var result = playRound(playerSelection, computerSelection);
        console.log("You picked ".concat(playerSelection, " and the computer picked ").concat(computerSelection, ". ").concat(result));
        switch (result) {
            case "You win!":
                playerScore++;
            default:
                break;
        }
    }
    console.log("Final score: ".concat(playerScore));
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper"
        || playerSelection == "paper" && computerSelection == "rock") {
        return "You win!";
    }
    else {
        return "You lose!";
    }
}
function computerPlay() {
    var computerPick = Math.floor(Math.random() * validChoices.length);
    var computerSelection = validChoices[computerPick];
    return computerSelection;
}
function playerPlay() {
    var playerSelection = prompt("Would you like to play rock, paper or scissors?");
    if (validChoices.includes(playerSelection.toLowerCase())) {
        return playerSelection;
    }
    else {
        return "wrong";
    }
}
var validChoices = ["rock", "paper", "scissors"];
var playerScore = 0;
game();
