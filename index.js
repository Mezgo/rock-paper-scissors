function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)

    switch (randomNumber) {

        case 0: return "rock"

        case 1: return "paper"

        default: return "scissors"
    }
}
// let computerSelection = getComputerChoice()
// console.log(computerSelection)

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase()
    return playerChoice
}

// let playerSelection = getPlayerChoice()
// console.log(playerSelection)

function getWinner(map_results, win_condition) {
    for (const [key, value] of map_results.entries()) {
        if (value === win_condition) {
            return key
        }
    }
}

function playRound(playerSelection, computerSelection) {

    const results = new Map()
    results.set("player", playerSelection)
    results.set("computer", computerSelection)

    console.log(results.get("player"))
    console.log(results.get("computer"))

    if (results.get("player") == results.get("computer")) {
        alert("Wow, it's even this time!!")
    }
    else if (Array.from(results.values()).includes("rock") && Array.from(results.values()).includes("scissors")) {
        let winner = getWinner(results, "rock")
        alert(winner + " wins")
    }
    else if (Array.from(results.values()).includes("rock") && Array.from(results.values()).includes("paper")) {
        let winner = getWinner(results, "paper")
        alert(winner + " wins")
    }
    else if (Array.from(results.values()).includes("paper") && Array.from(results.values()).includes("scissors")) {
        let winner = getWinner(results, "scissors")
        alert(winner + " wins")
    }
}

playRound(getPlayerChoice(), getComputerChoice())

