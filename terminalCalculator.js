const prompt = require("prompt-sync")()

console.log("=".repeat(30),
    "\n", "Welcome to Terminal Calculator",
    "\n", "Perform basic math operations (+, -, *, /)",
    "\n", "=".repeat(30)
)


const add = (firstNumber, secoundNumber) => {
    return firstNumber + secoundNumber
}
const subtract = (firstNumber, secoundNumber) => {
    return firstNumber - secoundNumber
}
const multiply = (firstNumber, secoundNumber) => {
    return firstNumber * secoundNumber
}
const divide = (firstNumber, secoundNumber) => {
    if (secoundNumber === 0) {
        throw new Error("Cannot divid by zero")
    }
    return firstNumber / secoundNumber
}


const toContinue = () => {
    while (true) {
        const input = prompt("Do another calculation? (y/n): ")
            .trim()
            .toLowerCase()

        if (input === "y") {
            return true
        } else if (input === "n") {
            return false
        } else {
            console.log("Invalid input, try again!")
        }
    }
}

const resultHistory = []

outer: while (true) {
    const enterFirst = prompt("Enter the first number: ")
    const firstNumber = Number(enterFirst)

    if (!Number.isFinite(firstNumber) || enterFirst.trim() === "") {
        console.log("Invalid number, try agian!")
        continue
    }

    const operator = prompt("Enter the operator: ").trim()

    if (!["+", "-", "*", "/"].includes(operator)) {
        console.log("Invalid operator, try agian!")
        continue
    }

    const enterSecound = prompt("Enter the secound number: ")
    const secoundNumber = Number(enterSecound)

    if (!Number.isFinite(secoundNumber) || enterSecound.trim() === "") {
        console.log("Invalid number, try agian!")
        continue
    }

    let result = null

    switch (operator) {
        case "+": 
            result = add(firstNumber, secoundNumber)
            break
        case "-": 
            result = subtract(firstNumber, secoundNumber)
            break
        case "*": 
            result = multiply(firstNumber, secoundNumber)
            break
        case "/": 
            try {
                result = divide(firstNumber, secoundNumber)
                break
            } catch (error) {
                console.log(`${error}`)
                if (toContinue()) {
                    continue outer
                } else {
                    break outer
                }
            }
    }
    console.log(`Result: ${result}`)

    resultHistory.push(`${firstNumber} ${operator} ${secoundNumber} = ${result}`)


    if (toContinue()) {
        continue
    } else {
        break
    }

}


console.log("Your history is: ")
for (const result of resultHistory) {
    console.log(result)
}

