// Classes in TypeScript
// A class is a blueprint for creating objects with specific properties and methods

// Defining a Person class with properties and a method
class Person {
    constructor(public name: string, public age: number, protected address?: string) {
        this.name = name;
        this.age = age; 
        this.address = address || "Not Provided"; 
    }

    greet(): void{
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Defining a Teacher class
class Teacher {
    // Using shorthand to declare and initialize properties
  constructor(public name: string, private age: number, private subject?: string) {
    // Initialization logic can go here if needed
    this.name = name;
    this.age = age; 
    this.subject = subject;
  }

  // Method to return a greeting message
  greet() {
    return `Hi, I'm ${this.name} and I am ${this.age} years old. I teach ${this.subject}.`;
  }
}

const person1 = new Person("Alice", 30);
const teacher1 = new Teacher("Mr. Smith", 45, "Mathematics");

console.log(person1);
console.log(teacher1);