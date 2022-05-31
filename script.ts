function game(playerSelection: string){
    if (noMoreRounds == true){
        return;
    }

    const computerSelection: string = computerPlay()
    let result = playRound(playerSelection, computerSelection);
    resultText.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}. ${result}`;
    switch(result){
        case "You win!":
            playerScore++;
        case "You lose!":
            computerScore++;
        default:;
            break;
    }
    rounds++
    if (rounds == 5){
        resultText.textContent = `${resultText.textContent}. Final score: ${playerScore} (player) vs ${computerScore} (computer).`
        noMoreRounds = true;
    }
}

function playRound(playerSelection: string, computerSelection: string){

    if(playerSelection === computerSelection){
        return "It's a tie!";
    }
    else if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper"
    || playerSelection == "paper" && computerSelection == "rock"){
        return "You win!";
    }
    else{
        return "You lose!";
    }
}

function computerPlay(){
    const computerPick = Math.floor(Math.random() * validChoices.length);
    const computerSelection: string = validChoices[computerPick];
    return computerSelection;
}

function playerPlay(){
    const playerSelection: string = prompt("Would you like to play rock, paper or scissors?");
    if (validChoices.includes(playerSelection.toLowerCase())){
        return playerSelection;
    } else{
    return "wrong";
    }
}

let buttons = document.querySelectorAll('.player-choice');

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function() {game(buttons[i].textContent.toLowerCase())});
}

const resultText = document.querySelector('.result');


const validChoices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
var noMoreRounds = false;