function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3)


    switch (randomNumber) {

        case 0: return "rock"

        case 1: return "paper"

        default: return "scissors"
    }
}
let computerSelection = getComputerChoice()
// console.log(computerSelection)

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase()
    return playerChoice
}

// let playerSelection = getPlayerChoice()
// console.log(playerSelection)

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        alert('Deuce!!')
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        alert('Player Wins; Rock beats Scissors')
    }
}

// playRound(playerSelection, computerSelection)

