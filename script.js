function convertTextToString(btn) {
    var text = btn.textContent.toString();
    console.log(text);
    return text.toLowerCase();
}
function addListeners(btn) {
    btn.addEventListener('click', convertTextToString(btn));
}
function game(playerSelection) {
    if (noMoreRounds == true) {
        return;
    }
    var computerSelection = computerPlay();
    var result = playRound(playerSelection, computerSelection);
    resultText.textContent = "You picked ".concat(playerSelection, " and the computer picked ").concat(computerSelection, ". ").concat(result);
    switch (result) {
        case "You win!":
            playerScore++;
        case "You lose!":
            computerScore++;
        default:
            break;
    }
    rounds++;
    if (rounds == 5) {
        resultText.textContent = "".concat(resultText.textContent, ". Final score: ").concat(playerScore, " (player) vs ").concat(computerScore, " (computer).");
        noMoreRounds = true;
        return;
    }
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
var buttons = document.querySelectorAll('.player-choice');
var _loop_1 = function (i) {
    buttons[i].addEventListener('click', function () { game(buttons[i].textContent.toLowerCase()); });
};
for (var i = 0; i < buttons.length; i++) {
    _loop_1(i);
}
var resultText = document.querySelector('.result');
var validChoices = ["rock", "paper", "scissors"];
var playerScore = 0;
var computerScore = 0;
var rounds = 0;
var noMoreRounds = false;
