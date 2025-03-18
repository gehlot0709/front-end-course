const  obj = {
    Username : "pratham gehlot",
    Mail : "pdgehlot956@gmail.com"
}
const arr = [ 11,22,33,44,55]

localStorage.setItem("obj",JSON.stringify(obj))
localStorage.setItem("arr",JSON.stringify(arr))

let dataobj = JSON.parse(localStorage.getItem("obj"))
let dataarr = JSON.parse(localStorage.getItem("arr"))

console.log(dataobj);
console.log(dataarr);

