function calcular(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let area = a * b / 2;
    

    let respuesta = "Área del triángulo: " + area;    
    // mostrar el resultado
    document.getElementById("resp").innerText = respuesta;
    
}