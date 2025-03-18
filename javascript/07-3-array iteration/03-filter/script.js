const users = [
    { name: "pratham", age: 22 },
    { name: "eipshita", age: 20 },
    { name: "bhagwansir", age: 45 },
    { name: "dharmichand", age: 50 },
    { name: "nandi", age: 10 }
]
const child = users.filter(user => user.age < 18).map(user=>user.name)
const adult = users.filter(user => user.age > 18 && user.age < 40).map(user=>user.name)
const oldage = users.filter(user => user.age > 40).map(user => user.name)

console.log("Children:", child);
console.log("Adults:", adult);
console.log("Old Age Names:", oldage);