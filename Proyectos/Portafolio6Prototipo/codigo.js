const botonColores = document.getElementById("boton-colores")
const botonFuentes = document.getElementById("boton-fuentes")
const body = document.querySelector('body')
const botonTema = document.querySelectorAll('.boton-tema')
const letrasColorPrincipal = document.querySelectorAll('.letras-color-principal')
const texto = document.querySelectorAll('.texto')
const fondoColorGradiente = document.querySelectorAll('.fondo-color-gradiente')
const bordesColor = document.querySelectorAll('.bordes-color')
const letrasFondo = document.querySelectorAll('.letras-fondo')
const proyecto = document.querySelectorAll('.proyecto')
const enlace = document.querySelectorAll('.enlace')
const enlaceNumerado = document.querySelectorAll('.enlace-numerado')

function cambiarTema(){
    body.classList.toggle('body-color-2')
    for(elemento of botonTema){
        elemento.classList.toggle('boton-tema-estilo-2')
    }
    for(elemento of letrasColorPrincipal){
        elemento.classList.toggle('letras-color-2')
    }
    for(elemento of texto){
        elemento.classList.toggle('texto-estilo-2')
    }
    for(elemento of fondoColorGradiente){
        elemento.classList.toggle('fondo-color-2')
    }
    for(elemento of bordesColor){
        elemento.classList.toggle('bordes-color-2')
        //elemento.classList.toggle('bordes-color-1')
    }
    for(elemento of letrasFondo){
        elemento.classList.toggle('letras-fondo-2')
    }
    for(elemento of proyecto){
        elemento.classList.toggle('proyecto-estilo-2');
    }
    for(elemento of enlaceNumerado){
        elemento.classList.toggle('enlace-numerado-estilo-2')
    }
    for(elemento of enlace){
        elemento.classList.toggle('enlace-estilo-2')
    }
}

botonColores.addEventListener("click",cambiarTema)