const update = document.querySelector("#update")
const deletee = document.getElementById("delete")
update.style.backgroundColor ="red"
update.style.textDecoration ="none"
update.style.padding = "8px 38px"
deletee.style.padding = "8px 38px"
deletee.style.backgroundColor ="orange"
deletee.style.textDecoration ="none"

console.log(update.attributes);
console.log(update.getAttribute("href"));

console.log(deletee.attributes);
console.log(deletee.getAttribute("onclick"));

deletee.setAttribute("onclick","delete()")

function updateheader() {
    document.querySelector("h3").style.color = "red"
}
