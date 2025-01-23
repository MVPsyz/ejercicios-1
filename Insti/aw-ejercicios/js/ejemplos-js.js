function changeSize() {
    let size = document.getElementById("fsize").value;

    document.getElementById("cabecera").style.fontSize = size +"px";

}

function changeColor() {
    let r = document.getElementById("red").value;
    let g = document.getElementById("green").value;
    let b = document.getElementById("blue").value;

    let rgb = "rgb(" + r + "," + g + "," + b + ")"; //"rgb(255, 255, 255)"

    document.getElementById("cabecera").style.color = rgb;
}

function hide() {
    document.getElementById("cabecera").style.visibility="hidden";
    document.getElementById("btnShow").style.display="inline";
    document.getElementById("btnHide").style.display="none";
}

function show() {
    document.getElementById("cabecera").style.visibility="visible";
    document.getElementById("btnShow").style.display="none";
    document.getElementById("btnHide").style.display="inline";
}

