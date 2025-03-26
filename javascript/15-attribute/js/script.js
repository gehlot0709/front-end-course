const update = document.querySelector("#update")
const deletee = document.getElementById("delete")


console.log(update.attributes);
console.log(update.getAttribute("href"));

console.log(deletee.attributes);
console.log(deletee.getAttribute("onclick"));

deletee.setAttribute("onclick","delete()")

function updateheader() {
    document.querySelector("h3").style.color = "red"
}
