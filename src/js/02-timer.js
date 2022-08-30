import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import '../css/02-timer.css';

const flatpickrInputEl = document.querySelector('input[type="text"]');
console.log(flatpickrInputEl);
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minsEl = document.querySelector('span[data-minutes]');
const secsEl = document.querySelector('span[data-seconds]');
const startBtn = document.querySelector('button[data-start]');
 
startBtn.addEventListener('click', onStartCountdown);

let targetDate  = 0;
let countdownTimer = 0;

startBtn.disabled = true;

const calendar = flatpickr(flatpickrInputEl, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    targetDate  = selectedDates[0].getTime();
    
    if (countdownTimer)
    {
      clearInterval(countdownTimer);
    }

    if (targetDate < Date.now()) {
      Notiflix.Notify.failure(`Please choose a date in the future`);
    } else {
      startBtn.disabled = false;
    }
  }
});

function onStartCountdown(event) {
  console.log(event);

  startBtn.disabled = true; 

  countdownTimer = setInterval(() => {
    const diffData = targetDate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(diffData);
    console.log(`${days}:${hours}:${minutes}:${seconds}`);

    if (diffData <= 0) {
      clearInterval(countdownTimer);
    }

    updateClockface({ days, hours, minutes, seconds });
  }, 1000);    
}  

function updateClockface({ days, hours, minutes, seconds }) {
  daysEl.textContent = `${days}`;
  hoursEl.textContent = `${hours}`;
  minsEl.textContent = `${minutes}`;
  secsEl.textContent = `${seconds}`;
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};

// додаю класи для оформлення
document.body.classList.add('color-body');

const navButton = document.querySelector('button');
navButton.classList.add('timer-button')