const counter = document.querySelector(".counter .counter-count h1")

function increment(){
    let count = Number(counter.innerText);
    counter.innerText = ++count;
}
function decrement(params) {
    let count = Number(counter.innerText);
    if (count!==0) {
        counter.innerText = --count;
    } 
}d