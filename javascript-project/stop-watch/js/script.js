const timeDisplay = document.querySelector("#time"); // Time display
const startButton = document.querySelector("#start"); // Start button
const stopButton = document.querySelector("#stop");   // Stop button
const resetButton = document.querySelector("#reset"); // Reset button

let timer = null; // Timer interval
let elapsedTime = 0; // Elapsed time in milliseconds

const updateDisplay = () => {
  const hours = Math.floor(elapsedTime / 3600000).toString().padStart(2, '0');
  const minutes = Math.floor((elapsedTime % 3600000) / 60000).toString().padStart(2, '0');
  const seconds = Math.floor((elapsedTime % 60000) / 1000).toString().padStart(2, '0');
  timeDisplay.innerText = `${hours}:${minutes}:${seconds}`;
};

const startTimer = () => {
  if (!timer) {
    const startTime = Date.now() - elapsedTime;
    timer = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 1000);
  }
};

const stopTimer = () => {
  clearInterval(timer);
  timer = null;
};

const resetTimer = () => {
  stopTimer();
  elapsedTime = 0;
  updateDisplay();
};

// Event listeners for buttons
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

// Initial display setup
updateDisplay();
