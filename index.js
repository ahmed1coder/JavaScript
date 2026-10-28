const x = [1, 2, 3, 4]
const y = [1, 2, 3, ...x]

console.log(y)

do {
    console.log("run")
    break
} while (true)

while (true) {
    console.log("Hello")
    break
}

while (false) console.loog("this wont run")

const arr = ["hello", "hey", 1, true]

// Initialize → Check → Execute body → Update → Check → Execute body → Update ...

// for (let i = 0; i < 10; i++) {
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}


for (let i = 0, j = 10; i < j; i++, j--) {
    console.log(i, j);
}

// for (;;) {
//     console.log("Forever!");
// }

arr.push("Thats me!")

for (const [i, index] of arr.entries()) {
    console.log(i, index);
}