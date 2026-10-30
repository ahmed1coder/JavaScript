// Deposit some money
// Determine number of lines to bet on
// collect a bet amount
// spin the slot machine
// check if the user won
// give the user their winnings
// play agian

const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const input = prompt("Enter a deposit amount: ");
    const depositAmount = Number(input);

    if (
        !Number.isFinite(depositAmount) ||
        depositAmount <= 0
    ) {
        console.log(`"${input}" is invalid, try again!`);
    } else {
        return depositAmount;
    }
  }
};


const getNumberOfLines = () => {
  while (true) {
    const input = prompt("Enter the number of lines to bet on (1-3): ");

    const numberOfLines = Number(input);

    if (
        !Number.isInteger(numberOfLines) ||
        numberOfLines < 1 ||
        numberOfLines > 3
    ) {
        console.log(`"${input}" is invalid, try again!`);
    } else {
        return numberOfLines;
    }
  }
};

console.log(deposit());
console.log(getNumberOfLines())
