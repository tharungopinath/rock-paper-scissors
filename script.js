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

function playRound (humanChoice, compChoice){
    if (humanChoice === compChoice) {
        result.textContent = "This round is a tie. (Computer chose " + compChoice + " and you chose " + humanChoice + ")";
    }
    else if ((humanChoice == "Rock" && compChoice == "Scissors") || (humanChoice == "Paper" && compChoice == "Rock") || (humanChoice == "Scissors" && compChoice == "Paper")){
        result.textContent = "You win this round. (Computer chose " + compChoice + " and you chose " + humanChoice + ")";
        humanScore++;
    }
    else {
        result.textContent = "Computer wins this round. (Computer chose " + compChoice + " and you chose " + humanChoice + ")";
        compScore++;
    }
}

function gameOver () {
    if (humanScore == 5 || compScore == 5){
        if (humanScore > compScore) {
            winner.textContent = "You win the game. You got " + humanScore + " point(s) while the Computer had " + compScore + " point(s).";
            humanScore = 0;
            compScore = 0;
        }
        else {
            winner.textContent = "Computer wins the game. You had " + humanScore + " point(s) while the Computer got " + compScore + " point(s).";
            humanScore = 0;
            compScore = 0;
        }
    }
}

const choices = document.querySelector(".choices");
const result = document.querySelector("#result");
const winner = document.querySelector("#winner");
const score = document.querySelector("#score");

choices.addEventListener("click", (event)=> {
    let target = event.target;
    if(winner.textContent != ""){
        winner.textContent = "";
    }
    switch (target.id) {
        case "rock":
            playRound("Rock", getComputerChoice());
            gameOver();
            break;
        case "paper": 
            playRound("Paper", getComputerChoice());
            gameOver();
            break;
        case "scissors":
            playRound("Scissors", getComputerChoice());
            gameOver();
            break;
    }
    score.textContent = "You: " + humanScore + ", Computer: " + compScore;
});

