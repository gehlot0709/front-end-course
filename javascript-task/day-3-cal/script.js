// let value1 = Number(prompt("enter your first value"))
// let operator = prompt("enter (*,+,-,/)")
// let value2 = Number(prompt("enter your value2"))

// if (operator === "+") {
//     console.log(value1+value2);
// } else if ( operator === "*"){
//     console.log(value1*value2);
// }if ( operator === "/"){
//     console.log(value1/value2);
// }if ( operator === "-"){
//     console.log(value1-value2);
// }

// switch (operator) {
//     case "+":
//         console.log(value1+value2);
//         break;
//         case "-":
//             console.log(value1-value2);
//             break;
//             case "*":
//                 console.log(value1*value2);
//                 break;
//                 case "/":
//                     console.log(value1/value2);
//                     break;

//     default:
//         break;
// }

let num = Number(prompt("enter your number"))
let output = false;

if (num%2==0) {
    output=true;
    console.log("2");
}
if (num%3==0) {
    output=true;
    console.log("3");
}
if (num%4==0) {
    output=true;
    console.log("4");
}
if (num%5==0) {
    output=true;
    console.log("5");
}
if (num%6==0) {
    output=true;
    console.log("6");
}
if (num%7==0) {
    output=true;
    console.log("7");
}
if (num%8==0) {
    output=true;
    console.log("8");
}
if (num%9==0) {
    output=true;
    console.log("9");
}
if (!output) {
    console.log("not valid");
}



