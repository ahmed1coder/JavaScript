const myMap = new Map()
const numberMap = new Map([[1, "one"], [2, "Two"]])

myMap.set(4, "Four")


// myMap.delete(4)

console.log(myMap.get(4))
console.log(myMap, myMap.has(4), myMap.size)

for (const [key, value] of myMap) {
    console.log(key, value)
}

// myMap.clear()


// const arr = Array.from(myMap)

const arr = [...myMap]
console.log(arr)

