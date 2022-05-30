function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection: any = playerPlay().toLowerCase()
        while(playerSelection === "wrong"){
            playerSelection = playerPlay()
        }
        const computerSelection: string = computerPlay()
        let result = playRound(playerSelection, computerSelection)
        console.log(`You picked ${playerSelection} and the computer picked ${computerSelection}. ${result}`)
        switch(result){
            case "You win!":
                playerScore++
            default:
                break
        }
    }
    console.log(`Final score: ${playerScore}`)
}

function playRound(playerSelection: string, computerSelection: string){
    if(playerSelection === computerSelection){
        return "It's a tie!"
    }
    else if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper"
    || playerSelection == "paper" && computerSelection == "rock"){
        return "You win!"
    }
    else{
        return "You lose!"
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
    return "wrong"}
}

const validChoices = ["rock", "paper", "scissors"]
let playerScore = 0
game()