const obj = {
    name: "Alice",
    age: 23,
    sayHello: function() {
        return "Hello!"
    },
    career: {

    }
}

console.log(obj.name = "Ahmed")

obj.newone = "I am new"

console.log(obj["age"], obj.newone)

delete obj.newone

console.log(obj.newone) // undefined

console.log(Object.keys(obj)) // Object.values

for (let key in obj) {
    console.log(key)
}

const obj2 = {
    hairColor: "black",
    arr: [1, 2, 3],
    name: "Time",
}

const obj3 = {...obj, ...obj2}

obj3.career.info = "tech"

obj2.arr.push("tech")

console.log(obj2, obj3)


const {hairColor} = obj3

console.log(hairColor)

// Optional chaining (?.)
// Imagine an API returns:
// const user = {
//     name: "Ahmed",
//     address: {
//         city: "Alexandria"
//     }
// };

// console.log(user.address.city); // Alexandria
// console.log(user.job.title); // TypeError!


// Because job doesn't exist, accessing job.title crashes.

// Instead:
// console.log(user.job?.title); // undefined


// You can combine it with nullish coalescing:
// console.log(user.job?.title ?? "Unemployed");
// // "Unemployed"


// You'll use this frequently when handling API responses with optional fields.