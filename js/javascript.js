const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;
let userScore;
let computerScore;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // or you can use possibleChoices.length

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a tie!";
  }
  if (computerChoice === "rock") {
    if (userChoice === "paper") {
      result = "You win!";
    } else {
      result = "You lose!";
    }
  } else if (computerChoice === "paper") {
    if (userChoice === "scissors") {
      result = "You win!";
    } else {
      result = "You lose!";
    }
  } else if (computerChoice === "scissors") {
    if (userChoice === "rock") {
      result = "You win!";
    } else {
      result = "You lose!";
    }
  } else {
    result = "Something went wrong!";
  } // end of else
  resultDisplay.innerHTML = result;
}
// display running score
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");

function score() {
  if ((result = "You win!")) {
    userScore++;
    console.log(userScore);
  }

  if ((result = "You lose!")) {
    computerScore++;
    console.log(computerScore);
  }
}

function displayScore() {
  userScoreDisplay.innerHTML = userScore;
  computerScoreDisplay.innerHTML = computerScore;
  score();
}

function resetScore() {
  userScore = 0;
  computerScore = 0;
  displayScore();
}
