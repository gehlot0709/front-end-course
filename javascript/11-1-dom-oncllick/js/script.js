let reverse = false;
function changename() {
    const h1 = document.getElementsByClassName("name")[0];
    if(reverse){
        h1.innerText = "this  is change name";  
    }else{
        h1.innerText ="change name"
    }
   reverse = !reverse;
}
