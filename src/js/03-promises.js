import Notiflix from 'notiflix';
import '../css/03-promises.css'

const formEl = document.querySelector('form');

formEl.addEventListener('submit', onPromisesButtonSubmit);

function onPromisesButtonSubmit(event) {
  event.preventDefault();

  let delayFirstValue = +formEl.delay.value;
  console.log('delayValue:', delayFirstValue);
  let delayStepValue = +formEl.step.value;
  console.log('delayStepValue:', delayStepValue);
  let amountValue = +formEl.amount.value;
  console.log('amountValue:', amountValue);
   
  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;    
      
      setTimeout(() => {
        
        if (shouldResolve) {
          resolve({ position, delay });
            
        } else {
          reject({ position, delay });
        }
      }, delay)
    })
  }

  let promises = [];
  let delay = delayFirstValue;
  for (let i = 1; i <= amountValue; i += 1) {
    promises[i] = createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${delay}ms`);
      });  
    delay += delayStepValue;
  }
}

// додаю класи для оформлення
const navInputValue = document.querySelectorAll('input');
// console.log(navInputValue);
navInputValue.forEach((el) => {
  el.classList.add('backlight-frame')
});

const navButton = document.querySelector('button');
navButton.classList.add('color-button')