// Define an interface for a Product
// An interface is a way to define the shape of an object in TypeScript

interface Product{
    title: string;
    description: string;
    price: number;
    inStock: boolean;
    imageUrl?: string;
}   

// Extending the Product interface to create a specialProduct interface
// which includes an additional property for discount percentage

interface specialProduct extends Product{
    discountPercentage: number;
}

const product1: Product = {
    title: "Wireless Mouse",
    description: "A high-precision wireless mouse",
    price: 29.99,
    inStock: true,
};

const product2: specialProduct = {
    title: "Gaming Keyboard",
    description: "A mechanical keyboard with RGB lighting",
    price: 89.99,
    inStock: true,
    discountPercentage: 15,
};

console.log(product1);