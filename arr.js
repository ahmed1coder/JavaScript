const arr = [1, 2, 3, true]
const arr2 = new Array(5) // [ <5 empty items> ]
const arr3 = Array.from("Hello") // [ 'H', 'e', 'l', 'l', 'o' ]

arr3[0] = "Y"
console.log(arr3.at(-1))

arr.push(4)
const pop = arr.pop()
console.log(arr)
console.log(pop)
console.log(arr.shift(), arr)
arr.unshift("New")
console.log(arr.indexOf(true))

const arr4 = arr.concat(arr3)
console.log(arr4)

console.log(arr.join("|")) // this is string'

const slice = arr3.slice(1, 3)
console.log(slice)

console.log(arr3.splice(1, 1), arr3) // [ 'e' ] [ 'Y', 'l', 'l', 'o' ]

const [x, x2, ...y] = [1, 2, 3, 4]
console.log(x, x2, y)


const xarr = [1, 2, 3, 4]
const yarr = [...xarr] // if you want xarr to not be the same refrence then you could use the spread operator

yarr.push("hello")

console.log(xarr, yarr) // [ 1, 2, 3, 4, 'hello' ] [ 1, 2, 3, 4, 'hello' ]