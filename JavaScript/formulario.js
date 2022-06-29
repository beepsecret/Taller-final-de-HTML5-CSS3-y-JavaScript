function mostrar() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;
    var alerta = "";
    if (nombre.length != 0) {
        console.log(nombre);
    } else {
        alerta += "\nEl nombre es obligatorio";
    }
    if (correo.length != 0) {
        console.log(correo);
    } else {
        alerta += "\nEl correo es obligatorio";
    }
    if (asunto.length != 0) {
        console.log(asunto);
    } else {
        alerta += "\nEl asunto es obligatorio";
    }
    if (mensaje.length != 0) {
        console.log(mensaje);
    } else {
        alerta += "\nEl mensaje es obligatorio";
    }
    if (alerta.length != 0) {
        alert(alerta);
    }
}

