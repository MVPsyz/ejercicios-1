
let size = 20;


function grow(){
    size++;
    document.getElementById("cabecera").style.fontSize = size + "px"; 
}

function newYear() {
    let year = parseInt(document.getElementById("year").innerText);
    document.getElementById("year").innerText = ++year;
    if(year%2==0){
        document.getElementById("mensaje").innerText = year + " es par";
    } else {
        document.getElementById("mensaje").innerText = year + " es impar";
    }
}

function thisYear() {
    let today = new Date();
    let thisYear = today.getFullYear();
    let year = parseInt(document.getElementById("year").innerText);

    while (year < thisYear) {
        year++;
        const h1 = document.createElement("h1");
        h1.innerText = "¡Feliz " + year + "!";
        document.getElementById("div1").appendChild(h1);
    }
}