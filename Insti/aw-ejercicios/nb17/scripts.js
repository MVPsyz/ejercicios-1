function ejercicio1() {
    let i = 10;
    let res = "";
    while (i <= 20) {
        res += i + " ";
        i++;
    }

    document.getElementById("resp1").innerHTML = res;
}

function ejercicio2() {
    let i = 2;
    let res = "";
    while (i <= 20) {
        res += i + " ";
        i += 2;
    }
    document.getElementById("resp2").innerHTML = res;
}

function ejercicio3() {
    let n = document.getElementById("number3").value;
    let i = 1;
    let res = "";
    while (i <= 10) {
        res += n + " x " + i + " = " + (n * i) + "<br>";
        i++;
    }
    document.getElementById("resp3").innerHTML = res;

}

function ejercicio4() {
    let tabla = document.getElementById("tablaMultiplicar");
    let n = document.getElementById("number4").value;
    let i = 1;

    while (i <= 10) {

        let fila = tabla.insertRow(i-1);
        let col0 = fila.insertCell(0);
        let col1 = fila.insertCell(1);
        let col2 = fila.insertCell(2);
        let col3 = fila.insertCell(3);
        let col4 = fila.insertCell(4);

        col0.innerHTML = n;
        col1.innerHTML = " x ";
        col2.innerHTML = i;
        col3.innerHTML = " = ";
        col4.innerHTML = (n*i);

        i++;
    }

}