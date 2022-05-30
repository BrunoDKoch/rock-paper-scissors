function playRound(playerSelection: string, computerSelection: string){
    switch(playerSelection){
        case "rock":
            
    }
}

function computerPlay(){
    const computerPick = Math.floor(Math.random() * validChoices.length)
    const computerSelection: string = validChoices[computerPick]
    return computerSelection
}

function playerPlay(){
    const playerSelection: string = prompt("Would you like to play rock, paper or scissors?")
    if (validChoices.includes(playerSelection.toLowerCase())){
        return playerSelection
    } else{
    return undefined}
}

const validChoices = ["rock", "paper", "scissors"]
let playerSelection: any = playerPlay().toLowerCase()
while(playerSelection === null){
    playerSelection = playerPlay()
}
const computerSelection: string = computerPlay()

