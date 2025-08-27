const botonColores = document.getElementById("boton-colores")
const botonFuentes = document.getElementById("boton-fuentes")
const body = document.querySelector('body')
const letrasColorPrincipal = document.querySelectorAll('.letras-color-principal')
const fondoColorGradiente = document.querySelectorAll('.fondo-color-gradiente')
const bordesColor = document.querySelectorAll('.bordes-color')

function cambiarTema(){
    body.classList.toggle('body-color-2')
    for(elemento of letrasColorPrincipal){
        elemento.classList.toggle('letras-color-2')
    }
    for(elemento of fondoColorGradiente){
        elemento.classList.toggle('fondo-color-2')
    }
    for(elemento of bordesColor){
        elemento.classList.toggle('bordes-color-2')
    }
}

botonColores.addEventListener("click",cambiarTema)