function calc(operacion) {

    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let r = 0;
    let res = "";
    switch (operacion) {
        case 'suma':
            r = n1 + n2;
            res = n1 + " + " + n2 + " = " + r;
            break;
        
        case 'resta':
            r = n1 - n2;
            res = n1 + " - " + n2 + " = " + r;
            break; 

        
      case 'producto':
            r = n1 * n2;
            res = n1 + " * " + n2 + " = " + r;
            break; 
                
      case 'division':
        r = n1 / n2;
        res = n1 + " / " + n2 + " = " + r;
        break; 
        

        default:
            r = NaN;
            res = "Operación no válida"
            break;
    }

    document.getElementById("resultado").innerText = r;
    document.getElementById("realizadas").innerHTML += res + "<br>";
}

function limpiar() {
    document.getElementById("n1").value = 0;
    document.getElementById("n2").value = 0;
    document.getElementById("resultado").innerText = 0;
}

function limpiarTodo() {
    limpiar();
    document.getElementById("realizadas").innerHTML = "";

}