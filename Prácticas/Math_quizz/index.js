let timer; // identificar el temporizador fuera de la función startQuiz

document.getElementById('start-quiz').addEventListener('click', startQuiz);

function startQuiz() {
    if (timer) {
        clearInterval(timer); // detener cualquier temporizador previo
    }

    let timeLeft = 30;
    document.getElementById('time-left').value = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time-left').value = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('¡Se acabó el tiempo!');
        }
    }, 1000);

    const randomNumbers = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10) + 1);
    document.getElementById('num1').textContent = randomNumbers[0];
    document.getElementById('num2').textContent = randomNumbers[1];
    document.getElementById('num3').textContent = randomNumbers[2];
    document.getElementById('num4').textContent = randomNumbers[3];
    document.getElementById('num5').textContent = randomNumbers[4];
    document.getElementById('num6').textContent = randomNumbers[5];
    document.getElementById('num7').textContent = randomNumbers[6];
    document.getElementById('num8').textContent = randomNumbers[7];
}
