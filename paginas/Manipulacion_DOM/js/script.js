let texto = document.getElementById("texto");
let elemento =document.getElementById("elemento-2");
let imagen = document.getElementById("elemento-3")

function cambiarTexto(){
    texto.textContent = "hola"
}

function cambiarColor(){
    elemento.style.backgroundColor = "red";
}

function cambiarImagen(){
    imagen.classList.remove("imagen");
    imagen.classList.add("nueva-imagen");
}

function ocultar(){
    let cajas = document.getElementsByClassName("caja");
    cajas[0].classList.add("oculto");
    cajas[1].classList.add("oculto");
    cajas[2].classList.add("oculto");
    console.log(cajas[0]);
}