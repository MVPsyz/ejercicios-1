function ejercicio1_do() {
    let res="con do while <br>";
    let i = -10;
    do {
        res = res + i + " ";
        i++;
    } while (i<=10);
    document.getElementById("resp1").innerHTML = res;
}

function ejercicio1_for() {
    let res = "con for <br>";
    for (let index = -10; index <= 10; index++) {
        res = res + index + " ";
    }
    document.getElementById("resp1").innerHTML = res;
}

function ejercicio2_do() {
    let res="con do while <br>";
    let i = 10;
    do {
        res = res + i + " ";
        i--;
    } while (i>=0);
    // comentario
    document.getElementById("resp2").innerHTML = res;
}

function ejercicio2_for() {
    let res = "";
    for (let index = 0; index <= 10; index++) {
        res = index + " " + res;
    }
    res = "con for <br>" + res;
    document.getElementById("resp2").innerHTML = res;
}

function ejercicio3() {
    let res = "";
    let sum = 0;
    for (let i = 3; i < 20; i += 3) {
        res += i + " ";
        sum = sum + i;
    }
    res = res + "<br>Suma: " + sum;
    
    document.getElementById("resp3").innerHTML = res;
}

function ejercicio4() {
    //get value of n1
    let n1 = parseInt(document.getElementById("n1").value);
    // get value of n2
    let n2 = parseInt(document.getElementById("n2").value);
    // init variable for sum
    let sum = 0;
    // loop from 0 to n2
    for (let i = 0; i < n2; i++) {
        
        // add n1 to sum
        sum = sum + n1;
    }
    // show sum in resp4
    document.getElementById("resp4").innerHTML = sum;
}

function ejercicio5() {
    let sum = 0;
    let max = 0;
    let min = 100;
    let res ="Números: ";
    for (let i = 0; i < 5; i++) {
        // número aleatorio 0 a 99
        let n = Math.floor(Math.random()*100);
        // concatenar números
        res += n + " ";
        // sumar números
        sum += n;

        if(n>max){
            max = n;
        }
        if(n<min){
            min=n;
        }
    }
    
    res += "<br>Suma: " + sum;
    res += "<br>Máx: " + max;
    res += "<br>Mín: " + min;
    res += "<br>Media: " + (sum/5);

    document.getElementById("resp5").innerHTML = res;

}

function ejercicio6() {
    let n = 10;
    let res = "";
    for (let n = 10; n < 36; n++) {
        res += n.toString(36);
    }
    document.getElementById("resp6").innerHTML = res;
}

function ejercicio7() {
    let res = "";
    let count = 0;
    let total = 10;
    for (let i = 0; i < total; i++) {
        //elegir letra al azar
        let n = Math.floor(Math.random()*26) + 10;
        let l = n.toString(36).toUpperCase();
        res += l + " ";
        if(l =='A' || l =='E' || l =='I' || l =='O' || l =='U'){
            count++;
        }
    }
    res += "<br>Vocales: " + count;
    res += "<br>Consonantes: " + (total - count);
    document.getElementById("resp7").innerHTML = res;

}