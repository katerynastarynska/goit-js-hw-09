const startBtn = document.querySelector('button[data-start]');
console.log(startBtn);
const stopBtn = document.querySelector('button[data-stop]');
console.log(stopBtn);
const bodyEl = document.querySelector("body");
console.log(bodyEl);


// startBtn.addEventListener("click", getRandomHexColor);
startBtn.addEventListener("click", () => {
    timerId = setInterval(getRandomHexColor, 1000);

  });


stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
});  

function getRandomHexColor() {
    bodyEl.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    // return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    console.log(bodyEl);
  }
 