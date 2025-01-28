/* ================================  operators  ============================================================*/


/* == Addition Operator == */

let maths = 5;
let sci = 4;

console.log(maths + sci)

/*	===Subtraction===*/

console.log(maths - sci)

/* 	=== Multiplication ===*/

console.log(maths * sci)

/* === Exponentiation === */

console.log(maths ** sci)

/* === 	Division ===*/

console.log(maths / sci)

/* === 	Modulus (Remainder) === */

console.log(maths % sci)

/* === 	Increment === */

console.log(maths++) // post increment

/* === 	Decrement === */

console.log(--sci) // pre increment


/* ============ JavaScript Comparison Operators  =====================*/

let a = 5;
let b = "6";

// equal to ====

console.log( a == b)

// equal value and equal type

console.log( a === b)

// 	not equal

console.log( a != b)

// not equal value or not equal type

console.log( a !== b)

// greater than

console.log( a > b)

// 	less than

console.log( a < b)

// greater than or equal to

console.log( a >= b)

// less than or equal to

console.log ( a <= b)


// ================JavaScript Assignment Operators

let gehlot = 2;
let pratham = 4;

console.log(gehlot+=pratham)
console.log(gehlot-=pratham)
console.log(gehlot*=pratham);
console.log(gehlot/=pratham);
console.log(gehlot%=pratham);
console.log(gehlot**=pratham);

// Logical Assignment Operators &&= ( always two condition same then print output)

let Name = "pratham";
let name2 = "ahir";

if (Name == name2 && Name != name2) {
    console.log("postivie answer");
} else {
    console.log("not true");
}

// || ( only one condition is true then print output)
if (Name == name2 || Name != name2) {
    console.log("postivie answer");
} else {
    console.log("not true");
}

// 



