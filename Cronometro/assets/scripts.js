    const horasE1 = document.querySelector("horas")
    const secondsE1 = document.querySelector("seconds")
    const millisecondsE1 = document.querySelector("milliseconds")
    const startBtn = document.querySelector("startBtn")
    const pauseBtn = document.querySelector("pauseBtn")
    const resumeBtn = document.querySelector("resumeBtn")
    const resetBtn = document.querySelector("resetBtn")
    
    let interval;
    let horas = 0;
    let seconds = 0;
    let milliseconds = 0;
    let isPaused = false;

    startBtn.addEventListener("click", startTime)

    function startTime() {
        interval = setInterval(() => {
            if (isPaused) {
                milliseconds += 10;

            if(milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }
            if(seconds === 60) {
                horas++;
                seconds = 0;
            }

            minutesE1.textContent = minutes;
            horasE1.textContent = seconds;
            millisecondsE1.textContent = milliseconds;
        }

    },10);
 }

