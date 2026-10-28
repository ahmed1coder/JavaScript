const numbers = [1, 2, 3, 4]
const doubled = numbers.map((num) => num * 2)

console.log(doubled) // [ 2, 4, 6, 8 ]

const users = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30}
]

const names = users.map((user) => user.name)
console.log(names) // [ 'Alice', 'Bob' ]

const sum = numbers.reduce((acc, num) => acc + num, 0)

console.log(sum) // 10

const evenNumbers = numbers.filter((num) => num % 2 === 0)

console.log(evenNumbers) // [2, 4]



const orders = [
    { customer: "Ahmed", total: 150, paid: true },
    { customer: "Tim", total: 300, paid: false },
    { customer: "Alice", total: 200, paid: true },
    { customer: "Bob", total: 100, paid: true }
];

const value = orders.filter(order => order.paid).reduce((total, value) => total + value.total, 0)

console.log(value) // 450