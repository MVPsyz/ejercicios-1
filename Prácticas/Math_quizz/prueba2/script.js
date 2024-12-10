let timer; // Tiempo restante
let interval; // Control del temporizador
let correctAnswers = {
    suma: 20,
    resta: 13,
    producto: 30,
    division: 5
};

function start() {
    // Reiniciar el estado del juego
    clearInterval(interval); // Detener cualquier temporizador previo
    document.getElementById('resultado').textContent = '';
    document.getElementById('timer').value = "30"; // Reiniciar el temporizador visualmente
    document.querySelectorAll('input[type="number"]').forEach(input => input.value = '');

    // Iniciar el temporizador
    timer = 30;
    interval = setInterval(countDown, 1000);
}

function countDown() {
    if (timer > 0) {
        timer--; // Reducir el tiempo
        document.getElementById('timer').value = timer; // Actualizar el cuadro del temporizador
    } else {
        end(); // Detener el juego cuando llegue a 0
    }
}

function end() {
    clearInterval(interval); // Detener el temporizador
    document.getElementById('timer').value = "0"; // Asegurarse de mostrar 0
    document.getElementById('resultado').textContent = "Tiempo agotado. Inténtalo de nuevo.";
}

function checkAnswers() {
    let sumaInput = parseInt(document.getElementById('suma').value) || 0;
    let restaInput = parseInt(document.getElementById('resta').value) || 0;
    let productoInput = parseInt(document.getElementById('producto').value) || 0;
    let divisionInput = parseInt(document.getElementById('division').value) || 0;

    if (sumaInput === correctAnswers.suma &&
        restaInput === correctAnswers.resta &&
        productoInput === correctAnswers.producto &&
        divisionInput === correctAnswers.division) {
        clearInterval(interval); // Detener el temporizador si se aciertan todas las respuestas
        document.getElementById('resultado').textContent = "¡Felicitaciones! Todas las respuestas son correctas.";
    }
}
