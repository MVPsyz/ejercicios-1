const PLAY_TIME = 30; // constante con el tiempo total de juego
let remaining = NaN; // variable para guardar los segundos que quedan para concluir el juego
let interval; // identificador del temporizador
let games = 0;
let won = 0;

// inicia el temporizador del juego
function start() {
    remaining = PLAY_TIME;

    // TO DO: mostrar tiempo restante
    document.getElementById("restante").innerText = remaining;

    interval = setInterval(countDown, 1000); // crear temporizador, indicar la acción que se ejecuta en cada intervalo y el tiempo en milisegundos de dicho intervalo

    // nuevo juego
    newGame();

    // mostrar/ocultar elementos

    document.getElementById("inicio").style.display = "none";
    document.getElementById("abandonar").style.display = "inline";
    document.getElementById("respSuma").value = "";
    document.getElementById("respSuma").style.display = "inline";
    document.getElementById("respResta").value = "";
    document.getElementById("respResta").style.display = "inline";
    document.getElementById("sumaOk").style.display = "none";
    document.getElementById("restaOk").style.display = "none";
    document.getElementById("sumaKo").style.display = "none";
    document.getElementById("restaKo").style.display = "none";
    document.getElementById("suma").style.display="none";
    document.getElementById("suma").innerText = ""; 
    document.getElementById("resta").style.display="none";
    document.getElementById("resta").innerText = "";
}


// cuenta atrás, función que se ejecuta en cada intervalo
function countDown() {
    remaining--; // restar 1s al tiempo
    if (remaining > 0) {

        // TO DO: mostrar tiempo restante
        document.getElementById("restante").innerText = remaining;



    } else {
        document.getElementById("restante").innerText = 0;
        end("Has perdido!!! Se ha acabado el tiempo"); // finalizado el tiempo
    }
}


// finalizar el temporizador
function end(msg) {
    clearInterval(interval); // parar el temporizador
    remaining = NaN; // limpiamos la variable con el identificador del temporizador

    // TO DO: mostrar mensaje de fin
    document.getElementById("fin").innerText = msg;


    // mostrar/ocultar elementos
    document.getElementById("inicio").style.display = "inline";
    document.getElementById("abandonar").style.display = "none";
    document.getElementById("respSuma").style.display = "none";
    document.getElementById("respResta").style.display = "none";

    let s1 = parseInt(document.getElementById("s1").innerText);
    let s2 = parseInt(document.getElementById("s2").innerText);
    let r1 = parseInt(document.getElementById("r1").innerText);
    let r2 = parseInt(document.getElementById("r2").innerText);
    document.getElementById("suma").style.display="inline";
    document.getElementById("suma").innerText = s1 + s2; 
    document.getElementById("resta").style.display="inline";
    document.getElementById("resta").innerText = r1 - r2;

    document.getElementById("registro").innerHTML = "Jugadas: " + games 
        + "<br>"
        + "Ganadas: " + won;

}

// función para abandonar el juego 
function giveUp() {
    // verificar que hay un temporizador activo
    if (Number.isInteger(remaining)) {
        // finalizar
        end("Te has rendido a falta de " + remaining + " s");
    }
}


// función para crear un nuevo juego
function newGame() {
    games++;
    // suma
    // TO DO: crea dos variables numéricas enteras con valores aleatorios entre 1 y 50 (ambos incluidos) para la suma
    let s1 = Math.ceil(Math.random() * 50);
    let s2 = Math.ceil(Math.random() * 50);

    // resta
    // TO DO: crea una variable numérica entera r1 con un valor aleatorio entre 1 y 100 (ambos incluidos)
    // TO DO: crea una variable numérica entera con un valor aleatorio entre 1 y el valor de r1
    let r1 = Math.ceil(Math.random() * 100);
    let r2 = Math.ceil(Math.random() * r1);

    // producto
    // TO DO: crea dos variables numéricas enteras con valores aleatorios entre 2 y 10 (ambos incluidos) para el producto

    // división
    // TO DO: crea una variable para el divisor con un valor entero aleatorio entre 2 y 10 (ambos incluidos)
    // TO DO: crea una variable temporal para el cociente con un valor entero aleatorio entre 2 y 10 (ambos incluidos)
    // TO DO: crea una variable para el dividendo con el valor divisor * cociente


    // Mostrar operandos para el juego
    // TO DO: muestra los sumandos
    document.getElementById("s1").innerText = s1;
    document.getElementById("s2").innerText = s2;
    
    // TO DO: muestra los operandos para la resta
    document.getElementById("r1").innerText = r1;
    document.getElementById("r2").innerText = r2;
    

    // TO DO: muestra los factores para el producto
    // TO DO: muestra dividendo y divisor

}

// función para validar las respuestas del jugador
function checkAnswers() {
    // salir si el temporizador
    if (!Number.isInteger(remaining)) {
        return;
    }

    // TO DO: definir variables booleanas, una por operación, para guardar si dicha operación se ha resuelto correctamente
    // puedes inicializarlas a falso
    let sumaOk = false;
    let restaOk = false;

    // TO DO: Suma. Obtener los valores de los sumandos, comprobar si la respuesta coincide con la suma
    // TO DO: indicar si la suma es no correcta en la página web
    let s1 = parseInt(document.getElementById("s1").innerText);
    let s2 = parseInt(document.getElementById("s2").innerText);
    let respSuma = parseInt(document.getElementById("respSuma").value);
    if (Number.isInteger(respSuma)) {

        //sumaOk = ((s1+s2) == respSuma);
        if (s1 + s2 == respSuma) {
            sumaOk = true;
            document.getElementById("sumaOk").style.display = "inline";
            document.getElementById("sumaKo").style.display = "none";
        } else {
            document.getElementById("sumaOk").style.display = "none";
            document.getElementById("sumaKo").style.display = "inline";
        }
    }



    // TO DO: Resta. Obtener los valores de los operando, comprobar si la respuesta coincide con la resta
    // TO DO: indicar si la resta es no correcta en la página web
    let r1 = parseInt(document.getElementById("r1").innerText);
    let r2 = parseInt(document.getElementById("r2").innerText);
    let respResta = parseInt(document.getElementById("respResta").value);
    if (Number.isInteger(respSuma)) {
        if (r1 - r2 == respResta) {
            restaOk = true;
            document.getElementById("restaOk").style.display = "inline";
            document.getElementById("restaKo").style.display = "none";
        } else {
            document.getElementById("restaOk").style.display = "none";
            document.getElementById("restaKo").style.display = "inline";
        }
    }

    // TO DO: División. Obtener los valores de los dividendo y divisor, comprobar si la respuesta coincide con la división
    // TO DO: indicar si la división es no correcta en la página web

    // TO DO: Si todas son correctas entonces terminar el juego indicando que el jugador ha ganado la partida
    if (sumaOk && restaOk) {
        won++;
        end("Enhorabuena!!! Has ganado.");
    }
}
