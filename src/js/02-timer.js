import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const flatpickrInputEl = document.querySelector('input[type="text"]');

flatpickr(flatpickrInputEl, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const daysEl = document.querySelector('span[data-days]');
    const hoursEl = document.querySelector('span[data-hours]');
    const minsEl = document.querySelector('span[data-minutes]');
    const secsEl = document.querySelector('span[data-seconds]');
    const startBtn = document.querySelector('button[data-start]');
        
    startBtn.addEventListener('click', onStartTimerClick);

    function onStartTimerClick(event){
      if (!event.target.disabled) {
        event.target.disabled = true;

            // intervalId = setInterval(getRandomColorBody, 1000);
      };
    
            // if (stopBtn.disabled) {
            //     stopBtn.disabled = false;
            // };

      if (mailValue <= selectedDates[0]) {
        return alert("Please choose a date in the future");
      }
    }
    console.log(selectedDates[0]);                                         
  },  
});