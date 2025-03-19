let obj = {
    username: "gehlot",
    age: 22
};
console.log(obj);

let objStringified = JSON.stringify(obj);
console.log(`JSON stringify: ${objStringified}`);

let objParsed = JSON.parse(objStringified);
console.log(`JSON parse:`, objParsed);

let data = JSON.parse(JSON.stringify(obj));
console.log(data);

let employeeData = {
    employees: [
        { firstName: "John", lastName: "Doe" },
        { firstName: "Anna", lastName: "Smith" },
        { firstName: "Peter", lastName: "Jones" }
    ]
};
console.log(employeeData);
