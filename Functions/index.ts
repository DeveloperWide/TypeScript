// Functions.

// function to add two numbers and return the result. if you don't want to return anything, the function's return type must be void.

function addition(a: number, b: number): number {
    return a + b;
}

// Example of a function with a return type of number | void
function add(a: number, b: number): number | void {
    console.log("Adding numbers...");
    console.log(`The sum is: ${a + b}`);
}

// Example usage:
const sum = addition(5, 10);
console.log(`Returned sum: ${sum}`); // Output: Returned sum: 15

add(5, 10); // Output: Adding numbers... The sum is: 15

// Optional & Default Parameters.

// function to greet a user. if the name is not provided, it defaults to "Guest".

function greet(name: string="Guest"): void{
    console.log(`Hello, ${name}!`);
}

greet("Mahesh")