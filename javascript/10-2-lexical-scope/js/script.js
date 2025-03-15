// lexical scope

function outerfun() {
 let outervar ="i am from outer"
 function innerfun() {
    console.log(outervar);
 }   
 innerfun()
}
outerfun()