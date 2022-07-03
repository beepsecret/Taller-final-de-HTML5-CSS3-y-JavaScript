function cambiarColor() {
    var cambiar = document.getElementById("color").value;
    var par = document.getElementById("dos").style.background;
    var impar = document.getElementById("uno").style.background;
    if (cambiar == "rojo") {
        if (par == "green") {
            dos.style.background = "#24303c";
            cuatro.style.background = "#24303c";
            seis.style.background = "#24303c";
            ocho.style.background = "#24303c";
            diez.style.background = "#24303c";
            contenido.style.background = "#24303c";
        }
        
        uno.style.background = "red";
        tres.style.background = "red";
        cinco.style.background = "red";
        siete.style.background = "red";
        nueve.style.background = "red";
        contenido.style.background = "red";
    } else if (cambiar == "verde") {
        if (impar == "red") {
            uno.style.background = "#24303c";
            tres.style.background = "#24303c";
            cinco.style.background = "#24303c";
            siete.style.background = "#24303c";
            nueve.style.background = "#24303c";
            contenido.style.background = "#24303c";
        }
        dos.style.background = "green";
        cuatro.style.background = "green";
        seis.style.background = "green";
        ocho.style.background = "green";
        diez.style.background = "green";
        contenido.style.background = "green";
    }
}