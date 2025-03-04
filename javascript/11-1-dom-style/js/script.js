const h1Tag = document.querySelector(".name")
const pTag = document.querySelector(".p")
const btn = document.querySelector(".btn")
const btn2 = document.querySelector(".btn2")

btn.addEventListener("click", style)
btn2.addEventListener("click", style2)
function style() {
    h1Tag.style.color = "red"
    h1Tag.style.animation = "mynewmove 4s infinite"
    h1Tag.style.animationPlayState = "paused"
}
function style2() {
    h1Tag.style.animationPlayState = "running "
    if (pTag.style.backgroundColor === "grey") {
        pTag.style.backgroundColor = "white"
        pTag.style.fontSize = "16px"
        pTag.style.border = "none"
        pTag.style.boxShadow = "10px 20px 30px blue"

    } else {
        pTag.style.backgroundColor = "grey"
        pTag.style.fontSize = "24px"
        pTag.style.borderBottom = "solid 4px rgb(5, 5, 5)";
        pTag.style.borderTop = "solid 4px rgb(5, 5, 5)";
        pTag.style.borderRadius= "8px";
        pTag.style.padding="8px"
        pTag.style.boxShadow = "none"
        pTag.style.columnCount = 3;
        pTag.style.textAlign = "center";
    }
}