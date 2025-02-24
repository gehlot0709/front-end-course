// Select the first <h2> element within an element with class "event"
const h2Tag = document.querySelector(".event h2");

// Select the first button element within an element with class "event"
const btn = document.querySelector(".event .btn");

// Function to change the color and font size of the h2Tag
function changecolor() {
    // Generate a random integer between 0 and 255 for RGB values
    let random1 = Math.random() * 255;
    random1 = Math.floor(random1);

    let random2 = Math.random() * 255;
    random2 = Math.floor(random2);

    let random3 = Math.random() * 255;
    random3 = Math.floor(random3);

    // Generate a random value for the alpha (transparency) channel
    let random4 = Math.random();

    // Set the color of the h2Tag to a random RGBA color
    h2Tag.style.color = `RGB(${random1},${random2},${random3},${random4})`;

    // Set the font size of the h2Tag to a random value (in pixels)
    h2Tag.style.fontSize = `${random1}px`;
}


btn.onclick = changecolor;

// Array of names
const names = [
    "gehlot",
    "pratham",
    "dharmichand"
];

// Function to change the name displayed in the h2Tag
function changeName() {
    // Generate a random integer between 0 and the length of the names array
    let randomname = Math.random() * 3;
    randomname = Math.floor(randomname);

    // Set the text content of the h2Tag to a random name from the names array
    h2Tag.innerText = names[randomname];
}

// Add an event listener to the button to call the changeName function when clicked
btn.addEventListener("click", changeName);
