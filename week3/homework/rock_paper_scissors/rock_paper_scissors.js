var prompt = require('prompt');

// initializes game; prompts user for rock, paper, or scissors input
function init() {
    prompt.get('choice', function (err, result) {
        var choice = result.choice;

        // error handling - will run prompt again if user does not enter rock, paper, or scissors
        if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') return init();

        // triggers game
        startGame(choice)
    });
}

// turns on prompt; runs init
prompt.start();
init();

function startGame(userChoice) {
    var cpuChoice = generateCPUChoice();
    var winner = compare(userChoice, cpuChoice);
    console.log('You picked ' + userChoice + '. Computer picked ' + cpuChoice + '. ' + winner + ' is the winner!');
}

// YOUR CODE BELOW!

// 1. The function generateCPUChoice should randomly generate and return one of the following values: 'rock', 'paper', or 'scissors'
// Start by creating an array containing: ['rock', 'paper', 'scissors']
// Then, randomly generate a whole number between 0 and 2
// Use this randomly generated number to pull a value from the array (eg myArray[ranomNum])
// Ensure you return this value!
function generateCPUChoice() {
    var choices = ['rock', 'paper', 'scissors'],
        cIndex = Math.floor(Math.random() * 3);
    return choices[cIndex];
}

// 2. The function compare takes two strings (userChoice and cpuChoice) that represent the user's and cpu's respective choices: 'rock', 'paper', or 'scissors'
// This function should compare the two choices, and return a winner
// For example, if userChoice === 'rock' and cpuChoice === 'scissors', then 'user' should be returned
// Hint: use if/else/ele if logic to compare the values and return a winner
function compare(userChoice, cpuChoice) {
    var userChoice = userChoice.toLowerCase(),
        uW = 'User',
        cW = 'Computer';
    if (userChoice === cpuChoice) {
        return 'No one';
    } else if (userChoice === 'rock') {
        if (cpuChoice === 'scissors') {
            return uW
        } else {
            return cW
        }
    } else if (userChoice === 'paper') {
        if (cpuChoice === 'rock') {
            return uW
        } else {
            return cW
        }
    } else if (userChoice === 'scissors') {
        if (cpuChoice === 'paper') {
            return uW
        } else {
            return cW
        }
    }
}
