function triangulo() {
    let lado = parseInt(document.getElementById("n1").value);

    let res = "";

    for (let i = 0; i < lado; i++) {
        for (let j = i; j < lado; j++) {
            res = res +  "* ";
        }
        res = res + "<br>";
    }

    document.getElementById("resp1").innerHTML = res;
}

function triangulo2() {
    let lado = parseInt(document.getElementById("n2").value);

    let res = "";

    for (let i = 0; i < lado; i++) {
        for (let j = 0; j <= i; j++) {
            res = res + "* ";
        }
        res = res + "<br>";
    }

    document.getElementById("resp2").innerHTML = res;
}