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
    
    let depositAmount = prompt("Enter a deposit amount: ");

    if (!isNaN(deposit)) depositAmount = parseFloat(depositAmount);

    if (isNaN(depositAmount) || depositAmount <= 0) {
      console.log(`"${depositAmount}" is invalid deposit amout, try again!`);
      continue;
    } 
    else {
      return depositAmount;
    }
  }
};

console.log(deposit());
