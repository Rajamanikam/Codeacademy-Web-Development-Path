// Function To get User choice

const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
  return userInput;
} else {
  console.log('Error!');
}
};

// Function To Get Computer Choice

const getComputerChoice = () => {
  switch(Math.floor(Math.random() * 3)) {
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
  }
}

// Function to determine the Winner

function determineWinner(userChoice, computerChoice) {

  //Checking for Tie
  if (userChoice === computerChoice) {
  return 'The game is a tie!';
}
else {
  if(userChoice === 'bomb'){
    return "You Won :)";
  }
else{

if (userChoice === 'rock') {
  if(computerChoice === 'paper'){
    return "Computer Won";
  }
  else {
    return "User Won";
  }
}
if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
}
}
}


// Checking Game Functionality

const playGame = () => {
     const userChoice = getUserChoice('scissors'); // Change user choice for different outcomes
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw:' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
}

playGame();