const person = {
    name: "Alice",
    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

person.greet()

const person2 = {
    name: "Alice",
    greet: () => {
        console.log(`Hello, my name is ${this.name}`)
    }
}

person2.greet()


const user = {
    name: "Ahmed",

    greet() {
        const sayName = () => {
            return this.name;
        };

        return sayName();
    }
};

console.log(user.greet());