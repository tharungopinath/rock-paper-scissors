let humanScore = 0;
let compScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 30);
    if (randomNumber < 10) {
        let compChoice = "Paper";
        return compChoice;
    }
    else if (randomNumber < 20 && randomNumber >= 10) {
        let compChoice = "Scissors";
        return compChoice;
    }
    else { 
        let compChoice = "Rock";
        return compChoice;
    }
}

function getHumanChoice () { 
    let userInput = prompt("What do you choose (Rock, Paper, or Scissors?): ");
    userInput = userInput.toLowerCase();
    if (userInput === "rock") {
        let humanChoice = "Rock";
        return humanChoice;
    }
    else if (userInput === "paper") {
        let humanChoice = "Paper";
        return humanChoice;
    }
    else if (userInput === "scissors") {
        let humanChoice = "Scissors";
        return humanChoice;
    }
    else {
        let humanChoice = "invalid";
        return humanChoice;
    }
}

function playRound (humanChoice, compChoice){
    if (humanChoice === "Rock") {
        if (compChoice === "Rock") {
            console.log("Both parties chose Rock. The round is a draw!");
        }
        else if (compChoice === "Scissors") {
            console.log("You chose Rock, and the Computer chose Scissors. You win this round!");
            humanScore++;
        }
        else {
            console.log("You chose Rock, and the Computer chose Paper. The Computer wins this round!");
            compScore++;
        }
    }

    else if (humanChoice === "Paper"){
        if (compChoice === "Rock") {
            console.log("You chose Paper, and the Computer chose Rock. You win this round!");
            humanScore++;
        }
        else if (compChoice === "Scissors") {
            console.log("You chose Paper, and the Computer chose Scissors. The Computer wins this round!");
            compScore++;
        }
        else {
            console.log("Both parties chose Paper. The round is a draw!");
        }
    }

    else if (humanChoice === "Scissors"){
        if (compChoice === "Rock") {
            console.log("You chose Scissors, and the Computer chose Rock. The Computer wins this round!");
            compScore++;
        }
        else if (compChoice === "Paper") {
            console.log("You chose Scissors, and the Computer chose Paper. You win this round!");
            humanScore++;
        }
        else {
            console.log("Both parties chose Scissors. The round is a draw!");
        }
    }

    else {
        console.log("Your input was invalid. The Computer automatically wins this round.")
        compScore++;
    }
}

function playGame () {
    for (let i = 0; i < 3; i++){
        let compChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, compChoice);
    }
    if (humanScore === compScore){
        console.log("After those 5 rounds, both teams had a score of " + humanScore + " point(s), so this game is a draw!");
    }
    else if (humanScore > compScore){
        console.log("After those 5 rounds, you scored " + humanScore + " point(s), while the Computer scored " + compScore + " point(s), so you win this game!");
    }
    else {
        console.log("After those 5 rounds, you scored " + humanScore + " point(s), while the Computer scored " + compScore + " point(s), so the Commputer wins this game!");
    }

    humanScore = 0;
    compScore = 0;
}

playGame();
