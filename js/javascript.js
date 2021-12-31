/** Input from user */
	/** ask for input */
let userPrompt = window.prompt("Make your choice: Rock, Paper or Scissors?");
/** convert string to lower case*/
let userChoice = userPrompt.toLowerCase()
  	/** Check for proper input 
if ((userChoice != 'rock') || (userChoice != 'paper') || (userChoice != 'scissors')) {
  	userChoice = window.prompt("You chose a wrong option. Try again! The options are Rock, Paper or Scissors.")
  }*/
	/** Confirm user choice */
if (userChoice === 'rock') {
    alert('You chose Rock!');
  } else if (userChoice === 'paper') {
    alert('You chose Paper!');
  } else if (userChoice === 'scissors') {
    alert('You chose Scissors!');
  } else {
  	alert('That is not a viable option. Try again!');
  }


console.log(userChoice)
/** Conputer output */
	/** random choice */
		/** Get random value */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
} 
		/** turn random value into choice */

let computerChoice = (getRandomInt(1,4))
			/** 1 = Rock 2 = Paper 3 = Scissors */
if (computerChoice === 1) {
	alert('Computer chose Rock!');
	} else if (computerChoice === 2) {
	alert('Computer chose Paper!');
	} else if (computerChoice === 3) {
	alert('Computer chose Scissors!');
    }
console.log(computerChoice)

	
/** Result */ 
	/** Compare outputs */
if (userChoice === 'rock') && (computerChoice === 3) {
	alert('You chose Rock and computer chose Scissors. You win! ');
} else if userChoice === 'rock' && computerChoice === 2 {
	alert('You chose Rock and computer chose Paper. You loose! :(');
} else if userChoice === 'rock' && computerChoice === 1 {
	alert('You chose Rock and computer chose Rock. It\'s a tie!');
} else if userChoice === 'paper' && computerChoice === 3 {
	alert('You chose Paper and computer chose Scissors. You loose! :(');
} else if userChoice === 'paper' && computerChoice === 2 {
	alert('You chose Paper and computer chose Paper. It\'s a tie!');
} else if userChoice === 'paper' && computerChoice === 1 {
	alert('You chose Paper and computer chose Rock. You win!');
} else if userChoice === 'scissor' && computerChoice === 3 {
	alert('You chose Scissors and computer chose Scissors. It\'s a tie!');
} else if userChoice === 'scissor' && computerChoice === 2 {
	alert('You chose Scissors and computer chose Paper. You win!');
} else if userChoice === 'scissor' && computerChoice === 1 {
	alert('You chose Scissors and computer chose Rock. You loose! -.-');

	/** Define winner */
	/** Print winner */