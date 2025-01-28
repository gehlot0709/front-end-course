let value1 = Number(prompt("enter your first value"))
let operator = prompt("enter (*,+,-,/)")
let value2 = Number(prompt("enter your value2"))

// if (operator === "+") {
//     console.log(value1+value2);
// } else if ( operator === "*"){
//     console.log(value1*value2);
// }if ( operator === "/"){
//     console.log(value1/value2);
// }if ( operator === "-"){
//     console.log(value1-value2);
// }

switch (operator) {
    case "+":
        console.log(value1+value2);
        break;
        case "-":
            console.log(value1-value2);
            break;
            case "*":
                console.log(value1*value2);
                break;
                case "/":
                    console.log(value1/value2);
                    break;

    default:
        break;
}
