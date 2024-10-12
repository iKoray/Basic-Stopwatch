let timer;
let isRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

const displayMilliseconds = document.getElementById('milliseconds');
const displaySeconds = document.getElementById('seconds');
const displayMinutes = document.getElementById('minutes');

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

function updateDisplay() {
    displayMilliseconds.textContent = milliseconds < 10 ? '0' + milliseconds : milliseconds;
    displaySeconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    displayMinutes.textContent = minutes < 10 ? '0' + minutes : minutes;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            milliseconds++;

            if (milliseconds >= 100) {
                milliseconds = 0;
                seconds++;
            }

            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }

            updateDisplay();
        }, 10);
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
}
