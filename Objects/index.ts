// Objects & type alias 

// Define a type alias for Admin object
type Admin = {
    name: string;
    username: string; // username is a string
    role: 'admin' | 'super-admin' | 'manager'; // role can be one of these string literals
    imgUrl?: string; // optional property
}

// You can reuse that type (Admin) anywhere — think of it like a JS object schema.

// Create an object of type Admin
const user: Admin = {
    name: "Mahesh",
    username: "mahesh123",
    role: 'super-admin',
};

// Another object of type Admin
const anotherAdmin: Admin ={
    name: "Anita",
    username: "anita456",
    role: 'manager',
}

console.log(user);
console.log(anotherAdmin);