// Defining a User type
type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

// Utilities in TypeScript
// A utility type is a built-in type that helps to transform or manipulate types in TypeScript

// Using utility types to create new types based on the User type
type PartialUser = Partial<User>;

// Making all properties of User type readonly
type ReadonlyUser = Readonly<User>;

//  Creating a type with only email and id properties from User type
type UserEmail = Pick<User, "email" | "id">;

// Creating a type by omitting the name property from User type
type OmitUserName = Omit<User, "name">;


// Example usage of utility types

// User object without the name property
const userWithoutName: OmitUserName = {
    id: 1,
    email: "john.doe@example.com",
    isActive: true
}


// User object with only email and id properties
const userEmail: UserEmail = {
    id: 1,
    email: "john.doe@example.com"
}


// Partial user object
const user2: PartialUser ={
    id: 2,
    email: "jane.doe@example.com"
}

// Readonly user object
const user: ReadonlyUser = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    isActive: true,
}
