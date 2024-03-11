// GUESS THAT NUMBER
// Message to be used throughout the project/file
const enterNumText = `Please enter a number greater than zero`;
// For starting, restarting, and ending the game
let restartGame = true;
// For storing the range of the number to be guessed
let rangeNum;
// For storing the number that the user will attempt to guess
let randomNum;
// For storing the number of attempts the user has left
let attempts;
// For storing the user's guess
let guess;
// For storing the user's response to play again or not play again
let playAgain;

// Starting alert message
alert(`Welcome to GUESS THAT NUMBER! Please click OK to start the game`);

// Game restarts as long as the restartGame has a value of true
while (restartGame) {
  // Asks the user to enter a number to set the upper bound for the random number that will be created. Also using parseInt to attempt to convert the user's response int a number value.
  rangeNum = prompt(`Please enter a maximum number for the range:`);
  rangeNum = parseInt(rangeNum);

  // Verifies the user's entry for a range number is a number greater than ONE (NOTE: All numbers, positive and negative, have a default boolean value of true, except for zero which has a boolean value of false. Also, NaN has a boolean value of false as well.)
  while (rangeNum <= 1 || !rangeNum) {
    rangeNum = prompt(`Please enter a number great than 1`);
    rangeNum = parseInt(rangeNum);
  }

  // alert(rangeNum);

  // Creates the random number using the range number entered by the user
  randomNum = Math.floor(Math.random() * rangeNum) + 1;

  alert(randomNum);

  // Prompts user to enter a number of attempts allowed (AKA Number of guesses)
  attempts = parseInt(prompt(`Please enter a number of attempts allowed:`));

  while (attempts < 1 || !attempts || attempts >= rangeNum) {
    attempts = prompt(`Please enter a number from 1 to ${rangeNum - 1}`);
    attempts = parseInt(attempts);
  }

  break;
}
