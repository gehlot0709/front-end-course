// Primitive Data Types

// String
let name = "John";
console.log(typeof name); // Output: string

// Number
let age = 25;
let pi = 3.14;
console.log(typeof age); // Output: number
console.log(typeof pi);  // Output: number

// BigInt
let bigNumber = 123456789012345678901234567890n;
console.log(typeof bigNumber); // Output: bigint

// Boolean
let isStudent = true;
console.log(typeof isStudent); // Output: boolean

// Undefined
let x;
console.log(typeof x); // Output: undefined

// Null
let y = null;
console.log(typeof y); // Output: object (this is a historical quirk in JavaScript)

// Symbol
let uniqueId = Symbol('id');
console.log(typeof uniqueId); // Output: symbol

/* ====Non-Primitive Data Types===*/

// Object
let person = {
    name: "John",
    age: 30
};
console.log(typeof person); // Output: object

// Array
let fruits = ["apple", "banana", "cherry"];
console.log(typeof fruits); // Output: object

// Function
function greet() {
    console.log("Hello!");
}
console.log(typeof greet); // Output: function


// Date
let today = new Date();
console.log(typeof today); // Output: object








