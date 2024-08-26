    const horasE1 = document.querySelector("horas")
    const minutosE1 = document.querySelector("minutos")
    const segundosE1 = document.querySelector("segundos")
    const startBtn = document.querySelector("startBtn")
    const pauseBtn = document.querySelector("pauseBtn")
    const resumeBtn = document.querySelector("resumeBtn")
    const resetBtn = document.querySelector("resetBtn")
    
    let interval;
    let horas = 0;
    let minutos = 0;
    let segundos = 0;
    let isPaused = false;

    startBtn.addEventListener("click", startTime)

    function startTime() {
        interval = setInterval(() => {
            if (isPaused) {
                segundos += 10;

            if(segundos === 1000) {
                minutos++;
                segundos = 0;
            }
            if(minutos === 60) {
                horas++;
                minutos = 0;
            }

            horasE1.textContent = horas;
            horasE1.textContent = segundos;
            segundosE1.textContent = segundos;
        }

    },10);
 }

