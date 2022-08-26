import '../css/01-color.css';

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

startBtn.addEventListener('click', onStartButtonClick);
stopBtn.addEventListener('click', onStopButtonClick);

let intervalId = null;



const navButtonEl = document.createElement('div');
navButtonEl.classList.add('button-center');
body.insertBefore(navButtonEl, body.children[1]);

navButtonEl.append(startBtn, stopBtn);

startBtn.classList.add('start-button');
stopBtn.classList.add('stop-button');

// ставлю рандомний колір на боді 
function getRandomColorBody() {
    return body.style.backgroundColor = getRandomHexColor();     
};

function onStartButtonClick(event) {
    if (event.target.dataset.start) {
        return;
    };
    
    if (!event.target.disabled) {
        event.target.disabled = true;

        intervalId = setInterval(getRandomColorBody, 1000);
    };
    
    if (stopBtn.disabled) {
        stopBtn.disabled = false;
    }
};

function onStopButtonClick(event) {
    if (event.target.dataset.stop) {
        return;
    };
    
    clearInterval(intervalId);

    if (startBtn.disabled) {
        startBtn.disabled = false;
    }

    if (!event.target.disabled) {
        event.target.disabled = true;
    }
    // return body.style.backgroundColor = "";
};

// функція генерації випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// ____________________________________
// const color = {
//     intervalId: null,
//     isActive: false,
//     start() {
//         if (this.isActive) {
//             return;
//         }

//         // const startColor = {};
//         this.isActive = true;
        
//         this.intervalId = setInterval(() => {
//            body.style.backgroundColor = getRandomHexColor();
//         }, 1000);
//     },
//     stop() {
//         clearInterval(this.intervalId);
//         this.isActive = false;
//     }
// };

// starBtn.addEventListener('click', () => {
//    color.start(); 
// });

// stopBtn.addEventListener('click', () => {
//     color.stop();
// });
