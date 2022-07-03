function cambiarColor() {
    var color = document.getElementById("color").value;
    console.log(color);
    if (color == "Azul") {
        contenido.style.background = "blue";
    } else if (color == "Verde") {
        contenido.style.background = "green";
    } else if (color == "Morado") {
        contenido.style.background = "purple";
    }
}

const bloque = document.querySelectorAll('.bloque');
const h2 = document.querySelectorAll('.h2');

h2.forEach((cadaH2, i) => {
    h2[i].addEventListener('click', () => {
        bloque.forEach((cadaBloque, i) => {
            bloque[i].classList.remove('activo')
        })
        bloque[i].classList.add('activo')
    })
})