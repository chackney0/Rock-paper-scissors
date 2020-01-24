
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
        
        if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || 'bomb') {
            return userInput;
        } else {
            console.log('not valid');
        }

    };
    // console.log(getUserChoice('Paper'));
    // console.log(getUserChoice('knife'));
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            return 'invalid';
    }
};
// console.log(getComputerChoice

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Game was a tie';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'You win';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won';
        } else {
            return 'You win';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won';
        } else {
            return 'You win';
        }
    }
    if(userChoice==='bomb'){
        return 'You are a jedi Master'
    }
};
// console.log(determineWinner('rock', 'scissors'))

const playGame = ()=> {
	const userChoice = getUserChoice('bomb');
	const computerChoice = getComputerChoice();
	console.log('You did: ' + userChoice);
	console.log('The computer did: ' + computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
};
playGame();
