import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const delayEl = document.querySelector('input[name="delay"]');
const stepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');

formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  let step = parseInt(delayEl.value);

  for (let i = 1; i <= amountEl.value; i += 1) {
    if (i !== 1) {
      step += parseInt(stepEl.value);
  }
    createPromise(i, step);
  }
  formEl.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setInterval(() => {
    if (shouldResolve) {
      resolve();
    } else {
      reject();
    }}, delay)
  }).then(() => {
    Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
  }).catch(() => {
    Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
  })
}

Notiflix.Notify.init({
  width: '280px',
  position: 'right-top',
  distance: '10px',
  opacity: 1,
})
