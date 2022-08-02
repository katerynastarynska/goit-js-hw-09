import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputEl = document.querySelector('input[type="text"]');
const startBtn = document.querySelector('button[data-start]');
const timerInterface = document.querySelector('.timer');
const fieldsEl = document.querySelectorAll(".field");
const valuesEl = document.querySelectorAll(".value");
const labelsEl = document.querySelectorAll(".label");

let deltaTime = null;
const currentDate = new Date();

function interfaceSetUp() {
    timerInterface.style.cssText = "color: navy; text-align: center; display: flex";

    fieldsEl.forEach(field => {
        field.style.display = "block";
        field.style.marginRight = "15px";
        field.style.marginLeft = "15px";
    });
    valuesEl.forEach(value => {
        value.style.fontSize = "50px";
        value.style.textAlign = "center";
    });
    labelsEl.forEach(label => {
        label.style.display = "block";
        label.style.fontSize = "20px";
        label.style.textAlign = "center";
    });
}
interfaceSetUp();

const dateSetUp = flatpickr(inputEl, {
    enableTime: true,
    time_24hr: true,
    defaultDate: currentDate,
    minuteIncrement: 1,
    onClose,
});

startBtn.disabled = true;

function onClose(selectedDates) {
    const targetDate = selectedDates[0].getTime();
    
    deltaTime = targetDate - currentDate.getTime();

    if (deltaTime < 0) {
        Notiflix.Notify.failure(
            'Please choose a date in the future', 
            {
            width: '280px',
            position: 'right-top',
            distance: '10px',
            opacity: 1,
          });

    } else if (deltaTime > 0) {
        startBtn.disabled = false;
        let timerId = 0;
        startBtn.addEventListener('click', () => {
            timerId = setInterval(() => {
                const timeDiff = targetDate - new Date();
                console.log(timeDiff)
                interfaceSetUp();
                    if (timeDiff < 1000) {
                    clearInterval(timerId);
                    }
                const time = convertMs(timeDiff);
                updateTimerInterface(time);
            }, 1000);
            startBtn.disabled = true;
        });
    }}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function updateTimerInterface({ days, hours, minutes, seconds }) {
    valuesEl[0].textContent = `${days}`;
    valuesEl[1].textContent = `${hours}`;
    valuesEl[2].textContent = `${minutes}`;
    valuesEl[3].textContent = `${seconds}`;
};

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}
