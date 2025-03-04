const clockTag = document.querySelector(".clock"); // Create one container for the entire clock

// Function to update the clock
const updateClock = () => {
    const currentDateTime = new Date();
    const hours = currentDateTime.getHours().toString().padStart(2, '0');
    const minutes = currentDateTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentDateTime.getSeconds().toString().padStart(2, '0');

    // Update the clock text
    clockTag.innerText = `${hours}:${minutes}:${seconds}`;

    // Apply styling to the clock
    clockTag.style.color = "black";
    clockTag.style.fontWeight = "bolder";
    clockTag.style.fontSize = "166px";
    clockTag.style.border = "8px solid white";
    clockTag.style.boxShadow = "rgb(219, 4, 4) 8px 16px 4px";
    clockTag.style.borderRadius = "50px";
    clockTag.style.padding = "48px 108px";
    clockTag.style.position = "absolute";
    clockTag.style.top = "50%";
    clockTag.style.left = "50%";
    clockTag.style.transform = "translate(-50%, -50%)";
    clockTag.style.textAlign = "center";

    // Apply styling to the body
    document.body.style.backgroundColor = "grey";
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";
};

// Call the update function once and set it to run every second
updateClock();
setInterval