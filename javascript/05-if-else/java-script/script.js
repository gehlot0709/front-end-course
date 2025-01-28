
// swap
// init value 

let a = 50;
let b = 40;
let temp;

temp = a;
a = b;
b = temp;


console.log(a);
console.log(b);


let c = 15;
let d = 20;


if (c > d) {
    console.log("this is grater than b ");
} else {
    console.log("this is not grater than b");
}

let day = Number(prompt("Enter numbe 1 to 7"));

if (day === 1) {
    console.log("Sunday");
} else if (day === 2){
    console.log("mon");
} else if (day === 3) {
    console.log("tue");
} else if (day === 4) {
    console.log("");
} else if (day === 5) {
    console.log("Sunday");
} else if (day === 6) {
    console.log("Sunday");
} else if (day === 7) {
    console.log("Sunday");
}else{
    console.log("number is not valid");
}

console.log("===========");

switch (day) {
    case 1:console.log("sun");
        
        break;

        case 2:console.log("sun");
        
        break;
        case 3:console.log("sun");
        
        break;
        case 4:console.log("sun");
        
        break;
        case 5:console.log("sun");
        
        break;
        case 6:console.log("sun");
        
        break;

        default:console.log("number  id not valid");
}


