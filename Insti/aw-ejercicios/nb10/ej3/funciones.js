function ejercicio(){
    let nombre = document.getElementById("nombre").value;
    document.getElementById("r1").innerHTML = nombre.toLowerCase();  
    let apellido = document.getElementById("apellido").value;
    document.getElementById("r2").innerHTML = apellido.toUpperCase();  
    document.getElementById("r3").innerHTML = nombre + " tiene " + nombre.length + " letras";
    let resp4 = nombre.replaceAll("A","-")
                      .replaceAll("E","-")
                      .replaceAll("I","-")
                      .replaceAll("O","-")
                      .replaceAll("U","-")
                      .replaceAll("a","-")
                      .replaceAll("e","-")
                      .replaceAll("i","-")
                      .replaceAll("o","-")
                      .replaceAll("u","-")
                      .replaceAll("Á","-")
                      .replaceAll("É","-")
                      .replaceAll("Í","-")
                      .replaceAll("Ó","-")
                      .replaceAll("Ú","-")
                      .replaceAll("á","-")
                      .replaceAll("é","-")
                      .replaceAll("í","-")
                      .replaceAll("ó","-")
                      .replaceAll("ú","-");

    document.getElementById("r4").innerHTML = resp4;
    document.getElementById("r5").innerHTML = "Tu nombre es compuesto: " + nombre.includes(" ");
}

