function calcular(){
    
    // acceder a los valores
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;    

    // calcular el área
    let respuesta = b * a / 2;
        
    // mostrar el resultado
    document.getElementById("result").innerText = respuesta;

}