const botonColores = document.getElementById("boton-colores")
const botonFuentes = document.getElementById("boton-fuentes")
const body = document.querySelector('body')
const botonTema = document.querySelectorAll('.boton-tema')
const nombreCompleto = document.getElementById('nombre-completo')
const fotoPersonal = document.getElementById('foto-personal')
const letrasColorPrincipal = document.querySelectorAll('.letras-color-principal')
const texto = document.querySelectorAll('.texto')
const fondoColorGradiente = document.querySelectorAll('.fondo-color-gradiente')
const bordesColor = document.querySelectorAll('.bordes-color')
const letrasFondo = document.querySelectorAll('.letras-fondo')
const proyecto = document.querySelectorAll('.proyecto')
const enlace = document.querySelectorAll('.enlace')
const enlaceNumerado = document.querySelectorAll('.enlace-numerado')
const sonidoBoton = new Audio('sonido-boton.wav')
const estirarFoto = new Audio('estirar-foto.wav')

let temaFuente = 0

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
    sonidoBoton.currentTime = 0
    sonidoBoton.play()
}

function cambiarFuente(){
    if(temaFuente === 0){
        body.classList.remove('letra-orbitron')
        body.classList.add('letra-roboto')
        nombreCompleto.classList.add('nombre-completo-roboto')
        temaFuente++
    }else if(temaFuente === 1){
        body.classList.remove('letra-roboto')
        nombreCompleto.classList.remove('nombre-completo-roboto')
        body.classList.add('letra-quintessential')
        nombreCompleto.classList.add('nombre-completo-quintessential')
        temaFuente++
    }
    else if(temaFuente === 2){
        body.classList.remove('letra-quintessential')
        nombreCompleto.classList.remove('nombre-completo-quintessential')
        body.classList.add('letra-parisienne')
        nombreCompleto.classList.add('nombre-completo-parisienne')
        temaFuente++
    }else if(temaFuente === 3){
        body.classList.remove('letra-parisienne')
        nombreCompleto.classList.remove('nombre-completo-parisienne')
        body.classList.add('letra-orbitron')
        temaFuente = 0
    }
    sonidoBoton.currentTime = 0
    sonidoBoton.play()
    // console.log('Tema fuente: ',temaFuente)
}

function aparecerFoto(){
    fotoPersonal.classList.add('estirar-foto')
    estirarFoto.currentTime = 0
    estirarFoto.play()
}

function soltarFoto(){
    fotoPersonal.classList.remove('estirar-foto')
}


botonColores.addEventListener("click",cambiarTema)
botonFuentes.addEventListener("click",cambiarFuente)
fotoPersonal.addEventListener("mouseover",aparecerFoto)
fotoPersonal.addEventListener('mouseout',soltarFoto)