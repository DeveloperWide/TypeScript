// Enums allow us to define a set of named constants
enum Role{
    ADMIN = "ADMIN",
    USER = "USER",
    GUEST = "GUEST"
}


// Using the enum
let role: Role = Role.ADMIN;

// Changing the role
role = Role.USER;
console.log(`Assigned role is: ${role}`);