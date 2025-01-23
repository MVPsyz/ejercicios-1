function ejercicio1() {
    let n1 = document.getElementById("number1").value;

    let res = "";
    for (let i = 0; i < n1; i++) {
        let alea = Math.ceil(Math.random() * 20);
        res += alea + ", ";
    }

    document.getElementById("resp1").innerHTML = res;
}
