const result = document.querySelector(".result")

document.querySelector(".input a:first-child").onclick = function (e) {
    e.preventDefault()
    result.innerText += this.innerText
}
document.querySelector(".input a:nth-child(2)").onclick = function (params) {
    result.innerText += this.innerText
}
document.querySelector(".input a:nth-child(3)").onclick = function (params) {
    result.innerText += this.innerText
}
document.querySelector(".input a:last-child").onclick = function (params) {
    result.innerText = eval(result.innerText)
}