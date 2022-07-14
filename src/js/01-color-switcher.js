const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector("body");
let timerId = null;

startBtn.addEventListener("click", () => {
    timerId = setInterval(getRandomHexColor, 1000);
    if (startBtn.disabled = true) {
      stopBtn.disabled = false;
    }
});

stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startBtn.disabled = false;
    if (stopBtn.disabled = true) {
      startBtn.disabled = false;
    }
});  

function getRandomHexColor() {
    bodyEl.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}; 