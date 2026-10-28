function greet(name, age=12) {
    console.log(`Hello, ${name}!. your age is ${age}`)
}

greet("Ahmed", 15)

const hello = function(name) {
    return name
}

console.log(hello("Tim"))


const test = (name) => {
    return () => name
}
const test2 = (name) => name + "!" // return statment

console.log(test("Hello")(), test2("Tim"))


const numbers = function addNums(...numbers) {

    let total = 0

    for (let number of numbers) {
        total += number
    }
    return total
}

console.log(numbers(1, 2, 5))

function createCounter() {
    let count = 0;

    return () => {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3