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


// _____________________________________

// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import Notiflix from 'notiflix';
// console.log(Notiflix);

// const inputEl = document.querySelector('input[type="text"]');
// const startBtn = document.querySelector('button[data-start]');
// let deltaTime = null;
// let timerId = null;

// // const currentDate = new Date().getTime();
// const currentDate = Date.now();
// console.log(currentDate);
// startBtn.addEventListener('click', onStartBtnClick);    

// function onStartBtnClick() { 
//     console.log(convertMs(deltaTime));
//     // интерфейс!!!!!!
// };

// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: currentDate,
//         minuteIncrement: 1,
//     onClose(selectedDates) {

//         // timerId = setInterval(() => {  
//         const targetDate = selectedDates[0].getTime();
//         // console.log(targetDate);
//         deltaTime = targetDate - currentDate;
//         // console.log(deltaTime);
//         console.log(convertMs(deltaTime));
//         const { days, hours, minutes, seconds } = convertMs(deltaTime);
//         console.log(`${days}:${hours}:${minutes}:${seconds}`);

              
//     if (deltaTime < 0) {
//             startBtn.disabled = true;
//             alert("Please choose a date in the future");
//     } else if (deltaTime > 0) {
//         startBtn.disabled = false;
//         timerId = setInterval(() => (console.log(deltaTime), 1000));
    
// }}};
// console.log(options.defaultDate);
    

// flatpickr(inputEl, options);
// console.log(flatpickr);

// function addLeadingZero(value) {
//     return String(value).padStart(2, '0');
// }

// function convertMs(ms) {
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;
  
//     const days = addLeadingZero(Math.floor(ms / day));
//     const hours = addLeadingZero(Math.floor((ms % day) / hour));
//     const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//     const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
//     return { days, hours, minutes, seconds };
// }