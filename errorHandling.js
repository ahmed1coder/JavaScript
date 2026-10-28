// try {
//     riskyFunction();
// } catch (error) {
//     console.error("An error occurred:", error.message)
// } finally {
//     console.log("Cleanup code can go here") // Always runs
// }

// throw new Error("This is not good!")


function experiment() {
    try {
        throw new Error("First error");
    } finally {
        console.log("Cleanup!");
    }
}

console.log(experiment());