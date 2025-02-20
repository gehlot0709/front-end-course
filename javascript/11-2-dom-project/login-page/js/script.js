const username = document.querySelector(".form input#username")
const password = document.querySelector("form input#password")
const usernameoutput = document.querySelector(".form .usernameoutput p span")
const passwordoutput = document.querySelector(".form .passwordoutput p span")
const formpop = document.querySelector(".form .pop");

function forsubmit() {
    
    const usernamevalue = username.value;
    const passwordvalue = password.value;
    
    if (usernamevalue && passwordvalue) {
        formpop.classList.remove("show")
        console.log("Username:", usernamevalue)
        console.log("Password:", passwordvalue);
        usernameoutput.innerText = usernamevalue;
        passwordoutput.innerText = passwordvalue;

        // Clear the input fields after submission
        username.value = '';
        password.value = '';

    } else {

        // console.log("please fill all details");
        formpop.classList.add("show")
    }
}