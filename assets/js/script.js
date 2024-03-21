const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

/**
 * Makes the computer choose a number between 0 and 4 
 * compares the choice the player makes
 * and the random number (choice) the computer makes
 * to determine the winner following the rules of the game
 */
function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 5)]
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors" || computerChoice === "lizard") ? "You Win!" : "You Lose!"
                break;
            case "paper":
                result = (computerChoice === "rock" || computerChoice === "spock") ? "You Win!" : "You Lose!"
                break;
            case "scissors":
                result = (computerChoice === "paper" || computerChoice === "lizard") ? "You Win!" : "You Lose!"
                break;
            case "lizard":
                result = (computerChoice === "paper" || computerChoice === "spock") ? "You Win!" : "You Lose!"
                break;
            case "spock":
                result = (computerChoice === "scissors" || computerChoice === "rock") ? "You Win!" : "You Lose!"
                break;
            
        }
    }
    // Displays choices of the player and the computer and the result of who wins
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`
    resultDisplay.textContent = result;

    // Changes the color of the result text depending on result
    resultDisplay.classList.remove("greenText", "redText")

    switch (result) {
        case "You Win!":
            resultDisplay.classList.add("greenText");
            incrementPlayerScore()
            break;
        case "You Lose!":
            incrementComputerScore()
            resultDisplay.classList.add("redText");
            break;
    }
}
// Code from "love maths"
/**
 * Increment player score by 1
 */
function incrementPlayerScore() {

    let oldScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldScore;
}

/**
 * Increments computer score by 1
 */
function incrementComputerScore() {

    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
}