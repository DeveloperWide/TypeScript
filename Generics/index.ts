// Generics allow us to create reusable components that can work with any data type

// A generic function that returns the same type as the input
function identity<T>(value: T): T{
    return value;
}

function getArray<A>(items: A[]): A[]{
    return items;
}


console.log(identity<string>("Hello, Generics!"));
console.log(identity<number>(43));
console.log(getArray<number>([1,2,3,4]));