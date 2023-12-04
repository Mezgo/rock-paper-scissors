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
        alert("Wow, it's a tie this time!!")
        return "tie"
    }
    else if (Array.from(results.values()).includes("rock") && Array.from(results.values()).includes("scissors")) {
        let winner = getWinner(results, "rock")
        alert(winner + " wins")
        return winner
    }
    else if (Array.from(results.values()).includes("rock") && Array.from(results.values()).includes("paper")) {
        let winner = getWinner(results, "paper")
        alert(winner + " wins")
        return winner
    }
    else if (Array.from(results.values()).includes("paper") && Array.from(results.values()).includes("scissors")) {
        let winner = getWinner(results, "scissors")
        alert(winner + " wins")
        return winner
    }
}

function game(){
    let counter = 1,
        player_score = 0,
        computer_score = 0

    while (counter <= 5){
        winner = playRound(getPlayerChoice(), getComputerChoice())

        if (winner == "player"){
            player_score++
        }
        else if (winner == "computer"){
            computer_score++
        }
        else{
            counter--
        }

        console.log("player: " + player_score)
        console.log("computer: " + computer_score)
        console.log("counter: " + counter)

        if (player_score == 3){
            alert("player wins with a score of: " + player_score + " points." + " computer loses with a score of: " + computer_score + " points")
            break
        }
        else if(computer_score == 3){
            alert("computer wins with a score of: " + computer_score + " points." + " player loses with a score of: " + player_score + " points")
            break
        }
        else{
            counter++
        }
    }
}

game()

