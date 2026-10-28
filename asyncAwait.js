// async:
// Makes a function always return a Promise.

// await:
// Suspends the current async function until
// the awaited Promise settles.

// Other JavaScript code can continue executing
// while the async function is suspended.

// When the Promise settles, the async function
// is scheduled to resume through the microtask queue.

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           
            const dogWalked = true

            if(dogWalked){
                resolve("You walk the dog 🐕")
            }
            else{
                reject("You DIDNT walk the dog 🐶")
            }
            
        }, 1500);
    })
}   

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = false

            if (kitchenCleaned) {
                resolve("You clean the kitchen 🧹")
            }
            else {
                reject("You DIDNT clean the kitchen 🧹")
            }
        }, 2500);
    })
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true

            if (trashTakenOut) {
                resolve("You take out the trash ♻")
            }
            else {
                reject(new Error("You DIDNT take out the trash ♻"))
            }
        }, 500);
    })
}


async function doChores() {

    try {
        const walkDogResult = await walkDog()
        console.log(walkDogResult)

        const cleanKitchenResult = await cleanKitchen()
        console.log(cleanKitchenResult)

        const takeTrashResult = await takeOutTrash()
        console.log(takeTrashResult)

        console.log("You finished all the chores")
    }
    catch(error) {
        console.log(error)
    }
}

// doChores()

console.log("test")

Promise.all([
    walkDog(),
    cleanKitchen(),
    takeOutTrash()
])
.then(results => console.log(results))
.catch(error => console.error(error));



