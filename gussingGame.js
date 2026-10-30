const prompt = require("prompt-sync")();

// Generates a random whole number between 1 and 20
const secretNumber = Math.floor(Math.random() * 20) + 1;

let attempts = 0

while (true) {
    const input = prompt("Guess the number between 1 & 20: ")

    const guess = Number(input)

    if (!Number.isInteger(guess) || guess < 1 || guess > 20) {
        console.log("Invalid value, try Again!")
        continue
    }

    attempts++

    if (guess === secretNumber) {
        console.log(`That's right! Randome number is ${secretNumber}`)
        console.log(`You won in ${attempts} attempts!`)
        break
    } else if (guess > secretNumber) {
        console.log("Wrong! too high...")
    } else if (guess < secretNumber) {
        console.log("Wrong! too low...")
    }

    if (attempts === 5) {
        console.log(`You retchead your limit attmeps!!!, try again later`)
        break
    }
}