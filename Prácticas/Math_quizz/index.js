const PLAY_TIME = 30;
let remaining = NaN;
let interval;

function start() {
    remaining = PLAY_TIME;
    document.getElementById("time-remaining").textContent = remaining;
    document.getElementById("start-btn").disabled = true;
    document.getElementById("giveup-btn").disabled = false;
    interval = setInterval(countDown, 1000);
    newGame();
}

function countDown() {
    remaining--;
    if (remaining > 0) {
        document.getElementById("time-remaining").textContent = remaining;
    } else {
        end("¡Has perdido! Se acabó el tiempo.");
    }
}

function end(msg) {
    clearInterval(interval);
    remaining = NaN;
    document.getElementById("message").textContent = msg;
    document.getElementById("start-btn").disabled = false;
    document.getElementById("giveup-btn").disabled = true;
}

function giveUp() {
    if (Number.isInteger(remaining)) {
        end("¡Te has rendido! Quedaban " + remaining + " segundos.");
    }
}

function newGame() {
    const sumOp1 = randomInt(1, 50);
    const sumOp2 = randomInt(1, 50);
    document.getElementById("sum-op1").textContent = sumOp1;
    document.getElementById("sum-op2").textContent = sumOp2;

    const subOp1 = randomInt(50, 100);
    const subOp2 = randomInt(1, subOp1);
    document.getElementById("sub-op1").textContent = subOp1;
    document.getElementById("sub-op2").textContent = subOp2;

    const mulOp1 = randomInt(2, 10);
    const mulOp2 = randomInt(2, 10);
    document.getElementById("mul-op1").textContent = mulOp1;
    document.getElementById("mul-op2").textContent = mulOp2;

    const divOp2 = randomInt(2, 10);
    const divOp1 = divOp2 * randomInt(2, 10);
    document.getElementById("div-op1").textContent = divOp1;
    document.getElementById("div-op2").textContent = divOp2;
}

function checkAnswers() {
    if (!Number.isInteger(remaining)) return;

    const sumCorrect = 
        parseInt(document.getElementById("sum-op1").textContent) +
        parseInt(document.getElementById("sum-op2").textContent) ===
        parseInt(document.getElementById("sum-answer").value || 0);

    const subCorrect = 
        parseInt(document.getElementById("sub-op1").textContent) -
        parseInt(document.getElementById("sub-op2").textContent) ===
        parseInt(document.getElementById("sub-answer").value || 0);

    const mulCorrect = 
        parseInt(document.getElementById("mul-op1").textContent) *
        parseInt(document.getElementById("mul-op2").textContent) ===
        parseInt(document.getElementById("mul-answer").value || 0);

    const divCorrect = 
        parseInt(document.getElementById("div-op1").textContent) /
        parseInt(document.getElementById("div-op2").textContent) ===
        parseInt(document.getElementById("div-answer").value || 0);

    if (sumCorrect && subCorrect && mulCorrect && divCorrect) {
        end("¡Felicidades! Has ganado con " + remaining + " segundos restantes.");
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
