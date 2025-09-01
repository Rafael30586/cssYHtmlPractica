const dado = document.getElementById('dado')
const botonLanzamiento = document.getElementById('boton-lanzamiento')
let numeroDado
const sonido = new Audio('sonido.wav')

function asignarNumero(){
    numeroDado = Math.floor(Math.random() * 6) + 1
}

function lanzarDado(){
    asignarNumero()
    switch(numeroDado){
        case 1: dado.classList.remove('dado-1')
        dado.classList.remove('dado-2')
        dado.classList.remove('dado-3')
        dado.classList.remove('dado-4')
        dado.classList.remove('dado-5')
        dado.classList.remove('dado-6')
        dado.classList.add('dado-1');break;
        case 2:  dado.classList.remove('dado-1')
        dado.classList.remove('dado-2')
        dado.classList.remove('dado-3')
        dado.classList.remove('dado-4')
        dado.classList.remove('dado-5')
        dado.classList.remove('dado-6')
        dado.classList.add('dado-2');break;
        case 3: dado.classList.remove('dado-1')
        dado.classList.remove('dado-2')
        dado.classList.remove('dado-3')
        dado.classList.remove('dado-4')
        dado.classList.remove('dado-5')
        dado.classList.remove('dado-6')
        dado.classList.add('dado-3');break;
        case 4:  dado.classList.remove('dado-1')
        dado.classList.remove('dado-2')
        dado.classList.remove('dado-3')
        dado.classList.remove('dado-4')
        dado.classList.remove('dado-5')
        dado.classList.remove('dado-6')
        dado.classList.add('dado-4');break;
        case 5:  dado.classList.remove('dado-1')
        dado.classList.remove('dado-2')
        dado.classList.remove('dado-3')
        dado.classList.remove('dado-4')
        dado.classList.remove('dado-5')
        dado.classList.remove('dado-6')
        dado.classList.add('dado-5');break;
        case 6: dado.classList.remove('dado-1')
        dado.classList.remove('dado-2')
        dado.classList.remove('dado-3')
        dado.classList.remove('dado-4')
        dado.classList.remove('dado-5')
        dado.classList.remove('dado-6')
        dado.classList.add('dado-6');break;
    }
    sonido.currentTime = 0
    sonido.play()
}

botonLanzamiento.addEventListener('click',lanzarDado)