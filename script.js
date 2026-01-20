let timer = null;
let time = 0;
let running = false;


function updateDisplay() {
    let milliseconds = time % 100;
    let totalSeconds = Math.floor(time / 100);
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);

    document.getElementById("display").textContent =
        `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')} : ${String(milliseconds).padStart(2, '0')}`;
}


function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            time++;
            updateDisplay();
        }, 10);
    }
}


function pauseTimer() {
    running = false;
    clearInterval(timer);
}


function resetTimer() {
    pauseTimer();
    time = 0;
    updateDisplay();
    document.getElementById("laps").innerHTML = "";
}

