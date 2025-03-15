document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const terms = document.getElementById("terms");

    form.addEventListener("submit", function (event) {
        let valid = true;

        // Check if username is entered
        if (username.value.trim() === "") {
            alert("Username is required.");
            username.focus();
            valid = false;
        }

        // Check if password is entered and meets minlength
        else if (password.value.trim().length < 5) {
            alert("Password must be at least 5 characters long.");
            password.focus();
            valid = false;
        }

        // Check if terms are accepted
        else if (!terms.checked) {
            alert("You must agree to the Terms & Conditions.");
            terms.focus();
            valid = false;
        }

        // Prevent form submission if validation fails
        if (!valid) {
            event.preventDefault();
            return;
        }

        // If validation passes, prevent default form submission
        event.preventDefault();

        // Collect form details
        const formData = new FormData(form);
        const formDetails = {};

        // Loop through the FormData entries and save them in an object
        formData.forEach((value, key) => {
            formDetails[key] = value;
        });

        // Log the form details to the console
        console.log("Form Submitted Successfully!");
        console.log("Form Details:", formDetails);

        // Clear the form fields
        form.reset(); // Resets the form to its initial state
    });
});
