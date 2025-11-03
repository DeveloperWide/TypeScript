// 1. Basic Types
// Ts Gives us the ability to define types for our variables

const myName: string = "Mahesh";
const age: number = 17;
const skills: string[] = ["JavaScript", "TypeScript", "React"];
const marks: number[] = [89, 90, 95];
const value: any = `This is a dynamic value`;

// 2. Union Types
// A variable that can hold more than one type

let id: string | number; // Union type declaration : string or number
id = "admin";

// Error: Type 'boolean' is not assignable to type 'string | number'.
/* id = true; */ 

// Valid assignment
id = 456789; 


// Output the variables to verify their values

console.log("Name:", myName);
console.log("Age:", age);
console.log("Skills:", skills);
console.log("Marks:", marks);
console.log("Value:", value);
console.log("ID:", id);