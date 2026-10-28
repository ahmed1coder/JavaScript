const mySet = new Set([5, 9])

mySet.add(1)
mySet.delete(1)
console.log(mySet, mySet.has(5), mySet.size)

for (const value of mySet) {
    console.log(value)
}

mySet.clear()

console.log(mySet)

// const arr = Array.from(mySet)

const arr = [...mySet]

