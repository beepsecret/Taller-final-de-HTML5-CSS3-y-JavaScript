function cambiarColor() {
    var cambiar = document.getElementById("color").value;
    if (cambiar == "rojo") {
        uno.style.background = "red";
        tres.style.background = "red";
        cinco.style.background = "red";
        siete.style.background = "red";
        nueve.style.background = "red";
        contenido.style.background = "yellow";
    } else if (cambiar == "verde") {
        dos.style.background = "green";
        cuatro.style.background = "green";
        seis.style.background = "green";
        ocho.style.background = "green";
        diez.style.background = "green";
        contenido.style.background = "purple";
    }
}