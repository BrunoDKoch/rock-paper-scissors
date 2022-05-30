function playRound(playerSelection, computerSelection) {
    return;
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
        return undefined;
    }
}
var validChoices = ["rock", "paper", "scissors"];
var playerSelection = playerPlay().toLowerCase();
while (playerSelection === null) {
    playerSelection = playerPlay();
}
var computerSelection = computerPlay();
